import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Score from './Score';


function GameOver(props){
    return(
        <View >
            <Image  style={{width: 800 , height: 500}}
                 source={require('../assets/GameOver.gif')}
            />
            <Score score={props.score}/> 
        </View>
    )
}



export default GameOver