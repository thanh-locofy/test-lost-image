import { FunctionComponent } from "react";
import Midle from "../components/Midle";
import NavLinks from "../components/NavLinks";
import Breadcrumbs from "../components/Breadcrumbs";
import AccountCreation from "../components/AccountCreation";
import SubscribeOurNewsletter from "../components/SubscribeOurNewsletter";
import Footer from "../components/Footer";
import styles from "./MobileHome.module.css";

const MobileHome: FunctionComponent = () => {
  return (
    <div className={styles.mobileHome}>
      <section className={styles.header}>
        <header className={styles.navigation}>
          <div className={styles.smallOne}>
            <div className={styles.contact}>
              <img className={styles.mapPinIcon} loading="lazy" alt="" />
              <div className={styles.storeDetails}>
                <div className={styles.storeLocationLincoln}>
                  Store Location: Lincoln- 344, Illinois, Chicago, USA
                </div>
              </div>
            </div>
            <div className={styles.linksContainer}>
              <div className={styles.links}>
                <div className={styles.eng}>
                  <div className={styles.eng1}>Eng</div>
                  <div className={styles.groupWrapper}>
                    <img className={styles.groupIcon} alt="" />
                  </div>
                </div>
                <div className={styles.usd}>
                  <div className={styles.usd1}>USD</div>
                  <div className={styles.groupContainer}>
                    <img className={styles.groupIcon1} alt="" />
                  </div>
                </div>
                <div className={styles.devider} />
                <nav className={styles.account}>
                  <div className={styles.signIn}>Sign In</div>
                  <div className={styles.signInSign}>/</div>
                  <div className={styles.signUp}>Sign Up</div>
                </nav>
              </div>
            </div>
          </div>
          <Midle />
          <NavLinks />
        </header>
        <div className={styles.lowerHeader}>
          <Breadcrumbs />
          <AccountCreation />
        </div>
      </section>
      <section className={styles.footer}>
        <SubscribeOurNewsletter />
        <Footer />
      </section>
    </div>
  );
};

export default MobileHome;
