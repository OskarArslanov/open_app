import { FC, PropsWithChildren } from "react";
import styles from "./body.module.css";

const OABodyContainer: FC<PropsWithChildren> = (props) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
};

export default OABodyContainer;
