
import React, { Component } from 'react'
import AddItem from './AddItem';
import ItemDisplay from './ItemDisplay';
import WealthDisplay from './WealthDisplay';


export default class PlayerPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ['Player State Message'],
            items: [],
            wealth: {
                plat: 10,
                gold: 9,
                elec: 8,
                silv: 7,
                copp: 6
            }
        };
    }

   
    componentDidMount() {
        this.getAll()
    }

AddItem = (data) => {
    fetch("/api/additem", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
                }
            }).then(() => {
                this.getAll()
            })
    }

    getAll = () => {
        fetch(`/api/getallitems/${this.props.match.params.playerID}`)
            .then(res => res.json())
            .then((res) => {
                this.setState({items: res})
            })
            .then(() => {
                console.log("Second Fetch Run")
                fetch(`/api/getwallet/${this.props.match.params.playerID}`)
                .then(resW => resW.json())
                .then((resW) => {
                    console.log("Resafter json = " + resW.plat)
                    this.setState( {wealth: resW} )
                })
            })
    }

    render() {
        console.log(`Wealth Plat= ${this.state.wealth.plat}`)
        return (
            <div>
                {this.state.items.map(item => (
                        <ItemDisplay item={item} playerID={this.props.match.params.playerID}/>
                ))}
                <AddItem addItem={this.AddItem} playerID={this.props.match.params.playerID}/>
                <WealthDisplay wealth={this.state.wealth}/>
            </div>
        )
    }
}
