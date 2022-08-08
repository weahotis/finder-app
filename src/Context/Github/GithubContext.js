import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()
export const GithubProvider = ({children})=>{
    const initialState = {
        users:[],
        loading:false,
    }
    //   get initial users(testing purposes)
    
    const [state, dispatch] = useReducer(githubReducer, initialState)
    // setLoading()
    
    // Get search users
    const searchUsers= async (text)=>{
        const params = new URLSearchParams({
            q:text
        })
        const GITHUB_URL = `https://api.github.com/search/users?${params}`
        const response = await fetch(GITHUB_URL)
        const {items} = await response.json()
        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    }
    // set loading
    const setLoading = ()=>{
        dispatch({type:'SET_LOADING'})
    }
    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
    }}>
        {children}
    </GithubContext.Provider>
}
export default GithubContext