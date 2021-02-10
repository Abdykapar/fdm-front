<template>
	<div class="upload fdm-page">
		<div class="upload__head fdm-page__head">
			Uploaded Files
		</div>
		<div class="upload__body fdm-page__body">
			<fmd-table>
				<template slot="head">
					<tr>
						<th>File Name</th>
						<th>Upload Date</th>
						<th>File Size (MB)</th>
						<th>Data Quality (%)</th>
						<th>Comments</th>
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
						<td />
					</tr>
					<tr
						v-for="item in 4"
						:key="item"
					>
						<td>Anna Karimova</td>
						<td>Graphic Design</td>
						<td>0777114676</td>
						<td>tr56177ytu</td>
						<td>comments</td>
						<td>
							<button class="detail">
								Details
							</button>
						</td>
					</tr>
				</template>
			</fmd-table>

			<div class="upload__btn">
				<button class="flex-center">
					<img
						src="../../assets/icons/upload.svg"
						alt=""
					>
					Upload New File
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import FmdTable from '../../components/FdmTable'
export default {
	name: 'Upload',
	components: { FmdTable }
}
</script>

<style lang="scss" scoped>
	.upload {
		&__btn {
			display: flex;
			justify-content: center;
			margin-top: 58px;
			margin-bottom: 58px;
			button {
				border: 1px solid #FFFFFF;
				min-width: 190px;
				height: 36px;
				font-size: 14px;
				line-height: 19px;
				background: inherit;
				color: #FFFFFF;

				img {
					margin-right: 10px;
				}
			}
		}
	}
</style>