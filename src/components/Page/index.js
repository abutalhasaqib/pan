import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import cn from "classnames";
import styles from "./Page.module.sass";
import Sidebar from "../Sidebar";
import Header from "../Header";

const Page = ({ wide, children, title , hideSidebar}) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className={styles.page}>
       {!hideSidebar && <Sidebar
          className={cn(styles.sidebar, { [styles.visible]: visible })}
          onClose={() => setVisible(false)}
        />}
        <Header onOpen={() => setVisible(true)} searchbar={false}/>
        <div className={styles.inner}>
          <div
            className={cn(styles.container, {
              [styles.wide]: wide,
            })}
          >
            {title && <div className={cn("h3", styles.title)}>{title}</div>}
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Page);
