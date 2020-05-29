import React from 'react';
import './Cell.css';

function Cell(props) {
  return (
    <div onClick={props.clickHandler} className={["Cell", props.op ? "Operator" : "Cell"].join(" ")}>
      {props.val}
    </div>
  );
}

export default Cell;
