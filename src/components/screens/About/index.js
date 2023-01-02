import React from "react";
import TooltipGlobal from "../../TooltipGlobal";
import Card from "../../Card";
import Image from "../../Image";
import styles from "./About.module.sass";

const About = () => {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.col}>
          <Card
            className={styles.card}
            title="About Syntizen Instant PAN Services"
            classTitle="title-green"
          >
            <div className={styles.rowField}>
              <h4>Syntizen Technologies Pvt., Ltd.</h4>
              <p>
                {" "}
                Office No-806, Manjeera Majestic Commercials, Opp. JNTUH,
                Kukatpally, Hyderabad, Telangana-500085.
              </p>
              <div>
                Email: <a href="mailto:info@syntizen.com">info@syntizen.com</a>
              </div>
              <div>
                Mobile : <a href="skype:+917337494488?call">+91-7337494488</a>
              </div>
              <div>
                Phone : <a href="skype:+914048554098?call">+91-40-48554098</a>
              </div>
              <div>
                Website :{" "}
                <a href="http://www.syntizen.com" target="_blank" rel="noreferrer">
                  http://www.syntizen.com
                </a>
              </div>
            </div>
            <div className={styles.rowField}>
              <h3>Design & Developed By</h3>
              <Image
                className={styles.pic}
                src="/images/logo.png"
                srcDark="/images/logo.png"
                alt="Syntizen"
              />
            </div>
          </Card>
        </div>
      </div>
      <TooltipGlobal />
    </>
  );
};

export default About;
