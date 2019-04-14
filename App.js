import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import configureStore from './containers/store'
import {Provider} from 'react-redux'
import ListView from './components/ListView'

const store = configureStore();

export default class App extends React.Component {
  
  render() {
    console.log('this is store', store);
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <ListView />
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    flexDirection: 'column',
  },
});
