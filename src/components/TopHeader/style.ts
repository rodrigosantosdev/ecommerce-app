import styled from 'styled-components'

export const TopHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 2.5rem;
  border-bottom: 1px solid var(--rgba);
`

export const TopHeaderContent = styled.div`
  width: 1180px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 0.875rem;
`

export const TopHeaderInfo = styled.div`

  display: flex;
  gap: 1rem;

  a {
    color: var(--black);
    font-size: 0.875rem;
    
    &:hover {
      color: var(--red);
    }
  }

`


