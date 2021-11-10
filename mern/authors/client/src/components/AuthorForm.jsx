import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import axios from 'axios';

const AuthorForm = () => {
    const [name, setName] = useState(""); 
    const [birthYear, setBirthYear] = useState(0);
    const [book, setBook] = useState(""); 
    const { id = null } = useParams();
    const history = useHistory();


    useEffect(() => {
        if(id !== null)
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setName(res.data.name);
                setBirthYear(res.data.birthYear);
                setBook(res.data.book);
            })
    }, [id]);

    const onSubmitHandler = e => {
        e.preventDefault();
        id === null ? 
        axios.post('http://localhost:8000/api/authors', {
            name,
            birthYear,
            book
        })
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err)):
        axios.put(`http://localhost:8000/api/authors/${id}`,{
            name,
            birthYear,
            book
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
        id === null ? history.push(`/`) : history.push(`/authors/${id}`)
    }

    return (
        <div style={{margin: "20px"}}>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <p>
                <label>Birthyear</label><br/>
                <input type="number" step="1" onChange={(e)=>setBirthYear(e.target.value)} value={birthYear}/>
            </p>
            <p>
                <label>Book</label><br/>
                <textarea onChange={(e)=>setBook(e.target.value)} value={book}/>
            </p>
            <input type="submit" value={id===null?"Add Author":"Edit Author"}/>
        </form>
        </div>
    )
}

export default AuthorForm;