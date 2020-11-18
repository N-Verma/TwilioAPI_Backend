const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
var router = express.Router();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sendmsg',(req,res)=>{
    console.log(req.body.sendTo)
    var to = req.body.sendTo;
    var msg = req.body.message;
    const accountSid = 'ACd8a79ed5db68888a1002e2f7e47f1d18'; 
    const authToken = 'c7cb41c15fe68e5817b68e33750f67c5'; 
    const client = require('twilio')(accountSid, authToken); 
    console.log(typeof to)
    client.messages 
          .create({ 
             body: `${msg}`, 
             from: '+13613016090',       
             to: `${to}` 
           }) 
          .then(message => console.log(message.sid)) 
          .done();
})

app.listen(4000,()=>{
    console.log("Server running")
})