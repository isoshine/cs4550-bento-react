import React from "react";

export default class UserRow extends React.Component {
    state = {
        user: this.props.user
    };

    render() {
        return (
            <tr className="bento-user-row-template" key={this.props.user.id}>
                <td className="bento-username font-weight-bold">@{this.state.user.username}</td>
                <td className="bento-password">********</td>
                <td className="bento-first-name">{this.state.user.first}</td>
                <td className="bento-last-name">{this.state.user.last}</td>
                <td className="bento-level">{this.state.user.level}</td>
                <td className="bento-controls">
                    <button className="btn btn-sm btn-danger"
                            onClick={() => this.props.deleteUser(this.props.user)}>
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
}