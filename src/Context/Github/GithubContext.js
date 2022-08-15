import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()
export const GithubProvider = ({children})=>{
    const initialState = {
        users:[],
        user:{},
        loading:false,
        repos:[],
    }
    //   get initial users(testing purposes)
    
    // clear users
    const clearUsers=()=>dispatch({
        type: "CLEAR_USERS"
    })
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
// get single user
const getUser= async (login)=>{
    const GITHUB_URL = `https://api.github.com/users/${login}`
    const response = await fetch(GITHUB_URL)
    // check if user doesn't exit or 404
    if(response.status === 404){
        // redirect user back to error page
        window.location = '/notfound'
    }else{
        const data = await response.json()
        dispatch({
            type: 'GET_USER',
            payload: data
        })
    }
}
// Get user Repos
const getUserRepos= async (login)=>{
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10
    })
    const GITHUB_URL = `https://api.github.com/users/${login}/repos?${params}`
    const response = await fetch(GITHUB_URL)
    const data = await response.json()
    dispatch({
        type: 'GET_REPOS',
        payload: data
    })
}

    // set loading
    const setLoading = ()=>{
        dispatch({type:'SET_LOADING'})
    }
    return <GithubContext.Provider value={{
    //    spread out all the actions from the state
        ...state,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
    }}>
        {children}
    </GithubContext.Provider>
}
export default GithubContext