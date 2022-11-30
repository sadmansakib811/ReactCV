import React from "react";

const CircleFull = ({ value = true }) => {
  return <div className={value ? "skill-circle selected" : "skill-circle"} />;
};
const SkillLevel = (...props) => {
  // const circles = props.level;
  return (
    //console.log(circles),
    <div className="skills">
      {[1, 2, 3, 4, 5].map((i) => (
        <CircleFull key={i} value={i < 4} /> //
      ))}
    </div>
  );
};
export default SkillLevel;

/* const SkillLevel = () => {
  return (
    <div className="skills">
      <div className="skill-circle selected" />
      <div className="skill-circle" />
      <div className="skill-circle" />
      <div className="skill-circle" />
      <div className="skill-circle" />
    </div>
  );
};
export default SkillLevel; */
