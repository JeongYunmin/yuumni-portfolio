import styles from "../styles/ThirdProject.module.css";
import Link from "next/link";

export default function ThirdProject() {
  return (
    <>
      <section className="container">
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>윰니의 포트폴리오</h1>
          <h3 className={styles.projectDesc}>
            <span>&quot;</span>프론트엔드 개발자 포트폴리오 웹사이트
            <span>&quot;</span>
          </h3>
          <ul className={styles.ul}>
            <li className={styles.codeStorage}>
              <h3 className={styles.codeStorageLable}>깃헙 링크</h3>
              <h3 className={styles.codeStorageLink}>
                <Link
                  href="https://github.com/JeongYunmin/yuumni-portfolio"
                  target="_blank"
                >
                  https://github.com/JeongYunmin/yuumni-portfolio
                </Link>
              </h3>
            </li>

            <li className={styles.developeTime}>
              <h3 className={styles.developeTimeLable}>개발 기간</h3>
              <h3 className={styles.developeTimeContent}>
                23. 3. 30 ~ 계속 진행중
              </h3>
            </li>

            <li className={styles.stack}>
              <h3 className={styles.stackLable}>적용 기술</h3>
              <h3 className={styles.stackContent}>
                <ul>
                  <li>NextJS ,</li>
                  <li>TypeScript ,</li>
                  <li>Vercel(배포)</li>
                </ul>
              </h3>
            </li>
          </ul>
          <Link href="/">
            <button className={styles.portfolioBtn}>
              윰니의 포트폴리오 보러가기:)
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
