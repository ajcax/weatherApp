import * as actionTypes from '../constants';

const initialState = {
    info: [],
}

const getCurrentLocationByCity = (state, action) => {
    return {info: [...state.info, ...action.data]};
};


const reducer = (state = initialState, action) => {
    if (!action) { return state; }
    switch (action.type) {          
        case actionTypes.GET_CURRENT_WEATHER_SUCCESS: return getCurrentLocationByCity(state, action);
        default: return state;
    } 
};

export default reducer;