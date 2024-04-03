import styles from "../styles/SecondProject.module.css";
import Image from "next/image";
import Link from "next/link";

export default function SecondProject() {
  return (
    <>
      <section className="container">
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>윰니의 투두리스트</h1>
          <ul>
            <li>
              <h3>날짜별로 할 일 목록을 생성하는 심플한 일정관리 웹 서비스</h3>
            </li>
            <li>
              <h3 className={styles.codeStrageLable}>
                깃헙 링크 :{" "}
                <Link
                  href="https://github.com/JeongYunmin/yuumni-todolist"
                  target="_blank"
                >
                  https://github.com/JeongYunmin/yuumni-todolist
                </Link>
              </h3>
            </li>
            <li>
              <h3>
                배포 링크 :{" "}
                <Link href="https://yuumni-todolist.web.app/" target="_blank">
                  https://yuumni-todolist.web.app/
                </Link>
              </h3>
            </li>
            <li>
              <h3>개발 인원 : FE 1명(본인)</h3>
            </li>
            <li>
              <h3>개발 기간 : 23. 10. 13 ~ 계속 진행중</h3>
            </li>
            <li>
              <h3>
                적용 기술
                <ul>
                  <li>ReactJS</li>
                  <li>Styled Components</li>
                  <li>Firebase(배포)</li>
                </ul>
              </h3>
            </li>
            <li>
              <h3>서비스 화면</h3>
              <Image
                src={"/커버화면.png"}
                width={700}
                height={400}
                alt="커버화면"
              ></Image>
              <Image
                src={"/메인 서비스 화면.png"}
                width={700}
                height={400}
                alt="메인 서비스 화면"
              ></Image>
              <Image
                src={"/메인 서비스 화면의 삭제기능.png"}
                width={700}
                height={400}
                alt="메인 서비스 화면의 삭제기능"
              ></Image>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
