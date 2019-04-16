import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import {Card,Icon} from 'react-native-elements';
import Logo from '../Components/Logo';


export default class Products extends Component{
    constructor(props){
        super();
    }
    static navigationOptions=({navigation})=>{
        navigation.title='Products';
        return{
            header:<Logo navigation={navigation}/>
        };
    };
    render(){
        return(
            <View>
                <Card
  title='CUBIX'
  image={require('../images/cube.jpg')}>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
                <Text>Products</Text> 
                
                <Button 
                title="Go to Carts"
                onPress={()=>this.props.navigation.navigate('Cart')}>
                </Button>
            </View>
        )
    }
} 