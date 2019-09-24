
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                //_id: String,
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
    console.log("AddItem DataName: " + data.name)
    fetch("/lootapi/additem", {
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
        fetch(`/lootapi/getallitems/${this.props.match.params.playerID}`)
            .then(res => res.json())
            .then((res) => {
                //console.log("Item Res json = " + res)
                this.setState( {items: res} )
            })
            // .then(() => {
            //     console.log("Second Fetch Run")
            //     fetch(`/api/getwallet/${this.props.match.params.playerID}`)
            //     .then(resW => resW.json())
            //     .then((resW) => {
            //         console.log("Resafter json = ", resW)
            //         this.setState( {wealth: resW[0]} )
            //     })
            // })
    }

//     callbackFunction = (childData) => {
//         //this.setState( {wealth: childData} )
//         //console.log("walletid is: " + this.state.wallet[0]._id)
//         // .then((childData) => {
//             console.log("Child Dataplat: " + childData.plat)
//         fetch("/api/updatewallet", {
//             method: 'PUT', // or 'PUT'
//             body: JSON.stringify(childData), // data can be `string` or {object}!
//             headers:{
//               'Content-Type': 'application/json'
//                     }
//                 }).then(() => {
//                     this.getAll()
//                 })
//   }



    render() {
        let walletToPass = {...this.state.wealth}
        // console.log(`Parent Wealth Plat=`, this.state.wealth)
        // console.log(`wallet Plat= ${walletToPass.plat}`)
        return (
            <div>
                <form method="POST" action={`/playerapi/deleteplayer/${this.props.match.params.playerID}/${this.props.match.params.partyID}?_method=DELETE`}>
                    <input type="submit" value="Delete Player" class='button'/>
                </form>
                <Link to={`/partylist/${this.props.match.params.partyID}`}>Back to Party</Link>
                {/* <WealthDisplay wealthSend={this.state.wealth} parentCallback = {this.callbackFunction}/> */}
                {this.state.items.map(item => (
                        <ItemDisplay item={item} playerID={this.props.match.params.playerID} partyID={this.props.match.params.partyID}/>
                ))}
                <AddItem addItem={this.AddItem} playerID={this.props.match.params.playerID}/>
            </div>
        )
    }
}
