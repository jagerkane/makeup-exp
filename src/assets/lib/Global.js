import axios from 'axios';
//当前web地址
var url = document.domain;
//var url = location.hostname;
var apiurl = '';
switch(url){
	//正式
    case 'dreamlandweb.jinglianwang.cn':
        apiurl = 'https://dreamland-api.jinglianwang.cn/index.php?';
        break;
    //测试
    case 'dreamland-admin.jinglian.com':
        apiurl = 'http://dreamland-api.jinglian.com/index.php?';
        break;
    //牛奔
    case 'admin.dreamland.net':
        apiurl = 'http://api.dreamland.net/index.php?';
        break;
    case 'dreamland-admin.chinarcsd.com':
    	apiurl ='https://dreamland-api.chinarcsd.com/index.php?';//预发布
    	break;
}

//权限内容 -后台控制器类型
var authority = {
	CARD_NEW_ORDER:"card-new-order",//订单管理
 	CARD_INST_ITEM:"card-inst-item",// 实体卡功能
 	CARD_ACTIVITY: "card-activity",//活动列表及详情，成团等功能
 	ACITVITY_REFUND_ORDER:"activity-refund-order",//退款列表详情
 	CARD_USER:"card-user",//用户管理
 	CARD_TEMPLATE:"card-template",//卡片模板管理功能
 	CARD_CONTENT_ITEM:"card-content-item",//卡片商品管理功能 
 	ACTIVITY_REFUND_ORDER:"activity-refund-order",//退款功能
	CARD_GIFT_LIST:"card-gifts",//赠品列表
}

var Global = {
	//作者:梅雪香
	//日期:2006-7-29
	userAuthority:null,//用户权限列表
	api:apiurl,
	// api:'https://dreamland-api.jinglianwang.cn/index.php?',//正式服务器
	api:'https://dreamland-api.chinarcsd.com/index.php?',//预发布
	// api:'http://api.fancytrip.com/index.php?',
	authority:authority,
	fileType:{ image:1,audio:3,video:4},
	UploadFile2Server:function(_url,_file,_callback){
		if(_file == null){
			console.log("UploadFile2Server: error file is null");
			return;
		}
		var oData = new FormData();
        oData.append('file',_file,_file.name);
        console.log(oData.get('file'));
		let config = {
    		headers:{'Content-Type':'multipart/form-data'}
 		 };  //添加请求头
       	axios.post(this.api+"r=home-stay-host/static&expand=upLoadFile",oData,config)
		.then(function(response){
			console.log(response.data);
			if(_callback!=null){
				_callback(response.data);
			}
		})
		.catch(function(e){
			console.log(e);
		});
	},
	DeleteFile:function(_url,_callback){
    	if(_url==null ||_url.length<=0){
    		return;
    	}
    	var oData = new FormData();
        oData.append('url',_url);
    	axios.post(this.api+"r=home-stay-host/static&expand=deleteFile",oData,{
    		headers:{'Content-Type':'multipart/form-data'}
 		})
		.then(function(response){
			console.log(response.data);
			// if(response.data !=null){
			// 	console.log("图片删除成功");
			// }
			if(_callback!=null){
				_callback(response);
			}
		})
		.catch(function(e){
			console.log(e);
		});
    },
	getCookieVal:function(_key){
	    let arr,reg=new RegExp("(^| )"+_key+"=([^;]*)(;|$)");
	    if(arr=document.cookie.match(reg))
	        return unescape(arr[2]); 
	    else 
	        return null; 
 	},
	   
};
export default Global;