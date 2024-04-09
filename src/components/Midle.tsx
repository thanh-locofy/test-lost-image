import { FunctionComponent } from "react";
import styles from "./Midle.module.css";

const Midle: FunctionComponent = () => {
  return (
    <div className={styles.midle}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <div className={styles.plant1Wrapper}>
            <img className={styles.plant1Icon} loading="lazy" alt="" />
          </div>
          <h1 className={styles.ecobazar}>Ecobazar</h1>
        </div>
      </div>
      <div className={styles.search}>
        <div className={styles.searech}>
          <img className={styles.searchIcon} alt="" />
          <input className={styles.search1} placeholder="Search" type="text" />
        </div>
        <button className={styles.button}>
          <div className={styles.search2}>Search</div>
        </button>
      </div>
      <div className={styles.actionIcons}>
        <div className={styles.icons}>
          <div className={styles.heartWrapper}>
            <img className={styles.heartIcon} loading="lazy" alt="" />
          </div>
          <div className={styles.deviderWrapper}>
            <div className={styles.devider} />
          </div>
          <div className={styles.shoppingCard}>
            <div className={styles.cart}>
              <img className={styles.bagIcon} loading="lazy" alt="" />
              <div className={styles.no}>
                <div className={styles.div}>2</div>
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.shoppingCart}>Shopping cart:</div>
              <div className={styles.itemCount}>$57.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Midle;
