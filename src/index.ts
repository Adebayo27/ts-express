import express, { Application, Request, Response } from "express";
import Database from "./config/database";
import NoteRouter from "./router/NoteRouter";

class App {
    public app: Application

    constructor(){
        this.app = express()
        this.plugins()
        this.routes()
        this.databaseSync()
    }

    protected routes():void{
        this.app.route('/').get((req:Request, res:Response)=>{
            res.send('welcome home')
        })

        this.app.use("/api/v1/note", NoteRouter)
    }

    protected plugins(): void{
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}))
    }

    protected databaseSync():void{
        const db = new Database()
        db.sequelize?.sync()
    }
}

const port:number = 8000
const app = new App().app

app.listen(port, ()=>{
    console.log('App running on port ' + port)
})