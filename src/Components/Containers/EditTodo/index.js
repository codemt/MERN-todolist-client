import React, { Component } from 'react'
import axios from 'axios'
export default class EditTodo extends Component {


    constructor(props){

            super(props);
            this.state = {

                id: props.match.params.id,
                todo: '',
                title: ''


            }
    }
    componentDidMount(){

        axios.get(`http://localhost:4000/api/todolist/${this.state.id}`)
            .then(res=>{

                console.log(res.data)
                console.log(res.data.todo)
                this.setState({

                    todo : res.data.todo,
                    title : res.data.title
                   
                })

            })
            console.log(this.state)

    }
    handleInputChange = (e) => {

        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({

            [name]: value

        })
        console.log(this.state)

    }

    UpdateTodo = (e) => {

        e.preventDefault()
        const id = this.state.id
        const todo = this.state.todo
        axios.put(`http://localhost:4000/api/todolist/`+id,{todo})
        .then(res => {

            console.log(res.data)

        })
        .catch(err => {

            console.log(err.messege)

        })

    }

    render() {
        return (
            <div>
                <h3> Edit Todo </h3>
                <label>Title</label> 
                <input name="title" type="text" value={this.state.title} disabled />
                <label> Todo </label> 
                <input name="todo" type="text" onChange={this.handleInputChange}  value={this.state.todo} />
                <button onClick={this.UpdateTodo}> Submit </button>
            </div> 
        )
    }
}
