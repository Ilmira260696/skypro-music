import styled from 'styled-components'

export const SidebarItem = styled.div `
width: 250px;
height: 150px;

&:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const SidebarLink = styled.a `
width: 100%;
height: 100%;
`;

export const SidebarImg = styled.img `
width: 100%;
height: auto;
`;
export const SkeletonSidebar = styled.div `
width: 250px;
height: 150px;
animation: blink 2s infinite alternate; 
background-color: #4e4e4e;
`;
