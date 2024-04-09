import { FunctionComponent } from "react";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs: FunctionComponent = () => {
  return (
    <div className={styles.breadcrumbs}>
      <div className={styles.location}>
        <img className={styles.home11Icon} loading="lazy" alt="" />
        <img className={styles.groupIcon} alt="" />
        <div className={styles.home}>Home</div>
        <img className={styles.vectorIcon} alt="" />
        <div className={styles.home1}>Home</div>
        <img className={styles.vectorIcon1} alt="" />
        <div className={styles.home2}>Home</div>
        <div className={styles.vectorWrapper}>
          <img className={styles.vectorIcon2} alt="" />
        </div>
        <div className={styles.home3}>Account</div>
        <div className={styles.vectorContainer}>
          <img className={styles.vectorIcon3} alt="" />
        </div>
        <div className={styles.vegetables}>Create Account</div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
