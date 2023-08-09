const createSlice = require('@reduxjs/toolkit').createSlice
const initialState = {
    numofIcecream:10
}
const IcecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers:{
        ordered: state =>{
            state.numofIcecream--
        },
        restocked: (state, actions) =>{
            state.numofIcecream+= actions.payload
        },
    }  

});
module.exports = IcecreamSlice.reducer;
module.exports.icecreamActions  = IcecreamSlice.actions;