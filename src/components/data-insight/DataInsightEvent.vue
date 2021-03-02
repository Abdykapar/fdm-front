<template>
	<div>
		<fmd-table>
			<template slot="head">
				<tr>
					<th>Registration</th>
					<th>Event Date</th>
					<th>Event Name</th>
					<th>Duration</th>
					<th>Flight Number</th>
					<th>Departure Airport</th>
					<th>Arrival Airport</th>
					<th>Event Severity</th>
					<th>Event Status</th>
					<th>Reviewed</th>
					<th>Comments</th>
					<th />
				</tr>
			</template>
			<template slot="body">
				<tr class="filter">
					<td>
						<input type="text">
						<img
							src="../../assets/icons/search-mini.svg"
							alt=""
						>
					</td>
					<td>
						<input type="text">
						<img
							src="../../assets/icons/calendar.svg"
							alt=""
						>
					</td>
					<td>
						<input type="text"><img
							src="../../assets/icons/search-mini.svg"
							alt=""
						>
					</td>
					<td>
						<input type="text"><img
							src="../../assets/icons/search-mini.svg"
							alt=""
						>
					</td>
					<td>
						<input type="text"><img
							src="../../assets/icons/search-mini.svg"
							alt=""
						>
					</td>
					<td>
						<input type="text"><img
							src="../../assets/icons/search-mini.svg"
							alt=""
						>
					</td>
					<td>
						<input type="text"><img
							src="../../assets/icons/search-mini.svg"
							alt=""
						>
					</td>
					<td>
						<input type="text"><img
							src="../../assets/icons/search-mini.svg"
							alt=""
						>
					</td>
					<td>
						<input type="text"><img
							src="../../assets/icons/search-mini.svg"
							alt=""
						>
					</td>
					<td>
						<input type="text"><img
							src="../../assets/icons/search-mini.svg"
							alt=""
						>
					</td>
					<td />
				</tr>
				<tr
					v-for="item in eventPerPage"
					:key="item.id"
				>
					<td>{{ item.registration }}</td>
					<td>{{ item.event_date }}</td>
					<td>{{ item.event_name }}</td>
					<td>{{ item.duration }}</td>
					<td />
					<td>{{ item.arr_airport }}</td>
					<td>{{ item.dep_airport }}</td>
					<td>{{ item.event_severity }}</td>
					<td>{{ item.event_status }}</td>
					<td>{{ item.is_reviewed }}</td>
					<td>comments</td>
					<td>
						<button
							class="detail"
							@click="onDetail(item)"
						>
							Details
						</button>
					</td>
				</tr>
			</template>
		</fmd-table>
		<pagination
			:total-elements="totalElements"
			@change="onPageChange"
		/>
		<data-insight-detail
			v-if="isShowDetail"
			:event-id="event.id"
			:flight-id="event.flight"
			:aircraft-id="event.aircraft_id"
			:file-id="Math.round(event.file_id)"
			@close="isShowDetail = false"
		/>
	</div>
</template>

<script>
import FmdTable from '../FdmTable'
import { eventService } from '../../_services/event.service'
import DataInsightDetail from './DataInsightDetail'
import { mapActions } from 'vuex'
import Pagination from '../elements/Pagination'
export default {
	name: 'DataInsightEvent',
	components: { Pagination, DataInsightDetail, FmdTable },
	data () {
		return {
			events: [],
			event: {},
			isShowDetail: false,
			currentPage: 1,
			totalElements: 0
		}
	},
	computed: {
		eventPerPage () {
			return this.events.slice((this.currentPage - 1) * 10, this.currentPage * 10)
		}
	},
	mounted () {
		this.fetchEvents()
	},
	methods: {
		...mapActions('loader', [ 'setLoading' ]),
		fetchEvents () {
			this.setLoading(true)
			eventService.getAll().then(res => {
				this.setLoading(false)
				this.events = res
				this.totalElements = this.events.length
			}).catch(err => {
				this.setLoading(false)
				console.log(err)
			})
		},
		onDetail (item) {
			this.event = item
			this.isShowDetail = true
		},
		onPageChange (num) {
			this.currentPage = num
		}
	}
}
</script>

<style scoped>

</style>