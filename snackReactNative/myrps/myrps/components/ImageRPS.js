import React, { Component } from 'react'
import { View,Image,StyleSheet, TouchableOpacity  } from 'react-native'
import Scoreboard from './Scoreboard';
import {useState} from 'react';
import {useEffect} from 'react';

export default function ImageRPS() {
  const [getPlayerChoice,setPlayerChoice]=useState(0);
  const [getComputerChoice,setComputerChoice]=useState(0);
  const [getWinner,setWinner]=useState("Let's Play");

  function imgHandler(imgId,event){
    setPlayerChoice(imgId);
    const choices=['r','p','s'];
    var compChoice=choices[Math.floor(Math.random()*3)];
    setComputerChoice(compChoice);
    if(imgId === "r" && compChoice === "p")
    {setWinner("Computer Wins!!");}
    else if(imgId === "r" && compChoice === "s")
    { setWinner("You Win!!");}
    else if(imgId === "p" && compChoice === "r")
    { setWinner("You Win!!");}
    else if(imgId === "p" && compChoice === 's')
    { setWinner("Computer Wins!!");}
    else if(imgId === "s" && compChoice === "r")
    {setWinner("Computer Wins!!");}
    else if(imgId === "s" && compChoice === "p")
    {setWinner("You Win!!");}
    else
    {setWinner("Draw!!");}
  }
  return(
    <View>
    <Scoreboard playerChoice={getPlayerChoice} computerChoice={getComputerChoice} winner={getWinner}/>
    <View style={styles.container}>
    <TouchableOpacity onPress={(event)=>{imgHandler('r',event)}}> 
    <Image style={styles.logo} source={require('../assets/rock.png')} />
    </TouchableOpacity >
    <TouchableOpacity onPress={(event)=>{imgHandler('p',event)}} > 
    <Image style={styles.logo} source={require('../assets/paper.png')} />
    </TouchableOpacity >
    <TouchableOpacity onPress={(event)=>{imgHandler('s',event)}}> 
    <Image style={styles.logo} source={require('../assets/scissor.png')} />
    </TouchableOpacity >
    </View>
    </View>
    );
}
const styles = StyleSheet.create({
  container: {
     flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
   
  },
 
  logo: {
    margin:5,
    height: 90,
    width: 90,
    borderRadius:10,
    borderWidth: 3
  }
});
