import React, {useState, useEffect} from 'react';
import AuthorForm from '../components/AuthorForm';
import AllAuthors from '../components/AllAuthors';
import OneAuthor from '../components/OneAuthor';
//import UpdateProduct from '../components/UpdateProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

const Main = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res=>setAuthors(res.data.sort((a1,a2) => a1.name.localeCompare(a2.name))))
        .catch(err=>console.log(err))
        }, [authors]);
    
    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(res => {
                setAuthors(authors.filter(author => author._id !== authorId));
            })
            .catch(err => console.error(err));
        }   

    return (
    <div>
        <Router>
        <Switch>
            <Route exact path = "/">
                <div style={{display:'flex', justifyContent: 'space-around'}}>
                    <AllAuthors authors={authors} deleteAuthor={deleteAuthor}/>
                </div>
            </Route>
 
            <Route path={["/authors/edit/:id", "/authors/new/"]}>
                <AuthorForm />
            </Route>
            <Route exact path="/authors/:id">
                <OneAuthor deleteAuthor={deleteAuthor}/>
            </Route>
        </Switch>
        </Router>
    </div>
    )
}
export default Main;