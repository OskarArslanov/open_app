import { FC, PropsWithChildren } from "react";
import styles from "./footer.module.css";

const OAFooterContainer: FC<PropsWithChildren> = (props) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
};

export default OAFooterContainer;
