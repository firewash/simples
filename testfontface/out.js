var sub = null
	document.getElementById("btn").onclick=function(e){
		if(!sub){
			sub = window.open("out.html");
		}
		setTimeout(function(){
			document.getElementsByTagName('iframe')[0].contentWindow.location.reload();
			sub.document.getElementsByTagName('iframe')[0].contentWindow.location.reload();	
		},2000)
		
	}
