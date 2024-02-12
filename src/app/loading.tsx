import { FC } from "react";
import cn from "classnames";
import styles from "./root.module.scss";

const Loading: FC = () => {
  return (
    <div className={cn(styles.loading)}>
      Loading
      {/* <div className={cn(styles.loader)}></div> */}
    </div>
  );
};

export default Loading;
