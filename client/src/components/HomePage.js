
import React, { Component } from 'react'

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class HomePage extends Component {

    constructor() {
        super();
        this.state = {
            message: [],
            parties: []
        };
    }

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */
    // componentDidMount() {
    //     axios.get('/api/helloworld')
    //         .then((res) => {
    //             this.setState({message: res.data})
    //         })
    // }

    componentDidMount() {
        fetch('/api/helloworld')
            .then((res) => {
                return res.json();
            }).then(data => {
                console.log("hello data = " + data)
                this.setState({message: data})
            })
    }

      componentWillMount() {
        console.log("Mounted")
        fetch('/api/getallparty')
            .then((res) => {
                return res.json();
            }).then(data => {
                let partyList = data.map((data) => {
                    return(
                        <div>
                            <span>Picture = {data.picture}</span>
                            <span>Name = {data.name}</span>
                        </div>
                        )
                    })
                console.log("PartyList = " + partyList)
                this.setState({parties: partyList})
            })
    }



    /* Step 5
    *  The render function manages what is shown in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */
    render() {
        console.log("This state is " + this.state.parties)
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>{this.state.message}</h1>
                <h2>{this.state.parties}</h2>
            </div>
        )
    }
}
