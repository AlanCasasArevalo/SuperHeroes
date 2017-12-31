import React, { Component } from 'react'
import { FlatList, RefreshControl, StyleSheet, Text, View, Alert } from "react-native";
import CharactersCell from './CharactersCell'
import { connect } from 'react-redux'
import * as charactersActions from '../../redux/actions/charactersActions'
import { Actions } from "react-native-router-flux";
import * as Colors from '../../commons/Colors'

var Spinner = require('react-native-spinkit');



class CharactersList extends Component {

    constructor(props) {
        super(props)
        this.onEndReached = this.onEndReached.bind(this)
    }

    onEndReached() {
        if (this.props.list.length < this.props.total && !this.props.isFetching) {
            let newOffset = this.props.offset + 10
            this.props.fetchCharactersList(newOffset)
        }
    }

    componentWillMount() {

        if (this.props.initCharactersList) {
            this.props.initCharactersList()
        } else {
            Alert.alert(
                'Estamos sin conexion',
                'Por favor ve a la configuracion y danos acceso para poder darte los personajes',
                [
                    { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'OK', onPress: () => this.props.initCharactersList() },
                ],
                { cancelable: false }
            )
        }

        // this.props.initCharactersList()
        // this.props.fetchCharactersListByName('wolverine')
        // console.log("componentWillMount,fetchCharactersListByName ", this.props.fetchCharactersListByName('wolverine'))
    }

    onSelect(item) {
        this.props.updateCharacterSelected(item)
    }

    renderItem(item) {
        return (
            <CharactersCell
                item={item}
                onSelect={(item) => this.onSelect(item)}
            />
        )
    }

    render() {

        const list = this.props.list
        const total = this.props.total
        const offset = this.props.offset

        return (
            <View style={styles.container}>
                <Spinner style={styles.spinner} isVisible={this.props.isFetching} size={50} type={'9CubeGrid'} />

                <FlatList
                    data={this.props.list}
                    renderItem={({ item }) => this.renderItem(item)}
                    onEndReached={this.onEndReached}
                    enableEmptySections={true}
                    // refreshControl = {
                    //     <RefreshControl
                    //     refreshing={this.props.isFetching}
                    //     onRefresh={ () => this.props.initCharactersList() }
                    //     colors={['white']}
                    //     tintColor={'white'}
                    //     />
                    // }
                    keyExtractor={(item, index) => index}
                    extraData={this.props}
                />
            </View>
        )
    }

}

const mapStateToProps = (state) => {

    return {
        list: state.charactersReducers.list,
        item: state.charactersReducers.item,
        total: state.charactersReducers.total,
        offset: state.charactersReducers.offset,
        isFetching: state.charactersReducers.isFetching,
    }
}

const mapDispatchToProps = (dispatch, props) => {

    return {
        fetchCharactersList: (offset) => {
            dispatch(charactersActions.updateCharactersListOffset(offset))
            dispatch(charactersActions.fetchCharactersList())
        },

        updateCharacterSelected: (item) => {
            dispatch(charactersActions.updateCharacterSelected(item))
            Actions.CharacterDetail({ title: item.name })
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
        backgroundColor: Colors.backgroundColor
    },
    spinner: {
        alignSelf: 'center',
        marginTop: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '5%',
        color: Colors.spinnerColor,
    },
});







































