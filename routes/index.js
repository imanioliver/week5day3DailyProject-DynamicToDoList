const express = require('express');
const router = express.Router();


let tasks = [];



router.get("/", function(req, res) {
    res.render("layout", {tasks: tasks})
});


router.post("/", function(req, res) {
    let newTask = req.body.newTask;
        tasks.push(newTask);
        console.log(tasks);
        res.redirect("/");


});





module.exports = router;
