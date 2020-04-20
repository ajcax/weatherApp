import React from 'react';
import './styles.css';


const getIcon = icon => {
    return icon? 
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icono-clima" /> :
        <img src={`http://openweathermap.org/img/wn/10d@2x.png`} alt="icono-clima" />

};


export default function InfoWeather (props) {
    return (
        <div>
            <div className='wrapper-icon'>
                <span className='status'>{props.status}</span>
                <span className='icon'>{ getIcon(props.icon) }</span>
            </div>
            <div>Temperatura: 
                <span className='info'>{` ${props.temperature}°`}</span>
            </div>
            <div>Humedad: 
                <span className='info'>{` ${props.humidity}% `}</span>
            </div>
            <div>Viento: 
                <span className='info'>{`${props.wind}m/s`}</span>
            </div>    
        </div>
    );
};