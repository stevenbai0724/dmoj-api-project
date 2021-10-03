import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar'
import { makeStyles} from "@material-ui/core";
import DMOJ from './assets/dmoj.png';

const useStyles = makeStyles((theme) => ({

    leftContainer: {
        marginLeft: "10%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        borderWidth: "2px",
        borderStyle: "solid",
        width: "27%",
        
    },
    rightContainer: {
        
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        borderWidth: "2px",
        borderStyle: "solid",
        width: "53%",
    },
    contentBox: {
      display: "flex",
      flexDirection: "row",
      borderWidth: "2px",
      borderStyle: "solid",

    },

}))
function App() {
  const classes = useStyles();


  return (
    <div>
      <Topbar/>
      <div className = "App-header">
        <div className = {classes.contentBox}>
          <div className = {classes.leftContainer}>


          </div>

          <div className = {classes.rightContainer}>

          </div>

          
        </div>
      </div>


    </div>
  );
}

export default App;
