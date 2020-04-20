import React, { Component } from 'react';
import {connect} from 'react-redux';
import './styles.css';

// componnets 
import ForescastExtended from '../components/forecastExtendend';


class ForecastExtendedContainer extends Component {

    render() {
        return (
            this.props.city?
            <ForescastExtended city={this.props.city} info={this.props.info} className="feContainer" /> :
            <div className="feContainer">Seleccione una ciudad para mostrar pronostico extendido</div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        city: state.selectedLocation.selectedCity,
        info: state.forecastExtended.info 
    };
}

export default connect(mapStateToProps, null)(ForecastExtendedContainer);