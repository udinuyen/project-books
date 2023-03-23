import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const fectAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:2200/books")
                console.log(res)
                setBooks(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fectAllBooks()
    }, []);
    return <div>
        <h1>lama boook shoop</h1>
        <div className="books">
            {books.map((book) => (
                <div className="book" key={book.id}>
                    {books.cover && <img src={book.cover} alt=''></img>}
                    <h2>{book.title}</h2>
                    <h2>{book.decription}</h2>
                    <span>{book.price}</span>

                </div>

            ))}
        </div>
        <button>
            <a href='http://localhost:3000/add' >aaaaa</a>
        </button>
    </div>


}

export default Books