import styles from "../../styles/ProgramingSkill.module.css";
import Image from "next/image";

export default function ProgramingSkill() {
  return (
    <>
      <section className="container">
        <div className={styles.listWrapper}>
          <ul className={styles.skillList}>
            <li>
              <Image
                src={"/리액트 아이콘.png"}
                width={30}
                height={30}
                alt="리액트 아이콘"
                style={{ marginRight: 3, transform: "translateY(3px)" }}
              />
              ReactJS
            </li>
            <li>
              <Image
                src={"/자바스크립트 아이콘.png"}
                width={30}
                height={30}
                alt="자바스크립트 아이콘"
                style={{ marginRight: 3, transform: "translateY(3px)" }}
              />
              JavaScript
            </li>
            <li>
              <Image
                src={"/html-icon.png"}
                width={30}
                height={30}
                alt="HTML 아이콘"
                style={{ marginRight: 3, transform: "translateY(3px)" }}
              />
              HTML5
            </li>
          </ul>
          <ul className={styles.skillList}>
            <li>
              <Image
                src={"/넥스트 아이콘.png"}
                width={30}
                height={30}
                alt="넥스트 아이콘"
                style={{ marginRight: 3, transform: "translateY(3px)" }}
              />
              NextJS
            </li>
            <li>
              <Image
                src={"/타입스크립트 아이콘.png"}
                width={30}
                height={30}
                alt="타입스크립트 아이콘"
                style={{ marginRight: 3, transform: "translateY(3px)" }}
              />
              TypeScript
            </li>
            <li>
              <Image
                src={"/css-icon.png"}
                width={30}
                height={30}
                alt="CSS 아이콘"
                style={{ marginRight: 3, transform: "translateY(3px)" }}
              />
              CSS3
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
