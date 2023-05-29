import Link from "next/link"
import SocialLinks from "../SocialLinks"

export default function TopHeader() {
  return (
    <div className="shadow-sm">
      <section className="flex justify-between container mx-auto p-4">
        <SocialLinks />
        <div className="flex gap-4">
          <Link href="#">Sobre</Link>
          <Link href="#">Fale conosco</Link>
        </div>
      </section>
    </div>
  )
}
