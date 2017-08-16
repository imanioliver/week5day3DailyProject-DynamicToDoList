const express = require('express');
const router = express.Router();


let tasks = [];
let complete = [];


router.get("/", function(req, res) {
    res.render("layout", {tasks: tasks , complete: complete})
});


router.post("/", function(req, res) {
    let newTask = req.body.newTask;
        tasks.push(newTask);
        console.log(tasks);
        res.redirect("/");


});


router.post("/a", function(req, res){

    // if (newTask) {
    //
    // }


    tasks.splice(tasks.indexOf(req.body.theTask),1);

    complete.push(req.body.theTask) //make sure that this is putting into the complete object
    console.log(complete); //tell it where to to go

    res.redirect('/');

})




module.exports = router;
