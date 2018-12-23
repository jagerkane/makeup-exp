import Vue from 'vue';

// 引入弹出文字说明框的具体数据
// import knowDatas from './../data/alertKnow.json';
// 引入canvas验证码用于全局
// import canvasCode from './../assets/lib/canvasCode';

// // 引入全局dialog组件
// import $dialog from './../components/dialog/index.js'

var methods = {

  // canvasCode,

  // $dialog,

  jsonSort: function (data, key) { //数组对象data按照key值进行排序
    for (let j = 1, jl = data.length; j < jl; j++) {
      let temp = data[j],
        val = temp[key],
        i = j - 1;
      while (i >= 0 && data[i][key] > val) {
        data[i + 1] = data[i];
        i = i - 1;
      }
      data[i + 1] = temp
    }
    return data
  },
  getActivityOrderStatusStr:function(_status){
      let str = "未知";
      if(_status != null){
        _status = parseInt(_status) ;
        if(_status== 0){
          str = "报名成功";
        }else if(_status == 1){
          str = "退订";
        }else if(_status == 2){
          str = "完成";
        }else if (_status == 3){
          str = "退订中"
        }
      }
      return str;
  },
  getActivityOrderConsumptionTypeStr:function(status){
      let str = "未知";
      if(status != null){
        if(status == "1" || status == 1){
          str = "次卡";
        }else if(status == "2" || status == 2){
          str = "付费";
        }else if (status == "3" || status == 3){
          str = "赠送";
        }
      }
      return str;
  },
  formatDateTime:function(timeStamp) { 
    if (timeStamp == null){
      return "时间未知";
    }
    var date = new Date();
    date.setTime(timeStamp * 1000);
    var y = date.getFullYear();    
    var m = date.getMonth() + 1;    
    m = m < 10 ? ('0' + m) : m;    
    var d = date.getDate();    
    d = d < 10 ? ('0' + d) : d;    
    var h = date.getHours();  
    h = h < 10 ? ('0' + h) : h;  
    var minute = date.getMinutes();  
    var second = date.getSeconds();  
    minute = minute < 10 ? ('0' + minute) : minute;    
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;    
  },
  getTimeStr:function(_dateStr){
    var str = "未知";
    if(_dateStr != null &&  typeof _dateStr =="string"){
      if(_dateStr.length == 19){
        var year = _dateStr.substring(0,4);
        var month = _dateStr.substring(4,6);
        var day = _dateStr.substring(6,8);
        str = year+"-"+month+"-"+day;
      }
    }
    return str;
  },
  getAllTimeStr:function(_dateStr){
      var str = "未知";
      if(_dateStr != null &&  typeof _dateStr =="string"){
          if(_dateStr.length == 19){
              var year = _dateStr.substring(0,4);
              var month = _dateStr.substring(4,6);
              var day = _dateStr.substring(6,8);
              var hour = _dateStr.substring(8,10);
              var minute = _dateStr.substring(10,12);
              var sec = _dateStr.substring(12,14);
              str = year+"-"+month+"-"+day+' '+hour+':'+minute+':'+sec;
          }
      }
      return str;
  } ,
  //权限检查，是否有该功能
  checkAuthority:function(_authority,_lst){
    if(_lst == null)
      return true;
    if(_lst.length<=0){
      alert("未获得该权限，无法访问功能");
      return false;
    }
    for (var i = 0; i < _lst.length; i++){
      if(_lst[i]== _authority){
        return true;
      }
    }
    alert("未获得该权限，无法访问功能");
    return false;
  },
  GetRentType:function(_type){
    var str = "未知";
    if(_type == null)
      return str;
    if(_type == 0){
      str = "整租/单间";
    }else if(_type == 1){
      str = "整租";
    }else if(_type == 2){
      str = "单间";
    }
    return str;
  },
  GetRoomType:function(room){
    if(room == null){
      return "未知";
    }
    return room.room+"室"+room.hall+"厅"+room.wc+"卫";
  },
  GetHomeStatusInfo:function(state){
    var str="未知";
    if(state !=null){
      if(state ==0){
        str ="正常";
      }else{
        str="禁用";
      }
    }
    return str;
  },
  // alertKnow: function (val) { //弹窗文字说明框
  //   for (var i = 0; i < knowDatas.length; i++) {
  //     if (knowDatas[i].name == val) {
  //       this.knowTit = knowDatas[i].title;
  //       this.knowCon = knowDatas[i].content;
  //       this.knowShow = true;
  //     }
  //   }
  // },
  // textFocus: function () {    // 意见反馈--获取焦点时
  //   if (this.textArea === this.defaultVal) this.textArea = '';
  //   this.isDefault = false
  // },
  // textBlur: function () {     // 意见反馈--离开焦点时
  //   if (this.textArea === '') {
  //     this.isDefault = true;
  //     this.textArea = this.defaultVal
  //   }
  // },
  // changeText: function () {   // 意见反馈--文本变化时
  //   if (this.textArea !== this.defaultVal) {
  //     if (this.textArea.length <= 200) this.textNum = 200 - this.textArea.length;
  //     else this.textArea = this.textArea.substring(0, 200);
  //   }
  // },
  goAgreem: function (href) {
    this.$router.push(href)
  },
  getSex:function(sex){
    var str = "未知";
    if(sex!=null && typeof sex =="number"){
        switch(sex) {
          case 0:  
            break;
          case 1:
            str = "男";
            break;
          case 2:
            str = "女";
            break;
        }
    }
    return str;
  },
  // 全局校验输入字符串(例:用户名、密码、意见反馈等)
  checkRE: {
    phone: /^[1][3578][0-9]{9}$/,
    pwd: /^[\d\D]{6,12}$/,
    imgcode: /^[A-Za-z0-9]{4,6}$/
  }
}

export default methods;
