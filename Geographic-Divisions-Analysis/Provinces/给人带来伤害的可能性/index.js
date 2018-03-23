window.onload=function (){

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
for(var k of data) {
    // this.console.log(k[5]+" "+k[7]);
    if(k[9]==1) {
        this.console.log(k[5]);
    }
    if(k[9]<=0)
        continue;
    for(var x of map_data) {
        if(x.name===k[5]) {
            x.value=x.value+6-parseInt(k[9])+10000;
            break;
        }
    }
}
for(var x of map_data) {
    //console.log(x.name+" "+x.value);
    x.value=(x.value%10000)/(x.value/10000);
    console.log(x.name+" "+x.value);
    x.value=x.value*x.value*x.value*15;
    // x.value*=200;
    //console.log(x.name+" "+x.value);
}
var xz = 0;
for(var x of map_data) {
  if(x.name=='青海'||x.name=='新疆'||x.name=='甘肃') {
      xz+=0.24*x.value;
  }
  if(x.name=='西藏'||x.name=='宁夏') {
      xz+=0.14*x.value;
  }
}
for(var x of map_data) {
  if(x.name=='西藏'||x.name=='宁夏')
    x.value=xz;
}
var tj=0;
for(var x of map_data) {
    if(x.name=='北京'||x.name=='河北') {
        tj+=0.4*x.value;
    }
    if(x.name=='天津') {
        tj+=0.2*x.value;
    }
  }
  for(var x of map_data) {
    if(x.name=='天津')
      x.value=tj;
  }
// mapChart的配置
var option = {
    title: {
        //text: '不同地域对AI了解程度图',
        text: '不同地域对人工智能产品出现意外而给人带来伤害的可能性看法图',
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
        text: ['可能大', '可能性小'],           // 文本，默认为数值文本
        calculable: true,
        inRange: {
            color: ['white','yellow', 'orangered']
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
