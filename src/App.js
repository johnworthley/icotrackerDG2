import React, { Component } from 'react';
//import logo from './logo.svg';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import styles from './components/stylesheet';
import Store from './Store';
import { Header, CryptoContainer } from './components';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}
