
const createUser = (user) => {
    return fetch("http://localhost:8080/api/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
};

const deleteUser = (userId) => {
    return fetch(`http://localhost:8080/api/users/${userId}`, {
        method: "DELETE",
    })
        .then(response => response.json())
};

const updateUser = (userId, user) => {
    return fetch(`http://localhost:8080/api/users/${userId}`, {
        //change the default GET request to PUT request
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
};

const findUserById = (userId) => {
    return fetch(`http://localhost:8080/api/users/${userId}`)
        .then(response => response.json())
};

const findAllUsers = () => {
    return fetch("http://localhost:8080/api/users")
        .then(response => response.json())
};



export default {
    createUser,
    deleteUser,
    updateUser,
    findAllUsers,
    findUserById
}




