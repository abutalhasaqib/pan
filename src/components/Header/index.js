import React, { useState } from "react";
import cn from "classnames";
import styles from "./Header.module.sass";
import Icon from "../Icon";
import Search from "./Search";
import User from "./User";
import { Link } from "react-router-dom";

const Header = ({ onOpen, searchbar, menu, className  }) => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    onOpen();
    setVisible(false);
  };
  const headerMenu = [
    {
      title: "Home",
      icon: "home",
      url: "/",
    },
    {
      title: "Bank Details",
      icon: "activity",
      url: "/transactions",
    },
    {
      title: "About Us",
      icon: "info",
      url: "/about",
    },
    {
      title: "Why Get Pan",
      icon: "design",
      url: "/getpan",
    },
    {
      title: "Join as Admin/Distributor",
      icon: "edit",
      url: "/joinadmin",
    },
  ]

  return (
    <header className={cn(styles.header, className)}>
      <button className={styles.burger} onClick={() => handleClick()}></button>
      {!searchbar &&
        <>
          <Search className={cn(styles.search, { [styles.visible]: visible })} />
          <button
            className={cn(styles.buttonSearch, { [styles.active]: visible })}
            onClick={() => setVisible(!visible)}
          >
            <Icon name="search" size="24" />
          </button>
          <div className={styles.control} onClick={() => setVisible(false)}>
            <User className={styles.user} />
          </div>
        </>
      }
      {menu && <div className={cn([styles.control, styles.cus_menu])} onClick={() => setVisible(false)}>
        {headerMenu.map((item, index) => {
          return (
            <Link className={cn("button", styles.button , styles.menuBtn)} to={item?.url} key={index}>
              <span style={{ fontSize: "12px" }}>{item?.title}</span>
            </Link>
          )
        })}
      </div>}
    </header>
  );
};

export default Header;
