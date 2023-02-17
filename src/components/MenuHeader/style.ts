import styled from 'styled-components';

export const MenuHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  border-top: 1px solid ${props => props.theme.rgba};
`

export const MenuNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  padding-block: 1rem;


  a {
    color: var(--gray900);
    transition: 1s ease-in;

    &:hover {
      color: var(--base);
    }
  }

  span {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`