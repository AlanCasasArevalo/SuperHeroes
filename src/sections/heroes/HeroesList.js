import React, {Component} from 'react'
import {FlatList, StyleSheet, Text, View} from "react-native";
import * as AsyncCalls from "../../commons/AsyncCalls";
import { fetch } from '../../webservices/webservices'
import HeroesCell from './HeroesCell'

export default class HeroesList extends Component{

    constructor(props){
        super(props)
        this.state = {
            list : [],
            selected: null
        }
    }

    componentWillMount(){
        fetch('/getAllHeroes')
            .then(response =>{
                console.log("Respuesta", response)
                const list = response.data && response.data.results ? response.data.results : []
                this.setState ({ list: response.results })
            })
            .catch(error => {
                console.log("Error: ", error)
            })
    }

    onSelect(heroe){
        console.log("Heroe", heroe)
        this.setState({ selected: heroe })
    }

    renderItem(item) {

        console.log("Item", item)
        return(
            <HeroesCell
                item={item}
                onSelect={ (item) => this.onSelect( item ) }
            />
        )
    }

    render(){
        return(
            <View>
                <FlatList
                data={ this.state.list }
                renderItem={ ({item}) => this.renderItem( item ) }
                keyExtractor={ ( item ) => item.heroeName}
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






































