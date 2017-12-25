import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View } from "react-native";
import CharactersCell from './CharactersCell'
import { connect } from 'react-redux'
import * as charactersActions from '../../redux/actions/charactersActions'
import { Actions } from "react-native-router-flux";

// import {fetchCharactersListByName} from "../../redux/actions/charactersActions";


class CharactersList extends Component{

    componentWillMount(){
        this.props.fetchCharactersList()
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
        console.log("this.props.item", this.props.item)

        return(
            <View style={styles.container}>
                <FlatList
                data={ this.props.list }
                renderItem={ ({item}) => this.renderItem( item ) }
                keyExtractor={ ( item, index ) => index }
                extraData={ this.props }
                />
            </View>
        )
    }

}

const mapStateToProps = ( state ) => {
    return {
        list: state.charactersReducers.list.results,
        item: state.charactersReducers.item
    }
}

const mapDispatchToProps = ( dispatch, props ) => {

    return {
        fetchCharactersList : () => {
            dispatch(charactersActions.fetchCharactersList())
        },

        updateCharacterSelected: ( item ) => {
            dispatch(charactersActions.updateCharacterSelected( item ))
            Actions.CharacterDetail( { title: item.name } )
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






































