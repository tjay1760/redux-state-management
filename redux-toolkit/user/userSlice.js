const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk; 
const initialState ={
    loading:false,
    users:[],
    error:''
    };
const UserSlice = createSlice({
    name: "user",

})