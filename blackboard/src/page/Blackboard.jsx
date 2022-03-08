import React from "react";
import "./Blackboard.css";
import { useState } from "react";

function Blackboard() {
  const [text, setText] = useState("");

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div id="Container">
      <p id="title">디지털 칠판</p>
      <div id="Box">{text}</div>
      <input id="text" onChange={onChangeText} placeholder="입력하시오" />
    </div>
  );
}

export default Blackboard;
