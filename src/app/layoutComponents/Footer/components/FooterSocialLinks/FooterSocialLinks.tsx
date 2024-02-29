import { FC } from "react";
import cn from "classnames";
import styles from "./FooterSocialLinks.module.scss";
import Link from "next/link";
import { socialLinks } from "./socialLinks";

const FooterSocialLinks: FC = ({ ...props }) => {
  return (
    <ul className={cn(styles.root)} aria-label='Ссылки на социальные сети' {...props}>
      {socialLinks.map((item) => (
        <li key={item.id} aria-label={`ССылка на ${item.title}`}>
          <Link href={item.href} className={cn(styles.link)} target='_blank'>
            {item.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterSocialLinks;
