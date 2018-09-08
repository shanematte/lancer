import styled from 'styled-components';


export const FilterWrapper = styled.ul`
  margin: 0;
  font-family: ${p => p.theme.fontMain};
`;
export const FilterItem = styled.li`
  position: relative;
  color: ${p => p.theme.colorActive};
  list-style: none;

  &:first-child {
    color: ${p => p.theme.colorMain};
    font-weight: bold;
  }
`;
export const Link = styled.span`
  line-height: 30px;
  cursor: pointer;
`;
export const Counter = styled.span`
  position: absolute;
  top: 0;
  right: -10px;
  color: ${p => p.theme.colorGray};
  font-weight: normal;
  line-height: 30px;
`;
