import React from "react";
import styles from "./GridItem.module.css";

const GridItem = (props) => {
  
  return (
  
    <div className={styles.card}>
      <h2> in gridItem</h2 >
      <h2 className={styles.title}>{props.p.title}</h2>
      <article className={styles.fact}>{props.p.fact}</article>
    </div>
  );
}
export default GridItem;
