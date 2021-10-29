import React from 'react';

const ReduxPC = props => {
    const {store} = props;
    return (
        <div>
            <form >
                <div>
                    <label>First Name:</label>
                    {
                        store.getState().firstName.error ?
                        <p style={{color:'red'}}>{ store.getState().firstName.error }</p> :
                        ''
                    }
                    <input type="text" onChange={(e) => 
                        store.dispatch({
                            type: 'UPDATE_FNAME',
                            data: e.target.value
                        })}/>
                </div>
                <div>
                    <label>Last Name:</label>
                    {
                        store.getState().lastName.error != null ?
                        <p style={{color:'red'}}>{ store.getState().lastName.error  }</p> :
                        ''
                    }
                    <input type="text" onChange={(e) => 
                        store.dispatch({
                            type: 'UPDATE_LNAME',
                            data: e.target.value
                        })}/>
                </div>
                <div>
                    <label>Email:</label>
                    {
                        store.getState().email.error ?
                        <p style={{color:'red'}}>{ store.getState().email.error  }</p> :
                        ''
                    }
                    <input type="text" onChange={(e) => 
                        store.dispatch({
                            type: 'UPDATE_EMAIL',
                            data: e.target.value
                        })}/>
                </div>
            </form>
            <h2> Your Form Data</h2>
            <p>First Name: {store.getState().firstName.value}</p>
            <p>Last Name: {store.getState().lastName.value}</p>
            <p>Email: {store.getState().email.value}</p>
        </div>
    );
};
export default ReduxPC;