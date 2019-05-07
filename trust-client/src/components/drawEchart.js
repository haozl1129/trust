import echarts from 'echarts'

const drawEchart = function(Vue) {
    Object.defineProperties(Vue.prototype, {
        $chart: {
            get() {
                return {
                    drawRadar: function(id, radarData) {
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
                                indicator: radarData.indicator,
                                // triggerEvent: true,
                                splitArea: {
                                    areaStyle: {
                                        opacity: 0.6,
                                        color: [clr(0.1), clr(0.2), clr(0.3), clr(0.4), clr(0.5)],
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
                                data: radarData.realData
                            }]
                        };
                        this.chart.setOption(option);
                    }
                }
            }
        }
    })
}

export default {
    drawEchart
}