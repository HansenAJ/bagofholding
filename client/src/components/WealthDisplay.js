import React, { Component } from 'react'



export default class ItemDisplay extends Component {

    // this.state = { wealth: this.props.wealth }
    state = {
        message: ['Wealth State Message'],
        wealth: this.props.wealthSend
    };

    //Set componentDidMount
    //assign props form parent to current state
    //use this state to display wealth instead of props

    componentDidMount() {
        console.log("Internal Mount activated")
        console.log(this.props.wealthSend)
        //this.setState( {wealth : this.props.wealthSend} )
    }



    inputHandler = (evnt) => {
        let updateWallet = { ...this.state.wealth }

        updateWallet[evnt.target.name] = evnt.target.value

        this.setState({ wealth: updateWallet })

        console.log("Plat On Input: " + this.state.wealth.plat)

    }


    handleSubmit = (evnt) => {
        evnt.preventDefault();
        console.log("Plat on submit: " + this.state.wealth.plat)
        //console.log("id on sub: " + this.state.wealth._id)
        this.props.parentCallback(this.state.wealth);
    }




    render() {
        console.log(`Plat on Internal Render= ${this.state.wealth.plat}`)
        return (
            <div>
                <form method="POST" onSubmit={this.handleSubmit}>
                    <label>Platinum:</label>
                    <input type="number" name="plat" value={this.state.wealth.plat} onChange={this.inputHandler} min="0" />
                    <label>Gold:</label>
                    <input type="number" name="gold" value={this.state.wealth.gold} onChange={this.inputHandler} min="0" />
                    <label>Electrum</label>
                    <input type="number" name="elec" value={this.state.wealth.elec} onChange={this.inputHandler} min="0" />
                    <label>Siver:</label>
                    <input type="number" name="silv" value={this.state.wealth.silv} onChange={this.inputHandler} min="0" />
                    <label>Copper:</label>
                    <input type="number" name="copp" value={this.state.wealth.copp} onChange={this.inputHandler} min="0" />
                    <input type="submit" value="Accept Wallet Changes" />
                </form>
            </div>
        )
    }
}