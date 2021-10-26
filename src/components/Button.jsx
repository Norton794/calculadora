import React from "react";

export default ({label}) => {
  const style = {
    fontSize: "1.4em",
    backgroundColor: "#fff",
    border: "none",
    borderRight: "solid 1px #888",
    borderBottom: '1px solid #888',
    outline: 'none',
  };

  return <button style={style} className="button">{label}</button>;
};
