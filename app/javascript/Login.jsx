import React from "react";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }

        this.setUsername = this.setUsername.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setUsername(event) {
        this.setState({username: event.target.value})
    }

    onSubmit(){

    }

    render() {
        return <div className="hero-body is-justify-content-center ">
            <form onSubmit={this.onSubmit}>
                <input onChange={this.setUsername} value={this.state.username}
                       className="has-background-grey-lighter input is-size-4" type="text" placeholder="Username"/>
            </form>
        </div>
    }
}

export default Login