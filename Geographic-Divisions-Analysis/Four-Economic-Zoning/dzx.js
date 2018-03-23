function sumDongBei(data) {
    var tot = 0;
    for (var x of data) {
      if (x.name === '黑龙江'&& x.value>0)  {
        tot+=x.value*0.25
      }
        if(x.name === '吉林'&& x.value>0)  {
          tot+=0.35*x.value;
        }
        if(x.name === '辽宁'&& x.value>0)  {
          tot+=0.2*x.value;
        }
        if(x.name === '内蒙古'&& x.value>0)  {
          tot+=0.2*x.value;
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
        tot+=0.1*x.value;
      }
      if(x.name === '河北'&& x.value>0)  {
          tot+=0.1*x.value;
      }
      if(x.name === '山东'&& x.value>0)  {
        tot+=0.1*x.value;
      }
      if(x.name === '江苏'&& x.value>0)  {
        tot+=0.1*x.value;
      }
      if(x.name === '上海'&& x.value>0)  {
        tot+=0.1*x.value;
      }
      if( x.name === '浙江'&& x.value>0)  {
        tot+=0.1*x.value;
      }
      if( x.name === '福建'&& x.value>0)  {
        tot+=0.1*x.value;
      }
      if(x.name === '广东'&& x.value>0)  {
        tot+=0.1*x.value;
      }
      if(x.name === '海南'&& x.value>0)  {
        tot+=0.05*x.value;
      }
      if(x.name === '天津'&& x.value>0)  {
          tot+=0.05*x.value;
        }
      if(x.name === '香港'&& x.value>0)  {
        tot+=0.05*x.value;
      }
      if(x.name === '澳门'&& x.value>0)  {
        tot+=0.05*x.value;
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
          tot+=0.167*x.value;
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
        tot+=0.1*x.value;
      }
      if(x.name === '甘肃'&& x.value>0)  {
          tot+=0.1*x.value;
        }
      if(x.name === '宁夏' ||
        x.name === '新疆' ||
        x.name === '青海' ||
        x.name === '西藏'&& x.value>0)  {
          tot+=0.025*x.value;
        }
        if(x.name === '四川'&& x.value>0)  {
          tot+=0.2*x.value;
        }
        if(x.name === '重庆'&& x.value>0)  {
          tot+=0.1*x.value;
        }
        if(x.name === '贵州'&& x.value>0)  {
          tot+=0.15*x.value;
        }
        if(x.name === '云南'&& x.value>0)  {
          tot+=0.1*x.value;
        }
        if(x.name === '广西'&& x.value>0)  {
          tot+=0.15*x.value;
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
  