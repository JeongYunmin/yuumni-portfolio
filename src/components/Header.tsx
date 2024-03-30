import styles from "../styles/Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <section className="container">
        <header className={styles.header}>
          <div className={styles.imgWrapper}>
            <Image
              src="/profile-image.JPG"
              alt="프로필 이미지"
              width={150}
              height={150}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <h1 className={styles.text}>
            "안녕하세요! &nbsp;저는 매사에 진심을 담아 끊임없이 앞으로 나아가는
            개발자가 되고 싶습니다."
          </h1>
        </header>
      </section>
    </>
  );
}
