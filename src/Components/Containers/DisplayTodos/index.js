import React, { Component } from 'react'
import axios from 'axios'
export default class DisplayTodos extends Component {

    state = {

        todos : []

    }
    
    componentDidMount(){

        axios.get('http://localhost:4000/api/todolist')
        .then(res =>{

            console.log(res.data)
            this.setState({

                todos: res.data

            })
            console.log(this.state.todos)

        })
        .catch(err =>{


                console.log(err.messege)

        })


    }

    render() {
        return (
            <div>
                <h1> My Todos </h1> 
                <ul>
                {this.state.todos.map((todo)=>(
                    <div>
                    <h4> {todo.title} </h4>
                    <p> {todo.todo} </p>
                    </div>
                ))}
                </ul>
            </div>
        )
    }
}
