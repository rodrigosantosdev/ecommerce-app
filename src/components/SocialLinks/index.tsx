import React from "react";
import {
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialPinterestCircular,
} from "react-icons/ti";

export default function SocialLinks() {
  return (
    <div className="flex">
      <ul className="flex items-center gap-4">
        <li>
          <a href="#">
            <TiSocialFacebook />
          </a>
        </li>
        <li>
          <a href="#">
            <TiSocialInstagram />
          </a>
        </li>
        <li>
          <a href="#">
            <TiSocialTwitter />
          </a>
        </li>
        <li>
          <a href="#">
            <TiSocialLinkedin />
          </a>
        </li>
        <li>
          <a href="#">
            <TiSocialPinterestCircular />
          </a>
        </li>
      </ul>
    </div>
  );
}
