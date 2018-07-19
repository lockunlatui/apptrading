import React, {Component} from 'react';
import {
  View
} from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/store';

import Home from './src/components/Home';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Home />
        </View>
      </Provider>
    );
  }
}

