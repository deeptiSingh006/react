import React from "react";
import GridItem from "./GridItem";
import styles from "./Grid.module.css";
const Grid = (props) => {
const a=props.fact;

  function renderfact(){
   
    return(
      a.map((item)=>{
        console.log("item is" + item.id);
        <GridItem key={item.id} p={item}/>
      })
    );
  }
  return (
    <section className={styles.grid}>
     {renderfact()};
    </section>
  );
};
export default Grid;
