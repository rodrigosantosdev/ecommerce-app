import styled from "styled-components";

export const NewsContainer = styled.section`
  max-width: 73.75rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 2rem;
`

export const NewsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  svg {
      color: var(--base);
  }
`

export const NewsTxt = styled.div`
  
  span {
    font-size: 1.2rem;
    font-weight: bold;
  }

  p {
    font-size: 0.75rem;
  }
`

export const NewsForm = styled.div`
  
  input {
    width: 28.125rem;
    padding: 1rem;
    border: 1px solid var(--border-color);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  
  button {
    background-color: var(--red);
    color: var(--base-dark);
    font-weight: bold;
    padding: 1rem;
    border: 1px solid var(--red);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    color: var(--white);
    cursor: pointer;
  }
`