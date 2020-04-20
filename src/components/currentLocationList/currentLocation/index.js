import React, { useState, useEffect }  from 'react';
import { useDispatch } from 'react-redux';
import Location from './location/Location';
import InfoWeather from  './infoWeather';
import Paper from '@material-ui/core/Paper';
import * as actions from '../../../actions';


export default function CurrentLocation (props) {

    const dispatch = useDispatch();
    const [info] = useState(props.info);

    function handleLocationSelected(selectedCity) {
        dispatch(actions.setSelectedLocation(selectedCity));
    }


    useEffect(() => {        
        dispatch(actions.getWeatherByCity(info.city));
    }, [dispatch, info.city]);

       
    const { humidity, status, wind, icon, city, temperature } = props.info;
    return (
        <React.Fragment>            
            {
                status?
                    <div className='root' onClick={() => handleLocationSelected(city)} style={{cursor: 'pointer'}}>
                        <Paper elevation={3} >
                            <Location city={city}></Location>
                            <InfoWeather 
                                temperature={temperature}
                                humidity={humidity}
                                status={status}
                                icon={icon}
                                wind={wind}>            
                            </InfoWeather>
                        </Paper>
                    </div> : null
            }
        </React.Fragment>

    );
}