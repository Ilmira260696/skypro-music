
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { setAuth } from '../store/slices/AuthorizationSlice';


const baseQueryWithReauth = async (args, api, extraOptions) => {
    
    const baseQuery = fetchBaseQuery({
        baseUrl: " https://skypro-music-api.skyeng.tech",
        // prepareHeaders - это часть api fetchBaseQuery, которая позволяет сформировать общие заголовки для всех запросов
        prepareHeaders: (headers, { getState }) => {
          // Мы достаем из стора access токен и прикрепляем его ко всем запросам, чтобы не пробрасывать токен в каждый запрос вручную
          // Мы находимся внутри callback функции, которая вызывается непосредственно перед каждым запросом,
          // таким образом все запросы всегда используют актуальный acces токен из redux стора
          const token = getState().auth.access;
      
      console.debug("Использую токен из стора", { token });

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  });

   // Делаем запрос
   const result = await baseQuery(args, api, extraOptions);
   console.debug("Результат первого запроса", { result });
 
   // Если запрос выполнился не с 401 кодом, то все хорошо, просто отдаем результат запроса наружу
   if (result?.error?.status !== 401) {
     return result;
   }
 
   // Ниже обрабатываем 401 код
 
   // Функция которая отчищает данные о юзере в сторе и отправляет на страницу логина
   const forceLogout = () => {
     console.debug("Принудительная авторизация!");
     api.dispatch(setAuth(null));
    //  window.location.navigate("/login");
   };
    // Функция getState возвращает состояние redux стейта целиком, ее нам предоставляет rtk query, она прилетает параметром запроса в функцию
  const { auth } = api.getState();
  console.debug("Данные пользователя в сторе", { auth });
  // Если в сторе нет refresh токена, то помочь пользователю мы уже ничем не сможем, разлогиниваем его и отправляем авторизоваться руками
  if (!auth.refresh) {
    return forceLogout();
  }

  // Делаем запрос за новым access токеном в API обновления токена
  const refreshToken = await baseQuery(
    {
      url: "/user/token/refresh/",
      method: "POST",
      body: {
        refresh: auth.refresh,
      },
    },
    api,
    extraOptions
  );

  console.debug("Результат запроса на обновление токена", { refreshToken });

  // Если api обновления токена не вернуло новый access токен, то ничего сделать мы не можем, разлогиниваем юзера
  // Апи может не вернуть новый access токен по разным причинам, например у нас неверный refresh токен или refresh токен протух (обычно refresh токены не протухаю, но бывает и такое)
  if (!refreshToken.data.access) {
    return forceLogout();
  }

  // Мы наконец получили новый access токен, сохраняем его в стор, чтобы последующие запросы могли его использовать внутри prepareHeaders
  api.dispatch(setAuth({ ...auth, access: refreshToken.data.access }));

  // Делаем повторный запрос с теми же параметрами что и исходный,
  // но помним, что повторный запрос произойдет уже с новым токеном,
  // потому что для него вызовется callback prepareHeaders, который получит актуальный access токен из стора,
  // который мы положили в стор строчкой выше
  const retryResult = await baseQuery(args, api, extraOptions);

  // Если повторный запрос выполнился с 401 кодом, то что-то совсем пошло не так, отправляем на принудительную ручную авторизацию
  if (retryResult?.error?.status === 401) {
    return forceLogout();
  }
  return retryResult;
};

export const  tracksQuery = createApi({
  reducerPath: "tracksQuery ",
  // Используем кастомную baseQueryWithReauth вместо стандартной fetchBaseQuery
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Tracks', 'Favorites'],
 baseQuery:baseQueryWithReauth,
  endpoints: (build) => ({
    getTrackAll: build.query({
      query: () => "/catalog/track/all/",
      providesTags:(result) =>
      result ? [
        ...result.map(({id})=>({type:"Tracks", id})),
        {type:"Tracks", id:"LIST"},
      ] : [{type:"Tracks", id:"LIST"}],
      getFavoritesAllTracks: build.query({
        query: () => ({
          url: "/catalog/track/favorite/all/",
          providesTags:(result) =>
          result ? [
            ...result.map(({id})=>({type:"Tracks", id})),
            {type:"Tracks", id:"LIST"},
          ] : [{type:"Tracks", id:"LIST"}],
        }),
        setLike:build.mutation({
          query:(track) =>({
            url: `catalog/track/${track.id}/favorite/`,
            method: "POST",         
          }),
          invalidatesTags: [
            {type:"Favorites", id:"LIST"},
         {type:"Tracks", id:"LIST"},
          ]
        }),

        setDislike:build.mutation ({
          query: (track)=> ({
            url: `catalog/track/${track.id}/favorite/`,
            method: "DELETE",         
          }),

          invalidatesTags: [
            {type:"Favorites", id:"LIST"},
         {type:"Tracks", id:"LIST"},
          ]
        }),
      })
        })
      })
    })
      




  
export const { useGetTrackAllQuery,useGetFavoritesAllTracksQuery,useSetLikeMutation, useSetDislikeMutation } = tracksQuery;