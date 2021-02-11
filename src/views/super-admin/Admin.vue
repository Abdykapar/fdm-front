<template>
	<div class="country home__body">
		<div class="home__body__head">
			<span>Admin</span>
			<button
				class="flex-align-center"
				@click="onCreate"
			>
				<img
					src="../../assets/icons/add.svg"
					alt=""
				> Add new admin
			</button>
		</div>
		<div class="home__body__main">
			<fdm-table>
				<template slot="head">
					<tr>
						<th class="id">
							ID
						</th>
						<th>Username</th>
						<th>Email</th>
						<th>Password</th>
						<th />
						<th />
					</tr>
				</template>
				<template slot="body">
					<tr
						v-for="(item, index) in users"
						:key="item.id"
					>
						<td class="id">
							{{ index + 1 }}
						</td>
						<td>{{ item.username }}</td>
						<td>{{ item.email }}</td>
						<td>{{ item.password }}</td>
						<td>
							<img
								class="pointer"
								src="../../assets/icons/edit.svg"
								alt=""
								@click="onEdit(item)"
							>
						</td>
						<td>
							<img
								class="pointer"
								src="../../assets/icons/delete.svg"
								alt=""
								@click="onDelete(item.id)"
							>
						</td>
					</tr>
				</template>
			</fdm-table>
		</div>
		<admin-create
			v-if="isCreate"
			:is-edit="isEdit"
			:edit-user="user"
			@close="isCreate = false"
			@fetch="fetchUsers"
		/>

		<modal-delete
			v-if="isDelete"
			@close="isDelete = false"
			@delete="deleteUser"
		/>
	</div>
</template>

<script>
import FdmTable from '../../components/FdmTable.vue'
import ModalDelete from '../../components/ModalDelete.vue'
import { mapActions } from 'vuex'
import AdminCreate from '../../components/super-admin/AdminCreate'
import { userService } from '../../_services/user.service'

export default {
	name: 'Admin',
	components: { AdminCreate, FdmTable, ModalDelete },
	data () {
		return {
			isCreate: false,
			users: [],
			user: {},
			isEdit: false,
			isDelete: false,
			deleteId: 0,
		}
	},
	mounted () {
		this.fetchUsers()
	},
	methods: {
		...mapActions('loader', [ 'setLoading' ]),
		fetchUsers () {
			// this.setLoading(true)
			// userService
			// 	.getAll()
			// 	.then(res => {
			// 		this.setLoading(false)
			// 		this.airports = res
			// 	})
			// 	.catch(err => {
			// 		this.setLoading(false)
			// 		console.log(err)
			// 	})
		},
		onCreate () {
			this.isEdit = false
			this.isCreate = true
		},
		onEdit (item) {
			this.isCreate = true
			this.isEdit = true
			this.user = item
		},
		onDelete (id) {
			this.isDelete = true
			this.deleteId = id
		},
		deleteUser () {
			this.setLoading(true)
			userService
				.delete(this.deleteId)
				.then(() => {
					this.setLoading(false)
					this.fetchUsers()
					this.isDelete = false
					this.$toastr.s(this.$t('successMessageDelete'))
				})
				.catch(err => {
					this.setLoading(false)
					this.$toastr.e(err)
					console.log(err)
				})
		},
	},
}
</script>

<style></style>
