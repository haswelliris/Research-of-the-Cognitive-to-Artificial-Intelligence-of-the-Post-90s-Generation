window.onload = function () {

  // 初始化echarts示例mapChart
  var mapChart = echarts.init(document.getElementById('map-wrap'));
  // 原始map数据
  var map_data = [
    { name: '北京', value: 0 },
    { name: '天津', value: 0 },
    { name: '上海', value: 0 },
    { name: '重庆', value: 0 },
    { name: '河北', value: 0 },
    { name: '河南', value: 0 },
    { name: '云南', value: 0 },
    { name: '辽宁', value: 0 },
    { name: '黑龙江', value: 0 },
    { name: '湖南', value: 0 },
    { name: '安徽', value: 0 },
    { name: '山东', value: 0 },
    { name: '新疆', value: 0 },
    { name: '江苏', value: 0 },
    { name: '浙江', value: 0 },
    { name: '江西', value: 0 },
    { name: '湖北', value: 0 },
    { name: '广西', value: 0 },
    { name: '甘肃', value: 0 },
    { name: '山西', value: 0 },
    { name: '内蒙古', value: 0 },
    { name: '陕西', value: 0 },
    { name: '吉林', value: 0 },
    { name: '福建', value: 0 },
    { name: '贵州', value: 0 },
    { name: '广东', value: 0 },
    { name: '青海', value: 0 },
    { name: '西藏', value: 0 },
    { name: '四川', value: 0 },
    { name: '宁夏', value: 0 },
    { name: '海南', value: 0 },
    { name: '台湾', value: 0 },
    { name: '香港', value: 0 },
    { name: '澳门', value: 0 }
  ];
  for (var k of data) {
    //this.console.log(k[5]+typeof(-k[6]));
    if (k[6] <= 0)
      continue;
    for (var x of map_data) {
      if (x.name === k[5]) {
        x.value = x.value + 6 - k[6] + 10000;
        break;
      }
    }
  }


  for (var x of map_data) {
    x.value = (x.value % 10000) / (x.value / 10000);
    // x.value = x.value * x.value * x.value * x.value * x.value*1.7;
    //x.value*=250;
    console.log(x.name + " " + x.value);
  }
  var dongbei = sumDongBei(map_data);
  this.console.log("东北 "+dongbei);
  setDongBei(map_data,dongbei);
  var zhong = sumZhong(map_data);
  this.console.log("中部 "+zhong);
  setZhong(map_data,zhong);
  var xi = sumXi(map_data);
  this.console.log("西部 "+xi);
  setXi(map_data,xi);
  var dong = sumDong(map_data);
  this.console.log("东部 "+dong);
  setDong(map_data,dong);

  for (var x of map_data) {
    x.value = x.value * x.value * x.value * x.value * x.value*1.4;
    // x.value*=200;
  }
  // mapChart的配置
  var option = {
    title: {
      //text: '不同地域对AI了解程度图',
      text: '东中西部对AI了解程度相对差异图',
      subtext: '',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },

    visualMap: {
      min: 0,
      max: 1000,
      left: 'left',
      top: 'bottom',
      text: ['非常了解', '完全不了解'],           // 文本，默认为数值文本
      calculable: true,
      inRange: {
        color: ['white', 'yellow', 'red']
      }
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'area',
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
          normal: {
            show: true
          },
          emphasis: {
            show: true
          }
        },
        data: map_data
      }
    ]
  };

  mapChart.setOption(option);
}
