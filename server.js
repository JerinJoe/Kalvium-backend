const express = require('express');
const bodyParser = require('body-parser');
const calculateRoute = require('./routes/calculate');
const historyRoute = require('./routes/history');
const endpointsRoute = require('./routes/endpoints'); 

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = 3000;

app.use('/endpoints', endpointsRoute);
app.use('/calculate', calculateRoute);
app.use('/history', historyRoute);

app.get('/',(req,res)=>{
    res.redirect('/endpoints');
}); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

