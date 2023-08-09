const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const userReducer = require('../user/userSlice')
const store = configureStore({
    reducer:{
            cake: cakeReducer,
            icecream: icecreamReducer,
            user: userReducer,
    },
    middleware: (getDefautMiddleware)=>
        getDefautMiddleware().concat(logger),
});
module.exports = store;