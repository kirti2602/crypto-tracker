import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';

// materialUI hook for custom CSS ⬇
const useStyles = makeStyles({
  app: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh"
  },
})

const App = () => {

  const classes = useStyles(); //object of class `useStyles`

  return (
      <div className={classes.app}>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route  path='/' element={<Homepage/>} />
      <Route path= '/coins/:id' element={<CoinPage/>} />
      </Routes>
      </BrowserRouter>
      </div>
    
  );
}

export default App

