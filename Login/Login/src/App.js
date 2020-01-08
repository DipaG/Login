import React from 'react';
import {StyleSheet,View,StatusBar} from 'react-native';
import Profile from './screen/Profile';
import Login from './screen/Login';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'


const myGate = createStackNavigator({
        Login:Login,
        Profile:Profile

   
})
const AppIndex = createAppContainer(myGate)  

export default class App extends React.Component{
    render(){
        return(
                <View style={{flex:1}} >  
                    <StatusBar  
                        backgroundColor='red'  
                        barStyle='light-content'  
                    />  
                <AppIndex/>
                </View>

        );
    }
}

const styles = StyleSheet.create({  
    wrapper: {  
        flex: 1,  
    },  
    header:{  
        flexDirection: 'row',  
        alignItems: 'center',  
        justifyContent: 'space-between',  
        backgroundColor:'rgba(255,83,94,1)' ,
        paddingHorizontal: 18,  
        paddingTop: 35,  
    }  
});  