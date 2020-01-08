import React from 'react';
import {View,StyleSheet} from 'react-native';
const CardView = (props) => {



    const {viewContainer} = styles
    return(
    <View style = {viewContainer}>{props.children}</View>
    )
}
export default CardView;
const styles = StyleSheet.create({
    viewContainer : {
        borderColor: 'black',
        borderWidth:1,
        borderRadius:2,
        borderBottomWidth:0,
        shadowOffset:{width:0, height:2},
        shadowOpacity: 0.2,
        shadowRadius:2,
        
        paddingTop: 5,
        marginTop:10,
        marginLeft:5,
        marginRight:5,
        backgroundColor:'#fff'

    }
})