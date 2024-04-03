import FirstProject from "@/page/FirstProject";
import SecondProject from "@/page/SecondProject";
import ThirdProject from "@/page/ThirdProject";

export default function ProjectId(props) {
  return (
    <>
      {props.params.id === "1" ? <FirstProject /> : null}
      {props.params.id === "2" ? <SecondProject /> : null}
      {props.params.id === "3" ? <ThirdProject /> : null}
    </>
  );
}
