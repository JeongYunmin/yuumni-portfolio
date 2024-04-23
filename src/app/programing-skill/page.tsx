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
                src={"/images/리액트 아이콘.png"}
                width={30}
                height={30}
                alt="리액트 아이콘"
                style={{ marginRight: 3, transform: "translateY(4px)" }}
              />
              ReactJS
            </li>
            <li>
              <Image
                src={"/images/자바스크립트 아이콘.png"}
                width={30}
                height={30}
                alt="자바스크립트 아이콘"
                style={{ marginRight: 3, transform: "translateY(4px)" }}
              />
              JavaScript
            </li>
            <li>
              <Image
                src={"/images/html-icon.png"}
                width={30}
                height={30}
                alt="HTML 아이콘"
                style={{ marginRight: 3, transform: "translateY(4px)" }}
              />
              HTML5
            </li>
          </ul>
          <ul className={styles.skillList}>
            <li>
              <Image
                src={"/images/넥스트 아이콘.png"}
                width={30}
                height={30}
                alt="넥스트 아이콘"
                style={{ marginRight: 3, transform: "translateY(4px)" }}
              />
              NextJS
            </li>
            <li>
              <Image
                src={"/images/타입스크립트 아이콘.png"}
                width={30}
                height={30}
                alt="타입스크립트 아이콘"
                style={{ marginRight: 3, transform: "translateY(4px)" }}
              />
              TypeScript
            </li>
            <li>
              <Image
                src={"/images/css-icon.png"}
                width={30}
                height={30}
                alt="CSS 아이콘"
                style={{ marginRight: 3, transform: "translateY(4px)" }}
              />
              CSS3
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
