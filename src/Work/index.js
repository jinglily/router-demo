import React from 'react';
import echarts from 'echarts';
class Work extends React.Component {
  componentDidMount(){
    var myChart1 = echarts.init(document.getElementById('work-top'));
    var myChart2 = echarts.init(document.getElementById('work-bot'));

    var option1 = {
        title : {
            text: '我的专业技能',
            color:'#006064',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            top: '6%',
            data: ['HTML','CSS','React','JavaScript','Webpack']
        },
        series : [
            {
                name: '技能展示',
                type: 'pie',
                radius : '55%',
                center: ['50%', '65%'],
                data:[
                    {value:95, name:'HTML'},
                    {value:95, name:'CSS'},
                    {value:85, name:'React'},
                    {value:90, name:'JavaScript'},
                    {value:75, name:'Webpack'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    myChart1.setOption(option1);
    var option2 = {
          title : {
              text: '更多技能',
              color:'#006064',
              x:'center'
          },
          color: ['#006064'],
          tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis : [
              {
                  type : 'category',
                  data : ['Ajax', 'Jquery', 'Nodejs', 'bootstrap', 'material-ui','echarts'],
                  axisTick: {
                      alignWithLabel: true
                  }
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {

                  type:'bar',
                  barWidth: '50%',
                  data:[95, 95, 80, 90, 70, 85 ]
              }
          ]
      };
  myChart2.setOption(option2);
  }
  render () {
    return(
      <div style={{width:"100%",margin:'0 auto'}}>
        <div id='work-top' style={{width:"100%",height:'400px',margin:'0 auto'}}></div>
        <div id='work-bot' style={{width:"100%",height:'400px',margin:'0 auto'}}></div>

      </div>
    )
  }
}

export default Work;
