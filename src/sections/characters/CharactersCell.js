import React, { Component } from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

export default class CharactersCell extends Component{

    static defaultProps = {
        onSelect: () => {},
        item : {}
    }

    render() {
        const { item, onSelect } = this.props
        console.log("item en CharactersCell", item)

        const imageURL = item.thumbnail ? { uri: item.thumbnail.path + '/landscape_medium.' + item.thumbnail.extension } : null
        const name = item.name ? item.name : "No name for this characters."

        return (

            <TouchableOpacity
                style={ styles.container }
                onPress={ () => {
                    this.props.onSelect( this.props.item )
                }}
            >
                <Image
                    style={ styles.cellStyle }
                    source={imageURL}
                    resizeMode={'cover'}
                />

                <Text>
                    { name }
                </Text>

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D54524',
    },
    cellStyle:{
        width: '100%',
        height: 100,
        marginVertical: 10
    }
});








