import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';

type Props = {};
class Home extends Component<Props> {
  render() {
    console.log(this.props.crypto)
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  }
}

export default connect(mapStateToProps)(Home);

