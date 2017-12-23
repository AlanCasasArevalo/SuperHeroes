import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View } from "react-native";
import { fetch } from '../../webservices/webservices'
import SeriesCell from './CharactersCell'
import { connect } from 'react-redux'
import * as charactersActions from '../../redux/actions/charactersActions'


class CharactersList extends Component{

    componentWillMount(){
        this.props.fetchSeriesList()
    }

    onSelect(item){
        this.props.updateCharacterSelected(item)
    }

    renderItem(item) {

        return(
            <SeriesCell
                item={item}
                onSelect={ (item) => this.onSelect( item ) }
            />
        )
    }

    render(){
        return(
            <View>
                <FlatList
                data={ this.props.list }
                renderItem={ ({item}) => this.renderItem( item ) }
                keyExtractor={ ( item ) => item.id }
                extraData={ this.state }
                />
            </View>
        )
    }

}

const mapStateToProps = ( state ) => {
    return {
        list: state.seriesReducers.list.results
    }
}

const mapDispatchToProps = ( dispatch, props ) => {

    return {
        fetchSeriesList : () => {
            dispatch(charactersActions.fetchCharactersList())
        },

        updateCharacterSelected: (item ) => {
            dispatch(charactersActions.updateCharacterSelected( item ))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    cellStyle:{
        height: '100%',
        backgroundColor: 'red',
        marginVertical: 10
    }
});






































