import React, {Fragment, useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const onAddUserHandler = (username, age) => {
        setUsersList((prevState) => {
            return [...prevState, {id: Math.random().toString(), name: username, age: age}];
        });
    }

    return (
        <Fragment>
            <AddUser onAddUser={onAddUserHandler}/>
            <UserList users={usersList}/>
        </Fragment>
    );
}

export default App;
