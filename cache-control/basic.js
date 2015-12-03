var lazy = {
		createScript: function(a, b) {
		console.log("createScript:", a); 
        var c = document.createElement("script");
        c.charset = "utf-8";
        c.src = a;
        //c.type = "text/javascript";
        c.onload = function(a) {
          b&&b();
        };
        document.getElementsByTagName("head")[0].appendChild(c);
    }
};	
