
import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Scene, Router } from 'react-native-router-flux'
import CharactersList from "./sections/characters/CharactersList";
import CharacterDetail from "./sections/characters/CharacterDetail";

import * as webservices from "./webservices/webservices";

import {createStore, applyMiddleware, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from './redux/reducers'

const reducer = combineReducers(reducers)
const store = createStore(
    reducer, applyMiddleware(thunk)
)

export default class App extends Component {

    componentWillMount(){
        webservices.configureAxios()
        StatusBar.setBarStyle('light-content')
    }

  render() {
    return (
        <Provider store={ store }
        >
            <Router>
              <Scene key='root'>
                <Scene key='charactersList'
                       component={ CharactersList }
                       hideNavBar
                />
                  <Scene key='CharacterDetail'
                         component={ CharacterDetail }
                         navigationBarStyle={styles.navBar}
                         navBarButtonColor={'white'}
                  />
              </Scene>
            </Router>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
    navBar: {
      backgroundColor: 'rgb(36,36,36)'
    }
});
