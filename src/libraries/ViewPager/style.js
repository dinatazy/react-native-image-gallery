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
        flexDirection: 'row',
        flex: 0.12,
        backgroundColor: '#141414',
        alignItems: 'flex-end',
    },

    titleContainer: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10,
    },

    closeText: {
        color: 'white',
        marginLeft: 10,
        marginBottom: 10,
    },

    footer: {
        width: width,
        flex: 0.09,
        backgroundColor: '#141414',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.3,
        borderColor: '#242424',
    },
    footer2: {
        flexDirection: 'row',
        width: width,
        flex: 0.09,
        backgroundColor: '#141414',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    gridfooter: {
        width: width,
        flex: 0.09,
        backgroundColor: '#141414',
    },

    gridView: {
        backgroundColor: 'black',
        flex: 1,
    },

    imageContainer: {
        justifyContent: 'flex-end',
        padding: 10,
    },

    image: {
        width: 105,
        height: 105,
        borderRadius: 5,
    },

    active: {
        color: 'white'
    },

    prevBtn: {
        transform: [{ rotate: '180deg' }],
    },

    disabled: {
        color: 'grey'
    }

})