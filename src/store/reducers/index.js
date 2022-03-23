import todoListReducer from "./todoList"

import { combineReducers } from "@reduxjs/toolkit"

const rootReducer = combineReducers({
	todoList: todoListReducer,
})

export default rootReducer
