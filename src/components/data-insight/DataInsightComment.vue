<template>
	<div class="comment">
		<table>
			<thead>
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Date</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>LOREM</td>
					<td>Ultricies.</td>
					<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci auctor nam eu pharetra arcu ac in ut.</td>
				</tr>
				<tr>
					<td>2</td>
					<td>LOREM</td>
					<td>Ultricies.</td>
					<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci auctor nam eu pharetra arcu ac in ut.</td>
				</tr>
				<tr>
					<td
						colspan="4"
						class="center add-comment"
					>
						<button>ADD ANOTHER COMMENT</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: 'DataInsightComment'
}
</script>

<style lang="scss" scoped>
	.comment {
		margin-top: 50px;
		table {
			width: 100%;
			border: 1px solid #33393F;
			border-collapse: collapse;
			border-radius: 4px;
			text-align: left;

			tr {
				height: 50px;
			}

			tbody {
				tr {
					&:hover:not(:last-child) {
						background: rgba(#2EA2F8, 0.2);
					}
				}
			}

			th {
				border-bottom: 1px solid #33393F;
				font-size: 14px;
				line-height: 19px;
				color: #2EA2F8;
				font-weight: 400;
				&:first-child {
					padding-left: 24px;
				}
			}

			td {
				color: #FFFFFF;
				font-size: 14px;
				line-height: 19px;
				padding-right: 15px;

				&:first-child {
					padding-left: 24px;
				}

				&:last-child {
					font-weight: 300;
				}

				&.add-comment {
					button {
						font-size: 14px;
						line-height: 19px;
						text-decoration-line: underline;
						text-transform: uppercase;
						color: #2EA2F8;
						background: inherit;
						outline: none;
						border: none;
					}
				}
			}
		}
	}
</style>