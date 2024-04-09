import { FunctionComponent } from "react";
import styles from "./SubscribeOurNewsletter.module.css";

const SubscribeOurNewsletter: FunctionComponent = () => {
  return (
    <div className={styles.subscribeOurNewsletter}>
      <div className={styles.backgroundShape} />
      <div className={styles.subscriptionDetails}>
        <h2 className={styles.subcribeOurNewsletter}>
          Subcribe our Newsletter
        </h2>
        <div className={styles.pellentesqueEuNibh}>
          Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
          Phasellus imperdiet elit eu magna.
        </div>
      </div>
      <div className={styles.subscriptionForm}>
        <div className={styles.inputArea}>
          <div className={styles.subscribe}>
            <div className={styles.inputField}>
              <input
                className={styles.yourEmailAddress}
                placeholder="Your email address"
                type="text"
              />
            </div>
            <button className={styles.button}>
              <div className={styles.subscribe1}>Subscribe</div>
            </button>
          </div>
          <div className={styles.socialMediaArea}>
            <div className={styles.socialMediaIcons}>
              <img className={styles.socialMediaIcon} loading="lazy" alt="" />
              <img className={styles.socialMediaIcon1} alt="" />
              <img className={styles.socialMediaIcon2} alt="" />
              <img className={styles.socialMediaIcon3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeOurNewsletter;
