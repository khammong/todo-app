import { createAsyncThunk } from "@reduxjs/toolkit"
import { get, post, del, patch } from "../../utils"
import { TODO_URL } from "../../utils/apis"

export const getTodoListRequest = createAsyncThunk("todolist/getTodoListRequest", async (queryString, { rejectWithValue }) => {
	try {
		const response = await get(`${TODO_URL}`)
		return response
	} catch (err) {
		return rejectWithValue(err?.response)
	}
})

export const getTodoListByIdRequest = createAsyncThunk(
	"todolist/getTodoListByIdRequest",
	async (id, { rejectWithValue }) => {
		try {
			const response = await get(`${TODO_URL}/${id}`)
			return response
		} catch (err) {
			return rejectWithValue(err?.response)
		}
	}
)

export const addTodoListRequest = createAsyncThunk("todolist/addTodoListRequest", async (data, { rejectWithValue }) => {
	try {
		const response = await post(`${TODO_URL}`, { ...data })
		return response
	} catch (err) {
		return rejectWithValue(err?.response)
	}
})

export const completeTodoListRequest = createAsyncThunk("todolist/completeTodoListRequest", async (data, { rejectWithValue }) => {
	try {
		const response = await patch(`${TODO_URL}/${data.id}`, { ...data })
		return response
	} catch (err) {
		return rejectWithValue(err?.response)
	}
})

export const updateTodoListRequest = createAsyncThunk("todolist/updateTodoListRequest", async (data, { rejectWithValue }) => {
	try {
		const response = await patch(`${TODO_URL}/${data.id}`, { ...data })
		return response
	} catch (err) {
		return rejectWithValue(err?.response)
	}
})

export const deleteTodoListRequest = createAsyncThunk("todolist/deleteTodoListRequest", async (data, { rejectWithValue }) => {
	try {
		await del(`${TODO_URL}/${data}`)
	} catch (err) {
		return rejectWithValue(err?.response)
	}
})
