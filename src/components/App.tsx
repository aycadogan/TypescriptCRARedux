import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos, clearTodos } from '../redux/actions'
import { StoreState } from '../redux/reducers'


interface AppProps {
    todos: Todo[];
    fetchTodos: Function;
    clearTodos: Function;
}

class App extends Component<AppProps> {
    state = { fetching: false }


    componentDidUpdate(prevProps: AppProps){
        if(!prevProps.todos.length && this.props.todos.length){
            console.log(this.props.todos);
            
            this.setState({ fetching: false })
        }
    }

    fetchHandler = ():void => {
        this.props.clearTodos()
        this.props.fetchTodos()
        this.setState({ fetching: true })
    }

    // forNever = ():never => {
    //     throw new Error('SOME ERROR HAPPENED')
    //     return undefined
    // }

    // forVoid = ():void => {
    //     let z = 5 + 2
    //     console.log(z)
    //     return undefined
    // }

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => (
            <div key={todo.id}>
                {todo.title}
            </div>
        ))
    }

    render(){
        return(
            <div>
                <button onClick={this.fetchHandler}>Fetch</button>
                {this.state.fetching ? 'Loading.....' : null}
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos }
}

export default connect(mapStateToProps, { fetchTodos, clearTodos })(App)