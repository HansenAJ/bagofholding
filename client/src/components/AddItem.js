import React, { Component } from 'react'

export default class AddItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ['Item Add State Message'],
            newItem: {
                name: "Default Item",
                weight: 1,
                quantity: 1,
                value: 1,
                notes: "Notes",
                bookRef: "Book",
                ownBagID: this.props.playerID
            }
        };
    }



    inputHandler = (evnt) => {
        let updateItem = {...this.state.newItem}
        updateItem[evnt.target.name] = evnt.target.value
        this.setState({ newItem: updateItem })
        console.log(updateItem[evnt.target.name])
      }

    handleSubmit = (evnt) => {
        evnt.preventDefault();
        console.log(this.state.newItem.name)
        this.props.addItem(this.state.newItem)

    }

    render(){
        return(
            <div>
                <h2>Add New Item</h2>
                <form method = "POST" onSubmit={this.handleSubmit}>
                    <label>Item Name</label>
                    <input type="text" name="name" placeholder="A Pointy Stick" onChange={this.inputHandler}/>
                    <label>Weight</label>
                    <input type="number" name="weight" min="0" onChange={this.inputHandler}/>
                    <label>Quantity</label>
                    <input type="number" name="quantity" onChange={this.inputHandler}/>
                    <label>Value</label>
                    <input type="number" name="value" onChange={this.inputHandler}/>
                    <label>Notes</label>
                    <input type="text" name="notes" onChange={this.inputHandler}/>
                    <label>BookRef</label>
                    <input type="text" name="bookRef" onChange={this.inputHandler}/>
                    <input type="submit" value="Add New Item" />
                </form>
            </div>            
        )
    }
}