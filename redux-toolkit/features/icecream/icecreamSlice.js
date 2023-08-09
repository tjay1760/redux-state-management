const { createSlice } = require('@reduxjs/toolkit');
const { cakeActions } = require('../cake/cakeSlice');

const initialState = {
    numofIcecream: 10
};

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numofIcecream--;
        },
        restocked: (state, action) => {
            state.numofIcecream += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numofIcecream--;
        });
    }
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
