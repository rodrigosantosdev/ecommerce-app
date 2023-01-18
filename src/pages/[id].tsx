import { useRouter } from "next/router";

const productItem = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Rota pelo {id}</p>
}

export default productItem