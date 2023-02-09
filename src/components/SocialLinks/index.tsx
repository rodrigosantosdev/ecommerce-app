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
      <li><a href="#"><TiSocialFacebook /></a></li>
      <li><a href="#"><TiSocialInstagram /></a></li>
      <li><a href="#"><TiSocialTwitter /></a></li>
      <li><a href="#"><TiSocialLinkedin /></a></li>
      <li><a href="#"><TiSocialPinterestCircular /></a></li>
    </TopHeaderSocial>
  )
}
