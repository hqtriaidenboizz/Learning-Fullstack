import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express()
const port = process.env.PORT || 8080;
const mongo_url = process.env.MONGO_URL as string


// middleware

app.use(cors({
    credentials: true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

//Connect database

mongoose.Promise = Promise;
mongoose.connect(mongo_url).then(() => console.log('Connected'))


app.get('/', (req: Request, res: Response) => {
    res.send('Hello')
})


app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})