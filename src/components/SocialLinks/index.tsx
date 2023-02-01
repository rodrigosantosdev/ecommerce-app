import React from 'react'
import { 
  TiSocialLinkedin, 
  TiSocialFacebook, 
  TiSocialInstagram, 
  TiSocialTwitter, 
  TiSocialPinterestCircular   
} from 'react-icons/ti'

import { TopHeaderSocial } from "./style"

export default function SocialLinks() {
  return (
    <TopHeaderSocial>
      <li><a href="#"><TiSocialFacebook size={18} /></a></li>
      <li><a href="#"><TiSocialInstagram size={18} /></a></li>
      <li><a href="#"><TiSocialTwitter size={18} /></a></li>
      <li><a href="#"><TiSocialLinkedin size={18} /></a></li>
      <li><a href="#"><TiSocialPinterestCircular size={18} /></a></li>
    </TopHeaderSocial>
  )
}
