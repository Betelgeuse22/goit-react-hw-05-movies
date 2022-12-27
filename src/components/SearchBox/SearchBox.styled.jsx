import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchBtn = styled.button`
  color: black;
  padding: 8px;
  background-color: #babdba;
  border-radius: 20px;
  border-style: none;
  :last-child {
    margin-left: 20px;
  }

  :hover {
    color: rgb(52, 26, 195);
    background-color: #848684;
  }
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 20px;

  :hover {
    border-color: rgb(52, 26, 195);
  }
`;
