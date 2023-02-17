import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  position: relative;

  input {
    width: 100%;
    padding: 1rem;
    border: 1px solid ${props => props.theme.border};
    border-radius: 8px;
    font-size: 1rem;
    background-color: ${props => props.theme.gray100};

  }
`

export const BaseButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${props => props.theme.red};
  color: white;
  cursor: pointer;
  transition: all 1s;
  
  position: absolute;
  top: 6px;
  right: 5px;

  &:hover {
    background-color: ${props => props.theme.basedark};
  }
`


