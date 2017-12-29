import React, { Component } from 'react'
import {Button, Image, StyleSheet, Text, View} from "react-native";
import {connect} from "react-redux";
import HeroesActions from '../../redux/reducers/charactersReducers'

class CharacterDetail extends Component{

    linkButtonPressed(){

    }


    render() {
        const { character } = this.props
        console.log("mapStateToProps CharacterDetail: ",character)
        const characterImage =  character && character.thumbnail ? { uri: character.thumbnail.path + '/landscape_medium.' + character.thumbnail.extension } : null
        const characterName = character && character.name
        // const characterWiki = character.

        return (
            <View>
                <Image
                    style={ styles.imageStyle }
                    source={ characterImage }
                    resizeMode={ 'cover' }
                />
                <Button title={ `Mas sobre ${characterName}` }
                onPress={() => this.linkButtonPressed()}
                />
                <Text>Aparece en: </Text>
            </View>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        character: state.charactersReducers.item
    }
}

export default connect(mapStateToProps, null)(CharacterDetail)



const styles = StyleSheet.create({
    imageStyle:{
        width: '100%',
        height: 200,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
    textName: {
        fontSize: 20,
        textAlign:'center'
    }
});














