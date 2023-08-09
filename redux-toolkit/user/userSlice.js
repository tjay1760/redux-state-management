const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk; 
const axios = require('axios')
const initialState ={
    loading:false,
    users:[],
    error:''
    };
    const fetchUsers = createAsyncThunk("use/fetchUsers"()=>{
        
    })
const UserSlice = createSlice({
    name: "user",

})