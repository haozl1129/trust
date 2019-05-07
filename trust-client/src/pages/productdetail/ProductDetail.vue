<template>
  <div style="position: relative;">
    <div class="product-key-info" v-if="baseInfo">
      <div class="ki-pname-wrap clearfix">
        <h1 class="product-name">{{baseInfo.name}}</h1>
        <div class="label-wrap">
          <label class="label-item" v-if="baseInfo.safe_falg">{{baseInfo.safe_falg}}</label>
        </div>
      </div>
      <div class="ki-wrap box-wrap">
        <div class="ki-item box-flex">
          <div class="ki-left-wrap">
            <div class="box-wrap notice-fc">
              <div class="">
                <div class="box-num-wrap" @click="onTestClick"><span class="font-big">{{baseInfo.total||""}}</span>分</div>
                <div class="font-note">评分 {{test && test.code}}</div>
              </div>
              <div class="box-flex">
                <div class="box-num-wrap" v-if="baseInfo.financing">
                  <span class="font-big">{{baseInfo.financing}}</span>个月
                </div>
                <div class="box-num-wrap" v-else>
                  --
                </div>
                <div class="font-note">融资期限</div>
              </div>
              <div class="">
                <div class="box-num-wrap"><span class="font-big">{{baseInfo.max_icome && baseInfo.max_icome.income}}</span>%</div>
                <div class="box-wrap font-note profit-tip">
                  <div class="">业绩比较基准</div>
                  <div style="position:relative;">
                    <span class="profit-tip-icon" @mouseover="popProfitDetail(0, 1)" @mouseout="popProfitDetail(0, 0)">?</span>
                    <div v-show="isShowProfit[0]" class="profit-detail-wrap">
                      <dl class="income-items-wrap">
                        <label class="income-item-wrap" v-for="(item,index) in baseInfo.income" :key="index">
                          <dt class="income-item-name">{{item.name}}元</dt>
                          <dd class="income-item-income">{{item.income}}%</dd>
                        </label>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="box-wrap sub-wrap">
              <div class="">
                <div class="font-mark" v-if="baseInfo.type">{{baseInfo.type}}</div>
              </div>
              <div class="box-flex"></div>
              <div class="">
                <div class="font-mark" v-if="baseInfo.interest">{{baseInfo.interest}}</div>
              </div>
              <div class="box-flex"></div>
              <div class="">
                <div class="font-mark" v-if="baseInfo.subscription">{{baseInfo.subscription}}万元起购</div>
              </div>
            </div>
          </div>
          <!-- <div class="box-wrap ki-btns-wrap">
						<div class="btn">关注</div>
						<div class="btn">分享</div>
					</div> -->
        </div>
        <div class="ki-radar">
          <div class="radar-wrap" id="radar_chart"></div>
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
    <div v-show="fixedNavShow" class="scroll-nav-wrap">
      <ul>
        <li class="scroll-nav" :class="activeStep == 0 ? 'cur-scroll-nav' : ''">基本信息</li>
        <li class="scroll-nav" :class="activeStep == 1 ? 'cur-scroll-nav' : ''">数据对比</li>
        <li class="scroll-nav" :class="activeStep == 2 ? 'cur-scroll-nav' : ''">评分报告</li>
        <li class="scroll-nav" :class="activeStep == 3 ? 'cur-scroll-nav' : ''">猜你喜欢</li>
      </ul>
    </div>
    <div class="box-wrap">
      <div class="box-flex">
        <div class="product-detail-wrap">
          <TabToggle :tabkey="subtab" @getActiveIdx="activeCurTab" :tabTitles="titles" :activeIdx="activeIdx"></TabToggle>
          <div id="subtab_wrap" class="subtab-wrap">
            <div v-show="isShow[0]" class="project-info">
              <div class="product-detail-subwrap product-detail-score step-jump">
                <div class="product-detail-title" id="scroll1">
                  77项专业评分
                </div>
                <div class="xx-note" v-if="projComment">
                  小貔貅点评：{{projComment}}
                </div>
                <div class="score-overview-wrap" v-if="detailInfo && detailInfo.info">
                  <div class="score-overview-item" v-for="(infoitem, index) in detailInfo.info" :key='index'>
                    <h5 class="score-overview-title">
                      {{infoitem.name}}
                    </h5>
                    <div class="score-overview-content box-wrap">
                      <div v-for="(item, ids ) in infoitem.child" class="score-overview-citem" :key="ids">
                        <div class="score-overview-citem-wrap box-wrap">
                          <div>{{item.name}}：{{item.count}}项</div>
                          <div v-if="item.waring.length > 0" class="has-danger score-overview-citem-tip" @mouseover="popDangerTip(1, index, ids)" @mouseout="popDangerTip(0, index, ids)">!
                            <div v-if="item.waring.length > 0">
                              <div v-show="curDangerTip[(index * 100 + ids)]" class="danger-tip-wrap">{{item.waring.length}}项异常</div>
                            </div>
                          </div>
                          <div v-if="item.waring.length == 0" class="no-danger score-overview-citem-tip"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center" v-if="detailInfo">
                  <a href="#scroll3" class="btn-go-report">{{detailInfo && detailInfo.num}}项评分标准报告</a>
                </div>
              </div>
              <div class="product-detail-subwrap product-detail-analysis step-jump" v-if="projData" id="scroll2">
                <div class="product-detail-title" style="margin-bottom: 10px;">
                  数据对比
                </div>
                <div class="clearfix">
                  <div class="bar-wrap box-tgap" v-for="(item, idx) in projData" :key="idx">
                    <div class="bar-wrap-content">
                      <div class="bar-echart-title">{{item.title}}</div>
                      <!-- <BarEchart ref="barchart" :allData="item.tdata"></BarEchart> -->
                    </div>
                  </div>
                </div>
              </div>
              <div class="product-detail-subwrap product-detail-report step-jump" v-if="detailInfo" id="scroll3">
                <div class="product-detail-title">
                  评分标准报告
                </div>
                <TabToggle :tabkey="stab" @getActiveIdx="activeCurTab" :tabTitles="stabTitles" :activeIdx="activestabIdx"></TabToggle>
                <div id="stab_wrap" class="stab-wrap">
                  <div v-for="(subtabitem, idx) in detailInfo.info" :key='idx'>
                    <div class="box-wrap" v-show="isStabShow[idx]">
                      <div class="box-flex" v-for="(sitem, sidx) in subtabitem.child" :key="sidx">
                        <div class="h-sheight details-title" :class="{'border-ltrds-l' : (sidx == 0), 'border-rtrds-l' : (sidx == subtabitem.child.length - 1 ),'border-lbrds-l' : ((sidx == 0) && (subtabitem.max_count == 0)), 'border-rbrds-l' : ((sidx == subtabitem.child.length - 1) && (subtabitem.max_count == 0))}">
                          {{sitem.count}}项{{sitem.name}}
                        </div>
                        <label v-if="sitem.count < subtabitem.max_count?sitem.info.length = subtabitem.max_count: ''">
                        </label>
                        <div>
                          <div class="h-sheight details-info" :class="{'border-lbrds-l' : ((sidx == 0) && (tidx == subtabitem.max_count - 1)), 'border-rbrds-l' : ((sidx == subtabitem.child.length - 1) && (tidx == subtabitem.max_count - 1))}" v-for="(titem, tidx) in sitem.info" :key="tidx">{{titem}}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-show="isShow[1]" class="project-data">
              <div v-if="projContent">
                <label v-for="(val, key, index) in projContent" :key="index">
                  <div class="data-wrap box-wrap">
                    <div class="data-title">{{key}}：</div>
                    <div class="data-content box-flex">{{val}}</div>
                  </div>
                </label>
              </div>
              <div v-else>无内容</div>
            </div>
          </div>
        </div>
        <div class="guess-you-like box-block border-rds-l step-jump" v-if="projLike">
          <h3 class="block-title">猜你喜欢</h3>
          <div class="box-wrap">
            <div class="box-flex box-project-wrap" v-for="(itm, idx) in projLike" :key="idx">
              <div class="box-project" @click="goProductDetail(itm.id)">
                <h5 class="box-project-title">{{itm.name}}</h5>
                <div class="box-wrap box-proj-content">
                  <div class="notice-fc">
                    <div class="box-num-wrap">
                      <span class="font-big">{{itm.total||""}}</span>分
                    </div>
                    <div class="font-note">评分</div>
                  </div>
                  <div class="box-flex">
                    <div class="box-num-wrap">
                      <span class="font-big">{{itm.max_icome && itm.max_icome.income}}</span>%
                    </div>
                    <div class="box-wrap font-note profit-tip">
                      <div class="box-wrap" style="margin: 0 auto;">
                        <div class="">业绩比较基准</div>
                        <div style="position:relative;">
                          <span class="profit-tip-icon" @mouseover="popProfitDetail((idx + 1), 1)" @mouseout="popProfitDetail((idx + 1), 0)">?</span>
                          <div v-show="isShowProfit[(idx+1)]" class="profit-detail-wrap">
                            <dl class="income-items-wrap">
                              <label class="income-item-wrap" v-for="(item,index) in itm.income" :key="index">
                                <dt class="income-item-name">{{item.name}}元</dt>
                                <dd class="income-item-income">{{item.income}}%</dd>
                              </label>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <div class="box-num-wrap" v-if="itm.financing">
                      <span class="font-big">{{itm.financing}}</span>个月
                    </div>
                    <div class="box-num-wrap" v-else>
                      <span>--</span>
                    </div>
                    <div class="font-note">融资期限</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="" style="width:369px;margin-left:15px;">
        <div>
          <RightBar></RightBar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RightBar from "@/components/RightBar.vue";
import TabToggle from "@/components/TabToggle.vue";
const echarts = require("echarts/lib/echarts");
import { mapState, mapMutations, mapActions } from "vuex";
const mixin = {
  computed: {
    ...mapState({
      test: "test",
      projBaseInfo: "projBaseInfo"
    })
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      getProjBaseInfo: "getProjBaseInfo"
    })
  }
};
export default {
  mixins: [mixin],
  async asyncData(store, route) {
    console.log("------------------- asyncData ---------------------");
    return store.dispatch("fetchInfo", { pid: route.params.pid });
  },
  name: "productdetail",
  components: {
    TabToggle,

    RightBar
    // BarEchart,
  },
  data() {
    return {
      titles: [{ text: "项目信息" }, { text: "项目资料" }],
      activeIdx: "0",
      subtab: "subtab",
      stab: "stab",
      activestabIdx: "0",
      isShow: [1, 0],
      isShowProfit: { 0: 0, 1: 0, 2: 0, 3: 0 },
      activeStep: "",
      activeStepTop: [],
      fixedNavShow: false,
      curDangerTip: {}
    };
  },
  mounted() {
    console.log("test---", this.test);
    this.getProjBaseInfo().then(res => {
      console.log("res::", res);
    });
    this.drawRadar("radar_chart");
    this.curDangerTip = this.getDangerTips();
    const _article = document.querySelectorAll(".step-jump");
    _article.forEach((item, index) => {
      this.activeStepTop[index] = item.offsetTop;
    });
    try {
      window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > this.activeStepTop[0]) {
          this.fixedNavShow = true;
          let i = 0;

          while (i < this.activeStepTop.length) {
            // console.log(i, this.activeStepTop[i], document.documentElement.scrollTop, this.activeStepTop[i + 1]);
            if (
              this.activeStepTop[i] <=
              document.documentElement.scrollTop <
              this.activeStepTop[i + 1]
            ) {
              this.activeStep = i;
              return;
            } else {
              i++;
            }
          }
          // while (i < this.activeStepTop.length) {
          // 	// const tempTop = document.documentElement.scrollTop;
          // 	// console.log(this.activeStepTop[i], document.documentElement.scrollTop, this.activeStepTop[i + 1]);

          // }
        } else {
          this.activeStep = "";
          this.fixedNavShow = false;
        }
        // console.log(this.activeStep);
      });
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    baseInfo() {
      return this.$store.state.projBaseInfo;
    },
    detailInfo() {
      return this.$store.state.projDetailInfo;
    },
    projData() {
      return this.$store.state.projData;
    },
    projContent() {
      return this.$store.state.projContent;
    },
    projComment() {
      return this.$store.state.projComment;
    },
    projLike() {
      return this.$store.state.projLike;
    },
    stabTitles() {
      const titles = [];
      const stabItem = this.detailInfo ? this.detailInfo.info : "";
      if (stabItem) {
        for (let i = 0, ilen = stabItem.length; i < ilen; i++) {
          titles.push({ text: stabItem[i].name });
        }
      }
      return titles;
    },
    isStabShow() {
      const isShow = [];
      const stabItem = this.detailInfo ? this.detailInfo.info : [];
      for (let i = 0, ilen = stabItem.length; i < ilen; i++) {
        const show = i == 0 ? true : false;
        isShow.push(show);
      }
      return isShow;
    },
    RadarData() {
      const randarDt = this.baseInfo ? this.baseInfo.randar : [];
      const radarData = {
        indicator: [],
        realData: [
          {
            value: [],
            name: "雷达图",
            areaStyle: {
              color: "",
              opacity: 0.6
            },
            lineStyle: {
              color: "transparent"
            }
          }
        ]
      };
      for (let i = 0, ilen = randarDt.length; i < ilen; i++) {
        radarData.indicator.push({ name: randarDt[i].name, max: 30 });
        radarData.realData[0].value.push(randarDt[i].num);
      }
      return radarData;
    }
  },
  methods: {
    goProductDetail(id) {
      location.href = "/productdetail/" + id;
    },
    getDangerTips() {
      const dangerObj = {};
      const info = this.detailInfo ? this.detailInfo.info : {};
      console.log("detailInfo", this.detailInfo, info);
      for (let i = 0; i < info.length; i++) {
        for (let j = 0; j < info[i].child.length; j++) {
          if (info[i].child[j].waring.length > 0) {
            dangerObj[i * 100 + j] = 0;
          }
        }
      }
      return dangerObj;
    },
    popDangerTip: function(isShow, index, ids) {
      this.curDangerTip[index * 100 + ids] = isShow;
    },
    popProfitDetail: function(pos, isShow) {
      this.isShowProfit[pos] = isShow;
    },
    activeCurTab: function(params) {
      switch (params.tabkey) {
        case "subtab":
          this.isShow[this.activeIdx] = false;
          this.activeIdx = params.idx;
          this.isShow[params.idx] = true;
          break;
        case "stab":
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
      // this.chart.clear();
      // let clr = function(idx) {
      // 	return {
      // 		type: 'radial',
      // 		x: 0.5,
      // 		y: 0.5,
      // 		r: 0.1,
      // 		colorStops: [{
      // 			offset: 0,
      // 			color: '#7659E6' // 0% 处的颜色
      // 		}, {
      // 			offset: idx,
      // 			color: '#AE92F4' // 100% 处的颜色
      // 		}]
      // 	};
      // };
      // const option = {
      // 	radar: {
      // 		name: {
      // 			textStyle: {
      // 				color: '#fff',
      // 				fontFamily: 'pfm',
      // 				fontSize: 12,
      // 				lineHeight: 1,
      // 			}
      // 		},
      // 		nameGap: 12,
      // 		radius: '70%',
      // 		indicator: this.RadarData ? this.RadarData.indicator : [],
      // 		// triggerEvent: true,
      // 		splitArea: {
      // 			areaStyle: {
      // 				opacity: 0.6,
      // 				color: [clr(1), clr(1), clr(1), clr(1), clr(1)],
      // 			},
      // 		},
      // 		splitLine: {
      // 			show: false,
      // 			border: 0
      // 		},
      // 		axisLine: {
      // 			show: false
      // 		},
      // 	},
      // 	series: [{
      // 		name: '',
      // 		type: 'radar',
      // 		symbolSize: 0,
      // 		data: this.RadarData.realData
      // 	}]
      // };
      // this.chart.setOption(option);
    },
    onTestClick() {
      console.log("onTestClick");
    }
  }
};
</script>
<style lang="scss">
.productdetail {
    padding: 0 24px;
    font-family: pfm;
}

.product-key-info {
    position: relative;
    margin-top: 30px;
    padding: 54px 40px;
    border-radius: 10px;
    background: url(~@/assets/images/detail-bgs.png) center center no-repeat;
    background-size: cover;

    .product-name {
        float: left;
        position: relative;
        display: inline-block;
        margin: 0 12px 0 0;
        font-weight: normal;
        font-size: 26px;
        color: #fff;
        font-family: "pfh";
    }

    .label-wrap {
        float: left;
        display: inline-block;
        margin-top: 6px;
        font-size: 16px;
        font-family: pfm;
        color: #5d5386;
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
            background: #bec8ff;
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
            height: 60px;
            line-height: 60px;
            font-family: pfnum;
            color: #f2282d;
        }

        .font-big {
            font-family: pfnum;
            font-size: 50px;
            color: #de3f38;
        }

        .font-note {
            position: relative;
            font-size: 16px;
            font-family: pfm;
            color: #de3f38;
        }

        .profit-tip {
            //padding-right: 22px;
        }

        .profit-tip-icon {
            display: block;
            width: 16px;
            height: 16px;
            margin: 3px 0 0 6px;
            font-size: 14px;
            line-height: 16px;
            border-radius: 16px;
            font-family: pfm;
            color: #fff;
            background-color: #de3f38;
            cursor: pointer;
        }

        .profit-detail-wrap {
            position: absolute;
            width: 202px;
            margin: 12px 0 0 -90px;
            z-index: 99;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
        }

        .sub-wrap {
            margin-top: 20px;
            padding: 10px 68px;
            font-size: 16px;
            border-radius: 20px;
            color: #211c34;
            background: #ebebeb;
        }

        .font-mark {
            position: relative;
            padding-left: 9px;
        }

        .font-mark:before {
            content: "";
            position: absolute;
            display: inline-block;
            width: 4px;
            height: 4px;
            top: 9px;
            left: 0;
            border-radius: 4px;
            background-color: #211c34;
        }
    }
}

.income-items-wrap {
    position: relative;
    margin: 0;
    padding: 10px 30px;
    border-radius: 5px;

    .income-item-wrap {
        display: block;
        padding: 0;
        margin: 0;
        font-family: pfm;
        font-size: 14px;
        color: #959595;
        line-height: 20px;

        .income-item-name,
        .income-item-income {
            width: 67px;
            margin: 0;
            display: inline-block;
        }

        .income-item-name {
            text-align: left;
        }

        .income-item-income {
            text-align: right;
        }
    }
}

.income-items-wrap:before {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    top: -10px;
    left: 99px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid #fff;
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
    font-size: 14px;
    color: #fff;
}

.product-detail-wrap {
    margin-bottom: 30px;
    padding: 0 12px 30px;
    background: linear-gradient(
        180deg,
        rgba(51, 44, 78, 1) 0%,
        rgba(88, 78, 122, 1) 50%,
        rgba(59, 51, 91, 1) 100%
    );
    border-radius: 10px;

    .product-detail-subwrap {
        padding: 30px 24px;
        margin: 0 0 20px 0;
        border-radius: 20px;

        .product-detail-title {
            position: relative;
            margin: 0 0 35px 0;
            padding: 0 0 0 14px;
            font-size: 22px;
            font-family: pfh;
        }

        .product-detail-title:before {
            content: "";
            position: absolute;
            width: 4px;
            height: 18px;
            top: 6px;
            left: 0;
            background-color: #fff;
        }
    }

    .product-detail-score {
        background-color: #5d5386;
    }

    .product-detail-analysis {
        padding-left: 12px;
        padding-right: 12px;
        background-color: #332c4e;

        .product-detail-title {
            padding-left: 26px;
        }

        .product-detail-title:before {
            left: 12px;
        }
    }

    .product-detail-report {
        background-color: #4d407d;
    }

    .xx-note {
        margin: 0 18px 40px;
        padding: 10px 30px;
        font-size: 12px;
        border-radius: 27px;
        background-color: #9c91c6;
    }

    .danger-tip-wrap {
        position: absolute;
        margin-top: 14px;
        width: 82px;
        height: 20px;
        left: -33px;
        vertical-align: middle;
        line-height: 22px;
        font-size: 12px;
        font-family: pfm;
        background-color: #fff;
        border-radius: 3px;
        z-index: 99;
    }

    .danger-tip-wrap:before {
        content: "";
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        top: -6px;
        left: 36px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 6px solid #fff;
    }
}

.subtab {
    li {
        margin: 30px 62px 30px 28px;
        line-height: 38px;
        font-size: 16px;
        vertical-align: middle;
        cursor: pointer;
    }

    li.tab-active {
        font-family: pfh;
        color: #bec8ff;
    }
}

.score-overview-title {
    margin: 0 0 20px 0;
    padding: 0;
    font-size: 18px;
}

.score-overview-wrap {
    margin: 0 26px;
    font-size: 16px;
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

score-overview-citem-wrap {
    position: relative;
}

.score-overview-citem-tip {
    position: relative;
    width: 14px;
    height: 14px;
    margin-top: 4px;
    margin-left: 10px;
    font-size: 14px;
    vertical-align: middle;
    font-family: pfh;
    text-align: center;
    border-radius: 14px;
}

.no-danger {
    background: url(~@/assets/images/right-icon.png) no-repeat center center;
    background-size: contain;
    color: transparent;
}

.has-danger {
    background-color: #fff;
    line-height: 14px;
    color: #d0021b;
    cursor: pointer;
}

.btn-go-report {
    position: relative;
    display: block;
    font-size: 14px;
}

.btn-go-report:after {
    content: "\00BB";
    position: absolute;
    width: 6px;
    height: 7px;
    margin-left: 6px;
    font-size: 14px;
}

.bar-wrap {
    float: left;
    width: 50%;
    min-width: 300px;
    padding: 0 5px;
    box-sizing: border-box;
}

.bar-wrap-content {
    padding: 30px 0 36px 0;
    border-radius: 20px;
    background-color: #211c34;
}

.bar-echart-title {
    padding-left: 40px;
    color: #fff;
    font-family: pfh;
    font-size: 18px;
    text-align: left;
}

.bar-echart-wrap {
    width: 100%;
    height: 390px;
}

.box-tgap {
    margin-top: 20px;
}

.stab {
    li {
        margin: 0 32px 30px 0;
        line-height: 16px;
        font-size: 16px;
        vertical-align: middle;
        cursor: pointer;
    }

    li.tab-active {
        font-family: pfh;
        color: #bec8ff;
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
    font-size: 14px;
    color: #211c34;
    background-color: #e4e4e4;
}

.details-info {
    font-size: 12px;
    color: #211c34;
}

.box-flex .details-info:nth-child(odd) {
    background-color: #fff;
}

.box-flex .details-info:nth-child(even) {
    background-color: #f2f2f2;
}

.data-wrap {
    margin: 0 24px 0 24px;
    padding: 26px 20px 26px 0;
    line-height: 32px;
    border-bottom: 1px solid #736b93;
}

.data-wrap:first-child {
    padding-top: 0;
}

.data-wrap:last-child {
    border-bottom: 0;
}

.data-title {
    width: 140px;
    font-size: 18px;
    font-family: pfh;
}

.data-content {
    font-size: 16px;
    font-family: pfm;
}

.box-block {
    padding: 30px 12px;
    background-color: #fff;
}

.block-title {
    margin: 0;
    padding: 0 0 22px 12px;
    font-family: pfh;
    font-size: 22px;
    color: #211c34;
    font-weight: normal;
}

.box-project {
    padding: 30px 12px;
    border: 1px solid #ececec;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
}

.box-project-title {
    margin: 0;
    padding-bottom: 30px;
    color: #332c4e;
    font-size: 15px;
    font-family: pfh;
    text-align: center;
    font-weight: normal;
}

.box-project-wrap {
    margin-right: 10px;
}

.box-project-wrap:last-child {
    margin-right: 0;
}

.box-proj-content {
    font-size: 10px;
    font-family: pfm;
    color: #332c4e;

    .box-num-wrap {
        font-family: pfh;
    }

    .box-num-wrap {
        height: 26px;
        //line-height: 26px;
    }

    .font-big {
        font-size: 22px;
        font-family: pfnum;
    }

    .font-note {
        margin-top: 6px;
    }

    .profit-tip {
        //padding-right: 22px;
    }

    .profit-tip-icon {
        display: block;
        width: 12px;
        height: 12px;
        margin: 3px 0 0 2px;
        font-size: 12px;
        line-height: 12px;
        border-radius: 12px;
        font-family: pfm;
        color: #fff;
        background-color: #aaa;
        cursor: pointer;
    }

    .profit-detail-wrap {
        position: absolute;
        width: 202px;
        margin: 12px 0 0 -90px;
        z-index: 99;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
    }
}

.scroll-nav-wrap {
    width: 1200px;
    padding: 24px;
    position: fixed;
    top: 0;
    background-color: #fff;
    color: #211c34;
    z-index: 101;
    box-sizing: border-box;
}

.scroll-nav {
    padding: 12px 40px;
    font-size: 18px;
    //color: #211C34;
}

.cur-scroll-nav {
    font-family: pfh;
    color: #de3f38;
}
</style>