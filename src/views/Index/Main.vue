<template>
  <div class="main">
    <div class="title">
      <div></div>
      <p>实时统计</p>
    </div>
    <ul class="today">
      <li>
        <div class="top">今日付款订单</div>
        <div class="center">
          <img src="../../../public/img/icon01.png" alt="" />
          <span>105</span>
        </div>
        <div class="bottom"><span>昨日付款订单</span><span>89</span></div>
      </li>
      <li>
        <div class="top">今日付款金额</div>
        <div class="center">
          <img src="../../../public/img/icon02.png" alt="" />
          <span>Y32654</span>
        </div>
        <div class="bottom"><span>昨日付款订单</span><span>￥12073</span></div>
      </li>
      <li>
        <div class="top">今日浏览量</div>
        <div class="center">
          <img src="../../../public/img/icon03.png" alt="" />
          <span>7568</span>
        </div>
        <div class="bottom"><span>昨日付款订单</span><span>6580</span></div>
      </li>
      <li>
        <div class="top">今日转换率</div>
        <div class="center">
          <img src="../../../public/img/icon04.png" alt="" />
          <span>0.23</span>
        </div>
        <div class="bottom"><span>昨日付款订单</span><span>0.22</span></div>
      </li>
    </ul>
    <div id="TodayLine" ref="container"></div>
    <div class="matters">
      <div class="title">
        <div></div>
        <p>待办事项</p>
      </div>
      <ul>
        <li>
          <div class="img">
            <img src="../../../public/img/pic01.png" alt="" />
          </div>
          <p>已提交</p>
        </li>
        <li>
          <div class="img">
            <img src="../../../public/img/pic02.png" alt="" />
          </div>
          <p>待出库</p>
        </li>
        <li>
          <div class="img">
            <img src="../../../public/img/pic03.png" alt="" />
          </div>
          <p>待收货</p>
        </li>
        <li>
          <div class="img">
            <img src="../../../public/img/pic04.png" alt="" />
          </div>
          <p>全部订单</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main {
  flex: 1;
  height: 100%;
  margin-left: 16px;
  margin-top: 16px;
  background-color: #fff;
  > .title {
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 2px solid #e2edfc;
    > div {
      width: 2px;
      height: 18px;
      background-color: #9ec5f4;
      margin-left: 17px;
    }
    p {
      padding-left: 10px;
      font-size: 16px;
      color: black;
      line-height: 50px;
    }
  }
  .today {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    margin-right: 72px;
    margin-left: 16px;
    li {
      width: 200px;
      height: 90px;
      padding: 29px 33px 31px 34px;
      border-radius: 5px;
      color: white;
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      > div {
        width: 100%;
      }
      .top {
        p {
          color: white;
        }
      }
      .center {
        display: flex;
        justify-content: space-between;
        span {
          font-size: 24px;
        }
      }
      .bottom {
        display: flex;
        justify-content: space-between;
      }
      &:nth-child(1) {
        background-color: #c971f1;
      }
      &:nth-child(2) {
        background-color: #3f6cf3;
      }
      &:nth-child(3) {
        background-color: #ff836b;
      }
      &:nth-child(4) {
        background-color: #11b6c9;
      }
    }
  }
  #TodayLine {
    width: 100%;
    height: 235px;
    margin-top: 20px;
  }
  .matters {
    .title {
      display: flex;
      align-items: center;
      height: 50px;
      > div {
        width: 2px;
        height: 18px;
        background-color: #9ec5f4;
        margin-left: 17px;
      }
      p {
        padding-left: 10px;
        font-size: 16px;
        color: black;
        line-height: 50px;
      }
    }
    > ul {
      display: flex;
      justify-content: space-around;
      height: 243px;
      margin-left: 16px;
      margin-right: 72px;
      box-sizing: border-box;
      border: 1px solid #70affd;
      li {
        width: 104px;
        margin-top: 50px;
        &:nth-child(1) {
          .img {
            background-color: #dae5fc;
          }
        }
        &:nth-child(2) {
          .img {
            background-color: #ffeae0;
          }
        }
        &:nth-child(3) {
          .img {
            background-color: #ebf4f6;
          }
        }
        &:nth-child(4) {
          .img {
            background-color: #e1e0ff;
          }
        }
        .img {
          height: 104px;
          border-radius: 5px;
          position: relative;
          img {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto;
          }
        }
        p {
          font-size: 24px;
          text-align: center;
          color: #616265;
          margin-top: 37px;
        }
      }
    }
  }
}
</style>

<script>
import * as ec from "echarts";
export default {
  name: "ec",
  data() {
    return {
      echartsinstance: null,
      options: {
        color: ["blue", "#ec7618"],
        // 标题设置
        tooltip: {}, //提示框
        legend: {
          // 数据标识
          data: ["去年", "今年"],
          top: "5%",
          left: "80%",
        },
        // x轴标记
        xAxis: {
          type: "category",
          boundaryGap: false,
          width: "100%",
          axisTick: {
            //y轴刻度线
            show: false,
          },
          axisLine: {
            // x轴线的颜色以及宽度
            show: true,
            lineStyle: {
              color: "blue",
              type: "solid",
            },
          },
          data: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
          ],
        },
        // y轴标记
        yAxis: {
          axisLine: {
            //y轴
            show: true,
            lineStyle: {
              color: "blue", //更改坐标轴颜色
            },
          },
          axisTick: {
            //y轴刻度线
            show: false,
          },
          splitLine: {
            //网格线
            show: false,
          },
        },
        // 数据系列
        series: [
          {
            name: "去年",
            type: "line",
            // stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 1,
            },
            areaStyle: {
              textStyle: {
                //文字颜色
                color: "#30ceee",
                //字体大小
                fontSize: 18,
                fontWeight: 500,
              },
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#3e96ff",
                  },
                  {
                    offset: 1,
                    color: "rgba(255, 255, 255,0.1)",
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            data: [810, 620, 860, 630, 810, 670, 840, 713, 890, 619, 819, 660],
          },
          {
            name: "今年",
            type: "line",
            smooth: true,
            lineStyle: {
              width: 1,
            },
            data: [410, 820, 990, 790, 600, 790, 990, 913, 1000, 819, 619, 860],
          },
        ],
      },
    };
  },
  mounted() {
    this.echartsinstance = ec.init(this.$refs.container);
    this.echartsinstance.setOption(this.options);
  },
  watch: {
    options() {
      this.echartsinstance.setOption(this.options);
    },
  },
};
</script>