import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span>BLOG</span>
      </Link>
      <nav>
        {/* target = "_blank" for opening the link in a new tab */}
        <Link href="https://github.com/oguzhangencer" target="_blank">
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
