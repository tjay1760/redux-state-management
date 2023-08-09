const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk; 
const axios = require('axios')
const initialState ={
    loading:false,
    users:[],
    error:''
    };

    const fetchUsers = createAsyncThunk("use/fetchUsers", ()=>{
axios.get('https://jsonplaceholder.typicode.com/users').then(response=>response.data.map(user=>user))
    })

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: builder =>{
        builder.addCase(fetchUsers.pending, state =>{
            state.loading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) =>{
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) =>{
            state.loading = false;
            state.users = '';
            state.error = state.error.message

        })
    }

})
module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers