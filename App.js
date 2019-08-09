/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import MainView from './src/components/MainView';
import rootReducer from './src/reducers';

export default App = () => (
  <Provider store={createStore(rootReducer)}>
    <View style={styles.background}>
      <StatusBar barStyle='dark-content' />
      <MainView />
    </View>
  </Provider>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#CCCCCC',
    justifyContent: 'center'
  }
});
