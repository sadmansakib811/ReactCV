import React, { useState } from "react";
import Skill from "./Skill";

const SkillsList = () => {
  const [skills] = useState([
    { name: "HTML & CSS", level: 5 },
    { name: "JavaScript", level: 5 },
    { name: "React", level: 4 },
    { name: "Node.js", level: 4 },
    { name: "SQL", level: 4 },
    { name: "MongoDB", level: 4 }
  ]);
  return (
    <div>
      {skills.map((skill) => (
        <Skill name={skill.name} level={skill.level} key={skill.index} />
      ))}
    </div>
  );
};
export default SkillsList;
