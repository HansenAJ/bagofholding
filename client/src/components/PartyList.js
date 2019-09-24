
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
        fetch(`/playerapi/getallplayers/${this.props.match.params.partyID}`)
            .then((res) => {
                return res.json();
            }).then(data => {
                let playerList = data.map((data) => {
                    return(
                        <div>
                            <img src= {data.picture} alt="Character Image" />
                            {/* <span>Picture = {data.picture}</span> */}
                            {/* <button href={"/getallplayers/" + data._id}>{data.name}</button> */}
                            <form action={`/playerpage/${data._id}/${this.props.match.params.partyID}`}>
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
                <div>
                    <img src="./images/treasurebox.png" alt="Treasure Image" />
                    <Link to={`/partybag/${this.props.match.params.partyID}`}>Party Loot</Link>
                </div>
                <h2>{this.state.players}</h2>
                <form method = "POST" action={"/playerapi/addplayer/" }>
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
