
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class PartyList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ['Party List State Message'],
            players: [],
            partyBag: []
        };
    }

    componentWillMount() {
        fetch(`/api/getallplayers/${this.props.match.params.partyID}`)
            .then((res) => {
                return res.json();
            }).then(data => {
                let playerList = data.map((data) => {
                    return(
                        <div>
                            <span>Picture = {data.picture}</span>
                            {/* <button href={"/getallplayers/" + data._id}>{data.name}</button> */}
                            <form action={`/playerpage/${data._id}`}>
                                <input type="submit" value={data.name} />
                            </form>
                        </div>
                        )
                    })
                this.setState({players: playerList})
            })
    }

    // componentWillMount() {
    //     fetch(`/api/getbag/${this.props.match.params.partyID}`)
    //     console.log(`ID is : ${this.props.match.params.partyID}`)
    //         .then((res) => {
    //             return res.json();
    //         }).then(data => {
    //             let bagList = data.map((data) => {
    //                 return(
    //                     <div>
    //                         <h3>Party Loot!</h3>
    //                         <span>Picture = {data.picture}</span>
    //                         {/* <button href={"/getallplayers/" + data._id}>{data.name}</button> */}
    //                         <form action={`/partybag/${data._id}`}>
    //                             <input type="submit" value="Party Bag" />
    //                         </form>
    //                     </div>
    //                     )
    //                 })
    //             this.setState({partyBag: bagList})
    //         })
    // }

    




    render() {

        return (
            <div>
                <Link to={`/homepage`}>Home</Link>
                {/* Accessing the value of message from the state object */}
                <p>This Is Text</p>
                <p>ID is {this.props.match.params.partyID}</p>
                <h1>{this.state.message}</h1>
                <Link to={`/partybag/${this.props.match.params.partyID}`}>Party Loot</Link>
                <h2>{this.state.players}</h2>
                <form method = "POST" action={"/api/addplayer/" }>
                    <label>Player Name</label>
                    <input type="text" name="name" placeholder="Blast HardCheese"/>
                    <label>Upload Picture</label>
                    <input type="text" name="picture" placeholder="Direct Image Path Only" />
                    <input type="hidden" name="partyID" value={this.props.match.params.partyID} />
                    <input type="submit" value="Add New Player" />
                </form>
            </div>
        )
    }
}
