import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navigation extends Component {
    render() {
        return (
            <div>
            <ul>
                <li><Link to="/dashboard">Dashboard </Link></li>
                <li> <Link to="/create"> Create </Link></li>
            </ul>    
            </div>
        )
    }
}
