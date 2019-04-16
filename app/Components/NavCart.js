import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

export default class NavCart extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <View>
                <Text>NavCart</Text>
                {/* <Button 
                title="Go to Carts"
                onPress={()=>this.props.navigation.navigate('Cart')}>
                </Button> */}
            </View>
        )
    }
}