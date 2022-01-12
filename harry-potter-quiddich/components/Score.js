import React from 'react';
import { StyleSheet,  View, Image, Dimensions } from 'react-native';



function Score(props){
    const sH = Dimensions.get("screen").height;
    const sW = Dimensions.get("screen").width;
    return(
        <View>
            <h1 > Your Score = {props.score} </h1>
        </View>
    )
}



export default Score