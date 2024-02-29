import toast from "react-hot-toast";
import cn from "classnames";
import styles from "./Toast.module.scss";
import SuccessIcon from "@/assets/icons/SuccessIcon";

export const emailSuccess = () => {
  toast("Ваш email подписан на новости и уведомления", {
    duration: 4000,
    style: {
      minWidth: "469px",
      display: "flex",
      padding: "20px",
      columnGap: "20px",
      boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.15)",
      backgroundColor: "#efefef",
      color: "#707070",
    },
    icon: <SuccessIcon />,
  });
};
