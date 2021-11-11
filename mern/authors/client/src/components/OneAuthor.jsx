import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

const OneAuthor = ({deleteAuthor}) => {
    const [author, setAuthor] = useState(null);
    const {id} = useParams(); 
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res=>{
            setAuthor(res.data)
        })
        .catch(err=>console.log(err))
    }, [author, id]);
        

    return (
        <div style={{margin:"15px 15px"}}> {
            author !== null ? <div>
            <h1>{author.name}</h1>
            <p> Age: {author.birthYear}</p>
            <p> Book: {author.book}</p>
            <Link style={{marginRight: '15px'}} to={`/authors/edit/${author._id}`}>
                <button style={{color:'cornflowerblue'}} className="btn btn-secondary">
                    Edit
                </button>
            </Link>
            <button style={{color:'red'}} className="btn btn-secondary" onClick={(e)=>{deleteAuthor(author._id); history.push('/');}}>
                Delete
            </button>
            <Link style={{marginLeft: '15px'}} to={`/`}>
                <button style={{color:'aliceblue'}} className="btn btn-primary">
                    Home
                </button>
            </Link>
            </div>
            : <div> <h1> Author not found </h1> <Link to={`/authors/new`}>Make new one?</Link> </div>
        }
        </div>
    )
}

export default OneAuthor;