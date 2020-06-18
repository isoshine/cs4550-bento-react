import React from "react";
import userService from "../services/UserService";
import UserTable from "../components/UserTable";

//UserAdmin Page: Admin has the authority to remove users from web application.
class UserAdminContainer extends React.Component {
    state = {
        users: [],
    };

    componentDidMount() {
        userService.findAllUsers()
            .then(actualArrayOfUsers => this.setState({users: actualArrayOfUsers}))
    }

    deleteUser = (userToDelete) => {
        userService.deleteUser(userToDelete.id)
            .then(status => this.setState((prevState => {
                return ({
                    users: prevState.users.filter(user => {
                        return user !== userToDelete
                    })
                })
            })))
    };

    render() {
        return (
            <div>
                <h3>User Admin</h3>
                <UserTable deleteUser={this.deleteUser}
                           users={this.state.users}/>
            </div>
        )
    }
}

export default UserAdminContainer;