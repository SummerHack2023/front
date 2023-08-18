import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "public/css/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={`${styles.nav}`}>
      <div className={`${styles.links}`}>
        <div className={`${styles.logo}`}>
          <Link href="/" style={{ color: "black" }}>
            Logo
          </Link>
        </div>
        <Link href="/board">게시판</Link>
        <Link href="/random">랜덤팀원구하기</Link>
      </div>
      <div className={`${styles.buttons}`}>
        <div className={`${styles.search}`}>
          <input type="text" placeholder="search" />
          <FontAwesomeIcon icon={faMagnifyingGlass} className={`${styles.searchIcon}`} />
        </div>
        <Link href="/" className={`${styles.signBtn} ${styles.bbbBtn}`}>
          logout
        </Link>
      </div>
    </nav>
  );
}