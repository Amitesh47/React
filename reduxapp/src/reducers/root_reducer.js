import {combineReducers} from 'redux';
import {users} from './user_reducer';
import {products} from './products_reducer';

export var rootReducer = combineReducers({
    users,products
});