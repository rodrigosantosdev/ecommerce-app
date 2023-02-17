import React from 'react'
import { 
  ProductCardButton,
  ProductCardContainer,
  ProductCardContent,
  ProductCardDescription,
  ProductCardImage,
  ProductCardItem,
  ProductCardPrice,
  ProductCardTitle,
  ProductListContainer,
  ProductTitle } from "./style"


export default function ProductsList() {
  return (
    <ProductListContainer>
      <ProductTitle>PREPARE-SE PARA 2023</ProductTitle>

      {/* <ProductCardContainer>
        {productItems.map((item) => (
          <ProductCardItem key={item.id}>
            <ProductCardImage>
              <img src={item.img} alt={item.name} />
            </ProductCardImage>
            <ProductCardContent>
              <ProductCardTitle>{item.name}</ProductCardTitle>
              <ProductCardDescription>
                {item.description}
              </ProductCardDescription>
              <ProductCardPrice>R$ {item.price}</ProductCardPrice>
              <ProductCardButton>Adiciona à Sacola</ProductCardButton>
            </ProductCardContent>
          </ProductCardItem>
        ))}
      </ProductCardContainer> */}

    </ProductListContainer>
  )
}

