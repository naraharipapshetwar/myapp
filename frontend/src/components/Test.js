import React, { Component } from 'react';

// connect to backend
import axios from 'axios';

class Test extends Component {

    state={ posts:null,error:null }

    handleSubmit = () => {
        axios.get('http://localhost:5000')
            .then(res => console.log(res))
            .catch(err=>console.log(err))
    }

    handleRecords = () => {

        const data = {
            test:'hello'
        }

        axios.post('http://localhost:5000/posts', data)
            .then(res => {
                console.log(res)
                this.setState({ posts:res.data })
            })
            .catch(err => {
                console.log(err.response)
                this.setState({ error:err.response })
            })
    }

    render() {
        return (
            <>
                {this.state.posts?JSON.stringify(this.state.posts):''}
                {this.state.error?JSON.stringify(this.state.error):''}
                <button onClick={this.handleSubmit} >Test</button>
                <button onClick={this.handleRecords} >GetRecords</button>
            </>
        );
    }
}
export default Test;