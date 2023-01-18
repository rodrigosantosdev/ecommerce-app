import { Container } from "./style";

interface Props {
  children: React.ReactNode
}

export default function ContainerGrid({ children }:Props) {
  return (
    <Container>
      {children}
    </Container>
  )
}
