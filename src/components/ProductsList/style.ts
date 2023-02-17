import styled from "styled-components";

export const ProductListContainer = styled.section`
  margin-top: 2rem;
  margin-bottom: 2rem;
`

export const ProductTitle = styled.h1`
  text-align: center;
  position: relative;

  &:before {
    content: '';
    width: 35%;
    height: 1px;
    background-color: ${props => props.theme.rgba};

    display: block;
    position: absolute;
    left: 0;
    top: 1rem;
  }

  &:after {
    content: '';
    width: 35%;
    height: 1px;
    background-color: ${props => props.theme.rgba};

    display: block;
    position: absolute;
    right: 0;
    top: 1rem;
  }
`

export const ProductCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3rem;
  gap: 1rem;

`

export const ProductCardItem = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 1s ease;
  border:1px solid ${props => props.theme.rgba};


  &:hover {
    box-shadow: -1px 1px 7px 1px ${props => props.theme.shadow};
  }
`

export const ProductCardImage = styled.div`
  padding: 0.5rem;
  
  img {
    max-height: 230px;
    width: 100%;
    object-fit: cover;
  }
`

export const ProductCardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

export const ProductCardTitle = styled.h3`
  color: ${props => props.theme.black};
`

export const ProductCardDescription = styled.p`
  font-size: 0.875rem;
  padding-top: 0.5rem;
  color: ${props => props.theme.gray900};
`

export const ProductCardPrice = styled.span`
  font-size: 1.6rem;
  font-weight: bold;

  padding-top: 0.3rem;
`

export const ProductCardButton = styled.button`
  width: 150px;
  padding: 0.675rem;
  background-color: transparent;
  border: 1px solid ${props => props.theme.rgba};
  color: ${props => props.theme.base};
  border-radius: 4px;
  margin-top: 1rem;
  cursor: pointer;
  transition: all 1s;
  font-family: 'poppins';


  &:hover {
    background-color: ${props => props.theme.red};
    color: white;
  }
`