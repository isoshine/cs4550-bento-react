import React from "react";
import UserRow from "./UserRow";

export default class UserTable extends React.Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <td>Username</td>
                        <td>Password</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Level</td>
                        <td></td>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.props.users.map(user =>
                            <UserRow deleteUser={this.props.deleteUser}
                                     key={user.id}
                                     user={user}/>)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}