import axios from "axios"
const SERVER_URL = 'http://localhost:3001'

export function call(url, method, data) {
	const serverUrl = `${SERVER_URL}${url}`

	return axios({
		url: serverUrl,
		method: method,
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		data: JSON.stringify(data),
		params: method === "GET" && JSON.stringify(data)
	})
		.then(res => checkHttpStatus(res))
		.catch(error => {
			// No response from the server
			if (typeof error.response === "undefined") {
				error.response = {
					status: 408,
					message: "Cannot connect to the server"
				}
			}

			// UNAUTHORIZED
			if (error.response.status === 401) {
			}

			throw error
		})
}

export function get(url, data) {
	return call(url, "GET", data)
}

export function post(url, data) {
	return call(url, "POST", data)
}

export function put(url, data) {
	return call(url, "PUT", data)
}

export function del(url, data) {
	return call(url, "DELETE", data)
}

export function patch(url, data) {
	return call(url, "PATCH", data)
}

export function checkHttpStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response.data
	} else {
		var error = new Error(response.statusText)
		error.response = response.body
		error.status = response.status
		throw error
	}
}