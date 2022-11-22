import { useReducer } from "react"

export const App = () => {
        const initialState = {
            userList: [],
            addUserName: ''
        }
        const reducer = (state, action) => {
            switch (action.type) {
                case 'SET_USER_NAME': {
                    return {
                        ...state,
                        addUserName: action.payload
                    }
                }
                case 'ADD_TO_ARRAY': {
                    return {
                        ...state,
                        userList: [...state.userList, state.addUserName],
                        addUserName: ''
                    }
                }
            }

        }
        const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <h1 className="text-center text-muted mb-0">
                State Management - useReducer
            </h1>
            <div className="underline bg-warning mx-auto"></div>
            <p className="lead">
                Listing Users 
            </p>
            <ul>
                {
                    state.userList.map((user,i) => {
                        return <li key={i}>{user}</li>
                    })
                }
            </ul>

            <input 
                type="text" 
                value={state.addUserName}
                onChange={(e) => dispatch({type:'SET_USER_NAME',payload:e.target.value})}
            />
            <button className="btn btn-primary mx-3 btn-sm" onClick={() => {dispatch({type:'ADD_TO_ARRAY'})}}>Add User</button>
        </>
    )
}