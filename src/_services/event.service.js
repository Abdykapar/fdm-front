import { BaseApiService } from '@/_services/baseApi.service'

const baseUrl = process.env.VUE_APP_BASE_URL

class EventService extends BaseApiService {
	constructor () {
		super()
	}

	getAll (flight_id='', fileId='') {
		const query = this.queryFilter(
			{ title: 'flight_id', value: flight_id },
			{ title: 'file_id', value: fileId },
		)
		const url = `${baseUrl}/events/${query}`
		return this.sendGetRequest(url)
	}

	create (data) {
		const url = `${baseUrl}/events/`
		return this.sendPostRequest(url, data)
	}

	getById (id) {
		const url = `${baseUrl}/events/${id}`
		return this.sendGetRequest(url)
	}

	update (data) {
		const url = `${baseUrl}/events/${data.id}/`
		return this.sendPutRequest(url, data)
	}

	delete (id) {
		const url = `${baseUrl}/events/${id}`
		return this.sendDeleteRequest(url)
	}
}

export const eventService = new EventService()