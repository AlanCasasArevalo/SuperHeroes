import React, { Component } from 'react'
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import HeroesActions from '../../redux/reducers/charactersReducers'
import { Colors } from '../../commons/index';

class CharacterDetail extends Component {

    // linkButtonPressed(){
    //     console.log("linkButtonPressed pulsado")
    // }


    renderItem(item) {
        return (
            <View>
                <Text style={styles.flatListStyle} >{ item.name }</Text>
            </View>
        )
    }

    render() {
        const { character } = this.props
        const comics = character.comics

        console.log("mapStateToProps CharacterDetail: ", character)
        const characterImage = character && character.thumbnail ? { uri: character.thumbnail.path + '/landscape_medium.' + character.thumbnail.extension } : null
        const characterName = character && character.name
        // const characterWiki = character.

        return (
            <View style={styles.container}>
                <Image
                    style={styles.imageStyle}
                    source={characterImage}
                    resizeMode={'cover'}
                />
                {/*<Button title={ `Mas sobre ${characterName}` }*/}
                {/*onPress={() => this.linkButtonPressed()}*/}
                {/*/>*/}

                <Text style={styles.titleText}>Aparece en: </Text>
                <FlatList
                    data={this.props.character.comics.items}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={(item, index) => index}
                    extraData={this.props}
                />

            </View>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        character: state.charactersReducers.item,
    }
}

export default connect(mapStateToProps, null)(CharacterDetail)



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor
    },
    imageStyle: {
        width: '100%',
        height: 200,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: Colors.backgroundColor
    },
    titleText: {
        fontSize: 25,
        textAlign: 'center',
        color : Colors.spinnerColor
    },
    flatListStyle: {
        flex:1,
        fontSize: 18,
        backgroundColor: Colors.backgroundColor,
        color : Colors.spinnerColor
    },
});














