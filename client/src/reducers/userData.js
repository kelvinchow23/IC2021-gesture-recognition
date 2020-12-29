import {UPDATE_USER_DATA} from '../actions';

const inintialState = {
    username: '',
    name: ''
}

export default function userData(state = inintialState,action) {
    switch(action.type) {
        case UPDATE_USER_DATA: {
            state = action.payload;
            return state;
        }
        default:
            return state;
    }
}