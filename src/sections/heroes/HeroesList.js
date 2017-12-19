import React, {Component} from 'react'
import {FlatList, StyleSheet, Text, View} from "react-native";
import * as axios from "axios";
import * as AsyncCalls from "../../commons/AsyncCalls";

export default class HeroesList extends Component{

    constructor(props){
        super(props)
        this.state = {
            list : []
        }
    }

    componentWillMount(){
        AsyncCalls.fetchSuperHeroes()
    }

    renderItem(item) {
        return(
            <View style={ styles.cellStyle }>
                <Text> { item.heroeName } </Text>
                <Text> { item.heroeDescription } </Text>
            </View>
        )
    }

    render(){
        console.log("This.state.list", this.state.list)
        return(
            <View>
                <FlatList
                data={ this.state.list }
                renderItem={ ({item}) => this.renderItem( item ) }
                keyExtractor={ ( item ) => item.title}
                />

                <Text> Texto dummie </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    cellStyle:{ height: 200,
        backgroundColor: 'red',
        marginVertical: 10
    }
});






































