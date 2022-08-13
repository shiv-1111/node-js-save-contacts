const fs = require('fs');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();


app.use(bodyparser.json());

app.post('/contact',(req,res) => {
    console.log(req.body);
    
    for (let key in req.body)
    {
    fs.appendFile('contact.txt',`${key} : ${req.body[key]} \n`, 
    (err) => {
        if (err) {
            console.log("Write Unsuccessfull !")
        }
        else{
            console.log("Write Successfull !")
        }
    });
}
    res.send('Data received');
})

app.listen(5000,() => {console.log("Server Started !")})
