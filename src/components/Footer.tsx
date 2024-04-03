import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="container">
        <footer className={styles.footer}>
          <p>2024 Yuumni Portfolio. Copyright yuumni. All rights reserved.</p>
          <div className={styles.iconWrapper}>
            <Link href={"https://yuumnist.tistory.com/"} target="_blank">
              <div className={styles.tistoryIcon}>
                <Image
                  src={"/티스토리 아이콘.png"}
                  width={35}
                  height={35}
                  alt="티스토리 아이콘"
                />
              </div>
            </Link>
            <Link href={"https://github.com/JeongYunmin"} target="_blank">
              <div className={styles.githubIcon}>
                <Image
                  src={"/깃헙 아이콘.png"}
                  width={40}
                  height={40}
                  alt="깃헙 아이콘"
                />
              </div>
            </Link>
          </div>
        </footer>
      </section>
    </>
  );
}
