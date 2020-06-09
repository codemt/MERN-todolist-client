import React, { Component } from 'react'
import axios from 'axios'
export default class CreateTodo extends Component {

    state = {

        title : '',
        todo : ' '


    }

    handleInputChange = (e) => {


        const target = e.target
        const name = target.name
        const value = target.value

        this.setState({

            [name] : value

        })
        console.log(this.state)

    }
    submitTodo = (e) => {

       

       const title = this.state.title
       const todo = this.state.todo

    
        
            e.preventDefault()
            axios.post('http://localhost:4000/api/todolist',{title,todo})
            .then(res =>{

                console.log(res.data)

            })
            .catch(err =>{

                console.log(err.messege)

            })

    }


    render() {
        return (
            <div>
                <input name="title" onChange={this.handleInputChange} type="text" placeholder="Enter Todo Title" value={this.state.title} />
                <input name="todo"  onChange={this.handleInputChange} type="text" placeholder="Enter Todo"  value={this.state.todo} />
                <button onClick={this.submitTodo}> Submit </button>
            </div>
        )
    }
}
