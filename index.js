import "dotenv/config"
import app from "./app.js";
const port = process.env.PORT || 8000;


app.get("/", (req, res) =>{
    res.send("Welcome to jobtrack.")
})

app.listen(port, () =>{
    console.log(`app is running at PORT ${port}`)
})
