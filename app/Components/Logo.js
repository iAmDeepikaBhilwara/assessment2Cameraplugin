import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import {Icon,Header} from 'react-native-elements';

export default class Logo extends Component{
   
    render(){
        return(
            <View>
            <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text:this.props.navigation.title, style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
</View>
        )
    }
}