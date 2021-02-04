<template>
	<div class="country home__body">
		<div class="home__body__head">
			<span>Aircraft</span>
			<button @click="onCreate" class="flex-align-center">
				<img src="../../assets/icons/add.svg" alt="" /> Add new aircraft
			</button>
		</div>
		<div class="home__body__main">
			<fdm-table>
				<template slot="head">
					<tr>
						<th class="id">ID</th>
						<th>Title</th>
						<th>Vin</th>
						<th></th>
						<th></th>
					</tr>
				</template>
				<template slot="body">
					<tr v-for="(item, index) in aircrafts" :key="item.id">
						<td class="id">{{ index + 1 }}</td>
						<td>{{ item.title }}</td>
						<td>{{ item.vin }}</td>
						<td>
							<img
								@click="onEdit(item)"
								class="pointer"
								src="../../assets/icons/edit.svg"
								alt=""
							/>
						</td>
						<td>
							<img
								@click="onDelete(item.id)"
								class="pointer"
								src="../../assets/icons/delete.svg"
								alt=""
							/>
						</td>
					</tr>
				</template>
			</fdm-table>
		</div>
		<aircraft-create
			v-if="isCreate"
			:isEdit="isEdit"
			:edit-aircraft="aircraft"
			@close="isCreate = false"
			@fetch="fetchAircraft"
		></aircraft-create>

		<modal-delete v-if="isDelete" @close="isDelete = false" @delete="deleteAircraft">
		</modal-delete>
	</div>
</template>

<script>
	import FdmTable from '../../components/FdmTable.vue';
	import { aircraftService } from "../../_services/aircraft.service";
	import ModalDelete from '../../components/ModalDelete.vue';
	import {mapActions} from "vuex";
	import AircraftCreate from "../../components/super-admin/AircraftCreate";

	export default {
		components: {AircraftCreate, FdmTable, ModalDelete },
		name: 'Country',
		data() {
			return {
				isCreate: false,
				aircrafts: [],
				aircraft: {},
				isEdit: false,
				isDelete: false,
				deleteId: 0,
			};
		},
		mounted() {
			this.fetchAircraft();
		},
		methods: {
			...mapActions('loader', ['setLoading']),
			fetchAircraft() {
				this.setLoading(true)
				aircraftService
					.getAll()
					.then((res) => {
						this.setLoading(false)
						this.aircrafts = res;
					})
					.catch((err) => {
						this.setLoading(false)
						console.log(err);
					});
			},
			onCreate() {
				this.isEdit = false;
				this.isCreate = true;
			},
			onEdit(item) {
				this.isCreate = true;
				this.isEdit = true;
				this.aircraft = item;
			},
			onDelete(id) {
				this.isDelete = true;
				this.deleteId = id;
			},
			deleteAircraft() {
				this.setLoading(true)
				aircraftService
					.delete(this.deleteId)
					.then(() => {
						this.setLoading(false)
						this.fetchAircraft();
						this.isDelete = false;
						this.$toastr.s(this.$t('successMessageDelete'))
					})
					.catch((err) => {
						this.setLoading(false)
						this.$toastr.e(err)
						console.log(err);
					});
			},
		},
	};
</script>

<style></style>
