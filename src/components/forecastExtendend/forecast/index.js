import React, {useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import InfoWeather from '../../currentLocationList/currentLocation/infoWeather';
import Location from '../../currentLocationList/currentLocation/location/Location';
import './styles.css';


const showForecast =(props) => {

    if(props.info.length > 0 ) {
        return props.info.map((item, index) =>{
            return (
                <div key={index} className='wrapperFc'>
                    <Paper>
                        <div className={'datos'}> Fecha: {item.fecha} </div>
                        <div className={'datos'}> Hora: {item.hora} </div>
                        <Location city={props.city} />
                        <InfoWeather 
                            temperature={item.temperature}
                            wind={item.wind}
                            status={item.status}
                            icon={item.icon}
                            humidity={item.humidity} />
                    </Paper>

                </div>
            )
        })

    } else {
        return <div>Cargando...</div>
    }
}


const ItemPronostico = (props) => {

    useEffect(() => {  
    }, [props.info]);

    return (
        <React.Fragment>
            {showForecast(props)}
        </React.Fragment>
    );
}

export default ItemPronostico;