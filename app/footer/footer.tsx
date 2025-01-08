import styles from "./footer.module.scss";
import Image from "next/image";
import logo from "@/images/other/logo.png";
import classes from "@/app/contact/contact.module.css";
import React from "react";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerBorder} />
      <div className={styles.footerText}>@2025 AndrejKaravida</div>
        <div>
            Address: 400 Birch Ave
            Estes Park, 80517 USA
            Tel: +1 720 340 2107
        </div>
        <div>
            <Image src={logo} className={classes.logo} alt={""} />
        </div>
    </div>
  );
}
