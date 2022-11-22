import { useMemo, useState } from "react"

export const App = () => {
    const [numbers] = useState([10, 20, 30, 40]);
    const initialValue = 0;
    const numbersTotal = useMemo(() => numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue, [numbers]));

    const [userNames] = useState(['bala', 'anand', 'lakshmi', 'karuna', 'ramji']);
    // Copy values to sortedNames variable
    const sortedNames = useMemo(() => [...userNames].sort(), [userNames]);
    return(
        <>
            <h1 className="text-center text-muted mb-0">
                State Management - useMemo and useCallback
            </h1>
            <div className="underline bg-warning mx-auto"></div>
            <h2>
                Total Sum - <span className="text-danger">{numbersTotal}</span> 
            </h2>
            <p className="lead">
                UnSorted Names - {userNames.join(', ')}
            </p>
            <p className="lead">
                Sorted Names - {sortedNames.join(', ')}
            </p>
        </>
    )
}