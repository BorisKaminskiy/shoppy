import { FC, Fragment } from "react";
import cn from "classnames";
import styles from "./Modal.module.scss";
import { Dialog } from "@headlessui/react";
import CloseIcon from "@/assets/icons/CloseIcon";
import { footerLinks } from "@/app/layoutComponents/Footer/components/FooterLinks/links";

enum EModal {
  contacts,
  purchase,
  delivery,
}

export type TModal = keyof typeof EModal;

interface IModalProps {
  variant: TModal;
  isOpen: boolean;
  onClose: () => void;
}

const setTitle = (variant: TModal) => {
  return footerLinks.find((item) => item.link === variant)?.title;
};

const Modal: FC<IModalProps> = ({ variant, isOpen, onClose, ...props }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className={cn(styles.modal_background)}>
        <Dialog.Panel className={cn(styles.modal, styles[variant])}>
          <Dialog.Title style={{ textTransform: "uppercase" }}>
            {setTitle(variant)}
          </Dialog.Title>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            consequuntur vitae ratione, optio maxime natus! Officiis doloribus
            praesentium tempore saepe delectus possimus ducimus ipsa fugit
            aperiam. Distinctio officia commodi illum?
          </div>
          <button
            onClick={onClose}
            className={cn(styles.button_close)}
            aria-label='Закрыть модальное окно'
          >
            <CloseIcon variant={12} />
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
