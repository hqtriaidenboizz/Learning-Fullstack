import express, { Express, Request, Response } from "express";
import dotenv from "dotenv"

dotenv.config();


const app: Express = express()
const port = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, I am Trí, a full stack dev using Reactjs nodejs')
})


app.get('/123', (req: Request, res: Response) => {
    res.send('123')
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})