import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Add = () => {

    const [book, setbook] = useState({
        title: "",
        decription: "",
        price: null,
        cover: "",

    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setbook(prev => ({ ...prev, [e.target.name]: e.target.value }));

    };
    console.log(book);
    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:2200/books", book);
            navigate("/");

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='form'>
            <h1>Add new book
            </h1>
            <input type="text" placeholder='title2' onChange={handleChange} name="title" />
            <input type="text" placeholder='decription' onChange={handleChange} name='decription' />

            <input type="number" placeholder='price' onChange={handleChange} name='price' />
            <input type="text" placeholder='cover' onChange={handleChange} name='cover' />

            <button onClick={handleClick}>Add</button>




        </div>
    )
}

export default Add