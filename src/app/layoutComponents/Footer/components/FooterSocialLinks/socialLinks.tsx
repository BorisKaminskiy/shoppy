import { ReactNode } from "react";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import FacebookIcon from "@/assets/icons/FacebookIcon";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import LinkedinIcon from "@/assets/icons/LinkedinIcon";

interface ISocialLinksProps {
  id: number;
  title: string;
  href: string;
  icon: ReactNode;
}

export const socialLinks = [
  {
    id: 1,
    title: "Линкедин",
    href: "https://linkedin.com/",
    icon: <LinkedinIcon />,
  },
  {
    id: 2,
    title: "Фэйсбук",
    href: "https://facebook.com/",
    icon: <FacebookIcon />,
  },
  {
    id: 3,
    title: "Инстаграмм",
    href: "https://instagram.com/",
    icon: <InstagramIcon />,
  },
  {
    id: 4,
    title: "Твитер",
    href: "https://twitter.com/",
    icon: <TwitterIcon />,
  },
] as ISocialLinksProps[];
