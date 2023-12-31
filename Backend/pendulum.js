const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

let pendulumState = {
    theta0: 0.1, // initial angular displacement in radians
    length: 1, // length in meters
    lastTime: Date.now(), // last stored time in UTC
    theta: 0 // current angular displacement in radians
}

// Set pendulum state
app.post('/configure', (req, res) => {
    const { theta0, length} = req.body;
    if (theta0 !== undefined) pendulumState.theta0 = theta0;
    if (length !== undefined) pendulumState.length = length;
    pendulumState.lastTime = Date.now();
    res.json({ success: true });
});

// Small-angle approx for simple pendulum equation
app.get('/coordinates', (req, res) => {
    const dt = (Date.now() - pendulumState.lastTime) / 1000;
    pendulumState.theta = smalleAngleApproximation(pendulumState.theta0, pendulumState.length, dt)
    res.json(pendulumState.theta);
});

// helper methods
function smalleAngleApproximation(theta0, length, deltaT){
    return theta0 * Math.cos(Math.sqrt(9.81 / length) * deltaT)
}

const port = process.argv[2] || 3000;
app.listen(port, () => {
    console.log(`Pendulum server listening on port ${port}`);
});

module.exports = {
    smalleAngleApproximation: smalleAngleApproximation
};