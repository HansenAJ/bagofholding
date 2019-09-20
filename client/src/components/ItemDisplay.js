import React, { Component } from 'react'

export default class ItemDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ['Item Display State Message'],
            item: []
        };
    }


    render(){
        console.log(`${this.props.item}`)
        return(
            <div>
                <span>Name = {this.props.item.name}</span>
                <span>Weight = {this.props.item.weight}</span>
                <span>Quantity = {this.props.item.quantity}</span>
                <span>Value = {this.props.item.value}</span>
                <span>BookRef = {this.props.item.bookRef}</span>
                <span>Notes = {this.props.item.notes}</span>
            <form method="POST" action={`/api/deleteitem/${this.props.item._id}/${this.props.playerID}?_method=DELETE`}>
                <input type="submit" value="Discard Item" />
            </form>
            </div>
            )
    }

}