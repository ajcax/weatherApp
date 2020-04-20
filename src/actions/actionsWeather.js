import axios from 'axios';
import * as actionTypes from '../constants';

export const getWeatherByCity = (city) => {
    return dispatch => {
                
        let url = `${process.env.REACT_APP_API_URL}/current/${city}`;

        axios.get(url).then(resp => { 
            let data = {
                status: resp.data.weather[0].main,
                icon: resp.data.weather[0].icon,
                temperature: resp.data.main.temp,
                humidity: resp.data.main.humidity,
                wind: resp.data.wind.speed,
                country: resp.data.sys.country,
                city: resp.data.name,
            }
            dispatch(SuccessGetWeather(data));
        }).catch(error => {
            if (!error.response) {
                dispatch(FailGetWeather({message: '¡No se pudo conectar con el Servidor!'}));
                return;
            }
            dispatch(FailGetWeather({message: '¡No se ha obtenido la informacion'}));
        });
    };
};

export const setSelectedLocation = (selectedCity) => {
 return {
     type: actionTypes.SET_SELECTED_CITY,
     selectedCity
 }
}

export const getForecastExtendedByCity = (city) => {
    return dispatch => {
        let url = `${process.env.REACT_APP_API_URL}/forecast/${city}`;
        axios.get(url).then(resp => { 
            let data = [];
            data = resp.data.list.map( item  => (
               {
                    fecha: item.dt_txt.split(' ')[0],
                    hora: item.dt_txt.split(' ')[1],
                    temperature: item.main.temp, 
                    humidity: item.main.humidity,
                    status: item.weather[0].main,
                    icon: item.weather[0].icon,
                    wind: item.wind.speed,
                }
            ));
            console.log(data)
            dispatch(SuccessGetForecast(data));
   
        }).catch(error => {
            if (!error.response) {
                dispatch(FailGetWeather({message: '¡No se pudo conectar con el Servidor!'}));
                return;
            }
            dispatch(FailGetWeather({message: '¡No se ha obtenido informacion'}));
        });
    };
}

export const SuccessGetWeather = data => { 
    return {        
        type: actionTypes.GET_CURRENT_WEATHER_SUCCESS,
        data: [data]
    };
};

export const FailGetWeather = error => {
    return {
        type: actionTypes.GET_CURRENT_WEATHER_FAIL,
        error
    };
};

export const SuccessGetForecast = data => { 
    return {        
        type: actionTypes.GET_FORECAST_SUCCESS,
        data
    };
};

export const FailGetForecast = error => {
    return {
        type: actionTypes.GET_FORECAST_FAIL,
        error
    };
};

