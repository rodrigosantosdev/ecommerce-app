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
    color: var(--base);

    &:hover {
      background-color: var(--red);
      color: var(--white);
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`