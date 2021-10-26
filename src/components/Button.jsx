import React from "react";
import "./Button.css";
export default ({ label, operation, double, triple, click }) => {
 

  return (
    <button
    onClick={e => click && click(label)}
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
