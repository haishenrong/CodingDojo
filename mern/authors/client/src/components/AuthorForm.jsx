import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import axios from 'axios';

const AuthorForm = () => {
    const [name, setName] = useState(""); 
    const [birthYear, setBirthYear] = useState(0);
    const [book, setBook] = useState(""); 
    const [errors, setErrors] = useState([]); 
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

    const errorHandler = (err) => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        id === null ? 
        axios.post('http://localhost:8000/api/authors', {
            name,
            birthYear,
            book
        })
        .then(res=>{
            console.log(res.data);
            history.push(`/`);
            }
        ).catch(err=>{
            console.log(err);
            errorHandler(err);
        }):
        axios.put(`http://localhost:8000/api/authors/${id}`,{
            name,
            birthYear,
            book
        })
            .then(res =>  {
                console.log(res.data);
                history.push(`/authors/${id}`)}
            ).catch(err => {
                errorHandler(err);
                console.error(err);
            }
        );
        //id === null ? history.push(`/`) : history.push(`/authors/${id}`)
    }

    return (
        <div style={{margin: "20px"}}>
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
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