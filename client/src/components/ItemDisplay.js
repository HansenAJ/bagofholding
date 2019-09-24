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
        //console.log(`${this.props.item}`)
        return(
            <div>
                <span>Name = {this.props.item.name} | </span>
                <span>Weight = {this.props.item.weight} | </span>
                <span>Quantity = {this.props.item.quantity} | </span>
                <span>Value = {this.props.item.value} | </span>
                <span>BookRef = {this.props.item.bookRef} | </span>
                <br></br>
                <span>Notes = {this.props.item.notes}</span>
                <form method="POST" action={`/lootapi/deleteitem/${this.props.item._id}/${this.props.playerID}/${this.props.partyID}?_method=DELETE`}>
                    <input type="submit" value="Discard Item" class="button"/>
                </form>
            </div>
            )
    }

}