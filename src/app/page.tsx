import Header from "@/components/Header";
import Nav from "@/components/Nav";
import styles from "../styles/MainPage.module.css";

export default function Home() {
  return (
    <>
      <section className="container">
        <h1 className={styles.mainPageTitle}>Frontend Developer</h1>
        <h1
          className={[`${styles.mainPageTitle} ${styles.secondLine}`].join(" ")}
        >
          정 윤 민's Portfolio
        </h1>
      </section>
    </>
  );
}
