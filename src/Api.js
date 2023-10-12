export async function GetAllTracks() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/",
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function RegistrationApi ({email, password}) {
  const response = await fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        username: email,
      }),
      headers: {
          // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
          "content-type": "application/json",
        },
        }
        );
        if (response.status === 400) {
          const error = await response.json();
          throw new Error(JSON.stringify(error));
        } else if (response.status === 500) {
          throw new Error("Сервер сломался");
        }
      
        const data = await response.json();
        return data;
       
      }
    
    
  
  
      export async function LoginApi ({email, password}) {
        const response = await fetch("https://skypro-music-api.skyeng.tech/user/login/", {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
            "content-type": "application/json",
          },
        });
        if (response.status === 400 || response.status === 401) {
          const error = await response.json();
          throw new Error(JSON.stringify(error));
        } else if (response.status === 500) {
          throw new Error("Сервер сломался");
        }
      
        const data = await response.json();
        return data;
      }