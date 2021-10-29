import React, {useState} from 'react'

const PersonCard = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const [fNameError, setFNameError] = useState("");
    const [lNameError, setLNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");

    const handleEntry = (e, setEntry, setError, len) =>{
        setEntry(e.target.value);
        e.target.value.length < 1 
            ? setError("Must not be empty")
            : e.target.value.length<len 
                ? setError("Must be at least "+len+" characters long!")
                : setError("")
    }
    const handleConfirm = (e) =>{
        setConfirm(e.target.value);
        e.target.value.length < 1 
            ? setConfirmError("Must not be empty")
            : e.target.value.length<8
                ? setConfirmError("Must be at least 8 characters long!")
                : e.target.value !== password 
                    ? setConfirmError("Passwords must match")
                    : setConfirmError("")
    }
    return (
        <div>
            <form >
                <div>
                    <label>First Name:</label>
                    {
                        fNameError ?
                        <p style={{color:'red'}}>{ fNameError }</p> :
                        ''
                    }
                    <input type="text" onChange={(e) => 
                        handleEntry(e, setFirstName, setFNameError,2)}/>
                </div>
                <div>
                    <label>Last Name:</label>
                    {
                        lNameError ?
                        <p style={{color:'red'}}>{ lNameError }</p> :
                        ''
                    }
                    <input type="text" onChange={(e) => 
                        handleEntry(e, setLastName, setLNameError,2)}/>
                </div>
                <div>
                    <label>Email:</label>
                    {
                        emailError ?
                        <p style={{color:'red'}}>{ emailError }</p> :
                        ''
                    }
                    <input type="text" onChange={(e) => 
                        handleEntry(e, setEmail, setEmailError,5)}/>
                </div>
                <div>
                    <label>Password:</label>
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{ passwordError }</p> :
                        ''
                    }
                    <input type="password" onChange={(e) => 
                        handleEntry(e, setPassword, setPasswordError,8)}/>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    {
                        confirmError ?
                        <p style={{color:'red'}}>{ confirmError }</p> :
                        ''
                    }
                    <input type="password" onChange={(e) => 
                        handleConfirm(e)}/>
                </div>
            </form>
            <h2> Your Form Data</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirm}</p>
        </div>
    );
}

export default PersonCard;