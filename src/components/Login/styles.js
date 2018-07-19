/**
 * @author Do Xuan Loc
 * @email doxuanloc2016@gmail.com
 * @create date 2018-07-19 10:21:17
 * @modify date 2018-07-19 10:21:17
 * @desc [description]
*/

import {
  StyleSheet,
  Dimensions
} from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  logo: {
    width: (848 / 1200) * width / 1.5,
    height: (848 / 1200) * width / 1.5
  },
  vLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: (width / height) * 100
  },
  inputEmail: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderStyle: 'solid',
    marginRight: 20,
    marginLeft: 20,
    paddingLeft: 20
  },
  btnButtonPri:{
    marginTop: (width / height) * 100,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: '#0a55a0',
    padding: 20,
    borderRadius: 5
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500'
  },
  btnButtonPriOutline:{
    marginTop: (width / height) * 40,
    marginRight: 20,
    marginLeft: 20,
    borderColor: '#0a55a0',
    borderWidth: 2,
    borderStyle: 'solid',
    padding: 20,
    borderRadius: 5
  },
  btnTextOutline: {
    color: '#0a55a0',
    textAlign: 'center',
    fontWeight: '500'
  },
  vQuenMatKhau: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0
  },
  quenMatKhauText: {
    color: '#0a55a0',
  }
})

export default styles;