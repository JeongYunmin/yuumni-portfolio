import styles from "../styles/MainPage.module.css";

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
            "저는 매사에 <span>진심</span>으로 행동하며
          </h1>
          <h1
            className={[`${styles.mainPageTitle} ${styles.thirdLine}`].join(
              " "
            )}
          >
            끊임없이 <span>성장</span>하는{" "}
            <span className={styles.frontdev}>프론트엔드 개발자</span>입니다."
          </h1>
        </div>
      </section>
    </>
  );
}
