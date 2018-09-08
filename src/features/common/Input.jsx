import styled from 'styled-components';


const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fontSecond};

  &::placeholder {
    text-overflow: ellipsis;
    opacity: 1;
    transition: opacity 0.2s;
  }
  &:focus::placeholder {
    opacity: 0;
  }
`;
export default Input;

