import "./AudioPlayer.css"
import React from "react";
import *as S  from "./AudioPlayerStyle"
function AudioPlayer ({loading}) {
    return (
        <S.Bar>
       <S.BarContent> 
        <S.BarPlayerProgress></S.BarPlayerProgress>
         <S.BarPlayerBlock>
          <S.BarPlayerPlayer>
              <S.PlayerControls>
               <S.PlayerBtnPrev>
                  <svg className="player__btn-prev-svg" alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                  </svg>
                  </S.PlayerBtnPrev>
                <div className="player__btn-play _btn">
                  <svg className="player__btn-play-svg" alt="play">
                    <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                  </svg>
                </div>
                <div className="player__btn-next">
                  <svg className="player__btn-next-svg" alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  </svg>
                </div>
                <div className="player__btn-repeat _btn-icon">
                  <svg className="player__btn-repeat-svg" alt="repeat">
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                  </svg>
                </div>
                <div className="player__btn-shuffle _btn-icon">
                  <svg className="player__btn-shuffle-svg" alt="shuffle">
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                  </svg>
                </div>
                </S.PlayerControls>

              <div className="player__track-play track-play">
                <div className="track-play__contain">
                  <div className="track-play__image">
                    <svg className="track-play__svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  {loading ? (
                  <div className="track-play__author">
                 
                    <a className="track-play__author-link" href="http://">
                      Ты та...
                    </a>
                    
                  </div>
                  ) :(
                    <S.SkeletonPlayer></S.SkeletonPlayer>
                  )}
                  {loading ? (
                  <div className="track-play__album">
                    <a className="track-play__album-link" href="http://">
                      Баста
                    </a>
                  </div>
                  ) :(
                    <S.SkeletonPlayer></S.SkeletonPlayer>
                  )}
                </div>

                <div className="track-play__like-dis">
                  <div className="track-play__like _btn-icon">
                    <svg className="track-play__like-svg" alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                  </div>
                  <div className="track-play__dislike _btn-icon">
                    <svg className="track-play__dislike-svg" alt="dislike">
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                    </svg>
                  </div>
                </div>
              </div>
              </S.BarPlayerPlayer>
        
            <div className="bar__volume-block volume">
              <div className="volume__content">
                <div className="volume__image">
                  <svg className="volume__svg" alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                  </svg>
                </div>
                <div className="volume__progress _btn">
                  <input
                    className="volume__progress-line _btn"
                    type="range"
                    name="range"
                  />
                </div>
              </div>
            </div>
           
            </S.BarPlayerBlock>
          
          </S.BarContent>
      </S.Bar>
    )
}
export default AudioPlayer;