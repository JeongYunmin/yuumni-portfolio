import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <section className="container">
        <header className={styles.header}>
          <Link
            href={"/"}
            style={{ textDecoration: "none", color: "black" }}
            className={styles.logo}
          >
            <div className={styles.imgBorder}>
              <div className={styles.imgWrapper}>
                <Image
                  src="/profile-image.JPG"
                  alt="/images/프로필 이미지"
                  width={80}
                  height={80}
                  style={{ borderRadius: "50%" }}
                />
              </div>
            </div>
            <h1 className={styles.text}>정윤민&#39;s Portfolio</h1>
          </Link>
          <Nav />
        </header>
      </section>
    </>
  );
}
