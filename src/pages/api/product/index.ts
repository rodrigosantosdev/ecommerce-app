import { NextApiHandler } from "next"
import { products } from '../../../data'

const handler:NextApiHandler = (req, res) => {
  res.json(products)
}

export default handler