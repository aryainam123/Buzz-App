import React, { Component } from 'react'
import { Text,View} from 'react-native'

export default class InstagramScreen extends React.Component{
    render(){
        return(
            <View style = {{flex:1,justifyContent:'center',alignItems:'center',color:"blue"}}>
                <Text style={{
                  fontSize:30,
                  color:"blue",
                  fontFamily:'bold'
                  }}>Instagram</Text>
            </View>
        )
    }
}