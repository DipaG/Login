import React from 'react';
import {View,StyleSheet} from 'react-native';
const CardViewSection = (props) => {
    const {viewContainer} = styles
    return(
    <View style = {viewContainer}>{props.children}</View>
    )
}
export default CardViewSection;
const styles = StyleSheet.create({
    viewContainer : {
        borderBottomWidth:1,
        padding: 5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',

        borderColor: 'black',
        position:'relative',

  
        

    }
})