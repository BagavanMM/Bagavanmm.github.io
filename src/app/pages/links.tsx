import {
  FaMedium,
  FaBlog,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";
import {SiSubstack} from "react-icons/si";

export const links = [
  {
    index: 0,
    title: "Find me on Github",
    href: "https://github.com/BagavanMM",
    icon: <FaGithub />,
  },
  {
    index: 1,
    title: "Find me on LinkedIn",
    href: "https://www.linkedin.com/in/bagavan-mar/",
    icon: <FaLinkedin />,
  },
  {
    index: 2,
    title: "Find me on Twitter",
    href: "https://twitter.com/BagavanMM",
    icon: <FaTwitter />,
  },
  {
    index: 2,
    title: "Contact me via email",
    href: "mailto:bagavan.sivam@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    index: 3,
    title: "Find me on Medium",
    href: "https://bagavanmm.medium.com",
    icon: <FaMedium />,
  },
  {
    index: 4,
    title: "Subscribe to my Newsletter",
    href: "https://bagavan.substack.com/",
    icon: <SiSubstack />,
  },
];
