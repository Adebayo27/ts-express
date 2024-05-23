import * as dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";
import { Note } from "../models/Note";
import { User } from "../models/User";
dotenv.config()
class Database{
    public sequelize: Sequelize | undefined

    private DB_DATABASE = process.env.DB_DATABASE as string;
    private DB_HOST = process.env.DB_HOST as string;
    private DB_PORT = process.env.DB_PORT as unknown as number;
    private DB_USER = process.env.DB_USER as string;
    private DB_PASSWORD = process.env.DB_PASSWORD as string;

    constructor() {
        this.connectToDB()
    }

    private async connectToDB(){
        this.sequelize = new Sequelize({
            database: this.DB_DATABASE,
            username: this.DB_USER,
            password: this.DB_PASSWORD,
            host: this.DB_HOST,
            port: this.DB_PORT,
            dialect: 'mysql',
            models: [Note, User]
        })

        await this.sequelize.authenticate().then(() => {
            console.log('Database connected')
        }).catch((err) => {
            console.log('Database not connected')
        })
    }
}

export default Database