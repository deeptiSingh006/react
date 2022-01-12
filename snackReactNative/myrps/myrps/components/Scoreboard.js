import React, { Component } from 'react'
import { View,Image,StyleSheet,Text } from 'react-native'


export default function Scoreboard(props) {
  return(
   <View>
   
   <View style={styles.container}>
    {props.playerChoice=='r' && <View>
      <Text style={styles.place1} >Player</Text>
       <Image style={styles.logo} source={require('../assets/rock.png')} />
    </View> }
    {props.playerChoice=='p' && <View>
      <Text style={styles.place1} >Player</Text>
       <Image style={styles.logo} source={require('../assets/paper.png')} />
    </View> }
    {props.playerChoice=='s' && <View>
      <Text style={styles.place1} >Player</Text>
       <Image style={styles.logo} source={require('../assets/scissor.png')} />
    </View> }
     {props.computerChoice=='r' && <View>
      <Text style={styles.place1}>Computer</Text>
      <Image style={styles.logo} source={require('../assets/rock.png')} />
    </View>}
    {props.computerChoice=='p' && <View>
      <Text style={styles.place1}>Computer</Text>
      <Image style={styles.logo} source={require('../assets/paper.png')} />
    </View>}
    {props.computerChoice=='s' && <View>
      <Text style={styles.place1}>Computer</Text>
      <Image style={styles.logo} source={require('../assets/scissor.png')} />
    </View>}
   </View>
   <View>
      <Text style = {styles.place}> {props.winner}</Text>
   </View>
   </View>
    );
}
const styles = StyleSheet.create({
  container: {
     flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
 
  logo: {
    height: 135,
    width: 135,
    padding:10,
    borderWidth:4,
    margin:3
  },
  
place:{
padding:20,
textAlign:"center",
fontWeight:"bold",
fontSize: 28,
borderRadius:20,
borderWidth:4,margin:15,
 color : "#5086c4",
},

place1:{
textAlign:"center",
fontWeight:"bold",
fontSize: 24,
padding:10,
color:"#5086c4"
}
});