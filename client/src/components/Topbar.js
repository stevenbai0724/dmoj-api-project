import react from 'react'
import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

    textYellow: {
        color: "#FCDB05",
        fontSize: "30",
    },
    textGray: {
        color: "#AAAAAA",
        fontSize: "30",
    },
    bar: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        width: "100%",
        height: "90px",
        backgroundColor: "#3B3B3B",
    },
    titleWrap: {
        marginLeft: "10%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        borderWidth: "2px",
        borderStyle: "solid",
        width: "27%",
    },
    searchWrap: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        borderWidth: "4px",
        borderStyle: "solid",
        width: "30%",
        height: "65%",
        borderColor: "#605D5D",
        borderRadius: 10,
    },
    searchBox: {
        borderWidth: "0px",
        border: "none",
        background: "transparent",
        color: 'white',
        fontSize: 20,
        '&:focus' : {
            outline: "none",
        }
        

    },
    

}))
function App() {
    const classes = useStyles();


  return (
    <div className = {classes.bar}>
        <div className = {classes.titleWrap}>
            <h1 className = {classes.textYellow}>DM</h1><h1 className = {classes.textGray}>OJ</h1><h1 className = {classes.textYellow}>ST</h1><h1 className = {classes.textGray}>ATS</h1>
        </div>

        <div className = {classes.searchWrap}>

        <input
            type = "text"
            className = {classes.searchBox}
            placeholder = "Search for a user..."
        
        >
        </input>

        </div>
        
    </div>
  );
}

export default App;
