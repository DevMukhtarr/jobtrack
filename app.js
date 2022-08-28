import express from "express";
import cors from "cors"
import connect from "./config/connect.js";
import mainRouter from "./routes/mainroute.js";
import authRouter from "./routes/authroute.js";
const app = express()


app.use(connect)
app.use(
    express.urlencoded({
      extended: false,
    })
    );

app.use(express.json());

app.use(mainRouter)
app.use(authRouter)
  
app.use(cors())
export default app