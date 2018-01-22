import React from 'react'
import {
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native'

let { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    header: {
        width: width,
        flex: 0.12,
        backgroundColor: '#141414',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    title: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom:10,
    },

    footer:{
        width: width,
        flex: 0.09,
        backgroundColor: '#141414',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth:0.3,
        borderColor:'#242424',
    },
    footer2:{
        width: width,
        flex: 0.09,
        backgroundColor: '#141414',
        alignItems: 'center',
        justifyContent: 'center',
    },

})