export const useSearch = (item: any, value: any) => {
  const filterProducts = item.filter((product: any) =>
    product.name.trim().toLowerCase().includes(value.toLowerCase().trim())
  );

  console.log(filterProducts);
  return { filterProducts };
};
