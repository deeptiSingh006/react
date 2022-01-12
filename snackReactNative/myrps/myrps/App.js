import * as React from 'react';
import { Text, View, StyleSheet,Image,Button } from 'react-native';
import Constants from 'expo-constants';
import ImageRPS from './components/ImageRPS';
import Scoreboard from './components/Scoreboard';
import {useState} from 'react';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [useStateScore,setStateScore] = useState(0);
  function handlerCounter(){
    setStateScore(useStateScore+1)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
       Rock Paper Scissor!.
      </Text>

      <ImageRPS/>
      <Text style ={styles.p1}>
      Make Your Choice
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#8eb256',
    padding: 8,
  },
  paragraph: {
    margin: 20,
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#fcd63c',
  },
  p1:{
    margin:20,
    fontSize:20,
     color : "#fcd63c",
    fontWeight: 'bold',
    textAlign: 'center',

  }
});
