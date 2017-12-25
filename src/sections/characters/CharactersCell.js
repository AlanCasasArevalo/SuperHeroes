import React, { Component } from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

export default class CharactersCell extends Component{

    static defaultProps = {
        onSelect: () => {},
        item : {}
    }

    render() {
        const { item, onSelect } = this.props
        // console.log("item en CharactersCell", item)

        const imageURL = item.thumbnail ? { uri: item.thumbnail.path + '/landscape_medium.' + item.thumbnail.extension } : null
        const name = item.name ? item.name : "No name for this characters."

        return (

            <TouchableOpacity
                onPress={ () => {
                    this.props.onSelect( this.props.item )
                }}
            >

                <Image
                    style={ styles.imageStyle }
                    source={ imageURL }
                    resizeMode={ 'cover' }
                />

                <View style={ styles.textContainer }>
                    <Text style={ styles.textName }>
                        { name }
                    </Text>
                </View>

            </TouchableOpacity>
        )
    }
}

// center,
//     contain,
//     cover,
//     repeat,
//     stretch


const styles = StyleSheet.create({
    imageStyle:{
        width: '100%',
        height: 200,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
    textName: {
        fontSize: 20,
        textAlign:'center'
    }
});








