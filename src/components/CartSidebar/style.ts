import styled from "styled-components";

export const CartSidebar = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 0;

  width: 400px;
  height: 100%;
 
  background-color: var(--white);

  z-index: 100;
  box-shadow: -1px 1px 5px 1px var(--rgba);
`

export const CartTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--red);
  
  span {
    font-size: 1.25rem;
    padding: 1rem;
    color: var(--white);
  }
`