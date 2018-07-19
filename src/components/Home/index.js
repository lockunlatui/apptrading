/**
 * @author Do Xuan Loc
 * @email doxuanloc2016@gmail.com
 * @create date 2018-07-19 10:16:47
 * @modify date 2018-07-19 10:16:47
 * @desc [description]
*/
import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';


import { connect } from 'react-redux';

type Props = {};
class Home extends Component<Props> {
  render() {
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

