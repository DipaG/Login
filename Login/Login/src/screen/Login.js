import React from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import CardView from './CardView';
import CardViewSection from './CardViewSection';


class Login extends React.Component{

    constructor(){
        super()
        this.state = {
            email:"",
            password:""
        }
    }

    valueChanged (text){
        console.log("Value changed = ",text)
        this.props.usernameAction(text)
    }
    passwordChanged (text) {
        this.props.passwordAction(text)
    }

    login(){
        
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: this.state.email,
              password: this.state.password,
            }),
          }).then((response) => response.json()).then((responseJson) => {
            console.log(responseJson)
          })
          ;
    }
    render(){


        const {textInputStyle, textStyle} = styles

        return(
            <View style= {{flex:1, marginTop:50}}>
                <CardView>
                    <CardViewSection>
                        <Text style = {textStyle}>Username -- dsdfsdfsd Adding username</Text>

                        <TextInput 
                        defaultValue={this.state.email}
                        onChangeText = {(text) => this.setState({email:text})}
                        style = {textInputStyle}
                        placeholder={"Email"}/>
                    </CardViewSection>
                </CardView>
                <CardView>
                    <CardViewSection>
                        <Text style = {textStyle}>Password</Text>
                        <TextInput 
                        value = {this.state.password}
                        onChangeText = {(text) => this.setState({password:text})}
                        style = {textInputStyle} 
                        placeholder={"Password"}
                        autoCapitalize={'none'}
                        />
                     </CardViewSection>
                </CardView>
                <View style = {{backgroundColor:'black',marginTop:30,marginLeft:10,marginRight:10,flex:1/10}}>

                        
                        <TouchableOpacity  style = {{justifyContent:'center',flex:1,alignItems:'center'}} onPress={this.login.bind(this)}>
                           <Text style = {[textStyle,{color:'white',fontSize:16}]}>Login</Text>


                        </TouchableOpacity>
                   

                </View>
   
            </View>
        );
    }
}
const styles = StyleSheet.create({
    textInputStyle:{
        height:20
    },
    textStyle:{
            height:20,
            marginRight:10,
    }
})


export default Login;
