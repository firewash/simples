//-----------ie下屏蔽 console 操作------------//
if(-1!=navigator.userAgent.toLocaleLowerCase().indexOf('trident')){//IE内核下自定义console方法
	window.console = {};
	window.console.log = function(){};
	window.console.dir = function(){};
}
(function(window){
    var _localStorage = window.localStorage,
    _ls = window.ls,
    perfix = 'v1_',
    upSomeKey, 
    ls = null;
    function getkey(key){
        if(upSomeKey && (key in upSomeKey) ){
            return upSomeKey[key]+key;
        }else{
            return perfix+key;
        }
    }
    //初始化ls存储
    if(_localStorage){
        ls = {
            item: function(ckey,value){
                var key = getkey(ckey);
                if(!!value){
                    if( upSomeKey && (ckey in upSomeKey) ){
                        _localStorage.removeItem(perfix+ckey);
                    }
                    try{
                        _localStorage.setItem(key,value);
                    }catch(e){
                    };
                    return true;
                }else{
                    return _localStorage.getItem(key);
                }
            },
            removeItem: function(key){
                var key = getkey(key);
                _localStorage.removeItem(key);
                this.length--;
                return true;
            },
            clear: function(){
                _localStorage.clear();
                this.length = 0;
                return true;
            },
            noConflict: function(){
                window.ls = _ls;
                return ls;
            },
            length: _localStorage.length
        };
        if( _localStorage.getItem('data_version') !== perfix ){
            _localStorage.clear();
            _localStorage.setItem('data_version',perfix);
        }
    }
    window.ls = ls;
})(window);
(function(window){
    var datas = {},
        handler = {},
        controller = {},
        set = function(key,data){
            datas[key] = data;
            if( handler[key] ){
                for(var i=0,j=handler[key].length;i<j;){
                    handler[key][i++]( data );
                }
                handler[key] = null;
            }
        },
        use = function(key,callBack){
            if(key in datas){
                window.setTimeout(function(){
                    callBack(datas[key]);
                },15);
                return ;
            }
            !handler[key] && (handler[key] = []);
            handler[key].push( callBack );
        },
        controller = {
            set: set,
            use: use
        };
    window.datas = controller;
})(window);
(function(window){
    var list = [],
        isfire,
        fire = function(fnObj){
            try{
                typeof fnObj.fn === 'function' && fnObj.fn(window);
            }catch(e){
                console.log( '# ERROR from, '+ fnObj.busName );
                console.log( '# ERROR info, '+ e.message );
            }
        },
        business = function(fn,businessName){
            if(isfire){
                fire({
                    fn: fn,
                    busName: businessName
                });
            }else{
                list.push({
                    fn: fn,
                    busName: businessName
                });
            }
        };
    $(function(){
        isfire = true;
        if(list.length!=0){
            for(var i=0,j=list.length;i<j;){
                fire(list[i++]);
            }
        }
        list = null;
    });
    window.business = business;
})(window);

var config = {
    search: {
    	sogou:{
            name:'搜狗搜索',
    		news:{
    			site:'news',
    			word:'query',
    			params:[
                    ['pid','sogou-site-944a5ae3483ed5c1'],
    				['ie','utf-8']
    			],
    			action:'http://news.sogou.com/news'
    		},
    		web:{
    			site:'web',
    			word:'query',
    			params:[
                    ['pid','sogou-site-944a5ae3483ed5c1'],
    				['ie','utf-8']
    			],
    			action:'http://www.sogou.com/sogou'
    			
    		},
    		zhidao:{
    			site:'zhidao',
    			word:'sp',
    			params:[
                    ['pid','sogou-site-944a5ae3483ed5c1'],
    				['ie','utf-8']
    			],
    			action:'http://wenwen.soso.com/z/Search.e'
    		},
    		music:{
    			site:'music',
    			word:'query',
    			params:[
                    ['pid','sogou-site-944a5ae3483ed5c1'],
    				['ie','utf-8']
    			],
    			action:'http://mp3.sogou.com/music.so'
    		},
    		pic:{
    			site:'pic',
    			word:'query',
    			params:[
                    ['pid','sogou-site-944a5ae3483ed5c1'],
    				['ie','utf-8']
    			],
    			action:'http://pic.sogou.com/pics'
    		},
    		video:{
    			site:'video',
    			word:'query',
    			params:[
                    ['pid','sogou-site-944a5ae3483ed5c1'],
    				['ie','utf-8']
    			],
    			action:'http://v.sogou.com/v'
    		},
    		maps:{
    			site:'maps',
    			word:'what',
    			params:[
                    ['pid','sogou-site-944a5ae3483ed5c1'],
    				['ie','utf-8']
    			],
    			action:'http://map.sogou.com/'
    		}
    	},
    	google:{
            name:'谷歌搜索',
    		news:{
    			site:'news',
    			word:'q',
    			params:[
    				['ie','utf-8']
    			],
    			action:'https://news.google.com.hk/nwshp'
    		},
    		web:{
    			site:'web',
    			word:'q',
    			params:[
    				['ie','utf-8']
    			],
    			action:'https://www.google.com.hk/search'
    		},
    		maps:{
    			site:'maps',
    			word:'q',
    			params:[
    				['ie','utf-8']
    			],
    			action:'http://ditu.google.cn/maps'
    		},
            pic:{
                site: 'pic',
                word: 'q',
                params:[
                    ['ie','utf-8'],
                    ['tbm','isch']
                ],
                action: 'https://www.google.com/search'
            }
    	},
    	bing:{
            name:'必应搜索',
    		news:{
    			site:'news',
    			word:'q',
    			params:[
    				['ie','utf-8']
    			],
    			action:'http://cn.bing.com/news/search'
    		},
    		web:{
    			site:'web',
    			word:'q',
    			params:[
    				['ie','utf-8']
    			],
    			action:'http://cn.bing.com/search'
    		},
    		pic:{
    			site:'pic',
    			word:'q',
    			params:[
    				['ie','utf-8']
    			],
    			action:'http://cn.bing.com/images/search'
    		},
    		video:{
    			site:'video',
    			word:'q',
    			params:[
    				['ie','utf-8']
    			],
    			action:'http://cn.bing.com/videos/search'
    		},
    		maps:{
    			site:'maps',
    			word:'q',
    			params:[
    				['ie','utf-8']
    			],
    			action:'http://cn.bing.com/ditu/default.aspx'
    		}
    	},
    	taobao:{
            name:'淘宝搜索',
    		news:{
    			site:'news',
    			word:'q',
    			params:[
    				['ie','utf-8']
    			],
    			action:'http://s.taobao.com/search'
    		},
            web:{
                site:'web',
                word:'q',
                params:[
                    ['ie','utf-8']
                ],
                action:'http://s.taobao.com/search'
            },
            tieba:{
                site:'tieba',
                word:'q',
                params:[
                    ['ie','utf-8']
                ],
                action:'http://s.taobao.com/search'
            },
            zhidao:{
                site:'zhidao',
                word:'q',
                params:[
                    ['ie','utf-8']
                ],
                action:'http://s.taobao.com/search'
            },
            music:{
                site:'music',
                word:'q',
                params:[
                    ['ie','utf-8']
                ],
                action:'http://s.taobao.com/search'
            },
            pic:{
                site:'pic',
                word:'q',
                params:[
                    ['ie','utf-8']
                ],
                action:'http://s.taobao.com/search'
            },
            video:{
                site:'video',
                word:'q',
                params:[
                    ['ie','utf-8']
                ],
                action:'http://s.taobao.com/search'
            },
            maps:{
                site:'maps',
                word:'q',
                params:[
                    ['ie','utf-8']
                ],
                action:'http://s.taobao.com/search'
            },
            wenku:{
                site:'wenku',
                word:'q',
                params:[
                    ['ie','utf-8']
                ],
                action:'http://s.taobao.com/search'
            }
    	},
    	youku:{
            name:'优酷搜索',
    		news:{
    			site:'news',
    			word:'keyword',
    			params:[
    				['ie','utf-8']
    			],
    			action:'http://www.soku.com/v'
    		},
            web:{
                site:'web',
                word:'keyword',
                params:[
                    ['ie','utf-8']
                ],
                action:'http://www.soku.com/v'
            },
            tieba:{
                site:'tieba',
                word:'keyword',
                params:[
                    ['ie','utf-8']
                ],
                action:'http://www.soku.com/v'
            },
            zhidao:{
                site:'zhidao',
                word:'keyword',
                params:[
                    ['ie','utf-8']
                ],
                action:'http://www.soku.com/v'
            },
            music:{
                site:'music',
                word:'keyword',
                params:[
                    ['ie','utf-8']
                ],
                action:'http://www.soku.com/v'
            },
            pic:{
                site:'pic',
                word:'keyword',
                params:[
                    ['ie','utf-8']
                ],
                action:'http://www.soku.com/v'
            },
            video:{
                site:'video',
                word:'keyword',
                params:[
                    ['ie','utf-8']
                ],
                action:'http://www.soku.com/v'
            },
            maps:{
                site:'maps',
                word:'keyword',
                params:[
                    ['ie','utf-8']
                ],
                action:'http://www.soku.com/v'
            },
            wenku:{
                site:'wenku',
                word:'keyword',
                params:[
                    ['ie','utf-8']
                ],
                action:'http://www.soku.com/v'
            }
    	},
    	baidu:{
            name:'百度一下',
	        news: {
	            site : 'news',
	            word : 'word',
	            params : [
	                ['tn', 'news'],
	                ['ie', 'utf-8']
	            ],
	            action : 'http://news.baidu.com/ns'
	        },
	        web: {
	            site : 'web',
	            word : 'wd',
	            params : [
	                ['ie', 'utf-8'],
	                ['tn', '98050039_pg']
	            ],
	            action : 'http://www.baidu.com/s'
	        },
	        tieba: {
	            site : 'tieba',
	            word : 'kw',
	            params : [
	                ['ie', 'utf-8'],
	                ['tn', '98050039_pg']
	            ],
	            action : 'http://tieba.baidu.com/f'
	        },
	        zhidao: {
	            site : 'zhidao',
	            word : 'word',
	            params : [
	                ['ie', 'utf-8'],
	                ['tn', '98050039_pg']
	            ],
	            action : 'http://zhidao.baidu.com/search'
	        },
	        music: {
	            site : 'music',
	            word : 'key',
	            params: [
	                ['tn', '98050039_pg']
	            ],
	            action : 'http://music.baidu.com/search'
	        },
	        pic: {
	            site : 'pic',
	            word : 'word',
	            params : [
	                ['ie', 'utf-8'],
	                ['tn', '98050039_pg']
	            ],
	            action : 'http://image.baidu.com/i'
	        },
	        video: {
	            site : 'video',
	            word : 'word',
	            params : [
	                ['ie', 'utf-8'],
	                ['tn', '98050039_pg']
	            ],
	            action : 'http://v.baidu.com/v'
	        },
	        maps: {
	            site : 'maps',
	            word : 'word',
	            params : [
	                ['ie', 'utf-8'],
	                ['tn', '98050039_pg']
	            ],
	            action : 'http://map.baidu.com/m'
	        },
	        wenku: {
	            site : 'wenku',
	            word : 'word',
	            params : [
	                ['ie', 'utf-8'],
	                ['tn', '98050039_pg']
	            ],
	            action : 'http://wenku.baidu.com/search'
	        }
		}
    },
    email : [
//            {
//                name : 'at163',
//                listName : '@163.com 网易',
//                type : 'mail',
//                action : 'http://reg.163.com/CheckUser.jsp',
//                params : [
//                    'username',
//                    'password',
//                    ['url','http://entry.mail.163.com/coremail/fcg/ntesdoor2?lightweight=1&verifycookie=1&language=-1&style=15']
//                ],
//                at : ''
//            },
//            {
//                name : 'at126',
//                listName : '@126.com 网易',
//                type : 'mail',
//                action :'https://reg.163.com/logins.jsp',
//                params : [
//                    'username',
//                    'password',
//                    ['domain','126.com'],
//                    ['url','http://entry.mail.126.com/cgi/ntesdoor?lightweight%3D1%26verifycookie%3D1%26language%3D0%26style%3D-1']
//                ],
//                at : '@126.com'
//            },
//            {
//                name : 'atsina',
//                listName : '@sina.com 新浪',
//                type : 'mail',
//                action :'http://mail.sina.com.cn/cgi-bin/login.cgi',
//                params : [
//                    'u',
//                    'psw'
//                ],
//                at : '@sina.com'
//            },
        {
            name : 'atsohu',
            listName : '@sohu.com 搜狐',
            type : 'mail',
            action : 'http://passport.sohu.com/login.jsp',
            params : [
                'loginid',
                'Password',
                ['fl','1'],
                ['vr','1|1'],
                ['appid','1000'],
                ['ru','http://login.mail.sohu.com/servlet/LoginServlet'],
                ['eru', 'http://login.mail.sohu.com/login.jsp'],
                ['ct', '1173080990'],
                ['sg','5082635c77272088ae7241ccdf7cf062'],
                ['enterVip','true'],
                ['firstlogin','false'],
                ['.intl','cn'] ,
                ['isplogin','true'],
                ['domains','sohu']
            ],
            at:'@sohu.com'
        },
    //            {
    //                name : 'atyeah',
    //                listName : '@yeah.net 网易',
    //                type : 'mail',
    //                action : 'https://reg.163.com/logins.jsp',
    //                params : [
    //                    'username',
    //                    'password',
    //                    ['domain','yeah.net'],
    //                    ['url','http://entry.mail.yeah.net/cgi/ntesdoor?lightweight%3D1%26verifycookie%3D1%26style%3D-1']
    //                ],
    //                at:'@yeah.net'
    //            },
        {
            name : 'at21cn',
            listName : '@21cn.com',
            type : 'mail',
            action : 'http://passport.21cn.com/maillogin.jsp',
            params : [
                'UserName',
                'passwd',
                ['domainname','21cn.com']
            ],
            at : '@21cn.com'
        },
        {
            name : 'at139',
            listName : '@139.com',
            type : 'mail',
            action : 'https://mail.10086.cn/Login/Login.ashx?clientid=5025',
            params : [
                'UserName',
                'Password',
                ['ClientId','5025']
            ],
            at : ''
        },
    ]
}

//页面加载完毕后初始化邮箱
 $(function(){
     var formData =  config.email[0];
     createEmailParams(formData, $('.emailForm'));
     mailSubmit();
     //天天推荐jsonp请求数据
     jsonp("price","http://ent.souluo.net/uc123/data.php");
 });


//邮箱点击出现邮箱列表下拉菜单
$('.curMail').click(function(event) {
    $('.emailList-ul').toggle();
    //防止冒泡
    event.stopPropagation();
});

//选择email
$('.emailList-li').click(function() {
    var $curMail = $('.curMail');

    $('.emailList-ul').hide();
    $curMail.html('<span class="float-l">' + $(this).html() + '</span><i class="tri sprite"></i>');

    //删除参数
    $('.emailForm input[type=hidden]').remove();

    //修改参数
    var index = $(this).index(),
        emailData = config.email[index],
        $form = $('.emailForm'),
        type = emailData.type;

    $curMail.attr('data-index', index).attr('data-type', emailData.type);

    createEmailParams(emailData, $form);

    $form.attr({
        'action' : emailData.action
    }).children('.email-user').attr({
            'name' : emailData.params[0],
            'data-at' : emailData.at
        });
    $form.children('.email-pwd').attr('name',emailData.params[1]);

    mailSubmit();
    
});

//点击外链的email
$('.emailList-li-link').click(function() {
    $('.emailList-ul').hide();
});

//选择完毕后
function mailSubmit() {

    $('.email-submit').unbind();

    $('.email-submit').bind('click',function(){  
        //email登录框点击统计
        var emailLink = $('#emailForm').attr("action");
        $(this).attr('lmurl',emailLink);
        logWrite(this,'click');
    });
    $('.email-submit').click(function(event) {
        event.preventDefault();
        var form1 = $('.emailForm').clone(),
            $user = form1.find('.email-user'),
            name = $user.val(),
            pwd = form1.find('.email-pwd').val(),
            at = $user.attr('data-at');

        //ie下form一定要放在dom里面才可用jquery模拟提交
        form1.appendTo('body').hide();

        //如果是sohu做处理
        if(at.indexOf('sohu') > 0) {
            $('<input name="UserName" value=' + name +'>' +
                '<input name="id" value=' + name +'>' +
                '<input name="username" value=' + name +'>' +
                '<input name="password" value=' + pwd +'>' +
                '<input name="m" value=' + name +'>' +
                '<input name="passwd" value=' + pwd +'>' +
                '<input name="mpass" value=' + pwd +'>').appendTo(form1);
        }

        //加邮箱后缀
        if( name.indexOf('@') < 0 && at ) {
            $user.val(name + at);
        }

        form1.submit();

        //1秒钟后删除克隆的邮箱
        setTimeout(function() {
            form1.remove();
        },1000);

    });


}

//邮箱: 生成除用户名密码外的参数input
function createEmailParams(data, $form) {
    var l = data.params.length,
        params = data.params;

    //如果参数不止用户名和密码
    if( l > 2) {
        for(var j = 2; j < l; j++) {
            var $newInput = $('<input type="hidden" name="' + params[j][0] + '" value="' + params[j][1] + '">');
            $newInput.appendTo($form);
        }
    }
}

//搜索引擎切换
$('#search_logo_list').delegate('li','click',function() {
	var search_name = $(this).attr('data-name'),
        $form = $('.search-form form');
	$('.search-tabList li').each(function(){
		if(typeof config.search[search_name][$(this).attr('data-val')] !== 'undefined'){
            $(this).attr('data-search',search_name);
			$(this).attr('data-action',config.search[search_name][$(this).attr('data-val')].action);
		}else{
            $(this).attr('data-search',"baidu");
			$(this).attr('data-action',config.search.baidu[$(this).attr('data-val')].action);
		}
	});

    $('#change_search_logo').removeClass().addClass('search-'+search_name+'-logo');
		
	$form.attr({
        action: $('.search-tabList .current').attr('data-action')
    });
    $form.find('.search-input input').attr('name',config.search[$('.search-tabList .current').attr('data-search')][$('.search-tabList .current').attr('data-val')].word);
    createSearchParams(config.search[$('.search-tabList .current').attr('data-search')][$('.search-tabList .current').attr('data-val')], $form);

    $('.search-sbmit').attr('value',config.search[search_name].name);
	
	$('#search_box').css('display','none');
    //添加到ls存储里
	ls.item('searchType',search_name);
});
$('#search_logo_list').delegate('li','mouseover',function() {
    $(this).addClass('current').siblings().removeClass();
});

//记录用户点击信息
$(function(){
    var searchType = ls && ls.item('searchType');
    searchType = searchType ? searchType : 'baidu' ;
    $('#search_logo_list li[data-name="'+searchType+'"]').trigger('click');
    $("#search_logo").show();
    $("#search_submit").show();
});

//搜索引擎展开收起
$('#search_logo').click(function(e){
    var e = e || event;
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble=true ;
    if($('#search_box').css('display')!='block'){
        $('#search_box').css('display','block');
    }else{
        $('#search_box').css('display','none');
    }
})

//搜索点击tab切换搜索类别
$('.search-tabList li').click(function(event) {
    var action = $(this).attr('data-action'),
        search = $(this).attr('data-search'),
        val = $(this).attr('data-val'),
        $form = $('.search-form form');

        $(this).addClass('current').siblings().removeClass('current');

        //生成参数
        $form.attr({
            action: action
        });
        $form.find('.search-input input').attr('name',config.search[search][val].word);
        createSearchParams(config.search[search][val], $form);
    //防止冒泡
    event.stopPropagation();
});

//搜索: 生成除关键字外的参数input
function createSearchParams(data, $form) {
    var params = data.params || [],
        l = params.length;

    $form.find('.search-params').empty();

    for(var i = 0; i < l; i++) {
        var $newInput = $('<input type="hidden" name="' + params[i][0] + '" value="' + params[i][1] + '">');
        $form.children('.search-params').append($newInput);
    }
}

//点击其他区域下拉框的消失
$(document).click(function(e) {
    window.exitFame && window.exitFame();
    $('.emailList-ul').hide();
    $("#search_box").hide();
});
////---------以下未找到调用之处,赞已于注释 2014/04/17---------//
// function AddFavorite(sURL, sTitle) {
//     try { //IE
//         window.external.addFavorite(sURL, sTitle);
//     } catch (e) {
//         try { //Firefox
//             window.sidebar.addPanel(sTitle, sURL, "");
//         } catch (e) {
//             try{ 
//                 createShortcut();
//             } catch(e){
//                 alert("请按Ctrl+D之后按“确定”完成收藏!");
//             }
//         }
//     }
// }
// function setHomepage(pageURL) {
//     if (document.all) {
//         document.body.style.behavior='url(#default#homepage)';
//         document.body.setHomePage(pageURL);
//     }
//     else {
//         try { //IE
//             netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
//         } catch (e) {
//             try{ //Firefox
//                 var prefs = Components.classes['@mozilla.org/preferences-service;1']
//                 .getService(Components. interfaces.nsIPrefBranch);
//                 prefs.setCharPref('browser.startup.homepage',pageURL);
//             } catch(e) {
//                 alert( "请使用浏览器菜单手动设置." );
//             }
//         }
//     }
// }
// function toDesktop(sUrl,sName){   
//     try {   
//         var WshShell = new ActiveXObject("WScript.Shell");   
//         //在指定的文件夹下创建名为sName的快捷方式  
//         var oUrlLink = WshShell.CreateShortcut(WshShell.SpecialFolders("Desktop") + "\\" + sName + ".url");       
//         //快捷方式指向的链接   
//         oUrlLink.TargetPath = sUrl;   
//         oUrlLink.Save();   
//     }catch(e){   
//         alert(e.message);  
//         //alert("当前IE安全级别不允许操作！");  
//         //最简单解决方法：打开Internet Explorer “工具”菜单栏中的“选项”一栏，单击“安全”栏中的“自定义级别”选项卡，  
//         //将第三项“对没有标记为安全的activex控件进行初始化和脚本运行”设置成启用         
//     }   
// }

function jsonp(id,url){
    var script = document.createElement('script');
    script.setAttribute('src', url);
    script.setAttribute('id', id);
    document.getElementsByTagName('body')[0].appendChild(script);

}

function tb(data){
    var price_img = document.getElementById("price_img");
    var price_txt = document.getElementById("price_txt");
    var html = [] , ul=[];
    for(var i=0;i<data.chosen.length;i++){
        html.push('<div class="tb-pic tb-2pic '+(i==0?'mr8':'')+'">');
        html.push('<a href="'+data.chosen[i][1]+'">');
        html.push('<img src="'+data.chosen[i][0]+'" alt="'+data.chosen[i][2]+'">');
        html.push('</a><p><a href="'+data.chosen[i][1]+'">'+data.chosen[i][2]+'</a></p>');
        html.push('</div>');
    }
    for(var i=0;i<data.price.length;i++){
        ul.push('<li class="tbHotSale-li"><a href="'+data.price[i][0]+'">'+data.price[i][1]+'</a></li>');
    }
    price_img.innerHTML = html.join('');
    price_txt.innerHTML = ul.join('');
}

// 工具函数：window.jDate() ------------------------------------//
(function(){
    var CalendarData = new Array(20),
        madd = new Array(12),
        TheDate,
        //阳历 星期的文字描述
        weekString = "日一二三四五六",
        //旧历 日 的第二位汉字
        numString="一二三四五六七八九十",
        //旧历 月
        monString = "正二三四五六七八九十冬腊",
        //旧历 年
        cYear,
        //旧历 月
        cMonth,  
        //旧历 日
        cDay,
        //旧历 时
        cHour,
        //return '2013-01-03'
        dateDayStr,
        //return '星期日'
        dataWeek,
        //return '13:49:23'
        dataTimeStr,
        //return '三月初二'
        dataCNDayStr;
    function init(){
        CalendarData[0]=0x41A95;   
        CalendarData[1]=0xD4A;   
        CalendarData[2]=0xDA5;   
        CalendarData[3]=0x20B55;   
        CalendarData[4]=0x56A;   
        CalendarData[5]=0x7155B;   
        CalendarData[6]=0x25D;   
        CalendarData[7]=0x92D;   
        CalendarData[8]=0x5192B;   
        CalendarData[9]=0xA95;   
        CalendarData[10]=0xB4A;   
        CalendarData[11]=0x416AA;   
        CalendarData[12]=0xAD5;   
        CalendarData[13]=0x90AB5;   
        CalendarData[14]=0x4BA;   
        CalendarData[15]=0xA5B;   
        CalendarData[16]=0x60A57;   
        CalendarData[17]=0x52B;   
        CalendarData[18]=0xA93;   
        CalendarData[19]=0x40E95;   
        madd[0]=0;   
        madd[1]=31;   
        madd[2]=59;   
        madd[3]=90;   
        madd[4]=120;   
        madd[5]=151;   
        madd[6]=181;   
        madd[7]=212;   
        madd[8]=243;   
        madd[9]=273;   
        madd[10]=304;   
        madd[11]=334;
    }
    init();

    function GetBit(m,n){     
        return (m>>n)&1;   
    }   

    function e2c(){
        var total,m,n,k,   
            isEnd = false,   
            tmp = TheDate.getYear();   
        if(tmp < 1900){
            tmp += 1900;
        }
        total = (tmp-2001)*365+Math.floor((tmp-2001)/4)+madd[TheDate.getMonth()]+TheDate.getDate()-23;   
        if( TheDate.getYear()%4==0 && TheDate.getMonth()>1 ){
            total++;
        }   
        for(m=0;;m++){       
            k=(CalendarData[m]<0xfff)?11:12;   
            for(n=k;n>=0;n--){   
                if(total<=29+GetBit(CalendarData[m],n)){     
                    isEnd=true;   
                    break;   
                }   
                total=total-29-GetBit(CalendarData[m],n);   
            }   
            if(isEnd){
                break;
            } 
        }   
        cYear = 2001+m;   
        cMonth = k-n+1;   
        cDay = total;   
        if(k==12){   
            if(cMonth==Math.floor(CalendarData[m]/0x10000)+1){
                cMonth=1-cMonth; 
            }
            if(cMonth>Math.floor(CalendarData[m]/0x10000)+1){
                cMonth--;
            } 
        }   
        cHour=Math.floor((TheDate.getHours()+3)/2);   
    }   

    function GetcDateString(){
        var tmpCNDayStr;
        //旧历 月份描述
        if(cMonth<1){     
            tmpCNDayStr = "闰"+monString.charAt(-cMonth-1)+"月";
        }else{
            tmpCNDayStr = monString.charAt(cMonth-1)+"月";
        }
        //旧历 日期描述
        tmpCNDayStr += (cDay<11)?"初":((cDay<20)?"十":((cDay<30)?"廿":"卅"));   
        if(cDay%10!=0||cDay==10){
            tmpCNDayStr += numString.charAt((cDay-1)%10);
        }
        dataCNDayStr = tmpCNDayStr;
    }   
    function GetDateString(){
        dateDayStr = TheDate.getFullYear()+"-"+(TheDate.getMonth()+1)+"-"+TheDate.getDate();
        dataWeek = (TheDate.getMonth()+1)+"月"+TheDate.getDate()+"日 星期"+weekString.charAt(TheDate.getDay());   
        dataTimeStr = TheDate.getHours()+':'+TheDate.getMinutes()+':'+TheDate.getSeconds();
    }

    window.jDate = function(str){
        TheDate = str ? new Date(str) : new Date() ;
        e2c();   
        GetDateString(); 
        GetcDateString();
        return {
            dayStr: dateDayStr,
            weekStr: dataWeek,
            timeStr: dataTimeStr,
            cnDayStr: dataCNDayStr
        };
    }
})();

// 工具函数：window.md5() --------------------------------------//
(function(){
  var hexcase = 0,
      chrsz = 8;
  window.md5 = function(s){ 
    var md5Str = binl2hex(core_md5(str2binl(s), s.length * chrsz));
    return md5Str;
  }
  function core_md5(x, len){
    x[len >> 5] |= 0x80 << ((len) % 32);
    x[(((len + 64) >>> 9) << 4) + 14] = len;

    var a =  1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d =  271733878;

    for(var i = 0; i < x.length; i += 16){
      var olda = a;
      var oldb = b;
      var oldc = c;
      var oldd = d;
      a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
      d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
      c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
      b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
      a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
      d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
      c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
      b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
      a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
      d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
      c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
      b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
      a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
      d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
      c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
      b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);
      a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
      d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
      c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
      b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
      a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
      d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
      c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
      b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
      a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
      d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
      c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
      b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
      a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
      d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
      c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
      b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);
      a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
      d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
      c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
      b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
      a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
      d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
      c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
      b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
      a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
      d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
      c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
      b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
      a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
      d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
      c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
      b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);
      a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
      d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
      c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
      b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
      a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
      d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
      c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
      b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
      a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
      d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
      c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
      b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
      a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
      d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
      c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
      b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);
      a = safe_add(a, olda);
      b = safe_add(b, oldb);
      c = safe_add(c, oldc);
      d = safe_add(d, oldd);
    }
    return Array(a, b, c, d);
  }

  function md5_cmn(q, a, b, x, s, t){
    return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
  }
  function md5_ff(a, b, c, d, x, s, t){
    return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
  }
  function md5_gg(a, b, c, d, x, s, t){
    return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
  }
  function md5_hh(a, b, c, d, x, s, t){
    return md5_cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function md5_ii(a, b, c, d, x, s, t){
    return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
  }
  function safe_add(x, y){
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
  }
  function bit_rol(num, cnt){
    return (num << cnt) | (num >>> (32 - cnt));
  }

  function str2binl(str){
    var bin = Array();
    var mask = (1 << chrsz) - 1;
    for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
    return bin;
  }
  function binl2hex(binarray){
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var str = "";
    for(var i = 0; i < binarray.length * 4; i++){
    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) + hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
    }
    return str;
  }
})();

//--------------------------------------------------------------//
/* 自定义名站功能模块 */
business(function(window){
    //标记
    var id = 1,
        //window
        g = window,
        ls = g.ls,
        json = g.JSON,
        defaultUrl,
        //用户的操作会对这里生效
        userData,
        //初始化的url对象
        fameUrls,
        //展示内容的domElement
        showWin = $("#js_famous_show"),
        showCont = showWin.find(".js_show_con"),
        showToHand = showWin.find(".js_show_toHandle"),
        //操作内容的domElement
        removeWin = $("#js_famous_handle"),
        removeCont = removeWin.find(".js_handle_con"),
        removeToShow = removeWin.find(".js_handle_toShow"),
        removeAddBut = removeWin.find(".js_handle_submit");
    datas.use('fameDefUrls',function(data){
        defaultUrl = data;
        userData = getFameUrls();
        fameUrls = copyObj(userData);
        start();
    })
    function start(){
        //使用数据渲染视图
        var fameName,
            fameId,
            fameUrl,
            showHtml = "",
            removeHtml = "";
        for(var n in fameUrls){
            if( fameUrls[n] ){
                fameName = fameUrls[n]['name'];
                fameId = fameUrls[n]['id'];
                fameUrl = correctUrl(fameUrls[n]['url']);
                showHtml += '<li><a lmurl="'+fameUrl+'" lmv="'+fameName+'" lmk="centerMz-center'+fameId+'" cls="xw,n" title="'+fameName+'" href="'+fameUrl+'" urlId="'+fameId+'" >'+ fameName +'</a></li>';
                
                removeHtml += '<li urlId="'+fameId+'"><p title="'+fameName+'" >'+fameName+'</p><span urlName="'+fameName+'" class="delete_nav" urlId="'+fameId+'"></span></li>';
            }else{
                showHtml += '<li></li>';
                removeHtml += '<li urlId="'+n+'"></li>';
            }
        }
        showCont.html(showHtml);
        //添加打点事件
        showCont.find('a').bind('click',function(){
            logWrite(this,'click'); 
        });
        removeCont.html(removeHtml);
        //执行删除操作
        removeCont.bind('click',function(e){
            var e = e || window.event,
                src = e.srcElement || e.target;
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble=true ;
            //删除操作
            if(src.nodeName.toLowerCase()=='span' && src.nodeType==1){
                var fam = $("#js_famous_alert");
                var $src = $(src);
                var urlId = $src.attr('urlId');
                fam.find('.js_famName').text( $src.attr('urlName') );
                fam.show();
                fam.find('.js_sure').unbind('click').bind('click',function(e){
                    var e = e || window.event;
                    e.stopPropagation ? e.stopPropagation() : e.cancelBubble=true ;
                    //清除格子信息
                    $src.parent('li').html('');
                    //取消弹层
                    $('#js_famous_alert').hide();
                    //更新数据 这样方便以后进行空的判断
                    userData[urlId] = null;
                });
            }
        });
        //用户的添加操作
        removeAddBut.bind('click',function(e){
            var e = e || window.event;
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble=true ;
            var inp2 = $(this).prevAll('.js_handle_text'),
                //网址
                urlText = $.trim( inp2[0].value ),
                //标题
                nameText = $.trim( inp2[1].value );
            if( urlText && nameText ){
                addData(nameText,urlText);
            }
        });
        //切换到操作界面：仅仅是操作现实
        showToHand.bind('click',function(e){
            var e = e || window.event;
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble=true ;
            removeWin.css({
                'left': showWin.width()+1,
                'display': 'block',
                'width':showWin.width()
            });
            removeWin.animate({
                'left':0
            },'normal',function(){
               showWin.hide(); 
            });
        });
        //退出操作界面：仅仅是操作现实
        removeToShow.bind('click',function(e){
            var e = e || window.event;
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble=true ;
            saveUserData();
            //切换界面
            exitFame();
        });
        //阻止事件传递性
        removeWin.bind('click',function(e){
            var e = e || window.event;
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble=true ;
        })
        function exitFame(flag){
            //切换界面
            showWin.show();
            removeWin.animate({
                'left':removeWin.width()+1
            },'normal',function(){
               removeWin.hide(); 
            });
        }
        g.exitFame = exitFame;
    };
    
    /******** 工具函数 *********/
    //保存操作：保存数据到ls同时更新UI视图
    function saveUserData(){
        //存储新数据
        setUrlsToLs(userData);
        //更新视图
        var fameName,
            fameId,
            fameUrl,
            showHtml = "";
        for(var n in userData){
            if(userData[n]){
                fameName = userData[n]['name'];
                fameId = userData[n]['id'];
                fameUrl = correctUrl(userData[n]['url']);
                showHtml += '<li><a lmurl="'+fameUrl+'" lmv="'+fameName+'" lmk="centerMz-center'+fameId+'" cls="xw,n" title="'+fameName+'" href="'+fameUrl+'" urlId="'+fameId+'" >'+ fameName +'</a></li>';
            }else{
                showHtml += '<li></li>';
            }
        }
        //重绘 的时候需要 重新绑定打点事件
        showCont.html(showHtml);
        //添加打点事件
        showCont.find('a').bind('click',function(){
            logWrite(this,'click'); 
        });
    }
    //添加数据
    function addData(name,url){
        var freeId = checkDataIsMax(); 
        //空闲
        if(freeId){
            userData[freeId] = {
                'id': freeId,
                'url': url,
                'name': name
            };
            //渲染视图
            var str = '<p title="'+name+'" >'+name+'</p><span urlName="'+name+'" class="delete_nav" urlId="'+freeId+'"></span>';
            removeCont.find('li[urlId='+freeId+']').html(str);
        //满了
        }else{
            $("#js_famous_maxAlert").show();
        }
    }
    //检测数据是否已满
    function checkDataIsMax(){
        for(var n in userData){
            if( userData[n]===null ){
                return n;
            }
        }
        return false;
    }
    //检测url的完整性
    function correctUrl(str){
        var reg = /^(http|https)/;
        if(!reg.test(str)){
            return 'http://'+str;
        }else{
            return str;
        }
    }
    //获取名站url
    function getFameUrls(){
        var urls = getUrlsFromLs(),
            result = {},
            tmpUrl = {};
        if( !urls ){
            //默认的 urls_array
            urls = defaultUrl;
            //添加前缀，为了后面程序统一处理
            for(var n in urls){
                tmpUrl[addfix(n)] = urls[n];
            }
            urls = tmpUrl;
        }
        //处理urls
        for(var n in urls){
            if(urls[n]===null){
                result[id] = null;
                id++;
            }else{
                result[id] = {
                    'id':id++,
                    'url':clearfix(n),
                    'name':urls[n]
                }
            }
        }
        return result; 
    }
    //获取ls存储的url:用户有操作的时候会变动ls存储内容
    function getUrlsFromLs(){
        var obj = null,
            str;
        try{
            str = ls.item('fameUrls');
            obj = json.parse(str);
        }catch(e){}
        return obj;
    }
    
    //设置ls存储里的url json {http://.....:'adfasdf'} => '{}' JSON.stringfiy()
    function setUrlsToLs(obj){
        var jsonStr = '{';
        for(var n in obj){
            if(obj[n]){
                jsonStr += '"'+addfix(chaChar(obj[n].url))+'": "'+chaChar(obj[n].name)+'" ,'
            }else{
                jsonStr += '"nan'+(++id)+'": null ,'
            }
        }
        jsonStr = jsonStr.slice(0,-1);
        jsonStr += '}';
        try{
            ls.item('fameUrls',jsonStr);
        }catch(e){}
    }

    //执行过滤+随机前缀
    function chaChar(str){
        return str.replace(/\"/g,'\\"');
    }
    //添加前缀
    function addfix(str){
        var prx = Math.random().toString().slice(10)+'_';
        return prx+str;
    }
    //去掉前缀
    function clearfix(str){
        return str.slice( str.indexOf('_')+1 );
    }
    //浅拷贝一个对象
    function copyObj(obj){
        var tmpO = {};
        for(var n in obj){
            if(obj.hasOwnProperty(n)){
                tmpO[n] = obj[n];
            }
        }
        return tmpO;
    }
},'fames');

//--------------------------------------------------------------//
/* 视窗切换效果 */
business(function(){
    var win = $("#lion_tab_win"),
        leftWin = win.find(".lion_tab_left"),
        rightWin = win.find(".lion_tab_right"),
        leftLinks = leftWin.find("ul li a"),
        rightLinks = rightWin.find("ul li a"),
        overClass = "atmov",
        conObj;
    datas.use('table',function(data){
        conObj = data;
        //初始化执行：页面加载完毕后执行
        handleLeftWin( leftLinks.eq(0) );
        handleRightWin( rightLinks.eq(0) );
    });
    //左边事件
    leftWin.find("ul").bind("mouseover",function(e){
        var e = e || event,
            target = e.target || e.srcElement;
        if( target.nodeType===1 && target.nodeName.toLowerCase()==='a'){
            target = $(target);
            if(!target.hasClass(overClass)){
                handleLeftWin(target);
            }
        }   
    });
    //右边事件
    rightWin.find("ul").bind("mouseover",function(e){
        var e = e || event,
            target = e.target || e.srcElement;
        if( target.nodeType===1 && target.nodeName.toLowerCase()==='a'){
            target = $(target);
            if(!target.hasClass(overClass)){
                handleRightWin(target);
            }
        }
    });

    /**************工具函数***************/
    //处理左侧视窗
    function handleLeftWin(target){
        //切换栏目头部
        leftLinks.removeClass(overClass);
        target.addClass(overClass);
        //切换栏目内容: 获取数据 + 渲染页面
        changeWinByLink(target);
        //添加打点事件
        leftWin.find('.navitab-item a').bind('click',function(){
            logWrite(this,'click'); 
        });
    }
    //处理右侧视窗
    function handleRightWin(target){
        //切换栏目头部
        rightLinks.removeClass(overClass);
        target.addClass(overClass);
        //切换栏目内容: 获取数据 + 渲染页面
        changeWinByLink(target);
        //添加打点事件
        rightWin.find('.navitab-item a').bind('click',function(){
            logWrite(this,'click'); 
        });
    }
    //根据link对象改变响应的窗口内容
    function changeWinByLink(linkObj){
        var data = getDataByType( linkObj.attr('winType') );
        data && linkObj.parent().parent().next().html( tmplate(data) );
    }
    //渲染模板
    function tmplate(data){
        var len = 3,
            cEnd = len - 1,
            wType = data[data.length-1],
            data = data.slice(0,-1),
            lFix = {
                left: 'CenterSjjx',
                right: 'CenterCxdj'
            },
            docFragment = document.createDocumentFragment(),
            imgFix = 'img/index_page/',
            i,
            linkE = document.createElement('a'),
            imgE = document.createElement('img'),
            pE = document.createElement('p'),
            tmpLink,tmpImg,tmpP;

        for(i=0;i<len;i++ ){
            tmpLink=linkE.cloneNode();
            tmpImg=imgE.cloneNode();
            tmpP=pE.cloneNode();
            //组织dom结构
            tmpLink.appendChild(tmpImg);
            tmpLink.appendChild(tmpP);
            //设置数据
            $(tmpLink).attr({
                lmk: lFix[wType]+'-'+(Math.random().toString().slice(5)),
                lmv: data[i].title,
                urltrue: 'true',
                lmurl: data[i].link,
                href: data[i].link
            });
            // 最后一个不用加 mr11
            if(i!=cEnd){
                tmpLink.className = 'mr11';
            }
            $(tmpImg).bind('error',function(){
                $(this).remove();
            }).attr({
                src: imgFix+data[i].img
            });
            tmpP.className = 'navitab-item-title';
            tmpP.innerHTML = data[i].title;
            //追加到数组中
            docFragment.appendChild( tmpLink );
        }
        return docFragment;
    }
    //配置数据数组并且返回所需要的
    function getDataByType(typeStr){
        var all = conObj;
        var res = all[typeStr];
        return res ? res : null ;
    }
},'transformTable');


function GetSn(callback){

	window["feedback_sn"]=function(json_sn)
	{
		try{
			var JsonObj = JSON.parse(json_sn); 
			if(JsonObj.sn){
				_logParam.sn = JsonObj.sn;
			}
			callback.call(window, _logParam.sn);
		}catch(e){
			callback.call(window,0);
		}
	}
	
	try{
		if(('undefined' != typeof window['external']['wowSend'])||(chrome['wowPrivate'] && 'function' == typeof chrome['wowPrivate']['wowSend'])){//是UC浏览器
			
			if(-1!=navigator.userAgent.toLocaleLowerCase().indexOf('webkit')){//webkit内核
				var a = chrome.wowPrivate.wowSend('getsn', "",feedback_sn);
			}else if(-1!=navigator.userAgent.toLocaleLowerCase().indexOf('trident')){//trident内核
				 window.external.wowSend('getsn', "", "feedback_sn");
			}
		}else{
			callback.call(window, _logParam.sn);
		}
	}catch(e){
		callback.call(window, 0);
	}
}


//--------------------------------------------------------------//
//    加载完毕后进行 时间的控制
business(function(){
    var handleEle = $('.showwin'),
        st = null,
        et = null,
        curTime = new Date().getTime();
    if(handleEle){
        handleEle.each(function(){
            var src = $(this),
                st = src.attr('data-st'),
                et = src.attr('data-et');
            st && ( curTime > new Date(st).getTime() ) && (src.style.display = 'block' );
            et && ( curTime > new Date(ed).getTime() ) && (src.style.display = 'none' );
        });
    }
},'controllerTime');

/*--------------------------------------------------------------//
天气预报 
api:
    http://doc.ucweb.local/pages/viewpage.action?pageId=21827057&src=contextnavpagetreemode
*/
business(function(){
    //加载必要模块
    var vkey = '@ucbrowser@',
        //加载的时候层
        weatherLoad = $('#js_weather_loading'),
        //天气的总窗口
        weatherWin = $("#js_weather_win"),
        //一组dom元素对象
        textEles = weatherWin.find('.js_wea_tx'),
        //选择城市
        selCity = weatherWin.find('.js_w_selCity'),
        //更换城市的弹出层
        cityWin = $('#js_city_select_win'),
        wIconEle = $('#js_wea_icon')[0],
        wClassprev = 'w_iocn',
        wcodeToClass,
        failing = false;

    datas.use('weatherDesc',function(data){
        wcodeToClass = data;
        init();
    });

    //使用数据
    datas.use('weatherCity',changeCityStart);

    /*
        开启此函数只是为了支持城市切换功能,
        如果城市数据加载出现问题,则不要进行调用即可
    */
    function changeCityStart(data){
        
        var cityDatas = data,
            textEles = cityWin.find('.js_wea_tx'),
            sels = {},
            optionE = document.createElement('option'),
            firstSel,
            secondSel,
            thirdSel,
            submitBut,
            closeBut,
            firstIndex=0,
            secondIndex=0,
            thirdIndex=0;
        for(var j=textEles.length-1;j>=0;j--){
            sels[ textEles[j].getAttribute('xtp') ] = textEles[j];
        }
        firstSel = sels.first;
        secondSel = sels.second;
        thirdSel = sels.third;
        submitBut = sels.submit;
        closeBut = sels.close;

        //使用存储的值修改选项
        var userls = ls.item('w_user_select');
        try{
            userls = JSON.parse(userls);
        }catch(e){
            userls = null;
        }
        if(userls){
            firstIndex = userls['0'];
            secondIndex = userls['1'];
            thirdIndex = userls['2'];
        }

        resetFirstList();
        resetSecondList();
        resetThirdList();

        //省级更换
        $(firstSel).bind('change',function(){
            firstIndex = this.selectedIndex;
            secondIndex = 0;
            thirdIndex = 0;
            resetSecondList();
            resetThirdList();
        });
        //市级更换
        $(secondSel).bind('change',function(){
            secondIndex = this.selectedIndex;
            thirdIndex = 0;
            resetThirdList();
        });
        //区级更换
        $(thirdSel).bind('change',function(){
            thirdIndex = this.selectedIndex;
        });
        //确定更换城市
        $(submitBut).bind('click',function(){
            //拼接数据
            var data = [],
                firstE,secondE,thirdE;
            firstE = cityDatas[ firstIndex ];
            secondE = firstE['child'][ secondIndex ];
            thirdE = secondE['child'][ thirdIndex ];
            data.push( firstE.name );
            data.push( secondE.name );
            data.push( thirdE.name );
            data.push( thirdE.cid );
            weatherLoad.show();
            cityWin.hide();

            //存储到ls：ie的jsonp并非异步,所以这里最好采用同步的形式
            //data: ["广西", "百色", "百色", "01010801"]
            
            var callBack = (function(data){
                return function(){
                    var saveData = [ firstIndex, secondIndex, thirdIndex ];
                    Array.prototype.push.apply(saveData,data);
                    var tmpObj={};
                    for(var i=0,j=saveData.length;i<j;){
                        tmpObj[i] = saveData[i++];
                    }
                    tmpObj.length = i;
                    ls.item('w_user_select', JSON.stringify(tmpObj) );
                }
            })(data);
            getWeatherData( thirdE.cid, null, callBack );
        });
        //关闭切换按钮
        $(closeBut).bind('click',function(){
            cityWin.hide();
            weatherWin.show();
        });
    
        //展示切换按钮
        selCity.show().bind('click',function(){
            weatherWin.hide();
            cityWin.show();
        });

        function resetFirstList(){
            firstSel.innerHTML = "";
            firstSel.appendChild( getOptionList(cityDatas) );
            $(firstSel).find('option:eq('+firstIndex+')')[0].selected = true;
        }

        function resetSecondList(){
            secondSel.innerHTML = "";
            secondSel.appendChild( getOptionList(cityDatas[ firstIndex ]['child']) );
            $(secondSel).find('option:eq('+secondIndex+')')[0].selected = true;
        }

        function resetThirdList(){
            thirdSel.innerHTML = "";
            thirdSel.appendChild( getOptionList(cityDatas[ firstIndex ]['child'][ secondIndex ]['child']) );
            $(thirdSel).find('option:eq('+thirdIndex+')')[0].selected = true;
        }

        function getOptionList(data){
            var htmlFrame = document.createDocumentFragment(),
                tmpOption;
            for(var i=0,len=data.length;i<len;i++){
                var tmpOption = optionE.cloneNode(true);
                tmpOption.innerHTML = data[i].name;
                tmpOption.value = data[i].name;
                htmlFrame.appendChild(tmpOption);
            }
            return htmlFrame;
        }
    }

    //初始化: 这里可能去获取存储里的天气情况
    function init(){
        var userSel = ls.item('w_user_select'), //string
            cid; 
        if(userSel){
            userSel = JSON.parse( userSel );
            cid = userSel[userSel.length-1];
        }
        getWeatherData(cid);
    }
    
    // 取出天气数据的api, 内含两个天气api,根据参数不同进行区分, 返回正确格式的天气数据 || 错误信息
    // 目前的api使用的是cid去获取 这里的city目前是需要传入cid

    // sendUrl = city ?
    // 'http://hao.uc.cn/huafeng/get_weather_express.php?' :
    // 'http://hao.uc.cn/huafeng/pc_weather.php?' ,

    // sendData['sel_city'] = encodeURI(city);
    // sendData['sel_county'] = encodeURI(county);

    function getWeatherData(city,county,callBack){
        var key = vkey,
            gDate = new jDate(),
            dayStr = gDate.dayStr,
            vcode = md5(dayStr+key),
            city = city,
            county = county,
            sendUrl = 'http://hao.uc.cn/huafeng/pc_weather.php?',
            sendData = {
                vkey: key,
                date: dayStr,
                vcode: vcode
            },
            sendStr = "";
        if(city){
            sendData['cid'] = city;
        }
        //拼接完整路径地址
        for(var n in sendData){
            sendStr += n+'='+sendData[n]+'&';
        }
        sendStr = sendStr.slice(0,-1);
        sendStr = sendUrl + sendStr;
        //发送请求
        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: sendStr
        }).done(hasData).fail(function(error){
            if(!failing){
                // 触发进行时的不可重复触发
                failing = true;
                // 失败默认请求北京 
                // 这种请求失败指的是: 对方未使用jsonp模式
                // string {"code":"413","msg":"error cid"}
                getWeatherData('01010101');
            }else{
                dataComplete({
                    code:'unknowCode'
                });
            }
        });

        function hasData(data){
            failing = false;
            dataComplete(data,callBack);
        }
    }
    
    //使用数据渲染页面
    function dataComplete(data,callBack){
        var gDate = new jDate();
        if( data.code != '200' || !data.data ){
            weatherLoad.find('p').html('天气加载失败，请刷新页面');
            return false;
        }else{
            callBack && callBack();
        }
        var data = data.data,
            inps = {},
            tInfo,
            api_value = data.aqi_value,
            lsCity;
        for(var i=textEles.length-1;i>=0;i--){
            var urlEle = $(textEles[i]);
            inps[ urlEle.attr('xtp') ] = textEles[i];
        }
        //渲染页面的数据信息
        
        //对城市数据进行显示性容错 接口有时候返回的数据会是部分乱码,所以这里优先去存储
        try{
            lsCity = ls.item('w_user_select') && JSON.parse( ls.item('w_user_select') );
        }catch(e){}
        lsCity = lsCity ? lsCity[5] : data.city ;
        inps.city.innerHTML = lsCity;

        inps.county.innerHTML = '';
        inps.date.innerHTML = gDate.weekStr+' ['+gDate.cnDayStr+']';
        inps.wNumber.innerHTML = data.temper+'°C';
        inps.wDesc.innerHTML = data.desc;
        inps.windDesc.innerHTML = data.wind_dir+' '+data.wind_power;

        // pm2.5不一定会返回数据,所以这里要处理下这种情况
        if(data.aqi && api_value){
            inps.pNumber.parentNode.parentNode.style.display = 'block';
            inps.pNumber.innerHTML = api_value;
            inps.pDesc.innerHTML = data.aqi;
            // 颜色管理
            inps.pNumber.style.color = '#fff';
            if(api_value>300){
                inps.pNumber.style.background = '#7e0023';
            }else if(api_value>200){
                inps.pNumber.style.background = '#99004c';
            }else if(api_value>150){
                inps.pNumber.style.background = '#ff0000';
            }else if(api_value>100){
                inps.pNumber.style.background = '#ff7e00';
            }else if(api_value>50){
                inps.pNumber.style.background = '#ffff00';
                inps.pNumber.style.color = '#4686de';
            }else{
                inps.pNumber.style.background = '#00e400';
                inps.pNumber.style.color = '#4686de';
            }
        }else{
            inps.pNumber.parentNode.parentNode.style.display = 'none';
        }
        
        // 天气接口偶尔会出现异常：返回的未来5天数据中会出现重复情况
        // 所以这里做下容错处理
        try{
            showWeatherData();
        }catch(e){
            inps.tomInfo.innerHTML = "";
            inps.aTomInfo.innerHTML = "";
        }
        function showWeatherData(){
            var i = 0,
                tInfo = data.forecast[i],
                curDateStr = tInfo.week.slice(-1),
                nextDateStr,
                tomArr = [];
            // data.forecast[0] 是当天
            i++;
            for(j=data.forecast.length;i<j;i++){
                tInfo = data.forecast[i];
                nextDateStr = tInfo.week.slice(-1);
                if( nextDateStr !== curDateStr ){
                    tomArr.push({
                        week: nextDateStr,
                        desc: tInfo.desc,
                        high: tInfo.high_temper,
                        low: tInfo.low_temper
                    });
                    curDateStr = nextDateStr;
                }
            }
            if(tomArr[0]){
                inps.tomInfo.innerHTML = '周'+tomArr[0].week+' '+tomArr[0].desc+' '+tomArr[0].high+'°/'+tomArr[0].low+'°';
            }else{
                inps.tomInfo.innerHTML = "";
            }
            if(tomArr[1]){
                inps.aTomInfo.innerHTML = '周'+tomArr[1].week+' '+tomArr[1].desc+' '+tomArr[1].high+'°/'+tomArr[1].low+'°';
            }else{
                inps.aTomInfo.innerHTML = "";
            }
        }
        //控制天气图标的切换
        var claName = getWeaClassByCode( data.weather );
        wIconEle.className = claName;

        //渲染完毕后打开显示层 关闭loading
        weatherLoad.hide();
        weatherWin.show();
    }

    function getWeaClassByCode(code){
        wClassCode = wcodeToClass[code] ? wcodeToClass[code] : '16' ;
        return wClassprev+wClassCode;
    }    
},'weather');

business(function(window){
    //加载天气预报的代码
    var doc = window.document,
        element = doc.documentElement,
        sp = doc.createElement('script');
    sp.src = 'data/weather.js';
    element.appendChild(sp);
    window.setTimeout(function(){
        element.removeChild(sp);
    },15);
},'weather_data');

datas.set('weatherDesc',{
    //晴
    '00': '1',
    //多云
    '01': '2',
    //阴天
    '02': '9',
    //阵雨
    '03': '3',
    //雷阵雨
    '04': '6',
    //雷阵雨并伴有冰雹
    '05': '6',
    //雨夹雪
    '06': '7',
    //小雨
    '07': '4',
    //中雨
    '08': '4',
    //大雨
    '09': '5',
    //暴雨
    '10': '5',
    //大暴雨
    '11': '6',
    //特大暴雨
    '12': '6',
    //阵雪
    '13': '12',
    //小雪
    '14': '10',
    //中雪
    '15': '10',
    //大雪
    '16': '11',
    //暴雪
    '17': '11',
    //雾
    '18': '13',
    //冻雨
    '19': '11',
    //沙尘暴
    '20': '14',
    //小雨-中雨
    '21': '4',
    //中雨-大雨
    '22': '5',
    //大雨-暴雨
    '23': '5',
    //暴雨-大暴雨
    '24': '6',
    //大暴雨-特大暴雨
    '25': '6',
    //小雪-中雪
    '26': '10',
    //大雪-暴雪
    '28': '11',
    //浮尘
    '29': '14',
    //扬沙
    '30': '14',
    //强沙尘暴
    '31': '14',
    //飑
    '32': '15',
    //龙卷风
    '33': '15',
    //弱高吹雪
    '34': '11',
    //轻雾
    '35': '13',
    //霾
    '53': '13'
});

datas.set('table',{
    //电视剧
    'dsj':[{
            img: 'dsj_1.jpg',
            title: '步步惊情',
            link: 'http://tv.sohu.com/20140423/n398662724.shtml/?pvid=e6625371390abd5e'
        },{
            img: 'dsj_2.jpg',
            title: '宫锁连城',
            link: 'http://tv.sohu.com/20140409/n397919777.shtml/?pvid=e6625371390abd5e'
        },{
            img: 'dsj_3.jpg',
            title: '神盾局特工',
            link: 'http://tv.sohu.com/20130925/n387205449.shtml/?pvid=e6625371390abd5e'
        },'left'],
    //电影
    'dy':[{
            img: 'dy_2.jpg',
            title: '大话天仙',
            link: 'http://tv.sohu.com/20140410/n398053068.shtml/?pvid=e6625371390abd5e'
        },{   
            img: 'dy_3.jpg',
            title: '夺命地铁',
            link: 'http://tv.sohu.com/20140417/n398422654.shtml/?pvid=e6625371390abd5e'
        },{
            img: 'dy_1.jpg',
            title: '奥林匹斯的陷落',
            link: 'http://tv.sohu.com/20140410/n398041461.shtml/?pvid=e6625371390abd5e'
        },'left'],
    //大陆剧
    'dlj':[{   
            img: 'dlj_1.jpg',
            title: '我爱男闺蜜',
            link: 'http://tv.sohu.com/20140416/n398357492.shtml/?pvid=e6625371390abd5e'
        },{   
            img: 'dlj_2.jpg',
            title: '舌尖上的中国2',
            link: 'http://tv.sohu.com/20140418/n398481382.shtml/?pvid=e6625371390abd5e'
        },{
            img: 'dlj_3.jpg',
            title: '金玉良缘',
            link: 'http://tv.sohu.com/20140421/n398595823.shtml/?pvid=e6625371390abd5e'
        },'left'],
    //韩剧
    'hj':[{   
            img: 'hj_1.jpg',
            title: '密会',
            link: 'http://tv.sohu.com/20140317/n396756250.shtml/?pvid=e6625371390abd5e'
        },{   
            img: 'hj_2.jpg',
            title: '想你',
            link: 'http://tv.sohu.com/20121108/n356963027.shtml/?pvid=e6625371390abd5e'
        },{
            img: 'hj_3.jpg',
            title: '继承者们',
            link: 'http://tv.sohu.com/20131010/n387840939.shtml/?pvid=e6625371390abd5e'
        },'left'],
    //机票
    'jp':[{   
            img: 'jp_1.jpg',
            title: '机票1折',
            link: 'http://flight.qunar.com/?ex_track=auto_533d34ef'
        },{   
            img: 'jp_2.jpg',
            title: '特价机票',
            link: 'http://flight.qunar.com/site/lplist.htm?ex_track=auto_533d34ef'
        },{
            img: 'jp_3.jpg',
            title: '国际机票预约',
            link: 'http://flight.qunar.com/intersubs/subs/entry.do?ex_track=auto_533d34ef'
        },'right'],
    //酒店
    'jd':[{   
            img: 'jd_1.jpg',
            title: '酒店1折',
            link: 'http://hotel.qunar.com/?ex_track=auto_533d34ee'
        },{   
            img: 'jd_2.jpg',
            title: '客栈民宿',
            link: 'http://bnb.qunar.com/?ex_track=auto_533d34ee'
        },{
            img: 'jd_3.jpg',
            title: '高端酒店',
            link: 'http://lh.qunar.com/?ex_track=auto_533d34ee'
        },'right'],
    //度假
    'dj':[{   
            img: 'dj_1.jpg',
            title: '度假1折',
            link: 'http://dujia.qunar.com/?ex_track=auto_533d34ec'
        },{   
            img: 'dj_2.jpg',
            title: '出境游',
            link: 'http://dujia.qunar.com/p/abroad/?ex_track=auto_533d34ec'
        },{
            img: 'dj_3.jpg',
            title: '国内游',
            link: 'http://dujia.qunar.com/p/domestic/?ex_track=auto_533d34ec'
        },'right'],
    //旅游
    'ly':[{   
            img: 'ly_1.jpg',
            title: '团购1折',
            link: 'http://tuan.qunar.com/?ex_track=auto_533d34e8'
        },{   
            img: 'ly_2.jpg',
            title: '周边游团购',
            link: 'http://tuan.qunar.com/?category=abroad/?ex_track=auto_533d34e8'
        },{
            img: 'ly_3.jpg',
            title: '酒店团购',
            link: 'http://tuan.qunar.com/?category=hotel/?ex_track=auto_533d34e8'
        },'right']
});

datas.set('fameDefUrls',{
    'http://www.baidu.com/?tn=98050039_pg':'百度',
    'http://www.taobao.com/':'淘宝',
    'http://weibo.com/':'新浪微博',
    'http://www.ifeng.com/':'凤凰网',
    'http://www.soufun.com/': '搜房网',
    'http://www.163.com/': '网易',
    'http://qzone.qq.com/': 'QQ空间',
    'http://union.suning.com/aas/open/vistorAd.action?userId=138927&webSiteId=0&adInfoId=00&adBookId=0&vistURL=http://www.suning.com/': '苏宁易购',
    'http://union.jumei.com/UnionAd/Count?code=MQkyMDMJYUhSMGNEb3ZMM2QzZHk1cWRXMWxhUzVqYjIwdgkxCXVj': '聚美优品',
    'http://hot.yhd.com?tracker_u=109673645': '1号店',
    'http://p.yiqifa.com/c?s=95157aee&w=700659&c=254&i=160&l=0&e=&t=http://www.jd.com/': '京东商城',
    'http://www.amazon.cn/?_encoding=UTF8&camp=536&creative=3200&linkCode=ur2&tag=123uc04-23': '亚马逊',
    'http://www.mogujie.com/webapp/cpsevent505': '蘑菇街',
    'http://track.lefeng.com/track.jsp?aid=1583807&cid2=&cid3=&url=http://www.lefeng.com/?utm_source=UCMZ&utm_medium=cpm&utm_campaign=683': '乐蜂网化妆品',
    'http://www.qunar.com/?ex_track=auto_52b81ab2': '去哪儿网',
    'http://u.ctrip.com/union/CtripRedirect.aspx?TypeID=2&Allianceid=15138&sid=436188&OUID=&jumpUrl=http://www.ctrip.com': '携程网',
    'http://www.liepin.com/abtest/44/': '猎聘网高薪',
    'http://www.ly.com/#refid=31349946': '同程旅游',
    'http://www.tiantian.com/CooperationInterface.asp?from=ucpcmzh&type=cps&activitykey=ucpcmzh14310163840&destpage=http://www.tiantian.com/?utm_source=uc123_cps_mz_314': '天天网',
    'http://tj.ad12345.com/?id=263': '出国留学',
    'http://www.58.com/?path=?utm_source%3dd_123.uc%26utm_campaign%3d123.uc-101%26spm=123.uc-mingzhan-1010': '58同城',
    'http://reg.jiayuan.com/st/?id=420967&url=http://reg.jiayuan.com': '世纪佳缘',
    'http://a1722.oadz.com/link/C/1722/9148/rb81HQdjAqgLIozu7QGqCBVKwwU_/p007/0/http:/www.jiuxian.com/cpspublic/cps.htm?src=nav&code=uc_2014_00001&url=http://www.jiuxian.com/': '酒仙网购酒',
    'http://www.meituan.com/?utm_campaign=uc123.com&utm_medium=nav&utm_source=uc123.com&utm_content=top': '美团网团购',
    'http://www.bitauto.com/?WT.mc_id=tbmz': '易车网',
    'http://click.union.vip.com/redirect.php?url=eyJkZXN0dXJsIjoiaHR0cDpcL1wvd3d3LnZpcC5jb20iLCJ1Y29kZSI6Ind4b3RqNml0Iiwic2NoZW1lY29kZSI6Ijh0cDBnOTluIiwiY2hhbiI6Im16In0=': '唯品会',
    'http://union.dangdang.com/transfer.php?from=P-321685&ad_type=10&sys_id=1&backurl=http%3A%2F%2Fwww.dangdang.com': '当当网',
    'http://www.gome.com.cn?cmpid=cps_3041_3084&sid=3041&wid=3084&feedback=uc': '国美在线'
});

