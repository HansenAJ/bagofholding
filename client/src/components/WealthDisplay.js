import React, { Component } from 'react'

export default class ItemDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ['Wealth State Message'],
            wealth: {
                plat: 1,
                gold: 1,
                elec: 1,
                silv: 1,
                copp: 1,
            }

        };
    }


    inputHandler= (evnt) => {
        let updateWallet = {...this.state.wealth}
    
        updateWallet[evnt.target.name] = evnt.target.value

        this.setState({ wealth: updateWallet })
      }
    
    // submitHandler = (evnt) => {
    //     evnt.preventDefault();
    
    //     this.props.addAssignment(this.state.newAssignment)
    //   }


    render() {
        console.log(`Wealth Plat= ${this.props.wealth.plat}`)
        return (
            <div>
                <form>
                    <label>Platinum:</label>
                    <input type="number" name="plat" value={this.props.wealth.plat} onChange={this.inputHandler} min="0"/>                                   
                    <label>Gold:</label>
                    <input type="number" name="gold" value={this.props.wealth.gold} onChange={this.inputHandler} min="0"/>
                    <label>Electrum</label>
                    <input type="number" name="elec" value={this.props.wealth.elec} onChange={this.inputHandler} min="0"/>
                    <label>Siver:</label>
                    <input type="number" name="silv" value={this.props.wealth.silv} onChange={this.inputHandler} min="0"/>
                    <label>Copper:</label>
                    <input type="number" name="copp" value={this.props.wealth.copp} onChange={this.inputHandler} min="0"/>
                </form>
            </div>
        )
    }
}