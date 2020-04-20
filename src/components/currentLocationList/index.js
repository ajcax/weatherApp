import React from 'react';
import CurrentLocation from './currentLocation';
import './styles.css';

const weatherLocationListMap = (citys, onSelectedLocation, info) => {
    
    const weatherLocationClick = (city) => {
        onSelectedLocation(city);
    }

    if( info.length === citys.length) {
        citys = info; 
    }

    return citys.map( (item, index) => {
        return ( 
            <CurrentLocation 
                key={item.city} 
                info={item}
                weatherLocationClick={ () => weatherLocationClick(item.city) } 
            /> 
        )
    }  )
}

const CurrentLocationList = ( props ) => {
    const {citys, onSelectedLocation, info} = props;
    return (
        <div className='weatherList'>
            { weatherLocationListMap( citys, onSelectedLocation, info ) }
        </div>
    );
}


export default CurrentLocationList;