const fs = require('fs');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();


app.use(bodyparser.json());

app.post('/contact',(req,res) => {
    console.log(req.body);
    let temp = Object.keys(req.body);
    for (let i = 0;i <temp.length;i++){
    fs.appendFile('contact.txt',`${temp[i]} : ${req.body[temp[i]]} \n`, 
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
