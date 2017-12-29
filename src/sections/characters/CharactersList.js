import React, { Component } from 'react'
import {FlatList, RefreshControl, StyleSheet, Text, View} from "react-native";
import CharactersCell from './CharactersCell'
import { connect } from 'react-redux'
import * as charactersActions from '../../redux/actions/charactersActions'
import { Actions } from "react-native-router-flux";


class CharactersList extends Component{

    constructor(props){
        super(props)
        this.onEndReached = this.onEndReached.bind(this)
    }

    onEndReached() {
        if(  this.props.list.length < this.props.total && !this.props.isFetching) {
            console.log("Dentro de la funcion")
            let newOffset = this.props.offset + 10
            console.log("newOffset", newOffset)
            this.props.fetchCharactersList(newOffset)
            console.log("onEndReached newOffset: ", this.props.fetchCharactersList(newOffset))
        }
    }

    componentWillMount(){
        this.props.initCharactersList()
        // this.props.fetchCharactersListByName('wolverine')
        // console.log("componentWillMount,fetchCharactersListByName ", this.props.fetchCharactersListByName('wolverine'))
    }

    onSelect(item){
        this.props.updateCharacterSelected(item)
    }

    renderItem(item) {
        return(
            <CharactersCell
                item={ item }
                onSelect={ ( item ) => this.onSelect( item ) }
            />
        )
    }

    render(){

        const list = this.props.list
        const total =  this.props.total
        const offset =  this.props.offset

        return(
            <View style={styles.container}>
                <FlatList
                data={ this.props.list }
                renderItem={ ({item}) => this.renderItem( item ) }
                onEndReached={ this.onEndReached }
                enableEmptySections={true}
                refreshControl = {
                    <RefreshControl
                    refreshing={this.props.isFetching}
                    onRefresh={ () => this.props.initCharactersList() }
                    colors={['white']}
                    tintColor={'white'}
                    />
                }
                keyExtractor={ ( item, index ) => index }
                extraData={ this.props }
                />
            </View>
        )
    }

}

const mapStateToProps = ( state ) => {

    return {
        list: state.charactersReducers.list,
        item: state.charactersReducers.item,
        total: state.charactersReducers.total,
        offset: state.charactersReducers.offset,
        isFetching: state.charactersReducers.isFetching,
    }
}

const mapDispatchToProps = ( dispatch, props ) => {

    return {
        fetchCharactersList : ( offset ) => {
            dispatch(charactersActions.updateCharactersListOffset(offset))
            dispatch(charactersActions.fetchCharactersList())
        },

        updateCharacterSelected: ( item ) => {
            dispatch(charactersActions.updateCharacterSelected( item ))
            Actions.CharacterDetail( { title: item.name } )
        },

        initCharactersList: () => {
            dispatch(charactersActions.initCharactersList())
        },


        // fetchCharactersListByName( item ){
        //     dispatch(charactersActions.fetchCharactersListByName( item ))
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});







































