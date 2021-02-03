<template>
	<fdm-modal @close="$emit('close')">
		<div slot="content" class="create">
			<div class="create__head">Add new city</div>
			<div class="create__body">
				<form class="form" @submit.prevent="onSubmit">
					<div class="form__row" :class="{ error: errors.has('title') }">
						<label for="title">Title</label>
						<input
							type="text"
							name="title"
							v-validate="'required'"
							id="title"
							v-model="city.title"
						/>
						<template v-if="errors.length">
							<img src="../../assets/icons/error.svg" alt="" />
							<span>Required field</span>
						</template>
					</div>
					<div class="form__row" :class="{ error: errors.has('short') }">
						<label for="shortTitle">Short title</label>
						<input
							name="short"
							v-validate="'required'"
							type="text"
							id="shortTitle"
							v-model="city.short_title"
						/>
						<template v-if="errors.length">
							<img src="../../assets/icons/error.svg" alt="" />
							<span>Required field</span>
						</template>
					</div>
					<div class="form__row" :class="{ error: errors.has('country') }">
						<label for="country">Country</label>
						<select name="country" v-validate="'required'" id="country" v-model="city.country_id">
							<option v-for="country in countries" :key="country.id" :value="country.id">
								{{ country.title }}
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
import { cityService } from '@/_services/city.service';
import { countriesService } from "../../_services/countries.service";
import {mapActions} from "vuex";

export default {
	name: 'CityCreate',
	components: {FdmModal },
	props: {
		isEdit: { type: Boolean, default: false },
		editCity: { type: Object, default: () => ({}) },
	},
	data() {
		return {
			city: {},
			countries: []
		};
	},
	mounted() {
		if (this.isEdit) this.city = this.editCity;
		this.fetchCountries()
	},
	methods: {
		...mapActions('loader', ['setLoading']),
		fetchCountries() {
			this.setLoading(true)
			countriesService.getAll().then(res => {
				this.countries = res
				this.setLoading(false)
			}).catch(err => {
				this.setLoading(false)
				console.log(err)
			})
		},
		onSubmit() {
			this.$validator.validate().then((valid) => {
				if (valid) {
					if (this.isEdit) {
						cityService
							.update(this.city)
							.then(() => {
								this.$toastr.s(this.$t('successMessageEdit'))
								this.$emit('fetch');
								this.$emit('close');
							})
							.catch((err) => {
								this.$toastr.s(err)
								console.log(err);
							});
					} else {
						cityService
							.create(this.city)
							.then(() => {
								this.$emit('fetch');
								this.$emit('close');
								this.$toastr.s(this.$t('successMessageCreate'))
							})
							.catch((err) => {
								console.log(err);
								this.$toastr.s(err)
							});
					}
				}
			});
		},
	},
};
</script>

<style></style>
