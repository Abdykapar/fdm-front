<template>
	<fmd-table>
		<template slot="head">
			<tr>
				<th>Flight Number</th>
				<th>Liftoff</th>
				<th>Touchdown</th>
				<th>Departure Airport</th>
				<th>Departure Run</th>
				<th>Departure Arrival</th>
				<th>Comment</th>
				<th />
			</tr>
		</template>
		<template slot="body">
			<tr class="filter">
				<td>
					<input type="text">
					<img
						src="../../assets/icons/search-mini.svg"
						alt=""
					>
				</td>
				<td>
					<input type="text">
					<img
						src="../../assets/icons/calendar.svg"
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
					<input type="text"><img
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
					<input type="text"><img
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
				<td />
			</tr>
			<tr
				v-for="item in files"
				:key="item.file_name"
			>
				<td>{{ item.file_name.join(', ') }}</td>
				<td>Graphic Design</td>
				<td>0777114676</td>
				<td>tr56177ytu</td>
				<td>comments</td>
				<td>comments</td>
				<td>comments</td>
				<td>
					<button class="detail">
						Details
					</button>
				</td>
			</tr>
		</template>
	</fmd-table>
</template>

<script>
import FmdTable from '../FdmTable'
export default {
	name: 'DataInsightFlight',
	components: { FmdTable }
}
</script>

<style scoped>

</style>