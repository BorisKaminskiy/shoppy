import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Footer.module.scss";

import FooterLinks from "./components/FooterLinks/FooterLinks";
import SubscribeForm from "./components/SubscribeForm/SubscribeForm";
import Typography from "@/ui/Typography/Typography";
import FooterSocialLinks from "./components/FooterSocialLinks/FooterSocialLinks";

interface IFooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const Footer: FC<IFooterProps> = ({ ...props }) => {
  return (
    <footer className={cn(styles.root)} {...props}>
      <div className={cn(styles.footer_section)}>
        <FooterLinks />
        <SubscribeForm />
      </div>
      <div className={cn(styles.footer_section)}>
        <Typography variant='t16px169' color='black'>
          &#169; 2024 Shoppe
        </Typography>
        <FooterSocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
