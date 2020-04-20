import * as actionTypes from '../constants';

const initialState = {
    info: [],
}

const getForecastByCity = (state, action) => {
    return {info: [...action.data]};
};


const reducer = (state = initialState, action) => {
    if (!action) { return state; }
    switch (action.type) {          
        case actionTypes.GET_FORECAST_SUCCESS: return getForecastByCity(state, action);
        default: return state;
    } 
};

export default reducer;