import styles from "../styles/Nav.module.css";
import Link from "next/link";

function Btn(props) {
  return (
    <>
      <button className={styles.btn}>{props.text}</button>
    </>
  );
}

export default function Nav() {
  return (
    <>
      <section className={[`container ${styles.nav}`].join(" ")}>
        <Link href={"http://localhost:3000"}>
          <Btn text={"Home"} />
        </Link>
        <Link href={"http://localhost:3000/" + "programing-skill"}>
          <Btn text={"Programing Skill"} />
        </Link>
        <Link href={"http://localhost:3000/" + "project"}>
          <Btn text={"Project"} />
        </Link>
        <Link href={"http://localhost:3000/" + "education"}>
          <Btn text={"Education"} />
        </Link>
      </section>
    </>
  );
}
