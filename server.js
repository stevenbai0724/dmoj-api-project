const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const axios = require('axios')

app.use(express.json())


app.post('/api/user', async (req, res) => {

    const API_KEY = "";


    const requestOptions = {
        headers: { 
            Authorization: `Bearer ${API_KEY}`
        },
    }

    const res2 = await axios.get(req.body.user, requestOptions)
    const res3 = await axios.get(req.body.sub, requestOptions)

    var profile = (res2.data.data);
    var submissions = (res3.data);
    var cnt = 0
 

    profile.object.contests.forEach(function(item, index, array){
        if(item.performance !== null){
          cnt++
        }
    })


    profile.object.contestCount = cnt.toString();
    profile.object.subCount = Object.keys(submissions).length
    
    res.json(profile)
    


})



const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
