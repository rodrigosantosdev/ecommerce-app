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

export const TopHeaderInfo = styled.div`

  display: flex;
  gap: 1rem;

  a {
    color: gray;
    font-size: 0.875rem;
    
    &:hover {
      color: var(--base);
    }
  }

`


