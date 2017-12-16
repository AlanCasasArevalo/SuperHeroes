/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux'
import HeroesList from "./sections/heroes/HeroesList";

export default class App extends Component {
  render() {
    return (
        <Router>
          <Scene key='root'>
            <Scene key='heroesList' component={HeroesList}/>
          </Scene>
        </Router>
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
