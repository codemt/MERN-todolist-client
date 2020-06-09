import React, { Component } from 'react'
import axios from 'axios'
import { Link  } from 'react-router-dom'
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
    deleteTodo = (e) => {

        e.preventDefault();
        const id = e.target.id;
        console.log(id)
        axios.delete(`http://localhost:4000/api/todolist/${id}`)
        .then(res =>{

            console.log(res.data)

        })
        .catch(err =>{

            console.log(err.messege);

        })
    }

    render() {
        return (
            <div>
                <h1> My Todos </h1> 
                <ul>
                {this.state.todos.map((todo)=>(
                <div>
                    <div>
                    <h4> {todo.title} </h4>
                    <p> {todo.todo} </p>
                    </div>
                    <div>
                        <a> <Link to={`/edit/todo/${todo.id}`}>Edit  </Link></a>
                        <button id={todo.id} onClick={this.deleteTodo}> Delete</button>
                    </div>
                 </div>
                ))}
                </ul>
            </div>
        )
    }
}
