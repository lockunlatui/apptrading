import { combineReducers } from 'redux';
import CryptoReducer from './components/Home/reducer';

export default combineReducers({
  crypto: CryptoReducer
})
