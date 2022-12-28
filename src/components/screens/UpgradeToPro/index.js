import React from "react";
import styles from "./UpgradeToPro.module.sass";
import TooltipGlodal from "../../../components/TooltipGlobal";
import MainImage from "./MainImage";
import Faq from "./Faq";
import AboutPan from "../../AboutPan/AboutPan";
import PanWorks from "../../AboutPan/PanWorks";
import Fade from 'react-reveal/Fade';


const UpgradeToPro = () => {
  return (
    <>
      <MainImage className={styles.packages} />
      {/* <Fade top> */}
        <AboutPan />
      {/* </Fade> */}
      <PanWorks />
      <TooltipGlodal />
    </>
  );
};

export default UpgradeToPro;
