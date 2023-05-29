interface Props {
  children: React.ReactNode
}

export default function ContainerGrid({ children }:Props) {
  return (
    <div className="container mx-auto">
      {children}
    </div>
  )
}
