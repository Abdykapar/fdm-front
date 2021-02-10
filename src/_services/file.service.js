import { BaseApiService } from '@/_services/baseApi.service'

const baseUrl = process.env.VUE_APP_BASE_URL

class FileService extends BaseApiService {
	constructor () {
		super()
	}

	getAll () {
		const url = `${baseUrl}/files/`
		return this.sendGetRequest(url)
	}

	create (data) {
		const url = `${baseUrl}/files/`
		return this.sendPostRequest(url, data)
	}

	getById (id) {
		const url = `${baseUrl}/files/${id}`
		return this.sendGetRequest(url)
	}

	update (data) {
		const url = `${baseUrl}/files/${data.id}/`
		return this.sendPutRequest(url, data)
	}

	delete (id) {
		const url = `${baseUrl}/files/${id}`
		return this.sendDeleteRequest(url)
	}
}

export const fileService = new FileService()