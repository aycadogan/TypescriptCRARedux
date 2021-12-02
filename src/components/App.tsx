import React,{ Component } from "react";
import { connect } from 'react-redux'

class App extends Component {

    state = { fetching: false }

    componentDidUpdate(){
        this.setState({ fetching : false})
    }

    fetchHandler(){
        this.setState({ fetching : true})
    }

    render(){
        return(
            <div>
                <button onClick={this.fetchHandler}>Fetch</button>
            </div>
        )
    }
}

export default connect()(App)