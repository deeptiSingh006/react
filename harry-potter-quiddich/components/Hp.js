import React from 'react';
import { StyleSheet, View, Image } from 'react-native';



function Hp(props){
    return(
        <View style={{overflow: 'hidden', position: 'absolute', bottom: props.hpVerticalPosition, left: props.hpLeft}}>
            <Image style={{width: props.hpImageWidth, height: props.hpImageHeight  }}  
                 source={require('../assets/hp.png')}
            />
        </View>
    )
}



export default Hp
