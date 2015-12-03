//-----------ie下屏蔽 console 操作------------//
if(-1!=navigator.userAgent.toLocaleLowerCase().indexOf('trident')){//IE内核下自定义console方法
window.console = {};
window.console.log = function(){};
window.console.dir = function(){};
}
var _paq = _paq || [];//日志专用
var logUrl = "http://track.uc.cn:9080/";//日志请求地址
var ParamCountArr = [];
$(function(){
 	var createScript = document.createElement('script');
 	var nowScript = document.getElementById('nowScript'); 
 	createScript.type='text/javascript'; createScript.defer=true; createScript.async=true; 
 	createScript.src=logUrl+'uaest.js';
 	nowScript.parentNode.insertBefore(createScript,nowScript);
})



//所有要记日志的点击触发记日志方法
$(function(){
    setTimeout(function(){
        $("[urltrue=true]").bind('click',function(e){
            e.stopPropagation();
            logWrite(this,'click'); 
        });
    },25);
    
    //搜索框点击
    $('#search').click(function(){
        var keyword = $('#search_keyword').val();
        $(this).attr('searchkey',keyword);
        logWrite(this,'search');
    })
});
/*
* 打点日志方法
* param obj 传递当前操作的对象，一般传递this即可
* param type 日志记录类型  1、view 展示类型(一进入页面要记录PV时也传递此类型)  2、click 点击类型
*/
function logWrite(obj,type){
	_paq.push(['setSiteId', _logParam.appid]);
	_paq.push(['setDocumentTitle', _logParam.pageTitle]);
	_paq.push(['setTrackerUrl', logUrl+'collect']);
	
	if(ParamCountArr){
		for(var DelKey in ParamCountArr){
			_paq.push(['deleteCustomVariable', ParamCountArr[DelKey], "page"]); 
		}
	}
	//自定义参数// 
	var paramData = {//固定所有记录类型都要使用的参数
			'sn':_logParam.sn
			//'ver':navigator.userAgent
		};
	var ParamCount=0;
	for (var info in paramData){
		ParamCount++;
		ParamCountArr.push(ParamCount);
		_paq.push(['setCustomVariable', ParamCount, info, paramData[info], 'page']);
	}
	
	if('view'==type){//展示类型统计  例如用户刚进入页面，需要统计pv uv
	
		_paq.push(['trackPageView']);
		
	}else if('click'==type){//点击类统计
		if(obj){
			var Lmk = $(obj).attr('lmk');//分级参数键值
			var Lmv = $(obj).attr('lmv');//分级参数值
			var LkArr = Lmk.split('-');
			if(LkArr.length>1){
				//向接口中set当前所点击链接的父级
				var i=LkArr.length;
				while(Lmk&&Lmv&&i){
					var LkArr = Lmk.split('-');
					if(LkArr.length>1)
					{
						Lmk = Lmk.replace("-"+LkArr[LkArr.length-1],"");
						if($('[lmk='+Lmk+']').attr('lmk')&&$('[lmk='+Lmk+']').attr('lmv'))
						{
							Lmk = $('[lmk='+Lmk+']').attr('lmk');
							Lmv = $('[lmk='+Lmk+']').attr('lmv');
							ParamCount++;
							ParamCountArr.push(ParamCount);
							i--;
							//一级和二级栏目名称要求固定
							if(1==i){//一级栏目
								var LmName = "ck_rg";
							}else if(2==i){//二级栏目
								var LmName = "ck_po";
							}else{
								var LmName = "ck_r"+i;
							}
							_paq.push(['setCustomVariable',ParamCount,LmName,Lmv, 'page']);
						}else{
							continue;
						}
						console.log("栏目"+i+":"+Lmk+"____"+Lmv);
					}else{
						Lmk = Lmk.replace(LkArr[LkArr.length-1],"");
					}
				}
			}
						
			//ParamCount++;
			//ParamCountArr.push(ParamCount);
			//_paq.push(['setCustomVariable', ParamCount,"ck_url",$(obj).attr('lmUrl'), 'page']);
			ParamCount++;
			ParamCountArr.push(ParamCount);
			var clickUrl = $(obj).attr('lmUrl');
			if(!clickUrl){
				clickUrl = $(obj).attr('href');
			}
			if(-1==clickUrl.indexOf("http://")&&clickUrl!="#"){
				var strUrl=window.location.href;
				var strPage = strUrl.substring(0,strUrl.lastIndexOf("/"));
				var clickUrl = strPage+"/"+clickUrl;
			}
			_paq.push(['setCustomVariable', ParamCount,"ck_name",$(obj).attr('lmv'), 'page']);
			_paq.push(['trackLink',clickUrl, 'link']);
			//_paq.push(['enableLinkTracking']);
			console.log("当前点击:"+$(obj).attr('lmv')+"___"+"url:"+clickUrl);
			//alert("当前点击:"+$(obj).attr('lmv')+"___"+"url:"+$(obj).attr('lmUrl'));
		}else{
			
			console.log("click obj param is null");
		}
		
	}else if('search'==type){//搜索类型  例如用户点击搜索框
		
		_paq.push(['trackSiteSearch',$(obj).attr('searchkey')]);
		//_paq.push(['setCustomVariable', ParamCount,"ss_kw",'北京时间','page']); 
		
	}else{
		
	}
}


