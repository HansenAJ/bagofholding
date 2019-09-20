
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
            wealth: [],
            cohorts: []
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
            .then(() => {
                    console.log("Second Fetch started")
                    fetch(`/api/getwallet/${this.props.match.params.playerID}`)
                    .then((res) => {
                        return res.json();
                    }).then(data => {
                        //console.log("Data :" + data)
                        let wallet = data.map((data) => {
                            return(
                                <div>
                                    <span>Platinum = {data.plat}</span>
                                    <span>Gold = {data.gold}</span>
                                    <span>Electrum = {data.elec}</span>
                                    <span>Silver = {data.silv}</span>
                                    <span>Copper = {data.copp}</span>
                                </div>
                                )
                            })
                            //console.log("Playerlist : " + playerList)
                        this.setState({wealth: wallet})
                    })
                })
            // .then(() => {
            //     console.log("Second Fetch started")
            //     fetch(`/api/getallplayers/${this.props.match.params.partyID}`)
            //     .then((res) => {
            //         return res.json();
            //     }).then(data => {
            //         //console.log("Data :" + data)
            //         let playerList = data.map((data) => {
            //             return(
            //                 <div>
            //                     <span>Name = {data.name}</span>
            //                     <span>ID= {data._id}</span>
            //                 </div>
            //                 )
            //             })
            //             //console.log("Playerlist : " + playerList)
            //         this.setState({cohorts: playerList})
            //     })
            // })
    }


    render() {
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>{this.state.message}</h1>
                <h1>{this.state.items}</h1>
                <h2>Wallet</h2>
                <h3>{this.state.wealth}</h3>
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
