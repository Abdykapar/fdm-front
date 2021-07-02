import { BaseApiService } from '@/_services/baseApi.service'

const baseUrl = process.env.VUE_APP_BASE_URL

class FlightService extends BaseApiService {
	constructor () {
		super()
	}

	getAll (file_id='', startDate='', endDate='') {
		const query = this.queryFilter(
			{ title: 'file_id', value: file_id },
			{ title: 'start_date', value: startDate },
			{ title: 'end_date', value: endDate },
		)
		const url = `${baseUrl}/flights/${query}`
		return this.sendGetRequest(url)
	}

	create (data) {
		const url = `${baseUrl}/flights/`
		return this.sendPostRequest(url, data)
	}

	getById (id) {
		const url = `${baseUrl}/flights/${id}`
		return this.sendGetRequest(url)
	}

	update (data) {
		const url = `${baseUrl}/flights/${data.id}/`
		return this.sendPutRequest(url, data)
	}

	delete (id) {
		const url = `${baseUrl}/flights/${id}`
		return this.sendDeleteRequest(url)
	}
}

export const flightService = new FlightService()