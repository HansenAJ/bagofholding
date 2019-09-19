
import React, { Component } from 'react'

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class PartyList extends Component {

    constructor() {
        super();
        this.state = {
            message: ['Party List State Message'],
            players: []
        };
    }

    componentWillMount() {
        fetch(`/api/getallparty/${this.props.match.params.partyID}`)
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



    render() {
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <p>This Is Text</p>
                <p>ID is {this.props.match.params.partyID}</p>
                <h1>{this.state.message}</h1>
                <h2>{this.state.players}</h2>
                <form method = "POST" action={"/api/addplayer/" }>
                    <label>Player Name</label>
                    <input type="text" name="name" placeholder="Blast HardCheese"/>
                    <label>Upload Picture</label>
                    <input type="text" name="picture" placeholder="Direct Image Path Only" />
                    <input type="hidden" name="partyID" value={this.props.match.params.partyID} />
                    <input type="submit" value="Add New party" />
                </form>
            </div>
        )
    }
}
