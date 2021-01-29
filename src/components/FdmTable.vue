<template>
	<table class="fdm-table">
		<thead>
			<slot name="head"></slot>
		</thead>
		<tbody>
			<slot name="body"></slot>
		</tbody>
	</table>
</template>

<script>
	export default {
		name: 'FmdTable',
	};
</script>

<style lang="scss">
	.fdm-table {
		background: rgba(255, 255, 255, 0.02);
		// opacity: 0.7;
		width: 100%;
		border-collapse: collapse;
		border-spacing: 0;

		tr {
			height: 48px;

			&:first-child {
				height: 50px;
				border-top: none;
			}

			th {
				font-size: 14px;
				line-height: 19px;
				color: #ffffff;
				font-weight: 400;
				text-align: left;

				&:first-child {
					text-align: center;
					width: 50px;
				}
			}

			td {
				border-top: 1px solid #323744;
				font-weight: normal;
				font-size: 14px;
				line-height: 19px;
				color: #7882a2;

				&:first-child {
					text-align: center;
				}
			}
		}
	}
</style>
