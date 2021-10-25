import React from "react";
import "./Calculator.css";
import Button from "../components/Button";
export default class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <Button />
      </div>
    );
  }
}
