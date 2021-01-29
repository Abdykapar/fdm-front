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
						<th>ID</th>
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
						<td>{{ item }}</td>
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
			margin: 0 40px;

			&__head {
				font-size: 20px;
				line-height: 27px;
				letter-spacing: 0.2px;
				color: #ffffff;
				display: flex;
				justify-content: space-between;
				align-items: center;

				button {
					border: 1px solid #ffffff;
					width: 190px;
					height: 36px;
					background: $black-back;
					font-size: 14px;
					line-height: 19px;
					cursor: pointer;
					color: #ffffff;

					img {
						margin-right: 24px;
						margin-left: 12px;
					}
				}
			}

			&__users {
				margin-top: 16px;
				margin-bottom: 40px;
			}
		}
	}
</style>
