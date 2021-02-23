<template>
	<fdm-modal @close="$emit('close')">
		<div
			slot="content"
			class="tech-upload create"
		>
			<div class="tech-upload__head create__head">
				New FDM Analysis
			</div>
			<div class="tech-upload__body">
				<form
					class="form"
					@submit.prevent="onSubmit"
				>
					<div
						class="form__row"
						:class="{ error: errors.has('aircraft') }"
					>
						<label for="aircraft">Registration No</label>
						<select
							id="aircraft"
							v-model="file.aircraft"
							v-validate="'required'"
							name="aircraft"
						>
							<option
								v-for="aircraft in aircrafts"
								:key="aircraft.id"
								:value="aircraft.id"
							>
								{{ aircraft.reg_number }}
							</option>
						</select>
					</div>
					<div
						class="form__row"
						:class="{ error: errors.has('file') }"
					>
						<label for="file">File</label>
						<input
							id="file"
							v-validate="'required'"
							type="file"
							name="file"
							class="form__file-input"
							@change="onFileChange"
						>
						<div
							class="form__row__file flex-center"
							:class="{ 'is-invalid' : errors.has('file') }"
						>
							{{ selectedFile ? selectedFile.name : 'Upload file' | crop }}
						</div>
						<template v-if="errors.length">
							<img
								src="../../assets/icons/error.svg"
								alt=""
							>
							<span>Required field</span>
						</template>
					</div>
					<div class="form__submit flex-justify-between">
						<button
							type="reset"
							class="black"
							@click="$emit('close')"
						>
							DECLINE
						</button>
						<button type="submit">
							UPLOAD
						</button>
					</div>
				</form>
			</div>
		</div>
	</fdm-modal>
</template>

<script>
import FdmModal from '../FdmModal'
import { fileService } from '../../_services/file.service'
import { mapActions } from 'vuex'
import { routeService } from '../../_services/route.service'
import { aircraftService } from '../../_services/aircraft.service'
export default {
	name: 'TechnicianUpload',
	components: { FdmModal },
	data () {
		return {
			file: {},
			selectedFile: '',
			aircrafts: [],
			routes: []
		}
	},
	computed: {
		userProfile () {
			return this.$store.state.account.user
		}
	},
	mounted () {
		this.fetchRouteCraft()
	},
	methods: {
		...mapActions('loader', [ 'setLoading' ]),

		fetchRouteCraft () {
			this.setLoading(true)
			routeService.getAll().then(res => {
				this.routes = res
				return aircraftService.getAll()
			}).then(res => {
				this.aircrafts = res
				this.setLoading(false)
			}).catch(err => {
				this.setLoading(false)
				this.$toastr.e(err)
				console.log(err)
			})
		},

		onSubmit (e) {
			this.$validator.validate().then(valid => {
				if (valid) {
					this.setLoading(true)
					this.file.uploaded_file = this.selectedFile
					this.file.technician = this.userProfile.user.id
					fileService.create(this.file).then(res => {
						this.$emit('close')
						this.$emit('fetch')
						this.setLoading(false)
					}).catch(err => {
						this.setLoading(false)
						console.log(err)
						this.$toastr.e(err)
					})
				}
			})
		},
		onFileChange (e) {
			this.selectedFile = e.target.files[0]
		},
	}
}
</script>

<style scoped>

</style>