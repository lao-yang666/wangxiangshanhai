<template>
	<view class="container">
		<uni-section>
			<uni-search-bar @confirm="search" placeholder="输入名字查询" :focus="true" v-model="searchValue">
			</uni-search-bar>
			<view class="search-box">
				<view class="flex-box"><text style="display: block;min-width: 50px;">印记：</text>
					<uni-data-checkbox multiple v-model="checkSealList" :localdata="sealList"></uni-data-checkbox>
				</view>
				<view class="flex-box"><text style="display: block;min-width: 50px;">元素：</text>
					<uni-data-checkbox multiple v-model="checkElementList" :localdata="elementList"></uni-data-checkbox>
				</view>
				<view class="flex-box"><text style="display: block;min-width: 50px;">年份：</text>
					<uni-data-checkbox style="flex:auto;" multiple v-model="checkAgeList" :localdata="ageList">
					</uni-data-checkbox>
				</view>
				<view class="flex-box"><text style="display: block;min-width: 50px;">部位：</text>
					<uni-data-checkbox style="flex:auto;" multiple v-model="checkPartList" :localdata="partList">
					</uni-data-checkbox>
				</view>
				<view class="flex-box-between">
					<button class="mini-btn" type="primary" size="mini" @click.stop="search"
						style="margin:0">开始查询</button>
					<view class="flex-box">
						<picker @change="onPicker" :range="['按年份排序','按开印数量排序','按部位攻击排序']" :value="checkSort"
							mode="selector">
							排序</picker>
						<view @click.stop="sortRever" style="padding-left:10px;color: #007aff;" v-if="sortFlag">升序</view>
						<view @click.stop="sortRever" style="padding-left:10px;olor: #007aff;" v-else>降序</view>
					</view>
				</view>
			</view>


			<view class="card-list-box">
				<!-- <image slot='cover' style="width: 100%;" :src="cover"></image> -->
				<view class="card-box" v-for="item in tableList" :key="item.id" :class="bgStyle[item.age]">
					<view class="card-title">
						<view class="card-title-top">
							<view :class="nameStyle[item.element]">{{item.age}}•{{item.name}}</view>
							<view>{{item.location}}</view>
						</view>
						<view class="card-title-bottom">
							<view><text v-for="ele in item.needSeals" :key="ele"
									style="padding-right: 5px;">{{ele}}</text>
								<text>{{item.element}}</text>
							</view>
							<view class="flex-box">
								<view v-for="ele in item.parts" :key="ele"
									style="padding-left: 14px;position: relative;">
									<text>{{ele}}</text>
									<view class="grid-dot">
										<view class="bage">{{bage(item,ele)}}		</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</uni-section>
	</view>
</template>

<script setup>
	import {
		sealList,
		ageList,
		partList,
		behemoth,
		elementList
	} from './tableData.js'
	import {
		computed,
		ref
	} from 'vue'
	const searchValue = ref('')
	const sortFlag = ref(false)
	const bgStyle = ref({
		'万年': 'wan-nian',
		'一万三千年': 'yi-wan-san',
		'一万八千年': 'yi-wan-ba',
		'三万年': 'san-wan',
		'四万年': 'si-wan',
		'五万年': 'wu-wan'
	})
	const nameStyle = ref({
		'木': 'mu',
		'风': 'feng',
		'火': 'huo',
		'金': 'jin',
	})
	const sealStyle = ref({
		'辛': 'mu',
		'风': 'feng',
		'火': 'huo',
		'金': 'jin',
	})
	const checkSort = ref(0)
	const tableList = ref(behemoth)
	const checkAgeList = ref([]);
	const checkSealList = ref([]);
	const checkPartList = ref([]);
	const checkElementList = ref([]);
	const bage = computed(() => (item, ele) => {
		return item.attack[ele] + ''
	})
	const onPicker = (e) => {
		checkSort.value = e.detail.value;
		if (checkSort.value == 2 && checkPartList.value.length !== 1) {
			alert('请先勾选一个部位,仅对一个部位排序')
		} else {
			sort();
		}
	}
	const sortRever = () => {
		sortFlag.value = !sortFlag.value
		tableList.value.reverse();
	}
	const sort = () => {
		if (checkSort.value == 0) {
			const ageMAp = {
				万年: 10000,
				一万三千年: 13000,
				一万八千年: 18000,
				三万年: 30000,
				四万年: 40000,
				五万年: 50000,
			};
			tableList.value = tableList.value.sort(
				(a, b) => ageMAp[a.age] - ageMAp[b.age]
			);
		} else if (checkSort.value == 1) {
			tableList.value = tableList.value.sort(
				(a, b) => a.needSeals.length - b.needSeals.length
			);
		} else {
			tableList.value = tableList.value.sort(
				(a, b) => b.attack[checkPartList.value[0]] - a.attack[checkPartList.value[0]]
			);
		}
	};

	const search = () => {
		tableList.value = behemoth.filter(item => {
			// 检查条件一（如果ageList不为空）
			const isNameValid = item.name.includes(searchValue.value)
			const isAgeValid = checkAgeList.value.length === 0 || checkAgeList.value.includes(item.age);

			// 检查条件二（如果partList不为空）
			const isPartValid = checkPartList.value.length === 0 || checkPartList.value.some(part => item
				.parts.includes(part));

			// 检查条件三（如果sealList不为空）
			const isSealValid = checkSealList.value.length === 0 || checkSealList.value.every(seal => item
				.needSeals.includes(seal));
			// 检查条件三（如果sealList不为空）
			const isElementValid = checkElementList.value.length === 0 || checkElementList.value.includes(item
				.element);
			// 如果三个条件都满足，保留该元素
			return isNameValid && isAgeValid && isPartValid && isSealValid && isElementValid;
		});
	}
</script>
<style lang="scss">
	.grid-dot {
		position: absolute;
		top: -20px;
		right: -3px;
		.bage {
			    padding: 0px 2px;
			    background-color: #dd524d;
			    border-radius: 50%;
			    min-width: 20px;
			    height: 20px;
		}
	}

	.card-list-box {
		display: flex;
		flex-wrap: wrap;
		padding: 5px;
	}

	.flex-box-between {
		display: flex;
		justify-content: space-between;
	}

	.flex-box {
		display: flex;
		align-items: self-start;
	}

	.search-box {
		padding: 0 20px;

	}

	.card-box {
		flex-basis: 47%;
		margin: 5px;
		border-radius: 10px;
		background: -webkit-linear-gradient(left, #ffcc00, #ff6600);
		transition: box-shadow 0.3s ease-in-out;
		color: #ffffff;
		/* 设置文字颜色 */
		text-shadow: 0 0 10px rgba(150, 0, 255, 0.7);
		/* 添加发光效果 */

		/* 添加过渡效果 */
	}

	.wan-nian {
		background: -webkit-linear-gradient(left, #d0c0c0, #e6e6e6);
	}

	.yi-wan-san {
		background: -webkit-linear-gradient(left, #00cc00, #66ff66);
	}

	.yi-wan-ba {
		background: -webkit-linear-gradient(left, #007bff, #66b3ff)
	}

	.san-wan {
		background: -webkit-linear-gradient(left, #9900cc, #cc66ff);
		color: "#ffcc00";

	}

	.si-wan {
		background: -webkit-linear-gradient(left, #ffcc00, #ff6600);

	}

	.wu-wan {
		background: -webkit-linear-gradient(left, #ff6666, #ff0000);
	}

	.mu {}

	.feng {}

	.huo {}

	.jim {}

	.card:hover {
		box-shadow: 0 0 30px rgba(255, 223, 0, 0.8);
		/* 鼠标悬停时增加发光效果 */
	}

	.card-title {
		padding: 10px 0;
		color: #ffffff !important;
		padding: 10px;
		font-size: 12px;

		.card-title-top {
			display: flex;
			justify-content: space-between;
			margin-bottom: 15px;
		}

		.card-title-bottom {
			display: flex;
			justify-content: space-between;
		}
	}

	.container {
		overflow: hidden;
	}

	.custom-cover {
		flex: 1;
		flex-direction: row;
		position: relative;
	}

	.cover-content {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 40px;
		background-color: rgba($color: #000000, $alpha: 0.4);
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 15px;
		font-size: 14px;
		color: #fff;
	}

	.card-actions {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		height: 45px;
		border-top: 1px #eee solid;
	}

	.card-actions-item {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.card-actions-item-text {
		font-size: 12px;
		color: #666;
		margin-left: 5px;
	}

	.cover-image {
		flex: 1;
		height: 150px;
	}

	.no-border {
		border-width: 0;
	}

	.card-header {
		display: flex;
		justify-content: space-around;
	}

	.basic-item {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 40rpx;

	}

	.cave-box {
		.cave-row {
			.cave-text {
				display: inline-block;

				width: 20%;
				height: 60rpx;
				background: #fff;
				border-bottom: 1px #ebeef5 solid;
				border-right: 1px #ebeef5 solid;
				box-sizing: border-box;

				&:nth-child(2n) {
					background: #ddd;
					width: 30%;
				}
			}
		}
	}
</style>
