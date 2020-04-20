import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Forecast from './forecast';

import * as actions from '../../actions';
import './styles.css';

export default function ForecastExtended(props) {
   
    const { city, info } = props;

    const dispatch = useDispatch();

    useEffect(() => {  
        dispatch(actions.getForecastExtendedByCity(city))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [city]);


    return (
        <div className={'ForecastExtendend'}> 
            <span className={'titleForecast'}> Pronóstico extendido de la ciudad de ({city}) </span>
            <div style={{textAlign: 'center'}}>Pronostico de 5 dias a intervalos de 3hrs</div>
            <Forecast info={info} city={city} />
        </div>
    );
}
