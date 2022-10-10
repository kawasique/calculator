import React from "react";
import styles from "./Controls.module.css"

function ControlButton({ className = "", icon, ...props }) {
  return (
    <button className={styles.controlButton + " " + className}>
      <img src={icon} />
    </button>
  );
}

function Controls() {
  return (
    <div className={styles.controls}>
      <ControlButton className={styles.settings} icon="icon-gear.svg" />
      <span>Calculator</span>
      <ControlButton className={styles.history} icon="icon-history.svg" />
      <ControlButton className={styles.copy} icon="icon-copy.svg" />
    </div>
  );
}

export default Controls;
