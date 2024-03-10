<template>
	<view>
		<uni-section>
			<view class="uni-padding-wrap">
				<uni-segmented-control :current="current" :values="items" :style-type="styleType"
					:active-color="activeColor" @clickItem="onClickItem" />
			</view>
			<view class="content">
				<view v-if="current === 0" class="content-mt">
					<uni-group :title="item.title" margin-top="20" v-for="(item, index) in wannian" :key="index">
						<view class="group-list">
							<view v-for="infoItem in item.list" :key="item.label" class="group-item">
								<text class="item-label">{{infoItem.label}}:</text>
								<text class="item-value" style="padding-left:10px">{{infoItem.value}}</text>
							</view>
						</view>
						<view class="flex-box">
							<text style="padding-right: 10px;">猎杀指数</text>
							<uni-rate readonly="true" :value="item.rate" />
						</view>
						<view class="flex-top">
							<text style="width: 150px;padding-right: 10px;">上榜理由</text>
							<text>
								{{item.des}}
							</text>
						</view>
					</uni-group>
				</view>
				<view v-if="current === 1" class="content-equ content-mt">
					<uni-group :title="item.title" margin-top="20" v-for="(item, index) in sanwannian" :key="index">
						<view class="group-list">
							<view v-for="infoItem in item.list" :key="item.label" class="group-item">
								<text class="item-label">{{infoItem.label}}:</text>
								<text class="item-value" style="padding-left:10px">{{infoItem.value}}</text>
							</view>
						</view>
						<view class="flex-box">
							<text style="padding-right: 10px;">猎杀指数</text>
							<uni-rate readonly="true" :value="item.rate" />
						</view>
						<view class="flex-top">
							<text style="width: 150px;padding-right: 10px;">上榜理由</text>
							<text>
								{{item.des}}
							</text>
						</view>
					</uni-group>
				</view>
				<view v-if="current === 2" class="content-mt">
					<uni-group :title="item.title" margin-top="20" v-for="(item, index) in wuwannian" :key="index">
						<view class="group-list">
							<view v-for="infoItem in item.list" :key="item.label" class="group-item">
								<text class="item-label">{{infoItem.label}}:</text>
								<text class="item-value" style="padding-left:10px">{{infoItem.value}}</text>
							</view>
						</view>
						<view class="flex-box">
							<text style="padding-right: 10px;">猎杀指数</text>
							<uni-rate readonly="true" :value="item.rate" />
						</view>
						<view class="flex-top">
							<text style="width: 150px;padding-right: 10px;">上榜理由</text>
							<text>
								{{item.des}}
							</text>
						</view>
					</uni-group>
				</view>
			</view>
		</uni-section>
	</view>
</template>


<script>
	import {
		wannian,
		sanwannian,
		wuwannian
	} from './personInfo.js'
	export default {
		components: {},
		data() {
			return {
				items: ['一万到一万八', '三万到四万', '五万'],
				styles: [{
						value: 'button',
						text: '按钮',
						checked: true
					},
					{
						value: 'text',
						text: '文字'
					}
				],
				sanwannian,
				wannian,
				wuwannian,
				colors: ['#007aff', '#4cd964', '#dd524d'],
				current: 0,
				colorIndex: 0,
				activeColor: '#007aff',
				styleType: 'button'
			}
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},
			styleChange(e) {
				if (this.styleType !== e.detail.value) {
					this.styleType = e.detail.value
				}
			},
			colorChange(e) {
				if (this.styleType !== e.detail.value) {
					this.activeColor = e.detail.value
				}
			}
		}
	}
</script>

<style lang="scss">
	.flex-top {
		display: flex;
		align-self: baseline;
		padding-top: 10px;
		align-self: start;
		text-align: left;
	}

	.flex-box {
		display: flex;
		align-items: center;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 0;
	}

	.uni-common-mt {
		margin-top: 30px;
	}

	.uni-padding-wrap {
		// width: 750rpx;
		padding: 0px 30px;
	}

	.content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		align-items: center;
		text-align: center;

		.content-mt {
			margin-top: 12px;

			.group-list {
				display: flex;
				flex-wrap: wrap;
				text-align: left;
				justify-content: space-between;

				.group-item {

					padding-bottom: 10px;

					.item-label {}

					.item-value {}
				}
			}
		}

		.content-equ {
			width: 100vw;
			height: 300px;
		}
	}

	.content-text {
		font-size: 14px;
		color: #666;
	}

	.color-tag {
		width: 25px;
		height: 25px;
	}

	.uni-list {
		flex: 1;
	}

	.uni-list-item {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
		background-color: #FFFFFF;
	}


	.uni-list-item__container {
		padding: 12px 15px;
		width: 100%;
		flex: 1;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		box-sizing: border-box;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: #eee;
	}

	.uni-list-item__content-title {
		font-size: 14px;
	}
</style>



<style lang="scss">
	.image {
		width: 25px;
		height: 25px;
	}

	.text {
		font-size: 14px;
		margin-top: 5px;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		// display: block;
		/* #endif */
	}

	.grid-dynamic-box {
		margin-bottom: 15px;
	}

	.grid-item-box {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.grid-item-box-row {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.grid-dot {
		position: absolute;
		top: 5px;
		right: 15px;
	}

	.swiper {
		height: 420px;
	}

	/* #ifdef H5 */
	@media screen and (min-width: 768px) and (max-width: 1425px) {
		.swiper {
			height: 630px;
		}
	}

	@media screen and (min-width: 1425px) {
		.swiper {
			height: 830px;
		}
	}

	/* #endif */
</style>
