import InstaIcon from "../../public/icons/insta.svg";
import XIcon from "../../public/icons/x-social.svg";
import LinkedInIcon from "../../public/icons/linkedin.svg";
import YoutubeIcon from "../../public/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
          <div className="text-center">
            {" "}
            2024 Eldora UI All rights are reserved
          </div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <XIcon />
            </li>
            <li>
              <LinkedInIcon />
            </li>
            <li>
              <InstaIcon />
            </li>
            <li>
              <YoutubeIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};