//import "./styles.css";
import Background from "./Background/Background.js";
import Title from "./Title/Title.js";
import Grid from "./Grid/Grid.js";
import Rocket from "./Rocket/Rocket.js";
import Smoke from "./Rocket/Smoke.js";
import facts from "./NASA_facts.json";
import {useState} from 'react';

export default function App() {
 const [data,setdata]= useState(facts);
   return (
    <div>
      <Title />
      <Background />
      <Grid fact={data} />
      <Rocket />
      <Smoke />
    </div>
  );
}
