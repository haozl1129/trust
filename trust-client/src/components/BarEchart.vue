<template>
	<div>
		<div class="bar-echart-wrap" ref='barchart' style="width: 100%;height: 390px;" :allDatas="allData" :type="dataType"></div>
		<div class="bar-echart-bottom box-wrap">
			<div class="box-flex"></div>
			<div class="btns-wrap clearfix">
				<span class="lw-btn left-btn" :class="dataType == 0?'cur-btn':''" @click="reRenderBarEchart(0)">同类项目</span>
				<span class="lw-btn right-btn" :class="dataType?'cur-btn':''" @click="reRenderBarEchart(1)">全部项目</span>
			</div>
			<div class="box-flex"></div>
		</div>
	</div>
</template>
<script>
import echarts from 'echarts'


export default {
	name: 'BarEchart',
	data() {
		return {
			dataType: 0
		}
	},
	watch: {
		dataType: function(nv) {
			this.drawBar(nv);
		},
	},
	mounted() {
		this.drawBar(0);
	},
	methods: {
		reRenderBarEchart: function(type) {
			this.dataType = type;
		},
		drawBar: function(type) {
			let chart = echarts.init(this.$refs.barchart);
			chart.clear();
			const valOpj = this.allData[type];
			let val = [],
				maxVal = 0;
			for (let key in valOpj) {
				if (key == 'self' || key == 'all_self') {
					val[0] = valOpj[key];
				}
				if (key == 'same' || key == 'all_same') {
					val[1] = valOpj[key];
				}
				if (key == 'same_max' || key == 'all_same_max') {
					val[2] = valOpj[key];
				}
			}
			for (let i = 0; i < 3; i++) {
				maxVal = Math.ceil(Math.max(maxVal, val[i]));
			}
			const option = {
				grid: {
					top: 60,
					bottom: 64,
					// containLabel: true,
				},
				yAxis: {
					type: 'value',
					axisTick: {
						show: false
					},
					axisLine: {
						show: false,
						lineStyle: {
							color: '#363e83',
						}
					},
					splitLine: {
						show: false,
						lineStyle: {
							color: '#363e83 ',
						}
					},
					axisLabel: {
						show: false,
						textStyle: {
							color: '#fff',
							fontFamily: 'pfm',
							fontWeight: 'normal',
							fontSize: '18',
						},
					},
				},
				xAxis: [{
						type: 'category',
						axisTick: {
							show: false
						},
						axisLine: {
							show: false,
							lineStyle: {
								color: '#363e83',
							}
						},
						axisLabel: {
							show: true,
							inside: false,
							textStyle: {
								color: '#fff',
								fontFamily: 'pfm',
								fontWeight: 'normal',
								fontSize: '14',
							},
						},
						nameGap: 9,
						data: ['本项目', '平均值', '最高值']
					}, {
						type: 'category',
						axisLine: {
							show: false
						},
						axisTick: {
							show: false
						},
						axisLabel: {
							show: false
						},
						splitArea: {
							show: false
						},
						splitLine: {
							show: false
						},
						data: ['本项目', '平均值', '最高值']
					},

				],
				series: [{
						type: 'bar',
						xAxisIndex: 1,
						zlevel: 1,
						itemStyle: {
							normal: {
								color: '#332C4E',
								borderWidth: 0,
								barBorderRadius: 20,
							}
						},
						label: {
							show: true,
							formatter: function(params) {
								const realVal = val[params.dataIndex]
								return realVal + '%';
							},
							position: 'top',
							distance: 8,
							fontFamily: 'pfm',
							color: '#fff',
							fontSize: '12'
						},
						barWidth: 12,
						data: [maxVal, maxVal, maxVal]
					}, {
						name: '同类项目',
						type: 'bar',
						itemStyle: {
							normal: {
								show: true,
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: '#FF7C88'
								}, {
									offset: 1,
									color: '#6200A0'
								}]),
								barBorderRadius: 6,
								borderWidth: 0,
							}
						},

						zlevel: 2,
						barWidth: 12,
						data: val
					}

				]
			};
			chart.setOption(option);

			window.addEventListener('resize', function() {
				chart.resize()
			})
		}
	},
	props: {
		allData: {
			type: Array
		}
	}

}
</script>
<style lang="scss">
.bar-echart-bottom {
	margin: 0 auto;

	.btns-wrap {

		.lw-btn {
			float: left;
			padding: 4px 16px;
			border: 1px solid #fff;
			cursor: pointer;
			font-family: pfm;
			font-size: 12px;
			color: #fff;
			background-color: transparent;
			//-webkit-appearance: none;
		}

		.left-btn {
			border-top-left-radius: 14px;
			border-bottom-left-radius: 14px;
		}

		.right-btn {
			border-top-right-radius: 14px;
			border-bottom-right-radius: 14px;
		}

		.cur-btn {
			background-color: #fff;
			color: #DE3F38
		}
	}
}
</style>