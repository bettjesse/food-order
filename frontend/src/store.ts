import {configureStore} from "@reduxjs/toolkit"
import { apiSlice } from "./slices/apiSlice"
import tokenReducer from "./slices/tokenSlice"




export const store = configureStore({
    reducer :{
        token:  tokenReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export  type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>