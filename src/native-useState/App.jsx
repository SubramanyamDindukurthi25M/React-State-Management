import { useState } from "react"

export const App = () => {
    const [userList, setUserList] = useState(['john', 'david', 'elon']);
    const [addUserName, setUserName] = useState('');

    const handleAddUser = () => {
        // Add new element at the beginning of the list
        setUserList([addUserName, ...userList]);

        // Add new element at the end of the list
        // setUserList([...userList,addUserName]);
        setUserName('');
    }
    return (
        <>
            <h1 className="text-center text-muted mb-0">
                State Management - useState
            </h1>
            <div className="underline bg-warning mx-auto"></div>

            <h2>
                List of users - {userList.length}
            </h2>
            <ul>
                {
                    userList.map((user,i) => {
                        return <li key={i}>{user}</li>
                    })
                }
            </ul>
            <p className="lead">
                Add User Dynamically using input tag
            </p>
            <input 
                type="text" 
                value={addUserName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button className="btn btn-primary mx-3 btn-sm" onClick={handleAddUser}>Add User</button>
        </>
    )
}