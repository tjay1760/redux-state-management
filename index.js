const redux = require('redux');
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const reduxLogger= require('redux-logger');
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ODERED = 'ICECREAM_ODERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';
function orderIcecream(qty =1) {
    return {
            type: ICECREAM_ODERED,
            payload: qty
        }
}
function restockIcecream (qty=1){
    return {
                type: ICECREAM_RESTOCKED,
                payload: qty
            }
}
function orderCake (){
    return {
            type: CAKE_ORDERED,
            payload: 1
        }
}
function restockCake (qty=1){
    return {
                type: CAKE_RESTOCKED,
                payload: qty
            }
}

// const initialState ={
//     numOfCakes : 10,
//     numOfIcecream: 20
// }
//(previousState,action) => newState;
const initialCakesState = {
    numOfCakes : 10,
}
const initialIcecreamState = {
    numOfIcecream: 20
}
const cakereducer =(state = initialCakesState, action)=>{
switch(action.type){
    case CAKE_ORDERED:
        return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case CAKE_RESTOCKED:
            return{
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
return state;
}

}
const IcecreamReducer =(state = initialIcecreamState, action)=>{
    switch(action.type){
                case ICECREAM_ODERED:
                    return{
                        ...state,
                        numOfIcecream: state.numOfIcecream - 1
                    }
                    case ICECREAM_RESTOCKED:
                        return{
                            ...state,
                            numOfIcecream: state.numOfIcecream + action.payload
                        }
            default:
    return state;
    }
    
    }
const rootReducer = combineReducers({
    cakes: cakereducer,
    icecream: IcecreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(()=>{});
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake());
// store.dispatch(restockCake(14));
const actions = bindActionCreators({
    orderCake,
    restockCake,orderIcecream,restockIcecream
},  store.dispatch);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(4);
actions.orderIcecream();
actions.restockIcecream(4);
unsubscribe();
