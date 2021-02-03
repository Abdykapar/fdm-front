<template>
	<div class="country home__body">
		<div class="home__body__head">
			<span>Role</span>
			<button @click="onCreate" class="flex-align-center">
				<img src="../../assets/icons/add.svg" alt="" /> Add new role
			</button>
		</div>
		<div class="home__body__main">
			<fdm-table>
				<template slot="head">
					<tr>
						<th class="id">ID</th>
						<th>Title</th>
						<th></th>
						<th></th>
					</tr>
				</template>
				<template slot="body">
					<tr v-for="(item, index) in roles" :key="item.id">
						<td class="id">{{ index + 1 }}</td>
						<td>{{ item.title }}</td>
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
		<role-create
			v-if="isCreate"
			:isEdit="isEdit"
			:edit-role="role"
			@close="isCreate = false"
			@fetch="fetchRoles"
		></role-create>

		<modal-delete v-if="isDelete" @close="isDelete = false" @delete="deleteRole">
		</modal-delete>
	</div>
</template>

<script>
	import FdmTable from '../../components/FdmTable.vue';
	import { roleService } from '@/_services/role.service';
	import ModalDelete from '../../components/ModalDelete.vue';
	import {mapActions} from "vuex";
	import RoleCreate from "../../components/super-admin/RoleCreate";

	export default {
		components: {RoleCreate, FdmTable, ModalDelete },
		name: 'Country',
		data() {
			return {
				isCreate: false,
				roles: [],
				role: {},
				isEdit: false,
				isDelete: false,
				deleteId: 0,
			};
		},
		mounted() {
			this.fetchRoles();
		},
		methods: {
			...mapActions('loader', ['setLoading']),
			fetchRoles() {
				this.setLoading(true)
				roleService
					.getAll()
					.then((res) => {
						this.setLoading(false)
						this.roles = res;
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
				this.role = item;
			},
			onDelete(id) {
				this.isDelete = true;
				this.deleteId = id;
			},
			deleteRole() {
				this.setLoading(true)
				roleService
					.delete(this.deleteId)
					.then(() => {
						this.setLoading(false)
						this.fetchRoles();
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
