import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Server running fine"
    });
})

app.get("/foo", (res, res) => {
    res.json({
        success: true,
        foo: "Hey there, I am foo and I hope you are good"
    })
})

app.get("/bar", (res, res) => {
    res.json({
        success: true,
        foo: "Hey there, I am bar and I hope you are good"
    })
})

app.listen(4000, () => {
    console.log(`Server running at port 4000`);
})