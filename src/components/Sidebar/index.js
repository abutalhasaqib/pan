import React, { useState } from "react";
import styles from "./Sidebar.module.sass";
import { Link, NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import Icon from "../Icon";
import Theme from "../Theme";
import Dropdown from "./Dropdown";
import Image from "../Image";

const navigation = [
  {
    title: "Home",
    icon: "home",
    url: "/",
  },
  {
    title: "Txn Dashboard",
    icon: "activity",
    url: "/transactions",
  },
  {
    title: "Do Transactions",
    slug: "pan",
    icon: "bar-chart",
    add: false,
    dropdown: [
      {
        title: "New PAN",
        url: "/pan/new",
      },
      {
        title: "PAN Correction",
        url: "/pan/correction",
      },
      {
        title: "PAN Status",
        url: "/pan/status",
      },
    ],
  },
  {
    title: "Manage Accounts",
    slug: "accounts",
    icon: "design",
    dropdown: [
      {
        title: "Organizations",
        url: "/accounts/organizations",
      },
      {
        title: "Accounts",
        url: "/accounts/list",
      },
    ],
  },
  {
    title: "About",
    icon: "info",
    url: "/about",
  },
];

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
    url: "/",
  },
  {
    title: "Join as Admin/Distributor",
    icon: "edit",
    url: "/admin-registration",
  },
]

const Sidebar = ({ className, onClose }) => {
  const [visible, setVisible] = useState(false);

  const location = useLocation()

  return (
    <>
      <div
        className={cn(styles.sidebar, className, { [styles.active]: visible })}
      >
        <button className={styles.close} onClick={onClose}>
          <Icon name="close" size="24" />
        </button>
        <Link className={styles.logo} to="/" onClick={onClose}>
          <Image
            className={styles.pic}
            src="/images/logo.png"
            srcDark="/images/logo.png"
            alt="Core"
          />
        </Link>
        <div className={styles.menu}>
          {headerMenu.map((x, index) =>
            x.url ? (
              <NavLink
                className={styles.item}
                activeClassName={styles.active}
                to={x.url}
                key={index}
                exact
                onClick={onClose}
              >
                <Icon name={x.icon} size="24" />
                {x.title}
              </NavLink>
            ) : (
              <Dropdown
                className={styles.dropdown}
                visibleSidebar={visible}
                setValue={setVisible}
                key={index}
                item={x}
                onClose={onClose}
              />
            )
          )}
        </div>
        <button className={styles.toggle} onClick={() => setVisible(!visible)}>
          <Icon name="arrow-right" size="24" />
          <Icon name="close" size="24" />
        </button>
        <div className={styles.foot}>
          <Theme className={styles.theme} visibleSidebar={visible} />
        </div>
      </div>
      <div
        className={cn(styles.overlay, { [styles.active]: visible })}
        onClick={() => setVisible(false)}
      ></div>
    </>
  );
};

export default Sidebar;
