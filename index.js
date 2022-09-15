const express = require("express");
const dotenv = require("dotenv")
const app = express();
const cors = require("cors")
const fileUpload = require("express-fileupload");
const PORT = 5000 || process.env.PORT;
dotenv.config({ path: './.env' });
const dbconnection = require("./db/conn");

app.use(cors());
app.use(fileUpload({
    useTempFiles: true
}));


app.use(express.json());
app.use("/api" , require('./routes/auth'));
app.use("/api" , require('./routes/upload'));

app.get("/" , (req, res)=>{
    res.send("welcome to the server side");
})

// app.get("/signin", (req, res) => {
//     res.send(`Hello world from  the signin server`);
//   });
//   app.get("/signup", (req, res) => {
//     res.send(`Hello world from  the signup server`);
//   });

dbconnection().then(()=>{
    app.listen(PORT , ()=>{
        console.log(`Server is listening to port ${PORT}`);
    });
})

