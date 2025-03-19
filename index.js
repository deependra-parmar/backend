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

app.listen(4000, () => {
    console.log(`Server running at port 4000`);
})