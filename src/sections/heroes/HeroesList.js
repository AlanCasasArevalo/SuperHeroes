import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View } from "react-native";
import { fetch } from '../../webservices/webservices'
import HeroesCell from './HeroesCell'
import { connect } from 'react-redux'
import * as heroesActions from '../../redux/actions/heroesActions'


class HeroesList extends Component{

    componentDidMount(){
        this.props.fetchHeroesList()
    }

    onSelect(item){
        // this.setState({ selected: item })
    }

    renderItem(item) {

        return(
            <HeroesCell
                item={item}
                onSelect={ (item) => this.onSelect( item ) }
            />
        )
    }

    render(){
        console.log("this.props HOUSELIST", this.props.list)

        return(
            <View>
                <FlatList
                data={ this.props.list }
                renderItem={ ({item}) => this.renderItem( item ) }
                keyExtractor={ ( item ) => item.heroName}
                extraData={ this.state }
                />
            </View>
        )
    }

}



const mapStateToProps = ( state ) => {
    console.log("mapDispatchToProps Estado global del la app", state)

    return {
        list: state.heroesReducers.list
    }
}

const mapDispatchToProps = ( dispatch, props ) => {

    return {
        fetchHeroesList : () => {
            dispatch(heroesActions.fetchHeroesList())
        },

        updateHeroSelected:() => {

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList)

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






































