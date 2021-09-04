import React, { Component } from 'react'
import { Text,View} from 'react-native'

export default class FacebookScreen extends React.Component{
    render(){
        return(
            <View style = {{flex:1,justifyContent:'center',alignItems:'center',}}>
                <Text style={{
                  fontSize:30,
                  color:"blue",
                  fontFamily:'bold'
                  }}>Facebook</Text>
            </View>
        )
    }
}