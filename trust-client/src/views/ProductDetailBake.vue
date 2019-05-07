<template>
	<div class="productdetail">
		<div class="product-key-info">
			<div class="ki-pname-wrap clearfix">
				<h1 class="product-name">渤海信托-南京新城货款项目3号资金信托计划haha</h1>
				<div class="label-wrap">
					<label class="label-item">低风险</label>
					<label class="label-item">稀缺</label>
				</div>
			</div>
			<div class="ki-wrap box-wrap">
				<div class="ki-item box-flex">
					<div class="ki-left-wrap">
						<div class="box-wrap notice-fc">
							<div class="box-auto">
								<div class="box-num-wrap"><span class="font-big">90</span>分</div>
								<div class="font-note">评分</div>
							</div>
							<div class="box-flex">
								<div class="box-num-wrap"><span class="font-big">48</span>月</div>
								<div class="font-note">融资期限</div>
							</div>
							<div class="">
								<div class="box-num-wrap"><span class="font-big">10</span>%</div>
								<div class="font-note profit-tip">业绩比较基准</div>
							</div>
						</div>
						<div class="box-wrap sub-wrap">
							<div class="">
								<div class="font-mark">房地产</div>
							</div>
							<div class="box-flex"></div>
							<div class="">
								<div class="font-mark">季度付息</div>
							</div>
							<div class="box-flex"></div>
							<div class="">
								<div class="font-mark">100万元起购</div>
							</div>
						</div>
					</div>
					<!-- <div class="box-wrap ki-btns-wrap">
						<div class="btn">关注</div>
						<div class="btn">分享</div>
					</div> -->
				</div>
				<!-- <div class="box-flex">
				</div> -->
				<div class="ki-radar">
					<div class="radar-wrap" id="radar_chart">fasfasfasfasf</div>
				</div>
			</div>
		</div>
		<div class="box-wrap box-tip">
			<div class="tip-item box-flex">
				本页面信息由【发行公司】提供。
			</div>
			<div class="tip-item box-flex">
				市场有风险，投资需谨慎！
			</div>
		</div>
		<div class="box-wrap">
			<div class="box-flex">
				<div class="product-detail-wrap">
					<TabToggle :tabkey="subtab" @getActiveIdx="activeCurTab" :tabTitles="titles" :activeIdx="activeIdx"></TabToggle>
					<div id="subtab_wrap" class="subtab-wrap">
						<div v-show="isShow[0]" class="project-info">
							<!-- <div class=""></div> -->
							<div class="product-detail-subwrap product-detail-score">
								<div class="product-detail-title">
									100项专业评分
								</div>
								<div class="xx-note">
									小貔貅点评：北方的风光，千万里冰封冻，千万里雪花飘。远望长城内外，只剩下无边无际白茫茫一片；宽广的黄小貔貅点评：北方的风光，千万里冰封冻，千万里雪花飘。远望长城内外，只剩下无边无际白茫茫一片；宽广的黄
								</div>
								<div class="score-overview-wrap">
									<div class="score-overview-item">
										<h5 class="score-overview-title">
										信托代理人
										</h5>
										<div class="score-overview-content box-wrap">
											<div class="score-overview-citem no-danger">基本信息：2项</div>
											<div class="score-overview-citem has-danger">基本信息：2项</div>
											<div class="score-overview-citem no-danger">基本信息：2项</div>
											<div class="score-overview-citem no-danger">基本信息：12项</div>
											<div class="score-overview-citem has-danger">基本信：2项</div>
											<div class="score-overview-citem no-danger">基本信息信：2项</div>
										</div>
									</div>
									<div class="score-overview-item">
										<h5 class="score-overview-title">
										信托代理人
										</h5>
										<div class="score-overview-content box-wrap">
											<div class="score-overview-citem no-danger">基本信息：2项</div>
											<div class="score-overview-citem has-danger">基本信息：2项</div>
											<div class="score-overview-citem no-danger">基本信息：2项</div>
											<div class="score-overview-citem no-danger">基本信息：12项</div>
											<div class="score-overview-citem has-danger">基本信：2项</div>
											<div class="score-overview-citem no-danger">基本信息信：2项</div>
										</div>
									</div>
									<div class="score-overview-item">
										<h5 class="score-overview-title">
										信托代理人
										</h5>
										<div class="score-overview-content box-wrap">
											<div class="score-overview-citem no-danger">基本信息：2项</div>
											<div class="score-overview-citem has-danger">基本信息：2项</div>
											<div class="score-overview-citem no-danger">基本信息：2项</div>
											<div class="score-overview-citem no-danger">基本信息：12项</div>
											<div class="score-overview-citem has-danger">基本信：2项</div>
											<div class="score-overview-citem no-danger">基本信息信：2项</div>
										</div>
									</div>
								</div>
								<div class="text-center">
									<a href="#product_detail_report" class="btn-go-report">72项评分标准报告</a>
								</div>
							</div>
							<div class="product-detail-subwrap product-detail-analysis">
								<div class="product-detail-title">
									数据对比
								</div>
								<div class="box-wrap">
									<div class="box-flex bar-wrap">
										<div class="bar-echart-title">fasdfafa</div>
										<!-- <BarEchart :barData="barData"></BarEchart> -->
										<div class="bar-echart-wrap" id="bar_echart_1">124141</div>
										<div class="bar-echart-bottom box-wrap">
											<div class="box-flex"></div>
											<div class="btns-wrap clearfix">
												<span class="lw-btn left-btn cur-btn">同类项目</span>
												<span class="lw-btn right-btn">全部项目</span>
											</div>
											<div class="box-flex"></div>
										</div>
									</div>
									<div style="width: 10px;"></div>
									<div class="box-flex bar-wrap  box-tgap">
										<div class="bar-echart-title">fasdfafa</div>
										<!-- <BarEchart :barData="barData"></BarEchart> -->
										<div class="bar-echart-wrap" id="bar_echart_2">124141</div>
										<div class="bar-echart-bottom box-wrap">
											<div class="box-flex"></div>
											<div class="btns-wrap clearfix">
												<span class="lw-btn left-btn cur-btn">同类项目</span>
												<span class="lw-btn right-btn">全部项目</span>
											</div>
											<div class="box-flex"></div>
										</div>
									</div>
								</div>
								<div class="box-wrap">
									<div class="box-flex bar-wrap  box-tgap">
										<div class="bar-echart-title">fasdfafa</div>
										<!-- <BarEchart :barData="barData"></BarEchart> -->
										<div class="bar-echart-wrap" id="bar_echart_3">124141</div>
										<div class="bar-echart-bottom box-wrap">
											<div class="box-flex"></div>
											<div class="btns-wrap clearfix">
												<span class="lw-btn left-btn cur-btn">同类项目</span>
												<span class="lw-btn right-btn">全部项目</span>
											</div>
											<div class="box-flex"></div>
										</div>
									</div>
									<div style="width: 10px;"></div>
									<div class="box-flex bar-wrap box-tgap">
										<div class="bar-echart-title">fasdfafa</div>
										<!-- <BarEchart :barData="barData"></BarEchart> -->
										<div class="bar-echart-wrap" id="bar_echart_4">124141</div>
										<div class="bar-echart-bottom box-wrap">
											<div class="box-flex"></div>
											<div class="btns-wrap clearfix">
												<span class="lw-btn left-btn cur-btn">同类项目</span>
												<span class="lw-btn right-btn">全部项目</span>
											</div>
											<div class="box-flex"></div>
										</div>
									</div>
								</div>
							</div>
							<div id="product_detail_report" class="product-detail-subwrap product-detail-report">
								<div class="product-detail-title">
									评分标准报告
								</div>
								<TabToggle :tabkey="stab" @getActiveIdx="activeCurTab" :tabTitles="stabTitles" :activeIdx="activestabIdx"></TabToggle>
								<div id="stab_wrap" class="stab-wrap">
									<div v-show="isStabShow[0]" class="border-rds-l">
										<div class="box-wrap">
											<div class="box-flex ">
												<div class="h-sheight details-title border-ltrds-l">2项基本信息</div>
												<div class="h-sheight details-info">2项基本信息</div>
												<div class="h-sheight details-info"></div>
												<div class="h-sheight details-info"></div>
												<div class="h-sheight details-info"></div>
												<div class="h-sheight details-info border-lbrds-l"></div>
											</div>
											<div class="box-flex">
												<div class="h-sheight details-title">2项基本信息</div>
												<div class="h-sheight details-info">2项基本信息</div>
												<div class="h-sheight details-info">2项基本信息</div>
												<div class="h-sheight details-info">2项基本信息</div>
												<div class="h-sheight details-info">2项基本信息</div>
												<div class="h-sheight details-info">2项基本信息</div>
											</div>
											<div class="box-flex">
												<div class="h-sheight details-title">2项基本信息</div>
												<div class="h-sheight details-info">2项基本信息</div>
												<div class="h-sheight details-info"></div>
												<div class="h-sheight details-info"></div>
												<div class="h-sheight details-info"></div>
												<div class="h-sheight details-info"></div>
											</div>
											<div class="box-flex">
												<div class="h-sheight details-title  border-rtrds-l">2项基本信息</div>
												<div class="h-sheight details-info">2项基本信息</div>
												<div class="h-sheight details-info">2项基本信息</div>
												<div class="h-sheight details-info"></div>
												<div class="h-sheight details-info"></div>
												<div class="h-sheight details-info border-rbrds-l"></div>
											</div>
										</div>
									</div>
									<div v-show="isStabShow[1]" class="">22222</div>
									<div v-show="isStabShow[2]" class="">33333</div>
									<div v-show="isStabShow[3]" class="">44444</div>
									<div v-show="isStabShow[4]" class="">555555</div>
									<div v-show="isStabShow[5]" class="">66666</div>
								</div>
							</div>
						</div>
						<div v-show="isShow[1]" class="project-data">2222222</div>
					</div>
				</div>
			</div>
			<div class="" style="width:369px;margin-left:15px;">
				<div class="">右侧</div>
				<rightBar></rightBar>
			</div>
		</div>
	</div>
</template>
<script>
import echarts from 'echarts'
import TabToggle from '@/components/TabToggle.vue'
// import BarEchart from '@/components/BarEchart.vue'
import RightBar from '@/components/RightBar.vue'
import axios from 'axios'

export default {
	asyncData(store, route) {
		console.log('11111', store, route);
		return store.dispatch('fetchLists')
	},
	name: 'productdetail',
	components: {
		TabToggle,
		RightBar,
		// BarEchart
	},
	data() {
		return {
			// subTab: {
			titles: [{ text: '项目信息' }, { text: '项目资料' }],
			// stabTitles: [{ text: '产品信息1' }, { text: '产品信息2' }, { text: '产品信息3' }, { text: '产品信息4' }, { text: '产品信息5' }, { text: '产品信息6' }],
			activeIdx: '0',
			subtab: 'subtab',
			stab: 'stab',
			activestabIdx: '0',
			// },
			isShow: [true],
			isStabShow: [true],
			barData: { a: 1 },
			reportData: [{
					fl: '产品性质1',
					maxCount: 6,
					infos: [{ name: '2项基本信息', details: ['资金属性', '认购起点'] },
						{ name: '2项基本信息', details: ['资金属性', '认购起点', '资金属性', '认购起点', '资金属性', '认购起点'] },
						{ name: '2项基本信息', details: ['资金属性', '认购起点'] },
						{ name: '2项基本信息', details: ['资金属性', '认购起点', '资金属性', '认购起点', '资金属性'] }
					]
				},
				{
					fl: '产品性质2',
					maxCount: 5,
					infos: [{ name: '2项基本信息', details: ['资金属性', '认购起点'] },
						{ name: '2项基本信息', details: ['资金属性', '认购起点'] },
						{ name: '2项基本信息', details: ['资金属性', '认购起点'] },
					]
				},
				{
					fl: '产品性质3',
					maxCount: 3,
					infos: [{ name: '2项基本信息', details: ['资金属性', '认购起点'] },
						{ name: '2项基本信息', details: ['资金属性', '认购起点'] },
						{ name: '2项基本信息', details: ['资金属性', '认购起点'] },
						{ name: '2项基本信息', details: ['资金属性', '认购起点'] },
						{ name: '2项基本信息', details: ['资金属性', '认购起点'] },
						{ name: '2项基本信息', details: ['资金属性', '认购起点'] },
						{ name: '2项基本信息', details: ['资金属性', '认购起点'] }
					]
				}
			],
			radarData: {
				indicator: [
					{ name: '基础信息', max: 60 },
					{ name: '还款来源', max: 60 },
					{ name: '信托代理人', max: 60 },
					{ name: '增值措施人', max: 60 },
					{ name: '融资主体', max: 60 },
					{ name: '市场人人人', max: 60 }
				],
				realData: [{
					value: [18, 43, 55, 20, 60, 30],
					name: '预算分配（Allocated Budget）',
					areaStyle: {
						color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
							[{
								offset: 0,
								color: '#F661B6'
							}, {
								offset: 1,
								color: '#EB3683'
							}], false),
						opacity: 0.6,
					},
					lineStyle: {
						color: 'transparent',
					}
				}]
			}
		}
	},
	beforeCreate() {
		// console.log("beforeCreate");
		axios.get('/projectbaseinfo/')
			.then((res) => {
				console.log(res);
			})
	},
	computed: {
		lists() {
			console.log(this.$store.state.detailInfo);
			return this.$store.state.detailInfo // 文章列表
		},
		stabTitles: function() {
			const tempArr = [];
			for (let item of this.reportData) {
				// console.log(item.fl);
				tempArr.push({ text: item.fl })
			}
			return tempArr;
		}
	},
	mounted() {
		console.log(this.lists);
		// console.log(this.stabTitles);
		this.drawRadar("radar_chart");
		this.drawBar("bar_echart_1");
		this.drawBar("bar_echart_2");
		this.drawBar("bar_echart_3");
		this.drawBar("bar_echart_4");
	},
	methods: {
		activeCurTab: function(params) {
			console.log(params);
			switch (params.tabkey) {
				case 'subtab':
					this.isShow[this.activeIdx] = false;
					this.activeIdx = params.idx;
					this.isShow[params.idx] = true;
					break;
				case 'stab':
					this.isStabShow[this.activestabIdx] = false;
					this.activestabIdx = params.idx;
					this.isStabShow[params.idx] = true;
					break;
				default:
					break;
			}

		},
		drawRadar: function(id) {
			this.chart = echarts.init(document.getElementById(id));
			this.chart.clear();
			let clr = function(idx) {
				return {
					type: 'radial',
					x: 0.5,
					y: 0.5,
					r: 0.1,
					colorStops: [{
						offset: 0,
						color: '#7659E6' // 0% 处的颜色
					}, {
						offset: idx,
						color: '#AE92F4' // 100% 处的颜色
					}]
				};
			};
			const option = {
				radar: {
					name: {
						textStyle: {
							color: '#fff',
							fontFamily: 'pfm',
							fontSize: 12,
							lineHeight: 1,
						}
					},
					nameGap: 12,
					radius: '70%',
					indicator: this.radarData.indicator,
					// triggerEvent: true,
					splitArea: {
						areaStyle: {
							opacity: 0.6,
							color: [clr(1), clr(1), clr(1), clr(1), clr(1)],
						},
					},
					splitLine: {
						show: false,
						border: 0
					},
					axisLine: {
						show: false
					},
				},
				series: [{
					name: '',
					type: 'radar',
					symbolSize: 0,
					data: this.radarData.realData
				}]
			};
			this.chart.setOption(option);
		},
		drawBar: function(id) {
			let chart = echarts.init(document.getElementById(id));
			chart.clear();
			const val = [8, 15, 20];
			const option = {
				// title: {
				//     text: '年化收益年化收益年化收益',
				//     textStyle: {
				//         color: '#fff',
				//         fontFamily: 'pfh',
				//         fontSize: 22,
				//     },
				//     // textAlign: 'center',
				//     top: 24,
				//     x:'center',
				// },
				grid: {
					// show: true,
					top: 60,
					// left: '11%',
					// right: '11%',
					bottom: 64,
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
								fontSize: '18',
							},
							// formatter:function(val){
							//     return val.split("").join("\n")
							// },
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
								// shadowBlur: {
								//     shadowColor: 'rgba(255,255,255,0.31)',
								//     shadowBlur: 10,
								//     shadowOffsetX: 0,
								//     shadowOffsetY: 2,
								// },
							}
						},
						label: {
							show: true,
							formatter: function(params) {
								var realVal = val[params.dataIndex]
								return realVal + '%';
							},
							position: 'top',
							distance: 8,
							fontFamily: 'pfm',
							color: '#fff',
							fontSize: '12'
						},
						barWidth: 12,
						data: [30, 30, 30]
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
						data: [8, 15, 10]
					}

				]
			};
			chart.setOption(option);
		}
	}
}
</script>
<style lang="scss">
//@charset "utf-8";
.productdetail {
	padding: 0 24px;
	font-family: pfm;
}

.product-key-info {
	position: relative;
	margin-top: 30px;
	padding: 54px 40px;
	border-radius: 10px;
	background: url(../assets/images/detail-bg@2x.png) center center no-repeat;
	background-size: cover;

	.product-name {
		float: left;
		position: relative;
		display: inline-block;
		margin: 0 12px 0 0;
		//padding: 0 0 0 32px;
		font-weight: normal;
		font-size: 26px;
		color: #fff;
		font-family: 'pfh';
	}

	/*.product-name::before {
		position: absolute;
		content: '';
		width: 20px;
		height: 20px;
		left: 0;
		top: 8px;
		background: url(../assets/images/zan@2x.png) center center no-repeat;
		background-size: cover;
	}*/

	.label-wrap {
		float: left;
		display: inline-block;
		margin-top: 6px;
		font-size: 16px;
		font-family: pfm;
		color: #5D5386;
		text-align: center;

		.label-item {
			float: left;
			min-width: 47px;
			padding: 2px 10px;
			margin-right: 10px;
			border-radius: 25px;
		}

		.label-item:nth-child(odd) {
			background: #fff;
		}

		.label-item:nth-child(even) {
			background: #BEC8FF;
		}
	}
}

.ki-wrap {
	margin: 38px 0 0;

	.ki-left-wrap {
		padding: 24px 47px;
		border-radius: 20px;
		background: #fff;
		text-align: center;

		.box-num-wrap {
			font-family: pfnum;
			color: #F2282D;
		}

		.font-big {
			font-family: pfnum;
			font-size: 50px;
			color: #DE3F38;
		}

		.font-note {
			position: relative;
			padding-right: 22px;
			font-size: 20px;
			font-family: pfm;
			color: #DE3F38;
		}

		.profit-tip:after {
			content: '?';
			position: absolute;
			width: 16px;
			height: 16px;
			top: 6px;
			right: 0;
			font-size: 14px;
			line-height: 16px;
			border-radius: 16px;
			font-family: pfm;
			color: #fff;
			background-color: #DE3F38;
		}

		.sub-wrap {
			margin-top: 20px;
			padding: 10px 68px;
			font-size: 16px;
			border-radius: 20px;
			color: #211C34;
			background: #EBEBEB;
		}

		.font-mark {
			position: relative;
			padding-left: 9px;
		}

		.font-mark:before {
			content: '';
			position: absolute;
			display: inline-block;
			width: 4px;
			height: 4px;
			top: 9px;
			left: 0;
			border-radius: 4px;
			background-color: #211C34;
		}
	}
}

.radar-wrap {
	width: 250px;
	height: 30px;
}

.ki-btns-wrap {
	padding-top: 40px;
}

.ki-radar {
	margin-top: -15px;
	padding: 0 20px 0 90px;
}

#radar_chart {
	width: 300px;
	height: 230px;
}

.box-tip {
	padding: 24px 40px;
}

.tip-item {
	width: 50%;
	text-align: center;
	font-size: 20px;
	color: #fff;
}

.product-detail-wrap {
	padding: 0 12px 30px;
	background: linear-gradient(180deg, rgba(51, 44, 78, 1) 0%, rgba(88, 78, 122, 1) 50%, rgba(59, 51, 91, 1) 100%);
	border-radius: 10px;

	.product-detail-score {
		background-color: #5D5386;
	}

	.product-detail-analysis {
		background-color: #332C4E;
	}

	.product-detail-report {
		background-color: #4D407D;
	}

	.xx-note {
		margin: 0 18px 40px;
		padding: 10px 30px;
		font-size: 12px;
		border-radius: 27px;
		background-color: #9C91C6;
	}
}

.product-detail-subwrap {
	padding: 30px 24px;
	margin: 0 0 20px 0;
	border-radius: 20px;

	.product-detail-title {
		position: relative;
		margin: 0 0 35px 0;
		padding: 0 0 0 14px;
		font-size: 27px;
		font-family: pfh;
	}

	.product-detail-title:before {
		content: '';
		position: absolute;
		width: 4px;
		height: 18px;
		top: 10px;
		left: 0;
		background-color: #fff;
	}
}

.subtab {
	li {
		margin: 30px 62px 30px 28px;
		line-height: 38px;
		font-size: 18px;
		vertical-align: middle;
		cursor: pointer;
	}

	li.tab-active {
		font-family: pfh;
		color: #BEC8FF;
	}
}

.score-overview-title {
	margin: 0 0 20px 0;
	padding: 0;
	font-size: 24px;
}

.score-overview-wrap {
	margin: 0 26px;
	font-size: 20px;
}

.score-overview-item {
	margin-bottom: 30px;
}

.score-overview-citem {
	position: relative;
	margin-bottom: 20px;
	width: 214px;
	//max-width: 214px;
	//min-width: 160px;
}

.score-overview-citem:after {
	position: absolute;
	width: 17px;
	height: 17px;
	margin-top: 5px;
	margin-left: 10px;
	font-size: 14px;
	vertical-align: middle;
	font-family: pf;
	text-align: center;
	background-color: #fff;
	border-radius: 17px;
}

.no-danger:after {
	content: '\2713';
	color: #5D5386
}

.has-danger:after {
	content: '!';
	line-height: 17px;
	color: #D0021B
}

.btn-go-report {
	position: relative;
	display: block;
	font-size: 14px;
}

.btn-go-report:after {
	content: '\00BB';
	position: absolute;
	width: 6px;
	height: 7px;
	margin-left: 6px;
	font-size: 14px;
}

.bar-wrap {
	padding: 24px 0 36px 0;
	border-radius: 20px;
	background-color: #211C34;
}

.bar-echart-title {
	padding-left: 40px;
	color: #fff;
	font-family: pfh;
	font-size: 22px;
	text-align: left;
}

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

.bar-echart-wrap {
	width: 100%;
	height: 390px;
}

.box-tgap {
	margin-top: 20px
}

.stab {
	li {
		margin: 0 32px 30px 0;
		line-height: 18px;
		font-size: 18px;
		vertical-align: middle;
		cursor: pointer;
	}

	li.tab-active {
		font-family: pfh;
		color: #BEC8FF;
	}
}

.border-rds-l {
	border-radius: 20px;
}

.border-rtrds-l {
	border-top-right-radius: 20px;
}

.border-ltrds-l {
	border-top-left-radius: 20px;
}

.border-rbrds-l {
	border-bottom-right-radius: 20px;
}

.border-lbrds-l {
	border-bottom-left-radius: 20px;
}

.h-sheight {
	height: 60px;
	line-height: 60px;
	text-align: center;
}

.details-title {
	font-family: pfh;
	font-size: 18px;
	color: #211C34;
	background-color: #E4E4E4;
}

.details-info {
	font-size: 18px;
	color: #211C34;
	background-color: #E4E4E4;
}

.details-info:nth-child(even) {
	background-color: #fff;
}

.details-info:nth-child(odd) {
	background-color: #f2f2f2;
}
</style>