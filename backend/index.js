import express from "express";
import mysql from "mysql";
import cors from "cors";


const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json('hiiiiii')
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books"

    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
app.post("/books", (req, res) => {
    const q = "INSERT INTO  books (`title`,`decription`,`price`,`cover`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.dicription,
        req.body.price,

        req.body.cover,

    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("love me like u do 2")


    })
})
app.listen(2200, () => {
    console.log("coneccted to back end")
})