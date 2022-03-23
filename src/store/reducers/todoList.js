import { createSlice } from "@reduxjs/toolkit"

import { IDLE, PENDING, SUCCESS, FAILURE } from "../../utils/const"

import {
    getTodoListRequest,
    getTodoListByIdRequest,
    addTodoListRequest,
    updateTodoListRequest,
    completeTodoListRequest,
    deleteTodoListRequest
} from "../actions/todoList"

const todoListSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: {
            status: IDLE,
            data: []
        },
        todoListData: {
            status: IDLE
        },
        addTodoList: {
            status: IDLE
        },
        completeTodoList: {
            status: IDLE
        },
        updateTodoList: {
            status: IDLE
        },
        deleteTodoList: {
            status: IDLE
        }
    },
    reducers: {
        setAddTodoListIdle: (state, action) => {
            state.addTodoList.status = IDLE
        },
        setFetchTodoListDataIdle: (state, action) => {
            state.todoListData.status = IDLE
        },
        setDeleteTodoListIdle: (state, action) => {
            state.deleteTodoList.status = IDLE
        },
        setCompleteTodoListIdle: (state, action) => {
            state.completeTodoList.status = IDLE
        },
        setUpdateTodoListIdle: (state, action) => {
            state.updateTodoList.status = IDLE
        }
    },
    extraReducers: {
        [getTodoListRequest.pending]: (state) => {
            let todoList = state.todoList
            todoList.status = PENDING
        },
        [getTodoListRequest.fulfilled]: (state, action) => {
            const todoList = state.todoList
            if (todoList.status === PENDING) {
                todoList.status = SUCCESS
                todoList.data = action.payload
            }
        },
        [getTodoListRequest.rejected]: (state, action) => {
            const todoList = state.todoList
            if (todoList.status === PENDING) {
                todoList.status = FAILURE
                todoList.error = action.payload
            }
        },
        // gettodoListById
        [getTodoListByIdRequest.pending]: (state, action) => {
            let todoListData = state.todoListData
            todoListData.status = PENDING
        },
        [getTodoListByIdRequest.fulfilled]: (state, action) => {
            const todoListData = state.todoListData
            if (todoListData.status === PENDING) {
                todoListData.status = SUCCESS
                const { id, title, completed } = action.payload
                todoListData.data = {
                    id: id,
                    title: title,
                    completed: completed
                }
            }
        },
        [getTodoListByIdRequest.rejected]: (state, action) => {
            const todoListData = state.todoListData
            if (todoListData.status === PENDING) {
                todoListData.status = FAILURE
                todoListData.error = action.payload
            }
        },
        // addtodoList
        [addTodoListRequest.pending]: (state, action) => {
            let addTodoList = state.addTodoList
            addTodoList.status = PENDING
        },
        [addTodoListRequest.fulfilled]: (state, action) => {
            const addTodoList = state.addTodoList
            if (addTodoList.status === PENDING) {
                addTodoList.status = SUCCESS
            }
        },
        [addTodoListRequest.rejected]: (state, action) => {
            const addTodoList = state.addTodoList
            if (addTodoList.status === PENDING) {
                addTodoList.status = FAILURE
                addTodoList.error = action.payload
            }
        },
        // updatetodoList
        [updateTodoListRequest.pending]: (state, action) => {
            let updateTodoList = state.updateTodoList
            updateTodoList.status = PENDING
        },
        [updateTodoListRequest.fulfilled]: (state, action) => {
            const updateTodoList = state.updateTodoList
            if (updateTodoList.status === PENDING) {
                updateTodoList.status = SUCCESS
            }
        },
        [updateTodoListRequest.rejected]: (state, action) => {
            const updateTodoList = state.updateTodoList
            if (updateTodoList.status === PENDING) {
                updateTodoList.status = FAILURE
                updateTodoList.error = action.payload
            }
        },
        // completetodoList
        [completeTodoListRequest.pending]: (state, action) => {
            let completeTodoList = state.completeTodoList
            completeTodoList.status = PENDING
        },
        [completeTodoListRequest.fulfilled]: (state, action) => {
            const completeTodoList = state.completeTodoList
            if (completeTodoList.status === PENDING) {
                completeTodoList.status = SUCCESS
            }
        },
        [completeTodoListRequest.rejected]: (state, action) => {
            const completeTodoList = state.completeTodoList
            if (completeTodoList.status === PENDING) {
                completeTodoList.status = FAILURE
                completeTodoList.error = action.payload
            }
        },
        // deletetodoList
        [deleteTodoListRequest.pending]: (state, action) => {
            let deleteTodoList = state.deleteTodoList
            deleteTodoList.status = PENDING
        },
        [deleteTodoListRequest.fulfilled]: (state, action) => {
            const deleteTodoList = state.deleteTodoList
            if (deleteTodoList.status === PENDING) {
                deleteTodoList.status = SUCCESS
            }
        },
        [deleteTodoListRequest.rejected]: (state, action) => {
            const deleteTodoList = state.deleteTodoList
            if (deleteTodoList.status === PENDING) {
                deleteTodoList.status = FAILURE
                deleteTodoList.error = action.payload
            }
        }
    }
})

export const { setAddTodoListIdle, setDeleteTodoListIdle, setFetchTodoListDataIdle, setCompleteTodoListIdle, setUpdateTodoListIdle } =
    todoListSlice.actions

export default todoListSlice.reducer
