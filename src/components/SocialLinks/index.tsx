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
          <a href="#" className="hover:text-red">
            <TiSocialFacebook />
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-red">
            <TiSocialInstagram />
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-red">
            <TiSocialTwitter />
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-red">
            <TiSocialLinkedin />
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-red">
            <TiSocialPinterestCircular />
          </a>
        </li>
      </ul>
    </div>
  );
}
