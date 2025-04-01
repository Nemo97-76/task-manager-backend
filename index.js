const express = require('express');
const cros=require('cors');
const mongoose = require('mongoose');
const authRoutes = require("./routes/auth")
const taskRoutes = require("./routes/tasks")
const cors= require("cors");
require('dotenv').config();

const app = express();

//middelware
app.use(cros());
app.use(express.json());

//connect DB
mongoose.connect("mongodb+srv://tasneemyoussef61:Hg2YRJFj8CWQTIn2@taskmanger.dlfaors.mongodb.net/?retryWrites=true&w=majority&appName=TaskManger").then(() => {
    console.log('DB connected');
}).catch((error) => {
    console.log("mongoDB connection error", error);
});


//Routes
app.use('/auth', authRoutes);//auth routes
app.use('/api/tasks', taskRoutes);//task routes
app.use(cors({
    origin:"http://localhost:5173"
}))
//root route for testing
app.get('/', (req, res) => {
    res.send("task manager API is runnging");
});

//start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
