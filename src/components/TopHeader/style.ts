import styled from 'styled-components'

export const TopHeaderContainer = styled.div`
  border-bottom: 1px solid var(--rgba);
  padding-block: 0.875rem;
`

export const TopHeaderContent = styled.div`
  width: 1180px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.875rem;
`

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
    color: black;

    &:hover {
      background-color: var(--base-color);
      color: var(--base-color-dark);
    }
  }
`

export const TopHeaderInfo = styled.div`

  display: flex;
  gap: 1rem;

  a {
    color: gray;
    font-size: 0.875rem;
    
    &:hover {
      color: var(--base-color);
    }
  }

`


