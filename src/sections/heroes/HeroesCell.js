import React, { Component } from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

export default class HeroesCell extends Component{

    static defaultProps = {
        onSelect: () => {},
        item : {}
    }

    render() {
        const { item, onSelect } = this.props
        const imageURL = item.heroImage ? { uri: item.heroImage } : null

        return (

            <TouchableOpacity
                style={ styles.container }
                onPress={ () => {
                    // this.props.onSelect( this.props.item )
                }}
            >
                {/*<Text>{ this.props.item.heroName }</Text>*/}
                <Image
                    style={ styles.cellStyle }
                    source={imageURL}
                    resizeMode={'cover'}
                />
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








