import express from "express";
import cors from "cors"
const app = express()


app.use(connect)
app.use(
    express.urlencoded({
      extended: false,
    })
  );
  
app.use(cors())
app.use(express.json());
export default app