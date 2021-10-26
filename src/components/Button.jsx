import React from "react";
import "./Button.css";
export default ({ label, operation, double, triple, click }) => {
  const style = {
    fontSize: "1.4em",
    backgroundColor: "#fff",
    border: "none",
    borderRight: "solid 1px #888",
    borderBottom: "1px solid #888",
    outline: "none",
  };

  return (
    <button
    onClick={e => click && click(label)}
      style={style}
      className={
        `button 
            ${operation ? "operation" : ""} 
            ${double ? "double" : ""} 
            ${triple ? "triple" : ""} 
      `}
    >
      {label}
    </button>
  );
};
