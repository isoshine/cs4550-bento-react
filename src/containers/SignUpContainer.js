import React from "react";
import userService from "../services/UserService";
import SignUp from "../components/SignUp";

export default class SignUpContainer extends React.Component {
    state = {
        users: [],
    };

    componentDidMount() {
        userService.findAllUsers()
            .then(actualArrayOfUsers => this.setState({users: actualArrayOfUsers}))
    }

    createUser = (first, last, username, password) => {
        const newUser = {
            first: first,
            last: last,
            username: username,
            password: password
        };

        userService.createUser(newUser).then(theActualNewUser =>
            this.setState((prevState) => {
                return {
                    users: [
                        ...prevState.users,
                        theActualNewUser
                    ]
                }
            }))
    };

    // updateUser = () => {
    // };

    render() {
        return (
            <div>
                <h3>Sign-Up</h3>
                <SignUp createUser={this.createUser}
                           users={this.state.users}/>
            </div>
        )
    }
}