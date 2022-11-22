import { useEffect, useState } from "react"

export const App = () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/users';
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
            .then((response) => response.json())
            .then((data) => setUsersList(data))
    }, []);

    return (
        <>
            <h1 className="text-center text-muted mb-0">
                State Management - useEffect
            </h1>
            <div className="underline bg-warning mx-auto"></div>
            <h1>
                List of Users - {usersList.length}
            </h1>
        </>
    )
}