import styles from "../styles/SecondProject.module.css";
import Image from "next/image";
import Link from "next/link";

export default function SecondProject() {
  return (
    <>
      <section className="container">
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>윰니의 투두리스트</h1>
          <h3 className={styles.projectDesc}>
            <span>&quot;</span>날짜별로 할 일 목록을 생성하는 심플한 일정관리 웹
            서비스<span>&quot;</span>
          </h3>
          <ul className={styles.ul}>
            <div className={styles.descWrapper}>
              <li className={styles.codeStorage}>
                <h3 className={styles.codeStorageLable}>깃헙 링크</h3>
                <h3 className={styles.codeStorageLink}>
                  <Link
                    href="https://github.com/JeongYunmin/yuumni-todolist"
                    target="_blank"
                  >
                    https://github.com/JeongYunmin/yuumni-todolist
                  </Link>
                </h3>
              </li>

              <li className={styles.deploy}>
                <h3 className={styles.deployLinkLable}>배포 링크</h3>
                <h3 className={styles.deployLink}>
                  <Link href="https://yuumni-todolist.web.app/" target="_blank">
                    https://yuumni-todolist.web.app/
                  </Link>
                </h3>
              </li>

              <li className={styles.developers}>
                <h3 className={styles.developersLable}>개발 인원</h3>
                <h3 className={styles.developersContent}>FE 1명(본인)</h3>
              </li>

              <li className={styles.developeTime}>
                <h3 className={styles.developeTimeLable}>개발 기간 </h3>
                <h3 className={styles.developeTimeContent}>
                  23. 10. 13 ~ 계속 진행중
                </h3>
              </li>

              <li className={styles.stack}>
                <h3 className={styles.stackLable}>적용 기술</h3>
                <h3 className={styles.stackContent}>
                  <ul>
                    <li>ReactJS ,</li>
                    <li>Styled Components ,</li>
                    <li>Firebase(배포)</li>
                  </ul>
                </h3>
              </li>
            </div>

            <li className={styles.imgList}>
              <Image
                className={styles.img}
                src={"/커버화면.png"}
                width={900}
                height={500}
                alt="커버화면"
              ></Image>
              <Image
                className={styles.img}
                src={"/메인 서비스 화면.png"}
                width={900}
                height={500}
                alt="메인 서비스 화면"
              ></Image>
              <Image
                className={styles.img}
                src={"/메인 서비스 화면의 삭제기능.png"}
                width={900}
                height={500}
                alt="메인 서비스 화면의 삭제기능"
              ></Image>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
