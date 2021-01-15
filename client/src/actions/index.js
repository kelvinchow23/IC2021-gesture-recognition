export const UPDATE_USER_DATA ='UPDATE_USER_DATA';
export const UPDATE_TRAINING_SETTINGS = 'UPDATE_TRAINING_SETTINGS';
export const GET_TRAINING_SETTINGS = 'GET_TRAINING_SETTINGS';


export const updateTrainingSettings = (trainType, trainNumber, showMain, showSettings) => {
    return {
        type: 'UPDATE_TRAINING_SETTINGS',
        payload: {
            trainingType: trainType,
            trainingNumber: trainNumber,
            showTrainingMain: showMain,
            showTrainingSettings: showSettings
        }
    }
}


export const updateUserData = (name, username, status) => {
    return {
        type: 'UPDATE_USER_DATA',
        payload: {
            name: name,
            username: username,
            status: status
        }
    }
}