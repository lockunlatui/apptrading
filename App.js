import React, {Component} from 'react';
import {
  View
} from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/store';

import Login from './src/components/Login';

type Props = {};
export default class App extends Component<Props> {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={Store}>
        <View style={{ flex: 1}}>
          <Login />
        </View>
      </Provider>
    );
  }
}

