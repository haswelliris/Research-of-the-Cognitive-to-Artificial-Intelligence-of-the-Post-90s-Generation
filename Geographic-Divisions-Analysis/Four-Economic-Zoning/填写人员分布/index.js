function sumDongBei(data) {
    var tot = 0;
    for (var x of data) {
      if (x.name === '黑龙江'&& x.value>0)  {
        tot+=x.value
      }
        if(x.name === '吉林'&& x.value>0)  {
          tot+=x.value;
        }
        if(x.name === '辽宁'&& x.value>0)  {
          tot+=x.value;
        }
        if(x.name === '内蒙古'&& x.value>0)  {
          tot+=x.value;
      }
    }
    return tot;
  }
  
  function setDongBei(data,num) {
    for (var x of data) {
      if (x.name === '黑龙江' ||
        x.name === '吉林' ||
        x.name === '辽宁' ||
        x.name === '内蒙古') {
          x.value=num;
      }
    }
  }
  
  function sumDong(data) {
    var tot = 0;
    for (var x of data) {
      if (x.name === '北京'&& x.value>0)  {
        tot+= x.value;
      }
      if(x.name === '河北'&& x.value>0)  {
          tot+= x.value;
      }
      if(x.name === '山东'&& x.value>0)  {
        tot+= x.value;
      }
      if(x.name === '江苏'&& x.value>0)  {
        tot+= x.value;
      }
      if(x.name === '上海'&& x.value>0)  {
        tot+= x.value;
      }
      if( x.name === '浙江'&& x.value>0)  {
        tot+= x.value;
      }
      if( x.name === '福建'&& x.value>0)  {
        tot+= x.value;
      }
      if(x.name === '广东'&& x.value>0)  {
        tot+= x.value;
      }
      if(x.name === '海南'&& x.value>0)  {
        tot+= x.value;
      }
      if(x.name === '天津'&& x.value>0)  {
          tot+= x.value;
        }
      if(x.name === '香港'&& x.value>0)  {
        tot+= x.value;
      }
      if(x.name === '澳门'&& x.value>0)  {
        tot+= x.value;
      }
    }
    return tot;
  }
  
  function setDong(data,num) {
    for (var x of data) {
      if (x.name === '北京' ||
        x.name === '河北' ||
        x.name === '山东' ||
        x.name === '江苏' ||
        x.name === '上海' ||
        x.name === '浙江' ||
        x.name === '福建' ||
        x.name === '广东' ||
        x.name === '海南' ||
        x.name === '天津' ||
        x.name === '香港' ||
        x.name === '澳门') {
          x.value=num;
      }
    }
  }
  
  function sumZhong(data) {
    var tot = 0;
    for (var x of data) {
      if ((x.name === '山西' ||
        x.name === '河南' ||
        x.name === '安徽' ||
        x.name === '湖北' ||
        x.name === '湖南' ||
        x.name === '江西')&& x.value>0)  {
          tot+= x.value;
      }
    }
    return tot;
  }
  
  function setZhong(data,num) {
    for (var x of data) {
      if (x.name === '山西' ||
        x.name === '河南' ||
        x.name === '安徽' ||
        x.name === '湖北' ||
        x.name === '湖南' ||
        x.name === '江西') {
          x.value=num;
      }
    }
  }
  
  function sumXi(data) {
    var tot = 0;
    for (var x of data) {
      if (x.name === '陕西'&& x.value>0)  {
        tot+= x.value;
      }
      if(x.name === '甘肃'&& x.value>0)  {
          tot+= x.value;
        }
      if(x.name === '宁夏' ||
        x.name === '新疆' ||
        x.name === '青海' ||
        x.name === '西藏'&& x.value>0)  {
          tot+= x.value;
        }
        if(x.name === '四川'&& x.value>0)  {
          tot+= x.value;
        }
        if(x.name === '重庆'&& x.value>0)  {
          tot+= x.value;
        }
        if(x.name === '贵州'&& x.value>0)  {
          tot+= x.value;
        }
        if(x.name === '云南'&& x.value>0)  {
          tot+= x.value;
        }
        if(x.name === '广西'&& x.value>0)  {
          tot+=x.value;
      }
    }
    return tot;
  }
  
  function setXi(data,num) {
    for (var x of data) {
      if (x.name === '陕西' ||
        x.name === '宁夏' ||
        x.name === '甘肃' ||
        x.name === '新疆' ||
        x.name === '青海' ||
        x.name === '西藏' ||
        x.name === '四川' ||
        x.name === '重庆' ||
        x.name === '贵州' ||
        x.name === '云南' ||
        x.name === '广西') {
          x.value=num;
      }
    }
  }
  
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
    //this.console.log(k[5]);
    for(var x of map_data) {
        if(x.name===k[5]) {
            x.value++;
            break;
        }
    }
}
// for(var x of map_data) {
//     console.log(x.name+" "+x.value);
//     if(x.value>=80&&x.value<180) {
//         x.value=x.value*1.05+120
//     }
//     if(x.value>=10&&x.value<80) {
//         x.value=x.value*1.2+120
//     }
//     if(x.value>0&&x.value<10)
//     x.value=x.value*10+30;
// }
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
for(var x of map_data) {
    x.value=Math.sqrt(x.value)*Math.sqrt(Math.sqrt(x.value))*4.5;
}
// mapChart的配置
var option = {
    title: {
        text: '东中西部地区问卷填写数量分布图',
        subtext: '',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },

    visualMap: {
        min: 0,
        max: 600,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],           // 文本，默认为数值文本
        calculable: true
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
