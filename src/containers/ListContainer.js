import React, {Component} from 'react';
import {connect} from 'react-redux';
import CurrentLocationList from '../components/currentLocationList';

class ListContainer extends Component {

    selectedLocation = (city) => {
        this.props.dispatchSetCity(city);
    }

    render() {
        return (
            <div className='listContainer'>
                <div style={{fontSize: '20px', marginTop: '35px', textAlign: 'center'}}>
                    (Lista de climas por pais)
                    <div style={{fontSize: '14px'}}>Seleccione una ciudad para ver pronostico extendido</div>
                </div>
                <CurrentLocationList 
                    citys={this.props.citys} 
                    onSelectedLocation={this.selectedLocation}
                    info={this.props.info}>                            
                </CurrentLocationList>
            </div>

        )
    }   
}

const mapDispatchToProps = (dispatch) => ( {
    // dispatchSetCiudad: value => dispatch(setCity(value));
}) ;

const mapStateToProps = (state) => {  
    return { info: state.currentWeather.info };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);