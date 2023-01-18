import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  position: relative;

  input {
    width: 100%;
    padding: 1rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-size: 1rem;
    background-color: var(--graylight);

  }
`

export const BaseButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: var(--base-color);
  color: white;
  cursor: pointer;
  transition: all 1s ease-out;
  
  position: absolute;
  top: 6px;
  right: 5px;

  &:hover {
    background-color: var(--base-color-dark);
  }
`


