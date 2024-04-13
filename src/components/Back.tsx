import styles from "../styles/Back.module.css";
import Link from "next/link";

export default function Back() {
  return (
    <>
      <Link href="/project">
        <button className={styles.backBtn}>◀︎</button>
      </Link>
    </>
  );
}
