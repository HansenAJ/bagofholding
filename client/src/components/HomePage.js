
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
                this.setState({message: data})
            })
    }

      componentWillMount() {
        fetch('/api/getallparty')
            .then((res) => {
                return res.json();
            }).then(data => {
                let partyList = data.map((data) => {
                    return(
                        <div>
                            <span>Picture = {data.picture}</span>
                            {/* <button href={"/getallplayers/" + data._id}>{data.name}</button> */}
                            <form action={`/partylist/${data._id}`}>
                                <input type="submit" value={data.name} />
                            </form>
                        </div>
                        )
                    })
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
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>{this.state.message}</h1>
                <h2>{this.state.parties}</h2>
                <form method = "POST" action="/api/addparty">
                    <label>Party Name</label>
                    <input type="text" name="name" placeholder="Murder Hobos Inc."/>
                    <label>Upload Picture</label>
                    <input type="text" name="picture" placeholder="Direct Image Path Only" />
                    <input type="submit" value="Add New party" />
                </form>
            </div>
        )
    }
}
