<template>
	<div class="select">
		<div class="select__head">
			Turkey
			<img src="../assets/icons/chevron-down-sm.svg" alt="">
		</div>
		<div class="select__body">
			<div class="select__option">Russian</div>
			<div class="select__option">Russian</div>
			<div class="select__option">Russian</div>
			<div class="select__option">Russian</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "FdmSelect"
}
</script>

<style lang="scss" scoped>
	.select {
		&__head {
			position: relative;
			width: 286px;
			height: 48px;
			border: 1px solid #33393F;
			border-radius: 4px;
			background: #1F2327;
			font-size: 14px;
			line-height: 19px;
			color: rgba(#FFFFFF, 0.5);
			mix-blend-mode: normal;
			display: flex;
			align-items: center;
			padding-left: 15px;
			cursor: pointer;

			img {
				position: absolute;
				right: 18px;
				top: 50%;
				transform: translateY(-50%);
			}
		 }

		&__body {
			border: 1px solid #33393F;
			border-radius: 4px;
		}
	}
</style>