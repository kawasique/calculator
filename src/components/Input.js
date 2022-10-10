import React from "react";
import styles from "./Input.module.css";

function InputButton({ value, callback, className = "", ...props }) {
    return (
    <button className={styles.number + " " + className} onClick={() => callback(value)}>{value}</button>
  );
}

function Input({callback, props}) {
  return (
    <div className={styles.input}>
      <InputButton value="%" className={styles.function} callback={callback}/>
      <InputButton value="C" className={styles.function} callback={callback}/>
      <InputButton value="CE" className={styles.function} callback={callback}/>
      <InputButton value="<" className={styles.function} callback={callback}/>

      <InputButton value="1/x" className={styles.function} callback={callback}/>
      <InputButton value="x²" className={styles.function} callback={callback}/>
      <InputButton value="√" className={styles.function} callback={callback}/>
      <InputButton value="÷" className={styles.function} callback={callback}/>

      <InputButton value="7" callback={callback}/>
      <InputButton value="8" callback={callback}/>
      <InputButton value="9" callback={callback}/>
      <InputButton value="×" className={styles.function} callback={callback}/>

      <InputButton value="4" callback={callback}/>
      <InputButton value="5" callback={callback}/>
      <InputButton value="6" callback={callback}/>
      <InputButton value="-" className={styles.function} callback={callback}/>

      <InputButton value="1" callback={callback}/>
      <InputButton value="2" callback={callback}/>
      <InputButton value="3" callback={callback}/>
      <InputButton value="+" className={styles.function} callback={callback}/>

      <InputButton value="±" callback={callback}/>
      <InputButton value="0" callback={callback}/>
      <InputButton value="." callback={callback}/>
      <InputButton value="=" className={styles.function + " " + styles.equal} callback={callback}/>
    </div>
  );
}

export default Input;
