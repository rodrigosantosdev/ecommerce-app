import { 
  TiSocialLinkedin, 
  TiSocialFacebook, 
  TiSocialInstagram, 
  TiSocialTwitter, 
  TiSocialPinterestCircular   
} from 'react-icons/ti'

import { TopHeaderContainer, TopHeaderContent, TopHeaderInfo, TopHeaderSocial } from "./style"

export default function TopHeader() {
  return (
    <TopHeaderContainer>
      <TopHeaderContent>
        <TopHeaderSocial>
          <li><a href="#"><TiSocialFacebook size={18} /></a></li>
          <li><a href="#"><TiSocialInstagram size={18} /></a></li>
          <li><a href="#"><TiSocialTwitter size={18} /></a></li>
          <li><a href="#"><TiSocialLinkedin size={18} /></a></li>
          <li><a href="#"><TiSocialPinterestCircular size={18} /></a></li>
        </TopHeaderSocial>
        <TopHeaderInfo>
          <a href="#">Sobre</a>
          <a href="#">Fale conosco</a>
        </TopHeaderInfo>
      </TopHeaderContent>
    </TopHeaderContainer>
  )
}
