import { BaseApiService } from '@/_services/baseApi.service'

const baseUrl = process.env.VUE_APP_BASE_URL

class RolePermissionService extends BaseApiService {
	constructor () {
		super()
	}

	getAll () {
		const url = `${baseUrl}/role-permissions`
		return this.sendGetRequest(url)
	}

	create (data) {
		const url = `${baseUrl}/role-permissions/`
		return this.sendPostRequest(url, data)
	}

	getById (id) {
		const url = `${baseUrl}/role-permissions/${id}`
		return this.sendGetRequest(url)
	}

	update (data) {
		const url = `${baseUrl}/role-permissions/${data.id}/`
		return this.sendPutRequest(url, data)
	}

	delete (id) {
		const url = `${baseUrl}/role-permissions/${id}`
		return this.sendDeleteRequest(url)
	}
}

export const rolePermissionService = new RolePermissionService()