import styles from "../styles/MainPage.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="container">
        <div className={styles.homeContentWrapper}>
          <h1 className={styles.mainPageTitle}>안녕하세요:D</h1>
          <h1
            className={[`${styles.mainPageTitle} ${styles.secondLine}`].join(
              " "
            )}
          >
            <span>&quot;</span>저는 매사에 <span>진심</span>으로 행동하며
          </h1>
          <h1
            className={[`${styles.mainPageTitle} ${styles.thirdLine}`].join(
              " "
            )}
          >
            끊임없이 <span>성장</span>하는{" "}
            <span className={styles.frontdev}>프론트엔드 개발자</span>입니다.
            <span>&quot;</span>
          </h1>
        </div>
        <div className={styles.homeBtnWrapper}>
          <Link href={"/project"} className={styles.goToProjectLink}>
            <button className={styles.goToProjectBtn}>
              프로젝트 보러가기:)
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
