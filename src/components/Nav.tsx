import styles from "../styles/Nav.module.css";
import Link from "next/link";

function Btn(props: any) {
  return (
    <div className={styles.btnWrapper}>
      <button className={styles.btn}>{props.text}</button>
    </div>
  );
}

export default function Nav() {
  return (
    <>
      <section className={styles.nav}>
        <Link href="/programing-skill" style={{ textDecoration: "none" }}>
          <Btn text={"Programing Skill"} />
        </Link>
        <Link href="/project" style={{ textDecoration: "none" }}>
          <Btn text={"Project"} />
        </Link>
        <Link href="/education" style={{ textDecoration: "none" }}>
          <Btn text={"Education"} />
        </Link>
      </section>
    </>
  );
}
