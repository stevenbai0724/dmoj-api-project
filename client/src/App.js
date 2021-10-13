import './App.css';
import Topbar from './components/Topbar'
import { makeStyles, ButtonBase} from "@material-ui/core";
import DMOJ from './assets/dmoj.png';
import {useState, useEffect, useRef} from 'react'
import React from 'react'

const useStyles = makeStyles((theme) => ({

    leftContainer: {
        marginLeft: "10%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",

        width: "27%",
        
    },
    rightContainer: {
        
        display: "flex",
        flexDirection: "column",

        width: "53%",
    },
    contentBox: {
      display: "flex",
      flexDirection: "row",

    },
    btnbase: {
      width: "50%",
      backgroundColor: "#3B3B3B",
      borderRadius: 10,
    },
    img: {
      width: "100%",
    },
    h1: {
      color: "white",
      fontSize: "32px",
      marginTop: "-5px",
    },

}))
function App() {
  const classes = useStyles();

  const [name, setName] = React.useState('');
  const receiveData = (input) => {
    console.log('data received ' + input);
    setName(input);

  }
  return (
    <div>
      <Topbar prop = {receiveData} />
      <div className = "App-header">
        <br></br>
        <div className = {classes.contentBox}>
          <div className = {classes.leftContainer}>
              <ButtonBase className = {classes.btnbase}><img src = {DMOJ} alt = "DMOJ" className = {classes.img}></img></ButtonBase>

          </div>

          <div className = {classes.rightContainer}>
              <h1 className = {classes.h1}>{name}</h1>

              
          </div>

          
        </div>
      </div>


    </div>
  );
}

export default App;
