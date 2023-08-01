const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios');
// Initial state
const initialState ={
    loading: false,
    users:[],
    error: ''
}; 
// Actions
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCEECED = 'FETCH_USERS_SUCEECED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

// Action creators
const FetchUsersRequest = () =>{
return{
    type: FETCH_USERS_REQUESTED,
}
}
const FetchUsersSuccess = (users) =>{
    return{
        type: FETCH_USERS_SUCEECED,
        payload: users,
    }
}
const FetchUsersFailure = () =>{
    return{
        type: FETCH_USERS_FAILED,
        payload: 'error'
    }
}
// reducer
const reducer = (state = initialState, action) =>{
switch(action.type){
case FETCH_USERS_REQUESTED:
    return{
        ...state,
        loading: true
    }
    case FETCH_USERS_SUCEECED:
        return{
            loading: false,
            users: action.payload,
            error:''
        }
    case FETCH_USERS_FAILED:
        return{
            loading: false,
            users: [],
            error:action.payload
        }
}
}
// Async action creator
const fetchUsers = () =>{
    return function(dispatch){
        dispatch(FetchUsersRequest())
axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
    const users = response.data
    dispatch(FetchUsersSuccess(users))
}).catch(error=>{
dispatch(FetchUsersFailure(error.message))
})
    }
}
// Store
const store = redux.createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())