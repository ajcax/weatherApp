import * as actionTypes from '../constants';

const initialState = {
    selectedCity: ''
}

const setSelectedLocation = (state, action) => {
    return {selectedCity: action.selectedCity};
}

const reducer = (state = initialState, action) => {
    if (!action) { return state; }
switch (action.type) {                  
        case actionTypes.SET_SELECTED_CITY: return setSelectedLocation(state, action)
        default: return state;
    } 
};

export default reducer;