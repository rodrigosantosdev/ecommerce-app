import { useRouter } from "next/router";
import { products } from "../data";

const productItem = () => {
  const router = useRouter();
  const { id } = router.query;

  const itemId = parseInt(id as string);

  return (
    <div>
      {products.map((item) => {
        if (item.id === itemId) {
          return (
            <>
              <img src={item.img} alt={item.name} />
              <h1>{item.name}</h1>
              <p>{item.description}</p>
            </>
          );
        }
      })}
    </div>
  );
};

export default productItem;
