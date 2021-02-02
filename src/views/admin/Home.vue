<template>
	<div class="home">
		<div class="home__left">
			<div class="home__left__first">
				<div>
					<img src="../../assets/img/temporary/chart-1.svg" alt="" />
				</div>
				<div>
					<div>
						<img src="../../assets/img/temporary/circle-1.svg" alt="" />
						<img src="../../assets/img/temporary/circle-2.svg" alt="" />
					</div>
					<div>
						<img src="../../assets/img/temporary/circle-3.svg" alt="" />
						<img src="../../assets/img/temporary/circle-4.svg" alt="" />
					</div>
				</div>
				<div>
					<img src="../../assets/img/airliner.png" alt="" />
				</div>
			</div>
			<div class="home__left__second">
				<div>
					<img src="../../assets/img/temporary/chart-2.svg" alt="" />
				</div>
				<div>
					<img src="../../assets/img/temporary/chart-3.svg" alt="" />
				</div>
			</div>
		</div>
		<!-- <div class="home__right">
			<div>
				<p>All Aircrafts</p>
				<img src="../../assets/img/temporary/aircraft-1.svg" alt="" />
			</div>
			<div>
				<p>Boeing 230</p>
				<img src="../../assets/img/temporary/aircraft-2.svg" alt="" />
			</div>
			<div>
				<p>Boeing 230</p>
				<img src="../../assets/img/temporary/aircraft-3.svg" alt="" />
			</div>
			<div>
				<p>Boeing 230</p>
				<img src="../../assets/img/temporary/aircraft-4.svg" alt="" />
			</div>
		</div> -->
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss">
	.home {
		display: flex;
		margin-left: 36px;

		&__left {
			&__first {
				display: flex;

				> div {
					&:first-child {
						flex: 1;
					}
					&:nth-child(2) {
						flex: 1;
						width: 372px;

						img {
							height: 30%;
							margin: 10px;
						}
					}
					&:last-child {
						height: 450px;
						img {
							height: 90%;
						}
					}
				}
			}
			&__second {
				display: flex;

				div {
					&:first-child {
						margin-right: 10px;
					}
				}
			}
		}
	}
</style>
