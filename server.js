//dev
const express = require('express')
const app = express()
const path = require('path');
const axios = require('axios');
const { assert } = require('console');
//don't congif() here for deployment, only for dev testing
//require('dotenv').config()
const PORT = process.env.PORT || 5000;

//deployment stuff
app.use(express.static(path.resolve(__dirname, 'client/build')));
app.use(express.json());
app.get('/api', (req, res) => {    res.json({message : "Hello from express server"})});
app.get('*', function (req, res) {
    const index = path.join(__dirname, 'build', 'index.html');
    res.sendFile(index);

});

app.post('/api/user', async (req, res) => {
    var res2;
    var res3;
    try{
        try{
            res2 = await axios.get(req.body.user) //user profile
            res3 = await axios.get(req.body.sub); //user subumissions
        }
        catch(err){
            console.log("error in requesting user profile and submissions: " + err.message + "\n");
        }


        //from this point, the user is valid
        var profile = (res2.data.data); // object for id, username, etc
        var cnt = 0;


        profile.object.contestData = []; //extra field for contest participations and respective performance, +- rating, etc
        profile.object.valid = true;

        // loop through all the user's contest participations inside the profile.object.contests array
        for(let i=0;i<profile.object.contests.length;i++){
            var curContest = profile.object.contests[i];
            var obj = {
                performance : 0,
                ratingOld: "",
                rating: "",
                ratingChange: 0,
                contest: "",
                place: "",
                percentile: 0,
                date: "",
                name: "",
                link: "",
            }
            //append rated contests only
            if(curContest.performance !== null){
                cnt++;
                obj.performance = curContest.performance.toFixed(0) //floor
                obj.rating = curContest.rating
                obj.contest = curContest.key

                
                const res4 = await axios.get(`https://dmoj.ca/api/v2/contest/${curContest.key}`) // contest details of the current contest
                var contestDetails = res4.data.data.object
            
                obj.date = contestDetails.end_time.substring(0,10);
                obj.name = contestDetails.name;

                var arr = contestDetails.rankings.slice(); //list of users in order of ranking in the contest
                
                //finding place of user to calculate percentile
                for(let j = 0; j<arr.length; j++){
                    var curUser = arr[j];
                    if(curUser.user === profile.object.username){
                        obj.place = j+1
                        obj.ratingOld = curUser.old_rating
                        if(obj.ratingOld===null)obj.ratingOld = 0
                        obj.percentile = 100 - (((j+1)/arr.length)*100).toFixed(0)
                        break;
                    }
                }
                obj.link = `/${curContest.key}/ranking/#!${profile.object.username}`
                obj.ratingChange = obj.rating - obj.ratingOld
                profile.object.contestData.push(obj);
                
            }
        }

        profile.object.contestCount = cnt.toString();
        profile.object.subCount = res3.data.data.total_objects;

        console.log("user profile: \n" + JSON.stringify(profile) + "\n");
        res.json(profile)
    }
    catch(err){
        var obj_error = {object : {
            valid: false,
            id: "null",
            username: `${req.body.name}`,
            points: 0,
            performance_points: 0,
            problem_count: 0,
            solved_problems: [
                "<list of problem code>"
            ],
            rank: "<user display rank>",
            rating: null,
            organizations: [
                "<list of organization id>"
            ],
            contests: [
            ],
            contestCount: 0,
            subCount: 0,
            contestData: [
                {
                    performance : 0,
                    ratingOld: "",
                    rating: "",
                    ratingChange: 0,
                    contest: "",
                    place: "",
                    percentile: 0,
                    date: "",
                    name: "",
                }
        
            ],
    
        }}
        console.log("user does not exist " + err.message);


        res.json(obj_error)
    }


})
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
