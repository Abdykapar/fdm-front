<template>
	<div>
		<!--		<div class="title">-->
		<!--			{{ event.event_name }}-->
		<!--		</div>-->
		<div class="detail__body">
			<div class="form__row no-margin">
				<label for="model">DEPARTURE</label>
				<select
					id="model"
					name="model"
				>
					<option
						v-for="item in status"
						:key="item"
						:value="item"
					>
						{{ item }}
					</option>
				</select>
			</div>
			<div class="form__row no-margin">
				<label for="severity">ARRIVAL</label>
				<select
					id="severity"
					name="severity"
				>
					<option
						v-for="item in severities"
						:key="item"
						:value="item"
					>
						{{ item }}
					</option>
				</select>
			</div>
			<div class="detail__item">
				<div class="detail__item__title">
					FLIGHT NO.
				</div>
				<div class="detail__item__content">
					12
				</div>
			</div>
			<div class="detail__item">
				<div class="detail__item__title">
					LIFTOFF
				</div>
				<div class="detail__item__content">
					12.01.2021 12:20
				</div>
			</div>
			<div class="detail__item">
				<div class="detail__item__title">
					TOUCHDOWN
				</div>
				<div class="detail__item__content">
					{{ event.duration }}
				</div>
			</div>
			<div class="detail__item">
				<div class="detail__item__title">
					DURATION
				</div>
				<div class="detail__item__content" />
			</div>
			<div class="detail__item">
				<div class="detail__item__title">
					START
				</div>
				<div class="detail__item__content">
					{{ event.value }}
				</div>
			</div>
			<div class="detail__item">
				<div class="detail__item__title">
					END
				</div>
				<div class="detail__item__content">
					LIFTOFF
				</div>
			</div>
			<div class="detail__item">
				<div class="detail__item__title">
					TOUCHDOWN DISTANCE
				</div>
				<div class="detail__item__content">
					LIFTOFF
				</div>
			</div>
			<div class="detail__item">
				<div class="detail__item__title">
					TYPE
				</div>
				<div class="detail__item__content">
					LIFTOFF
				</div>
			</div>
		</div>
		<data-insight-comment />
	</div>
</template>

<script>
import DataInsightComment from './DataInsightComment'
export default {
	name: 'DataInsightFlightDetail',
	components: { DataInsightComment },
	props: {
		flight: { type: Object, default: () => ({}) }
	},
	data () {
		return {
			status: [ 'Under Review', 'Valid', 'False', 'Nuisance', 'Auto Valid' ],
			severities: [ 'None', 'Low', 'Medium', 'High' ]
		}
	}
}
</script>

<style lang="scss" scoped>
	.title {
		font-size: 18px;
		line-height: 21px;
		color: #b4b4b4;
		margin-top: 30px;
	}
	.detail {
		&-content {
			padding: 30px 20px 20px;
			position: relative;
		}
		&__close {
			position: absolute;
			top: -22px;
			right: 0px;
			cursor: pointer;
		}
		&__head {
			&__buttons {
				button {
					min-width: 116px;
					height: 36px;
					background: rgba(#2A3546, 0.4);
					border-radius: 4px;
					font-size: 14px;
					line-height: 19px;
					color: #FFFFFF;
					margin-right: 49px;

					&.active {
						background: rgba(#298BFE, 0.4);
					}
				}
			}
		}
		&__body {
			display: flex;
			flex-wrap: wrap;
			row-gap: 50px;
			column-gap: 25px;
			margin-top: 30px;
		}
		&__item {
			flex: 0 30%;
			&__title {
				font-size: 13px;
				line-height: 19px;
				color: #2EA2F8;
				mix-blend-mode: normal;
				margin-bottom: 10px;
			}
			&__content {
				display: flex;
				padding-left: 15px;
				align-items: center;
				height: 48px;
				border: 1px solid #33393F;
				border-radius: 4px;
				font-size: 14px;
				line-height: 19px;
				color: #FFFFFF;
			}
		}
	}
</style>