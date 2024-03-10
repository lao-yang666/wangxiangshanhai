<template>
	<view class="container">
		<uni-section title="追风的日常" type="line">
			<uni-card cover="https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg">
				<!-- <image slot='cover' style="width: 100%;" :src="cover"></image> -->
				<text class="uni-body">
					今天山洞没有收获
				</text>
				<view slot="actions" class="card-actions">
					<view class="card-actions-item" @click="actionsClick('分享')">
						<uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">分享</text>
					</view>
					<view class="card-actions-item" @click="actionsClick('点赞')">
						<uni-icons type="heart" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">点赞</text>
					</view>
					<view class="card-actions-item" @click="actionsClick('评论')">
						<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">评论</text>
					</view>
				</view>
			</uni-card>
			<uni-card>
				<!-- <image slot='cover' style="width: 100%;" :src="cover"></image> -->
				<view class="card-header" slot="title">
						洞穴1
				</view>
						<uni-collapse ref="collapse" >
				<uni-collapse-item title="基本信息">
							<view class="basic-item">
								<text>进入时间</text>
								<text>0320:12:23:11</text>
							</view>
						<view class="basic-item">
							<text>初始剩余时间</text>
								<text>0320:12:23:11</text>
						</view>
						<view class="basic-item">
							<text>离开时间</text>
									<text>0320:12:23:11</text>
						</view>
					</uni-collapse-item>
							</uni-collapse  >
				<uni-collapse ref="collapse" >

					<uni-collapse-item title="山洞收获">
						<view class="cave-box">
							<view class="cave-row">
								<text class="cave-text">
									母鸡
								</text>
								<text class="cave-text">
									3蓝蛋
								</text>
								<text class="cave-text">
									外卖
								</text>
								<text class="cave-text">
									3食珍
								</text>
							</view>
							<view class="cave-row">
								<text class="cave-text">
									鸟蛋
								</text>
								<text class="cave-text">
									有
								</text>
								<text class="cave-text">
									墙壁
								</text>
								<text class="cave-text">
									无
								</text>
							</view>
							<view class="cave-row">
								<text class="cave-text">
									莲花
								</text>
								<text class="cave-text">
									有
								</text>
								<text class="cave-text">
									巨兽
								</text>
								<text class="cave-text">
									无
								</text>
							</view>
							<view class="cave-row">
								<text class="cave-text">
									丹炉
								</text>
								<text class="cave-text">
									有
								</text>
								<text class="cave-text">
									书柜
								</text>
								<text class="cave-text">
									有
								</text>
							</view>
						</view>
					</uni-collapse-item>

				</uni-collapse>

				<view slot="actions" class="card-actions">
					<view class="card-actions-item" @click="actionsClick('分享')">
						<uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">分享</text>
					</view>
					<view class="card-actions-item" @click="actionsClick('点赞')">
						<uni-icons type="heart" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">点赞</text>
					</view>
					<view class="card-actions-item" @click="actionsClick('评论')">
						<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">评论</text>
					</view>
				</view>
			</uni-card>
		</uni-section>
	</view>
</template>
<script setup>
	import {
		ref
	} from 'vue'
	const rongrong = ref('蓉蓉你好')
</script>
<style lang="scss">
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
