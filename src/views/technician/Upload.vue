<template>
	<div class="upload fdm-page">
		<div class="upload__head fdm-page__head">
			Uploaded Files
		</div>
		<div class="upload__body fdm-page__body">
			<fmd-table>
				<template slot="head">
					<tr>
						<th>File Name</th>
						<th class="pl20">
							Upload Date
						</th>
						<th class="pl20">
							File Size (MB)
						</th>
						<th class="pl20">
							Data Quality (%)
						</th>
						<th>Comments</th>
						<th />
					</tr>
				</template>
				<template slot="body">
					<tr class="filter">
						<td>
							<input
								v-model="name"
								type="text"
							>
							<img
								src="../../assets/icons/search-mini.svg"
								alt=""
							>
						</td>
						<td>
							<input
								v-model="date"
								type="date"
							>
							<!-- <img
								src="../../assets/icons/calendar.svg"
								alt=""
							> -->
						</td>
						<td>
							<input
								v-model="size"
								type="text"
							>
							<img
								src="../../assets/icons/search-mini.svg"
								alt=""
							>
						</td>
						<td>
							<input
								v-model="quality"
								type="text"
							><img
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
							<button
								class="detail red"
								@click="onClear"
							>
								Clear
							</button>
						</td>
					</tr>
					<tr
						v-for="(item,k) in filteredFiles"
						:key="k"
					>
						<td>{{ item.file_name }}</td>
						<td class="pl20">
							{{ item.date }}
						</td>
						<td class="pl20">
							{{ item.file_size.toFixed(2) }}
						</td>
						<td class="pl20">
							80
						</td>
						<td>{{ item.comment }}</td>
						<td>
							<button class="mb-2 detail">
								Details
							</button>
							
							<button
								v-if="item.isDelete"
								class="detail red"
							>
								Delete
							</button>
						</td>
					</tr>
				</template>
			</fmd-table>

			<div class="upload__btn">
				<button
					class="flex-center"
					@click="onUpload"
				>
					<img
						src="../../assets/icons/upload.svg"
						alt=""
					>
					Upload New File
				</button>
			</div>
		</div>
		<technician-upload
			v-if="isUpload"
			@close="isUpload = false"
			@fetch="fetchFiles"
		/>
	</div>
</template>

<script>
import FmdTable from '../../components/FdmTable'
import TechnicianUpload from '../../components/technician/TechnicianUpload'
import { fileService } from '../../_services/file.service'
import { mapActions } from 'vuex'
import moment from 'moment'
export default {
	name: 'Upload',
	components: { TechnicianUpload, FmdTable },
	data () {
		return {
			isUpload: false,
			files: [],
			name: '',
			date: '',
			size: '',
			quality: '',
			comment: ''
		}
	},
	computed: {
		userProfile () {
			return this.$store.state.account.user
		},
		filteredFiles () {
			let data = this.files
			if (this.name) data = this.files.filter(i => i.file_name && i.file_name.toLowerCase().includes(this.name.toLowerCase()))
			if (this.date) data = this.files.filter(i => i.created_at && moment(i.created_at).format('YYYY-MM-DD') === this.date)
			if (this.size) data = this.files.filter(i => i.file_size && i.file_size.toString().toLowerCase().includes(this.size.toLowerCase()))
			// if (this.quality) data = this.files.filter(i => i.file_size && i.file_size.toLowerCase().includes(this.size.toLowerCase()))
			return data
		}
	},
	mounted () {
		this.fetchFiles()
	},
	methods: {
		...mapActions('loader', [ 'setLoading' ]),
		onUpload () {
			this.isUpload = true
		},
		fetchFiles () {
			this.setLoading(true)
			fileService.getAll(this.userProfile.user.id).then(res => {
				this.files = res.map(i => ({ ...i, date: moment(i.created_at).format('DD.MM.YYYY') }))
				this.setLoading(false)
			}).catch(err => {
				this.setLoading(false)
				this.$toastr.e(err)
				console.log(err)
			})
		},
		onClear () {
			this.name = ''
			this.date = ''
			this.size = ''
			this.quality = ''
		}
	}
}
</script>

<style lang="scss" scoped>
	.upload {
		&__btn {
			display: flex;
			justify-content: center;
			margin-top: 58px;
			margin-bottom: 58px;
			button {
				border: 1px solid #FFFFFF;
				min-width: 190px;
				height: 36px;
				font-size: 14px;
				line-height: 19px;
				background: inherit;
				color: #FFFFFF;

				img {
					margin-right: 10px;
				}
			}
		}
	}
</style>