import styled from "styled-components";

export const CartContainer = styled.div``

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: transparent;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    color: ${props => props.theme.red};
  }
`

export const CartIcon = styled.div`
  
`

export const CartText = styled.div`
  font-size: 14px;
  font-weight: bold;
`
