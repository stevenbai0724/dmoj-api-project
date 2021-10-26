import './App.css';
import Topbar from './components/Topbar'
import { makeStyles, ButtonBase} from "@material-ui/core";
import DMOJ from './assets/dmoj.png';
import {useState, useEffect, useRef} from 'react'
import React from 'react'
import RadarChart from 'react-svg-radar-chart';
import './Radar.css';
const useStyles = makeStyles((theme) => ({

    leftContainer: {
      marginLeft: "10%",
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
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
      fontSize: "34px",
      marginTop: "-9px",
      fontWeight: "normal",
    },
    rank: {
      fontSize: "24px",
      marginTop: "-20px",
      fontWeight: "normal",
    },

    h3: {
      color: "white",
      fontSize: "20px",
      fontWeight: "normal",
    },
    h3Left: {
      color: "white",
      fontSize: "20px",
      fontWeight: "normal",
      float: "left",
    },
    link: {
      textDecoration: "none",
      color: "#889BCB",
    },
    rowBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height: "50px",
    },

}))
function App() {
  const classes = useStyles();

  const [show, setShow] = useState(false);
  const defaultOptions = {
    axes: true,
    captions: true,
    dots: true,
    scales: 3, 
  }
  const radar = [
    {
      data: {
        adhoc: .65,
        graph: .9,
        dp: .7,
        string: .4,
        math: .7,
        greedy: .5,
        data: .6,
      },
      meta: { color: 'blue' }
    },

  ];

const captions = {
    // columns
    adhoc: 'Ad Hoc',
    graph: 'Graph Theory',
    dp: 'DP',
    string: 'String Algorithms',
    math: 'Math',
    greedy: 'Greedy ',
    data: 'Data Structures',
  };
  const [data, setData] = useState({
    object : {
        id: "<user id>",
        username: "<user username>",
        points: "<user points>",
        performance_points: "<user performance points>",
        problem_count: "<number of problems the user has solved>",
        solved_problems: [
            "<list of problem code>"
        ],
        rank: "<user display rank>",
        rating: "<user rating>",
        organizations: [
            "<list of organization id>"
        ],
        contests: [
            {
                "key": "<contest key>",
                "score": "<user score>",
                "cumulative_time": "<user cumulative time, dependant on the contest format>",
                "rating": "<user rating after this contest, or null if not rated>",
                "raw_rating": "<user raw rating after this contest, or null if not rated>",
                "performance": "<user performance, or null if not rated>"
            }
        ],
        contestCount: "<(custom attribute) number of rated contests>",
        subCount: "<(custom attribute) total submission count",

    },
  });
  const [colorRating, setColorRating] = useState('');

  const receiveData = (input) => {

    console.log('data received ' + JSON.stringify(input.object.username));
    var rank = input.object.rating

    if(rank === null )setColorRating("#fff");
    if(rank != null && rank < 1000) setColorRating("#b1c9dc");
    if(rank >= 1000 && rank < 1300) setColorRating("#46ff46");
    if(rank >= 1300 && rank < 1600) setColorRating("#5398ff");
    if(rank >= 1600 && rank < 1900) setColorRating("#ff53ff");
    if(rank >= 1900 && rank < 2400) setColorRating("#fffc1a");
    if(rank >= 2400 ) setColorRating("#ff0c0c");


    setData(input);

    setShow(true);   

  }
  var rating = data.object.rating === null ? "null" : data.object.rating
  var sub = `https://dmoj.ca/submissions/user/${data.object.username}`

  return (
    
    <div>
      
      <Topbar prop = {receiveData} />
      <div className = "App-header">
        <br></br>
        <div className = {classes.contentBox}>

          {
            show === true && 
            <div className = {classes.leftContainer}>
                <ButtonBase className = {classes.btnbase}><img src = {DMOJ} alt = "DMOJ" className = {classes.img}></img></ButtonBase>


                  <div>

                    <h3 className = {classes.h3Left} >Elo rating: &nbsp;</h3> <h3 className = {classes.h3Left} style={{color: colorRating, fontWeight: "bold"}}>{rating}</h3> 
                    <h3 className = {classes.h3}>Problems solved: {data.object.problem_count}</h3>
                    <h3 className = {classes.h3}>Contests written: {data.object.contestCount}</h3>
                    <h3 className = {classes.h3}>Total Points: {data.object.points.toFixed(0)}</h3>
                    <h3 className = {classes.h3}>Adjusted Points: {data.object.performance_points.toFixed(0)} </h3>
                    <h3 className = {classes.h3}>Total submissions: {data.object.subCount}</h3>
                    <a href = {sub} target="_blank" className = {classes.link}><h3 className = {classes.h3} style={{color:"#889BCB"}}>View submissions</h3></a>

                  </div>
                

            </div>
          
          }

          {
              show === true &&

              <div className = {classes.rightContainer}>

                    <h1 className = {classes.h1}>{data.object.username}</h1>

                    {/* title */}
                    {
                      rating === "null" && 
                      <h2 className = {classes.rank} style={{color:"#b1c9dc"}}>Unrated</h2> 
                                    
                    }
                    {
                      rating <1000 && rating != "null" && 
                      <h2 className = {classes.rank} style={{color:"#b1c9dc"}}>Newbie</h2>
                    }
                    {
                      rating >=1000 && rating <1300 &&
                      <h2 className = {classes.rank} style={{color:"#46ff46"}}>Amateur</h2>
                    }   
                    {
                      rating >=1300 && rating <1600 &&
                      <h2 className = {classes.rank} style={{color:"#5398ff"}}>Expert</h2>
                    }              
                    {
                      rating >=1600 && rating <1900 &&
                      <h2 className = {classes.rank} style={{color:"#ff53ff"}}>Candidate Master</h2>
                    }              
                    {
                      rating >=1900 && rating <2399 &&
                      <h2 className = {classes.rank} style={{color:"#fffc1a"}}>Master</h2>
                    }            
                    {
                      rating >=2400 && rating <3000 &&
                      <h2 className = {classes.rank} style={{color:"#ff0c0c"}}>Grandmaster</h2>
                    }                           
                    {
                      rating >=3000 &&
                      <h2 className = {classes.rank} style={{color:"#ff0c0c"}}>Legendary Grandmaster</h2>
                    }              
                  <RadarChart 
                    captions = {captions}
                    data={radar}
                    size={600}
                    options={defaultOptions}
                  ></RadarChart>

              </div>
          }
          
        </div>
      </div>
        

    </div>
  );
}

export default App;
