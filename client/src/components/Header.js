import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Header extends Component {

    render() {
        return(
            <div>
                <h1>Bag Of Holding</h1>
                <Link to={`/homepage`} class='linkbutton'>Home</Link>
            </div>
        )
    }

}