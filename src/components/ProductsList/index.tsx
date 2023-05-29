import React from "react";
import {
  ProductCardButton,
  ProductCardContainer,
  ProductCardContent,
  ProductCardDescription,
  ProductCardImage,
  ProductCardItem,
  ProductCardPrice,
  ProductCardTitle,
} from "./style";
import { products } from "../../data";
import { StoreContext } from "../../context/storeContext";
import { ProductsContext } from "../../context/productContext";
import { useContext } from "react";
import { useRouter } from "next/router";

export default function ProductsList() {
  const { addItemToCart } = useContext(StoreContext);
  const { productFilter } = useContext(ProductsContext);

  const router = useRouter();
  const { category } = router.query;

  function handleAddItem(item: any) {
    addItemToCart(item);
  }

  return (
    <section className="flex">
      {(productFilter?.length > 0 ? productFilter : products).map(
        (item: any) => {
          if (category) {
            if (item.category === category) {
              return (
                <ProductCardContainer
                  key={item.id}
                  onClick={() => router.push(`${item.id}`)}
                >
                  <ProductCardItem>
                    <ProductCardImage>
                      <img src={item.img} alt={item.name} />
                    </ProductCardImage>
                    <ProductCardContent>
                      <ProductCardTitle>{item.name}</ProductCardTitle>
                      <ProductCardDescription>
                        <p>{item.description}</p>
                      </ProductCardDescription>
                      <ProductCardPrice>R$ {item.price}</ProductCardPrice>
                      <ProductCardButton onClick={() => handleAddItem(item)}>
                        Adiciona à Sacola
                      </ProductCardButton>
                    </ProductCardContent>
                  </ProductCardItem>
                </ProductCardContainer>
              );
            }
          } else {
            return (
              <ProductCardContainer
                key={item.id}
                onClick={() => router.push(`${item.id}`)}
              >
                <ProductCardItem>
                  <ProductCardImage>
                    <img src={item.img} alt={item.name} />
                  </ProductCardImage>
                  <ProductCardContent>
                    <ProductCardTitle>{item.name}</ProductCardTitle>
                    <ProductCardDescription>
                      <p>{item.description}</p>
                    </ProductCardDescription>
                    <ProductCardPrice>R$ {item.price}</ProductCardPrice>
                    <ProductCardButton onClick={() => handleAddItem(item)}>
                      Adiciona à Sacola
                    </ProductCardButton>
                  </ProductCardContent>
                </ProductCardItem>
              </ProductCardContainer>
            );
          }
        }
      )}
    </section>
  );
}
