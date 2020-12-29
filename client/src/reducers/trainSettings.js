import {UPDATE_TRAINING_SETTINGS} from '../actions';

const initialState ={
    trainingType: 'alphabet',
    trainingNumber: 1,
    showTrainingMain: false,
    showTrainingSettings: true
};

export default function trainingSettings(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TRAINING_SETTINGS: {
            state = action.payload;
            return state;
        }
        default:
            return state;
    }
}