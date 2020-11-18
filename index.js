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

app.post('/sendmsg',async (req,res)=>{
    console.log(req.body.sendTo)
    var to = req.body.sendTo;
    var msg = req.body.message;
    const accountSid = 'ACd8a79ed5db68888a1002e2f7e47f1d18'; 
    const authToken = '4ed5c7ba0abe2d9c50df416e4041d551'; 
    const client = await require('twilio')(accountSid, authToken); 
   
    client.messages 
          .create({ 
             body: `${msg}`, 
             from: '+13613016090',       
             to: `${to}` 
           }) 
          .then(message => console.log(message.sid)) 
          .done()
          .catch((error)=>console.log(res.status(400).send("Sorry Data cannot be Submitted")))
})

app.listen(4000,()=>{
    console.log("Server running")
})