import { combineReducers } from 'redux';
import userReducer from './userReducer';
import utilityReducer from './utilityReducer';
import registrationReducer from './registrationReducer';
import { reducer as formReducer } from 'redux-form'

const appReducer = combineReducers({
  registrationReducer,
  userReducer,
  utilityReducer,
  form: formReducer
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
