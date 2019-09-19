
import React, { Component } from 'react'

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class PlayerPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ['Player State Message'],
            items: [],
            wealth: []
        };
    }

   
    componentWillMount() {
        fetch(`/api/getallitems/${this.props.match.params.playerID}`)
            .then((res) => {
                return res.json();
            }).then(data => {
                let itemList = data.map((data) => {
                    return(
                        <div>
                            <span>Name = {data.name}</span>
                            <span>Weight = {data.weight}</span>
                            <span>Quantity = {data.quantity}</span>
                            <span>Value = {data.value}</span>
                            <span>BookRef = {data.bookRef}</span>
                            <span>Notes = {data.notes}</span>
                        <form method="POST" action={`/api/deleteitem/${data._id}/${this.props.match.params.playerID}?_method=DELETE`}>
                            <input type="submit" value="Discard Item" />
                        </form>
                        </div>
                        )
                    })
                this.setState({items: itemList})
            })
    }


    render() {
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>{this.state.message}</h1>
                <h1>{this.state.items}</h1>
                <h2>Add New Item</h2>
                <form method = "POST" action={"/api/additem" }>
                    <label>Item Name</label>
                    <input type="text" name="name" placeholder="A Pointy Stick"/>
                    <label>Weight</label>
                    <input type="number" name="weight"/>
                    <label>Quantity</label>
                    <input type="number" name="quantity"/>
                    <label>Value</label>
                    <input type="text" name="value"/>
                    <label>Notes</label>
                    <input type="text" name="notes"/>
                    <label>BookRef</label>
                    <input type="text" name="bookRef"/>
                    <input type="hidden" name="ownBagID" value={this.props.match.params.playerID} />
                    <input type="submit" value="Add New Item" />
                </form>
            </div>
        )
    }
}
