lazy.createScript("a.js",function(){///最大的分歧！chrome会304 a.js,firefox会200 from cache
	lazy.createScript("b.js",function(){ 
		lazy.createScript("j.js",function(){ 
		
		}); 
	});  
});
lazy.createScript("k.js",function(){ 
	
}); 
  
window.onload = function(){ 
	console.log("win onload");
	lazy.createScript("f.js",function(){///最大的分歧！chrome会304 a.js,firefox会200 from cache
		lazy.createScript("g.js",function(){ 
		});
	});
	lazy.createScript("h.js",function(){ 
	});
	setTimeout(function(){
		lazy.createScript("l.js");
	},20);
};
 
document.onreadystatechange = function(a,b){ 
	console.log("document.readyState: ",document.readyState);
    switch (document.readyState) {
    	case "interactive":
    		lazy.createScript("o.js",function(){ });
    	case "complete": 
 			lazy.createScript("m.js",function(){///最大的分歧！chrome会304 a.js,firefox会200 from cache
				lazy.createScript("n.js",function(){ 
				});
			});
		 default:;
    }
}; 

setTimeout(function(){
	lazy.createScript("c.js"); // 可以理解，就像鼠标hover加载js一样，这个时候页面已经完成，已经无知这个页面是否加载还是刷新了。
},2000);

setTimeout(function(){
	lazy.createScript("e.js");
},20);