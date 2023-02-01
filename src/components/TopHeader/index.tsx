import SocialLinks from "../SocialLinks"
import { TopHeaderContainer, TopHeaderContent, TopHeaderInfo } from "./style"

export default function TopHeader() {
  return (
    <TopHeaderContainer>
      <TopHeaderContent>
        <SocialLinks />
        <TopHeaderInfo>
          <a href="#">Sobre</a>
          <a href="#">Fale conosco</a>
        </TopHeaderInfo>
      </TopHeaderContent>
    </TopHeaderContainer>
  )
}
