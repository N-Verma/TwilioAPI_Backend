require('dotenv').config();
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
var router = express.Router();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.post('/sendmsg',(req,res)=>{
    console.log(req.body.sendTo)
    var to = req.body.sendTo;
    var msg = req.body.message;
    const accountSid = 'ACd8a79ed5db68888a1002e2f7e47f1d18'; 
    const authToken = process.env.AUTH_TOKEN; 
    const client = require('twilio')(accountSid, authToken); 
   
    client.messages 
          .create({ 
             body: `${msg}`, 
             from: '+13613016090',       
             to: `${to}` 
           }) 
          .then(message => console.log(message.sid)) 
          .done()
          
})

app.listen(4000,()=>{
    console.log("Server running")
})