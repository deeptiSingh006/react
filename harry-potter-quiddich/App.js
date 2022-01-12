import { StatusBar } from 'expo-status-bar';
import {useEffect, useState} from 'react';
import { StyleSheet, View, Dimensions,ImageBackground } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';
import Hp from './components/Hp';
import Towers from './components/Towers';
import GameOver from './components/GameOver';

export default function App() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const [hpVerticalPosition,sethpVerticalPosition]=useState(screenHeight/2);
  const [score,setScore]=useState(0);
 
  const hpLeft=screenWidth/2;
  const gravity=3;
  let TimerId, TowerTimerId, secondTowerTimerId;
  let towerHeight = 0.8*screenHeight/2 ;
  let towerWidth = screenWidth*0.1;
  let gap = 0.18*screenHeight;
  // Height and width of Harry Potter Image
  const hpImageWidth = 70;
  const hpImageHeight = 60;
  // Harry Potter will fall after every 50 milli seconds
  const hpFallTimeInterval = 50 ;
  const towerMovementInterval = 40;
  const stiltAdjuster = 0.25*screenHeight;

  // We will set the First and Second tower Horizontal postion and create effect of movement 
  // BY updating the Horizontal postion at regular intervals
  const [firstTowerHorizontalPosition,setFirstTowerHorizontalPosition]=useState(screenWidth);
  const [secondTowerHorizontalPosition,setsecondTowerHorizontalPosition]=useState(screenWidth + screenWidth/1.85 );

  // This is to have a Stilt for the tower that helps to 
  // randomise the tower height
  const [firstTowerRandomStilt,setFirstTowerStilt]=useState(0);
  const [secondTowerRandomStilt,setSecondTowerStilt]=useState(0);
  const [isGameOver, setIsGameOver]= useState(false);

  
  // Make a Falling Harry Potter
  useEffect(
      ()=>{
        // If Harry Potter has not hit the bottom of the screen keep updating 
        // Harry Potter postition and re-rendering the Harry POtter image on screen with updated values
        // after every 50 ms Harry Potter falls by 3 steps it is named as gravity
        if(hpVerticalPosition>0){
          TimerId=setInterval(()=>{sethpVerticalPosition(hpVerticalPosition=>hpVerticalPosition-gravity)},hpFallTimeInterval)
          // we keep on clearing the timers when Harry POtter postion is udpated
          return ()=>{
            clearInterval(TimerId)
          }
        }
      }
    // Only on change of hpVerticalPosition this function is executed. Helps to prevent side-effects due to component re-render
    ,[hpVerticalPosition])

    // Send the First Tower 
    // to give a smooting effect of moving out of screen we give the effect
    // Tower horizontal position is allowed to go negative by width of the tower
    useEffect(
      ()=>{
        if(firstTowerHorizontalPosition> -towerWidth){
          TowerTimerId=setInterval(()=>{setFirstTowerHorizontalPosition(firstTowerHorizontalPosition => firstTowerHorizontalPosition -5)},towerMovementInterval)
          return ()=>{
          clearInterval(TowerTimerId)
          }
        }
        else{
          setFirstTowerHorizontalPosition(screenWidth);
          setFirstTowerStilt(-1*Math.random()*stiltAdjuster)
          setScore(score=>score+1)
        }
      }
    ,[firstTowerHorizontalPosition])

  // Start Sending in the Second Tower
  // Its intial postion is after the First tower appx. half of the screen after the first tower 
  // This will give illusion towers are coming after ragular interval 
  // when first tower will be in middle of the screen second tower till start appearing
  // when first tower will leave the screen second tower will be in middle
  useEffect(() => {
    if (secondTowerHorizontalPosition > -towerWidth) {
      secondTowerTimerId = setInterval(() => {
        setsecondTowerHorizontalPosition(secondTowerHorizontalPosition => secondTowerHorizontalPosition - 5)
      }, 40)
        return () => {
          clearInterval(secondTowerTimerId)
        }
      } else {
          setsecondTowerHorizontalPosition(screenWidth)
          setSecondTowerStilt( -1*Math.random() * stiltAdjuster)
          setScore(score=>score+1)
        }
  }, [secondTowerHorizontalPosition])

// Harry Potter Jump Function 
// On every screen press change Harry Potter vertical postion by 20 steps upward
function jump(){
  sethpVerticalPosition(hpVerticalPosition=>hpVerticalPosition+50)
}

//check for collisions
    useEffect(() => {
      //Check 4 things 
      // 1. Harrpotter Height is less than height of upper pillar
      // 2. Harry Potter height is more than the height ot lower pillar
      // 3. Do this compariosn only at middle of the screen, becasue Harry Potter never moved only pillars more
      // 4. Adsust for the width of the Harry POtter hpImageWidth/2
      // Not imeplemented: Adjusting for the with of the tower
      if (
        ((hpVerticalPosition > (firstTowerRandomStilt + towerHeight + gap ) ||
        hpVerticalPosition < (firstTowerRandomStilt + towerHeight  )) &&
        (firstTowerHorizontalPosition> (screenWidth/2  - hpImageWidth/2 ) && firstTowerHorizontalPosition< (screenWidth/2 + hpImageWidth/2 ) )
        )
        || 
        ((hpVerticalPosition > (secondTowerRandomStilt + towerHeight + gap) ||
        hpVerticalPosition < (secondTowerRandomStilt + towerHeight )) &&
        (secondTowerHorizontalPosition > (screenWidth/2 - hpImageWidth/2) && secondTowerHorizontalPosition < (screenWidth/2 + hpImageWidth/2) )
        )
        ) 
        {
        console.log('game over')
        gameOver()
      }
    })

    // On Game over 
    // 1. Clear all the interval timers
    // 2. Set Game over to true
    // 3. Call game over component 
    const gameOver = () => {
      clearInterval(TimerId)
      clearInterval(TowerTimerId)
      clearInterval(secondTowerTimerId)
      setIsGameOver(true)
    }
  
  return (

    <TouchableWithoutFeedback onPress={jump}>
    <View style={styles.container}>
      <Hp hpLeft={hpLeft} hpVerticalPosition={hpVerticalPosition} hpImageWidth={hpImageWidth} hpImageHeight={hpImageHeight} />
      <Towers towerXPosition={firstTowerHorizontalPosition} randomStilt={firstTowerRandomStilt} towerHeight={towerHeight} gap={gap}/>
      <Towers towerXPosition={secondTowerHorizontalPosition} randomStilt={secondTowerRandomStilt} towerHeight={towerHeight} gap={gap}/>
      {isGameOver && <GameOver score={score+1}/>}
    </View>
    </TouchableWithoutFeedback>
  );
}

// Overflow is to stop showing scroll bar in web mode
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
    'overflow-x': 'hidden'
    
  },
 
});
