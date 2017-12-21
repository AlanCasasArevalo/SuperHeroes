
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux'
import HeroesList from "./sections/heroes/HeroesList";

import * as webservices from "./webservices/webservices";

import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider, connect} from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from './redux/reducers'

const reducer = combineReducers(reducers)
const store = createStore(
    reducer, applyMiddleware(thunk)
)

export default class App extends Component {

    componentWillMount(){
        webservices.configureAxios()
    }

  render() {
    return (
        <Provider store={ store }>
            <Router>
              <Scene key='root'>
                <Scene key='heroesList'
                       component={ HeroesList }/>
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
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
