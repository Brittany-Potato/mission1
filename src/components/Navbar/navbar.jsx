import React from "react";
import styles from "./navbar.module.css";

export default function navbar() {
  return (
    <div className={styles.MainDiv}>
      <img src="../../images/turnerslogo.png" alt="" className={styles.logo} />
      <div className={styles.navlinks}>
        <h2>
          <span className={styles.login}>Login</span>{" "}
          <span className={styles.or}>Or</span>{" "}
          <span className={styles.register}>Register</span>
        </h2>
        <h3 className={styles.contact}>0800 887 637</h3>
        <h3 className={styles.findus}>Find Us</h3>
      </div>
    </div>
  );
}
