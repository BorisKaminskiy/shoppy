"use client";

import { FC, useState } from "react";
import cn from "classnames";
import styles from "./FooterLinks.module.scss";
import { footerLinks } from "./links";
import Typography from "@/ui/Typography/Typography";
import { TModal } from "@/ui/Modal/Modal";
import Modal from "@/ui/Modal/Modal";

const FooterLinks: FC = ({ ...props }) => {
  const [modal, setModal] = useState<TModal | null>(null);
  const onLinkClick = (variant: TModal) => () => {
    console.log(variant);
    setModal(variant);
  };

  const onModalClose = () => {
    setModal(null);
  };

  return (
    <nav
      className={cn(styles.footer_links)}
      aria-label='Ссылки навигации'
      {...props}
    >
      <ul className={cn(styles.root)}>
        {footerLinks.map((item) => (
          <li
            onClick={onLinkClick(item.link)}
            className={cn(styles.footer_link)}
            key={item.link}
            aria-label={`Ссылка ${item.title}`}
          >
            <Typography variant='t16-12px400' color='gray30' isUppercase>
              {item.title}
            </Typography>
          </li>
        ))}
      </ul>

      {!!modal && (
        <Modal variant={modal} isOpen={!!modal} onClose={onModalClose} />
      )}
    </nav>
  );
};

export default FooterLinks;
