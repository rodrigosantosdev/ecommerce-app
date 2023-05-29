import { products } from "../../data";
import { ProductsContext } from "../../context/productContext";
import { useContext } from "react";
import { useRouter } from "next/router";
import { CardProduct } from "../CardProduct";

export default function ProductsList() {
  const { productFilter } = useContext(ProductsContext);

  const router = useRouter();
  const { category } = router.query;

  return (
    <section className="grid grid-cols-4 gap-4">
      {(productFilter?.length > 0 ? productFilter : products).map(
        (item: any) => {
          if (category) {
            if (item.category === category) {
              return <CardProduct item={item} key={item.id} />;
            }
          } else {
            return <CardProduct item={item} key={item.id} />;
          }
        }
      )}
    </section>
  );
}
