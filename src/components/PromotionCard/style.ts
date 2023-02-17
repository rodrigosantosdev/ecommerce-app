import styled from "styled-components";

export const PromotionCardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const PromotionCardItem = styled.div`
  min-height:130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 3rem;
  background-color: ${props => props.theme.rgba};
`