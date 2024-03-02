import express, { Express, Request, Response } from "express";

const app: Express = express()

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, I am Trí, a full stack dev')
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})