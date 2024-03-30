import styles from "../../styles/ProgramingSkill.module.css";

export default function ProgramingSkill() {
  return (
    <>
      <section className="container">
        <div className={styles.listWrapper}>
          <ul className={styles.skillList}>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML5</li>
          </ul>
          <ul className={styles.skillList}>
            <li>Next</li>
            <li>TypeScript</li>
            <li>CSS3</li>
          </ul>
        </div>
      </section>
    </>
  );
}
