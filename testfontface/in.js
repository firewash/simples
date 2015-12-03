document.getElementById("log").innerHTML+=Math.random()+"start;"
window.onload=function(){
	document.getElementById("log").innerHTML+="<br>onload;"
	alert(1)
}