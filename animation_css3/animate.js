
//基于CSS3动画的能力封装
(function (NS) {
    var keyframe_name_index = 0,
        keyframeNameGen = function () {
            return "CSSAnimationKeyFrame_" + keyframe_name_index++;
        };

    var styleTag = (function () {
        var style = document.createElement("style");
        style.setAttribute("data-role", "for-animation-css3");
        document.head.appendChild(style);
        return style;
    })();
    var sheet = styleTag.sheet;

    //让出入的rule自动加上前缀(低配手机还是需要的)
    var cssprefix = (function(){
            var div = document.createElement('div');
            var style = div.style;
            if (style.hasOwnProperty("webkitTransition")) {
                return '-webkit-';
            } else if (style.hasOwnProperty("MozTransition")) {
                return '-moz-';
            } else if (style.hasOwnProperty("oTransition")) {
                return '-o-';
            } else if (style.hasOwnProperty("msTransition")) {
                return '-ms-';
            }else return '';
        })(),
        cssfix = function(prop){
            return cssprefix + prop;
        };

    //创建帧动画css规则,使用JSON数据
    function createFrameRule(rule) {
        var name = keyframeNameGen();
        var temp = ["@"+cssfix("keyframes")," ", name, "{"];
        for (var framekey in rule) {
            var frame = rule[framekey];
            temp.push(framekey, "{")
            //特殊处理一下tx,ty语法糖
            var transform = frame["transform"] || "";
            transform += frame.tx ? " translateX(" + frame.tx + ")" : ""; //todo: tx, ty还不生效
            transform += frame.ty ? " translateY(" + frame.ty + ")" : "";
            if (transform)frame[cssfix("transform")] = transform;

            for (var csskey in frame) {
                var cssvalue = frame[csskey];
                if (cssvalue)temp.push(csskey, ":", cssvalue, ";");
            }
            temp.push("}");
        }
        temp.push("}");
        var ruleString = temp.join("");
        console.log(name,": ",ruleString);
        sheet.insertRule(ruleString, 0);
        return name;
    }

    /**
     * rules={
         *  0 {"left":"1","top":"10em;"}
         *
         *  2% {"left":"10em"}
         * }
     * */
    function animate(opt, callback) {
        var dom = opt.dom.tagName?opt.dom:document.getElementById(opt.dom) ;
        if(!dom){console.log("No dom for animate");return;};
        var duration = opt.duration || "1s",
            loop = opt.loop || 1,
            direction = "normal",
            timing = opt.timing || "linear",
            fillmode = "forwards", //animation-fill-mode : none | forwards | backwards | both;
            delay = opt.delay || "0s",
            rule = opt.rule,
            initstyle = opt.initstyle || "";
        if(!(rule["100%"]||rule["to"])){
            console.log("No (100%) or (to) anmition frame, animation play error")
        }
        if(!(rule["0%"]||rule["from"])){
            console.log("No (0%) or (from) anmition frame, animation play error"); // 虽然不是必须,但是我们这样要求,会让设置更简单
        }
        var animName = createFrameRule(rule);

        //设置动画元素初始状态,防止跳动
        var firstFrame = rule["0%"]||rule["from"];
        var cssText = [];
        for(var prop in firstFrame){
            cssText.push(prop+":"+ firstFrame[prop]);
        }
        cssText.push(cssfix("animation")+":"+[duration, animName, timing, delay, loop,  direction, fillmode].join(" "));
        cssText.push("display:block");;
        dom.style.cssText += initstyle+ ";" + cssText.join(";");


        callback && dom.addEventListener("webkitAnimationEnd", function () {
            //console.log("Animation end;");
            callback.apply(dom, null);
        });
    }
    //todo 概念
    function stage(opt){

    }

    //层,主要用来承载图片
    function layer(opt){
        var dom = document.createElement("div");
        dom.style.cssText="display:block;width:560em;height:540em;background-image:url(golden-lamp.png); background-position: -51em 151em;background-repeat: no-repeat;border:1em solid red";
        return dom;
    }

    (NS || window).CSSAnimation = {
        layer:layer,
        _animate: animate,
        animate: function(opt, callback){
            requestAnimationFrame(function(){
                animate(opt, callback);
            })
        },
    }
})(window);/**
 * Created by wangle on 2016/4/24.
 */
