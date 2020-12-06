import React from 'react';
import axios from 'axios';

const Test = () => {

    const handleSubmit = () => {
        axios.get('http://localhost:5000/')
            .then(res => console.log(res))
            .catch(err=>console.log(err))
    }

    const handleRecords = () => {
        const data = {
            test:'hello'
        }
        axios.post('http://localhost:5000/posts', data)
            .then(res => console.log(res))
            .catch(err=>console.log(err))
    }
    return (
        <>
            <button onClick={handleSubmit} >Test</button>
            <button onClick={handleRecords} >GetRecords</button>
        </>
    );
}
export default Test;