<template>
	<fdm-modal @close="$emit('close')">
		<div slot="content" class="create">
			<div class="create__head">{{ isEdit ? 'Edit aircraft' : 'Add new aircraft' }}</div>
			<div class="create__body">
				<form class="form" @submit.prevent="onSubmit">
					<div class="form__row" :class="{ error: errors.has('title') }">
						<label for="title">Title</label>
						<input
							type="text"
							name="title"
							v-validate="'required'"
							id="title"
							v-model="aircraft.title"
						/>
						<template v-if="errors.length">
							<img src="../../assets/icons/error.svg" alt="" />
							<span>Required field</span>
						</template>
					</div>
					<div class="form__row" :class="{ error: errors.has('vin') }">
						<label for="vin">Vin</label>
						<input
							type="text"
							name="vin"
							v-validate="'required'"
							id="vin"
							v-model="aircraft.vin"
						/>
						<template v-if="errors.length">
							<img src="../../assets/icons/error.svg" alt="" />
							<span>Required field</span>
						</template>
					</div>
					<div class="form__row" :class="{ error: errors.has('model') }">
						<label for="model">Aircraft model</label>
						<select name="model" v-validate="'required'" id="model" v-model="aircraft.aircraft_model_id">
							<option v-for="model in models" :key="model.id" :value="model.id">
								{{ model.title }}
							</option>
						</select>
					</div>
					<div class="form__row" :class="{ error: errors.has('airline') }">
						<label for="airline">Airline model</label>
						<select name="airline" v-validate="'required'" id="airline" v-model="aircraft.airline_id">
							<option v-for="item in airlines" :key="item.id" :value="item.id">
								{{ item.title }}
							</option>
						</select>
					</div>
					<div class="form__submit flex-justify-between">
						<button type="submit">ADD</button>
						<button type="cancel" class="black" @click="$emit('close')">
							DECLINE
						</button>
					</div>
				</form>
			</div>
		</div>
	</fdm-modal>
</template>

<script>
	import FdmModal from '../FdmModal.vue';
	import { aircraftService } from "../../_services/aircraft.service";
	import { aircraftModelService } from "../../_services/aircraft-model.service";
	import { airlinesService } from "../../_services/airlines.service";
	import {mapActions} from "vuex";

	export default {
		name: 'AircraftCreate',
		components: { FdmModal },
		props: {
			isEdit: { type: Boolean, default: false },
			editAircraft: { type: Object, default: () => ({}) },
		},
		data() {
			return {
				aircraft: {},
				airlines: [],
				models: []
			};
		},
		mounted() {
			if (this.isEdit) this.aircraft = {...this.editAircraft};
			this.fetchModels()
			this.fetchAirlines()
		},
		methods: {
			...mapActions('loader', ['setLoading']),
			fetchModels () {
				this.setLoading(true)
				aircraftModelService.getAll().then(res => {
					this.models = res
					this.setLoading(false)
				}).catch(err => {
					this.setLoading(false)
					console.log(err)
					this.$toastr.e(err)
				})
			},
			fetchAirlines () {
				this.setLoading(true)
				airlinesService.getAll().then(res => {
					this.airlines = res
					this.setLoading(false)
				}).catch(err => {
					this.setLoading(false)
					console.log(err)
					this.$toastr.e(err)
				})
			},
			onSubmit() {
				this.$validator.validate().then((valid) => {
					if (valid) {
						if (this.isEdit) {
							aircraftService
								.update(this.aircraft)
								.then(() => {
									this.$toastr.s(this.$t('successMessageEdit'))
									this.$emit('fetch');
									this.$emit('close');
								})
								.catch((err) => {
									this.$toastr.e(err)
									console.log(err);
								});
						} else {
							aircraftService
								.create(this.aircraft)
								.then(() => {
									this.$emit('fetch');
									this.$emit('close');
									this.$toastr.s(this.$t('successMessageCreate'))
								})
								.catch((err) => {
									console.log(err);
									this.$toastr.e(err)
								});
						}
					}
				});
			},
		},
	};
</script>

<style></style>
