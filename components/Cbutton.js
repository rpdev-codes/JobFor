import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cbutton = () => {
   const callOnPress=()=>{console.log("!!>>PRESED<<!!");} 
   const callOnLgPress=()=>{console.log("!!>>PRESEDDDDDDDDDDD<<!!");}
  return (
    <Pressable android_ripple={{color:'red', radius:23}} onPress={callOnPress} onLongPress={callOnLgPress} style={styles.cbutton}>
      <Text>
         i'm a custom button
      </Text>
    </Pressable>
  )
}

export default Cbutton

const styles = StyleSheet.create({
   cbutton:{height:50,
   width:150,
   borderRadius:25,
   alignContent:'center',
   alignItems:'center',
   justifyContent:'center',
backgroundColor:'#032fec25'
}})