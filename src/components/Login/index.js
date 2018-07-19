/**
 * @author Do Xuan Loc
 * @email doxuanloc2016@gmail.com
 * @create date 2018-07-19 10:16:22
 * @modify date 2018-07-19 10:16:22
 * @desc [description]
*/
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import styles from './styles'; 

import Logo from '../../images/logo.png';

const { height, width } = Dimensions.get('window');

const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

type Props = {};

class Login extends Component<Props> {
  render() {
    console.log('height', height);
    console.log('widht', width)
    console.log('aa',(width / height) * 100)
    return (
      <KeyboardAvoidingView style={styles.container} behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
      <View>
        <View style={styles.vLogo}>
          <Image style={styles.logo} source={Logo} />
        </View>
        <View>
          <TextInput style={styles.inputEmail} placeholder="Email/ SĐT" underlineColorAndroid={'transparent'} />
          <TextInput style={styles.inputEmail} placeholder="Mật khẩu" underlineColorAndroid={'transparent'} />
        </View>
        <View>
          <TouchableOpacity style={styles.btnButtonPri}>
            <Text style={styles.btnText}>{'Đăng Nhập'.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btnButtonPriOutline}>
            <Text style={styles.btnTextOutline}>{'Đăng Kí'.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.vQuenMatKhau}>
          <Text style={styles.quenMatKhauText}>Quên mật khẩu?</Text>
        </View>
      <View style={{ height: 60 }} />
      </KeyboardAvoidingView>
    )
  }
}

export default Login;