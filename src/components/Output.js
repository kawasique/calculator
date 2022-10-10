import styles from "./Output.module.css";
import React from "react";

function Output({prev, op, current, ...props}) {
  return (
    <div className={styles.output}>
      <p>{prev} {op}</p>
      <p>{current}</p>
    </div>
  );
}

export default Output;
