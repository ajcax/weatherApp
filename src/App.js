import React from 'react';
import BackToTop from './components/navBar';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';


//components
import ListContainer from './containers/ListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#282c34',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: '100vh',
    padding: '0 30px',
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  const citys = [
    {city:'Buenos Aires'},
    {city:'Caracas'},
    {city:'Barcelona'},
    {city:'Lima'},
    {city:'Madrid'}
  ];
  return (
    <div className={classes.root}>
      <BackToTop />
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12} md={6}>
            <ListContainer citys={citys} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ForecastExtendedContainer />
        </Grid>
      </Grid>
      <CssBaseline/>
    </div>
  );
}

export default App;
