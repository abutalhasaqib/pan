import React from "react";
import cn from "classnames";
import styles from "./SignInForm.module.sass";
import { use100vh } from "react-div-100vh";
import { Link } from "react-router-dom";
import TextInput from "../../TextInput";
import Image from "../../Image";

const SignIn = ({ minHeightpan, className, noimg, navigate }) => {
  const heightWindow = use100vh();

  return (
    <div className={cn(styles.login, className)} style={{ minHeight: !minHeightpan ? heightWindow : null }}>
      <div className={styles.wrapper}>
        {!noimg && <Link className={styles.logo} to="/">
          <Image
            className={styles.pic}
            src="/images/logo.png"
            srcDark="/images/logo.png"
            alt="Syntizen"
          />
        </Link>}
        <div className={cn("h2", styles.title)}>Sign in</div>
        <div className={styles.body}>
          <TextInput
            className={styles.field}
            name="email"
            type="email"
            placeholder="Your email"
            required
            icon="mail"
          />
          <TextInput
            className={styles.field}
            name="password"
            type="password"
            placeholder="Password"
            required
            icon="lock"
          />
          <Link className={styles.fpassword}> Forget Password? </Link>
          <Link className={styles.logo} to={{ pathname: "https://getpan.in/Login/Login" }} target="_parent">
            <button className={cn("button", styles.button)}>Sign in</button>
          </Link>
          {!noimg && <div className={styles.note}>
            Powered by Syntizen Technologies Pvt Ltd.
          </div>}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
