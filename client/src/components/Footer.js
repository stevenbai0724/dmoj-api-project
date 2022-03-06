import {useState, useEffect, useRef, React} from 'react'
import { makeStyles, ButtonBase, Button} from "@material-ui/core";
import { FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from "react-icons/bi";
const useStyles = makeStyles((theme) => ({

    box:{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "20px",
        backgroundColor: "#282d32",
        marginTop: "100px",
        height: "110px",
    },
    icon:{
        color: "white",
        height: "35px",
        width: "auto",
    },
    bar: {
        display: "flex",
        flexDirection: "row",
        width: "120px",
        justifyContent: "space-around",
    },
   
}))
function Footer() {
    const classes = useStyles();
    return (
        <div className = {classes.box}>
            <div className = {classes.bar}>
                <ButtonBase style = {{borderRadius: "50%"}}><a href = "https://github.com/stevenbai0724/dmojstats" target = "_blank" ><FaGithub className = {classes.icon} /></a></ButtonBase>
                <ButtonBase><a href = "https://stevenbai.ca/" target = "_blank"><BiLinkExternal className = {classes.icon} /></a></ButtonBase>

            </div>
            <h4 style = {{color: "white"}}>&copy; 2021-2022 Steven Bai</h4>

        </div>
  );
}

export default Footer;
