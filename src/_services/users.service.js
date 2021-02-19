import { BaseApiService } from '@/_services/baseApi.service'

const baseUrl = process.env.VUE_APP_BASE_URL

class UsersService extends BaseApiService {
	constructor () {
		super()
	}

	getAll (role, airline) {
		const url = `${baseUrl}/users/${airline ? '?airline='+airline : ''}${role ? '&role='+role : ''}`
		return this.sendGetRequest(url)
	}

	create (data) {
		const url = `${baseUrl}/users/`
		return this.sendPostRequest(url, data)
	}

	getById (id) {
		const url = `${baseUrl}/users/${id}`
		return this.sendGetRequest(url)
	}

	update (data) {
		const url = `${baseUrl}/users/${data.id}/`
		return this.sendPutRequest(url, data)
	}

	delete (id) {
		const url = `${baseUrl}/users/${id}`
		return this.sendDeleteRequest(url)
	}
}

export const usersService = new UsersService()