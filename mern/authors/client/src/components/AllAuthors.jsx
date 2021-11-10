import React from 'react'
import { Link } from 'react-router-dom';

const AllAuthors = ( {authors, deleteAuthor} ) => {
    return(
        <div>
            <h1> Favorite Authors: </h1>
            <Link style={{marginRight: '15px'}} to={`/authors/new`}>Add New</Link>
            <table>
                <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
                </thead>
                <tbody>
                {
                    authors.map(auth => 
                    <tr key={`${auth._id}`}>
                        <td><Link style={{marginRight: '15px'}} to={`/authors/${auth._id}`}>{auth.name}</Link></td>
                        <td>
                            <Link style={{marginRight: '15px'}} to={`/authors/edit/${auth._id}`}>
                                <button style={{color:'cornflowerblue'}} className="btn btn-secondary" >
                                    Edit
                                </button>
                            </Link>
                            <button style={{color:'red'}} className="btn btn-secondary" onClick={(e)=>{deleteAuthor(auth._id)}}>
                                Delete
                            </button>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    )
}
export default AllAuthors;