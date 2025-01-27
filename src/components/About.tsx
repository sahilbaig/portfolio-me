import SkillIcon from "./SkillIcon";
import Line from "./Line";
import JSIcon from "@/icons/JSdraw";

export default function About() {
  return (
    <div
      style={{
        backgroundColor: "#1E1E1F",
        padding: "20px",
        borderRadius: "30px",
      }}
    >
      <h1>About me</h1>
      <Line />

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, rem quo
        tenetur harum numquam reprehenderit vel nesciunt voluptatum expedita
        minus recusandae eaque delectus aliquid pariatur in, quisquam, amet non
        adipisci.
      </p>
      <h1>Skills</h1>
      <JSIcon></JSIcon>
      <SkillIcon></SkillIcon>
    </div>
  );
}
