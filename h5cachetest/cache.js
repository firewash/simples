alert(21);
// 
// if (-1 != navigator.userAgent.toLocaleLowerCase().indexOf("trident")) {
	// window.console = {};
	// window.console.log = function() {
	// };
	// window.console.dir = function() {
	// }
// }(function(f) {
	// var d = f.localStorage, e = f.ls, a = "v1_", c, b = null;
	// function g(h) {
		// if (c && ( h in c)) {
			// return c[h] + h
		// } else {
			// return a + h
		// }
	// }
// 
	// if (d) {
		// b = {
			// item : function(i, k) {
				// var h = g(i);
				// if (!!k) {
					// if (c && ( i in c)) {
						// d.removeItem(a + i)
					// }
					// try {
						// d.setItem(h, k)
					// } catch(l) {
					// }
					// return true
				// } else {
					// return d.getItem(h)
				// }
			// },
			// removeItem : function(h) {
				// var h = g(h);
				// d.removeItem(h);
				// this.length--;
				// return true
			// },
			// clear : function() {
				// d.clear();
				// this.length = 0;
				// return true
			// },
			// noConflict : function() {
				// f.ls = e;
				// return b
			// },
			// length : d.length
		// };
		// if (d.getItem("data_version") !== a) {
			// d.clear();
			// d.setItem("data_version", a)
		// }
	// }
	// f.ls = b
// })(window);
// (function(e) {
	// var a = {}, d = {}, c = {}, f = function(k, l) {
		// a[k] = l;
		// if (d[k]) {
			// for (var h = 0, g = d[k].length; h < g; ) {
				// d[k][h++](l)
			// }
			// d[k] = null
		// }
	// }, b = function(g, h) {
		// if ( g in a) {
			// e.setTimeout(function() {
				// h(a[g])
			// }, 15);
			// return
		// }
		// !d[g] && (d[g] = []);
		// d[g].push(h)
	// }, c = {
		// set : f,
		// use : b
	// };
	// e.datas = c
// })(window);
// (function(c) {
	// var d = [], e, b = function(f) {
		// try {
			// typeof f.fn === "function" && f.fn(c)
		// } catch(g) {
			// console.log("# ERROR from, " + f.busName);
			// console.log("# ERROR info, " + g.message)
		// }
	// }, a = function(f, g) {
		// if (e) {
			// b({
				// fn : f,
				// busName : g
			// })
		// } else {
			// d.push({
				// fn : f,
				// busName : g
			// })
		// }
	// };
	// $(function() {
		// e = true;
		// if (d.length != 0) {
			// for (var g = 0, f = d.length; g < f; ) {
				// b(d[g++])
			// }
		// }
		// d = null
	// });
	// c.business = a
// })(window);
// var config = {
	// search : {
		// sogou : {
			// name : "搜狗搜索",
			// news : {
				// site : "news",
				// word : "query",
				// params : [["pid", "sogou-site-944a5ae3483ed5c1"], ["ie", "utf-8"]],
				// action : "http://news.sogou.com/news"
			// },
			// web : {
				// site : "web",
				// word : "query",
				// params : [["pid", "sogou-site-944a5ae3483ed5c1"], ["ie", "utf-8"]],
				// action : "http://www.sogou.com/sogou"
			// },
			// zhidao : {
				// site : "zhidao",
				// word : "sp",
				// params : [["pid", "sogou-site-944a5ae3483ed5c1"], ["ie", "utf-8"]],
				// action : "http://wenwen.soso.com/z/Search.e"
			// },
			// music : {
				// site : "music",
				// word : "query",
				// params : [["pid", "sogou-site-944a5ae3483ed5c1"], ["ie", "utf-8"]],
				// action : "http://mp3.sogou.com/music.so"
			// },
			// pic : {
				// site : "pic",
				// word : "query",
				// params : [["pid", "sogou-site-944a5ae3483ed5c1"], ["ie", "utf-8"]],
				// action : "http://pic.sogou.com/pics"
			// },
			// video : {
				// site : "video",
				// word : "query",
				// params : [["pid", "sogou-site-944a5ae3483ed5c1"], ["ie", "utf-8"]],
				// action : "http://v.sogou.com/v"
			// },
			// maps : {
				// site : "maps",
				// word : "what",
				// params : [["pid", "sogou-site-944a5ae3483ed5c1"], ["ie", "utf-8"]],
				// action : "http://map.sogou.com/"
			// }
		// },
		// google : {
			// name : "谷歌搜索",
			// news : {
				// site : "news",
				// word : "q",
				// params : [["ie", "utf-8"]],
				// action : "https://news.google.com.hk/nwshp"
			// },
			// web : {
				// site : "web",
				// word : "q",
				// params : [["ie", "utf-8"]],
				// action : "https://www.google.com.hk/search"
			// },
			// maps : {
				// site : "maps",
				// word : "q",
				// params : [["ie", "utf-8"]],
				// action : "http://ditu.google.cn/maps"
			// },
			// pic : {
				// site : "pic",
				// word : "q",
				// params : [["ie", "utf-8"], ["tbm", "isch"]],
				// action : "https://www.google.com/search"
			// }
		// },
		// bing : {
			// name : "必应搜索",
			// news : {
				// site : "news",
				// word : "q",
				// params : [["ie", "utf-8"]],
				// action : "http://cn.bing.com/news/search"
			// },
			// web : {
				// site : "web",
				// word : "q",
				// params : [["ie", "utf-8"]],
				// action : "http://cn.bing.com/search"
			// },
			// pic : {
				// site : "pic",
				// word : "q",
				// params : [["ie", "utf-8"]],
				// action : "http://cn.bing.com/images/search"
			// },
			// video : {
				// site : "video",
				// word : "q",
				// params : [["ie", "utf-8"]],
				// action : "http://cn.bing.com/videos/search"
			// },
			// maps : {
				// site : "maps",
				// word : "q",
				// params : [["ie", "utf-8"]],
				// action : "http://cn.bing.com/ditu/default.aspx"
			// }
		// },
		// taobao : {
			// name : "淘宝搜索",
			// news : {
				// site : "news",
				// word : "q",
				// params : [["ie", "utf-8"]],
				// action : "http://s.taobao.com/search"
			// },
			// web : {
				// site : "web",
				// word : "q",
				// params : [["ie", "utf-8"]],
				// action : "http://s.taobao.com/search"
			// },
			// tieba : {
				// site : "tieba",
				// word : "q",
				// params : [["ie", "utf-8"]],
				// action : "http://s.taobao.com/search"
			// },
			// zhidao : {
				// site : "zhidao",
				// word : "q",
				// params : [["ie", "utf-8"]],
				// action : "http://s.taobao.com/search"
			// },
			// music : {
				// site : "music",
				// word : "q",
				// params : [["ie", "utf-8"]],
				// action : "http://s.taobao.com/search"
			// },
			// pic : {
				// site : "pic",
				// word : "q",
				// params : [["ie", "utf-8"]],
				// action : "http://s.taobao.com/search"
			// },
			// video : {
				// site : "video",
				// word : "q",
				// params : [["ie", "utf-8"]],
				// action : "http://s.taobao.com/search"
			// },
			// maps : {
				// site : "maps",
				// word : "q",
				// params : [["ie", "utf-8"]],
				// action : "http://s.taobao.com/search"
			// },
			// wenku : {
				// site : "wenku",
				// word : "q",
				// params : [["ie", "utf-8"]],
				// action : "http://s.taobao.com/search"
			// }
		// },
		// youku : {
			// name : "优酷搜索",
			// news : {
				// site : "news",
				// word : "keyword",
				// params : [["ie", "utf-8"]],
				// action : "http://www.soku.com/v"
			// },
			// web : {
				// site : "web",
				// word : "keyword",
				// params : [["ie", "utf-8"]],
				// action : "http://www.soku.com/v"
			// },
			// tieba : {
				// site : "tieba",
				// word : "keyword",
				// params : [["ie", "utf-8"]],
				// action : "http://www.soku.com/v"
			// },
			// zhidao : {
				// site : "zhidao",
				// word : "keyword",
				// params : [["ie", "utf-8"]],
				// action : "http://www.soku.com/v"
			// },
			// music : {
				// site : "music",
				// word : "keyword",
				// params : [["ie", "utf-8"]],
				// action : "http://www.soku.com/v"
			// },
			// pic : {
				// site : "pic",
				// word : "keyword",
				// params : [["ie", "utf-8"]],
				// action : "http://www.soku.com/v"
			// },
			// video : {
				// site : "video",
				// word : "keyword",
				// params : [["ie", "utf-8"]],
				// action : "http://www.soku.com/v"
			// },
			// maps : {
				// site : "maps",
				// word : "keyword",
				// params : [["ie", "utf-8"]],
				// action : "http://www.soku.com/v"
			// },
			// wenku : {
				// site : "wenku",
				// word : "keyword",
				// params : [["ie", "utf-8"]],
				// action : "http://www.soku.com/v"
			// }
		// },
		// baidu : {
			// name : "百度一下",
			// news : {
				// site : "news",
				// word : "word",
				// params : [["tn", "news"], ["ie", "utf-8"]],
				// action : "http://news.baidu.com/ns"
			// },
			// web : {
				// site : "web",
				// word : "wd",
				// params : [["ie", "utf-8"], ["tn", "98050039_pg"]],
				// action : "http://www.baidu.com/s"
			// },
			// tieba : {
				// site : "tieba",
				// word : "kw",
				// params : [["ie", "utf-8"], ["tn", "98050039_pg"]],
				// action : "http://tieba.baidu.com/f"
			// },
			// zhidao : {
				// site : "zhidao",
				// word : "word",
				// params : [["ie", "utf-8"], ["tn", "98050039_pg"]],
				// action : "http://zhidao.baidu.com/search"
			// },
			// music : {
				// site : "music",
				// word : "key",
				// params : [["tn", "98050039_pg"]],
				// action : "http://music.baidu.com/search"
			// },
			// pic : {
				// site : "pic",
				// word : "word",
				// params : [["ie", "utf-8"], ["tn", "98050039_pg"]],
				// action : "http://image.baidu.com/i"
			// },
			// video : {
				// site : "video",
				// word : "word",
				// params : [["ie", "utf-8"], ["tn", "98050039_pg"]],
				// action : "http://v.baidu.com/v"
			// },
			// maps : {
				// site : "maps",
				// word : "word",
				// params : [["ie", "utf-8"], ["tn", "98050039_pg"]],
				// action : "http://map.baidu.com/m"
			// },
			// wenku : {
				// site : "wenku",
				// word : "word",
				// params : [["ie", "utf-8"], ["tn", "98050039_pg"]],
				// action : "http://wenku.baidu.com/search"
			// }
		// }
	// },
	// email : [{
		// name : "atsohu",
		// listName : "@sohu.com 搜狐",
		// type : "mail",
		// action : "http://passport.sohu.com/login.jsp",
		// params : ["loginid", "Password", ["fl", "1"], ["vr", "1|1"], ["appid", "1000"], ["ru", "http://login.mail.sohu.com/servlet/LoginServlet"], ["eru", "http://login.mail.sohu.com/login.jsp"], ["ct", "1173080990"], ["sg", "5082635c77272088ae7241ccdf7cf062"], ["enterVip", "true"], ["firstlogin", "false"], [".intl", "cn"], ["isplogin", "true"], ["domains", "sohu"]],
		// at : "@sohu.com"
	// }, {
		// name : "at21cn",
		// listName : "@21cn.com",
		// type : "mail",
		// action : "http://passport.21cn.com/maillogin.jsp",
		// params : ["UserName", "passwd", ["domainname", "21cn.com"]],
		// at : "@21cn.com"
	// }, {
		// name : "at139",
		// listName : "@139.com",
		// type : "mail",
		// action : "https://mail.10086.cn/Login/Login.ashx?clientid=5025",
		// params : ["UserName", "Password", ["ClientId", "5025"]],
		// at : ""
	// }]
// };
// $(function() {
	// var a = config.email[0];
	// createEmailParams(a, $(".emailForm"));
	// mailSubmit();
	// jsonp("price", "http://ent.souluo.net/uc123/data.php")
// });
// $(".curMail").click(function(a) {
	// $(".emailList-ul").toggle();
	// a.stopPropagation()
// });
// $(".emailList-li").click(function() {
	// var e = $(".curMail");
	// $(".emailList-ul").hide();
	// e.html('<span class="float-l">' + $(this).html() + '</span><i class="tri sprite"></i>');
	// $(".emailForm input[type=hidden]").remove();
	// var b = $(this).index(), d = config.email[b], a = $(".emailForm"), c = d.type;
	// e.attr("data-index", b).attr("data-type", d.type);
	// createEmailParams(d, a);
	// a.attr({
		// action : d.action
	// }).children(".email-user").attr({
		// name : d.params[0],
		// "data-at" : d.at
	// });
	// a.children(".email-pwd").attr("name", d.params[1]);
	// mailSubmit()
// });
// $(".emailList-li-link").click(function() {
	// $(".emailList-ul").hide()
// });
// function mailSubmit() {
	// $(".email-submit").unbind();
	// $(".email-submit").bind("click", function() {
		// var a = $("#emailForm").attr("action");
		// $(this).attr("lmurl", a);
		// logWrite(this, "click")
	// });
	// $(".email-submit").click(function(d) {
		// d.preventDefault();
		// var b = $(".emailForm").clone(), f = b.find(".email-user"), c = f.val(), e = b.find(".email-pwd").val(), a = f.attr("data-at");
		// b.appendTo("body").hide();
		// if (a.indexOf("sohu") > 0) {
			// $('<input name="UserName" value=' + c + '><input name="id" value=' + c + '><input name="username" value=' + c + '><input name="password" value=' + e + '><input name="m" value=' + c + '><input name="passwd" value=' + e + '><input name="mpass" value=' + e + ">").appendTo(b)
		// }
		// if (c.indexOf("@") < 0 && a) {
			// f.val(c + a)
		// }
		// b.submit();
		// setTimeout(function() {
			// b.remove()
		// }, 1000)
	// })
// }
// 
// function createEmailParams(e, c) {
	// var b = e.params.length, f = e.params;
	// if (b > 2) {
		// for (var d = 2; d < b; d++) {
			// var a = $('<input type="hidden" name="' + f[d][0] + '" value="' + f[d][1] + '">');
			// a.appendTo(c)
		// }
	// }
// }
// $("#search_logo_list").delegate("li", "click", function() {
	// var b = $(this).attr("data-name"), a = $(".search-form form");
	// $(".search-tabList li").each(function() {
		// if ( typeof config.search[b][$(this).attr("data-val")] !== "undefined") {
			// $(this).attr("data-search", b);
			// $(this).attr("data-action", config.search[b][$(this).attr("data-val")].action)
		// } else {
			// $(this).attr("data-search", "baidu");
			// $(this).attr("data-action", config.search.baidu[$(this).attr("data-val")].action)
		// }
	// });
	// $("#change_search_logo").removeClass().addClass("search-" + b + "-logo");
	// a.attr({
		// action : $(".search-tabList .current").attr("data-action")
	// });
	// a.find(".search-input input").attr("name", config.search[$(".search-tabList .current").attr("data-search")][$(".search-tabList .current").attr("data-val")].word);
	// createSearchParams(config.search[$(".search-tabList .current").attr("data-search")][$(".search-tabList .current").attr("data-val")], a);
	// $(".search-sbmit").attr("value", config.search[b].name);
	// $("#search_box").css("display", "none");
	// ls.item("searchType", b)
// });
// $("#search_logo_list").delegate("li", "mouseover", function() {
	// $(this).addClass("current").siblings().removeClass()
// });
// $(function() {
	// var a = ls && ls.item("searchType");
	// a = a ? a : "baidu";
	// $('#search_logo_list li[data-name="' + a + '"]').trigger("click");
	// $("#search_logo").show();
	// $("#search_submit").show()
// });
// $("#search_logo").click(function(a) {
	// var a = a || event;
	// a.stopPropagation ? a.stopPropagation() : a.cancelBubble = true;
	// if ($("#search_box").css("display") != "block") {
		// $("#search_box").css("display", "block")
	// } else {
		// $("#search_box").css("display", "none")
	// }
// });
// $(".search-tabList li").click(function(c) {
	// var d = $(this).attr("data-action"), b = $(this).attr("data-search"), e = $(this).attr("data-val"), a = $(".search-form form");
	// $(this).addClass("current").siblings().removeClass("current");
	// a.attr({
		// action : d
	// });
	// a.find(".search-input input").attr("name", config.search[b][e].word);
	// createSearchParams(config.search[b][e], a);
	// c.stopPropagation()
// });
// function createSearchParams(e, c) {
	// var f = e.params || [], b = f.length;
	// c.find(".search-params").empty();
	// for (var d = 0; d < b; d++) {
		// var a = $('<input type="hidden" name="' + f[d][0] + '" value="' + f[d][1] + '">');
		// c.children(".search-params").append(a)
	// }
// }
// $(document).click(function(a) {
	// window.exitFame && window.exitFame();
	// $(".emailList-ul").hide();
	// $("#search_box").hide()
// });
// function jsonp(c, b) {
	// var a = document.createElement("script");
	// a.setAttribute("src", b);
	// a.setAttribute("id", c);
	// document.getElementsByTagName("body")[0].appendChild(a)
// }
// 
// function tb(e) {
	// var f = document.getElementById("price_img");
	// var d = document.getElementById("price_txt");
	// var c = [], b = [];
	// for (var a = 0; a < e.chosen.length; a++) {
		// c.push('<div class="tb-pic tb-2pic ' + (a == 0 ? "mr8" : "") + '">');
		// c.push('<a href="' + e.chosen[a][1] + '">');
		// c.push('<img src="' + e.chosen[a][0] + '" alt="' + e.chosen[a][2] + '">');
		// c.push('</a><p><a href="' + e.chosen[a][1] + '">' + e.chosen[a][2] + "</a></p>");
		// c.push("</div>")
	// }
	// for (var a = 0; a < e.price.length; a++) {
		// b.push('<li class="tbHotSale-li"><a href="' + e.price[a][0] + '">' + e.price[a][1] + "</a></li>")
	// }
	// f.innerHTML = c.join("");
	// d.innerHTML = b.join("")
// }(function() {
	// var i = new Array(20), p = new Array(12), b, l = "日一二三四五六", e = "一二三四五六七八九十", a = "正二三四五六七八九十冬腊", q, d, o, k, s, c, r, t;
	// function m() {
		// i[0] = 268949;
		// i[1] = 3402;
		// i[2] = 3493;
		// i[3] = 133973;
		// i[4] = 1386;
		// i[5] = 464219;
		// i[6] = 605;
		// i[7] = 2349;
		// i[8] = 334123;
		// i[9] = 2709;
		// i[10] = 2890;
		// i[11] = 267946;
		// i[12] = 2773;
		// i[13] = 592565;
		// i[14] = 1210;
		// i[15] = 2651;
		// i[16] = 395863;
		// i[17] = 1323;
		// i[18] = 2707;
		// i[19] = 265877;
		// p[0] = 0;
		// p[1] = 31;
		// p[2] = 59;
		// p[3] = 90;
		// p[4] = 120;
		// p[5] = 151;
		// p[6] = 181;
		// p[7] = 212;
		// p[8] = 243;
		// p[9] = 273;
		// p[10] = 304;
		// p[11] = 334
	// }
// 
	// m();
	// function g(u, v) {
		// return (u >> v) & 1
	// }
// 
	// function n() {
		// var x, u, z, v, y = false, w = b.getYear();
		// if (w < 1900) {
			// w += 1900
		// }
		// x = (w - 2001) * 365 + Math.floor((w - 2001) / 4) + p[b.getMonth()] + b.getDate() - 23;
		// if (b.getYear() % 4 == 0 && b.getMonth() > 1) {
			// x++
		// }
		// for ( u = 0; ; u++) {
			// v = (i[u] < 4095) ? 11 : 12;
			// for ( z = v; z >= 0; z--) {
				// if (x <= 29 + g(i[u], z)) {
					// y = true;
					// break
				// }
				// x = x - 29 - g(i[u], z)
			// }
			// if (y) {
				// break
			// }
		// }
		// q = 2001 + u;
		// d = v - z + 1;
		// o = x;
		// if (v == 12) {
			// if (d == Math.floor(i[u] / 65536) + 1) {
				// d = 1 - d
			// }
			// if (d > Math.floor(i[u] / 65536) + 1) {
				// d--
			// }
		// }
		// k = Math.floor((b.getHours() + 3) / 2)
	// }
// 
	// function f() {
		// var u;
		// if (d < 1) {
			// u = "闰" + a.charAt(-d - 1) + "月"
		// } else {
			// u = a.charAt(d - 1) + "月"
		// }
		// u += (o < 11) ? "初" : ((o < 20) ? "十" : ((o < 30) ? "廿" : "卅"));
		// if (o % 10 != 0 || o == 10) {
			// u += e.charAt((o - 1) % 10)
		// }
		// t = u
	// }
// 
	// function h() {
		// s = b.getFullYear() + "-" + (b.getMonth() + 1) + "-" + b.getDate();
		// c = (b.getMonth() + 1) + "月" + b.getDate() + "日 星期" + l.charAt(b.getDay());
		// r = b.getHours() + ":" + b.getMinutes() + ":" + b.getSeconds()
	// }
	// window.jDate = function(u) {
		// b = u ? new Date(u) : new Date();
		// n();
		// h();
		// f();
		// return {
			// dayStr : s,
			// weekStr : c,
			// timeStr : r,
			// cnDayStr : t
		// }
	// }
// })();
// (function() {
	// var k = 0, h = 8;
	// window.md5 = function(n) {
		// var o = m(d(a(n), n.length * h));
		// return o
	// };
	// function d(y, s) {
		// y[s >> 5] |= 128 << ((s) % 32);
		// y[(((s + 64) >>> 9) << 4) + 14] = s;
		// var w = 1732584193;
		// var v = -271733879;
		// var u = -1732584194;
		// var t = 271733878;
		// for (var p = 0; p < y.length; p += 16) {
			// var r = w;
			// var q = v;
			// var o = u;
			// var n = t;
			// w = g(w, v, u, t, y[p + 0], 7, -680876936);
			// t = g(t, w, v, u, y[p + 1], 12, -389564586);
			// u = g(u, t, w, v, y[p + 2], 17, 606105819);
			// v = g(v, u, t, w, y[p + 3], 22, -1044525330);
			// w = g(w, v, u, t, y[p + 4], 7, -176418897);
			// t = g(t, w, v, u, y[p + 5], 12, 1200080426);
			// u = g(u, t, w, v, y[p + 6], 17, -1473231341);
			// v = g(v, u, t, w, y[p + 7], 22, -45705983);
			// w = g(w, v, u, t, y[p + 8], 7, 1770035416);
			// t = g(t, w, v, u, y[p + 9], 12, -1958414417);
			// u = g(u, t, w, v, y[p + 10], 17, -42063);
			// v = g(v, u, t, w, y[p + 11], 22, -1990404162);
			// w = g(w, v, u, t, y[p + 12], 7, 1804603682);
			// t = g(t, w, v, u, y[p + 13], 12, -40341101);
			// u = g(u, t, w, v, y[p + 14], 17, -1502002290);
			// v = g(v, u, t, w, y[p + 15], 22, 1236535329);
			// w = c(w, v, u, t, y[p + 1], 5, -165796510);
			// t = c(t, w, v, u, y[p + 6], 9, -1069501632);
			// u = c(u, t, w, v, y[p + 11], 14, 643717713);
			// v = c(v, u, t, w, y[p + 0], 20, -373897302);
			// w = c(w, v, u, t, y[p + 5], 5, -701558691);
			// t = c(t, w, v, u, y[p + 10], 9, 38016083);
			// u = c(u, t, w, v, y[p + 15], 14, -660478335);
			// v = c(v, u, t, w, y[p + 4], 20, -405537848);
			// w = c(w, v, u, t, y[p + 9], 5, 568446438);
			// t = c(t, w, v, u, y[p + 14], 9, -1019803690);
			// u = c(u, t, w, v, y[p + 3], 14, -187363961);
			// v = c(v, u, t, w, y[p + 8], 20, 1163531501);
			// w = c(w, v, u, t, y[p + 13], 5, -1444681467);
			// t = c(t, w, v, u, y[p + 2], 9, -51403784);
			// u = c(u, t, w, v, y[p + 7], 14, 1735328473);
			// v = c(v, u, t, w, y[p + 12], 20, -1926607734);
			// w = l(w, v, u, t, y[p + 5], 4, -378558);
			// t = l(t, w, v, u, y[p + 8], 11, -2022574463);
			// u = l(u, t, w, v, y[p + 11], 16, 1839030562);
			// v = l(v, u, t, w, y[p + 14], 23, -35309556);
			// w = l(w, v, u, t, y[p + 1], 4, -1530992060);
			// t = l(t, w, v, u, y[p + 4], 11, 1272893353);
			// u = l(u, t, w, v, y[p + 7], 16, -155497632);
			// v = l(v, u, t, w, y[p + 10], 23, -1094730640);
			// w = l(w, v, u, t, y[p + 13], 4, 681279174);
			// t = l(t, w, v, u, y[p + 0], 11, -358537222);
			// u = l(u, t, w, v, y[p + 3], 16, -722521979);
			// v = l(v, u, t, w, y[p + 6], 23, 76029189);
			// w = l(w, v, u, t, y[p + 9], 4, -640364487);
			// t = l(t, w, v, u, y[p + 12], 11, -421815835);
			// u = l(u, t, w, v, y[p + 15], 16, 530742520);
			// v = l(v, u, t, w, y[p + 2], 23, -995338651);
			// w = e(w, v, u, t, y[p + 0], 6, -198630844);
			// t = e(t, w, v, u, y[p + 7], 10, 1126891415);
			// u = e(u, t, w, v, y[p + 14], 15, -1416354905);
			// v = e(v, u, t, w, y[p + 5], 21, -57434055);
			// w = e(w, v, u, t, y[p + 12], 6, 1700485571);
			// t = e(t, w, v, u, y[p + 3], 10, -1894986606);
			// u = e(u, t, w, v, y[p + 10], 15, -1051523);
			// v = e(v, u, t, w, y[p + 1], 21, -2054922799);
			// w = e(w, v, u, t, y[p + 8], 6, 1873313359);
			// t = e(t, w, v, u, y[p + 15], 10, -30611744);
			// u = e(u, t, w, v, y[p + 6], 15, -1560198380);
			// v = e(v, u, t, w, y[p + 13], 21, 1309151649);
			// w = e(w, v, u, t, y[p + 4], 6, -145523070);
			// t = e(t, w, v, u, y[p + 11], 10, -1120210379);
			// u = e(u, t, w, v, y[p + 2], 15, 718787259);
			// v = e(v, u, t, w, y[p + 9], 21, -343485551);
			// w = f(w, r);
			// v = f(v, q);
			// u = f(u, o);
			// t = f(t, n)
		// }
		// return Array(w, v, u, t)
	// }
// 
	// function b(v, p, o, n, u, r) {
		// return f(i(f(f(p, v), f(n, r)), u), o)
	// }
// 
	// function g(p, o, v, u, n, r, q) {
		// return b((o & v) | ((~o) & u), p, o, n, r, q)
	// }
// 
	// function c(p, o, v, u, n, r, q) {
		// return b((o & u) | (v & (~u)), p, o, n, r, q)
	// }
// 
	// function l(p, o, v, u, n, r, q) {
		// return b(o ^ v ^ u, p, o, n, r, q)
	// }
// 
	// function e(p, o, v, u, n, r, q) {
		// return b(v ^ (o | (~u)), p, o, n, r, q)
	// }
// 
	// function f(n, q) {
		// var p = (n & 65535) + (q & 65535);
		// var o = (n >> 16) + (q >> 16) + (p >> 16);
		// return (o << 16) | (p & 65535)
	// }
// 
	// function i(n, o) {
		// return (n << o) | (n >>> (32 - o))
	// }
// 
	// function a(q) {
		// var p = Array();
		// var n = (1 << h) - 1;
		// for (var o = 0; o < q.length * h; o += h) {
			// p[o >> 5] |= (q.charCodeAt(o / h) & n) << (o % 32)
		// }
		// return p
	// }
// 
	// function m(p) {
		// var o = k ? "0123456789ABCDEF" : "0123456789abcdef";
		// var q = "";
		// for (var n = 0; n < p.length * 4; n++) {
			// q += o.charAt((p[n >> 2] >> ((n % 4) * 8 + 4)) & 15) + o.charAt((p[n >> 2] >> ((n % 4) * 8)) & 15)
		// }
		// return q
	// }
// 
// })();
// business(function(n) {
	// var r = 1, x = n, m = x.ls, z = x.JSON, C, o, B, q = $("#js_famous_show"), s = q.find(".js_show_con"), e = q.find(".js_show_toHandle"), h = $("#js_famous_handle"), d = h.find(".js_handle_con"), v = h.find(".js_handle_toShow"), c = h.find(".js_handle_submit");
	// datas.use("fameDefUrls", function(g) {
		// C = g;
		// o = y();
		// B = t(o);
		// i()
	// });
	// function i() {
		// s.html("");
		// d.html("");
		// var F, G, E;
		// for (var D in B) {
			// if (B[D]) {
				// F = B[D]["name"];
				// G = B[D]["id"];
				// E = u(B[D]["url"]);
				// var K = $("<li></li>");
				// var I = $("<a></a>").attr({
					// lmurl : E,
					// lmv : F,
					// lmk : "centerMz-center" + G,
					// cls : "xw,n",
					// title : F,
					// href : E,
					// urlId : G
				// }).text(F);
				// K.append(I);
				// s.append(K);
				// var K = $("<li></li>").attr("urlId", G);
				// var g = $("<p></p>").attr("title", F);
				// g.text(F);
				// var J = $("<span></span>").attr({
					// urlName : F,
					// "class" : "delete_nav",
					// urlId : G
				// });
				// K.append(g).append(J).appendTo(d)
			// } else {
				// s.append($("<li></li>"));
				// var K = $("<li></li>").attr("urlId", D);
				// d.append(K)
			// }
		// }
		// s.find("a").bind("click", function() {
			// logWrite(this, "click")
		// });
		// d.bind("click", function(O) {
			// var O = O || n.event, P = O.srcElement || O.target;
			// O.stopPropagation ? O.stopPropagation() : O.cancelBubble = true;
			// if (P.nodeName.toLowerCase() == "span" && P.nodeType == 1) {
				// var N = $("#js_famous_alert");
				// var L = $(P);
				// var M = L.attr("urlId");
				// N.find(".js_famName").text(L.attr("urlName"));
				// N.show();
				// N.find(".js_sure").unbind("click").bind("click", function(Q) {
					// var Q = Q || n.event;
					// Q.stopPropagation ? Q.stopPropagation() : Q.cancelBubble = true;
					// L.parent("li").html("");
					// $("#js_famous_alert").hide();
					// o[M] = null
				// })
			// }
		// });
		// c.bind("click", function(O) {
			// var O = O || n.event;
			// O.stopPropagation ? O.stopPropagation() : O.cancelBubble = true;
			// var M = $(this).prevAll(".js_handle_text"), N = $.trim(M[0].value), L = $.trim(M[1].value);
			// N;
			// if (N && L) {
				// A(L, N)
			// }
		// });
		// e.bind("click", function(L) {
			// var L = L || n.event;
			// L.stopPropagation ? L.stopPropagation() : L.cancelBubble = true;
			// h.css({
				// left : q.width() + 1,
				// display : "block",
				// width : q.width()
			// });
			// h.animate({
				// left : 0
			// }, "normal", function() {
				// q.hide()
			// })
		// });
		// v.bind("click", function(L) {
			// var L = L || n.event;
			// L.stopPropagation ? L.stopPropagation() : L.cancelBubble = true;
			// f();
			// H()
		// });
		// h.bind("click", function(L) {
			// var L = L || n.event;
			// L.stopPropagation ? L.stopPropagation() : L.cancelBubble = true
		// });
		// function H(L) {
			// q.show();
			// h.animate({
				// left : h.width() + 1
			// }, "normal", function() {
				// h.hide()
			// })
		// }
		// x.exitFame = H
	// }
// 
	// function f() {
		// l(o);
		// s.html("");
		// var H, F, E, G = "";
		// for (var I in o) {
			// if (o[I]) {
				// H = o[I]["name"];
				// F = o[I]["id"];
				// E = u(o[I]["url"]);
				// var g = $("<li></li>");
				// var D = $("<a></a>").attr({
					// lmurl : E,
					// lmv : H,
					// lmk : "centerMz-center" + F,
					// cls : "xw,n",
					// title : H,
					// href : E,
					// urlId : F
				// }).text(H);
				// g.append(D).appendTo(s)
			// } else {
				// $("<li></li>").appendTo(s)
			// }
		// }
		// s.find("a").bind("click", function() {
			// logWrite(this, "click")
		// })
	// }
// 
	// function A(D, g) {
		// var G = b();
		// if (G) {
			// o[G] = {
				// id : G,
				// url : g,
				// name : D
			// };
			// var F = $("<p></p>").attr("title", D).text(D);
			// var E = $("<span></span>").attr({
				// urlName : D,
				// "class" : "delete_nav",
				// urlId : G
			// });
			// d.find("li[urlId=" + G + "]").html("").append(F).append(E)
		// } else {
			// $("#js_famous_maxAlert").show()
		// }
	// }
// 
	// function b() {
		// for (var g in o) {
			// if (o[g] === null) {
				// return g
			// }
		// }
		// return false
	// }
// 
	// function u(D) {
		// var g = /^(http|https)/;
		// if (!g.test(D)) {
			// return "http://" + D
		// } else {
			// return D
		// }
	// }
// 
	// function y() {
		// var E = p(), g = {}, D = {};
		// if (!E) {
			// E = C;
			// for (var F in E) {
				// D[a(F)] = E[F]
			// }
			// E = D
		// }
		// for (var F in E) {
			// if (E[F] === null) {
				// g[r] = null;
				// r++
			// } else {
				// g[r] = {
					// id : r++,
					// url : k(F),
					// name : E[F]
				// }
			// }
		// }
		// return g
	// }
// 
	// function p() {
		// var D = null, E;
		// try {
			// E = m.item("fameUrls");
			// D = z.parse(E)
		// } catch(g) {
		// }
		// return D
	// }
// 
	// function l(E) {
		// var g = "{";
		// for (var F in E) {
			// if (E[F]) {
				// g += '"' + a(w(E[F].url)) + '": "' + w(E[F].name) + '" ,'
			// } else {
				// g += '"nan' + (++r) + '": null ,'
			// }
		// }
		// g = g.slice(0, -1);
		// g += "}";
		// try {
			// m.item("fameUrls", g)
		// } catch(D) {
		// }
	// }
// 
	// function w(g) {
		// return g.replace(/\"/g, '\\"')
	// }
// 
	// function a(D) {
		// var g = Math.random().toString().slice(10) + "_";
		// return g + D
	// }
// 
	// function k(g) {
		// return g.slice(g.indexOf("_") + 1)
	// }
// 
	// function t(g) {
		// var D = {};
		// for (var E in g) {
			// if (g.hasOwnProperty(E)) {
				// D[E] = g[E]
			// }
		// }
		// return D
	// }
// 
// }, "fames");
// business(function() {
	// var k = $("#lion_tab_win"), c = k.find(".lion_tab_left"), e = k.find(".lion_tab_right"), b = c.find("ul li a"), g = e.find("ul li a"), l = "atmov", i;
	// datas.use("table", function(n) {
		// i = n;
		// h(b.eq(0));
		// d(g.eq(0))
	// });
	// c.find("ul").bind("mouseover", function(o) {
		// var o = o || event, n = o.target || o.srcElement;
		// if (n.nodeType === 1 && n.nodeName.toLowerCase() === "a") {
			// n = $(n);
			// if (!n.hasClass(l)) {
				// h(n)
			// }
		// }
	// });
	// e.find("ul").bind("mouseover", function(o) {
		// var o = o || event, n = o.target || o.srcElement;
		// if (n.nodeType === 1 && n.nodeName.toLowerCase() === "a") {
			// n = $(n);
			// if (!n.hasClass(l)) {
				// d(n)
			// }
		// }
	// });
	// function h(n) {
		// b.removeClass(l);
		// n.addClass(l);
		// f(n);
		// c.find(".navitab-item a").bind("click", function() {
			// logWrite(this, "click")
		// })
	// }
// 
	// function d(n) {
		// g.removeClass(l);
		// n.addClass(l);
		// f(n);
		// e.find(".navitab-item a").bind("click", function() {
			// logWrite(this, "click")
		// })
	// }
// 
	// function f(o) {
		// var n = a(o.attr("winType"));
		// n && o.parent().parent().next().html(m(n))
	// }
// 
	// function m(r) {
		// var v = 3, u = v - 1, x = r[r.length - 1], r = r.slice(0, -1), o = {
			// left : "CenterSjjx",
			// right : "CenterCxdj"
		// }, w = document.createDocumentFragment(), q = "img/index_page/", s, z = document.createElement("a"), t = document.createElement("img"), n = document.createElement("p"), y, p, A;
		// for ( s = 0; s < v; s++) {
			// y = z.cloneNode();
			// p = t.cloneNode();
			// A = n.cloneNode();
			// y.appendChild(p);
			// y.appendChild(A);
			// $(y).attr({
				// lmk : o[x] + "-" + (Math.random().toString().slice(5)),
				// lmv : r[s].title,
				// urltrue : "true",
				// lmurl : r[s].link,
				// href : r[s].link
			// });
			// if (s != u) {
				// y.className = "mr11"
			// }
			// $(p).bind("error", function() {
				// $(this).remove()
			// }).attr({
				// src : q + r[s].img
			// });
			// A.className = "navitab-item-title";
			// A.innerHTML = r[s].title;
			// w.appendChild(y)
		// }
		// return w
	// }
// 
	// function a(n) {
		// var p = i;
		// var o = p[n];
		// return o ? o : null
	// }
// 
// }, "transformTable");
// function GetSn(d) {
	// window.feedback_sn = function(g) {
		// try {
			// var f = JSON.parse(g);
			// if (f.sn) {
				// _logParam.sn = f.sn
			// }
			// d.call(window, _logParam.sn)
		// } catch(a) {
			// d.call(window, 0)
		// }
	// };
	// try {
		// if (("undefined" != typeof window.external["wowSend"]) || (chrome.wowPrivate && "function" == typeof chrome.wowPrivate["wowSend"])) {
			// if (-1 != navigator.userAgent.toLocaleLowerCase().indexOf("webkit")) {
				// var b = chrome.wowPrivate.wowSend("getsn", "", feedback_sn)
			// } else {
				// if (-1 != navigator.userAgent.toLocaleLowerCase().indexOf("trident")) {
					// window.external.wowSend("getsn", "", "feedback_sn")
				// }
			// }
		// } else {
			// d.call(window, _logParam.sn)
		// }
	// } catch(c) {
		// d.call(window, 0)
	// }
// }business(function() {
	// var b = $(".showwin"), a = null, d = null, c = new Date().getTime();
	// if (b) {
		// b.each(function() {
			// var g = $(this), e = g.attr("data-st"), f = g.attr("data-et");
			// e && (c > new Date(e).getTime()) && (g.style.display = "block");
			// f && (c > new Date(ed).getTime()) && (g.style.display = "none")
		// })
	// }
// }, "controllerTime");
// business(function() {
	// var b = "@ucbrowser@", d = $("#js_weather_loading"), c = $("#js_weather_win"), a = c.find(".js_wea_tx"), g = c.find(".js_w_selCity"), n = $("#js_city_select_win"), f = $("#js_wea_icon")[0], k = "w_iocn", p, l = false;
	// datas.use("weatherDesc", function(q) {
		// p = q;
		// o()
	// });
	// datas.use("weatherCity", e);
	// function e(J) {
		// var z = J, A = n.find(".js_wea_tx"), w = {}, t = document.createElement("option"), x, B, F, u, I, r = 0, q = 0, G = 0;
		// for (var C = A.length - 1; C >= 0; C--) {
			// w[A[C].getAttribute("xtp")] = A[C]
		// }
		// x = w.first;
		// B = w.second;
		// F = w.third;
		// u = w.submit;
		// I = w.close;
		// var E = ls.item("w_user_select");
		// try {
			// E = JSON.parse(E)
		// } catch(H) {
			// E = null
		// }
		// if (E) {
			// r = E["0"];
			// q = E["1"];
			// G = E["2"]
		// }
		// v();
		// y();
		// s();
		// $(x).bind("change", function() {
			// r = this.selectedIndex;
			// q = 0;
			// G = 0;
			// y();
			// s()
		// });
		// $(B).bind("change", function() {
			// q = this.selectedIndex;
			// G = 0;
			// s()
		// });
		// $(F).bind("change", function() {
			// G = this.selectedIndex
		// });
		// $(u).bind("click", function() {
			// var O = [], L, K, M;
			// L = z[r];
			// K = L.child[q];
			// M = K.child[G];
			// O.push(L.name);
			// O.push(K.name);
			// O.push(M.name);
			// O.push(M.cid);
			// d.show();
			// n.hide();
			// var N = (function(P) {
				// return function() {
					// var Q = [r, q, G];
					// Array.prototype.push.apply(Q, P);
					// var T = {};
					// for (var S = 0, R = Q.length; S < R; ) {
						// T[S] = Q[S++]
					// }
					// T.length = S;
					// ls.item("w_user_select", JSON.stringify(T))
				// }
			// })(O);
			// i(M.cid, null, N)
		// });
		// $(I).bind("click", function() {
			// n.hide();
			// c.show()
		// });
		// g.show().bind("click", function() {
			// c.hide();
			// n.show()
		// });
		// function v() {
			// x.innerHTML = "";
			// x.appendChild(D(z));
			// $(x).find("option:eq("+r+")")[0].selected = true
		// }
// 
		// function y() {
			// B.innerHTML = "";
			// B.appendChild(D(z[r]["child"]));
			// $(B).find("option:eq("+q+")")[0].selected = true
		// }
// 
		// function s() {
			// F.innerHTML = "";
			// F.appendChild(D(z[r]["child"][q]["child"]));
			// $(F).find("option:eq("+G+")")[0].selected = true
		// }
// 
		// function D(O) {
			// var N = document.createDocumentFragment(), L;
			// for (var M = 0, K = O.length; M < K; M++) {
				// var L = t.cloneNode(true);
				// L.innerHTML = O[M].name;
				// L.value = O[M].name;
				// N.appendChild(L)
			// }
			// return N
		// }
// 
	// }
// 
	// function o() {
		// var q = ls.item("w_user_select"), r;
		// if (q) {
			// q = JSON.parse(q);
			// r = q[q.length - 1]
		// }
		// i(r)
	// }
// 
	// function i(t, v, r) {
		// var z = b, w = new jDate(), u = w.dayStr, y = md5(u + z), t = t, v = v, x = "http://hao.uc.cn/huafeng/pc_weather.php?", A = {
			// vkey : z,
			// date : u,
			// vcode : y
		// }, s = "";
		// if (t) {
			// A.cid = t
		// }
		// for (var q in A) {
			// s += q + "=" + A[q] + "&"
		// }
		// s = s.slice(0, -1);
		// s = x + s;
		// $.ajax({
			// type : "GET",
			// dataType : "jsonp",
			// url : s
		// }).done(B).fail(function(C) {
			// if (!l) {
				// l = true;
				// i("01010101")
			// } else {
				// h({
					// code : "unknowCode"
				// })
			// }
		// });
		// function B(C) {
			// l = false;
			// h(C, r)
		// }
// 
	// }
// 
	// function h(r, q) {
		// var w = new jDate();
		// if (r.code != "200" || !r.data) {
			// d.find("p").html("天气加载失败，请刷新页面");
			// return false
		// } else {
			// q && q()
		// }
		// var r = r.data, u = {}, t, x = r.aqi_value, B;
		// for (var s = a.length - 1; s >= 0; s--) {
			// var z = $(a[s]);
			// u[z.attr("xtp")] = a[s]
		// }
		// try {
			// B = ls.item("w_user_select") && JSON.parse(ls.item("w_user_select"))
		// } catch(v) {
		// }
		// B = B ? B[5] : r.city;
		// u.city.innerHTML = B;
		// u.county.innerHTML = "";
		// u.date.innerHTML = w.weekStr + " [" + w.cnDayStr + "]";
		// u.wNumber.innerHTML = r.temper + "°C";
		// u.wDesc.innerHTML = r.desc;
		// if (r.aqi && x) {
			// u.pNumber.parentNode.parentNode.style.display = "block";
			// u.pNumber.innerHTML = x;
			// u.pDesc.innerHTML = r.aqi;
			// u.pNumber.style.color = "#fff";
			// if (x > 300) {
				// u.pNumber.style.background = "#7e0023"
			// } else {
				// if (x > 200) {
					// u.pNumber.style.background = "#99004c"
				// } else {
					// if (x > 150) {
						// u.pNumber.style.background = "#ff0000"
					// } else {
						// if (x > 100) {
							// u.pNumber.style.background = "#ff7e00"
						// } else {
							// if (x > 50) {
								// u.pNumber.style.background = "#ffff00";
								// u.pNumber.style.color = "#4686de"
							// } else {
								// u.pNumber.style.background = "#00e400";
								// u.pNumber.style.color = "#4686de"
							// }
						// }
					// }
				// }
			// }
		// } else {
			// u.pNumber.parentNode.parentNode.style.display = "none"
		// }
		// try {
			// y()
		// } catch(v) {
			// u.tomInfo.innerHTML = "";
			// u.aTomInfo.innerHTML = ""
		// }
		// function y() {
			// var F = 0, G = r.forecast[F], D = G.week.slice(-1), E, C = [];
			// F++;
			// for ( j = r.forecast.length; F < j; F++) {
				// G = r.forecast[F];
				// E = G.week.slice(-1);
				// if (E !== D) {
					// C.push({
						// week : E,
						// desc : G.desc,
						// high : G.high_temper,
						// low : G.low_temper
					// });
					// D = E
				// }
			// }
			// if (C[0]) {
				// u.tomInfo.innerHTML = "周" + C[0].week + " " + C[0].desc + " " + C[0].high + "°/" + C[0].low + "°"
			// } else {
				// u.tomInfo.innerHTML = ""
			// }
			// if (C[1]) {
				// u.aTomInfo.innerHTML = "周" + C[1].week + " " + C[1].desc + " " + C[1].high + "°/" + C[1].low + "°"
			// } else {
				// u.aTomInfo.innerHTML = ""
			// }
		// }
// 
		// var A = m(r.weather);
		// f.className = A;
		// d.hide();
		// c.show()
	// }
// 
	// function m(q) {
		// wClassCode = p[q] ? p[q] : "16";
		// return k + wClassCode
	// }
// 
// }, "weather");
// business(function(b) {
	// var d = b.document, a = d.documentElement, c = d.createElement("script");
	// c.src = "data/weather.js";
	// a.appendChild(c);
	// b.setTimeout(function() {
		// a.removeChild(c)
	// }, 15)
// }, "weather_data");
// datas.set("weatherDesc", {
	// "00" : "1",
	// "01" : "2",
	// "02" : "9",
	// "03" : "3",
	// "04" : "6",
	// "05" : "6",
	// "06" : "7",
	// "07" : "4",
	// "08" : "4",
	// "09" : "5",
	// "10" : "5",
	// "11" : "6",
	// "12" : "6",
	// "13" : "12",
	// "14" : "10",
	// "15" : "10",
	// "16" : "11",
	// "17" : "11",
	// "18" : "13",
	// "19" : "11",
	// "20" : "14",
	// "21" : "4",
	// "22" : "5",
	// "23" : "5",
	// "24" : "6",
	// "25" : "6",
	// "26" : "10",
	// "28" : "11",
	// "29" : "14",
	// "30" : "14",
	// "31" : "14",
	// "32" : "15",
	// "33" : "15",
	// "34" : "11",
	// "35" : "13",
	// "53" : "13"
// });
// datas.set("table", {
	// dsj : [{
		// img : "dsj_1.jpg",
		// title : "步步惊情",
		// link : "http://tv.sohu.com/20140423/n398662724.shtml/?pvid=e6625371390abd5e"
	// }, {
		// img : "dsj_2.jpg",
		// title : "宫锁连城",
		// link : "http://tv.sohu.com/20140409/n397919777.shtml/?pvid=e6625371390abd5e"
	// }, {
		// img : "dsj_3.jpg",
		// title : "神盾局特工",
		// link : "http://tv.sohu.com/20130925/n387205449.shtml/?pvid=e6625371390abd5e"
	// }, "left"],
	// dy : [{
		// img : "dy_2.jpg",
		// title : "大话天仙",
		// link : "http://tv.sohu.com/20140410/n398053068.shtml/?pvid=e6625371390abd5e"
	// }, {
		// img : "dy_3.jpg",
		// title : "夺命地铁",
		// link : "http://tv.sohu.com/20140417/n398422654.shtml/?pvid=e6625371390abd5e"
	// }, {
		// img : "dy_1.jpg",
		// title : "奥林匹斯的陷落",
		// link : "http://tv.sohu.com/20140410/n398041461.shtml/?pvid=e6625371390abd5e"
	// }, "left"],
	// dlj : [{
		// img : "dlj_1.jpg",
		// title : "我爱男闺蜜",
		// link : "http://tv.sohu.com/20140416/n398357492.shtml/?pvid=e6625371390abd5e"
	// }, {
		// img : "dlj_2.jpg",
		// title : "舌尖上的中国2",
		// link : "http://tv.sohu.com/20140418/n398481382.shtml/?pvid=e6625371390abd5e"
	// }, {
		// img : "dlj_3.jpg",
		// title : "金玉良缘",
		// link : "http://tv.sohu.com/20140421/n398595823.shtml/?pvid=e6625371390abd5e"
	// }, "left"],
	// hj : [{
		// img : "hj_1.jpg",
		// title : "密会",
		// link : "http://tv.sohu.com/20140317/n396756250.shtml/?pvid=e6625371390abd5e"
	// }, {
		// img : "hj_2.jpg",
		// title : "想你",
		// link : "http://tv.sohu.com/20121108/n356963027.shtml/?pvid=e6625371390abd5e"
	// }, {
		// img : "hj_3.jpg",
		// title : "继承者们",
		// link : "http://tv.sohu.com/20131010/n387840939.shtml/?pvid=e6625371390abd5e"
	// }, "left"],
	// jp : [{
		// img : "jp_1.jpg",
		// title : "机票1折",
		// link : "http://flight.qunar.com/?ex_track=auto_533d34ef"
	// }, {
		// img : "jp_2.jpg",
		// title : "特价机票",
		// link : "http://flight.qunar.com/site/lplist.htm?ex_track=auto_533d34ef"
	// }, {
		// img : "jp_3.jpg",
		// title : "国际机票预约",
		// link : "http://flight.qunar.com/intersubs/subs/entry.do?ex_track=auto_533d34ef"
	// }, "right"],
	// jd : [{
		// img : "jd_1.jpg",
		// title : "酒店1折",
		// link : "http://hotel.qunar.com/?ex_track=auto_533d34ee"
	// }, {
		// img : "jd_2.jpg",
		// title : "客栈民宿",
		// link : "http://bnb.qunar.com/?ex_track=auto_533d34ee"
	// }, {
		// img : "jd_3.jpg",
		// title : "高端酒店",
		// link : "http://lh.qunar.com/?ex_track=auto_533d34ee"
	// }, "right"],
	// dj : [{
		// img : "dj_1.jpg",
		// title : "度假1折",
		// link : "http://dujia.qunar.com/?ex_track=auto_533d34ec"
	// }, {
		// img : "dj_2.jpg",
		// title : "出境游",
		// link : "http://dujia.qunar.com/p/abroad/?ex_track=auto_533d34ec"
	// }, {
		// img : "dj_3.jpg",
		// title : "国内游",
		// link : "http://dujia.qunar.com/p/domestic/?ex_track=auto_533d34ec"
	// }, "right"],
	// ly : [{
		// img : "ly_1.jpg",
		// title : "团购1折",
		// link : "http://tuan.qunar.com/?ex_track=auto_533d34e8"
	// }, {
		// img : "ly_2.jpg",
		// title : "周边游团购",
		// link : "http://tuan.qunar.com/?category=abroad/?ex_track=auto_533d34e8"
	// }, {
		// img : "ly_3.jpg",
		// title : "酒店团购",
		// link : "http://tuan.qunar.com/?category=hotel/?ex_track=auto_533d34e8"
	// }, "right"]
// });
// datas.set("fameDefUrls", {
	// "http://www.baidu.com/?tn=98050039_pg" : "百度",
	// "http://ai.taobao.com?pid=mm_50814843_6614255_22478222" : "爱淘宝",
	// "http://weibo.com/" : "新浪微博",
	// "http://www.ifeng.com/" : "凤凰网",
	// "http://tv.sohu.com/?pvid=e6625371390abd5e" : "搜狐视频",
	// "http://www.163.com/" : "网易",
	// "http://qzone.qq.com/" : "QQ空间",
	// "http://union.suning.com/aas/open/vistorAd.action?userId=138927&webSiteId=0&adInfoId=00&adBookId=0&vistURL=http://www.suning.com/" : "苏宁易购",
	// "http://union.jumei.com/UnionAd/Count?code=MQkyMDMJYUhSMGNEb3ZMM2QzZHk1cWRXMWxhUzVqYjIwdgkxCXVj" : "聚美优品",
	// "http://hot.yhd.com?tracker_u=109673645" : "1号店",
	// "http://p.yiqifa.com/c?s=95157aee&w=700659&c=254&i=160&l=0&e=&t=http://www.jd.com/" : "京东商城",
	// "http://www.amazon.cn/?_encoding=UTF8&camp=536&creative=3200&linkCode=ur2&tag=123uc04-23" : "亚马逊",
	// "http://www.taobao.com" : "淘宝",
	// "http://track.lefeng.com/track.jsp?aid=1583807&cid2=&cid3=&url=http://www.lefeng.com/?utm_source=UCMZ&utm_medium=cpm&utm_campaign=683" : "乐蜂网化妆品",
	// "http://www.qunar.com/?ex_track=auto_52b81ab2" : "去哪儿网",
	// "http://u.ctrip.com/union/CtripRedirect.aspx?TypeID=2&Allianceid=15138&sid=436188&OUID=&jumpUrl=http://www.ctrip.com" : "携程网",
	// "http://www.liepin.com/abtest/44/" : "猎聘网高薪",
	// "http://www.ly.com/#refid=31349946" : "同程旅游",
	// "http://www.tiantian.com/CooperationInterface.asp?from=ucpcmzh&type=cps&activitykey=ucpcmzh14310163840&destpage=http://www.tiantian.com/?utm_source=uc123_cps_mz_314" : "天天网",
	// "http://tj.ad12345.com/?id=263" : "决胜教育",
	// "http://www.tmall.com" : "天猫",
	// "http://reg.jiayuan.com/st/?id=420967&url=http://reg.jiayuan.com" : "世纪佳缘",
	// "http://www.58.com/?path=?utm_source%3dd_123.uc%26utm_campaign%3d123.uc-101%26spm=123.uc-mingzhan-1010" : "58同城",
	// "http://www.meituan.com/?utm_campaign=uc123.com&utm_medium=nav&utm_source=uc123.com&utm_content=top" : "美团网团购",
	// "http://www.bitauto.com/?WT.mc_id=tbmz" : "易车网",
	// "http://click.union.vip.com/redirect.php?url=eyJkZXN0dXJsIjoiaHR0cDpcL1wvd3d3LnZpcC5jb20iLCJ1Y29kZSI6Ind4b3RqNml0Iiwic2NoZW1lY29kZSI6Ijh0cDBnOTluIiwiY2hhbiI6Im16In0=" : "唯品会",
	// "http://union.dangdang.com/transfer.php?from=P-321685&ad_type=10&sys_id=1&backurl=http%3A%2F%2Fwww.dangdang.com" : "当当网",
	// "http://cps.gome.com.cn/home/JoinUnion?sid=3041&wid=3084&feedback=uc&to=http://www.gome.com.cn" : "国美在线"
// }); 