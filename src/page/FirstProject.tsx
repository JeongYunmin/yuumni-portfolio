import styles from "../styles/FirstProject.module.css";
import Image from "next/image";
import Link from "next/link";

export default function FirstProject() {
  return (
    <>
      <section className="container">
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>그린어스포어스</h1>
          <ul>
            <li>
              <h3>친환경한 일상을 나누는 커뮤니티</h3>
            </li>
            <li>
              <h3 className={styles.codeStrageLable}>
                깃헙 링크 :{" "}
                <Link
                  href="https://github.com/JeongYunmin/seb45_main_012"
                  target="_blank"
                >
                  https://github.com/JeongYunmin/seb45_main_012
                </Link>
              </h3>
            </li>
            <li>
              <h3>개발 인원 : FE 3명 / BE 2명</h3>
            </li>
            <li>
              <h3>개발 기간 : 23. 8 .25 ~ 23. 9. 19</h3>
            </li>
            <li>
              <h3>
                적용 기술
                <ul>
                  <li>ReactJS</li>
                  <li>Axios</li>
                  <li>ESLint</li>
                </ul>
              </h3>
            </li>
            <li>
              <h3>
                기여 부분
                <ul>
                  <li>회원가입 기능 및 화면 구현</li>
                  <li>이미지 업로드 기능</li>
                  <li>게시글 작성 및 등록 기능</li>
                  <li>초기 개발 기획</li>
                </ul>
              </h3>
            </li>
            <li>
              <h3>기여 부분 상세</h3>
              <ul>
                <li>
                  <h4>회원가입</h4>
                  <p>
                    정규표현식을 사용하여 패스워드 형식을 정의하고, 모든 인풋
                    요소를 올바른 형식으로 채워야만 회원가입 버튼을 눌렀을 때
                    <br />
                    서버로 요청이 동작하여 회원가입이 완료될 수 있도록 유효성
                    검사를 구현하였습니다.
                  </p>
                  <Image
                    src={"/회원가입 화면.png"}
                    width={700}
                    height={400}
                    alt="회원가입 화면"
                  ></Image>
                  <Image
                    src={"/회원가입 상세 화면.png"}
                    width={670}
                    height={400}
                    alt="회원가입 상세 화면"
                  ></Image>
                </li>
                <li>
                  <h4>이미지 업로드</h4>
                  <p>
                    인풋 요소의 타입을 파일로 지정하고 이미지 파일만
                    허용하였습니다. <br />
                    그리고 블럭 요소를 인풋 요소 뒤에 위치시켜 그 블럭 요소를
                    통해 업로드 할 이미지의 미리보기가 가능하도록 하였습니다.
                  </p>
                  <Image
                    src={"/이미지 업로드 전 화면.png"}
                    width={700}
                    height={400}
                    alt="이미지 업로드 전 화면"
                  ></Image>
                  <Image
                    src={"/이미지 업로드 후 화면.png"}
                    width={700}
                    height={400}
                    alt="이미지 업로드 후 화면"
                  ></Image>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
