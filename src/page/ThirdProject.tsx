import styles from "../styles/ThirdProject.module.css";
import Link from "next/link";

export default function ThirdProject() {
  return (
    <>
      <section className="container">
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>윰니의 포트폴리오</h1>
          <ul>
            <li>
              <h3>프론트엔드 개발자 포트폴리오 웹사이트</h3>
            </li>
            <li>
              <h3 className={styles.codeStrageLable}>
                깃헙 링크 :{" "}
                <Link
                  href="https://github.com/JeongYunmin/yuumni-portfolio"
                  target="_blank"
                >
                  https://github.com/JeongYunmin/yuumni-portfolio
                </Link>
              </h3>
            </li>
            <li>
              <h3>개발 기간 : 23. 3. 30 ~ 계속 진행중</h3>
            </li>
            <li>
              <h3>
                적용 기술
                <ul>
                  <li>NextJS</li>
                  <li>TypeScript</li>
                  <li>Vercel(배포)</li>
                </ul>
              </h3>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
