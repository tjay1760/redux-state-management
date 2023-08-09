const createSlice = require("@reduxjs/toolkit").createSlice;
const initialState ={
    loading:false,
    users:[],
    error:''
    };
const UserSlice = createSlice({
    name: "user",

})