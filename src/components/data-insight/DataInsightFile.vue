<template>
	<div>
		<fmd-table>
			<template slot="head">
				<tr>
					<th>File Name</th>
					<th>Upload Date</th>
					<th>File Size (MB)</th>
					<th>Data Quality (%)</th>
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
					<td />
				</tr>
				<tr
					v-for="(item, i) in files"
					:key="i"
				>
					<td>
						{{ item.file_name.join(', ') }}
					</td>
					<td>{{ item.created_at }}</td>
					<td>{{ item.file_size }}</td>
					<td class="center">
						98
					</td>
					<td>{{ item.comment }}</td>
					<td>
						<button class="detail">
							Details
						</button>
					</td>
				</tr>
			</template>
		</fmd-table>
		<data-insight-file-detail />
	</div>
</template>

<script>
import FmdTable from '../FdmTable'
import { fileService } from '../../_services/file.service'
import { mapActions } from 'vuex'
import DataInsightFileDetail from './DataInsightFileDetail'
export default {
	name: 'DataInsightFile',
	components: { DataInsightFileDetail, FmdTable },
	data () {
		return {
			files: []
		}
	},
	mounted () {
		this.fetchData()
	},
	methods: {
		...mapActions('loader', [ 'setLoading' ]),
		fetchData () {
			this.setLoading(true)
			fileService.getAll().then(res => {
				this.files = res
				this.setLoading(false)
			}).catch(err => {
				this.setLoading(false)
				console.log(err)
			})
		}
	}
}
</script>

<style scoped>

</style>