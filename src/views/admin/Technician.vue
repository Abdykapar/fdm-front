<template>
	<div class="home__body">
		<div class="home__body__head">
			<span>Technician Users</span>
			<button class="flex-align-center">
				<img src="../../assets/icons/add.svg" alt="" /> Add new user
			</button>
		</div>
		<div class="home__body__users">
			<fdm-table>
				<template slot="head">
					<tr>
						<th class="id">ID</th>
						<th>Name Surname</th>
						<th>Role</th>
						<th>Telephone</th>
						<th>Login</th>
						<th>Password</th>
						<th></th>
						<th></th>
					</tr>
				</template>
				<template slot="body">
					<tr v-for="item in 10" :key="item">
						<td class="id">{{ item }}</td>
						<td>Anna Karimova</td>
						<td>Graphic Design</td>
						<td>0777114676</td>
						<td>tr56177ytu</td>
						<td>tr56177ytu</td>
						<td>
							<img src="../../assets/icons/edit.svg" alt="" />
						</td>
						<td>
							<img src="../../assets/icons/delete.svg" alt="" />
						</td>
					</tr>
				</template>
			</fdm-table>
		</div>
	</div>
</template>

<script>
	import FdmTable from '@/components/FdmTable';
	export default {
		name: 'Home',
		components: {
			FdmTable,
		},
		data() {
			return {};
		},
		mounted() {},
		methods: {},
	};
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
