import styled from "styled-components";

export const TopHeaderSocial = styled.div`
  display: flex;
  gap: 0.675rem;

  li a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;

    cursor: pointer;
    border: 1px solid var(--rgba);
    border-radius: 4px;
    color: var(--base);

    &:hover {
      background-color: var(--base);
      color: var(--white);
    }
  }
`