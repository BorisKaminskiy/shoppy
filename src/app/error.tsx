"use client";

import { FC } from "react";
import cn from "classnames";
import styles from "./root.module.scss";

const Error: FC = () => {
  return <div className={cn(styles.error)}>Error</div>;
};

export default Error;
