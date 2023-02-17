import { NextApiHandler } from 'next';
import { products } from "../../../data";
// dentro do paramentro req, temo query tudo que é mandado junto da URL, pode ser acessado por ele.

const handler: NextApiHandler = (req, res) => {
  const { category } = req.query

  console.log(category)

  for(let item in products) {
    if(products[item].category.toString() === category){
      res.json(products[item])
      return
    }
  }
  res.json({ error: 'produto nao encontrado.' })
}

export default handler