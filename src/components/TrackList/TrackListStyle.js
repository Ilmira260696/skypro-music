import styled from "styled-components";

export const CenterblockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`;

export const CenterblockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const ContentPlaylist = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
  height: 500px;
  &::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 1px 1px 10px #f3faf7;
    background-color: #909090;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb:active {
    background-color: #4b4949;
  }
  &::-webkit-scrollbar-button:vertical:start:decrement {
    background-color: #909090;
  }
`;

export const PlaylistItem = styled.li`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;
