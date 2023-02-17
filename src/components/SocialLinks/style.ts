import styled from "styled-components";

export const TopHeaderSocial = styled.div`
  display: flex;
  gap: 0.675rem;

  li a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;

    cursor: pointer;
    color: ${props => props.theme.base};

    &:hover {
      background-color: ${props => props.theme.red};
      color: ${props => props.theme.white};
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`