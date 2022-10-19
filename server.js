const express = require("express");
const lowDb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const bodyParser = require("body-parser");
const { nanoid } = require("nanoid");

const db = lowDb(new FileSync('db.json'));
db.defaults({ student: [], teacher: [], assessment: [], school: [], location: []}).write();
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const PORT = 4000;

//  Writing all the GET Requests
app.get('/student',(req,res) => {
    const data = db.get("student").value();
    return res.json(data);
});
app.get('/teacher',(req,res) => {
    const data = db.get("teacher").value();
    return res.json(data);
});
app.get('/assessment',(req,res) => {
    const data = db.get("assessment").value();
    return res.json(data);
});
app.get('/school',(req,res) => {
    const data = db.get("school").value();
    return res.json(data);
});
app.get('/location',(req,res) => {
    const data = db.get("location").value();
    return res.json(data);
});

// Writing all the POST Requests
app.post('/student/new', (req, res) => {
    const newStudent = req.body;
    db.get("student").push({
        ...newStudent, id: nanoid()
    }).write(); 
    res.json({ success : true});
})
app.post('/teacher/new', (req, res) => {
    const newTeacher = req.body;
    db.get("teacher").push({
        ...newTeacher, id: nanoid()
    }).write(); 
    res.json({ success : true});
})
app.post('/assessment/new', (req, res) => {
    const newAssessment = req.body;
    db.get("assessment").push({
        ...newAssessment, id: nanoid()
    }).write(); 
    res.json({ success : true});
})
app.post('/school/new', (req, res) => {
    const newSchoolLocation = req.body;
    db.get("school").push({
        ...newSchoolLocation, id: nanoid()
    }).write(); 
    res.json({ success : true});
})
app.post('/location/new', (req, res) => {
    const newLocation = req.body;
    db.get("location").push({
        ...newLocation, id: nanoid()
    }).write(); 
    res.json({ success : true});
})

app.listen(PORT, () => {
    console.log("Backend is running on http://localhost:4000");
    console.log("Here is the Postman collection of the API https://www.getpostman.com/collections/3568635fa77a96b55e53")
})