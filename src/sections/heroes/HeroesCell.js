import React, { Component } from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

export default class HeroesCell extends Component{

    render() {
        const { item } = this.props

        return (
            <TouchableOpacity
                onPress={ () => {
                    this.props.onSelect( item )
                }}
            >
                <Text>{ this.props.item.heroeName }</Text>
            </TouchableOpacity>
        )
    }
}







