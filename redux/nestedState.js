const redux = require('redux');
const produce = require('immer').produce;
const reduxLogger= require('redux-logger');
const logger = reduxLogger.createLogger();

const initialState = {
    name:'John',
    address:{
        street: 'John Street',
        city: 'New York',
        state: 'NY'
    }
}
const STREET_UPDATED = 'STREET_UPDATED'
const updateStreet = (street) =>{
    return {
            type:STREET_UPDATED,
            payload:street
        }
}
const reducer = (state =initialState, action) =>{
switch(action.type){
    case STREET_UPDATED:
        // return{
        //     ...state,
        //     address:{
        //         ...state.address,
        //         street:action.payload
        //     }
        //             }
        return produce(state, (draft) =>{
                    draft.address.street = action.payload
                })
        default:
            return state;
}
}
const store = redux. createStore(reducer)
console.log("Initial State: ", store.getState())
const unsubscribe = store.subscribe(()=>{
    console.log('Updated State',store.getState())
})
store.dispatch(updateStreet('Tjays New Street'))