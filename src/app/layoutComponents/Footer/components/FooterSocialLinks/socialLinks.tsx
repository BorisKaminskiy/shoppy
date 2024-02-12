import { ReactNode } from "react";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import FacebookIcon from "@/assets/icons/FacebookIcon";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import LinkedinIcon from "@/assets/icons/LinkedinIcon";

interface ISocialLinksProps {
  title: string;
  href: string;
  icon: ReactNode;
}

export const socialLinks = [
  {
    title: "Линкедин",
    href: "https://linkedin.com/",
    icon: <LinkedinIcon />,
  },
  {
    title: "Фэйсбук",
    href: "https://facebook.com/",
    icon: <FacebookIcon />,
  },
  {
    title: "Инстаграмм",
    href: "https://instagram.com/",
    icon: <InstagramIcon />,
  },
  {
    title: "Твитер",
    href: "https://twitter.com/",
    icon: <TwitterIcon />,
  },
] as ISocialLinksProps[];
