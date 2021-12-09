import Card from "../UI/Card";
import styles from './AddUser.module.css';
import Button from "../UI/Button";
import {useState} from "react";

const AddUser = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const usernameChangeHandler = (event) => setUsername(event.target.value);
    const ageChangeHandler = (event) => setAge(event.target.value);

    const addUserHandler = (event) => {
        event.preventDefault();

        console.log(username, age);
        // setUsername('');
        // setAge('');
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;