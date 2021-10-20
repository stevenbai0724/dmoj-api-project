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

    var profile = (res2.data.data);

    res.json(profile)
    


})



const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
