import { ReactComponent as LinkedInIcon } from "../lib/icons/icons8-linkedin.svg";
import { ReactComponent as GithubIcon } from "../lib/icons/icons8-github.svg";
import { ReactComponent as TwitterIcon } from "../lib/icons/icons8-twitter.svg";

export const social4 = [
  {
    socialIcon: (
      <LinkedInIcon className="h-5 w-5 lg:h-10 lg:w-10 fill-accent hover:fill-accent"></LinkedInIcon>
    ),
    socialLink: "https://www.linkedin.com/in/utsavdodiya/",
    socialTitle: "LinkedIn",
  },
  {
    socialIcon: (
      <GithubIcon className="h-5 w-5 lg:h-10 lg:w-10 fill-[#3d5a70] hover:fill-accent"></GithubIcon>
    ),
    socialLink: "https://github.com/dankbit",
    socialTitle: "Github",
  },
  {
    socialIcon: (
      <TwitterIcon className="h-5 w-5 lg:h-10 lg:w-10 fill-[#0ddae1] hover:fill-accent"></TwitterIcon>
    ),
    socialLink: "https://x.com/UtsavDodiya8",
    socialTitle: "Twitter",
  },
];
