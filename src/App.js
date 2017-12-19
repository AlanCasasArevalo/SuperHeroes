
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux'
import HeroesList from "./sections/heroes/HeroesList";

import * as webservices from "./webservices/webservices";

export default class App extends Component {

    componentWillMount(){
        webservices.configureAxios()
    }


  render() {
    return (
        <Router>
          <Scene key='root'>
            <Scene key='heroesList'
                   component={ HeroesList }/>
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
