
import React from 'react';
import { View, Image } from 'react-native';
function Towers(props){
//This Tower has two pillars 
//1. inverted from upside pillar
//2. Gap
//3. Another straight pillar 
//4. Stilt / Platfrom that helps to move complete tower set up and down  
    return (
        <>
        {/* Making First Pillar view */}
            <View style={{
                position: 'absolute',
                left: props.towerXPosition,
                bottom: props.randomStilt + props.towerHeight  + props.gap
            }}>
            <Image style={{width: undefined , height: props.towerHeight,
                 aspectRatio: 1 / 2 }}  
                 source={require('../assets/TowersInv.png')}
            />
            </View>
         {/* Making Second Pillar view */}
            <View style={{
                position: 'absolute',
                left: props.towerXPosition,
                bottom: props.randomStilt
            }}>
             <Image style={{width: undefined , height: props.towerHeight,
                 aspectRatio: 1 / 2}}  
                 source={require('../assets/Towers.png')}
            />
            </View>
        </>
    )
}

export default Towers