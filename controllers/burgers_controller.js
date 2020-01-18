const express = require("express");
const router = express.Router();


const db = require("../models");



router.get("/", function(req, res){
    db.burgers.findAll({}).then(function(dbburger){
        
        res.json(dbburger);
    });







});


router.post("/api/burgers", function(req, res){
    console.log(req.body);

    const {

        burger_name,
        devoured
    } = req.body;


    db.burgers.create({

        burger_name,
        devoured
    }).then(function(dbburger){

        res.json(dbburger);
    });


});


router.put("/api/burgers/:id", function(req, res){
    

    db.burgers.update(
        {
            devoured: req.body.devoured
        },
    ).then(function(updated){
        res.json(updated);
    });
    
});
















module.exports = router;