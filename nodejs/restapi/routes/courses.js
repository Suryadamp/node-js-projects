const express=require('express');
const Course = require('../models/Course');

const router =express.Router();

router.get("/",(req,res)=>{
    res.send("The Router is running")
})

router.get("/1",(req,res)=>{
    res.send("we are now in #1")
})

router.post("/",(req,res)=>{
    const mycourse= new Course ({
        course: req.body.course,
        tag:req.body.tag
    })

    mycourse
    .save()
    .then(result =>{
        console.log(result)

    }).catch(err =>{
        console.log(err);
    })
})
module.exports= router;
