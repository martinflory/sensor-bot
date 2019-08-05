const axios  = require('axios')
const nrmRnd = require('./normal-random')

const TIMER = 250
async function makePostRequest(sensorName, mean, stdDev) {
    try{
        params = {
            value: nrmRnd.normalRandomScaled(mean, stdDev)
        }

        let res = await axios.post('http://localhost:3000/api/sense/' + sensorName, params);

    }catch(err){
        console.log(err.message);
    }
}

//Start the batch process
// makePostRequest('sensor4', 5, 3);
  inter=setInterval(()=> makePostRequest('sensor1', 8, 25), TIMER);
  inter=setInterval(()=> makePostRequest('sensor2', 9, 20), TIMER);
  inter=setInterval(()=> makePostRequest('sensor3', 9, 20), TIMER);
  inter=setInterval(()=> makePostRequest('sensor4', 9, 20), TIMER);