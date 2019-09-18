
import React, { Component } from 'react'

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class PartyBag extends Component {

    state = {
        message: 'Party Bag'
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


    // componentDidMount() {
    //     fetch('/api/helloworld')
    //         .then((res) => {
    //             this.setState({message: res.data})
    //         })
    // }


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
            </div>
        )
    }
}
