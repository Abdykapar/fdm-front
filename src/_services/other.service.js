import { BaseApiService } from '@/_services/baseApi.service'

const baseUrl = process.env.VUE_APP_BASE_URL

class OtherService extends BaseApiService {
	constructor () {
		super()
	}

	topEvents () {
		const url = `${baseUrl}/topevents`
		return this.sendGetRequest(url)
	}
}

export const otherService = new OtherService()