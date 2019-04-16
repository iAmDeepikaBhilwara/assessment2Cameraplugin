import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import Logo from '../Components/Logo';

export default class Cart extends Component{
    constructor(props){
        super();
    }
    static navigationOptions=({navigation})=>{
        navigation.title='Cart';
        return{
            header:<Logo navigation={navigation}/>
        };
    };
    render(){
        return(
            <View>
                <Text>Cart</Text>
                <Button 
                title="Go to Invoice"
                onPress={()=>this.props.navigation.navigate('Invoice')}>
                </Button>
            </View>
        )
    }
}