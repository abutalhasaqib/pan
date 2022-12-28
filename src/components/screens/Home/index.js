import React from "react";
import styles from "./Home.module.sass";
import TooltipGlobal from "../../../components/TooltipGlobal";
import Overview from "./Overview";

const Home = () => {
  return (
    <>
      <div className={styles.section}>
        <Overview className={styles.card} />
      </div>
      <TooltipGlobal />
    </>
  );
};

export default Home;
