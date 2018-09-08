import styled from 'styled-components';
import { cssIconSelect } from 'features/common/icons';

export default styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;

  padding: 5px 20px;

  color: ${p => p.theme.colorGray};
  ${cssIconSelect};
  border: none;
  cursor: pointer;

  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;
