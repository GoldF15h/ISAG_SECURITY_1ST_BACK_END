const express = require("express");
const mongoose = require("mongoose");
const app = express();
const auth = require("../middleware/Authentication");
const superAuth = require("../middleware/SuperuserAuthentication");
const Flag = mongoose.model('flag')

app.post('/submit:id',auth,async(req,res)=>{
    let statusCode = 200
    let statusMessage = 'success'
    let message = null
    let isCorrect = false
    try{
       console.log(req.params.id)
       const flag =await Flag.find(
        {
            ID: req.params.id
        },
        {
           ID: 1,
           title: 1
        }
       )
       dataFlag=flag[0]
       if(flag){
           if(dataFlag.title == req.body.userFlag){
               isCorrect = true
           }
       }
       else {
           message = 'flag id not found'
       }
    }
    catch(e){
        statusCode = 400
        statusMessage = 'error'
        message = e.message
    }

    res.status(statusCode).send({
        status : statusMessage,
        message : message,
        correct : isCorrect
    })

})

app.post('/createflag',auth,async(req,res)=>{
    let statusCode = 200
    let statusMessage = 'success'
    let message = null
    try{
        const newFlag = new Flag({
            ID: req.body.id,
            title: req.body.title
        })
        await newFlag.save();
        console.log(newFlag)
        message = 'created new flag succesfully'
    }    
    catch(e){
        statusCode = 400
        statusMessage = 'error'
        message = e.message
    }
    res.status(statusCode).send({
        status : statusMessage,
        message: message,
    })
})

module.exports = app