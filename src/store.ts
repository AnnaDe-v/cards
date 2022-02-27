import {combineReducers, createStore} from "redux";
import { appReducer } from "./n3-bll/appReducer";


const reducers = combineReducers({
    app: appReducer
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store