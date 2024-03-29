import express from "express";
import cors from "cors";
import setupProfileRoutes from "./routes/setup_profile_routes/router.js";
const app = express();
app.use(cors());
app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader('Access-Control-Allow-Credentials', "true")
    res.setHeader('Access-Control-Expose-Headers', '*')
    next();
})

app.use("/",setupProfileRoutes)

app.listen(4001,()=>{
    console.log("connected");
})