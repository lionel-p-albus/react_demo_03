import React, {useState} from 'react';
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
        <React.Fragment>
            <AddUser onAddUser={onAddUserHandler}/>
            <UserList users={usersList}/>
        </React.Fragment>
    );
}

export default App;
