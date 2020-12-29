import trainSettings from './trainSettings';
import userData from './userData';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    trainSettings,
    userData
});

export default allReducers