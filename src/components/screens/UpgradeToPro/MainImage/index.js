import React from "react";
import cn from "classnames";
import styles from "./MainImage.module.sass";
import SignIn from "../../SignIn";
import Card from "../../../Card";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';



const MainImage = ({ className }) => {

  const headerMenu = [
    {
      title: "Join as admin",
      icon: "home",
      url: "/",
    },
    {
      title: "Join Super Distributor",
      icon: "activity",
      url: "/transactions",
    },
    {
      title: "Join Distributor",
      icon: "info",
      url: "/about",
    },
    {
      title: "Join as Retailer",
      icon: "design",
      url: "/getpan",
    },
  ]

  const MainContent = () => {
    return (
      <>
        {headerMenu.map((item, index) => {
          return (
            <div className={styles.menuBtnDesign}>
              <Link className={cn("button" , styles.menuBtn)} to={item?.url} key={index}>
                <span style={{ fontSize: "12px" }}>{item?.title}</span>
              </Link>
            </div>
          )
        })}
      </>
    )
  }

  return (
    <div className={cn(styles.packages, className)}>
      <div>
        <div className={styles.imagePan}>
          <Fade left>
            <SignIn
              className={styles.LoginPage}
              noimg={true}
              minHeightpan={true}
            />
          </Fade>
          <Fade right>
            <Card
              className={styles.LoginPage}
              children={<MainContent />}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default MainImage;
