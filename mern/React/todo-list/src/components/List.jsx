import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

const List = () => {
    const [list, setList] = useState([]);
    const [checkBoxes, setCheckBoxes] = useState([]);
    const [item, setItem] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();
        setList(oldList => [...oldList, item])
        setCheckBoxes(oldCheckBoxes => [...oldCheckBoxes, false])
    }

    const handleDelete = (e) => {
        e.preventDefault();
        setList(oldList => oldList.filter((ele, idx) => e.target.id!=idx));
        setCheckBoxes(oldCheckBoxes => oldCheckBoxes.filter((ele, idx) => e.target.id!=idx));
    }

    return (
        <div>
            <Form onSubmit={(e) => handleAdd(e)}>
                <Form.Label>Add an item to list:</Form.Label>
                <Form.Control type="text" onChange={(e)=>setItem(e.target.value)} ></Form.Control>
                <Button variant="primary" type="submit"> Add </Button>
            </Form>
            {list.map((element, index) => 
                <Form id={index} onSubmit={(e) => handleDelete(e)}>
                    <div style={{display: "flex", marginLeft: "45%", textAlign:"center"}}>
                    { checkBoxes[index] 
                        ? <Form.Label style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{element}</Form.Label>
                        : <Form.Label>{element}</Form.Label>
                    }       
                    <Form.Check onChange={(e) => setCheckBoxes(old => old.map((ele, i) => i===index ? e.target.checked : ele))}/>
                    <Button id={index} variant="secondary" type="submit"> Delete </Button>
                    </div>
                </Form>
            )}
        </div>
    );
};

export default List;