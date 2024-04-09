import { FunctionComponent } from "react";
import styles from "./NavLinks.module.css";

const NavLinks: FunctionComponent = () => {
  return (
    <div className={styles.navLinks}>
      <div className={styles.navLinks1}>
        <div className={styles.navLinks2}>
          <div className={styles.home}>Home</div>
          <img className={styles.chevronDownIcon} alt="" />
        </div>
        <div className={styles.navLinks3}>
          <div className={styles.home1}>Shop</div>
          <img className={styles.chevronDownIcon1} alt="" />
        </div>
        <div className={styles.navLinks4}>
          <div className={styles.home2}>Pages</div>
          <img className={styles.chevronDownIcon2} alt="" />
        </div>
        <div className={styles.navLinks5}>
          <div className={styles.home3}>Blog</div>
          <img className={styles.chevronDownIcon3} alt="" />
        </div>
        <div className={styles.navLinks6}>
          <div className={styles.home4}>About Us</div>
          <img className={styles.chevronDownIcon4} alt="" />
        </div>
        <div className={styles.navLinks7}>
          <div className={styles.home5}>Contact Us</div>
          <img className={styles.chevronDownIcon5} alt="" />
        </div>
      </div>
      <div className={styles.callNow}>
        <img className={styles.phonecall1Icon} loading="lazy" alt="" />
        <div className={styles.callNumber}>(219) 555-0114</div>
      </div>
    </div>
  );
};

export default NavLinks;
