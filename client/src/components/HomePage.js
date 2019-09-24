
import React, { Component } from 'react'
import '../App.css'

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
        fetch('/lootapi/helloworld')
            .then((res) => {
                return res.json();
            }).then(data => {
                this.setState({message: data})
            })
    }

      componentWillMount() {
        fetch('/partyapi/getallparty')
            .then((res) => {
                return res.json();
            }).then(data => {
                let partyList = data.map((data) => {
                    return(
                        <div class="partyDisp">
                            {/* <button href={"/getallplayers/" + data._id}>{data.name}</button> */}
                            <form action={`/partylist/${data._id}`}>
                                <input type="submit" value={data.name} class='button'/>
                            </form>
                            <img src={data.picture} class='picDisp'/>
                            <form method="POST" action={`/partyapi/deleteparty/${data._id}?_method=DELETE`}>
                                <input type="submit" value="Total Party Kill" class="button"/>
                            </form>
                        </div>
                        )
                    })
                this.setState({parties: partyList})
            })
    }

    render() {
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <div class="homecontainer">
                    <div class="partycontainer">
                        {this.state.parties}
                    </div>
                </div>
                <form method = "POST" action="/partyapi/addparty">
                    <label>Party Name</label>
                    <input type="text" name="name" placeholder="Murder Hobos Inc."/>
                    <label>Upload Picture</label>
                    <input type="text" name="picture" placeholder="Direct Image Path Only" />
                    <br></br>
                    <input type="submit" value="New Party" class="button"/>
                </form>
            </div>
        )
    }
}
