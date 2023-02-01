import styled from "styled-components";

export const FooterInfoContainer = styled.section`
  max-width: 73.75rem;
  margin: 0 auto;
  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
`

export const FooterInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 0;
`