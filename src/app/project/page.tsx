import styles from "../../styles/Project.module.css";
import Link from "next/link";

export default function Project() {
  return (
    <>
      <section className="container">
        <ul className={styles.projectList}>
          <li className={styles.firstProject}>
            <Link href={"http://localhost:3000/project/" + "1"}>
              <button>
                <b>그린어스포어스</b>
                <span>_자세히보기</span>
              </button>
            </Link>
            <p className={styles.firstProjectDesc}>
              : BE 2명과 FE 3명의 팀으로 진행한 프로젝트이자, <br />
              친환경 게시판 커뮤니티 웹 서비스.
            </p>
          </li>
          <li className={styles.secondProject}>
            <Link href={"http://localhost:3000/project/" + "2"}>
              <button>
                <b>윰니의 투두리스트</b>
                <span>_자세히보기</span>
              </button>
            </Link>
            <p className={styles.secondProjectDesc}>
              : 캘린터 UI를 통해 날짜별로 할 일 목록을 <br />
              생성할 수 있는 개인 프로젝트.
            </p>
          </li>
          <li className={styles.thirdProject}>
            <Link href={"http://localhost:3000/project/" + "3"}>
              <button>
                <b>윰니의 포트폴리오</b>
                <span>_자세히보기</span>
              </button>
            </Link>
            <p className={styles.thirdProjectDesc}>
              : 프론트엔드 개발자를 지망하는 본인을 <br />
              소개하는 포트폴리오 웹사이트.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}
