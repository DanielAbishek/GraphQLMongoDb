import express from "express";
import {graphqlHTTP} from "express-graphql"
import dotenv from "dotenv";
import { Schema } from "./schema/schema"

dotenv.config()
const app = express()
app.use('/graphql', graphqlHTTP({
    schema: Schema
}))
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Application running on Port: ${port}`);
})
app.get('/',(req, res) => {
    res.send({msg: "Hello world"})
})