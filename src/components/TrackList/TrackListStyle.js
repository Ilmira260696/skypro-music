import { styled, keyframes } from "styled-components";

export const animation = keyframes`{
  from {
    opacity: 1;
  }

  to {
    opacity: 0.2;
  }
}`;

  export const PlaylistItem = styled.div `
  width: 100%;
  display: block;
  margin-bottom: 12px;
  `;

  export const PlaylistTrack = styled.div `
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  `;

  export const TrackTitle = styled.div `
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 447px;
  `;

  export const TrackTitleImg = styled (TrackTitle) `
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
  `;

  export const TrackTitleSvg = styled (TrackTitle) `
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
  `;

  export const TrackListTitleLink = styled.div `
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  `;

  export const TrackTitleSpan = styled.span `
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
  `;

  export const TrackAuthor = styled.div `
  width: 321px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  `;


  export const TrackAuthorLink = styled (TrackAuthor) `
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
  `;

  export const TrackAlbum = styled.div `
  width: 245px;
  `;

  export const TrackAlbumLink = styled (TrackAlbum) `
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  `;

  export const TrackTimeSvg = styled.svg `
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
  `;

  export const TrackTimeText = styled.span `
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
  `;

  export const ContentPlaylist = styled.ul `
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
  `;

  export const Skeleton = styled.div `
  animation: blink 2s infinite alternate; 
  background-color: #4e4e4e;
  height: 19px;
  width: 356px;
  padding-right: 60px;
  `;

  export const SkeletonAuthor = styled (Skeleton) `
  width: 271px;
  height: 19px;
  padding-right: 286px;
  `;

  export const SkeletonAlbum = styled(Skeleton) `
  width: 100px;
  padding-right: 264px; 
  `;

