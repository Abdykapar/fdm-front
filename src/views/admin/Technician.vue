<template>
	<div class="home__body">
		<div class="home__body__head">
			<span>Technician Users</span>
			<button
				class="flex-align-center"
				@click="onCreate"
			>
				<img
					src="../../assets/icons/add.svg"
					alt=""
				> Add new user
			</button>
		</div>
		<div class="home__body__users">
			<fdm-table>
				<template slot="head">
					<tr>
						<th class="id">
							ID
						</th>
						<th>Name Surname</th>
						<th>Role</th>
						<th>Telephone</th>
						<th>Login</th>
						<th>Password</th>
						<th />
						<th />
					</tr>
				</template>
				<template slot="body">
					<tr
						v-for="item in 10"
						:key="item"
					>
						<td class="id">
							{{ item }}
						</td>
						<td>Anna Karimova</td>
						<td>Graphic Design</td>
						<td>0777114676</td>
						<td>tr56177ytu</td>
						<td>tr56177ytu</td>
						<td>
							<img
								src="../../assets/icons/edit.svg"
								alt=""
							>
						</td>
						<td>
							<img
								src="../../assets/icons/delete.svg"
								alt=""
							>
						</td>
					</tr>
				</template>
			</fdm-table>
		</div>
		<technician-create
			v-if="isCreate"
			:edit-user="user"
			:is-edit="isEdit"
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
import FdmTable from '@/components/FdmTable'
import TechnicianCreate from '../../components/admin/TechnicianCreate'
import ModalDelete from '../../components/ModalDelete'
export default {
	name: 'Home',
	components: {
		ModalDelete,
		TechnicianCreate,
		FdmTable,
	},
	data () {
		return {
			user: {},
			users: [],
			isCreate: false,
			isEdit: false,
			deleteId: 0,
			isDelete: false
		}
	},
	mounted () {},
	methods: {
		fetchUsers () {

		},
		onCreate () {
			this.isCreate = true
			this.isEdit = false
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
			
		}
	},
}
</script>
<style lang="scss">
	.home {
		&__body {
			&__users {
				margin-top: 16px;
				margin-bottom: 40px;
			}
		}
	}
</style>
