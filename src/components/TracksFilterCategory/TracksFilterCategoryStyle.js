import styled from 'styled-components'

export const FilterCategoryName = styled.div `
display: flex;
flex-direction: column;
position: relative;
`;

export const FilterButton = styled.button `
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid #ffffff;
border-radius: 60px;
padding: 6px 20px;
background: none;
color: #ffffff;

&:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }

`;

export const FilterButtonActive = styled(FilterButton) `
border-color: #ad61ff;
color: #ad61ff;
`;

export const FilterButtonText = styled (FilterButton) `
&:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }

&:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
`;

export const FilterCategoryMenu = styled.div `
max-height: 305px;
width: 248px;
display: inline-flex;
padding: 34px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
border-radius: 12px;
background: #313131;
position: absolute;
top: 49px;
z-index: 2;
`;

export const FilterList = styled.ul `
width: 180px;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 28px;
color: #fff;
font-family: "StratosSkyeng", sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 120% */
overflow-y: auto;

&::-webkit-scrollbar {
    width: 4px;   
 }

 &::-webkit-scrollbar-track {
    background-color: #4b4949;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: white;
    height: 65px;
  
  }
`;

export const selectedFilterCount = styled.div`
  background-color: #ad61ff;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -8px;
  top: -8px;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px; /* 100% */
`;
