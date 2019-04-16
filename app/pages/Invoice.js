import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import Logo from '../Components/Logo';

export default class Invoice extends Component{
    constructor(props){
        super();
    }
    static navigationOptions=({navigation})=>{
        navigation.title='Invoice';
        return{
            header:<Logo navigation={navigation}/>
        };
    };
    render(){
        return(
            <View>
                <Text>Invoice</Text>
                <Button 
                title="Go to Home"
                onPress={()=>this.props.navigation.navigate('Home')}>
                </Button>
            </View>
        )
    }
}