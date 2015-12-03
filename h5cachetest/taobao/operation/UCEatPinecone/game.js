var c = c || {};
c.B = c.B || {};
c.e = {};
n = window;
n = Object.prototype;
delete window._p;
c.Kb = function(a) {
    return document.createElement(a)
};
c.Ia = function(a, b, d, e) {
    a.addEventListener(b, d, e)
};
c.jK = "undefined" !== typeof require && require("fs");
c.zM = function(a, b) {
    if (a)
        if (a instanceof Array)
            for (var d = 0, e = a.length; d < e && !1 !== b.call(void 0, a[d], d); d++)
                ;
        else
            for (d in a)
                if (!1 === b.call(void 0, a[d], d))
                    break
};
c.IN = function(a) {
    if (!a)
        return c.log("invalid URL"), !1;
    var b = a.indexOf("://");
    if (-1 == b)
        return !1;
    b = a.indexOf("/", b + 3);
    return (-1 == b ? a : a.substring(0, b)) != location.origin
};
c.async = {WI: function(a) {
        var b = this.fM;
        if (!b.wE) {
            var d = b.length, e = b.AO, f = b.dO, g = f.Xd, h = f.aM, k = f.mG, f = f.xka;
            if (a) {
                if (b.wE = a, g)
                    return g.call(h, a)
            } else {
                var m = Array.apply(null, arguments).slice(1), p = m.length;
                0 == p ? m = null : 1 == p && (m = m[0]);
                e[this.index] = m;
                b.count--;
                k && k.call(f, m, d - b.count, d);
                0 == b.count && g && g.apply(h, [null, e])
            }
        }
    },JJ: function() {
    },Ega: function(a, b, d) {
        var e = c.async;
        if (void 0 !== d)
            "function" == typeof b && (b = {mG: b}), b.Xd = d || b.Xd;
        else if (void 0 !== b)
            "function" == typeof b && (b = {Xd: b});
        else if (void 0 !== a)
            b = 
            {};
        else
            throw "arguments error!";
        var f = (d = a instanceof Array) ? a.length : Object.keys(a).length;
        if (0 == f)
            b.Xd && b.Xd.call(b.aM, null);
        else {
            var g = {length: f,count: f,dO: b,AO: d ? [] : {}};
            c.zM(a, function(a, d) {
                if (g.wE)
                    return !1;
                var f = b.Xd || b.mG ? e.WI.bind({fM: g,index: d}) : e.JJ;
                a(f, d)
            })
        }
    },map: function(a, b, d) {
        var e = this, f = arguments.length;
        "function" == typeof b && (b = {hF: b});
        if (3 === f)
            b.Xd = d || b.Xd;
        else if (2 > f)
            throw "arguments error!";
        "function" == typeof b && (b = {hF: b});
        if (void 0 !== d)
            b.Xd = d || b.Xd;
        else if (void 0 === a)
            throw "arguments error!";
        var g = (f = a instanceof Array) ? a.length : Object.keys(a).length;
        if (0 === g)
            b.Xd && b.Xd.call(b.aM, null);
        else {
            var h = {length: g,count: g,dO: b,AO: f ? [] : {}};
            c.zM(a, function(a, d) {
                if (h.wE)
                    return !1;
                var f = b.Xd ? e.WI.bind({fM: h,index: d}) : e.JJ;
                b.hF.call(b.h1, a, d, f)
            })
        }
    }};
c.path = {join: function() {
        for (var a = arguments.length, b = "", d = 0; d < a; d++)
            b = (b + ("" == b ? "" : "/") + arguments[d]).replace(/(\/|\\\\)$/, "");
        return b
    },Vk: function(a) {
        return (a = /(\.[^\.\/\?\\]*)(\?.*)?$/.exec(a)) ? a[1] : null
    },Ofa: function(a) {
        if (a) {
            var b = a.lastIndexOf(".");
            if (-1 !== b)
                return a.substring(0, b)
        }
        return a
    },aZ: function(a, b) {
        var d = a.indexOf("?");
        0 < d && (a = a.substring(0, d));
        d = /(\/|\\\\)([^(\/|\\\\)]+)$/g.exec(a.replace(/(\/|\\\\)$/, ""));
        if (!d)
            return null;
        d = d[2];
        return b && a.substring(a.length - b.length).toLowerCase() == 
        b.toLowerCase() ? d.substring(0, d.length - b.length) : d
    },dirname: function(a) {
        return a.replace(/((.*)(\/|\\|\\\\))?(.*?\..*$)?/, "$2")
    },bM: function(a, b) {
        b = b || "";
        var d = a.indexOf("?"), e = "";
        0 < d && (e = a.substring(d), a = a.substring(0, d));
        d = a.lastIndexOf(".");
        return 0 > d ? a + b + e : a.substring(0, d) + b + e
    },Eo: function(a, b, d) {
        if (0 == b.indexOf("."))
            return this.bM(a, b);
        var e = a.indexOf("?"), f = "";
        d = d ? this.Vk(a) : "";
        0 < e && (f = a.substring(e), a = a.substring(0, e));
        e = a.lastIndexOf("/");
        return a.substring(0, 0 >= e ? 0 : e + 1) + b + d + f
    }};
c.W = {pK: {},Xv: {},yW: {},Al: {},ay: "",YY: "",Uf: {},bx: function() {
        return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
    },VJ: function(a) {
        var b = a[0], d = a[1], e = a[2], f = ["", null, null];
        if (1 === a.length)
            f[1] = b instanceof Array ? b : [b];
        else if (2 === a.length)
            "function" == typeof d ? (f[1] = b instanceof Array ? b : [b], f[2] = d) : (f[0] = b || "", f[1] = d instanceof Array ? d : [d]);
        else if (3 === a.length)
            f[0] = b || "", f[1] = d instanceof Array ? d : [d], f[2] = e;
        else
            throw "arguments error to load js!";
        return f
    },P1: function(a, 
    b, d) {
        var e = this, f = e.pK, g = e.VJ(arguments);
        -1 < navigator.userAgent.indexOf("Trident/5") ? e.vK(g[0], g[1], 0, g[2]) : c.async.map(g[1], function(a, b, d) {
            a = c.path.join(g[0], a);
            if (f[a])
                return d(null);
            e.XI(a, !1, d)
        }, g[2])
    },YN: function(a, b, d) {
        var e = this.BW(), f = this.VJ(arguments);
        this.P1(f[0], f[1], function(a) {
            if (a)
                throw a;
            e.parentNode.removeChild(e);
            if (f[2])
                f[2]()
        })
    },XI: function(a, b, d) {
        var e = document, f = c.Kb("script");
        f.async = b;
        f.src = a;
        this.pK[a] = !0;
        c.Ia(f, "load", function() {
            this.removeEventListener("load", arguments.callee, 
            !1);
            d()
        }, !1);
        c.Ia(f, "error", function() {
            d("Load " + a + " failed!")
        }, !1);
        e.body.appendChild(f)
    },vK: function(a, b, d, e) {
        if (d >= b.length)
            e && e();
        else {
            var f = this;
            f.XI(c.path.join(a, b[d]), !1, function(g) {
                if (g)
                    return e(g);
                f.vK(a, b, d + 1, e)
            })
        }
    },BW: function() {
        var a = document, b = a.getElementById("cocos2d_loadJsImg");
        if (!b) {
            b = c.Kb("img");
            c.xK && (b.src = c.xK);
            a = a.getElementById(c.Fc.Me.id);
            a.style.backgroundColor = "black";
            a.parentNode.appendChild(b);
            var d = getComputedStyle ? getComputedStyle(a) : a.currentStyle;
            d || (d = {width: a.width,
                height: a.height});
            b.style.left = a.offsetLeft + (parseFloat(d.width) - b.width) / 2 + "px";
            b.style.top = a.offsetTop + (parseFloat(d.height) - b.height) / 2 + "px";
            b.style.position = "absolute"
        }
        return b
    },Hx: function(a, b) {
        if (c.jK)
            require("fs").Vga(a, function(a, d) {
                a ? b(a) : b(null, d.toString())
            });
        else {
            var d = this.bx(), e = "load " + a + " failed!";
            d.open("GET", a, !0);
            /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? (d.setRequestHeader("Accept-Charset", "utf-8"), d.onreadystatechange = function() {
                4 == d.readyState && 200 == 
                d.status ? b(null, d.responseText) : b(e)
            }) : (d.overrideMimeType && d.overrideMimeType("text/plain; charset\x3dutf-8"), d.onload = function() {
                4 == d.readyState && 200 == d.status ? b(null, d.responseText) : b(e)
            });
            d.send(null)
        }
    },wK: function(a) {
        if (c.jK)
            return require("fs").Wga(a).toString();
        var b = this.bx();
        b.open("GET", a, !1);
        /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? b.setRequestHeader("Accept-Charset", "utf-8") : b.overrideMimeType && b.overrideMimeType("text/plain; charset\x3dutf-8");
        b.send(null);
        return 4 == !b.readyState || 200 != b.status ? null : b.responseText
    },ZN: function(a, b) {
        this.Hx(a, function(d, e) {
            try {
                d ? b(d) : b(null, JSON.parse(e))
            } catch (f) {
                throw "load json [" + a + "] failed : " + f;
            }
        })
    },SI: function(a) {
        return null != /(\.png)|(\.jpg)|(\.bmp)|(\.jpeg)|(\.gif)/.exec(a)
    },Gx: function(a, b, d) {
        var e = !0;
        void 0 !== d ? e = null == b.IN ? e : b.IN : void 0 !== b && (d = b);
        var f = new Image;
        e && "file://" != location.origin && (f.crossOrigin = "Anonymous");
        c.Ia(f, "load", function() {
            this.removeEventListener("load", arguments.callee, !1);
            this.removeEventListener("error", 
            arguments.callee, !1);
            d && d(null, f)
        });
        c.Ia(f, "error", function() {
            this.removeEventListener("error", arguments.callee, !1);
            d && d("load image failed")
        });
        f.src = a;
        return f
    },DW: function(a, b, d) {
        var e = this, f = null;
        (b = a.type) ? (b = "." + b.toLowerCase(), f = a.src ? a.src : a.name + b) : (f = a, b = c.path.Vk(f));
        var g = e.Uf[f];
        if (g)
            return d(null, g);
        g = e.Xv[b.toLowerCase()];
        if (!g)
            return c.error("loader for [" + b + "] not exists!"), d();
        b = e.v0(g.Tw ? g.Tw() : e.ay, f);
        g.load(b, f, a, function(a, b) {
            a ? (c.log(a), e.Uf[f] = null, delete e.Uf[f], d()) : (e.Uf[f] = 
            b, d(null, b))
        })
    },v0: function(a, b) {
        var d = this.yW, e = c.path;
        if (void 0 !== a && void 0 === b) {
            b = a;
            var f = e.Vk(b), f = f ? f.toLowerCase() : "";
            a = (f = this.Xv[f]) ? f.Tw ? f.Tw() : this.ay : this.ay
        }
        b = c.path.join(a || "", b);
        if (b.match(/[\/(\\\\)]lang[\/(\\\\)]/i)) {
            if (d[b])
                return d[b];
            e = e.Vk(b) || "";
            b = d[b] = b.substring(0, b.length - e.length) + "_" + c.Lb.language + e
        }
        return b
    },load: function(a, b, d) {
        if (void 0 !== d)
            "function" == typeof b && (b = {mG: b});
        else if (void 0 !== b)
            "function" == typeof b && (d = b, b = {});
        else if (void 0 !== a)
            b = {};
        else
            throw "arguments error!";
        b.Xd = function(a, b) {
            a && c.log(a);
            d && d(b)
        };
        a instanceof Array || (a = [a]);
        b.hF = this.DW;
        b.h1 = this;
        c.async.map(a, b)
    },cK: function(a, b) {
        var d = this.Al, e = [], f;
        for (f in a) {
            var g = a[f];
            d[f] = g;
            e.push(g)
        }
        this.load(e, b)
    },Kfa: function(a, b) {
        var d = this, e = d.Dd(a);
        e ? d.cK(e.filenames, b) : d.load(a, function(a) {
            d.cK(a[0].filenames, b)
        })
    },Jj: function(a, b) {
        if (a && b) {
            if ("string" == typeof a)
                return this.Xv[a.trim().toLowerCase()] = b;
            for (var d = 0, e = a.length; d < e; d++)
                this.Xv["." + a[d].trim().toLowerCase()] = b
        }
    },Dd: function(a) {
        return this.Uf[a] || 
        this.Uf[this.Al[a]]
    },Ei: function(a) {
        var b = this.Uf, d = this.Al;
        delete b[a];
        delete b[d[a]];
        delete d[a]
    },eha: function() {
        var a = this.Uf, b = this.Al, d;
        for (d in a)
            delete a[d];
        for (d in b)
            delete b[d]
    }};
(function() {
    function a() {
        c.ta && c.Fc.sk && c.ta.dispatchEvent(c.Fc.sk)
    }
    function b() {
        c.ta && c.Fc.rk && c.ta.dispatchEvent(c.Fc.rk)
    }
    var d = window, e, f;
    "undefined" !== typeof document.hidden ? (e = "hidden", f = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (e = "mozHidden", f = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (e = "msHidden", f = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (e = "webkitHidden", f = "webkitvisibilitychange");
    e ? c.Ia(document, f, function() {
        document[e] ? b() : 
        a()
    }, !1) : (c.Ia(d, "blur", b, !1), c.Ia(d, "focus", a, !1));
    "onpageshow" in window && "onpagehide" in window && (c.Ia(d, "pagehide", b, !1), c.Ia(d, "pageshow", a, !1));
    f = d = null
})();
c.log = c.warn = c.error = c.assert = function() {
};
c.jM = function(a, b) {
    for (var d = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], e = null, f = 0; f < d.length; ++f) {
        try {
            e = a.getContext(d[f], b)
        } catch (g) {
        }
        if (e)
            break
    }
    return e
};
c.kW = function(a, b) {
    c.Da = 0;
    c.$ = 1;
    var d = c.Lb = {};
    d.oR = "en";
    d.m6 = "zh";
    d.n6 = "fr";
    d.q6 = "it";
    d.o6 = "de";
    d.x6 = "es";
    d.w6 = "ru";
    d.s6 = "ko";
    d.r6 = "ja";
    d.p6 = "hu";
    d.v6 = "pt";
    d.l6 = "ar";
    d.t6 = "no";
    d.u6 = "pl";
    d.WR = "Windows";
    d.cH = "iOS";
    d.dH = "OS X";
    d.UR = "UNIX";
    d.TR = "Linux";
    d.SR = "Android";
    d.VR = "Unknown";
    d.ZP = "wechat";
    d.VP = "androidbrowser";
    d.Ey = "ie";
    d.WP = "qqbrowser";
    d.BG = "mqqbrowser";
    d.XP = "ucbrowser";
    d.u5 = "360browser";
    d.v5 = "baiduboxapp";
    d.AG = "baidubrowser";
    d.w5 = "maxthon";
    d.Fy = "opera";
    d.x5 = "miuibrowser";
    d.Jp = "firefox";
    d.Gy = 
    "safari";
    d.Dy = "chrome";
    d.YP = "unknown";
    d.Bda = !1;
    var e = [d.AG, d.Fy, d.Jp, d.Dy, d.Gy], f = [d.AG, d.Fy, d.Jp, d.Dy, d.Gy, d.XP, d.WP, d.BG, d.Ey], g = window, h = g.navigator, k = document.documentElement, m = h.userAgent.toLowerCase();
    d.Aj = -1 != m.indexOf("mobile") || -1 != m.indexOf("android");
    var p = h.language, p = (p = p ? p : h.browserLanguage) ? p.split("-")[0] : d.oR;
    d.language = p;
    var p = d.YP, r = m.match(/micromessenger|qqbrowser|mqqbrowser|ucbrowser|360browser|baiduboxapp|baidubrowser|maxthon|trident|opera|miuibrowser|firefox/i) || m.match(/chrome|safari/i);
    r && 0 < r.length && (p = r[0].toLowerCase(), "micromessenger" == p ? p = d.ZP : "safari" === p && m.match(/android.*applewebkit/) ? p = d.VP : "trident" == p && (p = d.Ey));
    d.nm = p;
    d.jY = -1 < f.indexOf(d.nm);
    f = parseInt(a[b.$x]);
    p = c.$;
    r = c.Kb("Canvas");
    c.cs = !0;
    e = -1 == e.indexOf(d.nm);
    if (1 === f || 0 === f && (d.Aj || e))
        p = c.Da;
    p != c.$ || g.WebGLRenderingContext && c.jM(r, {stencil: !0,preserveDrawingBuffer: !0}) || (0 == f ? p = c.Da : c.cs = !1);
    if (p == c.Da)
        try {
            r.getContext("2d")
        } catch (s) {
            c.cs = !1
        }
    c.A = p;
    try {
        d.nw = !!new (g.AudioContext || g.webkitAudioContext || g.mozAudioContext)
    } catch (u) {
        d.nw = 
        !1
    }
    try {
        var t = d.localStorage = g.localStorage;
        t.setItem("storage", "");
        t.removeItem("storage");
        t = null
    } catch (v) {
        "SECURITY_ERR" !== v.name && "QuotaExceededError" !== v.name || c.warn("Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option"), d.localStorage = function() {
        }
    }
    t = d.$D = {canvas: !0};
    c.A == c.$ && (t.opengl = !0);
    void 0 !== k.ontouchstart || h.msPointerEnabled ? t.touches = !0 : void 0 !== k.onmouseup && (t.mouse = !0);
    void 0 !== k.onkeyup && (t.keyboard = !0);
    if (g.DeviceMotionEvent || g.DeviceOrientationEvent)
        t.accelerometer = 
        !0;
    g = m.match(/(iPad|iPhone|iPod)/i) ? !0 : !1;
    m = m.match(/android/i) || h.platform.match(/android/i) ? !0 : !1;
    k = d.VR;
    -1 != h.appVersion.indexOf("Win") ? k = d.WR : g ? k = d.cH : -1 != h.appVersion.indexOf("Mac") ? k = d.dH : -1 != h.appVersion.indexOf("X11") ? k = d.UR : -1 != h.appVersion.indexOf("Linux") ? k = d.TR : m && (k = d.SR);
    d.uF = k;
    d.raa = function() {
    };
    d.p$ = function() {
    };
    d.Aha = function() {
    };
    d.n$ = function() {
        var a;
        a = "" + ("isMobile : " + this.Aj + "\r\n");
        a += "language : " + this.language + "\r\n";
        a += "browserType : " + this.nm + "\r\n";
        a += "capabilities : " + 
        JSON.stringify(this.$D) + "\r\n";
        a += "os : " + this.uF + "\r\n";
        c.log(a)
    }
};
c.J6 = 0;
c.K6 = 1;
c.H6 = 2;
c.I6 = 3;
c.Ae = null;
c.k = null;
c.Xa = null;
c.sV = null;
c.Yv = !1;
c.nL = !1;
c.mL = function(a) {
    var b, d;
    if (!c.nL) {
        c.nL = !0;
        var e = window;
        e.FF = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame;
        var f = c.rb(a) || c.rb("#" + a), g;
        "CANVAS" == f.tagName ? (b = b || f.width, d = d || f.height, g = c.pm = c.Kb("DIV"), a = c.Xa = f, a.parentNode.insertBefore(g, a), a.SL(g), g.setAttribute("id", "Cocos2dGameContainer")) : ("DIV" != f.tagName && c.log("Warning: target element is not a DIV or CANVAS"), b = b || f.clientWidth, d = d || f.clientHeight, g = 
        c.pm = f, a = c.Xa = c.rb(c.Kb("CANVAS")), f.appendChild(a));
        a.PL("gameCanvas");
        a.setAttribute("width", b || 480);
        a.setAttribute("height", d || 320);
        a.setAttribute("tabindex", 99);
        a.style.outline = "none";
        f = g.style;
        f.width = (b || 480) + "px";
        f.height = (d || 320) + "px";
        f.margin = "0 auto";
        f.position = "relative";
        f.overflow = "hidden";
        g.top = "100%";
        c.A == c.$ && (c.k = c.Jka = c.jM(a, {stencil: !0,preserveDrawingBuffer: !0,antialias: !c.Lb.Aj,alpha: !1}));
        c.k ? (e.gl = c.k, c.Ae = new c.CQ(c.k), c.Yv = !0, c.Ba.pW(), c.Jd.wr()) : (c.k = a.getContext("2d"), c.FW = 
        c.k, c.k.translate(0, a.height), c.Ae = c.LG ? new c.LG(c.k) : null);
        c.sV = g;
        c.log(c.Qy);
        c.AX();
        c.Lb.Aj && (b = c.Kb("style"), b.type = "text/css", document.body.appendChild(b), b.textContent = "body,canvas,div{ -moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;-khtml-user-select: none;-webkit-tap-highlight-color:rgba(0,0,0,0);}");
        c.view = c.Oy.sB();
        c.FN.z2(c.Xa);
        c.C = c.Wa.sB();
        c.C.TF && c.C.TF(c.view);
        c.Et = c.C.K;
        c.Jha = new c.ou;
        c.m2 = new c.hS
    }
};
c.PA = function() {
    if (c.A !== c.$)
        throw "This feature supports WebGL render mode only.";
};
c.iK = !1;
c.AX = function() {
    c.iK = !1;
    c.Xa.oncontextmenu = function() {
        if (!c.iK)
            return !1
    }
};
c.Fc = {EG: 0,rQ: 1,K5: 2,qQ: 3,Jy: 4,FG: 5,DG: 6,Mt: "game_on_hide",Op: "game_on_show",rk: null,sk: null,x8: [],Ug: {vE: "engineDir",Y9: "dependencies",As: "debugMode",a4: "showFPS",Qw: "frameRate",id: "id",$x: "renderMode",i1: "jsList",iZ: "classReleaseMode"},KK: !1,nC: !1,kc: !0,GB: null,Me: null,tF: null,hga: null,uia: function(a) {
        this.Me[this.Ug.Qw] = a;
        this.GB && clearInterval(this.GB);
        this.kc = !0;
        this.EC()
    },EC: function() {
        var a = this, b, d = a.Me, e = a.Ug, f = window, g = d[e.Qw], h = c.C;
        h.j3(d[e.a4]);
        f.FF && 60 == g ? (b = function() {
            a.kc || (h.$N(), 
            f.FF(b))
        }, f.FF(b)) : (b = function() {
            h.$N()
        }, a.GB = setInterval(b, 1E3 / g));
        a.kc = !1
    },T2: function(a) {
        function b() {
            a && (d.Me[d.Ug.id] = a);
            d.KK ? c.cs && (d.NU = setInterval(function() {
                d.nC && (c.mL(d.Me[d.Ug.id]), d.EC(), d.rk = d.rk || new c.Ii(d.Mt), d.rk.setUserData(d), d.sk = d.sk || new c.Ii(d.Op), d.sk.setUserData(d), d.tF(), clearInterval(d.NU))
            }, 10)) : d.q2(function() {
                c.cs && (c.mL(d.Me[d.Ug.id]), d.EC(), d.rk = d.rk || new c.Ii(d.Mt), d.rk.setUserData(d), d.sk = d.sk || new c.Ii(d.Op), d.sk.setUserData(d), d.tF())
            })
        }
        var d = this;
        document.body ? 
        b() : c.Ia(window, "load", function() {
            this.removeEventListener("load", arguments.callee, !1);
            b()
        }, !1)
    },gW: function() {
        function a(a) {
            a[b.vE] = a[b.vE] || "frameworks/cocos2d-html5";
            null == a[b.As] && (a[b.As] = 0);
            a[b.Qw] = a[b.Qw] || 60;
            null == a[b.$x] && (a[b.$x] = 1);
            return a
        }
        var b = this.Ug;
        if (document.ccConfig)
            this.Me = a(document.ccConfig);
        else
            try {
                for (var d = document.getElementsByTagName("script"), e = 0; e < d.length; e++) {
                    var f = d[e].getAttribute("cocos");
                    if ("" == f || f)
                        break
                }
                var g, h, k;
                if (e < d.length) {
                    if (g = d[e].src)
                        k = /(.*)\//.exec(g)[0], 
                        c.W.ay = k, g = c.path.join(k, "project.json");
                    h = c.W.wK(g)
                }
                h || (h = c.W.wK("project.json"));
                var m = JSON.parse(h);
                this.Me = a(m || {})
            } catch (p) {
                c.log("Failed to read or parse project.json"), this.Me = a({})
            }
        c.kW(this.Me, b)
    },wW: {},XJ: function(a, b, d) {
        var e = this.wW;
        if (e[b])
            return null;
        d = d || "";
        var f = [], g = a[b];
        if (!g)
            throw "can not find module [" + b + "]";
        b = c.path;
        for (var h = 0, k = g.length; h < k; h++) {
            var m = g[h];
            if (!e[m]) {
                var p = b.Vk(m);
                p ? ".js" == p.toLowerCase() && f.push(b.join(d, m)) : (p = this.XJ(a, m, d)) && (f = f.concat(p));
                e[m] = 1
            }
        }
        return f
    },
    q2: function(a) {
        var b = this, d = b.Me, e = b.Ug, f = d[e.vE], g = c.W;
        if (c.cs) {
            b.KK = !0;
            var h = d[e.i1] || [];
            c.la ? g.YN("", h, function(d) {
                if (d)
                    throw d;
                b.nC = !0;
                a && a()
            }) : (e = c.path.join(f, "moduleConfig.json"), g.ZN(e, function(e, g) {
                if (e)
                    throw e;
                var p = d.modules || [], r = g.module, s = [];
                c.A == c.$ ? p.splice(0, 0, "shaders") : 0 > p.indexOf("core") && p.splice(0, 0, "core");
                for (var u = 0, t = p.length; u < t; u++) {
                    var v = b.XJ(r, p[u], f);
                    v && (s = s.concat(v))
                }
                s = s.concat(h);
                c.W.YN(s, function(d) {
                    if (d)
                        throw d;
                    b.nC = !0;
                    a && a()
                })
            }))
        } else
            c.error("Can not support render!")
    }};
c.Fc.gW();
c.e = {uG: "cc.ActionManager.addAction(): action must be non-null",RP: "cocos2d: removeAction: Target not found",h5: "cc.ActionManager.removeActionByTag(): an invalid tag",i5: "cc.ActionManager.removeActionByTag(): target must be non-null",PP: "cc.ActionManager.getActionByTag(): an invalid tag",QP: "cocos2d : getActionByTag(tag \x3d %s): Action not found",nZ: "cocos2d: **** WARNING **** CC_ENABLE_PROFILERS is defined. Disable it when you finish profiling (from ccConfig.js)",oZ: "Expected 'data' dict, but not found. Config file: %s",
    pZ: "Please load the resource first : %s",xQ: "cocos2d: Director: Error in gettimeofday",yQ: "cocos2d: Director: unrecognized projection",V5: "cocos2d: Director: unrecognized projection",wQ: "cocos2d: Director: Error in gettimeofday",vQ: "running scene should not null",KG: "the scene should not null",Bo: "element type is wrong!",FS: "CCSheduler#scheduleCallback. Callback already scheduled. Updating interval from:%s to %s",GS: "cc.scheduler.scheduleCallbackForTarget(): callback_fn should be non-null.",HS: "cc.scheduler.scheduleCallbackForTarget(): target should be non-null.",
    DS: "cc.Scheduler.pauseTarget():target should be non-null",ES: "cc.Scheduler.resumeTarget():target should be non-null",CS: "cc.Scheduler.isTargetPaused():target should be non-null",ER: "getZOrder is deprecated. Please use getLocalZOrder instead.",PR: "setZOrder is deprecated. Please use setLocalZOrder instead.",CR: "RotationX !\x3d RotationY. Don't know which one to return",DR: "ScaleX !\x3d ScaleY. Don't know which one to return",yR: "An Node can't be added as a child of itself.",zR: "child already added. It can't be added again",
    AR: "child must be non-null",JR: "removeFromParentAndCleanup is deprecated. Use removeFromParent instead",HR: "argument tag is an invalid tag",IR: "cocos2d: removeChildByTag(tag \x3d %s): child not found!",GR: "removeAllChildrenWithCleanup is deprecated. Use removeAllChildren instead",QR: "cc.Node.stopActionBy(): argument tag an invalid tag",BR: "cc.Node.getActionByTag(): argument tag is an invalid tag",LR: "resumeSchedulerAndActions is deprecated, please use resume instead.",FR: "pauseSchedulerAndActions is deprecated, please use pause instead.",
    xR: "Unknown callback function",KR: "child must be non-null",MR: "cc.Node.runAction(): action must be non-null",NR: "callback function must be non-null",OR: "interval must be positive",B6: "cocos2d: Could not initialize cc.AtlasNode. Invalid Texture.",TP: "cc.AtlasNode.updateAtlasValues(): Shall be overridden in subclasses",r5: "",wG: "cocos2d: Could not initialize cc.AtlasNode. Invalid Texture.",iU: "cc._EventListenerKeyboard.checkAvailable(): Invalid EventListenerKeyboard!",kU: "cc._EventListenerTouchOneByOne.checkAvailable(): Invalid EventListenerTouchOneByOne!",
    jU: "cc._EventListenerTouchAllAtOnce.checkAvailable(): Invalid EventListenerTouchAllAtOnce!",hU: "cc._EventListenerAcceleration.checkAvailable(): _onAccelerationEvent must be non-nil",KQ: "Invalid parameter.",Eu: "Don't call this method if the event is for touch.",b_: "Invalid scene graph priority!",c_: "0 priority is forbidden for fixed priority since it's used for scene graph based priority.",g_: "Invalid listener type!",h_: "Can't set fixed priority with scene graph based listener.",d_: "Invalid parameters.",
    e_: "listener must be a cc.EventListener object when adding a fixed priority listener",f_: "The listener has been registered, please don't register it again.",rR: "parameters should not be ending with null in Javascript",sR: "Invalid index in MultiplexLayer switchTo message",tR: "Invalid index in MultiplexLayer switchTo message",qR: "cc.Layer.addLayer(): layer should be non-null",DQ: "Resolution not valid",EQ: "should set resolutionPolicy",W0: "The touches is more than MAX_TOUCHES, nUnusedIndex \x3d %s",tP: "cc.swap is being modified from original macro, please check usage",
    Go: "WebGL error %s",MY: "cocos2d: cc.AnimationCache: No animations were found in provided dictionary.",NY: "cc.AnimationCache. Invalid animation format",UY: "cc.AnimationCache.addAnimations(): File could not be found",OY: "cocos2d: cc.AnimationCache: Animation '%s' found in dictionary without any frames - cannot add to animation cache.",PY: "cocos2d: cc.AnimationCache: Animation '%s' refers to frame '%s' which is not currently in the cc.SpriteFrameCache. This frame will not be added to the animation.",
    QY: "cocos2d: cc.AnimationCache: None of the frames for animation '%s' were found in the cc.SpriteFrameCache. Animation is not being added to the Animation Cache.",RY: "cocos2d: cc.AnimationCache: An animation in your dictionary refers to a frame which is not in the cc.SpriteFrameCache. Some or all of the frames for the animation '%s' may be missing.",SY: "cocos2d: CCAnimationCache: Animation '%s' found in dictionary without any frames - cannot add to animation cache.",TY: "cocos2d: cc.AnimationCache: Animation '%s' refers to frame '%s' which is not currently in the cc.SpriteFrameCache. This frame will not be added to the animation.",
    VY: "cc.AnimationCache.addAnimations(): Invalid texture file name",dT: "cc.Sprite.reorderChild(): this child is not in children list",WS: "cc.Sprite.ignoreAnchorPointForPosition(): it is invalid in cc.Sprite when using SpriteBatchNode",gT: "cc.Sprite.setDisplayFrameWithAnimationName(): Frame not found",hT: "cc.Sprite.setDisplayFrameWithAnimationName(): Invalid frame index",fT: "setDisplayFrame is deprecated, please use setSpriteFrame instead.",PS: "cc.Sprite._updateBlendFunc(): _updateBlendFunc doesn't work when the sprite is rendered using a cc.CCSpriteBatchNode",
    YS: "cc.Sprite.initWithSpriteFrame(): spriteFrame should be non-null",ZS: "cc.Sprite.initWithSpriteFrameName(): spriteFrameName should be non-null",$S: " is null, please check.",XS: "cc.Sprite.initWithFile(): filename should be non-null",iT: "cc.Sprite.setDisplayFrameWithAnimationName(): animationName must be non-null",eT: "cc.Sprite.reorderChild(): child should be non-null",QS: "cc.Sprite.addChild(): cc.Sprite only supports cc.Sprites as children when using cc.SpriteBatchNode",RS: "cc.Sprite.addChild(): cc.Sprite only supports a sprite using same texture as children when using cc.SpriteBatchNode",
    SS: "cc.Sprite.addChild(): child should be non-null",kT: "cc.Sprite.texture setter: Batched sprites should use the same texture as the batchnode",Y6: "cc.SpriteBatchNode.updateQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",bT: "cc.SpriteBatchNode.insertQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",TS: "cc.SpriteBatchNode.addChild(): cc.SpriteBatchNode only supports cc.Sprites as children",US: "cc.SpriteBatchNode.addChild(): cc.Sprite is not using the same texture",
    aT: "Sprite.initWithTexture(): Argument must be non-nil ",jT: "Invalid spriteFrameName",lT: "Invalid argument: cc.Sprite.texture setter expects a CCTexture2D.",Z6: "cc.SpriteBatchNode.updateQuadFromSprite(): sprite should be non-null",cT: "cc.SpriteBatchNode.insertQuadFromSprite(): sprite should be non-null",VS: "cc.SpriteBatchNode.addChild(): child should be non-null",IS: "cc.SpriteBatchNode.addQuadFromSprite(): SpriteBatchNode only supports cc.Sprites as children",KS: "cocos2d: CCSpriteBatchNode: resizing TextureAtlas capacity from %s to %s.",
    LS: "cocos2d: WARNING: Not enough memory to resize the atlas",NS: "cc.SpriteBatchNode.addChild(): Child doesn't belong to Sprite",MS: "cc.SpriteBatchNode.addChild(): sprite batch node should contain the child",JS: "cc.SpriteBatchNode.addQuadFromSprite(): child should be non-null",OS: "cc.SpriteBatchNode.addChild():child should be non-null",e4: "cocos2d: WARNING: originalWidth/Height not found on the cc.SpriteFrame. AnchorPoint won't work as expected. Regenrate the .plist",g4: "cocos2d: WARNING: an alias with name %s already exists",
    d4: "cocos2d: WARNING: Sprite frame: %s has already been added by another source, please fix name conflit",j4: "cocos2d: cc.SpriteFrameCahce: Frame %s not found",f4: "Please load the resource first : %s",h4: "cc.SpriteFrameCache.addSpriteFrames(): plist should be non-null",i4: "Argument must be non-nil",Iy: "cc.SpriteBatchNode.updateQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",gQ: "cc.SpriteBatchNode.insertQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
    cQ: "cc.SpriteBatchNode.addChild(): cc.SpriteBatchNode only supports cc.Sprites as children",fQ: "Sprite.initWithTexture(): Argument must be non-nil ",dQ: "cc.Sprite.addChild(): child should be non-null",iQ: "Invalid spriteFrameName",jQ: "Invalid argument: cc.Sprite texture setter expects a CCTexture2D.",kQ: "cc.SpriteBatchNode.updateQuadFromSprite(): sprite should be non-null",hQ: "cc.SpriteBatchNode.insertQuadFromSprite(): sprite should be non-null",eQ: "cc.SpriteBatchNode.addChild(): child should be non-null",
    GT: "cocos2d: Could not open file: %s",OH: "cc.TextureAtlas.insertQuad(): invalid totalQuads",HT: "cc.TextureAtlas.initWithTexture():texture should be non-null",RT: "cc.TextureAtlas.updateQuad(): quad should be non-null",ST: "cc.TextureAtlas.updateQuad(): Invalid index",KT: "cc.TextureAtlas.insertQuad(): Invalid index",LT: "cc.TextureAtlas.insertQuad(): Invalid index + amount",IT: "cc.TextureAtlas.insertQuadFromIndex(): Invalid newIndex",JT: "cc.TextureAtlas.insertQuadFromIndex(): Invalid fromIndex",PT: "cc.TextureAtlas.removeQuadAtIndex(): Invalid index",
    QT: "cc.TextureAtlas.removeQuadsAtIndex(): index + amount out of bounds",MT: "cc.TextureAtlas.moveQuadsFromIndex(): move is out of bounds",NT: "cc.TextureAtlas.moveQuadsFromIndex(): Invalid newIndex",OT: "cc.TextureAtlas.moveQuadsFromIndex(): Invalid oldIndex",u4: "TextureCache:addPVRTCImage does not support on HTML5",s4: "TextureCache:addPVRTCImage does not support on HTML5",t4: "addPVRImage does not support on HTML5",v4: "cocos2d: Couldn't add UIImage in TextureCache",x4: "cocos2d: '%s' id\x3d%s %s x %s",
    vP: "cocos2d: '%s' id\x3d HTMLCanvasElement %s x %s",y4: "cocos2d: TextureCache dumpDebugInfo: %s textures, HTMLCanvasElement for %s KB (%s MB)",w4: "cc.Texture.addUIImage(): image should be non-null",xT: "initWithETCFile does not support on HTML5",BT: "initWithPVRFile does not support on HTML5",DT: "initWithPVRTCData does not support on HTML5",tT: "cc.Texture.addImage(): path should be non-null",zT: "cocos2d: cc.Texture2D. Can't create Texture. UIImage is nil",AT: "cocos2d: WARNING: Image (%s x %s) is bigger than the supported %s x %s",
    FT: "initWithString isn't supported on cocos2d-html5",yT: "initWithETCFile does not support on HTML5",CT: "initWithPVRFile does not support on HTML5",ET: "initWithPVRTCData does not support on HTML5",vT: "bitsPerPixelForFormat: %s, cannot give useful result, it's a illegal pixel format",sT: "cocos2d: cc.Texture2D: Using RGB565 texture since image has no alpha",uT: "cc.Texture.addImage(): path should be non-null",wT: "NSInternalInconsistencyException",Mc: "Missing file: %s",nO: "cc.radiansToDegress() should be called cc.radiansToDegrees()",
    Ez: "Rect width exceeds maximum margin: %s",Dz: "Rect height exceeds maximum margin: %s",LQ: "If program goes here, there should be event in dispatch.",MQ: "_inDispatch should be 1 here."};
c.Gv = function(a) {
    if (c.Xa) {
        var b = c.EW, d = document;
        if (!b) {
            var e = d.createElement("Div"), b = e.style;
            e.setAttribute("id", "logInfoDiv");
            c.Xa.parentNode.appendChild(e);
            e.setAttribute("width", "200");
            e.setAttribute("height", c.Xa.height);
            b.zIndex = "99999";
            b.position = "absolute";
            b.top = "0";
            b.left = "0";
            b = c.EW = d.createElement("textarea");
            d = b.style;
            b.setAttribute("rows", "20");
            b.setAttribute("cols", "30");
            b.setAttribute("disabled", !0);
            e.appendChild(b);
            d.backgroundColor = "transparent";
            d.borderBottom = "1px solid #cccccc";
            d.borderRightWidth = "0px";
            d.borderLeftWidth = "0px";
            d.borderTopWidth = "0px";
            d.borderTopStyle = "none";
            d.borderRightStyle = "none";
            d.borderLeftStyle = "none";
            d.padding = "0px";
            d.margin = 0
        }
        a = "string" == typeof a ? a : JSON.stringify(a);
        b.value = b.value + a + "\r\n";
        b.scrollTop = b.scrollHeight
    }
};
c.sv = function(a) {
    if ("object" === typeof a)
        try {
            return JSON.stringify(a)
        } catch (b) {
            return ""
        }
    else
        return a
};
console.log && (c.log = function(a) {
    for (var b = 1; b < arguments.length; b++)
        a = a.replace(/(%s)|(%d)/, c.sv(arguments[b]));
    console.log(a)
}, c.warn = console.warn ? function(a) {
    for (var b = 1; b < arguments.length; b++)
        a = a.replace(/(%s)|(%d)/, c.sv(arguments[b]));
    console.warn(a)
} : c.log, c.error = console.error ? function(a) {
    for (var b = 1; b < arguments.length; b++)
        a = a.replace(/(%s)|(%d)/, c.sv(arguments[b]));
    console.error(a)
} : c.log, c.assert = function(a, b) {
    if (!a && b) {
        for (var d = 2; d < arguments.length; d++)
            b = b.replace(/(%s)|(%d)/, c.sv(arguments[d]));
        throw b;
    }
});
var q = c.Fc.Me[c.Fc.Ug.As], A = c.Fc;
console.log && q === A.rQ || (c.log = q == A.Jy ? c.Gv.bind(c) : function() {
});
q && q != A.EG && q != A.qQ && q != A.DG || (c.warn = function() {
});
q != A.Jy && q != A.FG && console.warn || (c.warn = c.Gv.bind(c));
q && q != A.EG ? q != A.Jy && q != A.FG && q != A.DG && console.error || (c.error = c.Gv.bind(c), c.assert = function(a, b) {
    if (!a && b) {
        for (var d = 2; d < arguments.length; d++)
            b = b.replace("%s", arguments[d]);
        c.Gv(b)
    }
}) : (c.error = function() {
}, c.assert = function() {
});
c.W.N1 = function(a, b) {
    var d = this, e = this.bx(), f = "load " + a + " failed!";
    e.open("GET", a, !0);
    /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? (e.setRequestHeader("Accept-Charset", "x-user-defined"), e.onreadystatechange = function() {
        if (4 == e.readyState && 200 == e.status) {
            var a = c.UI(e.responseBody);
            b(null, d.jw(a))
        } else
            b(f)
    }) : (e.overrideMimeType && e.overrideMimeType("text/plain; charset\x3dx-user-defined"), e.onload = function() {
        4 == e.readyState && 200 == e.status ? b(null, d.jw(e.responseText)) : b(f)
    });
    e.send(null)
};
c.W.jw = function(a) {
    if (!a)
        return null;
    for (var b = new Uint8Array(a.length), d = 0; d < a.length; d++)
        b[d] = a.charCodeAt(d) & 255;
    return b
};
c.W.Lfa = function(a) {
    var b = this.bx(), d = "load " + a + " failed!";
    b.open("GET", a, !1);
    a = null;
    if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
        b.setRequestHeader("Accept-Charset", "x-user-defined");
        b.send(null);
        if (200 != b.status)
            return c.log(d), null;
        (b = c.UI(b.responseBody)) && (a = this.jw(b))
    } else {
        b.overrideMimeType && b.overrideMimeType("text/plain; charset\x3dx-user-defined");
        b.send(null);
        if (200 != b.status)
            return c.log(d), null;
        a = this.jw(b.responseText)
    }
    return a
};
var Uint8Array = Uint8Array || Array;
if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
    var aa = c.Kb("script");
    aa.type = "text/vbscript";
    aa.textContent = '\x3c!-- IEBinaryToArray_ByteStr --\x3e\r\nFunction IEBinaryToArray_ByteStr(Binary)\r\n   IEBinaryToArray_ByteStr \x3d CStr(Binary)\r\nEnd Function\r\nFunction IEBinaryToArray_ByteStr_Last(Binary)\r\n   Dim lastIndex\r\n   lastIndex \x3d LenB(Binary)\r\n   if lastIndex mod 2 Then\r\n       IEBinaryToArray_ByteStr_Last \x3d Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n   Else\r\n       IEBinaryToArray_ByteStr_Last \x3d ""\r\n   End If\r\nEnd Function\r\n';
    document.body.appendChild(aa);
    c.UI = function(a) {
        for (var b = {}, d = 0; 256 > d; d++)
            for (var e = 0; 256 > e; e++)
                b[String.fromCharCode(d + 256 * e)] = String.fromCharCode(d) + String.fromCharCode(e);
        d = IEBinaryToArray_ByteStr(a);
        a = IEBinaryToArray_ByteStr_Last(a);
        return d.replace(/[\s\S]/g, function(a) {
            return b[a]
        }) + a
    }
}
;
c = c || {};
c.xK = "data:image/gif;base64,R0lGODlhEAAQALMNAD8/P7+/vyoqKlVVVX9/fxUVFUBAQGBgYMDAwC8vL5CQkP///wAAAP///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAANACwAAAAAEAAQAAAEO5DJSau9OOvNex0IMnDIsiCkiW6g6BmKYlBFkhSUEgQKlQCARG6nEBwOgl+QApMdCIRD7YZ5RjlGpCUCACH5BAUAAA0ALAAAAgAOAA4AAAQ6kLGB0JA4M7QW0hrngRllkYyhKAYqKUGguAws0ypLS8JxCLQDgXAIDg+FRKIA6v0SAECCBpXSkstMBAAh+QQFAAANACwAAAAACgAQAAAEOJDJORAac6K1kDSKYmydpASBUl0mqmRfaGTCcQgwcxDEke+9XO2WkxQSiUIuAQAkls0n7JgsWq8RACH5BAUAAA0ALAAAAAAOAA4AAAQ6kMlplDIzTxWC0oxwHALnDQgySAdBHNWFLAvCukc215JIZihVIZEogDIJACBxnCSXTcmwGK1ar1hrBAAh+QQFAAANACwAAAAAEAAKAAAEN5DJKc4RM+tDyNFTkSQF5xmKYmQJACTVpQSBwrpJNteZSGYoFWjIGCAQA2IGsVgglBOmEyoxIiMAIfkEBQAADQAsAgAAAA4ADgAABDmQSVZSKjPPBEDSGucJxyGA1XUQxAFma/tOpDlnhqIYN6MEAUXvF+zldrMBAjHoIRYLhBMqvSmZkggAIfkEBQAADQAsBgAAAAoAEAAABDeQyUmrnSWlYhMASfeFVbZdjHAcgnUQxOHCcqWylKEohqUEAYVkgEAMfkEJYrFA6HhKJsJCNFoiACH5BAUAAA0ALAIAAgAOAA4AAAQ3kMlJq704611SKloCAEk4lln3DQgyUMJxCBKyLAh1EMRR3wiDQmHY9SQslyIQUMRmlmVTIyRaIgA7";
c.On = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAgCAYAAAD9qabkAAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMNK/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqhGJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQY+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I37Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfcAgcQLxxUBNp/AAAQZ0lEQVR42u2be3QVVZbGv1N17829eRLyIKAEOiISEtPhJTJAYuyBDmhWjAEx4iAGBhxA4wABbVAMWUAeykMCM+HRTcBRWkNH2l5moS0LCCrQTkYeQWBQSCAIgYRXEpKbW/XNH5zS4noR7faPEeu31l0h4dSpvc+t/Z199jkFWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhY/H9D/MR9qfKnLj/00U71aqfJn9+HCkCR/Wk36ddsgyJ/1wF4fkDfqqm9/gPsUeTnVr6a2xlQfnxdI7zs0W7irzD17Ytb2WT7EeNv/r4ox1O3Quf2QP2pgt9utwfout4FQE8AVBSlnaRmfvAURQkg2RlAbwB9AThlW5L0GaiKojhJhgOIBqDa7XaPrusdPtr5kQwF0BVAAoBIABRCKDd5aFUhRDAAw57eAOwAhKIoupft3zoqhB1AqLwuHIBut9uFt02qqvqRDJR2dAEQJj/BAOjn56dqmma+xiaECAEQAWAggLsB6A6HQ2iaZggBhBAqgEAAnQB0kzaEmT4hAITT6VQ8Ho/HJAKKECJQtr8LwD1y/A1/vcdfEUIEyfZ9AcQbYvZ942Px88L2UwlJR0dH0EMPPbRj5syZPUeNGrXR7Xb/641xIwJ1XY9NSUlZm52dfW+XLl1w8uRJzJ8//+OGhoYJqqqe1TSt1Wsm9NN1PSIqKmr12rVrR5WUlHy1bdu2AQCumWc3IYRD1/UwVVXnFRQUTIuNjUVzczN2797dWFJSkq8oymZd15sAGAEnFEUJ1nX9nzIzM1dnZmZGh4SE4OTJk5g5c+Zf29vbp9pstrMej6fVOyhIhgAYU1hY+B+hoaGoqKg4XVlZea+XTULTNFdCQsLGiRMnPuR2u3UhBOV9eeDAAWXTpk095DUe6WsoyRE5OTlr0tLSAux2O/bs2cO5c+e+pijKUpIXSHaQVAGkvPLKK++6XK4OksJLCFlXV2cvKSlJBFAjhU+x2WwhHo9nUHp6+urMzMy7wsLCUF9fjxdffPHjxsbGiTab7WuPx9NiEutOuq4PyMjI+M+srKyYqKgoHD58GDNmzNjq8XhyVFU9b/q+LH7hBAEYu3PnTlZVVRFAGgCX6f/tAHoOHDjwa0p27txp/JO9e/f+QM7cipw9nfL3kQBKt2zZQpJ87rnn6mQmoHilw2EACs+cOUOSrK+vZ1NTE0nyo48+IoBpxswoBcMJ4Ndjx471kOTFixe5d+9ekqTH42H//v13A4jyzpAURfEH0H/OnDnthu1z5sw558MmFUCPWbNmnaMP3nrrLZoyDmP8Hl68eDFJ8siRI9/Yc+zYMQKYKdtAztrTrl27xptRXV1NAKMAOAyBBBA/Y8aMdpLs6Ojgxx9//E37+++//29yvFXppwvAwMcee8xjtDHsuXLlCqOjo//ia3wsfpkoALqFhoZuIckJEyackimm3dQmEMDUmpoakmRISMhhAHOHDx/eQJIbN24kgKEyMAHAFRMTs2XXrl1saWkhSZ0kp0+ffhrAr3wEW/S8efOukORLL72kA1gKYMPWrVtJkk899dRJAHeYrgsEsIQkjx8/TgDvAPjd448/3kaSb7zxBmUa7vC6z53BwcFbSHL9+vU6Sc6aNes8gF5ewWAH0PfVV18lSQL4DMBGIcQ6AKtcLleBFC2jXtFt8ODBe0iyoqKCAJYByC8qKmJDQwOzsrK+MAmqo1OnTveHhoa+GRkZ+XZkZOSWiIiIvzgcjk9mzpypkWRmZuZpmbYbGV4AgPnNzc1sa2sjgN0A5iQmJtaSZHl5OQHcb/K3s81mW0uSTU1NBFAFYFbfvn1Pk+Tbb79NAA8IIVzW42/hByA+Pz/fLR/2ZXIda05NI/z9/TeR5J49ewhgqlxTrtI0jY2NjQQw3zTLuWJiYjaUlJToS5Ys6fjkk080kwDEeAmADcA9GzZsIElGRUW9CyAWwLApU6Y0kOSKFSsog9QICGdERMTGsrIyZmVlEcC9AB4IDw/fTpLbtm0jgN94CUAnAJmVlZVcs2aNZ/LkyRdJcvbs2b4EwAkgZfPmzTxw4AABFAN4BkC6vFeUSewcAO5duXIlSTIhIaEawGMAxgKYAmAGgCS73e5vrKVk/yGythANYEhCQsIhkly+fDkBpKqqGmL6DgIALDKN/3yZpVWQZGVlJQE8aPI3KiMjo5okV61aRQAjAPQBMPfIkSN0u90EUCBtsPiFEwpgbn19PdetW2fM5N4zQ9ekpKQqkty0aRMBpMjiWM6JEydIkoqirJUFJ6iq6pAPVy8A6cZMehMBUACEuVyuFwG8HBwcPEIWx367ZMkSjSQXLVrUJouTRorrkAHdA8BdQogsAOsKCwtJkmPGjDkvMw2bDDo/ADEjRoz4XylyFbm5uY0mAbjLyyZ/AOOrq6tZVlbWsWDBgo69e/eyoqKCgwcPPg4gSQaoIRbp27dvN7KF+tLSUr28vJwFBQXtMpvpYRIM7+wrAkDeqVOnePbsWQIoNKfzpiXPg8uXLydJJicnNwF4f+nSpW6STEtLq5fjYwhk1wkTJtSQ5Ouvv04AqTKj+N2xY8dIkgEBAW/Ie1v8wncRegwZMmQvSfbr12+3Ua33WqPfOWbMmP0kWVpaSgCDZAqcfejQIWNZsEGKgvnh9gfQb9myZd8nAEJVVZtMkUNk8CcNHTq0liR1XWdYWNhmH1mJIme80OnTp18x1rp5eXkEsNJms92Fb7e/IgEsvHz5Mp999tkmAI/l5uZeMC0B7vEqqAYAyL106RJJsra2lpWVld+sucePH38ZQG+5NncBeOrgwYMkqbe3t/Po0aOsra011wAWyl0H7x0JJ4DE+fPnu0kyPT29DsDdUrBuyNKEEAkAdpw/f/6GeoEM8GUmfwEgPCIiopwkGxsbabPZPgOw6L777vvm4p49e26VGYjFLxUhhD+ApLKyMp44ccIoVnXybgbgzkcfffRzklyzZg0BDJYCMMmoCwQFBXkLgLGWvvcWAgBToSsKwNPTp09vMR7UuLi4rwH0lgU8c/Db5ezbeeTIkRWzZ8++aMxu+fn5BPCADBwHgP4LFy701NXVEUAJgAnPP/98kyxMNgHo53A4zH77BQQETMvPz7+Um5vbBuAlAFMSExPPmdbVL0qh8Acw8fDhw5SCchVAEYAVb775JknyhRdeaJYztHfxMwLAaqNwCGC2FArv8x0hAHKNLGPKlCme5OTk/Zs3bzb7O0wKiiG8KXl5ed8IxenTp0mSR48e1UmyW7duWywBuD2xyQcgFECgoih+8H1gyJgZV5Lkyy+/3CbTRIePtl2HDBmyw1QBHyGDdXZdXR1JUghRKkXBjOMHCoBdpr0L3nvvPZLkF198wejo6O0A4lVVDTb74HQ6AwD8Wq7Jh8rgGgDgQ13XjVR8qaxJuADMbmlpYXl5uV5UVNRWUFDgfv/993Vj/ZydnU1c37eHXML4S3viAcQqitJD2l104cIFY8lTKsXSBWBMVVWVcd9yed2A1NTUQ6Zl00CvLMMOoHdubm6zFIlWOf5+PsY/Kj09vdrU11QAwwGsv3jxIk21m2DZr10I0RXAuAcffPBgaWkpV69eTYfDcdiwUxY0w6xw+flX8L1xApjevXv3lREREaW6rofB93aPDUDQpEmTMgHgtddeqwBwEd/utZvpqK6uPgEAcXFxkA94NwB9unfvjrNnz4LklwDcf08iIqv66Zs2bXrl4YcfxooVKxAbG7uqrq5uAYA2TdOEqqpGYIi2tjbl6aeffu/YsWPv5uTk7JaC1wHg4Pnz542MwoVvTx+21dbWYvjw4WLixIl+2dnZ9lGjRgmSTE1NRUpKCkwFTGiaxtTU1OXTpk3707Bhw/6g67pDipnT4biuj7qut+Lbk3Vf1tTUXI9qu91Pjq1QFEUBgJaWFgBo8yGOQ8eNGxcAAOvXr/8QwBUfYygAKL169eoCABcuXACAWtn2hOGv0+kMNO1KiPDw8F4A4rZv3/7R1KlTR0+bNu1ht9u9r1+/fqitrQXJgwDarRC6/QjPzs4+QJIffPCB9/aQmSAA43ft2mW0e1QGoi8CAPyLsZccExNTC2BlRkbGRdOyYJCP2csBIN6UAZzCd7cBbQCijYp/dXU1ExMTz6SmptaMHj36f9LS0vYlJCRsl6mxIWSdu3fv/g5J7t+/nwC2AShMTk6+SJKff/45AWRLYbD7+fndAeDf5BJnLoCCyZMnt5JkdnZ2C4B/F0KEm1Pu+Pj4rST55ZdfEsBWAK+mpaVdMo3raDn7KwDuSEpK+m+S3LBhAwG8DuCtHTt2UBbpjgC408vvcFVV15HkuXPnjMp+p5uMf0RcXNyHJNnQ0EBVVfcCWBQXF3fG+Jv0yxABPwB5LS0tRmFxN4BlTzzxxGWSXLx4sS5F3GGFy+1Hp5SUlJq6ujoWFxdTpsZ2H+0iIyMj/0iSWVlZX5mr5jfJFroPGzasxlhTnjp1iiTZ3NxMl8tlrCd9pfa9SkpKSJI5OTmnZOageLUZZqxvfVFWVkZcPwdgNwnSCKPqb17jkmR8fPzfZMDZ5CRsFBmNI7h95s2b1yhT7/MAYmStwCx4vy0uLqa3v5qmEcCfvSr1QQAeXb16NY3Cm3HQ55133iGAp+SxZTNhKSkpfzUddkrFjYevzAQCeGjp0qXfsYckY2NjTwD4leGDLCL2HTdunNtoY+zWSHFcIHdsFCtcfuZ1vO9Eqs3m7/F47sb1k2qX/f3997W2tl7BjWfpBYDOzzzzzIVJkyZh0KBBCwEsB3AJvl9AETabLcDj8dwRFRW1ctasWb8JCgpSzp07d62wsPC/Wltb8xRFadR1/ZqPXYbgAQMGbI2Pjw/+6quv9ldVVT0r01ezuPRJSUn5Y9euXXVd11WzDaqq6kePHm3+7LPPRgO4KlNuxWazhXo8nuTk5OSXMjIyEl0uFxoaGtqKior+dPXq1VdUVT0jj7r68ieoT58+vx8yZMjdx48fP1JVVTVF9m20VW02WyfZf97YsWPjXS4X6urqWvPy8jYCWCyEuEDS8FdVFKWzruv//OSTTy5OTk7uqWkaPv3007qysrJ8RVH+LI8ym8/rB3Tu3HnRI488knLo0KG2ffv2ZQI4C98vP6mqqoZqmpaclpa2cOTIkX39/f3R0NDQUVxc/G5TU9PLqqrWa5rWLH1QVFUN0TStX1JSUvH48eP7BwYG4uDBg1cKCgpeBbBe2u+2Qug2EwD5N5sMPuNtMe8XP4TT6Qxoa2sbIGeXvUKIK7d4IISiKC5d1wPljOfA9bPwzYqiXNV13dd6Uqiq6qdpml2mpe02m63d4/G4vcTF5fF47LJf71nJA6BZVVW3pmntuPHlmAD5wk6Q9NnbHp9vHaqq6tA0zU/64PZhk1FfCZB9G/23ALiqKEqzD39tpvbGUqoFwFUhRLP3yzpCCDtJpxyXDulfG27+pqRR3DXsUWVd4Yq0x/taVQjhIhksC8L+ABpM9ljBf5sKwI8pIBr75L5E4vvu+UNeG/a+hv+AL7yFH8qPtOfHjtOP6V/Bja8D6z/B2Nys/1u9Xv33tLf4GfF/LC4GCJwByWIAAAAASUVORK5CYII\x3d";
c.t8 = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAlAAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM4MDBEMDY2QTU1MjExRTFBQTAzQjEzMUNFNzMxRkQwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM4MDBEMDY1QTU1MjExRTFBQTAzQjEzMUNFNzMxRkQwIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU2RTk0OEM4OERCNDExRTE5NEUyRkE3M0M3QkE1NTlEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU2RTk0OEM5OERCNDExRTE5NEUyRkE3M0M3QkE1NTlEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQADQkJCQoJDQoKDRMMCwwTFhENDREWGhUVFhUVGhkUFhUVFhQZGR0fIB8dGScnKionJzk4ODg5QEBAQEBAQEBAQAEODAwOEA4RDw8RFA4RDhQVERISERUfFRUXFRUfKB0ZGRkZHSgjJiAgICYjLCwoKCwsNzc1NzdAQEBAQEBAQEBA/8AAEQgAyACgAwEiAAIRAQMRAf/EALAAAAEFAQEAAAAAAAAAAAAAAAQAAgMFBgcBAQEAAwEBAAAAAAAAAAAAAAAAAQMEAgUQAAIBAgIEBwoLBgQGAwAAAAECAwAEEQUhMRIGQVFxsTITFGGBwdEiQlKSMzWRoeFicqKyI1NzFYJjJDQWB9KjVCbxwkNkJWXik3QRAAIBAgMFBQcDBQEAAAAAAAABAhEDIRIEMUFRcTJhwVIUBZGhsSJyEzOB0ULhYpIjUxX/2gAMAwEAAhEDEQA/AMJSpUqAVKlXuFAeUq9wpUB5XuFe4V6ooDzZHDox0CnGMinzwl7Z8NajaHeoO3vmTBZBtp9YUIqTEV5ROxHKnWRnaU8VRMhFBUjpV7hSoSeUq9pUB5Sr2lhQHlKvcK8oBV7hSFSRrtaKAZs07YNPM1pG2xJIAw1jSeandry/8X4m8VCKkWwaWwam7Xl/4v1W8VLtmX/i/VbxUoKkWwakSM407tmX/i/VbxUmzGwjQsjdY41IARie/U0IbZO0kNtCXnOCkEBeFu4KI3Bs7DNb27ya+jDx3kJeEnpJJEcQVbWDsk17u5urd591ucZkWhym2Vnd9RkCDEpFxDRpbw0bunu5mlp2De2FMLYXOD2wB2xbOeraUcYGJ72mlSUiqzzdzMd3Z3mixltA2yzcK/NlHM1DQyRXce1HocdNOEfJXZ88y9ZojOqhiBszIRiHQ8Y4cK5TvHuzLljHNMqxNoDjLFraHHnjPxcNCGVbxEUzYNTx5jZSxhpW6qTzlwJ+DCvO2Zf+L9VvFSgqyHYNLYNTdssPxfibxUu15f8Ai/VPiqCakOwa82DU/a8v/F+JvFTDdWPBL8R8VKCvYRYV5UzoMAy6QdIIqI0B4KJtxiRQwou16QoGUkntH5Tz0RbZbmF2hktraSVBo2lUkY8tDye0flPPXTslVUyiyVRsjqUOA4yMT8dW2ram2m6UVTNq9S7EIyUVJydMTn/6DnP+im9Wl+g5z/opvVrpteEhQWY4AaSTwAVf5WPiZh/9S5/zj7zltzlmYWkfWXNvJDGTgGcYDHirR7i7mSbwXParsFMrgb7w6jKw/wCmnc9I14kF3vpvCljbMyWMOJL4aEiB8qU/ObUK7HYWVrl1pFZWiCOCBQqKOLjPGTrNZZqKbUXVHq2nNwTuJRk1VpbgXN8s7Rk5ym0UQQzhIG2NAjhxHWbI+gCBVjBBFbwxwQqEiiUJGg1BVGAFe7dV28WYLYZFmF2Th1UD7JGjymGyn1iK5OyzIBGB1HgrLZhamzumQAGJwSqnSCh1q3GOCodxt4cxurdcpzuN4cyhiWaF5Bg09udUmnWw1H/jV9nFuJ7Quo+8h8peThFA+047vduyMtk7fYqTl07YFdfUufMPzT5p71UdtlmYXaGS2t3mQHAsgxANdadYJopLe4QS2867EsZ4QfCNYrCFbjdDPmgkYyWFxgVf04ifJf6ScNdRUW1XBb6FU5TjF5EpSSrGu/s5lN+g5z/opvVpfoOc/wCim9WtdHnatvObJXDW7xLGhB8nrPaY9/HCr+tEdPCVaSeDoYLnqF63lzW4/PFSW3ecxbI84VSzWUwUaSdg0DXXK5nvAipnd6qgKvWnQO7pri9ZUEmm3Vl2j1kr8pRlFRyquBNZjGxQ/S56Y1S2fu9OVueon11Szahoou06QoQUXadIVCD2FJJ7R+U89dMydv8Axdn+TH9muZye0flPPXQstlK5Tbka1gUjlC1q0vVLkeb6r+O3Tx9xcY1nt8c0NrZCyiOE1108NYjGv1joo7Js1jzKyScYLIvkzL6LDwHXVJksH9Sb49dKNq0tj1jA6uriOCL+02FWX7iVtZX1/AzaHTyeoauKn2MX9W79zebiZCuR5MjSrhfXuEtwTrUeZH+yNfdrRNcxI6IzhXlJEak6WIGJ2Rw4ChWnChndtlVBLMdQA0k1gbXNMzzDfDLs6mjaPKppJbWwJ1bOwwxw43OnHh71YT3DpfWUJmFlb5jHHDdeXBHIsrRea5TSqvxqG04cNN62vetoCS4tre5mgnkGE9q+3DKOkuI2WX6LDQRRHWDh1UCtwj7QRg2wdl8Djgw1qe7XvW0BQ3kfZ7mSLgU+T9E6RVbnuVrnWVSWqj+Lt8ZbRuHEdKPkYVcZ2MJY5fSGyeVar45+rkWQHAqccalPE5km1htWK5nK4Wnt5FuUBUwOMG4nGkA/BXUrW4S6torlOjMgcd/xVn7rLo7zKs0uEjCNeSvdwoBhgsZxX1l2j36k3Lu+uyprdj5Vs5A+i/lD48a0aaVJOPi7jB6lbzWozpjB48pf1NDXNN4vfl7+Z4BXS65pvF78vfzPAK71XTHmZ/S/yT+jvJ7L3fHytz1E+upbL+Qj5W56jfXWRnsIYKLtekKEFGWvSFQgyjk9o/Keet3YthlMP/5x9msJJ7R+U89biyb/AMXEv7gD6tadL1T+kwepRrC39ZkLDMbiwMvUHRPG0bjlGg8ore/23sxBldxfMPLupNhT8yL/AORNZbdzJ484scytxgLqJY5LZj6Q2sV5G1Vud1mjjyG0ij0NEGSZToKyhjtqw4waztuiXA3qKTbSxltfGhbZlE95ZtZqxVbgiOZhrER9ph3Svk9+pJILZ4Y4DGBFCUMKjRsGPobPFhUfW0NJmljE2xJcIrcI2vFUEln1lRXd6lrazXT9GCNpD+yNqoI7mOVduNw6nzlOIoPOUa6yye1XXcbMR5GdQ3xY0BSbj31/FcTQZirJ+q431q7anbHCTZ72Bw7lbPrKBMcBWNNgbMBBh+bsjBdni0VJ1lARZs6yWiupxCuMDy6KpS2IwOo6DTr3Mre3e5tZZVUM4ZBjqOOJoWO4jkXajcOOMHGgDISvWIrdAkKR80+TzVl908bPPL3LzxOuHdifxVfiTAg92qI/w+/8gGgSyN/mR7XPVlp0lF/3L3mbVKtu5Hjbk/8AHE2Fc03i9+Xv5ngFdKNc13i9+Xv5ngFaNV0x5nn+l/kn9HeEWXu+PlbnqJ9dS2Xu9OVueon11kZ7CGCjLXpCgxRlr0hUIPYUcntH5Tz1s8vb+Bt1/dqPirGSe0flPPWusG/g4Py15q06XqlyMWvVYQ+ruI9xJOqzO9hOto/sP8tbGOFIrmWeM7IuMDMnAXXQJOUjQeOsJk0nY96ip0CYunrjaHx1t+srPJUbXBm2LrFPikwTOb+T+VhbZxGMrDXp83x1QSy2tucJpUjPETp+Cn5/ftaRvKvtp3Kx48HG3erHMzOxZiWZtLMdJNQSbbL71Vk6yynViOkqnEEfOWtPbXi3EQkGg6mXiNckjeSJxJGxR10qw0GtxuxmvbImD4CZMFlA4fRfv0BqesqqzTMZNMEDbIHtHH2QeCiZJSqMQdOGiue53mz3czQwsRbIcNHnkec3c4qAMuriz68gTIToxwOOnlp0MjxMJYW741Gs3RVldtbygE/dMcHX/moDaxTiWNZB53B3arb8/wC+4SOF4sf/AKxU9kcBsfOGHfoUHtG/RbzY5Die5HHhXdvavqiZ9Q8Jdlq4/gbKua7xe/L38zwCuhpf2Uk/Zo50kmwJKIdogDjw1VzzeL35e/meAVp1LTgqY4nn+mRauzqmqwrjzCLL3fHytz1E+upLL+Qj5W56jfXWRnroYKLtekKEFF2vSFQg9hSSe0flPPWosm/hIfoLzVl5PaPynnrRWb/w0X0F5q06XqlyM2sVYx5gmbFre/t71NY2T+0h8VbSO5SWNJUOKSAMp7jDGspmMPaLRlXS6eWve1/FRO7WYdbZm1Y/eW/R7qHxHRXGojlm3ulid6aVbaW+OALvgCLq2Hm9WxHKWqjhj6xsK1e8dm15l4niG1LZkswGsxtrPeOmsvayBJA1VItlWjptLuTdPMo7LtjRDq9naK4+WF9IrUW7BaHOljGqVHB7w2hzVoZt87d8vaNYSLl02CcRsDEbJbj71Uu7UBkvJ7/D7q2QoDxySaAO8MTXdxRVMpRp5XZOWdF/ms7R5XdyKfKWJsO/5PhrG5XlNxmEywW6bTnTxAAcJNbGSMXkM1pjgbiNo1PziPJ+Os7u7m/6ReM00ZOgxSpqYYHT3wRXMKN4ll9zUG4bQfNshu8sZVuEA2hirA4qe/VOwwrVbzbww5mI44UKRRYkbWG0S3JWctbd7u5WFfOOLHiUdJqmaipfLsIsObhWe001lMkMVvJNjhghIALMcBxCs7fxXQmkupx1bXDswGPlaTidVaEyKNXkoo4eBV+Sq7L7Vs9zcBgeyQ4GQ/MB1crmoim2orezqcowTuSeEY48jQ7oZX2PLzdyLhNd6RjrEY6I7+uspvH78vfzPAK6UAAAFGAGgAcArmu8Xvy9/M8ArTfio24RW5nnaG67uou3H/KPuqT2X8hHytz1G+upLL3enK3PUb66ys9RDBRdr0hQgou06QqEGUkntH5Tz1e238vF9BeaqKT2j8p56vbb+Xi+gvNWjTdUuRn1XTHmTh8KrJTJlt8t1CPIY44cGnpJVjTJYkmjaN9Ib4u7V923njTethRauZJV3PaW1rfLIiXEDYg6R4VYc9CXW7thfOZbKdbGZtLW8uPVY/u3GrkNUkM9zlcxUjbhfWOA90cRq4gv4LhdqN+VToNYWmnRm9NNVWNTyHc6VWBv8wt4YeHqm6xyPmroq1Z7WGFLSxTq7WLSuPSdjrkfumq5yHXDUeA92oO2SKpVumNAaoJLMXH3myp0rpJ4uKhc3tbDM5BMri1zAj79j7KTiY8TcdBpcsith0286o+sPCagEX9Pzg4zXUCp6QYse8oouCG3tk6m1BYv05W6T+IdyolxbHDAAa2OgDlNCz3ryN2WxBd5PJMg1t81eId2ukqnLlTBbfcuY+9uJLiRcvtPvHdsHK+cfRHcHDWsyawjyy0WBcDI3lTP6TeIcFV+S5OmXx9bJg1048o8Cj0V8Jq2DVu09nL80up7OxHi+oal3P8AXB/IsZS8T/YOV65zvCcc7vfzPAK3ivWCz445zeH954BXOr6I8yfSfyz+jvCLP3fHytz1G+upLP3fHytz1E+usbPaQ0UXadIUIKLtekKhB7Ckk9o/Keer22/l4/oLzVRSe0flPPV7b/y8X0F5q0abqlyM+q6Y8yQsBTDMor1o8aiaE1pbluMqS3sbLLHIhSRQyngqukhaJ9uBjo+H5aOa3ao2t34qouRlLajTalGP8v0IY8ylXQ+PKPFU/bYXOLPge6CKia0LaxTOxHu1Q7cuBd9yPEJ7TbjXKO8CajbMIF6CNIeNvJHjqIWJ7tSpYkalqVblwIdyG+RGXur0hXYJFxal+Dhq5y3slkv3Y2pD0pTr+QUClpJRUdo9XW4OLrTHtM16cZLLWkeC7y4jvlNEpcRtw1Ux27Ci448NZrTFy3nn3IQWxlgGrDZ3pza7/M8ArZo+ArF5171uvp+CqdV0R5l/psUrs2vB3hdl7vTlbnqJ9dS2Xu+PlbnqJ9dY2eshooq16QoQUXa9IVCD2FLJ7RuU89WNtmUSQqkgYMgw0accKrpPaPynnrZWG4Vi+VWmY5tnMWXG+XrIYnA0rhj0mdcTgdNdwnKDqjmduM1SRR/qlr8/4KX6pa8T/BVzDuLZXudRZblmbxXcPUNPc3KqCIwrbOzgrHEnHjoyD+3eSXkht7DeKG4umDGOJVUklfouThXfmbnZ7Cvy1vt9pmv1W1+d8FL9VteJvgq5yrcOGfLmzHN80iyyETPbptAEFo2ZG8pmUa1OFNn3Ky6W/sbDKM5hv5bx2WTZA+7RF2y52WOPJTzE+z2Dy1vt9pT/AKpacTerS/U7Tib1a04/t7kDXPY03jhN0W6sQ7K7W3q2dnrMccaDy/8At80kuZfqWYxWNtlcvUPPhiGYhWDeUy7IwYU8xPs9g8tb7faUn6pacTerTxm9oOBvVq3v9z927aynuId44LiWKNnjhAXF2UYhRg516qpsryjLr21665zFLSTaK9U2GOA87SwqY37knRU+BzOzags0s1Oyr+BKM6sxwP6tSDPLMen6vy0rvdm3Sxlu7K/S7WDDrFUDUTxgnTU826eXW7KlxmqQuwDBXUKcD+1Xee/wXuKX5XDGWLapSVcOyhEM/seJ/V+WnjeGx4pPV+Wkm6kKZlFay3Jlt7iFpYZY8ASVK6DjtDDA0f8A0Tl340/1f8Ndx8xJVWXB0KbktFFpNzdVXAC/qOwA0CQni2flrO3Vwbm5lnI2TKxbDirX/wBE5d+NcfV/wVR7xZPa5U9utvI8nWhmbbw0YEAYYAVxfhfy5rlKR4Fulu6X7mW1mzT8S4Yis/5CPlbnqJ9dSWfu9OVueon11mZvQ2i7XpChKKtekKhBlNJ7R+U89bDfGTb3a3ZX0Lcj6kdY+T2j8p560288m1kWQr6MJ+ylSAr+2cnV5renjs3H1loX+3j9XvbbtxLN9lqW4UnV5jdnjtXHxihtyZNjeSBu5J9k1BJe7xy7W5CJ/wCzuD/mTVTf2+fq97LJuLrPsNRueS7W6aJ/38x+vLVXuY+xvHaNxbf2GoCezf8A36j/APsSf8w1sLnqczTefJluYoLm5uo5F61sBshItP1cNFYe1f8A3ir/APfE/wCZUe9bB94r5jwuPsrQFhmG4l/Z2M17HdW90tuu3IkTHaCjWdIw0VVZdks9/C06yJFEp2dp+E1bbqybGTZ8vpQD7L1XRv8A7blT96Oda7tpNuuNE37Cq9KSisjyuUoxrStKllHbLlWTXsMs8chuSuwEPDqwoLe5y+YRE/gLzmqRekvKKtd4327yM/ulHxmrHJStySWVRyrjxKI2XC/CTlnlPPKTpTdFbP0L1bgrf5Lp0G3dPhQHwV0S1lzBsns3sESR8Crh9WAJGjSOKuU3E+zdZQ3oJh8IArdZXFDmOTpHa3i2+YrI2KtKy4ricBsBuHHgFXSo440+Wa2qqxjvM9uMoy+WvzWpLCWWWE28HxL6e43ojgkeSCBY1Ri5BGIUDT51cl3vm276BBqSEH4WbxV0tlkyXJcxTMb+OW6uY9mGHrCzDQwwAbTp2uKuTZ9N1uYsfRRR8WPhrm419mSSjRyiqxVK7y23B/ftuTm2oSdJyzNVw3BFn7vTlbnqF9dS2fu9OVueon11lZuQ2iLdsGFD05H2dNQGV0ntG5Tz1dWm9N1b2kVq8EVwsI2UaQaQOKhmitZGLOmk68DhSFvY+gfWNSAg7z3Qvo7yKCKIohiaNR5LKxx8qpxvjcqS0VpbxvwOAcRQPZ7D0G9Y0uz2HoH1jUCpLY7zXlpbm3eKO5QuzjrBqZji3x17PvNcyT288VvDBJbMWUovS2hslW7mFQ9nsPQPrGl2ew9A+saCod/WNxtbYsrfb17WBxx5ddD2281xC88klvDcSXEnWuzrqOGGC9zRUPZ7D0G9Y0uzWHoH1jQVCLreq6ntZbaO3it1mGy7RjTs1X2mYy20ZiCq8ZOODcdEdmsPQb1jS7PYegfWNdJuLqnQiSUlRqpFLmryxtH1Ma7Qw2gNNPOdSt0oI27p007s9h6B9Y0uz2HoH1jXX3Z+I4+1b8IJdX89xLHKQFMXQUahpxoiPN5P+onfU+A0/s9h6DesaXZ7D0D6xpG7OLbUtu0StW5JJx2bBsmbtiSiEk+cxoCWWSaVpZOk2vDVo0VYdnsPQb1jSNvZcCH1jSd2c+p1XAmFqEOmOPEfaH+BQd1ueo211IzrgFUYKNAAqI1WztCpUqVCRUqVKgFSpUqAVKlSoBUqVKgFSpUqAVKlSoBUqVKgFSpUqAVKlSoD/9k\x3d";
var c = c || {}, D = {id: 0 | 998 * Math.random(),X0: 0 | 998 * Math.random(),dM: function(a, b, d) {
        a = a.toString();
        var e = a.substring(a.indexOf("(") + 1, a.indexOf(")")), e = e.trim();
        for (a = a.substring(a.indexOf("{") + 1, a.lastIndexOf("}")); -1 != a.indexOf("this._super"); ) {
            var f = a.indexOf("this._super"), g = a.indexOf("(", f), h = a.substring(g + 1, a.indexOf(")", g)), h = h.trim();
            a = a.substring(0, f) + "ClassManager[" + d + "]." + b + ".call(this" + (h ? "," : "") + a.substring(g + 1)
        }
        return Function(e, a)
    },Z_: function() {
        return this.id++
    },$_: function() {
        return this.X0++
    }};
D.dM.J5 = D;
(function() {
    var a = /\b_super\b/, b = c.Fc.Me[c.Fc.Ug.iZ];
    b && console.log("release Mode");
    c.la = function() {
    };
    c.la.extend = function(d) {
        function e() {
            this.va = D.$_();
            this.ctor && this.ctor.apply(this, arguments)
        }
        var f = this.prototype, g = Object.create(f), h = D.Z_();
        D[h] = f;
        var k = {writable: !0,enumerable: !1,configurable: !0};
        g.va = null;
        e.id = h;
        k.value = h;
        Object.defineProperty(g, "__pid", k);
        e.prototype = g;
        k.value = e;
        Object.defineProperty(e.prototype, "constructor", k);
        this.Vh && (e.Vh = c.j(this.Vh));
        this.Wh && (e.Wh = c.j(this.Wh));
        for (var m = 
        0, p = arguments.length; m < p; ++m) {
            var r = arguments[m], s;
            for (s in r) {
                var u = "function" === typeof r[s], t = "function" === typeof f[s], v = a.test(r[s]);
                b && u && t && v ? (k.value = D.dM(r[s], s, h), Object.defineProperty(g, s, k)) : u && t && v ? (k.value = function(a, b) {
                    return function() {
                        var d = this._super;
                        this._super = f[a];
                        var e = b.apply(this, arguments);
                        this._super = d;
                        return e
                    }
                }(s, r[s]), Object.defineProperty(g, s, k)) : u ? (k.value = r[s], Object.defineProperty(g, s, k)) : g[s] = r[s];
                if (u) {
                    var w, y;
                    if (this.Vh && this.Vh[s]) {
                        var u = this.Vh[s], B;
                        for (B in this.Wh)
                            if (this.Wh[B] == 
                            u) {
                                y = B;
                                break
                            }
                        c.f(g, u, r[s], r[y] ? r[y] : g[y], s, y)
                    }
                    if (this.Wh && this.Wh[s]) {
                        u = this.Wh[s];
                        for (B in this.Vh)
                            if (this.Vh[B] == u) {
                                w = B;
                                break
                            }
                        c.f(g, u, r[w] ? r[w] : g[w], r[s], w, s)
                    }
                }
            }
        }
        e.extend = c.la.extend;
        e.kda = function(a) {
            for (var b in a)
                g[b] = a[b]
        };
        return e
    };
    Function.prototype.bind = Function.prototype.bind || function(a) {
        var b = this;
        return function() {
            var f = Array.prototype.slice.call(arguments);
            return b.apply(a || null, f)
        }
    }
})();
c.f = function(a, b, d, e, f, g) {
    if (a.__defineGetter__)
        d && a.__defineGetter__(b, d), e && a.__defineSetter__(b, e);
    else if (Object.defineProperty) {
        var h = {enumerable: !1,configurable: !0};
        d && (h.get = d);
        e && (h.set = e);
        Object.defineProperty(a, b, h)
    } else
        throw Error("browser does not support getters");
    if (!f && !g)
        for (var h = null != d, k = void 0 != e, m = Object.getOwnPropertyNames(a), p = 0; p < m.length; p++) {
            var r = m[p];
            if ((a.__lookupGetter__ ? !a.__lookupGetter__(r) : !Object.getOwnPropertyDescriptor(a, r)) && "function" === typeof a[r]) {
                var s = a[r];
                if (h && s === d && (f = r, !k || g))
                    break;
                if (k && s === e && (g = r, !h || f))
                    break
            }
        }
    a = a.constructor;
    f && (a.Vh || (a.Vh = {}), a.Vh[f] = b);
    g && (a.Wh || (a.Wh = {}), a.Wh[g] = b)
};
c.j = function(a) {
    var b = a.constructor ? new a.constructor : {}, d;
    for (d in a) {
        var e = a[d];
        b[d] = "object" != typeof e || !e || e instanceof c.q || e instanceof HTMLElement ? e : c.j(e)
    }
    return b
};
c = c || {};
c.B = c.B || {};
c.s9 = function() {
};
c.iq = {WL: 8,r4: 9,AM: 13,shift: 16,U9: 17,alt: 18,pause: 19,D9: 20,escape: 27,Dga: 33,Cga: 34,end: 35,home: 36,left: 37,zka: 38,right: 39,l$: 40,oda: 45,T5: 46,0: 48,1: 49,2: 50,3: 51,4: 52,5: 53,6: 54,7: 55,8: 56,9: 57,a: 65,b: 66,D: 67,H: 68,Fg: 69,zh: 70,g: 71,Wo: 72,Ms: 73,sx: 74,tx: 75,Dx: 76,Ix: 77,bl: 78,Lx: 79,Rx: 80,Wx: 81,r: 82,JF: 83,kG: 84,ea: 85,fa: 86,G: 87,x: 88,y: 89,z: 90,Tfa: 96,Ufa: 97,Vfa: 98,Wfa: 99,Xfa: 100,Yfa: 101,Zfa: 102,$fa: 103,aga: 104,bga: 105,"*": 106,"+": 107,"-": 109,numdel: 110,"/": 111,V$: 112,Z$: 113,$$: 114,aaa: 115,baa: 116,caa: 117,
    daa: 118,eaa: 119,faa: 120,W$: 121,X$: 122,Y$: 123,ega: 144,Nha: 145,Pha: 186,",": 186,T$: 187,"\x3d": 187,";": 188,P9: 188,V9: 189,".": 190,Jga: 190,paa: 191,gda: 192,"[": 219,mga: 219,"]": 221,M9: 221,t9: 220,quote: 222,Zja: 32};
c.Y5 = 0;
c.Ty = 1;
c.NG = 2;
c.Z5 = 3;
c.a6 = 4;
c.PQ = 5;
c.N_ = function(a) {
    return 8 < a.length && 137 == a[0] && 80 == a[1] && 78 == a[2] && 71 == a[3] && 13 == a[4] && 10 == a[5] && 26 == a[6] && 10 == a[7] ? c.Ty : 2 < a.length && (73 == a[0] && 73 == a[1] || 77 == a[0] && 77 == a[1] || 255 == a[0] && 216 == a[1]) ? c.NG : c.PQ
};
c.lda = function(a, b) {
    function d() {
    }
    d.prototype = b.prototype;
    a.ty = b.prototype;
    a.prototype = new d;
    a.prototype.constructor = a
};
c.u9 = function(a, b, d) {
    var e = arguments.callee.caller;
    if (e.ty)
        return ret = e.ty.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
    for (var f = Array.prototype.slice.call(arguments, 2), g = !1, h = a.constructor; h; h = h.ty && h.ty.constructor)
        if (h.prototype[b] === e)
            g = !0;
        else if (g)
            return h.prototype[b].apply(a, f);
    if (a[b] === e)
        return a.constructor.prototype[b].apply(a, f);
    throw Error("cc.base called from a method of one name to a method of a different name");
};
c.P6 = function(a, b) {
    this.x = a || 0;
    this.y = b || 0
};
function N(a, b) {
    return void 0 == a ? {x: 0,y: 0} : void 0 == b ? {x: a.x,y: a.y} : {x: a,y: b}
}
c.zF = function(a, b) {
    return a && b && a.x === b.x && a.y === b.y
};
c.V6 = function(a, b) {
    this.width = a || 0;
    this.height = b || 0
};
function P(a, b) {
    return void 0 === a ? {width: 0,height: 0} : void 0 === b ? {width: a.width,height: a.height} : {width: a,height: b}
}
c.Wja = function(a, b) {
    return a && b && a.width == b.width && a.height == b.height
};
c.wH = function(a, b, d, e) {
    this.x = a || 0;
    this.y = b || 0;
    this.width = d || 0;
    this.height = e || 0
};
function S(a, b, d, e) {
    return void 0 === a ? {x: 0,y: 0,width: 0,height: 0} : void 0 === b ? {x: a.x,y: a.y,width: a.width,height: a.height} : {x: a,y: b,width: d,height: e}
}
c.rO = function(a, b) {
    return a && b && a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height
};
c.vC = function(a) {
    return a && 0 === a.x && 0 === a.y && 0 === a.width && 0 === a.height
};
c.$ga = function(a, b) {
    return a && b ? !(a.x >= b.x || a.y >= b.y || a.x + a.width <= b.x + b.width || a.y + a.height <= b.y + b.height) : !1
};
c.jt = function(a) {
    return a.x + a.width
};
c.aha = function(a) {
    return a.x + a.width / 2
};
c.mp = function(a) {
    return a.x
};
c.kt = function(a) {
    return a.y + a.height
};
c.bha = function(a) {
    return a.y + a.height / 2
};
c.np = function(a) {
    return a.y
};
c.qO = function(a, b) {
    return b.x >= c.mp(a) && b.x <= c.jt(a) && b.y >= c.np(a) && b.y <= c.kt(a)
};
c.Xx = function(a, b) {
    var d = a.y + a.height, e = b.x + b.width, f = b.y + b.height;
    return !(a.x + a.width < b.x || e < a.x || d < b.y || f < a.y)
};
c.dha = function(a, b) {
    return !(a.x + a.width < b.x || b.x + b.width < a.x || a.y + a.height < b.y || b.y + b.height < a.y)
};
c.Yx = function(a, b) {
    var d = S(0, 0, 0, 0);
    d.x = Math.min(a.x, b.x);
    d.y = Math.min(a.y, b.y);
    d.width = Math.max(a.x + a.width, b.x + b.width) - d.x;
    d.height = Math.max(a.y + a.height, b.y + b.height) - d.y;
    return d
};
c.cha = function(a, b) {
    var d = S(Math.max(c.mp(a), c.mp(b)), Math.max(c.np(a), c.np(b)), 0, 0);
    d.width = Math.min(c.jt(a), c.jt(b)) - c.mp(d);
    d.height = Math.min(c.kt(a), c.kt(b)) - c.np(d);
    return d
};
c.ou = c.la.extend({FK: null,IB: null,ctor: function() {
        window.DOMParser ? (this.IB = !0, this.FK = new DOMParser) : this.IB = !1
    },parse: function(a) {
        return this.bC(a)
    },bC: function(a) {
        var b;
        this.IB ? b = this.FK.parseFromString(a, "text/xml") : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a));
        return b
    }});
c.hS = c.ou.extend({parse: function(a) {
        a = this.bC(a).documentElement;
        if ("plist" != a.tagName)
            throw "Not a plist file!";
        for (var b = null, d = 0, e = a.childNodes.length; d < e && (b = a.childNodes[d], 1 != b.nodeType); d++)
            ;
        return this.aC(b)
    },aC: function(a) {
        var b = null, d = a.tagName;
        if ("dict" == d)
            b = this.XW(a);
        else if ("array" == d)
            b = this.WW(a);
        else if ("string" == d)
            if (1 == a.childNodes.length)
                b = a.firstChild.nodeValue;
            else
                for (b = "", d = 0; d < a.childNodes.length; d++)
                    b += a.childNodes[d].nodeValue;
        else
            "false" == d ? b = !1 : "true" == d ? b = !0 : "real" == d ? 
            b = parseFloat(a.firstChild.nodeValue) : "integer" == d && (b = parseInt(a.firstChild.nodeValue, 10));
        return b
    },WW: function(a) {
        for (var b = [], d = 0, e = a.childNodes.length; d < e; d++) {
            var f = a.childNodes[d];
            1 == f.nodeType && b.push(this.aC(f))
        }
        return b
    },XW: function(a) {
        for (var b = {}, d = null, e = 0, f = a.childNodes.length; e < f; e++) {
            var g = a.childNodes[e];
            1 == g.nodeType && ("key" == g.tagName ? d = g.firstChild.nodeValue : b[d] = this.aC(g))
        }
        return b
    }});
c.CL = {load: function(a, b, d, e) {
        c.W.Hx(a, e)
    }};
c.W.Jj(["txt", "xml", "vsh", "fsh", "atlas"], c.CL);
c.xW = {load: function(a, b, d, e) {
        c.W.ZN(a, e)
    }};
c.W.Jj(["json", "ExportJson"], c.xW);
c.eW = {load: function(a, b, d, e) {
        c.W.Uf[b] = c.W.Gx(a, function(a, d) {
            if (a)
                return e(a);
            c.Ba.Vb(b);
            e(null, d)
        })
    }};
c.W.Jj("png jpg bmp jpeg gif ico".split(" "), c.eW);
c.rX = {load: function(a, b, d, e) {
        c.W.Uf[b] = c.W.Gx(d.src, function(a, d) {
            if (a)
                return e(a);
            c.Ba.Vb(b);
            e(null, d)
        })
    }};
c.W.Jj(["serverImg"], c.rX);
c.bX = {load: function(a, b, d, e) {
        c.W.Hx(a, function(a, b) {
            if (a)
                return e(a);
            e(null, c.m2.parse(b))
        })
    }};
c.W.Jj(["plist"], c.bX);
c.qV = {qT: {".eot": "embedded-opentype",".ttf": "truetype",".woff": "woff",".svg": "svg"},uK: function(a, b, d) {
        var e = document, f = c.path, g = this.qT, h = c.Kb("style");
        h.type = "text/css";
        e.body.appendChild(h);
        var k = "@font-face { font-family:" + a + "; src:";
        if (b instanceof Array)
            for (var m = 0, p = b.length; m < p; m++)
                d = f.Vk(b[m]).toLowerCase(), k += "url('" + b[m] + "') format('" + g[d] + "')", k += m == p - 1 ? ";" : ",";
        else
            k += "url('" + b + "') format('" + g[d] + "');";
        h.textContent += k + "};";
        b = c.Kb("div");
        d = b.style;
        d.fontFamily = a;
        b.innerHTML = ".";
        d.position = 
        "absolute";
        d.left = "-100px";
        d.top = "-100px";
        e.body.appendChild(b)
    },load: function(a, b, d, e) {
        b = d.type;
        a = d.name;
        b = d.aka;
        "string" == typeof d ? (b = c.path.Vk(d), a = c.path.aZ(d, b), this.uK(a, d, b)) : this.uK(a, b);
        e(null, !0)
    }};
c.W.Jj(["font", "eot", "ttf", "woff", "svg"], c.qV);
c.M7 = {load: function(a, b, d, e) {
        c.W.N1(a, e)
    }};
window.CocosEngine = c.Qy = "Cocos2d-html5 v3.0 RC1";
c.Ym = 0;
c.Ly = N(0, 0);
c.sQ = 0.5;
c.I5 = 1;
c.Jz = 1;
c.RR = 0;
c.GH = 0;
c.Mz = 0;
c.b7 = 0;
c.R6 = 1;
c.Q6 = "-hd";
c.eU = 1;
c.Uj = 0;
c.T6 = 0;
c.nR = 0;
c.mR = 0;
c.az = 1;
c.L5 = c.Qy + "-canvas";
c.Kt = 1;
c.Wg = 1;
c.rb = function(a) {
    var b = this == c ? document : this;
    if (a = a instanceof HTMLElement ? a : b.querySelector(a))
        a.find = a.find || c.rb, a.TE = a.TE || function(a) {
            return this.className.match(RegExp("(\\s|^)" + a + "(\\s|$)"))
        }, a.PL = a.PL || function(a) {
            this.TE(a) || (this.className && (this.className += " "), this.className += a);
            return this
        }, a.E2 = a.E2 || function(a) {
            this.TE(a) && (this.className = this.className.replace(a, ""));
            return this
        }, a.remove = a.remove || function() {
            this.parentNode && this.parentNode.removeChild(this);
            return this
        }, a.SL = a.SL || 
        function(a) {
            a.appendChild(this);
            return this
        }, a.r2 = a.r2 || function(a) {
            a.childNodes[0] ? a.insertBefore(this, a.childNodes[0]) : a.appendChild(this);
            return this
        }, a.zt = a.zt || function() {
            this.style[c.rb.A4] = c.rb.translate(this.position) + c.rb.rotate(this.rotation) + c.rb.scale(this.scale) + c.rb.vp(this.vp);
            return this
        }, a.position = a.position || {x: 0,y: 0}, a.rotation = a.rotation || 0, a.scale = a.scale || {x: 1,y: 1}, a.vp = a.vp || {x: 0,y: 0}, a.AP = function(a, b) {
            this.position.x = a;
            this.position.y = b;
            this.zt()
        }, a.rotate = function(a) {
            this.rotation = 
            a;
            this.zt();
            return this
        }, a.resize = function(a, b) {
            this.scale.x = a;
            this.scale.y = b;
            this.zt();
            return this
        }, a.nja = function(a, b) {
            this.vp.x = a;
            this.vp.y = b;
            this.zt();
            return this
        };
    return a
};
switch (c.Lb.nm) {
    case c.Lb.Jp:
        c.rb.ft = "Moz";
        c.rb.Xo = !0;
        break;
    case c.Lb.Dy:
    case c.Lb.Gy:
        c.rb.ft = "webkit";
        c.rb.Xo = !0;
        break;
    case c.Lb.Fy:
        c.rb.ft = "O";
        c.rb.Xo = !1;
        break;
    case c.Lb.Ey:
        c.rb.ft = "ms";
        c.rb.Xo = !1;
        break;
    default:
        c.rb.ft = "webkit", c.rb.Xo = !0
}
c.rb.A4 = c.rb.ft + "Transform";
c.rb.translate = c.rb.Xo ? function(a) {
    return "translate3d(" + a.x + "px, " + a.y + "px, 0) "
} : function(a) {
    return "translate(" + a.x + "px, " + a.y + "px) "
};
c.rb.rotate = c.rb.Xo ? function(a) {
    return "rotateZ(" + a + "deg) "
} : function(a) {
    return "rotate(" + a + "deg) "
};
c.rb.scale = function(a) {
    return "scale(" + a.x + ", " + a.y + ") "
};
c.rb.vp = function(a) {
    return "skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
};
c.NP = function() {
    return c.rb(document.createElement("input"))
};
c.rb.kaa = function(a) {
    var b = 0, d = 0;
    do
        b += a.offsetLeft, d += a.offsetTop;
    while (a = a.offsetParent);
    return {x: b,y: d}
};
c.j6 = -1;
c.PI = Math.PI;
c.OQ = parseFloat("3.402823466e+38F");
c.X5 = parseFloat("1.175494351e-38F");
c.iS = c.PI / 180;
c.HG = 180 / c.PI;
c.cA = 4294967295;
c.tP = function(a, b, d) {
    if ("object" == typeof d && "undefined" != typeof d.x && "undefined" != typeof d.y) {
        var e = d[a];
        d[a] = d[b];
        d[b] = e
    } else
        c.log(c.e.tP)
};
c.Gfa = function(a, b, d) {
    return a + (b - a) * d
};
c.zb = function() {
    return 16777215 * Math.random()
};
c.w2 = function() {
    return 2 * (Math.random() - 0.5)
};
c.Tga = Math.random;
c.Vf = function(a) {
    return a * c.iS
};
c.CF = function(a) {
    return a * c.HG
};
c.nO = function(a) {
    c.log(c.e.nO);
    return a * c.HG
};
c.rq = Number.MAX_VALUE - 1;
c.gc = c.RR ? 1 : 770;
c.fc = 771;
c.Xs = function(a) {
    a.Fb && (a.Fb.Jc(), a.Fb.Ye())
};
c.S$ = function() {
};
c.c$ = function() {
};
c.Yf = function() {
    c.Xf += 1
};
c.du = 1.192092896E-7;
c.qb = c.az ? function() {
    return c.C.Zg
} : function() {
    return 1
};
c.n2 = function(a) {
    var b = c.qb();
    return N(a.x * b, a.y * b)
};
c.AF = function(a) {
    var b = c.qb();
    return N(a.x / b, a.y / b)
};
c.fC = function(a, b) {
    var d = c.qb();
    b.x = a.x / d;
    b.y = a.y / d
};
c.b4 = function(a) {
    var b = c.qb();
    return P(a.width * b, a.height * b)
};
c.nP = function(a) {
    var b = c.qb();
    return P(a.width / b, a.height / b)
};
c.sL = function(a, b) {
    var d = c.qb();
    b.width = a.width / d;
    b.height = a.height / d
};
c.Ij = c.az ? function(a) {
    var b = c.qb();
    return S(a.x / b, a.y / b, a.width / b, a.height / b)
} : function(a) {
    return a
};
c.lt = c.az ? function(a) {
    var b = c.qb();
    return S(a.x * b, a.y * b, a.width * b, a.height * b)
} : function(a) {
    return a
};
c.ONE = 1;
c.ZERO = 0;
c.SRC_ALPHA = 770;
c.SRC_ALPHA_SATURATE = 776;
c.SRC_COLOR = 768;
c.DST_ALPHA = 772;
c.DST_COLOR = 774;
c.ONE_MINUS_SRC_ALPHA = 771;
c.ONE_MINUS_SRC_COLOR = 769;
c.ONE_MINUS_DST_ALPHA = 773;
c.ONE_MINUS_DST_COLOR = 775;
c.ONE_MINUS_CONSTANT_ALPHA = 32772;
c.ONE_MINUS_CONSTANT_COLOR = 32770;
c.Go = function() {
    if (c.$x == c.$) {
        var a = c.k.getError();
        a && c.log(CC.wb.Go, a)
    }
};
c.P5 = 0;
c.N5 = 1;
c.Q5 = 2;
c.O5 = 3;
c.M5 = 2;
c.B7 = 0;
c.Md = 1;
c.Au = 2;
c.ln = 4;
c.yl = c.Md | c.Au | c.ln;
c.c6 = 0;
c.pb = 0;
c.we = 1;
c.ud = 2;
c.C7 = 3;
c.fA = 0;
c.eA = 1;
c.Mq = 2;
c.jA = 3;
c.iA = 4;
c.dA = 5;
c.gA = 6;
c.hA = 7;
c.y7 = 8;
c.Qi = "ShaderPositionTextureColor";
c.qu = "ShaderPositionTextureColorAlphaTest";
c.pu = "ShaderPositionColor";
c.vq = "ShaderPositionTexture";
c.Hz = "ShaderPositionTexture_uColor";
c.Gz = "ShaderPositionTextureA8Color";
c.Iz = "ShaderPosition_uColor";
c.AH = "ShaderPositionLengthTextureColor";
c.ZT = "CC_PMatrix";
c.XT = "CC_MVMatrix";
c.YT = "CC_MVPMatrix";
c.cU = "CC_Time";
c.bU = "CC_SinTime";
c.WT = "CC_CosTime";
c.$T = "CC_Random01";
c.aU = "CC_Texture0";
c.tI = "CC_alpha_value";
c.Hp = "a_color";
c.kl = "a_position";
c.Um = "a_texCoord";
c.aR = 32;
c.CG = 3233828865;
c.Bu = 3233828866;
c.wR = 8801;
c.kS = 8802;
c.tQ = 8803;
c = c || {};
c.B = c.B || {};
c.B.nA = function() {
    c.color = function(a, d, e, f, g, h) {
        return void 0 === a ? new c.wf(0, 0, 0, 255, g, h) : "string" === typeof a ? (a = c.qN(a), new c.wf(a.r, a.g, a.b, a.a)) : "object" === typeof a ? new c.wf(a.r, a.g, a.b, a.a, a.Ew, a.offset) : new c.wf(a, d, e, f, g, h)
    };
    c.wf = function(a, d, e, f, g, h) {
        this.Vc = g || new ArrayBuffer(c.wf.BYTES_PER_ELEMENT);
        this.ka = h || 0;
        g = this.Vc;
        h = this.ka;
        var k = Uint8Array.BYTES_PER_ELEMENT;
        this.tC = new Uint8Array(g, h, 1);
        this.mB = new Uint8Array(g, h + k, 1);
        this.DA = new Uint8Array(g, h + 2 * k, 1);
        this.wA = new Uint8Array(g, h + 3 * 
        k, 1);
        this.tC[0] = a || 0;
        this.mB[0] = d || 0;
        this.DA[0] = e || 0;
        this.wA[0] = f || 255;
        void 0 === f && (this.qs = !0)
    };
    c.wf.BYTES_PER_ELEMENT = 4;
    var a = c.wf.prototype;
    a.SV = function() {
        return this.tC[0]
    };
    a.HX = function(a) {
        this.tC[0] = 0 > a ? 0 : a
    };
    a.HV = function() {
        return this.mB[0]
    };
    a.CX = function(a) {
        this.mB[0] = 0 > a ? 0 : a
    };
    a.zV = function() {
        return this.DA[0]
    };
    a.tX = function(a) {
        this.DA[0] = 0 > a ? 0 : a
    };
    a.vV = function() {
        return this.wA[0]
    };
    a.sX = function(a) {
        this.wA[0] = 0 > a ? 0 : a
    };
    c.f(a, "r", a.SV, a.HX);
    c.f(a, "g", a.HV, a.CX);
    c.f(a, "b", a.zV, a.tX);
    c.f(a, "a", 
    a.vV, a.sX);
    c.Zb = function(a, d, e, f) {
        this.Vc = e || new ArrayBuffer(c.Zb.BYTES_PER_ELEMENT);
        this.ka = f || 0;
        this.im = new Float32Array(this.Vc, this.ka, 1);
        this.jm = new Float32Array(this.Vc, this.ka + 4, 1);
        this.im[0] = a || 0;
        this.jm[0] = d || 0
    };
    c.Zb.BYTES_PER_ELEMENT = 8;
    Object.defineProperties(c.Zb.prototype, {x: {get: function() {
                return this.im[0]
            },set: function(a) {
                this.im[0] = a
            },enumerable: !0},y: {get: function() {
                return this.jm[0]
            },set: function(a) {
                this.jm[0] = a
            },enumerable: !0}});
    c.sc = function(a, d, e, f, g) {
        this.Vc = f || new ArrayBuffer(c.sc.BYTES_PER_ELEMENT);
        this.ka = g || 0;
        f = this.Vc;
        g = this.ka;
        this.im = new Float32Array(f, g, 1);
        this.im[0] = a || 0;
        this.jm = new Float32Array(f, g + Float32Array.BYTES_PER_ELEMENT, 1);
        this.jm[0] = d || 0;
        this.MD = new Float32Array(f, g + 2 * Float32Array.BYTES_PER_ELEMENT, 1);
        this.MD[0] = e || 0
    };
    c.sc.BYTES_PER_ELEMENT = 12;
    Object.defineProperties(c.sc.prototype, {x: {get: function() {
                return this.im[0]
            },set: function(a) {
                this.im[0] = a
            },enumerable: !0},y: {get: function() {
                return this.jm[0]
            },set: function(a) {
                this.jm[0] = a
            },enumerable: !0},z: {get: function() {
                return this.MD[0]
            },
            set: function(a) {
                this.MD[0] = a
            },enumerable: !0}});
    c.Zj = function(a, d, e, f) {
        this.Vc = e || new ArrayBuffer(c.Zj.BYTES_PER_ELEMENT);
        this.ka = f || 0;
        this.tD = new Float32Array(this.Vc, this.ka, 1);
        this.zD = new Float32Array(this.Vc, this.ka + 4, 1);
        this.tD[0] = a || 0;
        this.zD[0] = d || 0
    };
    c.Zj.BYTES_PER_ELEMENT = 8;
    Object.defineProperties(c.Zj.prototype, {ea: {get: function() {
                return this.tD[0]
            },set: function(a) {
                this.tD[0] = a
            },enumerable: !0},fa: {get: function() {
                return this.zD[0]
            },set: function(a) {
                this.zD[0] = a
            },enumerable: !0}});
    c.Bz = function(a, 
    d, e, f, g, h) {
        this.Vc = g || new ArrayBuffer(c.Bz.BYTES_PER_ELEMENT);
        this.ka = h || 0;
        g = this.Vc;
        h = c.Zb.BYTES_PER_ELEMENT;
        this.uo = a ? new c.Zb(a.x, a.y, g, 0) : new c.Zb(0, 0, g, 0);
        this.xo = d ? new c.Zb(d.x, d.y, g, h) : new c.Zb(0, 0, g, h);
        this.qn = e ? new c.Zb(e.x, e.y, g, 2 * h) : new c.Zb(0, 0, g, 2 * h);
        this.un = f ? new c.Zb(f.x, f.y, g, 3 * h) : new c.Zb(0, 0, g, 3 * h)
    };
    c.Bz.BYTES_PER_ELEMENT = 32;
    c.mu = function(a, d, e, f) {
        this.F = a || new c.sc(0, 0, 0);
        this.O = d || new c.sc(0, 0, 0);
        this.N = e || new c.sc(0, 0, 0);
        this.I = f || new c.sc(0, 0, 0)
    };
    Object.defineProperties(c.Bz.prototype, 
    {N: {get: function() {
                return this.uo
            },set: function(a) {
                this.uo.x = a.x;
                this.uo.y = a.y
            },enumerable: !0},I: {get: function() {
                return this.xo
            },set: function(a) {
                this.xo.x = a.x;
                this.xo.y = a.y
            },enumerable: !0},F: {get: function() {
                return this.qn
            },set: function(a) {
                this.qn.x = a.x;
                this.qn.y = a.y
            },enumerable: !0},O: {get: function() {
                return this.un
            },set: function(a) {
                this.un.x = a.x;
                this.un.y = a.y
            },enumerable: !0}});
    c.qg = function(a, d, e, f, g) {
        this.Vc = f || new ArrayBuffer(c.qg.BYTES_PER_ELEMENT);
        this.ka = g || 0;
        f = this.Vc;
        g = this.ka;
        var h = c.sc.BYTES_PER_ELEMENT;
        this.Sa = a ? new c.sc(a.x, a.y, a.z, f, g) : new c.sc(0, 0, 0, f, g);
        this.ar = d ? c.color(d.r, d.g, d.b, d.a, f, g + h) : c.color(0, 0, 0, 0, f, g + h);
        this.Sf = e ? new c.Zj(e.ea, e.fa, f, g + h + c.wf.BYTES_PER_ELEMENT) : new c.Zj(0, 0, f, g + h + c.wf.BYTES_PER_ELEMENT)
    };
    c.qg.BYTES_PER_ELEMENT = 24;
    Object.defineProperties(c.qg.prototype, {i: {get: function() {
                return this.Sa
            },set: function(a) {
                var d = this.Sa;
                d.x = a.x;
                d.y = a.y;
                d.z = a.z
            },enumerable: !0},t: {get: function() {
                return this.ar
            },set: function(a) {
                var d = this.ar;
                d.r = a.r;
                d.g = a.g;
                d.b = a.b;
                d.a = a.a
            },enumerable: !0},
        l: {get: function() {
                return this.Sf
            },set: function(a) {
                this.Sf.ea = a.ea;
                this.Sf.fa = a.fa
            },enumerable: !0}});
    c.Ab = function(a, d, e, f, g, h) {
        this.Vc = g || new ArrayBuffer(c.Ab.BYTES_PER_ELEMENT);
        this.ka = h || 0;
        g = this.Vc;
        h = this.ka;
        var k = c.qg.BYTES_PER_ELEMENT;
        this.uo = a ? new c.qg(a.i, a.t, a.l, g, h) : new c.qg(null, null, null, g, h);
        this.qn = d ? new c.qg(d.i, d.t, d.l, g, h + k) : new c.qg(null, null, null, g, h + k);
        this.xo = e ? new c.qg(e.i, e.t, e.l, g, h + 2 * k) : new c.qg(null, null, null, g, h + 2 * k);
        this.un = f ? new c.qg(f.i, f.t, f.l, g, h + 3 * k) : new c.qg(null, 
        null, null, g, h + 3 * k)
    };
    c.Ab.BYTES_PER_ELEMENT = 96;
    Object.defineProperties(c.Ab.prototype, {N: {get: function() {
                return this.uo
            },set: function(a) {
                var d = this.uo;
                d.i = a.i;
                d.t = a.t;
                d.l = a.l
            },enumerable: !0},F: {get: function() {
                return this.qn
            },set: function(a) {
                var d = this.qn;
                d.i = a.i;
                d.t = a.t;
                d.l = a.l
            },enumerable: !0},I: {get: function() {
                return this.xo
            },set: function(a) {
                var d = this.xo;
                d.i = a.i;
                d.t = a.t;
                d.l = a.l
            },enumerable: !0},O: {get: function() {
                return this.un
            },set: function(a) {
                var d = this.un;
                d.i = a.i;
                d.t = a.t;
                d.l = a.l
            },enumerable: !0},
        Ew: {get: function() {
                return this.Vc
            },enumerable: !0}});
    c.vI = function() {
        return new c.Ab
    };
    c.uI = function(a) {
        if (!a)
            return c.vI();
        var d = a.N, e = a.F, f = a.I;
        a = a.O;
        return {N: {i: {x: d.i.x,y: d.i.y,z: d.i.z},t: {r: d.t.r,g: d.t.g,b: d.t.b,a: d.t.a},l: {ea: d.l.ea,fa: d.l.fa}},F: {i: {x: e.i.x,y: e.i.y,z: e.i.z},t: {r: e.t.r,g: e.t.g,b: e.t.b,a: e.t.a},l: {ea: e.l.ea,fa: e.l.fa}},I: {i: {x: f.i.x,y: f.i.y,z: f.i.z},t: {r: f.t.r,g: f.t.g,b: f.t.b,a: f.t.a},l: {ea: f.l.ea,fa: f.l.fa}},O: {i: {x: a.i.x,y: a.i.y,z: a.i.z},t: {r: a.t.r,g: a.t.g,b: a.t.b,a: a.t.a},l: {ea: a.l.ea,
                    fa: a.l.fa}}}
    };
    c.A7 = function(a) {
        if (!a)
            return [];
        for (var d = [], e = 0; e < a.length; e++)
            d.push(c.uI(a[e]));
        return d
    };
    c.td = function(a, d, e, f, g) {
        this.Vc = f || new ArrayBuffer(c.td.BYTES_PER_ELEMENT);
        this.ka = g || 0;
        f = this.Vc;
        g = this.ka;
        var h = c.Zb.BYTES_PER_ELEMENT;
        this.Sa = a ? new c.Zb(a.x, a.y, f, g) : new c.Zb(0, 0, f, g);
        this.ar = d ? c.color(d.r, d.g, d.b, d.a, f, g + h) : c.color(0, 0, 0, 0, f, g + h);
        this.Sf = e ? new c.Zj(e.ea, e.fa, f, g + h + c.wf.BYTES_PER_ELEMENT) : new c.Zj(0, 0, f, g + h + c.wf.BYTES_PER_ELEMENT)
    };
    c.td.BYTES_PER_ELEMENT = 20;
    Object.defineProperties(c.td.prototype, 
    {i: {get: function() {
                return this.Sa
            },set: function(a) {
                this.Sa.x = a.x;
                this.Sa.y = a.y
            },enumerable: !0},t: {get: function() {
                return this.ar
            },set: function(a) {
                var d = this.ar;
                d.r = a.r;
                d.g = a.g;
                d.b = a.b;
                d.a = a.a
            },enumerable: !0},l: {get: function() {
                return this.Sf
            },set: function(a) {
                this.Sf.ea = a.ea;
                this.Sf.fa = a.fa
            },enumerable: !0}});
    c.Yb = function(a, d, e, f, g) {
        this.Vc = f || new ArrayBuffer(c.Yb.BYTES_PER_ELEMENT);
        this.ka = g || 0;
        f = this.Vc;
        g = this.ka;
        var h = c.td.BYTES_PER_ELEMENT;
        this.EI = a ? new c.td(a.i, a.t, a.l, f, g) : new c.td(null, null, null, 
        f, g);
        this.MI = d ? new c.td(d.i, d.t, d.l, f, g + h) : new c.td(null, null, null, f, g + h);
        this.RI = e ? new c.td(e.i, e.t, e.l, f, g + 2 * h) : new c.td(null, null, null, f, g + 2 * h)
    };
    c.Yb.BYTES_PER_ELEMENT = 60;
    Object.defineProperties(c.Yb.prototype, {a: {get: function() {
                return this.EI
            },set: function(a) {
                var d = this.EI;
                d.i = a.i;
                d.t = a.t;
                d.l = a.l
            },enumerable: !0},b: {get: function() {
                return this.MI
            },set: function(a) {
                var d = this.MI;
                d.i = a.i;
                d.t = a.t;
                d.l = a.l
            },enumerable: !0},D: {get: function() {
                return this.RI
            },set: function(a) {
                var d = this.RI;
                d.i = a.i;
                d.t = a.t;
                d.l = a.l
            },enumerable: !0}})
};
c.B.tz = function() {
    var a = c.color;
    a.cW = function() {
        return a(255, 255, 255)
    };
    a.dW = function() {
        return a(255, 255, 0)
    };
    a.BV = function() {
        return a(0, 0, 255)
    };
    a.JV = function() {
        return a(0, 255, 0)
    };
    a.TV = function() {
        return a(255, 0, 0)
    };
    a.OV = function() {
        return a(255, 0, 255)
    };
    a.AV = function() {
        return a(0, 0, 0)
    };
    a.RV = function() {
        return a(255, 127, 0)
    };
    a.IV = function() {
        return a(166, 166, 166)
    };
    c.f(a, "WHITE", a.cW);
    c.f(a, "YELLOW", a.dW);
    c.f(a, "BLUE", a.BV);
    c.f(a, "GREEN", a.JV);
    c.f(a, "RED", a.TV);
    c.f(a, "MAGENTA", a.OV);
    c.f(a, "BLACK", a.AV);
    c.f(a, 
    "ORANGE", a.RV);
    c.f(a, "GRAY", a.IV)
};
c.wf = function(a, b, d, e) {
    this.r = a || 0;
    this.g = b || 0;
    this.b = d || 0;
    this.a = e || 255
};
c.color = function(a, b, d, e) {
    return void 0 === a ? {r: 0,g: 0,b: 0,a: 255} : "string" === typeof a ? c.qN(a) : "object" === typeof a ? {r: a.r,g: a.g,b: a.b,a: a.a || 255} : {r: a,g: b,b: d,a: e || 255}
};
c.N9 = function(a, b) {
    return a.r === b.r && a.g === b.g && a.b === b.b
};
c.OP = function() {
    this.timestamp = this.z = this.y = this.x = 0
};
c.Zb = function(a, b) {
    this.x = a || 0;
    this.y = b || 0
};
c.sc = function(a, b, d) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = d || 0
};
c.Zj = function(a, b) {
    this.ea = a || 0;
    this.fa = b || 0
};
c.Qj = function(a, b) {
    this.src = a;
    this.T = b
};
c.y9 = function() {
    return new c.Qj(c.ONE, c.ZERO)
};
c.qN = function(a) {
    a = a.replace(/^#?/, "0x");
    a = parseInt(a);
    return c.color(a >> 16, (a >> 8) % 256, a % 256)
};
c.O9 = function(a) {
    var b = a.r.toString(16), d = a.g.toString(16), e = a.b.toString(16);
    return "#" + (16 > a.r ? "0" + b : b) + (16 > a.g ? "0" + d : d) + (16 > a.b ? "0" + e : e)
};
c.ru = 0;
c.Aq = 1;
c.JH = 2;
c.Nq = 0;
c.fU = 1;
c.wI = 2;
c.F7 = c.la.extend({co: null,ks: null,vA: 0,ctor: function() {
        this.co = {};
        this.ks = {};
        this.vA = 2 << (0 | 10 * Math.random())
    },qU: function() {
        this.vA++;
        return "key_" + this.vA
    },Ria: function(a, b) {
        if (null != b) {
            var d = this.qU();
            this.co[d] = b;
            this.ks[d] = a
        }
    },W1: function(a) {
        if (null == a)
            return null;
        var b = this.co, d;
        for (d in b)
            if (b[d] === a)
                return this.ks[d];
        return null
    },Gka: function(a) {
        return this.W1(a)
    },G2: function(a) {
        if (null != a) {
            var b = this.co, d;
            for (d in b)
                if (b[d] === a) {
                    delete this.ks[d];
                    delete b[d];
                    break
                }
        }
    },rha: function(a) {
        if (null != 
        a)
            for (var b = 0; b < a.length; b++)
                this.G2(a[b])
    },LY: function() {
        var a = [], b = this.co, d;
        for (d in b)
            a.push(b[d]);
        return a
    },lha: function() {
        this.co = {};
        this.ks = {}
    },count: function() {
        return this.LY().length
    }});
c.PG = function() {
    this.fontName = "Arial";
    this.fontSize = 12;
    this.textAlign = c.Aq;
    this.verticalAlign = c.Nq;
    this.fillStyle = c.color(255, 255, 255, 255);
    this.boundingHeight = this.boundingWidth = 0;
    this.jG = !1;
    this.strokeStyle = c.color(255, 255, 255, 255);
    this.lineWidth = 1;
    this.mP = !1;
    this.shadowBlur = this.shadowOffsetY = this.shadowOffsetX = 0;
    this.shadowOpacity = 1
};
c.A === c.$ && (c.assert("function" === typeof c.B.nA, c.e.Mc, "CCTypesWebGL.js"), c.B.nA(), delete c.B.nA);
c.assert("function" === typeof c.B.tz, c.e.Mc, "CCTypesPropertyDefine.js");
c.B.tz();
delete c.B.tz;
c.u7 = [];
c.v7 = {};
c.Oy = c.la.extend({Z7: null,ge: null,Fn: null,Ck: null,pe: null,si: null,BC: !1,CA: !0,Dl: 1,GD: "",yC: null,pa: 1,BK: 1,Ra: 1,CK: 1,Vn: 0,SB: 5,lh: null,$K: null,dL: null,cL: null,aL: null,bL: null,xr: !1,U7: !1,V8: null,aK: null,bK: null,P8: !1,SA: null,vk: null,lB: 1,Gu: !1,hK: !0,ctor: function() {
        var a = document, b = c.Rj, d = c.mg;
        this.vk = c.pm.parentNode === a.body ? a.documentElement : c.pm.parentNode;
        this.ge = P(0, 0);
        this.BB();
        var a = c.Xa.width, e = c.Xa.height;
        this.Fn = P(a, e);
        this.Ck = P(a, e);
        this.pe = S(0, 0, a, e);
        this.si = S(0, 0, a, e);
        this.SA = {left: 0,
            top: 0};
        this.GD = "Cocos2dHTML5";
        a = c.Lb;
        this.ZZ(a.uF == a.cH || a.uF == a.dH);
        c.Gp && c.Gp.M(this.si);
        this.$K = new c.af(b.Lt, d.Nt);
        this.dL = new c.af(b.fS, d.SHOW_ALL);
        this.cL = new c.af(b.Lt, d.jz);
        this.aL = new c.af(b.Lt, d.Ry);
        this.bL = new c.af(b.Lt, d.Sy);
        this.aK = c.Xa;
        this.bK = c.k
    },zC: function() {
        var a = this.Ck.width, b = this.Ck.height;
        this.yC && (this.BB(), this.yC.call());
        0 < a && this.OF(a, b, this.lh)
    },N2: function(a) {
        a ? this.Gu || (this.Gu = !0, a = this.zC.bind(this), c.Ia(window, "resize", a, !1)) : this.Gu && (this.Gu = !0, a = this.zC.bind(this), 
        window.removeEventListener("resize", a, !1))
    },ija: function(a) {
        if ("function" == typeof a || null == a)
            this.yC = a
    },BB: function() {
        var a = this.ge;
        a.width = this.vk.clientWidth;
        a.height = this.vk.clientHeight
    },G7: function() {
        var a = this.Ck.width, b = this.Ck.height;
        0 < a && this.OF(a, b, this.lh)
    },$X: function() {
        if (this.hK) {
            var a = {"user-scalable": "no","maximum-scale": "1.0","initial-scale": "1.0"}, b = document.getElementsByName("viewport"), d;
            0 == b.length ? (b = c.Kb("meta"), b.name = "viewport", b.content = "", document.head.appendChild(b)) : b = 
            b[0];
            if (c.Lb.Aj && c.Lb.nm == c.Lb.Jp)
                b.content = "initial-scale:1";
            else {
                d = b.content;
                for (var e in a)
                    RegExp(e).test(d) || (d += ("" == d ? "" : ",") + e + "\x3d" + a[e]);
                b.content = d
            }
        }
    },jL: function() {
        var a = c.qb();
        this.Ra = this.pa = a
    },XK: function() {
        this.pa = this.BK;
        this.Ra = this.CK
    },H7: function() {
    },V0: function() {
        this.xr = !0
    },i9: function(a) {
        this.hK = a
    },ZZ: function(a) {
        this.BC = a ? !0 : !1
    },Gda: function() {
        return this.BC
    },R$: function(a) {
        this.CA = a ? !0 : !1
    },sda: function() {
        return this.CA
    },end: function() {
    },Dda: function() {
        return null != this.aK && 
        null != this.bK
    },wia: function(a) {
        this.lB = a;
        c.C.Om(c.C.mi)
    },jka: function() {
    },Bia: function() {
    },iia: function(a, b) {
        this.SA = {left: a,top: b}
    },Naa: function() {
        return this.SA
    },mba: function() {
        return P(this.ge.width, this.ge.height)
    },via: function(a, b) {
        this.ge.width = a;
        this.ge.height = b;
        this.vk.style.width = a + "px";
        this.vk.style.height = b + "px";
        this.zC();
        c.C.Om(c.C.mi)
    },I9: function() {
    },Is: function() {
        return P(this.si.width, this.si.height)
    },OE: function() {
        return N(this.si.x, this.si.y)
    },B9: function() {
        return !0
    },lca: function() {
        return this.lh
    },
    E3: function(a) {
        if (a instanceof c.af)
            this.lh = a;
        else {
            var b = c.af;
            a === b.Nt && (this.lh = this.$K);
            a === b.SHOW_ALL && (this.lh = this.dL);
            a === b.jz && (this.lh = this.cL);
            a === b.Ry && (this.lh = this.aL);
            a === b.Sy && (this.lh = this.bL)
        }
    },OF: function(a, b, d) {
        if (isNaN(a) || 0 == a || isNaN(b) || 0 == b)
            c.log(c.e.DQ);
        else {
            this.E3(d);
            var e = this.lh;
            if (e) {
                e.Jm(this);
                var f = this.ge.width, g = this.ge.height;
                c.Lb.Aj && this.$X(this.ge.width, this.ge.height);
                this.BB();
                if (d != this.lh || a != this.Ck.width || b != this.Ck.height || f != this.ge.width || g != this.ge.height)
                    this.Fn = 
                    P(a, b), this.Ck = P(a, b), a = e.apply(this, this.Fn), a.scale && 2 == a.scale.length && (this.pa = a.scale[0], this.Ra = a.scale[1]), a.viewport && (a = this.pe = a.viewport, b = this.si, b.width = c.Xa.width / this.pa, b.height = c.Xa.height / this.Ra, b.x = -a.x / this.pa, b.y = -a.y / this.Ra), a = c.C, c.Et.width = a.K.width = this.si.width, c.Et.height = a.K.height = this.si.height, e.Im(this), c.A == c.$ && (a.Cn(), a.QO()), this.BK = this.pa, this.CK = this.Ra, c.uQ && c.uQ.E8(), c.Gp && c.Gp.M(this.si)
            } else
                c.log(c.e.EQ)
        }
    },BE: function() {
        return P(this.Fn.width, this.Fn.height)
    },
    Y3: function(a, b, d, e) {
        var f = this.lB, g = this.pa, h = this.Ra;
        c.k.viewport(a * g * f + this.pe.x * f, b * h * f + this.pe.y * f, d * g * f, e * h * f)
    },kja: function(a, b, d, e) {
        var f = this.lB, g = this.pa, h = this.Ra;
        c.k.scissor(a * g * f + this.pe.x * f, b * h * f + this.pe.y * f, d * g * f, e * h * f)
    },Ida: function() {
        var a = c.k;
        return a.isEnabled(a.SCISSOR_TEST)
    },qca: function() {
        var a = c.k, b = this.pa, d = this.Ra, a = a.getParameter(a.SCISSOR_BOX);
        return S((a[0] - this.pe.x) / b, (a[1] - this.pe.y) / d, a[2] / b, a[3] / d)
    },Uja: function(a) {
        null != a && 0 < a.length && (this.GD = a)
    },Yca: function() {
        return this.GD
    },
    Zca: function() {
        return this.pe
    },aN: function() {
        return this.pa
    },bN: function() {
        return this.Ra
    },Vaa: function() {
        return this.Dl
    },hE: function(a, b, d) {
        return {x: this.Dl * (a - d.left),y: this.Dl * (d.top + d.height - b)}
    },aV: function(a, b) {
        var d = this.pe;
        a.x = (this.Dl * (a.x - b.left) - d.x) / this.pa;
        a.y = (this.Dl * (b.top + b.height - a.y) - d.y) / this.Ra
    },Zu: function(a) {
        for (var b = this.pe, d = this.pa, e = this.Ra, f, g, h, k = 0; k < a.length; k++)
            f = a[k], g = f.zd, h = f.li, f.SC((g.x - b.x) / d, (g.y - b.y) / e), f.ko((h.x - b.x) / d, (h.y - b.y) / e)
    }});
c.Oy.sB = function() {
    this.zv || (this.zv = this.zv || new c.Oy, this.zv.V0());
    return this.zv
};
c.Rj = c.la.extend({Jm: function() {
    },apply: function() {
    },Im: function() {
    },WC: function(a, b, d) {
        var e = a.vk;
        c.view.CA && c.Lb.Aj && e == document.documentElement && c.screen.$Y(e);
        var e = c.Xa, f = c.pm;
        f.style.width = e.style.width = b + "px";
        f.style.height = e.style.height = d + "px";
        f = a.Dl = 1;
        a.BC && (f = a.Dl = window.devicePixelRatio || 1);
        e.width = b * f;
        e.height = d * f;
        a = document.body;
        var g;
        a && (g = a.style) && (g.paddingTop = g.paddingTop || "0px", g.paddingRight = g.paddingRight || "0px", g.paddingBottom = g.paddingBottom || "0px", g.paddingLeft = g.paddingLeft || 
        "0px", g.borderTop = g.borderTop || "0px", g.borderRight = g.borderRight || "0px", g.borderBottom = g.borderBottom || "0px", g.borderLeft = g.borderLeft || "0px", g.marginTop = g.marginTop || "0px", g.marginRight = g.marginRight || "0px", g.marginBottom = g.marginBottom || "0px", g.marginLeft = g.marginLeft || "0px")
    },OJ: function() {
        document.body.insertBefore(c.pm, document.body.firstChild);
        var a = document.body.style;
        a.width = window.innerWidth + "px";
        a.height = window.innerHeight + "px";
        a.overflow = "hidden";
        a = c.pm.style;
        a.position = "fixed";
        a.left = 
        a.top = "0px";
        document.body.scrollTop = 0
    }});
c.mg = c.la.extend({AC: {scale: [1, 1],viewport: null},Xq: function(a, b, d, e, f, g) {
        2 > Math.abs(a - d) && (d = a);
        2 > Math.abs(b - e) && (e = b);
        a = S(Math.round((a - d) / 2), Math.round((b - e) / 2), d, e);
        c.A == c.Da && c.k.translate(a.x, a.y + e);
        this.AC.scale = [f, g];
        this.AC.viewport = a;
        return this.AC
    },Jm: function() {
    },apply: function() {
        return {scale: [1, 1]}
    },Im: function() {
    }});
(function() {
    var a = c.Rj.extend({apply: function(a) {
            this.WC(a, a.ge.width, a.ge.height)
        }}), b = c.Rj.extend({apply: function(a, b) {
            var d = a.ge.width, e = a.ge.height, f = c.pm.style, r = b.width, s = b.height, u = d / r, t = e / s, v, w;
            u < t ? (v = d, w = s * u) : (v = r * t, w = e);
            r = Math.round((d - v) / 2);
            w = Math.round((e - w) / 2);
            this.WC(a, d - 2 * r, e - 2 * w);
            f.marginLeft = r + "px";
            f.marginRight = r + "px";
            f.marginTop = w + "px";
            f.marginBottom = w + "px"
        }});
    a.extend({Jm: function(a) {
            this._super(a);
            a.vk = document.documentElement
        },apply: function(a) {
            this._super(a);
            this.OJ()
        }});
    b.extend({Jm: function(a) {
            this._super(a);
            a.vk = document.documentElement
        },apply: function(a, b) {
            this._super(a, b);
            this.OJ()
        }});
    var d = c.Rj.extend({apply: function(a) {
            this.WC(a, c.Xa.width, c.Xa.height)
        }});
    c.Rj.Lt = new a;
    c.Rj.fS = new b;
    c.Rj.L6 = new d;
    var a = c.mg.extend({apply: function(a, b) {
            var d = c.Xa.width, e = c.Xa.height;
            return this.Xq(d, e, d, e, d / b.width, e / b.height)
        }}), b = c.mg.extend({apply: function(a, b) {
            var d = c.Xa.width, e = c.Xa.height, f = b.width, r = b.height, s = d / f, u = e / r, t = 0, v, w;
            s < u ? (t = s, v = d, w = r * t) : (t = u, v = f * t, w = e);
            return this.Xq(d, e, v, w, t, t)
        }}), d = c.mg.extend({apply: function(a, 
        b) {
            var d = c.Xa.width, e = c.Xa.height, f = b.width, r = b.height, s = d / f, u = e / r, t, v, w;
            s < u ? (t = u, v = f * t, w = e) : (t = s, v = d, w = r * t);
            return this.Xq(d, e, v, w, t, t)
        }}), e = c.mg.extend({apply: function(a, b) {
            var d = c.Xa.width, e = c.Xa.height, f = e / b.height;
            return this.Xq(d, e, d, e, f, f)
        },Im: function(a) {
            c.C.K = a.Is()
        }}), f = c.mg.extend({apply: function(a, b) {
            var d = c.Xa.width, e = c.Xa.height, f = d / b.width;
            return this.Xq(d, e, d, e, f, f)
        },Im: function(a) {
            c.C.K = a.Is()
        }});
    c.mg.Nt = new a;
    c.mg.SHOW_ALL = new b;
    c.mg.jz = new d;
    c.mg.Ry = new e;
    c.mg.Sy = new f
})();
c.af = c.la.extend({Xu: null,Yu: null,ctor: function(a, b) {
        this.d3(a);
        this.e3(b)
    },Jm: function(a) {
        this.Xu.Jm(a);
        this.Yu.Jm(a)
    },apply: function(a, b) {
        this.Xu.apply(a, b);
        return this.Yu.apply(a, b)
    },Im: function(a) {
        this.Xu.Im(a);
        this.Yu.Im(a)
    },d3: function(a) {
        a instanceof c.Rj && (this.Xu = a)
    },e3: function(a) {
        a instanceof c.mg && (this.Yu = a)
    }});
c.af.Nt = 0;
c.af.jz = 1;
c.af.SHOW_ALL = 2;
c.af.Ry = 3;
c.af.Sy = 4;
c.af.dU = 5;
c.screen = {pw: !1,lC: null,qD: "",uk: null,oV: [["requestFullscreen", "exitFullscreen", "fullscreenchange", "fullscreenEnabled", "fullscreenElement"], ["requestFullScreen", "exitFullScreen", "fullScreenchange", "fullScreenEnabled", "fullScreenElement"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitIsFullScreen", "webkitCurrentFullScreenElement"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozFullScreen", "mozFullScreenElement"], ["msRequestFullscreen", 
            "msExitFullscreen", "MSFullscreenChange", "msFullscreenEnabled", "msFullscreenElement"]],M: function() {
        this.uk = {};
        var a, b, d = this.oV, e;
        a = 0;
        for (l = d.length; a < l; a++)
            if ((b = d[a]) && b[1] in document) {
                a = 0;
                for (e = b.length; a < e; a++)
                    this.uk[d[0][a]] = b[a];
                break
            }
        this.pw = void 0 != this.uk.requestFullscreen;
        this.qD = "ontouchstart" in window ? "touchstart" : "mousedown"
    },fullScreen: function() {
        return this.pw && document[this.uk.fullscreenEnabled]
    },yO: function(a, b) {
        if (this.pw) {
            a = a || document.documentElement;
            a[this.uk.requestFullscreen]();
            if (b) {
                var d = this.uk.qaa;
                this.lC && document.removeEventListener(d, this.lC);
                this.lC = b;
                c.Ia(document, d, b, !1)
            }
            return a[this.uk.requestFullscreen]()
        }
    },U$: function() {
        return this.pw ? document[this.uk.exitFullscreen]() : !0
    },$Y: function(a, b) {
        function d() {
            f.yO(a, b);
            e.removeEventListener(f.qD, d)
        }
        a = a || document.body;
        var e = c.Xa || a, f = this;
        this.yO(a, b);
        c.Ia(e, this.qD, d)
    }};
c.screen.M();
c.Gp = {xP: N(0, 0),yP: N(0, 0),top: N(0, 0),SD: N(0, 0),ZL: N(0, 0),bottom: N(0, 0),bE: N(0, 0),left: N(0, 0),right: N(0, 0),width: 0,height: 0,M: function(a) {
        var b = this.width = a.width, d = this.height = a.height, e = a.x;
        a = a.y;
        var f = a + d, g = e + b;
        this.xP.x = e;
        this.xP.y = f;
        this.yP.x = g;
        this.yP.y = f;
        this.top.x = e + b / 2;
        this.top.y = f;
        this.SD.x = e;
        this.SD.y = a;
        this.ZL.x = g;
        this.ZL.y = a;
        this.bottom.x = e + b / 2;
        this.bottom.y = a;
        this.bE.x = e + b / 2;
        this.bE.y = a + d / 2;
        this.left.x = e;
        this.left.y = a + d / 2;
        this.right.x = g;
        this.right.y = a + d / 2
    }};
c.TT = -90;
c.UT = 90;
c.VT = 180;
c.x7 = 0;
c.FN = {eo: !1,lK: !1,IK: N(0, 0),gX: N(0, 0),JK: [],mC: 0,Rk: [],rD: {},Vn: 0,SB: 5,Iu: !1,Ju: 1 / 30,GI: 1,zl: 0,xA: null,Hu: null,aW: function() {
        for (var a = this.Vn, b = 0; b < this.SB; b++) {
            if (!(a & 1))
                return this.Vn |= 1 << b, b;
            a >>= 1
        }
        return -1
    },mX: function(a) {
        0 > a || a >= this.SB || (a = ~(1 << a), this.Vn &= a)
    },xk: null,RE: function(a) {
        for (var b, d, e, f = [], g = this.rD, h = 0, k = a.length; h < k; h++)
            b = a[h], e = b.eh, d = g[e], null == d && (d = this.aW(), -1 == d ? c.log(c.e.W0, d) : (b = this.Rk[d] = b, g[e] = d, f.push(b)));
        0 < f.length && (this.xk.Zu(f), a = new c.ng(f), a.qk = c.ng.Xm.Cy, c.ta.dispatchEvent(a))
    },
    SE: function(a) {
        for (var b, d, e = [], f = this.Rk, g = 0, h = a.length; g < h; g++)
            b = a[g], d = b.eh, d = this.rD[d], null != d && f[d] && (f[d].SC(b.zd), f[d].ko(b.li), e.push(f[d]));
        0 < e.length && (this.xk.Zu(e), a = new c.ng(e), a.qk = c.ng.Xm.fz, c.ta.dispatchEvent(a))
    },dx: function(a) {
        a = this.cN(a);
        0 < a.length && (this.xk.Zu(a), a = new c.ng(a), a.qk = c.ng.Xm.Py, c.ta.dispatchEvent(a))
    },oN: function(a) {
        a = this.cN(a);
        0 < a.length && (this.xk.Zu(a), a = new c.ng(a), a.qk = c.ng.Xm.Hy, c.ta.dispatchEvent(a))
    },cN: function(a) {
        for (var b, d, e, f = [], g = this.Rk, h = this.rD, 
        k = 0, m = a.length; k < m; k++)
            b = a[k], e = b.eh, d = h[e], null != d && g[d] && (g[d].SC(b.zd), g[d].ko(b.li), f.push(g[d]), this.mX(d), delete h[e]);
        return f
    },Dh: function(a) {
        var b = document.documentElement, d = window, e = null, e = "function" === typeof a.getBoundingClientRect ? a.getBoundingClientRect() : a instanceof HTMLCanvasElement ? {left: 0,top: 0,width: a.width,height: a.height} : {left: 0,top: 0,width: parseInt(a.style.width),height: parseInt(a.style.height)};
        return {left: e.left + d.pageXOffset - b.clientLeft,top: e.top + d.pageYOffset - b.clientTop,
            width: e.width,height: e.height}
    },d0: function(a) {
        for (var b = null, d = this.JK, e = a.eh, f = d.length - 1; 0 <= f; f--)
            if (d[f].eh == e) {
                b = d[f];
                break
            }
        b || (b = a);
        return b
    },D3: function(a) {
        for (var b = !1, d = this.JK, e = a.eh, f = d.length - 1; 0 <= f; f--)
            if (d[f].eh == e) {
                d[f] = a;
                b = !0;
                break
            }
        b || (50 >= d.length ? d.push(a) : (d[this.mC] = a, this.mC = (this.mC + 1) % 50))
    },Hs: function(a, b, d) {
        var e = this.IK;
        a = this.xk.hE(a, b, d);
        b = new c.$z(a.x, a.y);
        b.ko(e.x, e.y);
        e.x = a.x;
        e.y = a.y;
        return b
    },To: function(a, b, d) {
        var e = this.gX;
        this.xk.aV(a, b);
        b = new c.Lc(d);
        b.t3(a.x, a.y);
        b.GX(e.x, e.y);
        e.x = a.x;
        e.y = a.y;
        return b
    },Uo: function(a, b) {
        if (null != a.pageX)
            return {x: a.pageX,y: a.pageY};
        b.left -= document.body.scrollLeft;
        b.top -= document.body.scrollTop;
        return {x: a.clientX,y: a.clientY}
    },ax: function(a, b) {
        for (var d = [], e = this.xk, f, g, h = this.IK, k = a.changedTouches.length, m = 0; m < k; m++)
            if (f = a.changedTouches[m]) {
                var p;
                p = c.Lb.Jp === c.Lb.nm ? e.hE(f.pageX, f.pageY, b) : e.hE(f.clientX, f.clientY, b);
                null != f.identifier ? (f = new c.$z(p.x, p.y, f.identifier), g = this.d0(f).Wk(), f.ko(g.x, g.y), this.D3(f)) : (f = new c.$z(p.x, 
                p.y), f.ko(h.x, h.y));
                h.x = p.x;
                h.y = p.y;
                d.push(f)
            }
        return d
    },z2: function(a) {
        if (!this.lK) {
            var b = this.xk = c.view, d = this, e = "touches" in c.Lb.$D;
            "mouse" in c.Lb.$D && (c.Ia(window, "mousedown", function() {
                d.eo = !0
            }, !1), c.Ia(window, "mouseup", function(b) {
                var f = d.eo;
                d.eo = !1;
                if (f) {
                    var f = d.Dh(a), g = d.Uo(b, f);
                    c.qO(new c.wH(f.left, f.top, f.width, f.height), g) || (e || d.dx([d.Hs(g.x, g.y, f)]), f = d.To(g, f, c.Lc.kA), f.Nm(b.button), c.ta.dispatchEvent(f))
                }
            }, !1), c.Ia(a, "mousedown", function(b) {
                d.eo = !0;
                var f = d.Dh(a), g = d.Uo(b, f);
                e || d.RE([d.Hs(g.x, 
                    g.y, f)]);
                f = d.To(g, f, c.Lc.IG);
                f.Nm(b.button);
                c.ta.dispatchEvent(f);
                b.stopPropagation();
                b.preventDefault();
                a.focus()
            }, !1), c.Ia(a, "mouseup", function(b) {
                d.eo = !1;
                var f = d.Dh(a), g = d.Uo(b, f);
                e || d.dx([d.Hs(g.x, g.y, f)]);
                f = d.To(g, f, c.Lc.kA);
                f.Nm(b.button);
                c.ta.dispatchEvent(f);
                b.stopPropagation();
                b.preventDefault()
            }, !1), c.Ia(a, "mousemove", function(b) {
                var f = d.Dh(a), g = d.Uo(b, f);
                e || d.SE([d.Hs(g.x, g.y, f)]);
                f = d.To(g, f, c.Lc.XG);
                d.eo ? f.Nm(b.button) : f.Nm(null);
                c.ta.dispatchEvent(f);
                b.stopPropagation();
                b.preventDefault()
            }, 
            !1), c.Ia(a, "mousewheel", function(b) {
                var e = d.Dh(a), f = d.Uo(b, e), e = d.To(f, e, c.Lc.Fz);
                e.Nm(b.button);
                e.fP(0, b.wheelDelta);
                c.ta.dispatchEvent(e);
                b.stopPropagation();
                b.preventDefault()
            }, !1), c.Ia(a, "DOMMouseScroll", function(b) {
                var e = d.Dh(a), f = d.Uo(b, e), e = d.To(f, e, c.Lc.Fz);
                e.Nm(b.button);
                e.fP(0, -120 * b.detail);
                c.ta.dispatchEvent(e);
                b.stopPropagation();
                b.preventDefault()
            }, !1));
            if (window.navigator.msPointerEnabled) {
                var f = {MSPointerDown: d.RE,MSPointerMove: d.SE,MSPointerUp: d.dx,MSPointerCancel: d.oN}, g;
                for (g in f)
                    (function(b, 
                    e) {
                        c.Ia(a, b, function(b) {
                            var f = d.Dh(a);
                            f.left -= document.documentElement.scrollLeft;
                            f.top -= document.documentElement.scrollTop;
                            e.call(d, [d.Hs(b.clientX, b.clientY, f)]);
                            b.stopPropagation()
                        }, !1)
                    })(g, f[g])
            }
            e && (c.Ia(a, "touchstart", function(b) {
                if (b.changedTouches) {
                    var e = d.Dh(a);
                    e.left -= document.body.scrollLeft;
                    e.top -= document.body.scrollTop;
                    d.RE(d.ax(b, e));
                    b.stopPropagation();
                    b.preventDefault();
                    a.focus()
                }
            }, !1), c.Ia(a, "touchmove", function(b) {
                if (b.changedTouches) {
                    var e = d.Dh(a);
                    e.left -= document.body.scrollLeft;
                    e.top -= document.body.scrollTop;
                    d.SE(d.ax(b, e));
                    b.stopPropagation();
                    b.preventDefault()
                }
            }, !1), c.Ia(a, "touchend", function(b) {
                if (b.changedTouches) {
                    var e = d.Dh(a);
                    e.left -= document.body.scrollLeft;
                    e.top -= document.body.scrollTop;
                    d.dx(d.ax(b, e));
                    b.stopPropagation();
                    b.preventDefault()
                }
            }, !1), c.Ia(a, "touchcancel", function(e) {
                if (e.changedTouches) {
                    var f = d.Dh(a);
                    f.left -= document.body.scrollLeft;
                    f.top -= document.body.scrollTop;
                    b.oN(d.ax(e, f));
                    e.stopPropagation();
                    e.preventDefault()
                }
            }, !1));
            this.TK();
            this.SK();
            this.lK = 
            !0
        }
    },TK: function() {
    },SK: function() {
    },update: function(a) {
        this.zl > this.Ju && (this.zl -= this.Ju, c.ta.dispatchEvent(new c.JQ(this.xA)));
        this.zl += a
    }};
var n = c.FN;
n.Rha = function(a) {
    this.Iu !== a && (this.Iu = a, a = c.C.Xk(), this.Iu ? (this.zl = 0, a.KF(this)) : (this.zl = 0, a.Bt(this)))
};
n.Sha = function(a) {
    this.Ju !== a && (this.Ju = a)
};
n.TK = function() {
    c.Ia(c.Xa, "keydown", function(a) {
        c.ta.dispatchEvent(new c.MG(a.keyCode, !0));
        a.stopPropagation();
        a.preventDefault()
    }, !1);
    c.Ia(c.Xa, "keyup", function(a) {
        c.ta.dispatchEvent(new c.MG(a.keyCode, !1));
        a.stopPropagation();
        a.preventDefault()
    }, !1)
};
n.SK = function() {
    var a = window;
    this.xA = new c.OP;
    this.Hu = a.DeviceMotionEvent || a.DeviceOrientationEvent;
    c.Lb.nm == c.Lb.BG && (this.Hu = window.DeviceOrientationEvent);
    c.Ia(a, this.Hu == a.DeviceMotionEvent ? "devicemotion" : "deviceorientation", this.zZ.bind(this), !1)
};
n.zZ = function(a) {
    var b = window;
    if (this.Iu) {
        var d = this.xA;
        if (this.Hu == window.DeviceMotionEvent) {
            var e = a.accelerationIncludingGravity;
            d.x = this.GI * e.x * 0.1;
            d.y = this.GI * e.y * 0.1;
            d.z = 0.1 * e.z
        } else
            d.x = a.gamma / 90 * 0.981, d.y = 0.981 * -(a.beta / 90), d.z = a.alpha / 90 * 0.981;
        d.timestamp = a.timeStamp || Date.now();
        a = d.x;
        b.orientation === c.UT ? (d.x = -d.y, d.y = a) : b.orientation === c.TT ? (d.x = d.y, d.y = -a) : b.orientation === c.VT && (d.x = -d.x, d.y = -d.y)
    }
};
delete n;
c.k5 = function(a, b, d, e, f, g) {
    this.a = a;
    this.b = b;
    this.D = d;
    this.H = e;
    this.Ka = f;
    this.La = g
};
c.n5 = function(a, b, d, e, f, g) {
    return {a: a,b: b,D: d,H: e,Ka: f,La: g}
};
c.vH = function(a, b) {
    return {x: b.a * a.x + b.D * a.y + b.Ka,y: b.b * a.x + b.H * a.y + b.La}
};
c.gk = function(a, b, d) {
    return {x: d.a * a + d.D * b + d.Ka,y: d.b * a + d.H * b + d.La}
};
c.W6 = function(a, b) {
    return {width: b.a * a.width + b.D * a.height,height: b.b * a.width + b.H * a.height}
};
c.o5 = function() {
    return {a: 1,b: 0,D: 0,H: 1,Ka: 0,La: 0}
};
c.m5 = function() {
    return {a: 1,b: 0,D: 0,H: 1,Ka: 0,La: 0}
};
c.Cz = function(a, b) {
    var d = c.np(a), e = c.mp(a), f = c.jt(a), g = c.kt(a), h = c.gk(e, d, b), d = c.gk(f, d, b), e = c.gk(e, g, b), k = c.gk(f, g, b), f = Math.min(h.x, d.x, e.x, k.x), g = Math.max(h.x, d.x, e.x, k.x), m = Math.min(h.y, d.y, e.y, k.y), h = Math.max(h.y, d.y, e.y, k.y);
    return S(f, m, g - f, h - m)
};
c.oU = function(a, b) {
    var d = c.np(a), e = c.mp(a), f = c.jt(a), g = c.kt(a), h = c.gk(e, d, b), d = c.gk(f, d, b), e = c.gk(e, g, b), k = c.gk(f, g, b), f = Math.min(h.x, d.x, e.x, k.x), g = Math.max(h.x, d.x, e.x, k.x), m = Math.min(h.y, d.y, e.y, k.y), h = Math.max(h.y, d.y, e.y, k.y);
    a.x = f;
    a.y = m;
    a.width = g - f;
    a.height = h - m;
    return a
};
c.SP = function(a, b, d) {
    return {a: a.a,b: a.b,D: a.D,H: a.H,Ka: a.Ka + a.a * b + a.D * d,La: a.La + a.b * b + a.H * d}
};
c.q5 = function(a, b, d) {
    return {a: a.a * b,b: a.b * b,D: a.D * d,H: a.H * d,Ka: a.Ka,La: a.La}
};
c.p5 = function(a, b) {
    var d = Math.sin(b), e = Math.cos(b);
    return {a: a.a * e + a.D * d,b: a.b * e + a.H * d,D: a.D * e - a.a * d,H: a.H * e - a.b * d,Ka: a.Ka,La: a.La}
};
c.ll = function(a, b) {
    return {a: a.a * b.a + a.b * b.D,b: a.a * b.b + a.b * b.H,D: a.D * b.a + a.H * b.D,H: a.D * b.b + a.H * b.H,Ka: a.Ka * b.a + a.La * b.D + b.Ka,La: a.Ka * b.b + a.La * b.H + b.La}
};
c.l5 = function(a, b) {
    return a.a === b.a && a.b === b.b && a.D === b.D && a.H === b.H && a.Ka === b.Ka && a.La === b.La
};
c.vG = function(a) {
    var b = 1 / (a.a * a.H - a.b * a.D);
    return {a: b * a.H,b: -b * a.b,D: -b * a.D,H: b * a.a,Ka: b * (a.D * a.La - a.H * a.Ka),La: b * (a.b * a.Ka - a.a * a.La)}
};
c.hH = parseFloat("1.192092896e-07F");
c.wF = function(a) {
    return N(-a.x, -a.y)
};
c.Fj = function(a, b) {
    return N(a.x + b.x, a.y + b.y)
};
c.Gd = function(a, b) {
    return N(a.x - b.x, a.y - b.y)
};
c.Ci = function(a, b) {
    return N(a.x * b, a.y * b)
};
c.jO = function(a, b) {
    return c.Ci(c.Fj(a, b), 0.5)
};
c.jp = function(a, b) {
    return a.x * b.x + a.y * b.y
};
c.Y1 = function(a, b) {
    return a.x * b.y - a.y * b.x
};
c.Tx = function(a) {
    return N(-a.y, a.x)
};
c.xga = function(a) {
    return N(a.y, -a.x)
};
c.wga = function(a, b) {
    return c.Ci(b, c.jp(a, b) / c.jp(b, b))
};
c.yga = function(a, b) {
    return N(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x)
};
c.Bga = function(a, b) {
    return N(a.x * b.x + a.y * b.y, a.y * b.x - a.x * b.y)
};
c.hO = function(a) {
    return c.jp(a, a)
};
c.gO = function(a, b) {
    return c.hO(c.Gd(a, b))
};
c.cl = function(a) {
    return Math.sqrt(c.hO(a))
};
c.sga = function(a, b) {
    return c.cl(c.Gd(a, b))
};
c.Ig = function(a) {
    return c.Ci(a, 1 / c.cl(a))
};
c.tga = function(a) {
    return N(Math.cos(a), Math.sin(a))
};
c.c2 = function(a) {
    return Math.atan2(a.y, a.x)
};
c.Rc = function(a, b, d) {
    if (b > d) {
        var e = b;
        b = d;
        d = e
    }
    return a < b ? b : a < d ? a : d
};
c.fO = function(a) {
    var b = N(0, 0), d = N(1, 1);
    return N(c.Rc(a.x, b.x, d.x), c.Rc(a.y, b.y, d.y))
};
c.Z1 = function() {
    var a = c.C.K;
    return N(a.width, a.height)
};
c.rga = function(a, b) {
    return N(b(a.x), b(a.y))
};
c.iO = function(a, b, d) {
    return c.Fj(c.Ci(a, 1 - d), c.Ci(b, d))
};
c.uga = function(a, b, d) {
    return a.x - d <= b.x && b.x <= a.x + d && a.y - d <= b.y && b.y <= a.y + d ? !0 : !1
};
c.qga = function(a, b) {
    return N(a.x * b.x, a.y * b.y)
};
c.pga = function(a, b) {
    var d = c.Ig(a), e = c.Ig(b), d = Math.atan2(d.x * e.y - d.y * e.x, c.jp(d, e));
    return Math.abs(d) < c.hH ? 0 : d
};
c.oga = function(a, b) {
    var d = Math.acos(c.jp(c.Ig(a), c.Ig(b)));
    return Math.abs(d) < c.hH ? 0 : d
};
c.b2 = function(a, b, d) {
    a = c.Gd(a, b);
    var e = Math.cos(d);
    d = Math.sin(d);
    var f = a.x;
    a.x = f * e - a.y * d + b.x;
    a.y = f * d + a.y * e + b.y;
    return a
};
c.vF = function(a, b, d, e, f) {
    if (a.x == b.x && a.y == b.y || d.x == e.x && d.y == e.y)
        return !1;
    var g = b.x - a.x;
    b = b.y - a.y;
    var h = e.x - d.x;
    e = e.y - d.y;
    var k = a.x - d.x;
    a = a.y - d.y;
    d = e * g - h * b;
    f.x = h * a - e * k;
    f.y = g * a - b * k;
    if (0 == d)
        return 0 == f.x || 0 == f.y ? !0 : !1;
    f.x /= d;
    f.y /= d;
    return !0
};
c.Aga = function(a, b, d, e) {
    var f = N(0, 0);
    return c.vF(a, b, d, e, f) && 0 <= f.x && 1 >= f.x && 0 <= f.y && 1 >= f.y ? !0 : !1
};
c.vga = function(a, b, d, e) {
    var f = N(0, 0);
    return c.vF(a, b, d, e, f) ? (d = N(0, 0), d.x = a.x + f.x * (b.x - a.x), d.y = a.y + f.x * (b.y - a.y), d) : N(0, 0)
};
c.zga = function(a, b) {
    return null != a && null != b ? a.x == b.x && a.y == b.y : !1
};
c.Ux = function(a) {
    a.x = 0;
    a.y = 0
};
c.Gj = function(a, b) {
    a.x = b.x;
    a.y = b.y
};
c.kp = function(a, b) {
    a.x *= b;
    a.y *= b
};
c.kO = function(a, b) {
    a.x -= b.x;
    a.y -= b.y
};
c.Sx = function(a, b) {
    a.x += b.x;
    a.y += b.y
};
c.a2 = function(a) {
    c.kp(a, 1 / Math.sqrt(a.x * a.x + a.y * a.y))
};
c.qG = function(a, b, d, e, f) {
    f += e;
    if (!(1 >= f)) {
        b *= 0.5;
        for (var g, h = f - 1, k = e; k < f; k++) {
            g = 2 * k;
            var m = N(a[2 * k], a[2 * k + 1]), p;
            if (0 === k)
                p = c.Tx(c.Ig(c.Gd(m, N(a[2 * (k + 1)], a[2 * (k + 1) + 1]))));
            else if (k === h)
                p = c.Tx(c.Ig(c.Gd(N(a[2 * (k - 1)], a[2 * (k - 1) + 1]), m)));
            else {
                p = N(a[2 * (k - 1)], a[2 * (k - 1) + 1]);
                var r = N(a[2 * (k + 1)], a[2 * (k + 1) + 1]), s = c.Ig(c.Gd(r, m)), u = c.Ig(c.Gd(p, m)), t = Math.acos(c.jp(s, u));
                p = t < c.Vf(70) ? c.Tx(c.Ig(c.jO(s, u))) : t < c.Vf(170) ? c.Ig(c.jO(s, u)) : c.Tx(c.Ig(c.Gd(r, p)))
            }
            p = c.Ci(p, b);
            d[2 * g] = m.x + p.x;
            d[2 * g + 1] = m.y + p.y;
            d[2 * (g + 1)] = m.x - 
            p.x;
            d[2 * (g + 1) + 1] = m.y - p.y
        }
        for (k = 0 == e ? 0 : e - 1; k < h; k++)
            g = 2 * k, a = g + 2, b = new c.Zb(d[2 * g], d[2 * g + 1]), f = new c.Zb(d[2 * (g + 1)], d[2 * (g + 1) + 1]), g = new c.Zb(d[2 * a], d[2 * a]), e = new c.Zb(d[2 * (a + 1)], d[2 * (a + 1) + 1]), b = !c.M4(b.x, b.y, e.x, e.y, f.x, f.y, g.x, g.y), !b.Rs && (0 > b.value || 1 < b.value) && (b.Rs = !0), b.Rs && (d[2 * a] = e.x, d[2 * a + 1] = e.y, d[2 * (a + 1)] = g.x, d[2 * (a + 1) + 1] = g.y)
    }
};
c.M4 = function(a, b, d, e, f, g, h, k) {
    if (a == d && b == e || f == h && g == k)
        return {Rs: !1,value: 0};
    d -= a;
    e -= b;
    f -= a;
    g -= b;
    h -= a;
    k -= b;
    a = Math.sqrt(d * d + e * e);
    d /= a;
    e /= a;
    b = f * d + g * e;
    g = g * d - f * e;
    f = b;
    b = h * d + k * e;
    k = k * d - h * e;
    h = b;
    return g == k ? {Rs: !1,value: 0} : {Rs: !0,value: (h + (f - h) * k / (k - g)) / a}
};
c.Hka = function(a) {
    for (var b = 0, d = a.length; b < d; b++) {
        var e = a[(b + 1) % d];
        if (0 < c.Y1(c.Gd(e, a[b]), c.Gd(a[(b + 2) % d], e)))
            return !1
    }
    return !0
};
c.H5 = function(a, b) {
    b[2] = b[3] = b[6] = b[7] = b[8] = b[9] = b[11] = b[14] = 0;
    b[10] = b[15] = 1;
    b[0] = a.a;
    b[4] = a.D;
    b[12] = a.Ka;
    b[1] = a.b;
    b[5] = a.H;
    b[13] = a.La
};
c.b6 = function(a, b) {
    b.a = a[0];
    b.D = a[4];
    b.Ka = a[12];
    b.b = a[1];
    b.H = a[5];
    b.La = a[13]
};
c.$z = c.la.extend({zd: null,li: null,eh: 0,wL: !1,Yr: null,ctor: function(a, b, d) {
        this.zd = N(a || 0, b || 0);
        this.eh = d || 0
    },Wk: function() {
        return {x: this.zd.x,y: this.zd.y}
    },T_: function() {
        return this.zd.x
    },U_: function() {
        return this.zd.y
    },eca: function() {
        return {x: this.li.x,y: this.li.y}
    },vca: function() {
        return {x: this.Yr.x,y: this.Yr.y}
    },AE: function() {
        return c.Gd(this.zd, this.li)
    },S_: function() {
        return {x: this.zd.x,y: this.zd.y}
    },fca: function() {
        return {x: this.li.x,y: this.li.y}
    },wca: function() {
        return {x: this.Yr.x,y: this.Yr.y}
    },
    qba: function() {
        return this.eh
    },rba: function() {
        return this.eh
    },Cja: function(a, b, d) {
        this.li = this.zd;
        this.zd = N(b || 0, d || 0);
        this.eh = a;
        this.wL || (this.Yr = N(this.zd), this.wL = !0)
    },SC: function(a, b) {
        void 0 === b ? (this.zd.x = a.x, this.zd.y = a.y) : (this.zd.x = a, this.zd.y = b)
    },ko: function(a, b) {
        this.li = void 0 === b ? N(a.x, a.y) : N(a || 0, b || 0)
    }});
c.pc = c.la.extend({lc: 0,Jl: !1,xd: null,KC: function(a) {
        this.xd = a
    },ctor: function(a) {
        this.lc = a
    },NE: function() {
        return this.lc
    },stopPropagation: function() {
        this.Jl = !0
    },Mda: function() {
        return this.Jl
    },Paa: function() {
        return this.xd
    }});
c.pc.vu = 0;
c.pc.cn = 1;
c.pc.Sm = 2;
c.pc.fn = 3;
c.pc.Lp = 4;
c.Ii = c.pc.extend({hB: null,KL: null,ctor: function(a) {
        c.pc.prototype.ctor.call(this, c.pc.Lp);
        this.hB = a
    },setUserData: function(a) {
        this.KL = a
    },getUserData: function() {
        return this.KL
    },gba: function() {
        return this.hB
    }});
c.Lc = c.pc.extend({KJ: 0,QI: 0,vh: 0,Je: 0,oC: 0,pC: 0,fL: 0,gL: 0,ctor: function(a) {
        c.pc.prototype.ctor.call(this, c.pc.fn);
        this.KJ = a
    },fP: function(a, b) {
        this.fL = a;
        this.gL = b
    },rca: function() {
        return this.fL
    },sca: function() {
        return this.gL
    },t3: function(a, b) {
        this.vh = a;
        this.Je = b
    },Wk: function() {
        return {x: this.vh,y: this.Je}
    },S_: function() {
        return {x: this.vh,y: c.view.Fn.height - this.Je}
    },GX: function(a, b) {
        this.oC = a;
        this.pC = b
    },AE: function() {
        return {x: this.vh - this.oC,y: this.Je - this.pC}
    },Taa: function() {
        return this.vh - this.oC
    },
    Uaa: function() {
        return this.Je - this.pC
    },Nm: function(a) {
        this.QI = a
    },Baa: function() {
        return this.QI
    },T_: function() {
        return this.vh
    },U_: function() {
        return this.Je
    }});
c.Lc.NONE = 0;
c.Lc.IG = 1;
c.Lc.kA = 2;
c.Lc.XG = 3;
c.Lc.Fz = 4;
c.Lc.D5 = 0;
c.Lc.F5 = 2;
c.Lc.E5 = 1;
c.Lc.y5 = 3;
c.Lc.z5 = 4;
c.Lc.A5 = 5;
c.Lc.B5 = 6;
c.Lc.C5 = 7;
c.ng = c.pc.extend({qk: 0,Rk: null,ctor: function(a) {
        c.pc.prototype.ctor.call(this, c.pc.vu);
        this.Rk = a || []
    },fba: function() {
        return this.qk
    },Pca: function() {
        return this.Rk
    },J8: function(a) {
        this.qk = a
    },L8: function(a) {
        this.Rk = a
    }});
c.ng.y6 = 5;
c.ng.Xm = {Cy: 0,fz: 1,Py: 2,Hy: 3};
c.sa = c.la.extend({WB: null,lc: 0,ei: null,mf: !1,tk: 0,jf: null,kc: !1,Zn: !0,ctor: function(a, b, d) {
        this.WB = d;
        this.lc = a || 0;
        this.ei = b || ""
    },RC: function(a) {
        this.kc = a
    },p8: function() {
        return this.kc
    },Rr: function(a) {
        this.mf = a
    },vW: function() {
        return this.mf
    },m8: function() {
        return this.lc
    },j8: function() {
        return this.ei
    },LC: function(a) {
        this.tk = a
    },i8: function() {
        return this.tk
    },Sr: function(a) {
        this.jf = a
    },k8: function() {
        return this.jf
    },Uk: function() {
        return null != this.WB
    },j: function() {
        return null
    },se: function(a) {
        this.Zn = a
    },
    isEnabled: function() {
        return this.Zn
    },by: function() {
    },Ei: function() {
    }});
c.sa.dU = 0;
c.sa.Fq = 1;
c.sa.Pz = 2;
c.sa.cn = 3;
c.sa.fn = 4;
c.sa.Sm = 5;
c.sa.Lp = 6;
c.Oq = c.sa.extend({Ir: null,ctor: function(a, b) {
        this.Ir = b;
        var d = this;
        c.sa.prototype.ctor.call(this, c.sa.Lp, a, function(a) {
            null != d.Ir && d.Ir(a)
        })
    },Uk: function() {
        return c.sa.prototype.Uk.call(this) && null != this.Ir
    },j: function() {
        return new c.Oq(this.ei, this.Ir)
    }});
c.Oq.create = function(a, b) {
    return new c.Oq(a, b)
};
c.fk = c.sa.extend({Mx: null,Px: null,Nx: null,Ox: null,ctor: function() {
        var a = this;
        c.sa.prototype.ctor.call(this, c.sa.fn, c.fk.qc, function(b) {
            var d = c.Lc;
            switch (b.KJ) {
                case d.IG:
                    a.Mx && a.Mx(b);
                    break;
                case d.kA:
                    a.Px && a.Px(b);
                    break;
                case d.XG:
                    a.Nx && a.Nx(b);
                    break;
                case d.Fz:
                    a.Ox && a.Ox(b)
            }
        })
    },j: function() {
        var a = new c.fk;
        a.Mx = this.Mx;
        a.Px = this.Px;
        a.Nx = this.Nx;
        a.Ox = this.Ox;
        return a
    },Uk: function() {
        return !0
    }});
c.fk.qc = "__cc_mouse";
c.fk.create = function() {
    return new c.fk
};
c.Uh = c.sa.extend({zn: null,Ap: !1,Gm: null,ip: null,hp: null,$s: null,ctor: function() {
        c.sa.prototype.ctor.call(this, c.sa.Fq, c.Uh.qc, null);
        this.zn = []
    },sja: function(a) {
        this.Ap = a
    },j: function() {
        var a = new c.Uh;
        a.Gm = this.Gm;
        a.ip = this.ip;
        a.hp = this.hp;
        a.$s = this.$s;
        a.Ap = this.Ap;
        return a
    },Uk: function() {
        return this.Gm ? !0 : (c.log(c.e.kU), !1)
    }});
c.Uh.qc = "__cc_touch_one_by_one";
c.Uh.create = function() {
    return new c.Uh
};
c.Th = c.sa.extend({at: null,dt: null,ct: null,bt: null,ctor: function() {
        c.sa.prototype.ctor.call(this, c.sa.Pz, c.Th.qc, null)
    },j: function() {
        var a = new c.Th;
        a.at = this.at;
        a.dt = this.dt;
        a.ct = this.ct;
        a.bt = this.bt;
        return a
    },Uk: function() {
        return null == this.at && null == this.dt && null == this.ct && null == this.bt ? (c.log(c.e.jU), !1) : !0
    }});
c.Th.qc = "__cc_touch_all_at_once";
c.Th.create = function() {
    return new c.Th
};
c.sa.create = function(a) {
    c.assert(a && a.event, c.e.KQ);
    var b = a.event;
    delete a.event;
    var d = null;
    b === c.sa.Fq ? d = new c.Uh : b === c.sa.Pz ? d = new c.Th : b === c.sa.fn ? d = new c.fk : b === c.sa.Lp ? (d = new c.Oq(a.i_, a.XD), delete a.i_, delete a.XD) : b === c.sa.cn ? d = new c.ek : b === c.sa.Sm && (d = new c.dk(a.XD), delete a.XD);
    for (var e in a)
        d[e] = a[e];
    return d
};
c.eM = function(a) {
    var b, d = a.length, e = Array(d);
    for (b = 0; b < d; b += 1)
        e[b] = a[b];
    return e
};
c.lU = c.la.extend({If: null,Pf: null,nN: 0,ctor: function() {
        this.If = [];
        this.Pf = []
    },size: function() {
        return this.If.length + this.Pf.length
    },empty: function() {
        return 0 === this.If.length && 0 === this.Pf.length
    },push: function(a) {
        0 == a.tk ? this.Pf.push(a) : this.If.push(a)
    },lZ: function() {
        this.Pf.length = 0
    },jZ: function() {
        this.If.length = 0
    },clear: function() {
        this.Pf.length = 0;
        this.If.length = 0
    },iba: function() {
        return this.If
    },pca: function() {
        return this.Pf
    }});
c.Eu = function(a) {
    var b = c.pc, d = a.lc;
    if (d === b.Sm)
        return c.dk.qc;
    if (d === b.Lp)
        return a.hB;
    if (d === b.cn)
        return c.ek.qc;
    if (d === b.fn)
        return c.fk.qc;
    d === b.vu && c.log(c.e.Eu);
    return ""
};
c.ta = {My: 0,Jt: 1,Np: 2,R5: 3,xg: {},Or: {},gi: {},Jv: {},ZJ: {},vo: [],gr: [],Hl: 0,Zn: !1,zK: 0,uW: [c.Fc.Mt, c.Fc.Op],bw: function(a) {
        null != this.gi[a.va] && this.gr.push(a);
        a = a.s;
        for (var b = 0, d = a.length; b < d; b++)
            this.bw(a[b])
    },lp: function(a, b) {
        var d = this.gi[a.va], e, f;
        if (d)
            for (e = 0, f = d.length; e < f; e++)
                d[e].RC(!0);
        if (!0 === b)
            for (d = a.s, e = 0, f = d.length; e < f; e++)
                this.lp(d[e], !0)
    },Kj: function(a, b) {
        var d = this.gi[a.va], e, f;
        if (d)
            for (e = 0, f = d.length; e < f; e++)
                d[e].RC(!1);
        this.bw(a);
        if (!0 === b)
            for (d = a.s, e = 0, f = d.length; e < f; e++)
                this.Kj(d[e], 
                !0)
    },JI: function(a) {
        0 === this.Hl ? this.QJ(a) : this.vo.push(a)
    },QJ: function(a) {
        var b = a.ei, d = this.xg[b];
        d || (d = new c.lU, this.xg[b] = d);
        d.push(a);
        0 == a.tk ? (this.Ik(b, this.Np), b = a.jf, null == b && c.log(c.e.b_), this.AU(b, a), b.nh && this.Kj(b)) : this.Ik(b, this.Jt)
    },vB: function(a) {
        return this.xg[a]
    },sY: function() {
        if (0 != this.gr.length) {
            for (var a = this.gr, b, d, e = this.gi, f = 0, g = a.length; f < g; f++)
                if (b = e[a[f].va])
                    for (var h = 0, k = b.length; h < k; h++)
                        (d = b[h]) && this.Ik(d.ei, this.Np);
            this.gr.length = 0
        }
    },UK: function(a) {
        if (a)
            for (var b, d = 
            0; d < a.length; )
                b = a[d], b.Rr(!1), null != b.jf && (this.eJ(b.jf, b), b.Sr(null)), 0 === this.Hl ? c.Ke(a, b) : ++d
    },Ul: function(a) {
        var b = this.xg[a];
        if (b) {
            var d = b.If;
            this.UK(b.Pf);
            this.UK(d);
            delete this.Or[a];
            this.Hl || (b.clear(), delete this.xg[a])
        }
        for (var d = this.vo, e, b = 0; b < d.length; )
            (e = d[b]) && e.ei == a ? c.Ke(d, e) : ++b
    },ZC: function(a) {
        var b = this.My, d = this.Or;
        d[a] && (b = d[a]);
        b != this.My && (d[a] = this.My, b & this.Jt && this.fY(a), b & this.Np && ((b = c.C.ad) ? this.hY(a, b) : d[a] = this.Np))
    },hY: function(a, b) {
        var d = this.vB(a);
        if (d) {
            var e = d.Pf;
            e && 0 !== e.length && (this.zK = 0, this.Jv = {}, this.HD(b, !0), d.Pf.sort(this.eY))
        }
    },eY: function(a, b) {
        var d = c.ta.Jv;
        return d[b.jf.va] - d[a.jf.va]
    },fY: function(a) {
        if (a = this.xg[a]) {
            var b = a.If;
            if (b && 0 !== b.length) {
                b.sort(this.gY);
                for (var d = 0, e = b.length; d < e && !(0 <= b[d].tk); )
                    ++d;
                a.nN = d
            }
        }
    },gY: function(a, b) {
        return a.tk - b.tk
    },XB: function(a) {
        if (a = this.xg[a]) {
            var b = a.If, d = a.Pf, e, f;
            if (d)
                for (e = 0; e < d.length; )
                    f = d[e], f.mf ? ++e : c.Ke(d, f);
            if (b)
                for (e = 0; e < b.length; )
                    f = b[e], f.mf ? ++e : c.Ke(b, f);
            d && 0 === d.length && a.lZ();
            b && 0 === b.length && 
            a.jZ()
        }
    },ww: function(a) {
        var b = this.Hl;
        c.assert(0 < b, c.e.LQ);
        a.lc == c.pc.vu ? (this.XB(c.Uh.qc), this.XB(c.Th.qc)) : this.XB(c.Eu(a));
        if (!(1 < b)) {
            c.assert(1 == b, c.e.MQ);
            a = this.xg;
            var b = this.Or, d;
            for (d in a)
                a[d].empty() && (delete b[d], delete a[d]);
            d = this.vo;
            if (0 !== d.length) {
                a = 0;
                for (b = d.length; a < b; a++)
                    this.QJ(d[a]);
                this.vo.length = 0
            }
        }
    },SW: function(a, b) {
        if (!a.vW)
            return !1;
        var d = b.event, e = b.FO;
        d.KC(a.jf);
        var f = !1, g, h = d.qk, k = c.ng.Xm;
        h == k.Cy ? a.Gm && (f = a.Gm(e, d)) && a.mf && a.zn.push(e) : 0 < a.zn.length && -1 != (g = a.zn.indexOf(e)) && 
        (f = !0, h === k.fz && a.ip ? a.ip(e, d) : h === k.Py ? (a.hp && a.hp(e, d), a.mf && a.zn.splice(g, 1)) : h === k.Hy && (a.$s && a.$s(e, d), a.mf && a.zn.splice(g, 1)));
        return d.Jl ? (c.ta.ww(d), !0) : f && a.mf && a.Ap ? (b.T1 && b.touches.splice(e, 1), !0) : !1
    },gV: function(a) {
        this.ZC(c.Uh.qc);
        this.ZC(c.Th.qc);
        var b = this.vB(c.Uh.qc), d = this.vB(c.Th.qc);
        if (null != b || null != d) {
            var e = a.Rk, f = c.eM(e), g = {event: a,T1: b && d,touches: f,FO: null};
            if (b)
                for (var h = 0; h < e.length; h++)
                    if (g.FO = e[h], this.$A(b, this.SW, g), a.Jl)
                        return;
            if (d && 0 < f.length && (this.$A(d, this.UW, {event: a,
                touches: f}), a.Jl))
                return;
            this.ww(a)
        }
    },UW: function(a, b) {
        if (!a.mf)
            return !1;
        var d = c.ng.Xm, e = b.event, f = b.touches, g = e.qk;
        e.KC(a.jf);
        g == d.Cy && a.at ? a.at(f, e) : g == d.fz && a.dt ? a.dt(f, e) : g == d.Py && a.ct ? a.ct(f, e) : g == d.Hy && a.bt && a.bt(f, e);
        return e.Jl ? (c.ta.ww(e), !0) : !1
    },AU: function(a, b) {
        var d = this.gi[a.va];
        d || (d = [], this.gi[a.va] = d);
        d.push(b)
    },eJ: function(a, b) {
        var d = this.gi[a.va];
        d && (c.Ke(d, b), 0 === d.length && delete this.gi[a.va])
    },$A: function(a, b, d) {
        var e = !1, f = a.If, g = a.Pf, h = 0, k;
        if (f && 0 !== f.length)
            for (; h < a.nN; ++h)
                if (k = 
                f[h], k.isEnabled() && !k.kc && k.mf && b(k, d)) {
                    e = !0;
                    break
                }
        if (g && !e)
            for (a = 0; a < g.length; a++)
                if (k = g[a], k.isEnabled() && !k.kc && k.mf && b(k, d)) {
                    e = !0;
                    break
                }
        if (f && !e)
            for (; h < f.length && (k = f[h], !k.isEnabled() || k.kc || !k.mf || !b(k, d)); ++h)
                ;
    },Ik: function(a, b) {
        var d = this.Or;
        d[a] = null == d[a] ? b : b | d[a]
    },HD: function(a, b) {
        var d = a.s, e = 0, f = d.length, g = this.ZJ, h = this.gi;
        if (0 < f) {
            for (var k; e < f; e++)
                if ((k = d[e]) && 0 > k.wb)
                    this.HD(k, !1);
                else
                    break;
            null != h[a.va] && (g[a.Xi] || (g[a.Xi] = []), g[a.Xi].push(a.va));
            for (; e < f; e++)
                (k = d[e]) && this.HD(k, 
                !1)
        } else
            null != h[a.va] && (g[a.Xi] || (g[a.Xi] = []), g[a.Xi].push(a.va));
        if (b) {
            var d = [], m;
            for (m in g)
                d.push(m);
            d.sort(this.iY);
            m = d.length;
            k = this.Jv;
            for (e = 0; e < m; e++)
                for (f = g[d[e]], h = 0; h < f.length; h++)
                    k[f[h]] = ++this.zK;
            this.ZJ = {}
        }
    },iY: function(a, b) {
        return a - b
    },addListener: function(a, b) {
        c.assert(a && b, c.e.d_);
        if (!(a instanceof c.sa))
            c.assert("number" !== typeof b, c.e.e_), a = c.sa.create(a);
        else if (a.mf) {
            c.log(c.e.f_);
            return
        }
        a.Uk() && ("number" == typeof b ? 0 == b ? c.log(c.e.c_) : (a.Sr(null), a.LC(b), a.Rr(!0), a.RC(!1), this.JI(a)) : 
        (a.Sr(b), a.LC(0), a.Rr(!0), this.JI(a)))
    },ND: function(a, b) {
        var d = c.Oq.create(a, b);
        this.addListener(d, 1);
        return d
    },removeListener: function(a) {
        if (null != a) {
            var b, d = this.xg, e;
            for (e in d) {
                var f = d[e], g = f.If;
                (b = this.VK(f.Pf, a)) ? this.Ik(a.ei, this.Np) : (b = this.VK(g, a)) && this.Ik(a.ei, this.Jt);
                f.empty() && (delete this.Or[a.ei], delete d[e]);
                if (b)
                    break
            }
            if (!b)
                for (b = this.vo, d = 0, e = b.length; d < e; d++)
                    if (f = b[d], f == a) {
                        c.Ke(b, f);
                        break
                    }
        }
    },VK: function(a, b) {
        if (null == a)
            return !1;
        for (var d = 0, e = a.length; d < e; d++) {
            var f = a[d];
            if (f == 
            b)
                return f.Rr(!1), null != f.jf && (this.eJ(f.jf, f), f.Sr(null)), 0 == this.Hl && c.Ke(a, f), !0
        }
        return !1
    },vO: function(a, b) {
        if (a instanceof c.q) {
            delete this.Jv[a.va];
            c.Ke(this.gr, a);
            var d = this.gi[a.va];
            if (d) {
                for (var e = c.eM(d), d = 0; d < e.length; d++)
                    this.removeListener(e[d]);
                e.length = 0;
                e = this.vo;
                for (d = 0; d < e.length; ) {
                    var f = e[d];
                    f.jf == a ? (f.Sr(null), f.Rr(!1), e.splice(d, 1)) : ++d
                }
                if (!0 === b)
                    for (e = a.s, d = 0, f = e.length; d < f; d++)
                        this.vO(e[d], !0)
            }
        } else
            a == c.sa.Fq ? this.Ul(c.Uh.qc) : a == c.sa.Pz ? this.Ul(c.Th.qc) : a == c.sa.fn ? this.Ul(c.fk.qc) : 
            a == c.sa.Sm ? this.Ul(c.dk.qc) : a == c.sa.cn ? this.Ul(c.ek.qc) : c.log(c.e.g_)
    },pha: function(a) {
        this.Ul(a)
    },kha: function() {
        var a = this.xg, b = this.uW, d;
        for (d in a)
            -1 === b.indexOf(d) && this.Ul(d)
    },dja: function(a, b) {
        if (null != a) {
            var d = this.xg, e;
            for (e in d) {
                var f = d[e].If;
                if (f && -1 != f.indexOf(a)) {
                    null != a.jf && c.log(c.e.h_);
                    a.tk !== b && (a.LC(b), this.Ik(a.ei, this.Jt));
                    break
                }
            }
        }
    },se: function(a) {
        this.Zn = a
    },isEnabled: function() {
        return this.Zn
    },dispatchEvent: function(a) {
        if (this.Zn) {
            this.sY();
            this.Hl++;
            if (!a || !a.NE)
                throw "event is undefined";
            if (a.lc == c.pc.vu)
                this.gV(a);
            else {
                var b = c.Eu(a);
                this.ZC(b);
                b = this.xg[b];
                null != b && this.$A(b, this.MW, a);
                this.ww(a)
            }
            this.Hl--
        }
    },MW: function(a, b) {
        b.KC(a.jf);
        a.WB(b);
        return b.Jl
    },f$: function(a, b) {
        var d = new c.Ii(a);
        d.setUserData(b);
        this.dispatchEvent(d)
    }};
c.JQ = c.pc.extend({FI: null,ctor: function(a) {
        c.pc.prototype.ctor.call(this, c.pc.Sm);
        this.FI = a
    }});
c.MG = c.pc.extend({KB: 0,kK: !1,ctor: function(a, b) {
        c.pc.prototype.ctor.call(this, c.pc.cn);
        this.KB = a;
        this.kK = b
    }});
c.dk = c.sa.extend({Mv: null,ctor: function(a) {
        this.Mv = a;
        var b = this;
        c.sa.prototype.ctor.call(this, c.sa.Sm, c.dk.qc, function(a) {
            b.Mv(a.FI, a)
        })
    },Uk: function() {
        c.assert(this.Mv, c.e.hU);
        return !0
    },j: function() {
        return new c.dk(this.Mv)
    }});
c.dk.qc = "__cc_acceleration";
c.dk.create = function(a) {
    return new c.dk(a)
};
c.ek = c.sa.extend({Ys: null,Zs: null,ctor: function() {
        var a = this;
        c.sa.prototype.ctor.call(this, c.sa.cn, c.ek.qc, function(b) {
            b.kK ? a.Ys && a.Ys(b.KB, b) : a.Zs && a.Zs(b.KB, b)
        })
    },j: function() {
        var a = new c.ek;
        a.Ys = this.Ys;
        a.Zs = this.Zs;
        return a
    },Uk: function() {
        return null == this.Ys && null == this.Zs ? (c.log(c.e.iU), !1) : !0
    }});
c.ek.qc = "__cc_keyboard";
c.ek.create = function() {
    return new c.ek
};
c.B.mA = function() {
    var a = c.q.prototype;
    a.sD = null;
    a.fD = null;
    a.zB = null;
    a.Ti = null;
    a.ctor = function() {
        this.CB();
        var a = new c.ba;
        a.c[2] = a.c[3] = a.c[6] = a.c[7] = a.c[8] = a.c[9] = a.c[11] = a.c[14] = 0;
        a.c[10] = a.c[15] = 1;
        this.sD = a;
        this.zB = 0;
        this.fD = new c.ba
    };
    a.Ja = function() {
        !1 === this.sj && (this.sj = this.Av = !0)
    };
    a.S = function() {
        if (this.yc) {
            var a = c.k, d, e = c.Ub;
            e.stack.push(e.top);
            c.Bj(this.fD, e.top);
            e.top = this.fD;
            var f = this.grid;
            f && f.ik && f.ws();
            this.transform();
            var g = this.s;
            if (g && 0 < g.length) {
                var h = g.length;
                this.Sc();
                for (d = 0; d < 
                h; d++)
                    if (g[d] && 0 > g[d].wb)
                        g[d].S();
                    else
                        break;
                for (this.Z(a); d < h; d++)
                    g[d] && g[d].S()
            } else
                this.Z(a);
            this.arrivalOrder = 0;
            f && f.ik && f.ts(this);
            e.top = e.stack.pop()
        }
    };
    a.transform = function() {
        var a = this.sD, d = c.Ub.top, e = this.Re(), f = a.c;
        f[0] = e.a;
        f[4] = e.D;
        f[12] = e.Ka;
        f[1] = e.b;
        f[5] = e.H;
        f[13] = e.La;
        f[14] = this.ms;
        c.zi(d, d, a);
        null == this.Ti || null != this.grid && this.grid.uf() || (a = this.hb.x, d = this.hb.y, 0 !== a || 0 !== d ? (c.Jz || (a |= 0, d |= 0), c.ap(a, d), this.Ti.Ws(), c.ap(-a, -d)) : this.Ti.Ws())
    };
    a.Re = a.JW
};
c.B.rz = function() {
    var a = c.q.prototype;
    c.f(a, "x", a.Pe, a.WO);
    c.f(a, "y", a.Gg, a.XO);
    c.f(a, "width", a.ah, a.lj);
    c.f(a, "height", a.wk, a.kj);
    c.f(a, "anchorX", a.xV, a.HC);
    c.f(a, "anchorY", a.yV, a.IC);
    c.f(a, "skewX", a.n0, a.J3);
    c.f(a, "skewY", a.o0, a.K3);
    c.f(a, "zIndex", a.R_, a.SO);
    c.f(a, "vertexZ", a.x0, a.W3);
    c.f(a, "rotation", a.g0, a.VF);
    c.f(a, "rotationX", a.i0, a.H3);
    c.f(a, "rotationY", a.j0, a.I3);
    c.f(a, "scale", a.k0, a.up);
    c.f(a, "scaleX", a.aN, a.ot);
    c.f(a, "scaleY", a.bN, a.pt);
    c.f(a, "children", a.u_);
    c.f(a, "childrenCount", a.v_);
    c.f(a, "parent", a.getParent, a.y3);
    c.f(a, "visible", a.g1, a.lP);
    c.f(a, "running", a.e1);
    c.f(a, "ignoreAnchor", a.b1, a.hx);
    c.f(a, "actionManager", a.Sw, a.GO);
    c.f(a, "scheduler", a.Xk, a.eP);
    c.f(a, "shaderProgram", a.IE, a.XF);
    c.f(a, "glServerState", a.I_, a.p3)
};
c.B.sz = function() {
    var a = c.ia.prototype;
    c.f(a, "opacity", a.Oe, a.za);
    c.f(a, "opacityModifyRGB", a.re, a.Hd);
    c.f(a, "cascadeOpacity", a.Qs, a.sp);
    c.f(a, "color", a.Ne, a.bb);
    c.f(a, "cascadeColor", a.Ps, a.rp)
};
c.bH = -1;
c.CO = 1;
c.q = c.la.extend({wb: 0,Xi: 0,ms: 0,ij: 0,Wl: 0,pa: 1,Ra: 1,xa: null,ph: 0,qh: 0,s: null,yc: !0,Nc: null,hb: null,Q: null,nh: !1,Rb: null,$i: !1,tag: c.bH,userData: null,userObject: null,sj: !0,Av: !0,tg: !0,Si: null,R8: null,dm: null,gK: null,Ud: !1,Fb: null,arrivalOrder: 0,rg: null,Qf: null,d8: null,eK: !1,Rq: !1,Ku: null,Zh: null,JB: !1,jo: 0,$v: 0,sb: "Node",XC: !1,Fr: "",CB: function() {
        this.Nc = N(0, 0);
        this.hb = N(0, 0);
        this.Q = P(0, 0);
        this.xa = N(0, 0);
        this.s = [];
        this.dm = {a: 1,b: 0,D: 0,H: 1,Ka: 0,La: 0};
        var a = c.C;
        this.rg = a.Sw();
        this.Qf = a.Xk();
        this.eK = 
        !0;
        this.Ku = {a: 1,b: 0,D: 0,H: 1,Ka: 0,La: 0};
        c.oQ && (this.Zh = new c.oQ(this))
    },M: function() {
        !1 === this.eK && this.CB();
        return !0
    },sg: function(a, b) {
        if (a && 0 !== a.length) {
            var d, e = a.length, f;
            d = c.q.Bf;
            switch (b) {
                case d.ca:
                    for (d = 0; d < e; d++)
                        (f = a[d]) && f.ca();
                    break;
                case d.yb:
                    for (d = 0; d < e; d++)
                        (f = a[d]) && f.yb();
                    break;
                case d.Jh:
                    for (d = 0; d < e; d++)
                        (f = a[d]) && f.Jh();
                    break;
                case d.Le:
                    for (d = 0; d < e; d++)
                        (f = a[d]) && f.Le();
                    break;
                case d.Ze:
                    for (d = 0; d < e; d++)
                        (f = a[d]) && f.Ze();
                    break;
                case d.Zf:
                    for (d = 0; d < e; d++)
                        (f = a[d]) && f.Zf();
                    break;
                case d.Sc:
                    for (d = 
                    0; d < e; d++)
                        (f = a[d]) && f.Sc();
                    break;
                default:
                    c.assert(0, c.e.xR)
            }
        }
    },Ja: null,Tb: function(a) {
        for (var b in a)
            this[b] = a[b]
    },n0: function() {
        return this.ph
    },J3: function(a) {
        this.ph = a;
        this.Ja()
    },o0: function() {
        return this.qh
    },K3: function(a) {
        this.qh = a;
        this.Ja()
    },SO: function(a) {
        this.wb = a;
        this.Rb && this.Rb.op(this, a);
        c.ta.bw(this)
    },cw: function(a) {
        this.wb = a
    },R_: function() {
        return this.wb
    },ada: function() {
        c.log(c.e.ER);
        return this.wb
    },Vja: function(a) {
        c.log(c.e.PR);
        this.SO(a)
    },yia: function(a) {
        this.Xi != a && (this.Xi = a, c.ta.bw(this))
    },
    oba: function() {
        return this.Xi
    },x0: function() {
        return this.ms
    },W3: function(a) {
        this.ms = a
    },g0: function() {
        this.ij !== this.Wl && c.log(c.e.CR);
        return this.ij
    },VF: function(a) {
        this.ij = this.Wl = a;
        this.jo = 0.017453292519943295 * this.ij;
        this.$v = 0.017453292519943295 * this.Wl;
        this.Ja()
    },i0: function() {
        return this.ij
    },H3: function(a) {
        this.ij = a;
        this.jo = 0.017453292519943295 * this.ij;
        this.Ja()
    },j0: function() {
        return this.Wl
    },I3: function(a) {
        this.Wl = a;
        this.$v = 0.017453292519943295 * this.Wl;
        this.Ja()
    },k0: function() {
        this.pa !== this.Ra && 
        c.log(c.e.DR);
        return this.pa
    },up: function(a, b) {
        this.pa = a;
        this.Ra = b || 0 === b ? b : a;
        this.Ja()
    },aN: function() {
        return this.pa
    },ot: function(a) {
        this.pa = a;
        this.Ja()
    },bN: function() {
        return this.Ra
    },pt: function(a) {
        this.Ra = a;
        this.Ja()
    },U: function(a, b) {
        var d = this.xa;
        void 0 === b ? (d.x = a.x, d.y = a.y) : (d.x = a, d.y = b);
        this.Ja()
    },Vw: function() {
        return N(this.xa)
    },Pe: function() {
        return this.xa.x
    },WO: function(a) {
        this.xa.x = a;
        this.Ja()
    },Gg: function() {
        return this.xa.y
    },XO: function(a) {
        this.xa.y = a;
        this.Ja()
    },v_: function() {
        return this.s.length
    },
    u_: function() {
        return this.s
    },g1: function() {
        return this.yc
    },lP: function(a) {
        this.yc = a;
        this.Ja()
    },uaa: function() {
        return this.Nc
    },el: function(a, b) {
        var d = this.Nc;
        if (void 0 === b) {
            if (a.x === d.x && a.y === d.y)
                return;
            d.x = a.x;
            d.y = a.y
        } else {
            if (a === d.x && b === d.y)
                return;
            d.x = a;
            d.y = b
        }
        var e = this.hb, f = this.Q;
        e.x = f.width * d.x;
        e.y = f.height * d.y;
        this.Ja()
    },h8: function() {
        return this.Nc
    },hL: function(a) {
        var b = a.x;
        a = a.y;
        this.Nc.x !== b && (this.Nc.x = b, this.hb.x = this.Q.width * b);
        this.Nc.y !== a && (this.Nc.y = a, this.hb.y = this.Q.height * a);
        this.Ja()
    },
    xV: function() {
        return this.Nc.x
    },HC: function(a) {
        this.Nc.x !== a && (this.Nc.x = a, this.hb.x = this.Q.width * a, this.Ja())
    },yV: function() {
        return this.Nc.y
    },IC: function(a) {
        this.Nc.y !== a && (this.Nc.y = a, this.hb.y = this.Q.height * a, this.Ja())
    },vaa: function() {
        return this.hb
    },ah: function() {
        return this.Q.width
    },lj: function(a) {
        this.Q.width = a;
        this.hb.x = a * this.Nc.x;
        this.Ja()
    },wk: function() {
        return this.Q.height
    },kj: function(a) {
        this.Q.height = a;
        this.hb.y = a * this.Nc.y;
        this.Ja()
    },Ch: function() {
        return this.Q
    },Zd: function(a, b) {
        var d = 
        this.Q;
        if (void 0 === b) {
            if (a.width === d.width && a.height === d.height)
                return;
            d.width = a.width;
            d.height = a.height
        } else {
            if (a === d.width && b === d.height)
                return;
            d.width = a;
            d.height = b
        }
        var e = this.hb, f = this.Nc;
        e.x = d.width * f.x;
        e.y = d.height * f.y;
        this.Ja()
    },e1: function() {
        return this.nh
    },getParent: function() {
        return this.Rb
    },y3: function(a) {
        this.Rb = a
    },b1: function() {
        return this.$i
    },hx: function(a) {
        a != this.$i && (this.$i = a, this.Ja())
    },KE: function() {
        return this.tag
    },ZF: function(a) {
        this.tag = a
    },Nia: function() {
        this.Fr
    },getName: function() {
        return this.Fr
    },
    getUserData: function() {
        return this.userData
    },setUserData: function(a) {
        this.userData = a
    },Vca: function() {
        return this.userObject
    },Sja: function(a) {
        this.userObject != a && (this.userObject = a)
    },Sba: function() {
        return this.arrivalOrder
    },Tia: function(a) {
        this.arrivalOrder = a
    },Sw: function() {
        this.rg || (this.rg = c.C.Sw());
        return this.rg
    },GO: function(a) {
        this.rg != a && (this.hG(), this.rg = a)
    },Xk: function() {
        this.Qf || (this.Qf = c.C.Xk());
        return this.Qf
    },eP: function(a) {
        this.Qf != a && (this.xy(), this.Qf = a)
    },Fs: function() {
        return c.oU(S(0, 
        0, this.Q.width, this.Q.height), this.Re())
    },Le: function() {
        this.hG();
        this.xy();
        c.ta.vO(this);
        this.sg(this.s, c.q.Bf.Le)
    },Bh: function(a) {
        var b = this.s;
        if (null != b)
            for (var d = 0; d < b.length; d++) {
                var e = b[d];
                if (e && e.tag == a)
                    return e
            }
        return null
    },Haa: function(a) {
        if (!a)
            return c.log("Invalid name"), null;
        for (var b = this.s, d = 0, e = b.length; d < e; d++)
            if (b[d].Fr == a)
                return b[d];
        return null
    },L: function(a, b, d) {
        c.assert(a, c.e.AR);
        a === this ? c.log(c.e.yR) : null !== a.Rb ? c.log(c.e.zR) : (b = null != b ? b : a.wb, a.tag = null != d ? d : a.tag, this.qW(a, 
        b), a.Rb = this, this.Si && (a.Si = this.Si), this.nh && (a.ca(), this.JB && a.Jh()))
    },Se: function(a) {
        this.Rb && (null == a && (a = !0), this.Rb.removeChild(this, a))
    },qha: function(a) {
        c.log(c.e.JR);
        this.Se(a)
    },removeChild: function(a, b) {
        0 !== this.s.length && (null == b && (b = !0), -1 < this.s.indexOf(a) && this.fV(a, b), this.Ja())
    },EF: function(a, b) {
        a === c.bH && c.log(c.e.HR);
        var d = this.Bh(a);
        null == d ? c.log(c.e.IR, a) : this.removeChild(d, b)
    },iha: function(a) {
        c.log(c.e.GR);
        this.Jg(a)
    },Jg: function(a) {
        var b = this.s;
        if (null != b) {
            null == a && (a = !0);
            for (var d = 
            0; d < b.length; d++) {
                var e = b[d];
                e && (this.nh && (e.Zf(), e.yb()), a && e.Le(), e.parent = null)
            }
            this.s.length = 0
        }
    },fV: function(a, b) {
        this.nh && (a.Zf(), a.yb());
        b && a.Le();
        a.parent = null;
        c.Ke(this.s, a)
    },qW: function(a, b) {
        this.Ud = !0;
        this.s.push(a);
        a.cw(b)
    },op: function(a, b) {
        c.assert(a, c.e.KR);
        this.Ud = !0;
        a.arrivalOrder = c.CO;
        c.CO++;
        a.cw(b);
        this.Ja()
    },Sc: function() {
        if (this.Ud) {
            var a = this.s, b = a.length, d, e, f;
            for (d = 1; d < b; d++) {
                f = a[d];
                for (e = d - 1; 0 <= e; ) {
                    if (f.wb < a[e].wb)
                        a[e + 1] = a[e];
                    else if (f.wb === a[e].wb && f.arrivalOrder < a[e].arrivalOrder)
                        a[e + 
                        1] = a[e];
                    else
                        break;
                    e--
                }
                a[e + 1] = f
            }
            this.Ud = !1
        }
    },Z: function() {
    },wy: function() {
        null != this.Rb && (this.Rb.wy(), this.Rb.transform())
    },ca: function() {
        this.JB = !1;
        this.nh = !0;
        this.sg(this.s, c.q.Bf.ca);
        this.pp()
    },Jh: function() {
        this.JB = !0;
        this.sg(this.s, c.q.Bf.Jh)
    },Zf: function() {
        this.sg(this.s, c.q.Bf.Zf)
    },yb: function() {
        this.nh = !1;
        this.pause();
        this.sg(this.s, c.q.Bf.yb);
        this.Zh && this.Zh.C2()
    },gb: function(a) {
        c.assert(a, c.e.MR);
        this.actionManager.AY(a, this, !this.nh);
        return a
    },hG: function() {
        this.actionManager && this.actionManager.tO(this)
    },
    l4: function(a) {
        this.actionManager.sO(a)
    },m4: function(a) {
        a === c.Tm ? c.log(c.e.QR) : this.actionManager.B2(a, this)
    },xE: function(a) {
        return a === c.Tm ? (c.log(c.e.BR), null) : this.actionManager.xE(a, this)
    },Mba: function() {
        return this.actionManager.V1(this)
    },DO: function() {
        this.EO(0)
    },EO: function(a) {
        this.scheduler.KF(this, a, !this.nh)
    },EP: function() {
        this.scheduler.Bt(this)
    },gy: function(a, b, d, e) {
        b = b || 0;
        c.assert(a, c.e.NR);
        c.assert(0 <= b, c.e.OR);
        d = null == d ? c.rq : d;
        this.scheduler.U2(this, a, b, d, e || 0, !this.nh)
    },Mha: function(a, 
    b) {
        this.gy(a, 0, 0, b)
    },pG: function(a) {
        a && this.scheduler.DP(this, a)
    },xy: function() {
        this.scheduler.CP(this)
    },Bha: function() {
        c.log(c.e.LR);
        this.pp()
    },pp: function() {
        this.scheduler.Kj(this);
        this.actionManager && this.actionManager.Kj(this);
        c.ta.Kj(this)
    },Iga: function() {
        c.log(c.e.FR);
        this.pause()
    },pause: function() {
        this.scheduler.lp(this);
        this.actionManager && this.actionManager.lp(this);
        c.ta.lp(this)
    },Tha: function(a) {
        this.Ku = a;
        this.Rq = this.sj = !0
    },Fga: function() {
        this.Av && (this.gK = c.vG(this.Re()), this.Av = !1);
        return this.gK
    },
    fp: function() {
        for (var a = this.Re(), b = this.Rb; null != b; b = b.parent)
            a = c.ll(a, b.Re());
        return a
    },P4: function() {
        return c.vG(this.fp())
    },iE: function(a) {
        return c.vH(a, this.P4())
    },Lw: function(a) {
        a = a || N(0, 0);
        return c.vH(a, this.fp())
    },rZ: function(a) {
        return c.Gd(this.iE(a), this.hb)
    },R9: function(a) {
        a = a || N(0, 0);
        return this.Lw(c.Fj(a, this.hb))
    },W7: function(a) {
        a = this.Lw(a);
        return c.C.sZ(a)
    },S9: function(a) {
        return this.iE(a.Wk())
    },T9: function(a) {
        a = a.Wk();
        a = c.C.qZ(a);
        return this.rZ(a)
    },update: function(a) {
        this.Zh && !this.Zh.yda() && 
        this.Zh.S(a)
    },Ze: function() {
        this.sg(this.s, c.q.Bf.Ze)
    },by: function() {
    },Ei: function() {
    },x_: function(a) {
        return this.Zh.x_(a)
    },Z8: function(a) {
        this.Zh.add(a)
    },oha: function(a) {
        return this.Zh.remove(a)
    },jha: function() {
        this.Zh.C2()
    },grid: null,ctor: null,S: null,transform: null,Re: null,oh: function() {
        if (!1 === this.tg) {
            this.tg = !0;
            var a = this.Si;
            a && a != this && a.oh()
        }
    },JC: function(a) {
        if (this.Si != a) {
            this.Si = a;
            for (var b = this.s, d = 0, e = b.length; d < e; d++)
                b[d].JC(a)
        }
    },ym: function() {
        this.Ti || (this.Ti = new c.Mp);
        return this.Ti
    },
    Gs: function() {
        return this.grid
    },q3: function(a) {
        this.grid = a
    },IE: function() {
        return this.Fb
    },XF: function(a) {
        this.Fb = a
    },I_: function() {
        return this.zB
    },p3: function(a) {
        this.zB = a
    },s_: function() {
        var a = S(0, 0, this.Q.width, this.Q.height), b = this.fp(), a = c.Cz(a, this.fp());
        if (!this.s)
            return a;
        for (var d = this.s, e = 0; e < d.length; e++) {
            var f = d[e];
            f && f.yc && (f = f.qr(b)) && (a = c.Yx(a, f))
        }
        return a
    },qr: function(a) {
        var b = S(0, 0, this.Q.width, this.Q.height);
        a = null == a ? this.Re() : c.ll(this.Re(), a);
        b = c.Cz(b, a);
        if (!this.s)
            return b;
        for (var d = 
        this.s, e = 0; e < d.length; e++) {
            var f = d[e];
            f && f.yc && (f = f.qr(a)) && (b = c.Yx(b, f))
        }
        return b
    },JW: function() {
        if (this.sj) {
            var a = this.xa.x, b = this.xa.y, d = this.hb.x, e = -d, f = this.hb.y, g = -f, h = this.pa, k = this.Ra;
            this.$i && (a += d, b += f);
            var m = 1, p = 0, r = 1, s = 0;
            if (0 !== this.ij || 0 !== this.Wl)
                m = Math.cos(-this.jo), p = Math.sin(-this.jo), r = Math.cos(-this.$v), s = Math.sin(-this.$v);
            var u = this.ph || this.qh;
            u || 0 === d && 0 === f || (a += r * e * h + -p * g * k, b += s * e * h + m * g * k);
            var t = this.dm;
            t.a = r * h;
            t.b = s * h;
            t.D = -p * k;
            t.H = m * k;
            t.Ka = a;
            t.La = b;
            u && (t = c.ll({a: 1,b: Math.tan(c.Vf(this.qh)),
                D: Math.tan(c.Vf(this.ph)),H: 1,Ka: 0,La: 0}, t), 0 !== d || 0 !== f) && (t = c.SP(t, e, g));
            this.Rq && (t = c.ll(t, this.Ku), this.Rq = !1);
            this.dm = t;
            this.sj = !1
        }
        return this.dm
    }});
c.q.create = function() {
    return new c.q
};
c.q.Bf = {ca: 1,yb: 2,Le: 3,Jh: 4,Ze: 5,Zf: 6,Sc: 7};
c.A === c.Da ? (n = c.q.prototype, n.ctor = function() {
    this.CB()
}, n.Ja = function() {
    this.oh();
    !1 === this.sj && (this.sj = this.Av = !0)
}, n.S = function(a) {
    if (this.yc) {
        a = a || c.k;
        var b, d = this.s, e;
        a.save();
        this.transform(a);
        var f = d.length;
        if (0 < f) {
            this.Sc();
            for (b = 0; b < f; b++)
                if (e = d[b], 0 > e.wb)
                    e.S(a);
                else
                    break;
            for (this.Z(a); b < f; b++)
                d[b].S(a)
        } else
            this.Z(a);
        this.tg = !1;
        this.arrivalOrder = 0;
        a.restore()
    }
}, n.transform = function(a) {
    a = a || c.k;
    var b = c.view, d = this.Re();
    a.transform(d.a, d.D, d.b, d.H, d.Ka * b.pa, -d.La * b.Ra)
}, n.Re = function() {
    if (this.sj) {
        var a = 
        this.dm;
        a.Ka = this.xa.x;
        a.La = this.xa.y;
        var b = 1, d = 0;
        this.ij && (b = Math.cos(this.jo), d = Math.sin(this.jo));
        a.a = a.H = b;
        a.b = -d;
        a.D = d;
        var e = this.pa, f = this.Ra, g = this.hb.x, h = this.hb.y, k = 1E-6 > e && -1E-6 < e ? 1E-6 : e, m = 1E-6 > f && -1E-6 < f ? 1E-6 : f;
        if (this.ph || this.qh) {
            var p = Math.tan(-this.ph * Math.PI / 180), r = Math.tan(-this.qh * Math.PI / 180);
            Infinity === p && (p = 99999999);
            Infinity === r && (r = 99999999);
            var s = h * p * k, u = g * r * m;
            a.a = b + -d * r;
            a.b = b * p + -d;
            a.D = d + b * r;
            a.H = d * p + b;
            a.Ka += b * s + -d * u;
            a.La += d * s + b * u
        }
        if (1 !== e || 1 !== f)
            a.a *= k, a.D *= k, a.b *= m, a.H *= m;
        a.Ka += b * -g * k + -d * h * m;
        a.La -= d * -g * k + b * h * m;
        this.$i && (a.Ka += g, a.La += h);
        this.Rq && (this.dm = c.ll(a, this.Ku), this.Rq = !1);
        this.sj = !1
    }
    return this.dm
}, n = null) : (c.assert("function" === typeof c.B.mA, c.e.Mc, "BaseNodesWebGL.js"), c.B.mA(), delete c.B.mA);
c.assert("function" === typeof c.B.rz, c.e.Mc, "BaseNodesPropertyDefine.js");
c.B.rz();
delete c.B.rz;
c.ia = c.q.extend({vb: !0,Aa: 255,Td: 255,Ea: null,bc: null,wd: !1,ce: !1,ctor: function() {
        c.q.prototype.ctor.call(this);
        this.Td = this.Aa = 255;
        this.Ea = c.color(255, 255, 255, 255);
        this.bc = c.color(255, 255, 255, 255);
        this.ce = this.wd = !1
    },ec: function() {
    },Oe: function() {
        return this.Td
    },LM: function() {
        return this.Aa
    },za: function(a) {
        this.Aa = this.Td = a;
        var b = 255, d = this.Rb;
        d && d.vb && d.cascadeOpacity && (b = d.Aa);
        this.Jb(b);
        this.Ea.a = this.bc.a = a
    },Jb: function(a) {
        this.Aa = this.Td * a / 255;
        if (this.ce) {
            a = this.s;
            for (var b = 0; b < a.length; b++) {
                var d = 
                a[b];
                d && d.vb && d.Jb(this.Aa)
            }
        }
    },Qs: function() {
        return this.ce
    },sp: function(a) {
        this.ce !== a && ((this.ce = a) ? this.jr() : this.ZA())
    },jr: function() {
        var a = 255, b = this.Rb;
        b && b.vb && b.cascadeOpacity && (a = b.Aa);
        this.Jb(a)
    },ZA: function() {
        this.Aa = this.Td;
        for (var a = this.s, b = 0; b < a.length; b++) {
            var d = a[b];
            d && d.vb && d.Jb(255)
        }
    },Ne: function() {
        var a = this.bc;
        return c.color(a.r, a.g, a.b, a.a)
    },zm: function() {
        var a = this.Ea;
        return c.color(a.r, a.g, a.b, a.a)
    },bb: function(a) {
        var b = this.Ea, d = this.bc;
        b.r = d.r = a.r;
        b.g = d.g = a.g;
        b.b = d.b = a.b;
        b = (b = this.Rb) && b.vb && b.cascadeColor ? b.zm() : c.color.WHITE;
        this.Mb(b);
        void 0 === a.a || a.qs || this.za(a.a)
    },Mb: function(a) {
        var b = this.Ea, d = this.bc;
        b.r = 0 | d.r * a.r / 255;
        b.g = 0 | d.g * a.g / 255;
        b.b = 0 | d.b * a.b / 255;
        if (this.wd)
            for (a = this.s, d = 0; d < a.length; d++) {
                var e = a[d];
                e && e.vb && e.Mb(b)
            }
    },Ps: function() {
        return this.wd
    },rp: function(a) {
        this.wd !== a && ((this.wd = a) ? this.ir() : this.YA())
    },ir: function() {
        var a;
        a = (a = this.Rb) && a.vb && a.cascadeColor ? a.zm() : c.color.WHITE;
        this.Mb(a)
    },YA: function() {
        var a = this.Ea, b = this.bc;
        a.r = b.r;
        a.g = 
        b.g;
        a.b = b.b;
        for (var a = this.s, b = c.color.WHITE, d = 0; d < a.length; d++) {
            var e = a[d];
            e && e.vb && e.Mb(b)
        }
    },L: function(a, b, d) {
        c.q.prototype.L.call(this, a, b, d);
        this.wd && this.ir();
        this.ce && this.jr()
    },Hd: function() {
    },re: function() {
        return !1
    }});
c.ia.create = function() {
    var a = new c.ia;
    a.M();
    return a
};
c.assert("function" === typeof c.B.sz, c.e.Mc, "BaseNodesPropertyDefine.js");
c.B.sz();
delete c.B.sz;
c.q.D6 = 0;
c.q.F6 = 1;
c.q.E6 = 2;
c.q.G6 = 3;
c.q.C6 = 4;
c.Hi = c.ia.extend({textureAtlas: null,quadsToDraw: 0,vb: !0,bo: 0,oK: 0,di: 0,gh: 0,Cl: null,Qa: !1,o: null,xv: !1,sb: "AtlasNode",ctor: function(a, b, d, e) {
        c.ia.prototype.ctor.call(this);
        this.Cl = c.color.WHITE;
        this.o = {src: c.gc,T: c.fc};
        this.xv = !1;
        void 0 !== e && this.R0(a, b, d, e)
    },Dp: function() {
        c.log(c.e.TP)
    },Ne: function() {
        return this.Qa ? this.Cl : c.ia.prototype.Ne.call(this)
    },Hd: function(a) {
        var b = this.color;
        this.Qa = a;
        this.color = b
    },re: function() {
        return this.Qa
    },Ah: function() {
        return this.o
    },Te: function(a, b) {
        this.o = void 0 === 
        b ? a : {src: a,T: b}
    },aG: function(a) {
        this.textureAtlas = a
    },LE: function() {
        return this.textureAtlas
    },ica: function() {
        return this.quadsToDraw
    },eja: function(a) {
        this.quadsToDraw = a
    },Pk: null,ie: null,uD: null,$q: null,R0: function(a, b, d, e) {
        if (!a)
            throw "cc.AtlasNode.initWithTileFile(): title should not be null";
        a = c.Ba.Ac(a);
        return this.ra(a, b, d, e)
    },ra: null,DB: function(a, b, d, e) {
        this.di = b;
        this.gh = d;
        this.Qa = !0;
        this.ie = a;
        if (!this.ie)
            return c.log(c.e.wG), !1;
        this.Pk = this.ie;
        this.Su();
        this.quadsToDraw = e;
        return !0
    },EB: function(a, 
    b, d, e) {
        this.di = b;
        this.gh = d;
        this.Cl = c.color.WHITE;
        this.Qa = !0;
        this.o.src = c.gc;
        this.o.T = c.fc;
        b = this.bc;
        this.$q = new Float32Array([b.r / 255, b.g / 255, b.b / 255, this.Td / 255]);
        this.textureAtlas = new c.$j;
        this.textureAtlas.ra(a, e);
        if (!this.textureAtlas)
            return c.log(c.e.wG), !1;
        this.Tf();
        this.IL();
        this.Su();
        this.quadsToDraw = e;
        this.shaderProgram = c.Jd.mc(c.Hz);
        this.uD = c.k.getUniformLocation(this.shaderProgram.Am(), "u_color");
        return !0
    },Z: null,Wi: function(a) {
        a = a || c.k;
        c.Xs(this);
        c.Fh(this.o.src, this.o.T);
        this.uD && this.$q && 
        (a.uniform4fv(this.uD, this.$q), this.textureAtlas.wM(this.quadsToDraw))
    },bb: null,yX: function(a) {
        var b = this.bc;
        if (b.r != a.r || b.g != a.g || b.b != a.b) {
            b = c.color(a.r, a.g, a.b);
            this.Cl = a;
            if (this.Qa) {
                var d = this.Aa;
                b.r = b.r * d / 255;
                b.g = b.g * d / 255;
                b.b = b.b * d / 255
            }
            c.ia.prototype.bb.call(this, a);
            this.texture && (a = this.ie.Bb) && (b = c.Ba.$w(a)) && (a = c.Po(a, b, this.bc, S(0, 0, a.width, a.height)), b = new c.da, b.Ed(a), b.Vb(), this.texture = b)
        }
    },zX: function(a) {
        var b = c.color(a.r, a.g, a.b);
        this.Cl = a;
        var d = this.Aa;
        this.Qa && (b.r = b.r * d / 255, b.g = 
        b.g * d / 255, b.b = b.b * d / 255);
        c.ia.prototype.bb.call(this, a);
        a = this.Ea;
        this.$q = new Float32Array([a.r / 255, a.g / 255, a.b / 255, d / 255])
    },za: function() {
    },PC: function(a) {
        c.ia.prototype.za.call(this, a);
        this.Qa && (this.color = this.Cl)
    },QC: function(a) {
        c.ia.prototype.za.call(this, a);
        this.Qa ? this.color = this.Cl : (a = this.Ea, this.$q = new Float32Array([a.r / 255, a.g / 255, a.b / 255, this.Aa / 255]))
    },Oa: null,rr: function() {
        return this.Pk
    },yB: function() {
        return this.textureAtlas.texture
    },ob: null,UC: function(a) {
        this.Pk = a
    },VC: function(a) {
        this.textureAtlas.texture = 
        a;
        this.Tf();
        this.IL()
    },Su: null,JU: function() {
        var a = this.texture.Ch();
        this.oK = 0 | a.height / this.gh;
        this.bo = 0 | a.width / this.di
    },KU: function() {
        var a = this.texture, b = a.Ch();
        this.xv && (b = a.Q);
        this.oK = 0 | b.height / this.gh;
        this.bo = 0 | b.width / this.di
    },Tf: function() {
        this.textureAtlas.texture.ui() || (this.o.src = c.SRC_ALPHA, this.o.T = c.ONE_MINUS_SRC_ALPHA)
    },IL: function() {
        this.Qa = this.textureAtlas.texture.ui()
    },MC: function(a) {
        this.xv = a
    }});
n = c.Hi.prototype;
c.A === c.$ ? (n.ra = n.EB, n.Z = n.Wi, n.bb = n.zX, n.za = n.QC, n.Oa = n.yB, n.ob = n.VC, n.Su = n.KU) : (n.ra = n.DB, n.Z = c.q.prototype.Z, n.bb = n.yX, n.za = n.PC, n.Oa = n.rr, n.ob = n.UC, n.Su = n.JU);
c.f(n, "opacity", n.Oe, n.za);
c.f(n, "color", n.Ne, n.bb);
c.f(n, "texture", n.Oa, n.ob);
c.Hi.create = function(a, b, d, e) {
    return new c.Hi(a, b, d, e)
};
c.B.sA = function() {
    c.da = c.la.extend({y8: !0,ji: null,gj: 0,fj: 0,Fr: "",Q: null,Ai: 0,Bi: 0,wv: !1,Un: !1,shaderProgram: null,uc: !1,Bb: null,Vd: null,url: null,fb: null,ctor: function() {
            this.Q = P(0, 0);
            this.ji = c.da.nM
        },DF: function() {
            this.Vd && c.k.deleteTexture(this.Vd);
            c.W.Ei(this.url)
        },TM: function() {
            return this.ji
        },VM: function() {
            return this.gj
        },UM: function() {
            return this.fj
        },getName: function() {
            return this.Vd
        },Ch: function() {
            return P(this.Q.width / c.qb(), this.Q.height / c.qb())
        },ah: function() {
            return this.Q.width / c.qb()
        },
        wk: function() {
            return this.Q.height / c.qb()
        },y_: function() {
            return this.Q
        },W_: function() {
            return this.Ai
        },u3: function(a) {
            this.Ai = a
        },X_: function() {
            return this.Bi
        },v3: function(a) {
            this.Bi = a
        },IE: function() {
            return this.shaderProgram
        },XF: function(a) {
            this.shaderProgram = a
        },ui: function() {
            return this.wv
        },D0: function() {
            return this.Un
        },description: function() {
            return "\x3ccc.Texture2D | Name \x3d " + this.Fr + " | Dimensions \x3d " + this.gj + " x " + this.fj + " | Coordinates \x3d (" + this.Ai + ", " + this.Bi + ")\x3e"
        },A2: function() {
        },
        k1: function(a) {
            return a
        },Os: function(a, b, d, e, f) {
            var g = c.da, h = c.k, k = h.RGBA, m = h.UNSIGNED_BYTE, p = d * c.da.AI[b] / 8;
            0 === p % 8 ? h.pixelStorei(h.UNPACK_ALIGNMENT, 8) : 0 === p % 4 ? h.pixelStorei(h.UNPACK_ALIGNMENT, 4) : 0 === p % 2 ? h.pixelStorei(h.UNPACK_ALIGNMENT, 2) : h.pixelStorei(h.UNPACK_ALIGNMENT, 1);
            this.Vd = h.createTexture();
            c.qe(this);
            h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.LINEAR);
            h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.LINEAR);
            h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE);
            h.texParameteri(h.TEXTURE_2D, 
            h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE);
            switch (b) {
                case g.Pi:
                    k = h.RGBA;
                    break;
                case g.oq:
                    k = h.RGB;
                    break;
                case g.iu:
                    m = h.UNSIGNED_SHORT_4_4_4_4;
                    break;
                case g.hu:
                    m = h.UNSIGNED_SHORT_5_5_5_1;
                    break;
                case g.nq:
                    m = h.UNSIGNED_SHORT_5_6_5;
                    break;
                case g.lz:
                    k = h.LUMINANCE_ALPHA;
                    break;
                case g.mq:
                    k = h.ALPHA;
                    break;
                case g.mz:
                    k = h.LUMINANCE;
                    break;
                default:
                    c.assert(0, c.e.wT)
            }
            h.texImage2D(h.TEXTURE_2D, 0, k, d, e, 0, k, m, a);
            this.Q.width = f.width;
            this.Q.height = f.height;
            this.gj = d;
            this.fj = e;
            this.ji = b;
            this.Ai = f.width / d;
            this.Bi = f.height / e;
            this.Un = 
            this.wv = !1;
            this.shaderProgram = c.Jd.mc(c.vq);
            return this.uc = !0
        },IZ: function(a) {
            var b = [0, this.Bi, this.Ai, this.Bi, 0, 0, this.Ai, 0], d = this.gj * this.Ai, e = this.fj * this.Bi;
            a = [a.x, a.y, 0, d + a.x, a.y, 0, a.x, e + a.y, 0, d + a.x, e + a.y, 0];
            c.Gc(c.Md | c.ln);
            this.Fb.Jc();
            this.Fb.tt();
            c.qe(this);
            d = c.k;
            d.vertexAttribPointer(c.pb, 2, d.FLOAT, !1, 0, a);
            d.vertexAttribPointer(c.ud, 2, d.FLOAT, !1, 0, b);
            d.drawArrays(d.TRIANGLE_STRIP, 0, 4)
        },LZ: function(a) {
            var b = [0, this.Bi, this.Ai, this.Bi, 0, 0, this.Ai, 0];
            a = [a.x, a.y, a.x + a.width, a.y, a.x, a.y + a.height, 
                a.x + a.width, a.y + a.height];
            c.Gc(c.Md | c.ln);
            this.Fb.Jc();
            this.Fb.tt();
            c.qe(this);
            var d = c.k;
            d.vertexAttribPointer(c.pb, 2, d.FLOAT, !1, 0, a);
            d.vertexAttribPointer(c.ud, 2, d.FLOAT, !1, 0, b);
            d.drawArrays(d.TRIANGLE_STRIP, 0, 4)
        },zN: function(a) {
            if (null == a)
                return c.log(c.e.zT), !1;
            var b = a.z0(), d = a.K_(), e = c.Ho.Dr;
            if (b > e || d > e)
                return c.log(c.e.AT, b, d, e, e), !1;
            this.uc = !0;
            return this.jW(a, b, d)
        },Ed: function(a) {
            a && (this.Vd = c.k.createTexture(), this.Bb = a)
        },M_: function() {
            return this.Bb
        },c1: function() {
            return this.uc
        },Vb: function() {
            if (c.Yv) {
                if (!this.Bb) {
                    var a = 
                    c.W.Dd(this.url);
                    if (!a)
                        return;
                    this.Ed(a)
                }
                this.Bb.width && this.Bb.height && (this.uc = !0, a = c.k, c.qe(this), a.pixelStorei(a.UNPACK_ALIGNMENT, 4), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, this.Bb), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), this.shaderProgram = c.Jd.mc(c.vq), c.qe(null), a = this.Bb.height, 
                this.gj = this.Q.width = this.Bb.width, this.fj = this.Q.height = a, this.ji = c.da.Pi, this.Bi = this.Ai = 1, this.Un = this.wv = !1, this.Od())
            }
        },pd: function() {
            c.log(c.e.FT);
            return null
        },K0: function() {
            c.log(c.e.yT);
            return !1
        },N0: function() {
            c.log(c.e.CT);
            return !1
        },O0: function() {
            c.log(c.e.ET);
            return !1
        },P3: function(a) {
            var b = c.k;
            c.assert(this.gj == c.Tj(this.gj) && this.fj == c.Tj(this.fj) || a.Q4 == b.CLAMP_TO_EDGE && a.R4 == b.CLAMP_TO_EDGE, "WebGLRenderingContext.CLAMP_TO_EDGE should be used in NPOT textures");
            c.qe(this);
            b.texParameteri(b.TEXTURE_2D, 
            b.TEXTURE_MIN_FILTER, a.Qfa);
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, a.Nfa);
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, a.Q4);
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, a.R4)
        },Z2: function() {
            var a = c.k;
            c.qe(this);
            this.Un ? a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR_MIPMAP_NEAREST) : a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
            a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.NEAREST)
        },LF: function() {
            var a = c.k;
            c.qe(this);
            this.Un ? a.texParameteri(a.TEXTURE_2D, 
            a.TEXTURE_MIN_FILTER, a.NEAREST_MIPMAP_NEAREST) : a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.NEAREST);
            a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.NEAREST)
        },generateMipmap: function() {
            c.assert(this.gj == c.Tj(this.gj) && this.fj == c.Tj(this.fj), "Mimpap texture only works in POT textures");
            c.qe(this);
            c.k.generateMipmap(c.k.TEXTURE_2D);
            this.Un = !0
        },q4: function() {
            return c.da.nU[this.ji]
        },dZ: function(a) {
            a = a || this.ji;
            var b = c.da.AI[a];
            if (null != b)
                return b;
            c.log(c.e.vT, a);
            return -1
        },jW: function(a, b, 
        d) {
            var e = c.da, f = a.getData(), g = null, g = null, h = a.ida(), k = P(a.z0(), a.K_()), m = e.nM, p = a.Aaa();
            h || (8 <= p ? m = e.oq : (c.log(c.e.sT), m = e.nq));
            var r = b * d;
            if (m == e.nq)
                if (h)
                    for (f = new Uint16Array(b * d), g = a.getData(), p = 0; p < r; ++p)
                        f[p] = (g[p] >> 0 & 255) >> 3 << 11 | (g[p] >> 8 & 255) >> 2 << 5 | (g[p] >> 16 & 255) >> 3 << 0;
                else
                    for (f = new Uint16Array(b * d), g = a.getData(), p = 0; p < r; ++p)
                        f[p] = (g[p] & 255) >> 3 << 11 | (g[p] & 255) >> 2 << 5 | (g[p] & 255) >> 3 << 0;
            else if (m == e.iu)
                for (f = new Uint16Array(b * d), g = a.getData(), p = 0; p < r; ++p)
                    f[p] = (g[p] >> 0 & 255) >> 4 << 12 | (g[p] >> 8 & 255) >> 4 << 
                    8 | (g[p] >> 16 & 255) >> 4 << 4 | (g[p] >> 24 & 255) >> 4 << 0;
            else if (m == e.hu)
                for (f = new Uint16Array(b * d), g = a.getData(), p = 0; p < r; ++p)
                    f[p] = (g[p] >> 0 & 255) >> 3 << 11 | (g[p] >> 8 & 255) >> 3 << 6 | (g[p] >> 16 & 255) >> 3 << 1 | (g[p] >> 24 & 255) >> 7 << 0;
            else if (m == e.mq)
                for (f = new Uint8Array(b * d), g = a.getData(), p = 0; p < r; ++p)
                    f[p] = g >> 24 & 255;
            if (h && m == e.oq)
                for (g = a.getData(), f = new Uint8Array(b * d * 3), p = 0; p < r; ++p)
                    f[3 * p] = g >> 0 & 255, f[3 * p + 1] = g >> 8 & 255, f[3 * p + 2] = g >> 16 & 255;
            this.Os(f, m, b, d, k);
            a.getData();
            this.wv = a.Fda();
            return !0
        },Wd: function(a, b) {
            this.fb || (this.fb = []);
            this.fb.push({yh: a,Wf: b})
        },F2: function(a) {
            if (this.fb)
                for (var b = this.fb, d = 0; d < b.length; d++)
                    b[d].Wf == a && b.splice(d, 1)
        },Od: function() {
            if (this.fb) {
                for (var a = this.fb, b = 0, d = a.length; b < d; b++) {
                    var e = a[b];
                    e.yh.call(e.Wf, this)
                }
                a.length = 0
            }
        }})
};
c.B.tA = function() {
    var a = c.$j.prototype;
    a.Yl = function() {
        var a = c.k;
        this.tc[0] = a.createBuffer();
        this.tc[1] = a.createBuffer();
        this.Tl = a.createBuffer();
        this.Iv()
    };
    a.Iv = function() {
        var a = c.k;
        a.bindBuffer(a.ARRAY_BUFFER, this.Tl);
        a.bufferData(a.ARRAY_BUFFER, this.Zc, a.DYNAMIC_DRAW);
        a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.tc[1]);
        a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.kb, a.STATIC_DRAW)
    };
    a.wM = function(a) {
        var d;
        d = 0;
        if (0 !== a && this.texture && this.texture.uc) {
            var e = c.k;
            c.qe(this.texture);
            c.Gc(c.yl);
            e.bindBuffer(e.ARRAY_BUFFER, 
            this.Tl);
            this.dirty && e.bufferData(e.ARRAY_BUFFER, this.Zc, e.DYNAMIC_DRAW);
            e.vertexAttribPointer(c.pb, 3, e.FLOAT, !1, 24, 0);
            e.vertexAttribPointer(c.we, 4, e.UNSIGNED_BYTE, !0, 24, 12);
            e.vertexAttribPointer(c.ud, 2, e.FLOAT, !1, 24, 16);
            this.dirty && (this.dirty = !1);
            e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.tc[1]);
            c.GH ? e.drawElements(e.TRIANGLE_STRIP, 6 * a, e.UNSIGNED_SHORT, 6 * d * this.kb.BYTES_PER_ELEMENT) : e.drawElements(e.TRIANGLES, 6 * a, e.UNSIGNED_SHORT, 6 * d * this.kb.BYTES_PER_ELEMENT);
            c.Xf++
        }
    }
};
c.B.uA = function() {
    var a = c.Ba;
    a.Vb = function(a) {
        var d = this.Ec;
        c.Yv || (d = this.Cr);
        var e = d[a];
        e || (e = d[a] = new c.da, e.url = a);
        e.Vb()
    };
    a.Ac = function(a, d, e) {
        c.assert(a, c.e.uT);
        var f = this.Ec;
        c.Yv || (f = this.Cr);
        var g = f[a] || f[c.W.Al[a]];
        if (g)
            return d && d.call(e), g;
        c.W.Dd(a) || (c.W.SI(a) ? c.W.load(a, function() {
            d && d.call(e)
        }) : c.W.Uf[a] = c.W.Gx(a, function(e, f) {
            if (e)
                return d ? d(e) : e;
            c.Ba.Vb(a);
            d && d(null, f)
        }));
        g = f[a] = new c.da;
        g.url = a;
        return g
    };
    delete a
};
c.B.zz = function() {
    var a = c.da;
    a.O6 = function(a) {
        c.gS = a
    };
    a.Pi = 2;
    a.oq = 3;
    a.nq = 4;
    a.mq = 5;
    a.mz = 6;
    a.lz = 7;
    a.iu = 8;
    a.hu = 7;
    a.gH = 9;
    a.fH = 10;
    a.YR = a.Pi;
    var b = c.da.nU = {};
    b[a.Pi] = "RGBA8888";
    b[a.oq] = "RGB888";
    b[a.nq] = "RGB565";
    b[a.mq] = "A8";
    b[a.mz] = "I8";
    b[a.lz] = "AI88";
    b[a.iu] = "RGBA4444";
    b[a.hu] = "RGB5A1";
    b[a.gH] = "PVRTC4";
    b[a.fH] = "PVRTC2";
    b = c.da.AI = {};
    b[a.Pi] = 32;
    b[a.oq] = 24;
    b[a.nq] = 16;
    b[a.mq] = 8;
    b[a.mz] = 8;
    b[a.lz] = 16;
    b[a.iu] = 16;
    b[a.hu] = 16;
    b[a.gH] = 4;
    b[a.fH] = 3;
    b = c.da.prototype;
    c.f(b, "name", b.getName);
    c.f(b, "pixelFormat", b.TM);
    c.f(b, "pixelsWidth", b.VM);
    c.f(b, "pixelsHeight", b.UM);
    c.f(b, "width", b.ah);
    c.f(b, "height", b.wk);
    a.nM = a.YR
};
c.B.Az = function() {
    var a = c.$j.prototype;
    c.f(a, "totalQuads", a.lN);
    c.f(a, "capacity", a.JM);
    c.f(a, "quads", a.WM, a.$O)
};
c.Y4 = 51;
c.b5 = 19;
c.d5 = 18;
c.a5 = 50;
c.X4 = 34;
c.V4 = 35;
c.W4 = 33;
c.Z4 = 49;
c.c5 = 17;
c.gS = !1;
c.A === c.Da ? c.da = c.la.extend({Q: null,uc: !1,Bb: null,fb: null,url: null,ctor: function() {
        this.Q = P(0, 0);
        this.uc = !1;
        this.Bb = null
    },VM: function() {
        return this.Q.width
    },UM: function() {
        return this.Q.height
    },Ch: function() {
        var a = c.qb();
        return P(this.Q.width / a, this.Q.height / a)
    },ah: function() {
        return this.Q.width / c.qb()
    },wk: function() {
        return this.Q.height / c.qb()
    },y_: function() {
        return this.Q
    },Ed: function(a) {
        a && (this.Bb = a)
    },M_: function() {
        return this.Bb
    },c1: function() {
        return this.uc
    },Vb: function() {
        if (!this.uc) {
            if (!this.Bb) {
                var a = 
                c.W.Dd(this.url);
                if (!a)
                    return;
                this.Ed(a)
            }
            this.uc = !0;
            a = this.Bb;
            this.Q.width = a.width;
            this.Q.height = a.height;
            this.Od()
        }
    },description: function() {
        return "\x3ccc.Texture2D | width \x3d " + this.Q.width + " height " + this.Q.height + "\x3e"
    },Os: function() {
        return !1
    },zN: function() {
        return !1
    },pd: function() {
        return !1
    },DF: function() {
    },getName: function() {
        return null
    },W_: function() {
        return 1
    },u3: function() {
    },X_: function() {
        return 1
    },v3: function() {
    },TM: function() {
        return null
    },IE: function() {
        return null
    },XF: function() {
    },ui: function() {
        return !1
    },
    D0: function() {
        return !1
    },A2: function() {
    },k1: function(a) {
        return a
    },IZ: function() {
    },LZ: function() {
    },K0: function() {
        c.log(c.e.xT);
        return !1
    },N0: function() {
        c.log(c.e.BT);
        return !1
    },O0: function() {
        c.log(c.e.DT);
        return !1
    },P3: function() {
    },Z2: function() {
    },LF: function() {
    },generateMipmap: function() {
    },q4: function() {
        return ""
    },dZ: function() {
        return -1
    },Wd: function(a, b) {
        this.fb || (this.fb = []);
        this.fb.push({yh: a,Wf: b})
    },F2: function(a) {
        if (this.fb)
            for (var b = this.fb, d = 0; d < b.length; d++)
                b[d].Wf == a && b.splice(d, 1)
    },Od: function() {
        if (this.fb) {
            for (var a = 
            this.fb, b = 0, d = a.length; b < d; b++) {
                var e = a[b];
                e.yh.call(e.Wf, this)
            }
            a.length = 0
        }
    }}) : (c.assert("function" === typeof c.B.sA, c.e.Mc, "TexturesWebGL.js"), c.B.sA(), delete c.B.sA);
c.assert("function" === typeof c.B.zz, c.e.Mc, "TexturesPropertyDefine.js");
c.B.zz();
delete c.B.zz;
c.Ba = {Ec: {},ds: {},pD: 0 | 1E3 * Math.random(),Cr: {},pW: function() {
        var a, b = this.Cr, d = this.Ec;
        for (a in b) {
            var e = b[a];
            e.Vb();
            d[a] = e
        }
        this.Cr = {}
    },d9: function() {
        c.log(c.e.u4)
    },a9: function() {
        c.log(c.e.s4)
    },description: function() {
        return "\x3cTextureCache | Number of textures \x3d " + this.Ec.length + "\x3e"
    },Pm: function(a) {
        return this.Ec[a] || this.Ec[c.W.Al[a]]
    },O_: function(a) {
        for (var b in this.Ec)
            if (this.Ec[b] == a)
                return b;
        return null
    },uV: function() {
        this.pD++;
        return "_textureKey_" + this.pD
    },$w: function(a) {
        var b = this.O_(a);
        b || (b = a instanceof HTMLImageElement ? a.src : this.uV());
        this.ds[b] || (this.ds[b] = c.Oo(a));
        return this.ds[b]
    },c9: function() {
        c.log(c.e.t4)
    },mha: function() {
        var a = this.Ec, b;
        for (b in a)
            a[b] && a[b].DF();
        this.Ec = {}
    },xha: function(a) {
        if (a) {
            var b = this.Ec, d;
            for (d in b)
                b[d] == a && (b[d].DF(), delete b[d])
        }
    },yha: function(a) {
        null != a && this.Ec[a] && delete this.Ec[a]
    },eZ: function(a, b) {
        if (b instanceof c.da)
            this.Ec[a] = b;
        else {
            var d = new c.da;
            d.Ed(b);
            d.Vb();
            this.Ec[a] = d
        }
    },h9: function(a, b) {
        c.assert(a, c.e.w4);
        if (b && this.Ec[b])
            return this.Ec[b];
        var d = new c.da;
        d.zN(a);
        null != b && null != d ? this.Ec[b] = d : c.log(c.e.v4);
        return d
    },o$: function() {
        var a = 0, b = 0, d = this.Ec, e;
        for (e in d) {
            var f = d[e];
            a++;
            f.Bb instanceof HTMLImageElement ? c.log(c.e.x4, e, f.Bb.src, f.pixelsWidth, f.pixelsHeight) : c.log(c.e.vP, e, f.pixelsWidth, f.pixelsHeight);
            b += f.pixelsWidth * f.pixelsHeight * 4
        }
        d = this.ds;
        for (e in d) {
            var f = d[e], g;
            for (g in f) {
                var h = f[g];
                a++;
                c.log(c.e.vP, e, h.width, h.height);
                b += h.width * h.height * 4
            }
        }
        c.log(c.e.y4, a, b / 1024, (b / 1048576).toFixed(2))
    },mk: function() {
        this.Ec = {};
        this.ds = 
        {};
        this.pD = 0 | 1E3 * Math.random();
        this.Cr = {}
    }};
c.A === c.Da ? (n = c.Ba, n.Vb = function(a) {
    var b = this.Ec, d = b[a];
    d || (d = b[a] = new c.da, d.url = a);
    d.Vb()
}, n.Ac = function(a, b, d) {
    c.assert(a, c.e.tT);
    var e = this.Ec, f = e[a] || e[c.W.Al[a]];
    if (f)
        return b && b.call(d), f;
    f = e[a] = new c.da;
    f.url = a;
    c.W.Dd(a) ? f.Vb() : c.W.SI(a) ? c.W.load(a, function() {
        b && b.call(d)
    }) : c.W.Uf[a] = c.W.Gx(a, function(d, e) {
        if (d)
            return b ? b(d) : d;
        c.Ba.Vb(a);
        b && b(null, e)
    });
    return f
}, n = null) : (c.assert("function" === typeof c.B.uA, c.e.Mc, "TexturesWebGL.js"), c.B.uA(), delete c.B.uA);
c.$j = c.la.extend({dirty: !1,texture: null,kb: null,tc: null,vd: 0,Cc: null,Zc: null,Tl: null,Of: null,ctor: function(a, b) {
        this.tc = [];
        "string" == typeof a ? this.Zk(a, b) : a instanceof c.da && this.ra(a, b)
    },lN: function() {
        return this.Na
    },JM: function() {
        return this.vd
    },Oa: function() {
        return this.texture
    },ob: function(a) {
        this.texture = a
    },LO: function(a) {
        this.dirty = a
    },dF: function() {
        return this.dirty
    },WM: function() {
        return this.Cc
    },$O: function(a) {
        this.Cc = a
    },bV: function(a, b) {
        if (a)
            for (var d = 0; d < a.length; d++)
                this.dw(a[d], b + d)
    },dw: function(a, 
    b) {
        var d = this.Cc;
        d[b] ? (d[b].F = a.F, d[b].O = a.O, d[b].N = a.N, d[b].I = a.I) : d[b] = new c.Ab(a.N, a.F, a.I, a.O, this.Zc, b * c.Ab.BYTES_PER_ELEMENT)
    },description: function() {
        return "\x3ccc.TextureAtlas | totalQuads \x3d" + this.Na + "\x3e"
    },oL: function() {
        if (0 !== this.vd)
            for (var a = this.kb, b = this.vd, d = 0; d < b; d++)
                c.GH ? (a[6 * d + 0] = 4 * d + 0, a[6 * d + 1] = 4 * d + 0, a[6 * d + 2] = 4 * d + 2, a[6 * d + 3] = 4 * d + 1, a[6 * d + 4] = 4 * d + 3, a[6 * d + 5] = 4 * d + 3) : (a[6 * d + 0] = 4 * d + 0, a[6 * d + 1] = 4 * d + 1, a[6 * d + 2] = 4 * d + 2, a[6 * d + 3] = 4 * d + 3, a[6 * d + 4] = 4 * d + 2, a[6 * d + 5] = 4 * d + 1)
    },Yl: function() {
        var a = c.k;
        this.tc[0] = a.createBuffer();
        this.tc[1] = a.createBuffer();
        this.Tl = a.createBuffer();
        this.Iv()
    },Iv: function() {
        var a = c.k;
        a.bindBuffer(a.ARRAY_BUFFER, this.Tl);
        a.bufferData(a.ARRAY_BUFFER, this.Zc, a.DYNAMIC_DRAW);
        a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.tc[1]);
        a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.kb, a.STATIC_DRAW)
    },Zk: function(a, b) {
        var d = c.Ba.Ac(a);
        if (d)
            return this.ra(d, b);
        c.log(c.e.GT, a);
        return !1
    },ra: function(a, b) {
        c.assert(a, c.e.HT);
        this.vd = b |= 0;
        this.Na = 0;
        this.texture = a;
        this.Cc = [];
        this.kb = new Uint16Array(6 * 
        b);
        var d = c.Ab.BYTES_PER_ELEMENT;
        this.Zc = new ArrayBuffer(d * b);
        this.Of = new Uint8Array(this.Zc);
        if ((!this.Cc || !this.kb) && 0 < b)
            return !1;
        for (var e = this.Cc, f = 0; f < b; f++)
            e[f] = new c.Ab(null, null, null, null, this.Zc, f * d);
        this.oL();
        this.Yl();
        return this.dirty = !0
    },Ay: function(a, b) {
        c.assert(a, c.e.RT);
        c.assert(0 <= b && b < this.vd, c.e.ST);
        this.Na = Math.max(b + 1, this.Na);
        this.dw(a, b);
        this.dirty = !0
    },cF: function(a, b) {
        c.assert(b < this.vd, c.e.KT);
        this.Na++;
        if (this.Na > this.vd)
            c.log(c.e.OH);
        else {
            var d = c.Ab.BYTES_PER_ELEMENT, e = b * 
            d, f = (this.Na - 1 - b) * d;
            this.Cc[this.Na - 1] = new c.Ab(null, null, null, null, this.Zc, (this.Na - 1) * d);
            this.Of.set(this.Of.subarray(e, e + f), e + d);
            this.dw(a, b);
            this.dirty = !0
        }
    },qda: function(a, b, d) {
        d = d || a.length;
        c.assert(b + d <= this.vd, c.e.LT);
        var e = c.Ab.BYTES_PER_ELEMENT;
        this.Na += d;
        if (this.Na > this.vd)
            c.log(c.e.OH);
        else {
            var f = b * e, g = (this.Na - 1 - b - d) * e, h = this.Na - 1 - d, k;
            for (k = 0; k < d; k++)
                this.Cc[h + k] = new c.Ab(null, null, null, null, this.Zc, (this.Na - 1) * e);
            this.Of.set(this.Of.subarray(f, f + g), f + e * d);
            for (k = 0; k < d; k++)
                this.dw(a[k], 
                b + k);
            this.dirty = !0
        }
    },pda: function(a, b) {
        if (a !== b) {
            c.assert(0 <= b || b < this.Na, c.e.IT);
            c.assert(0 <= a || a < this.Na, c.e.JT);
            var d = c.Ab.BYTES_PER_ELEMENT, e = this.Of, f = e.subarray(a * d, d), g;
            a > b ? (g = b * d, e.set(e.subarray(g, g + (a - b) * d), g + d), e.set(f, g)) : (g = (a + 1) * d, e.set(e.subarray(g, g + (b - a) * d), g - d), e.set(f, b * d));
            this.dirty = !0
        }
    },wO: function(a) {
        c.assert(a < this.Na, c.e.PT);
        var b = c.Ab.BYTES_PER_ELEMENT;
        this.Na--;
        this.Cc.length = this.Na;
        if (a !== this.Na) {
            var d = (a + 1) * b;
            this.Of.set(this.Of.subarray(d, d + (this.Na - a) * b), d - b)
        }
        this.dirty = 
        !0
    },H2: function(a, b) {
        c.assert(a + b <= this.Na, c.e.QT);
        this.Na -= b;
        if (a !== this.Na) {
            var d = c.Ab.BYTES_PER_ELEMENT, e = (a + b) * d;
            this.Of.set(this.Of.subarray(e, e + (this.Na - a) * d), a * d)
        }
        this.dirty = !0
    },uO: function() {
        this.Na = this.Cc.length = 0
    },Ik: function(a) {
        this.dirty = a
    },GF: function(a) {
        if (a == this.vd)
            return !0;
        var b = c.Ab.BYTES_PER_ELEMENT, d = this.vd;
        this.Na = Math.min(this.Na, a);
        var e = this.vd = 0 | a, f = this.Na;
        if (null == this.Cc)
            for (this.Cc = [], this.Zc = new ArrayBuffer(b * e), this.Of = new Uint8Array(this.Zc), a = 0; a < e; a++)
                this.Cc = new c.Ab(null, 
                null, null, null, this.Zc, a * b);
        else {
            var g, h, k = this.Cc;
            if (e > d) {
                g = [];
                h = new ArrayBuffer(b * e);
                for (a = 0; a < f; a++)
                    g[a] = new c.Ab(k[a].N, k[a].F, k[a].I, k[a].O, h, a * b);
                for (; a < e; a++)
                    g[a] = new c.Ab(null, null, null, null, h, a * b)
            } else
                for (f = Math.max(f, e), g = [], h = new ArrayBuffer(b * e), a = 0; a < f; a++)
                    g[a] = new c.Ab(k[a].N, k[a].F, k[a].I, k[a].O, h, a * b);
            this.Of = new Uint8Array(h);
            this.Cc = g;
            this.Zc = h
        }
        null == this.kb ? this.kb = new Uint16Array(6 * e) : e > d ? (b = new Uint16Array(6 * e), b.set(this.kb, 0), this.kb = b) : this.kb = this.kb.subarray(0, 6 * e);
        this.oL();
        this.Iv();
        return this.dirty = !0
    },tN: function(a) {
        this.Na += a
    },aO: function(a, b, d) {
        if (void 0 === d) {
            if (d = b, b = this.Na - a, c.assert(d + (this.Na - a) <= this.vd, c.e.MT), 0 === b)
                return
        } else if (c.assert(d + b <= this.Na, c.e.NT), c.assert(a < this.Na, c.e.OT), a == d)
            return;
        var e = c.Ab.BYTES_PER_ELEMENT, f = a * e, g = b * e, h = this.Of, k = h.subarray(f, f + g), m = d * e;
        d < a ? (b = d * e, h.set(h.subarray(b, b + (a - d) * e), b + g)) : (b = (a + b) * e, h.set(h.subarray(b, b + (d - a) * e), f));
        h.set(k, m);
        this.dirty = !0
    },CM: function(a, b) {
        for (var d = b * c.Ab.BYTES_PER_ELEMENT, e = new Uint8Array(this.Zc, 
        a * c.Ab.BYTES_PER_ELEMENT, d), f = 0; f < d; f++)
            e[f] = 0
    },xM: function() {
        this.wM(this.Na)
    },D8: function() {
        var a = c.k;
        this.tc && (this.tc[0] && a.deleteBuffer(this.tc[0]), this.tc[1] && a.deleteBuffer(this.tc[1]));
        this.Tl && a.deleteBuffer(this.Tl)
    }});
n = c.$j.prototype;
c.f(n, "totalQuads", n.lN);
c.f(n, "capacity", n.JM);
c.f(n, "quads", n.WM, n.$O);
c.$j.create = function(a, b) {
    return new c.$j(a, b)
};
c.A === c.$ && (c.assert("function" === typeof c.B.tA, c.e.Mc, "TexturesWebGL.js"), c.B.tA(), delete c.B.tA);
c.assert("function" === typeof c.B.Az, c.e.Mc, "TexturesPropertyDefine.js");
c.B.Az();
delete c.B.Az;
c.vl = c.q.extend({sb: "Scene",ctor: function() {
        c.q.prototype.ctor.call(this);
        this.$i = !0;
        this.el(0.5, 0.5);
        this.Zd(c.C.K)
    }});
c.vl.create = function() {
    return new c.vl
};
c.ez = c.vl.extend({zk: null,qK: 0,TA: 0,Wc: null,sb: "LoaderScene",M: function() {
        var a = this.GU = c.fd.create(c.color(32, 32, 32, 255));
        a.U(c.Gp.SD);
        this.L(a, 0);
        var b = this.Wc = c.V.create("\u52a0\u8f7d\u4e2d 0%", "Arial", 24);
        b.U(c.Fj(c.Gp.bE, N(0, 0)));
        b.bb(c.color(200, 200, 200));
        a.L(this.Wc, 10);
        return !0
    },o8: function(a, b) {
        var d = new c.da;
        d.Ed(a);
        d.Vb();
        d = c.P.create(d);
        d.up(c.qb());
        d.x = b.x;
        d.y = b.y;
        this.GU.L(d, 10)
    },ca: function() {
        c.q.prototype.ca.call(this);
        this.gy(this.vL, 0.3)
    },yb: function() {
        c.q.prototype.yb.call(this);
        this.Wc.nc("Loading... 0%")
    },Q0: function(a, b) {
        "string" == typeof a && (a = [a]);
        this.O2 = a || [];
        this.Xd = b
    },vL: function() {
        var a = this;
        a.pG(a.vL);
        var b = a.O2;
        a.qK = b.length;
        a.TA = 0;
        c.W.load(b, function(b, e) {
            a.TA = e
        }, function() {
            a.Xd && a.Xd()
        });
        a.gy(a.JL)
    },JL: function() {
        var a = this.TA, b = this.qK, d;
        d = Math.min(a / b * 100 | 0, 100);
        this.Wc.nc("\u52a0\u8f7d\u4e2d " + d + "%");
        a >= b && this.pG(this.JL)
    }});
c.ez.BF = function(a, b) {
    var d = c;
    d.Vs || (d.Vs = new c.ez, d.Vs.M());
    d.Vs.Q0(a, b);
    c.C.IF(d.Vs);
    return d.Vs
};
c.B.cz = function() {
    var a = c.sd.prototype;
    a.XL = function() {
    };
    a.BP = function() {
    };
    a.S = c.q.prototype.S
};
c.B.pA = function() {
    var a = c.fd.prototype;
    a.gw = null;
    a.cD = null;
    a.FD = null;
    a.RA = null;
    a.eD = null;
    a.dD = null;
    a.ctor = function(a, d, e) {
        this.eD = new ArrayBuffer(32);
        this.dD = new ArrayBuffer(16);
        var f = this.eD, g = this.dD, h = c.Zb.BYTES_PER_ELEMENT, k = c.wf.BYTES_PER_ELEMENT;
        this.gw = [new c.Zb(0, 0, f, 0), new c.Zb(0, 0, f, h), new c.Zb(0, 0, f, 2 * h), new c.Zb(0, 0, f, 3 * h)];
        this.cD = [c.color(0, 0, 0, 255, g, 0), c.color(0, 0, 0, 255, g, k), c.color(0, 0, 0, 255, g, 2 * k), c.color(0, 0, 0, 255, g, 3 * k)];
        this.FD = c.k.createBuffer();
        this.RA = c.k.createBuffer();
        c.xf.prototype.ctor.call(this);
        this.o = new c.Qj(c.gc, c.fc);
        c.fd.prototype.M.call(this, a, d, e)
    };
    a.Zd = function(a, d) {
        var e = this.gw;
        void 0 === d ? (e[1].x = a.width, e[2].y = a.height, e[3].x = a.width, e[3].y = a.height) : (e[1].x = a, e[2].y = d, e[3].x = a, e[3].y = d);
        this.HA();
        c.sd.prototype.Zd.call(this, a, d)
    };
    a.lj = function(a) {
        var d = this.gw;
        d[1].x = a;
        d[3].x = a;
        this.HA();
        c.sd.prototype.lj.call(this, a)
    };
    a.kj = function(a) {
        var d = this.gw;
        d[2].y = a;
        d[3].y = a;
        this.HA();
        c.sd.prototype.kj.call(this, a)
    };
    a.ec = function() {
        for (var a = this.Ea, d = this.Aa, e = this.cD, f = 0; 4 > f; f++)
            e[f].r = 
            a.r, e[f].g = a.g, e[f].b = a.b, e[f].a = d;
        this.NI()
    };
    a.Z = function(a) {
        a = a || c.k;
        c.Xs(this);
        c.Gc(c.Md | c.Au);
        a.bindBuffer(a.ARRAY_BUFFER, this.FD);
        a.vertexAttribPointer(c.pb, 2, a.FLOAT, !1, 0, 0);
        a.bindBuffer(a.ARRAY_BUFFER, this.RA);
        a.vertexAttribPointer(c.we, 4, a.UNSIGNED_BYTE, !0, 0, 0);
        c.Fh(this.o.src, this.o.T);
        a.drawArrays(a.TRIANGLE_STRIP, 0, 4)
    };
    a.HA = function() {
        var a = c.k;
        a.bindBuffer(a.ARRAY_BUFFER, this.FD);
        a.bufferData(a.ARRAY_BUFFER, this.eD, a.STATIC_DRAW)
    };
    a.NI = function() {
        var a = c.k;
        a.bindBuffer(a.ARRAY_BUFFER, 
        this.RA);
        a.bufferData(a.ARRAY_BUFFER, this.dD, a.STATIC_DRAW)
    }
};
c.B.qA = function() {
    var a = c.sl.prototype;
    a.Z = c.fd.prototype.Z;
    a.ec = function() {
        var a = this.jk, d = c.cl(a);
        if (0 !== d) {
            var e = Math.sqrt(2), a = N(a.x / d, a.y / d);
            this.Wu && (a = c.Ci(a, 1 / (Math.abs(a.x) + Math.abs(a.y)) * e));
            var f = this.Aa / 255, d = this.Ea, g = this.Be, d = {r: d.r,g: d.g,b: d.b,a: this.oo * f}, f = {r: g.r,g: g.g,b: g.b,a: this.Hn * f}, h = this.cD, g = h[0], k = h[1], m = h[2], h = h[3];
            g.r = f.r + (e + a.x + a.y) / (2 * e) * (d.r - f.r);
            g.g = f.g + (e + a.x + a.y) / (2 * e) * (d.g - f.g);
            g.b = f.b + (e + a.x + a.y) / (2 * e) * (d.b - f.b);
            g.a = f.a + (e + a.x + a.y) / (2 * e) * (d.a - f.a);
            k.r = f.r + (e - a.x + 
            a.y) / (2 * e) * (d.r - f.r);
            k.g = f.g + (e - a.x + a.y) / (2 * e) * (d.g - f.g);
            k.b = f.b + (e - a.x + a.y) / (2 * e) * (d.b - f.b);
            k.a = f.a + (e - a.x + a.y) / (2 * e) * (d.a - f.a);
            m.r = f.r + (e + a.x - a.y) / (2 * e) * (d.r - f.r);
            m.g = f.g + (e + a.x - a.y) / (2 * e) * (d.g - f.g);
            m.b = f.b + (e + a.x - a.y) / (2 * e) * (d.b - f.b);
            m.a = f.a + (e + a.x - a.y) / (2 * e) * (d.a - f.a);
            h.r = f.r + (e - a.x - a.y) / (2 * e) * (d.r - f.r);
            h.g = f.g + (e - a.x - a.y) / (2 * e) * (d.g - f.g);
            h.b = f.b + (e - a.x - a.y) / (2 * e) * (d.b - f.b);
            h.a = f.a + (e - a.x - a.y) / (2 * e) * (d.a - f.a);
            this.NI()
        }
    }
};
c.B.xz = function() {
    var a = c.xf.prototype;
    c.f(a, "opacityModifyRGB", a.re, a.Hd);
    c.f(a, "opacity", a.Oe, a.za);
    c.f(a, "cascadeOpacity", a.Qs, a.sp);
    c.f(a, "color", a.Ne, a.bb);
    c.f(a, "cascadeColor", a.Ps, a.rp)
};
c.B.vz = function() {
    var a = c.fd.prototype;
    c.f(a, "width", a.ah, a.lj);
    c.f(a, "height", a.wk, a.kj)
};
c.B.wz = function() {
    var a = c.sl.prototype;
    c.f(a, "startColor", a.Zw, a.We);
    c.f(a, "endColor", a.Uw, a.Ue);
    c.f(a, "startOpacity", a.q0, a.M3);
    c.f(a, "endOpacity", a.D_, a.l3);
    c.f(a, "vector", a.w0, a.V3)
};
c.sd = c.q.extend({Il: !1,Pu: null,sb: "Layer",ctor: function() {
        var a = c.q.prototype;
        a.ctor.call(this);
        this.$i = !0;
        a.el.call(this, 0.5, 0.5);
        a.Zd.call(this, c.Et)
    },XL: null,BP: null,uda: function() {
        return this.Il
    },S: null});
c.sd.create = function() {
    return new c.sd
};
if (c.A === c.Da) {
    var T = c.sd.prototype;
    T.XL = function() {
        if (!this.Il) {
            this.Il = this.tg = !0;
            this.Si = this;
            for (var a = this.s, b = 0, d = a.length; b < d; b++)
                a[b].JC(this);
            this.Pu || (this.Pu = new c.$P)
        }
    };
    T.BP = function() {
        if (this.Il) {
            this.Il = !1;
            this.tg = !0;
            this.Si = null;
            for (var a = this.s, b = 0, d = a.length; b < d; b++)
                a[b].JC(null)
        }
    };
    T.S = function(a) {
        if (this.Il) {
            a = a || c.k;
            var b, d = this.s, e = d.length;
            if (this.yc && 0 !== e) {
                var f = this.Pu;
                a.save();
                this.transform(a);
                if (this.tg) {
                    b = this.pB();
                    b.width |= 0;
                    b.height |= 0;
                    var g = f.ye;
                    f.zO(b.width, b.height);
                    g.translate(0 - b.x, b.height + b.y);
                    var h = f.hb;
                    f.U(h.x + b.x, h.y + b.y);
                    this.Sc();
                    for (b = 0; b < e; b++)
                        d[b].S(g);
                    this.tg = !1
                }
                f.S(a);
                this.arrivalOrder = 0;
                a.restore()
            }
        } else
            c.q.prototype.S.call(this, a)
    };
    T.pB = function() {
        var a = null;
        if (!this.s || 0 === this.s.length)
            return S(0, 0, 10, 10);
        for (var b = this.s, d = 0; d < b.length; d++) {
            var e = b[d];
            e && e.yc && (a ? (e = e.qr()) && (a = c.Yx(a, e)) : a = e.qr())
        }
        return a
    };
    T = null
} else
    c.assert("function" === typeof c.B.cz, c.e.Mc, "CCLayerWebGL.js"), c.B.cz(), delete c.B.cz;
c.xf = c.sd.extend({vb: !0,Aa: 255,Td: 255,Ea: null,bc: null,ce: !1,wd: !1,sb: "LayerRGBA",ctor: function() {
        c.sd.prototype.ctor.call(this);
        this.Ea = c.color(255, 255, 255, 255);
        this.bc = c.color(255, 255, 255, 255)
    },M: function() {
        var a = c.sd.prototype;
        this.$i = !0;
        a.el.call(this, 0.5, 0.5);
        a.Zd.call(this, c.Et);
        this.cascadeColor = this.cascadeOpacity = !1;
        return !0
    },Oe: function() {
        return this.Td
    },LM: function() {
        return this.Aa
    },za: function(a) {
        this.Aa = this.Td = a;
        var b = 255, d = this.Rb;
        d && d.vb && d.cascadeOpacity && (b = d.Aa);
        this.Jb(b);
        this.Ea.a = 
        this.bc.a = a
    },Jb: function(a) {
        this.Aa = 0 | this.Td * a / 255;
        if (this.ce) {
            a = this.s;
            for (var b, d = 0; d < a.length; d++)
                (b = a[d]) && b.vb && b.Jb(this.Aa)
        }
    },Qs: function() {
        return this.ce
    },sp: function(a) {
        this.ce !== a && ((this.ce = a) ? this.jr() : this.ZA())
    },jr: function() {
        var a = 255, b = this.Rb;
        b && b.vb && b.cascadeOpacity && (a = b.Aa);
        this.Jb(a)
    },ZA: function() {
        this.Aa = this.Td;
        for (var a = this.s, b, d = 0; d < a.length; d++)
            (b = a[d]) && b.vb && b.Jb(255)
    },Ne: function() {
        var a = this.bc;
        return c.color(a.r, a.g, a.b, a.a)
    },zm: function() {
        var a = this.Ea;
        return c.color(a.r, 
        a.g, a.b)
    },bb: function(a) {
        var b = this.Ea, d = this.bc;
        b.r = d.r = a.r;
        b.g = d.g = a.g;
        b.b = d.b = a.b;
        b = (b = this.Rb) && b.vb && b.cascadeColor ? b.zm() : c.color.WHITE;
        this.Mb(b);
        void 0 === a.a || a.qs || this.za(a.a)
    },Mb: function(a) {
        var b = this.Ea, d = this.bc;
        b.r = 0 | d.r * a.r / 255;
        b.g = 0 | d.g * a.g / 255;
        b.b = 0 | d.b * a.b / 255;
        if (this.wd) {
            a = this.s;
            for (var e = 0; e < a.length; e++)
                (d = a[e]) && d.vb && d.Mb(b)
        }
    },Ps: function() {
        return this.wd
    },rp: function(a) {
        this.wd !== a && ((this.wd = a) ? this.ir() : this.YA())
    },ir: function() {
        var a;
        a = (a = this.Rb) && a.vb && a.cascadeColor ? 
        a.zm() : c.color.WHITE;
        this.Mb(a)
    },YA: function() {
        var a = this.Ea, b = this.bc;
        a.r = b.r;
        a.g = b.g;
        a.b = b.b;
        var a = this.s, b = c.color.WHITE, d, e;
        for (e = 0; e < a.length; e++)
            (d = a[e]) && d.vb && d.Mb(b)
    },L: function(a, b, d) {
        c.q.prototype.L.call(this, a, b, d);
        this.wd && this.ir();
        this.ce && this.jr()
    },Hd: function() {
    },re: function() {
        return !1
    }});
c.assert("function" === typeof c.B.xz, c.e.Mc, "CCLayerPropertyDefine.js");
c.B.xz();
delete c.B.xz;
c.fd = c.xf.extend({o: null,sb: "LayerColor",Ah: function() {
        return this.o
    },L9: function(a, b) {
        this.width = a;
        this.height = b
    },K9: function(a) {
        this.width = a
    },J9: function(a) {
        this.height = a
    },Hd: function() {
    },re: function() {
        return !1
    },bb: function(a) {
        c.xf.prototype.bb.call(this, a);
        this.ec()
    },za: function(a) {
        c.xf.prototype.za.call(this, a);
        this.ec()
    },$n: !1,ctor: null,M: function(a, b, d) {
        c.A !== c.Da && (this.shaderProgram = c.Jd.mc(c.pu));
        var e = c.C.K;
        a = a || c.color(0, 0, 0, 255);
        b = void 0 === b ? e.width : b;
        d = void 0 === d ? e.height : d;
        e = this.Ea;
        e.r = a.r;
        e.g = a.g;
        e.b = a.b;
        e = this.bc;
        e.r = a.r;
        e.g = a.g;
        e.b = a.b;
        this.Td = this.Aa = a.a;
        a = c.fd.prototype;
        a.Zd.call(this, b, d);
        a.ec.call(this);
        return !0
    },Te: function(a, b) {
        this.o = void 0 === b ? a : {src: a,T: b};
        c.A === c.Da && (this.$n = this.o && 1 == this.o.src && 771 == this.o.T)
    },lj: null,kj: null,ec: null,Mb: function(a) {
        c.xf.prototype.Mb.call(this, a);
        this.ec()
    },Jb: function(a) {
        c.xf.prototype.Jb.call(this, a);
        this.ec()
    },Z: null});
c.fd.create = function(a, b, d) {
    return new c.fd(a, b, d)
};
c.A === c.Da ? (n = c.fd.prototype, n.ctor = function(a, b, d) {
    c.xf.prototype.ctor.call(this);
    this.o = new c.Qj(c.gc, c.fc);
    c.fd.prototype.M.call(this, a, b, d)
}, n.lj = c.xf.prototype.lj, n.kj = c.xf.prototype.kj, n.ec = function() {
}, n.Z = function(a) {
    a = a || c.k;
    var b = c.view, d = this.Ea;
    a.fillStyle = "rgba(" + (0 | d.r) + "," + (0 | d.g) + "," + (0 | d.b) + "," + this.Aa / 255 + ")";
    a.fillRect(0, 0, this.width * b.pa, -this.height * b.Ra);
    c.Xf++
}, n.S = function(a) {
    if (this.Il) {
        a = a || c.k;
        var b, d = this.s, e = d.length;
        if (this.yc) {
            var f = this.Pu;
            a.save();
            this.transform(a);
            if (this.tg) {
                b = this.pB();
                b.width |= 0;
                b.height |= 0;
                var g = f.ye;
                f.zO(b.width, b.height);
                var h = f.hb, k = this.xa;
                if (this.$i)
                    g.translate(0 - b.x + k.x, b.height + b.y - k.y), f.U(h.x + b.x - k.x, h.y + b.y - k.y);
                else {
                    var m = this.hb, p = k.x - m.x, k = k.y - m.y;
                    g.translate(0 - b.x + p, b.height + b.y - k);
                    f.U(h.x + b.x - p, h.y + b.y - k)
                }
                if (0 < e) {
                    this.Sc();
                    for (b = 0; b < e; b++)
                        if (h = d[b], 0 > h.wb)
                            h.S(g);
                        else
                            break;
                    for (this.Z(g); b < e; b++)
                        d[b].S(g)
                } else
                    this.Z(g);
                this.tg = !1
            }
            f.S(a);
            this.arrivalOrder = 0;
            a.restore()
        }
    } else
        c.q.prototype.S.call(this, a)
}, n.pB = function() {
    var a = 
    S(0, 0, this.Q.width, this.Q.height), b = this.fp(), a = c.Cz(a, this.fp());
    if (!this.s || 0 === this.s.length)
        return a;
    for (var d = this.s, e = 0; e < d.length; e++) {
        var f = d[e];
        f && f.yc && (f = f.qr(b), a = c.Yx(a, f))
    }
    return a
}, n = null) : (c.assert("function" === typeof c.B.pA, c.e.Mc, "CCLayerWebGL.js"), c.B.pA(), delete c.B.pA);
c.assert("function" === typeof c.B.vz, c.e.Mc, "CCLayerPropertyDefine.js");
c.B.vz();
delete c.B.vz;
c.sl = c.fd.extend({sh: null,Be: null,oo: 255,Hn: 255,jk: null,Wu: !1,Tn: null,Sn: null,sb: "LayerGradient",ctor: function(a, b, d) {
        c.fd.prototype.ctor.call(this);
        this.sh = c.color(0, 0, 0, 255);
        this.Be = c.color(0, 0, 0, 255);
        this.jk = N(0, -1);
        this.Hn = this.oo = 255;
        this.Tn = N(0, 0);
        this.Sn = N(0, 0);
        c.sl.prototype.M.call(this, a, b, d)
    },M: function(a, b, d) {
        a = a || c.color(0, 0, 0, 255);
        b = b || c.color(0, 0, 0, 255);
        d = d || N(0, -1);
        var e = this.sh, f = this.Be;
        e.r = a.r;
        e.g = a.g;
        e.b = a.b;
        this.oo = a.a;
        f.r = b.r;
        f.g = b.g;
        f.b = b.b;
        this.Hn = b.a;
        this.jk = d;
        this.Wu = !0;
        this.Tn = 
        N(0, 0);
        this.Sn = N(0, 0);
        c.fd.prototype.M.call(this, c.color(a.r, a.g, a.b, 255));
        c.sl.prototype.ec.call(this);
        return !0
    },Zd: function(a, b) {
        c.fd.prototype.Zd.call(this, a, b);
        this.ec()
    },lj: function(a) {
        c.fd.prototype.lj.call(this, a);
        this.ec()
    },kj: function(a) {
        c.fd.prototype.kj.call(this, a);
        this.ec()
    },Zw: function() {
        return this.bc
    },We: function(a) {
        this.color = a
    },Ue: function(a) {
        this.Be = a;
        this.ec()
    },Uw: function() {
        return this.Be
    },M3: function(a) {
        this.oo = a;
        this.ec()
    },q0: function() {
        return this.oo
    },l3: function(a) {
        this.Hn = 
        a;
        this.ec()
    },D_: function() {
        return this.Hn
    },V3: function(a) {
        this.jk.x = a.x;
        this.jk.y = a.y;
        this.ec()
    },w0: function() {
        return N(this.jk.x, this.jk.y)
    },wda: function() {
        return this.Wu
    },fia: function(a) {
        this.Wu = a;
        this.ec()
    },c8: null,ec: null});
c.sl.create = function(a, b, d) {
    return new c.sl(a, b, d)
};
c.A === c.Da ? (n = c.sl.prototype, n.Z = function(a) {
    a = a || c.k;
    this.$n && (a.globalCompositeOperation = "lighter");
    a.save();
    var b = c.view, d = this.Aa / 255, e = this.width * b.pa, b = this.height * b.Ra, f = a.createLinearGradient(this.Tn.x, this.Tn.y, this.Sn.x, this.Sn.y), g = this.Ea, h = this.Be;
    f.addColorStop(0, "rgba(" + Math.round(g.r) + "," + Math.round(g.g) + "," + Math.round(g.b) + "," + (this.oo / 255 * d).toFixed(4) + ")");
    f.addColorStop(1, "rgba(" + Math.round(h.r) + "," + Math.round(h.g) + "," + Math.round(h.b) + "," + (this.Hn / 255 * d).toFixed(4) + ")");
    a.fillStyle = 
    f;
    a.fillRect(0, 0, e, -b);
    0 != this.G8 && a.rotate(this.H8);
    a.restore()
}, n.ec = function() {
    var a = this.jk, b = 0.5 * this.width, d = 0.5 * this.height;
    this.Tn.x = b * -a.x + b;
    this.Tn.y = d * a.y - d;
    this.Sn.x = b * a.x + b;
    this.Sn.y = d * -a.y - d
}, n = null) : (c.assert("function" === typeof c.B.qA, c.e.Mc, "CCLayerWebGL.js"), c.B.qA(), delete c.B.qA);
c.assert("function" === typeof c.B.wz, c.e.Mc, "CCLayerPropertyDefine.js");
c.B.wz();
delete c.B.wz;
c.dz = c.sd.extend({Gl: 0,he: null,sb: "LayerMultiplex",ctor: function(a) {
        c.sd.prototype.ctor.call(this);
        a && c.dz.prototype.M0.call(this, a)
    },M0: function(a) {
        0 < a.length && null == a[a.length - 1] && c.log(c.e.rR);
        this.he = a;
        this.Gl = 0;
        this.L(this.he[this.Gl]);
        return !0
    },kka: function(a) {
        a >= this.he.length ? c.log(c.e.sR) : (this.removeChild(this.he[this.Gl], !0), this.Gl = a, this.L(this.he[a]))
    },lka: function(a) {
        a >= this.he.length ? c.log(c.e.tR) : (this.removeChild(this.he[this.Gl], !0), this.he[this.Gl] = null, this.Gl = a, this.L(this.he[a]))
    },
    b9: function(a) {
        a ? this.he.push(a) : c.log(c.e.qR)
    }});
c.dz.create = function() {
    return new c.dz(arguments)
};
c.B.rA = function() {
    var a = c.P.prototype;
    a.bD = function(a) {
        this.Ja(!0);
        this.ub(a.Eh(), a.ke, a.kf);
        this.Od()
    };
    a.Hd = function(a) {
        this.Qa !== a && (this.Qa = a, this.Ct())
    };
    a.Jb = function(a) {
        c.ia.prototype.Jb.call(this, a);
        this.Ct()
    };
    a.ctor = function(a, d, e) {
        c.ia.prototype.ctor.call(this);
        this.Kk = !1;
        this.Cb = N(0, 0);
        this.uh = N(0, 0);
        this.o = {src: c.gc,T: c.fc};
        this.ha = S(0, 0, 0, 0);
        this.Sb = new c.Ab;
        this.Vv = c.k.createBuffer();
        this.na = this.De = !0;
        this.tL(a, d, e)
    };
    a.Te = function(a, d) {
        var e = this.o;
        void 0 === d ? (e.src = a.src, e.T = a.T) : (e.src = 
        a, e.T = d)
    };
    a.M = function() {
        if (0 < arguments.length)
            return this.Zk(arguments[0], arguments[1]);
        c.ia.prototype.M.call(this);
        this.dirty = this.kh = !1;
        this.Qa = !0;
        this.o.src = c.gc;
        this.o.T = c.fc;
        this.texture = null;
        this.na = !0;
        this.Ob = this.Pb = !1;
        this.anchorY = this.anchorX = 0.5;
        this.Cb.x = 0;
        this.Cb.y = 0;
        this.ci = !1;
        var a = {r: 255,g: 255,b: 255,a: 255};
        this.Sb.F.t = a;
        this.Sb.O.t = a;
        this.Sb.N.t = a;
        this.Sb.I.t = a;
        this.De = !0;
        this.ub(S(0, 0, 0, 0), !1, P(0, 0));
        return !0
    };
    a.ra = function(a, d, e) {
        c.assert(0 != arguments.length, c.e.aT);
        e = e || !1;
        if (!c.ia.prototype.M.call(this))
            return !1;
        this.X = null;
        this.dirty = this.kh = !1;
        this.Qa = !0;
        this.o.src = c.gc;
        this.o.T = c.fc;
        this.Ob = this.Pb = !1;
        this.anchorY = this.anchorX = 0.5;
        this.Cb.x = 0;
        this.Cb.y = 0;
        this.ci = !1;
        var f = c.color(255, 255, 255, 255), g = this.Sb;
        g.F.t = f;
        g.O.t = f;
        g.N.t = f;
        g.I.t = f;
        this.na = f = a.uc;
        if (!f)
            return this.$c = e || !1, d && (f = this.ha, f.x = d.x, f.y = d.y, f.width = d.width, f.height = d.height), a.Wd(this.rw, this), !0;
        d || (d = S(0, 0, a.width, a.height));
        a && (e ? (f = d.x + d.height, g = d.y + d.width) : (f = d.x + d.width, g = d.y + d.height), f > a.width && c.error(c.e.Ez, a.url), g > a.height && 
        c.error(c.e.Dz, a.url));
        this.texture = a;
        this.ub(d, e);
        this.batchNode = null;
        return this.De = !0
    };
    a.rw = function(a) {
        if (!this.na) {
            this.na = !0;
            var d = this.ha;
            d ? c.vC(d) && (d.width = a.width, d.height = a.height) : d = S(0, 0, a.width, a.height);
            this.texture = a;
            this.ub(d, this.$c);
            this.batchNode = this.X;
            this.De = !0;
            this.Od()
        }
    };
    a.ub = function(a, d, e) {
        this.$c = d || !1;
        this.Zd(e || a);
        this.eG(a);
        this.lL(a);
        a = this.uh;
        this.Ob && (a.x = -a.x);
        this.Pb && (a.y = -a.y);
        var f = this.ha;
        this.Cb.x = a.x + (this.Q.width - f.width) / 2;
        this.Cb.y = a.y + (this.Q.height - f.height) / 
        2;
        if (this.X)
            this.dirty = !0;
        else {
            a = 0 + this.Cb.x;
            d = 0 + this.Cb.y;
            e = a + f.width;
            var f = d + f.height, g = this.Sb;
            g.F.i = {x: a,y: d,z: 0};
            g.O.i = {x: e,y: d,z: 0};
            g.N.i = {x: a,y: f,z: 0};
            g.I.i = {x: e,y: f,z: 0};
            this.De = !0
        }
    };
    a.Ze = function() {
        if (this.dirty) {
            var a = this.Sb, d = this.Rb;
            if (!this.yc || d && d != this.X && d.Kk)
                a.O.i = {x: 0,y: 0,z: 0}, a.N.i = {x: 0,y: 0,z: 0}, a.I.i = {x: 0,y: 0,z: 0}, a.F.i = {x: 0,y: 0,z: 0}, this.Kk = !0;
            else {
                this.Kk = !1;
                var e = this.fm = d && d != this.X ? c.ll(this.Re(), d.fm) : this.Re(), f = this.ha, d = this.Cb.x, g = this.Cb.y, h = d + f.width, k = g + f.height, 
                m = e.Ka, p = e.La, r = e.a, s = e.b, u = e.H, t = -e.D, e = d * r - g * t + m, f = d * s + g * u + p, v = h * r - g * t + m, g = h * s + g * u + p, w = h * r - k * t + m, h = h * s + k * u + p, m = d * r - k * t + m, d = d * s + k * u + p, k = this.ms;
                c.Jz || (e |= 0, f |= 0, v |= 0, g |= 0, w |= 0, h |= 0, m |= 0, d |= 0);
                a.F.i = {x: e,y: f,z: k};
                a.O.i = {x: v,y: g,z: k};
                a.N.i = {x: m,y: d,z: k};
                a.I.i = {x: w,y: h,z: k}
            }
            this.textureAtlas.Ay(a, this.atlasIndex);
            this.dirty = this.kh = !1
        }
        this.ci && this.sg(this.s, c.q.Bf.Ze);
        c.Uj && c.Ae.Yd([N(this.Sb.F.i.x, this.Sb.F.i.y), N(this.Sb.O.i.x, this.Sb.O.i.y), N(this.Sb.I.i.x, this.Sb.I.i.y), N(this.Sb.N.i.x, this.Sb.N.i.y)], 
        4, !0)
    };
    a.L = function(a, d, e) {
        c.assert(a, c.e.SS);
        null == d && (d = a.wb);
        null == e && (e = a.tag);
        if (this.X) {
            if (!(a instanceof c.P)) {
                c.log(c.e.QS);
                return
            }
            a.texture.Vd !== this.textureAtlas.texture.Vd && c.log(c.e.RS);
            this.X.appendChild(a);
            this.Ud || this.TC()
        }
        c.ia.prototype.L.call(this, a, d, e);
        this.ci = !0
    };
    a.za = function(a) {
        c.ia.prototype.za.call(this, a);
        this.Ct()
    };
    a.bb = function(a) {
        c.ia.prototype.bb.call(this, a);
        this.Ct()
    };
    a.Mb = function(a) {
        c.ia.prototype.Mb.call(this, a);
        this.Ct()
    };
    a.hl = function(a) {
        var d = this;
        "string" == typeof a && 
        (a = c.Lh.xj(a), c.assert(a, c.e.jT));
        d.Ja(!0);
        var e = a.ka;
        d.uh.x = e.x;
        d.uh.y = e.y;
        e = a.Oa();
        a.na || (d.na = !1, a.Wd(function(a) {
            d.na = !0;
            var b = a.Oa();
            b != d.J && (d.texture = b);
            d.ub(a.Eh(), a.ke, a.kf);
            d.Od()
        }, d));
        e != d.J && (d.texture = e);
        d.$c = a.ke;
        d.ub(a.Eh(), d.$c, a.kf)
    };
    a.JN = function(a) {
        return c.rO(a.Eh(), this.ha) && a.Oa().getName() == this.J.getName() && c.zF(a.ka, this.uh)
    };
    a.fl = function(a) {
        if (this.X = a)
            this.fm = {a: 1,b: 0,D: 0,H: 1,Ka: 0,La: 0}, this.textureAtlas = this.X.textureAtlas;
        else {
            this.atlasIndex = c.P.$y;
            this.textureAtlas = 
            null;
            this.dirty = this.kh = !1;
            a = this.Cb.x;
            var d = this.Cb.y, e = a + this.ha.width, f = d + this.ha.height, g = this.Sb;
            g.F.i = {x: a,y: d,z: 0};
            g.O.i = {x: e,y: d,z: 0};
            g.N.i = {x: a,y: f,z: 0};
            g.I.i = {x: e,y: f,z: 0};
            this.De = !0
        }
    };
    a.ob = function(a) {
        a && "string" === typeof a ? (a = c.Ba.Ac(a), this.ob(a), a = a.Ch(), this.ub(S(0, 0, a.width, a.height))) : (c.assert(!a || a instanceof c.da, c.e.lT), this.X && this.X.texture != a ? c.log(c.e.kT) : (this.shaderProgram = a ? c.Jd.mc(c.Qi) : c.Jd.mc(c.pu), this.X || this.J == a || (this.J = a, this.Tf())))
    };
    a.Z = function() {
        if (this.na) {
            var a = 
            c.k, d = this.J;
            d ? d.uc && (this.Fb.Jc(), this.Fb.Ye(), c.Fh(this.o.src, this.o.T), c.PE(0, d), c.Gc(c.yl), a.bindBuffer(a.ARRAY_BUFFER, this.Vv), this.De && (a.bufferData(a.ARRAY_BUFFER, this.Sb.Ew, a.DYNAMIC_DRAW), this.De = !1), a.vertexAttribPointer(0, 3, a.FLOAT, !1, 24, 0), a.vertexAttribPointer(1, 4, a.UNSIGNED_BYTE, !0, 24, 12), a.vertexAttribPointer(2, 2, a.FLOAT, !1, 24, 16), a.drawArrays(a.TRIANGLE_STRIP, 0, 4)) : (this.Fb.Jc(), this.Fb.Ye(), c.Fh(this.o.src, this.o.T), c.qe(null), c.Gc(c.Md | c.Au), a.bindBuffer(a.ARRAY_BUFFER, this.Vv), 
            this.De && (c.k.bufferData(c.k.ARRAY_BUFFER, this.Sb.Ew, c.k.STATIC_DRAW), this.De = !1), a.vertexAttribPointer(c.pb, 3, a.FLOAT, !1, 24, 0), a.vertexAttribPointer(c.we, 4, a.UNSIGNED_BYTE, !0, 24, 12), a.drawArrays(a.TRIANGLE_STRIP, 0, 4));
            c.Xf++;
            if (0 !== c.Uj || this.XC)
                1 === c.Uj || this.XC ? (a = this.Sb, c.Ae.Yd([N(a.N.i.x, a.N.i.y), N(a.F.i.x, a.F.i.y), N(a.O.i.x, a.O.i.y), N(a.I.i.x, a.I.i.y)], 4, !0)) : 2 === c.Uj && (a = this.kN(), d = this.Cb, c.Ae.Yd([N(d.x, d.y), N(d.x + a.width, d.y), N(d.x + a.width, d.y + a.height), N(d.x, d.y + a.height)], 4, !0))
        }
    };
    delete a
};
c.B.yz = function() {
    var a = c.P.prototype;
    c.f(a, "opacityModifyRGB", a.re, a.Hd);
    c.f(a, "opacity", a.Oe, a.za);
    c.f(a, "color", a.Ne, a.bb);
    c.f(a, "flippedX", a.Z0, a.iy);
    c.f(a, "flippedY", a.$0, a.QF);
    c.f(a, "offsetX", a.PV);
    c.f(a, "offsetY", a.QV);
    c.f(a, "texture", a.Oa, a.ob);
    c.f(a, "textureRectRotated", a.f1);
    c.f(a, "batchNode", a.yE, a.fl);
    c.f(a, "quad", a.e0)
};
c.Oo = function(a) {
    function b() {
        var b = c.Oo, e = a.width, h = a.height;
        d[0].width = e;
        d[0].height = h;
        d[1].width = e;
        d[1].height = h;
        d[2].width = e;
        d[2].height = h;
        d[3].width = e;
        d[3].height = h;
        b.canvas.width = e;
        b.canvas.height = h;
        var k = b.canvas.getContext("2d");
        k.drawImage(a, 0, 0);
        b.lG.width = e;
        b.lG.height = h;
        for (var k = k.getImageData(0, 0, e, h).data, m = 0; 4 > m; m++) {
            var p = d[m].getContext("2d");
            p.getImageData(0, 0, e, h).data;
            b.uP.drawImage(a, 0, 0);
            for (var r = b.uP.getImageData(0, 0, e, h), s = r.data, u = 0; u < k.length; u += 4)
                s[u] = 0 === m ? k[u] : 0, s[u + 
                1] = 1 === m ? k[u + 1] : 0, s[u + 2] = 2 === m ? k[u + 2] : 0, s[u + 3] = k[u + 3];
            p.putImageData(r, 0, 0)
        }
        a.onload = null
    }
    if (a.cM)
        return a.cM;
    var d = [c.Kb("canvas"), c.Kb("canvas"), c.Kb("canvas"), c.Kb("canvas")];
    try {
        b()
    } catch (e) {
        a.onload = b
    }
    return a.cM = d
};
c.Oo.canvas = c.Kb("canvas");
c.Oo.lG = c.Kb("canvas");
c.Oo.uP = c.Oo.lG.getContext("2d");
c.saa = function(a, b, d) {
    d || (d = S(0, 0, a.width, a.height), d = c.Ij(d));
    var e = c.Kb("canvas"), f = e.getContext("2d");
    e.width != d.width && (e.width = d.width);
    e.height != d.height && (e.height = d.height);
    f.save();
    f.drawImage(a, d.x, d.y, d.width, d.height, 0, 0, d.width, d.height);
    f.globalCompositeOperation = "source-in";
    f.globalAlpha = b.a / 255;
    f.fillStyle = "rgb(" + b.r + "," + b.g + "," + b.b + ")";
    f.fillRect(0, 0, d.width, d.height);
    f.restore();
    return e
};
c.Po = function(a, b, d, e, f) {
    e || (e = S(0, 0, a.width, a.height));
    a = d.r / 255;
    var g = d.g / 255;
    d = d.b / 255;
    var h = Math.min(e.width, b[0].width), k = Math.min(e.height, b[0].height), m;
    f ? (m = f.getContext("2d"), m.clearRect(0, 0, h, k)) : (f = c.Kb("canvas"), f.width = h, f.height = k, m = f.getContext("2d"));
    m.save();
    m.globalCompositeOperation = "lighter";
    var p = m.globalAlpha;
    0 < a && (m.globalAlpha = a * p, m.drawImage(b[0], e.x, e.y, h, k, 0, 0, h, k));
    0 < g && (m.globalAlpha = g * p, m.drawImage(b[1], e.x, e.y, h, k, 0, 0, h, k));
    0 < d && (m.globalAlpha = d * p, m.drawImage(b[2], e.x, 
    e.y, h, k, 0, 0, h, k));
    1 > a + g + d && (m.globalAlpha = p, m.drawImage(b[3], e.x, e.y, h, k, 0, 0, h, k));
    m.restore();
    return f
};
c.kE = function(a, b) {
    if (!a)
        return null;
    if (!b)
        return a;
    var d = c.Kb("canvas");
    d.width = b.width;
    d.height = b.height;
    var e = d.getContext("2d");
    e.translate(d.width / 2, d.height / 2);
    e.rotate(-1.5707963267948966);
    e.drawImage(a, b.x, b.y, b.height, b.width, -b.height / 2, -b.width / 2, b.height, b.width);
    return d
};
c.P = c.ia.extend({vb: !0,dirty: !1,atlasIndex: 0,textureAtlas: null,X: null,kh: null,ci: null,Kk: !1,fm: null,o: null,J: null,ha: null,$c: !1,Cb: null,uh: null,Qa: !1,Ob: !1,Pb: !1,na: !1,fb: null,TB: null,sb: "Sprite",wt: function() {
        return this.na
    },Wd: function(a, b) {
        this.fb || (this.fb = []);
        this.fb.push({yh: a,Wf: b})
    },Od: function() {
        if (this.fb) {
            for (var a = this.fb, b = 0, d = a.length; b < d; b++) {
                var e = a[b];
                e.yh.call(e.Wf, this)
            }
            a.length = 0
        }
    },dF: function() {
        return this.dirty
    },LO: function(a) {
        this.dirty = a
    },f1: function() {
        return this.$c
    },Ro: function() {
        return this.atlasIndex
    },
    MF: function(a) {
        this.atlasIndex = a
    },kN: function() {
        return S(this.ha.x, this.ha.y, this.ha.width, this.ha.height)
    },LE: function() {
        return this.textureAtlas
    },aG: function(a) {
        this.textureAtlas = a
    },Qba: function() {
        return this.Cb
    },PV: function() {
        return this.Cb.x
    },QV: function() {
        return this.Cb.y
    },Ah: function() {
        return this.o
    },wi: function(a) {
        c.assert(a, c.e.YS);
        a.na || (this.na = !1, a.Wd(this.bD, this));
        var b = c.A === c.Da ? !1 : a.ke, b = this.ra(a.Oa(), a.Eh(), b);
        this.hl(a);
        return b
    },bD: null,nda: function(a) {
        c.assert(a, c.e.ZS);
        var b = 
        c.Lh.xj(a);
        c.assert(b, a + c.e.$S);
        return this.wi(b)
    },Dka: function(a) {
        this.textureAtlas = a.textureAtlas;
        this.X = a
    },eG: function(a) {
        this.ha.x = a.x;
        this.ha.y = a.y;
        this.ha.width = a.width;
        this.ha.height = a.height
    },Sc: function() {
        if (this.Ud) {
            var a = this.s, b = a.length, d, e, f;
            for (d = 1; d < b; d++) {
                f = a[d];
                for (e = d - 1; 0 <= e; ) {
                    if (f.wb < a[e].wb)
                        a[e + 1] = a[e];
                    else if (f.wb === a[e].wb && f.arrivalOrder < a[e].arrivalOrder)
                        a[e + 1] = a[e];
                    else
                        break;
                    e--
                }
                a[e + 1] = f
            }
            this.X && this.sg(a, c.q.Bf.Sc);
            this.Ud = !1
        }
    },op: function(a, b) {
        c.assert(a, c.e.eT);
        -1 === 
        this.s.indexOf(a) ? c.log(c.e.dT) : b !== a.zIndex && (this.X && !this.Ud && (this.TC(), this.X.xO(!0)), c.q.prototype.op.call(this, a, b))
    },removeChild: function(a, b) {
        this.X && this.X.Km(a);
        c.q.prototype.removeChild.call(this, a, b)
    },Jg: function(a) {
        var b = this.s, d = this.X;
        if (d && null != b)
            for (var e = 0, f = b.length; e < f; e++)
                d.Km(b[e]);
        c.q.prototype.Jg.call(this, a);
        this.ci = !1
    },MO: function(a) {
        this.dirty = this.kh = a;
        a = this.s;
        for (var b, d = a ? a.length : 0, e = 0; e < d; e++)
            b = a[e], b instanceof c.P && b.MO(!0)
    },Ja: function(a) {
        c.q.prototype.Ja.call(this);
        a || !this.X || this.kh || (this.ci ? this.MO(!0) : this.dirty = this.kh = !0)
    },hx: function(a) {
        this.X ? c.log(c.e.WS) : c.q.prototype.hx.call(this, a)
    },iy: function(a) {
        this.Ob != a && (this.Ob = a, this.ub(this.ha, this.$c, this.Q), this.Ja(!0))
    },QF: function(a) {
        this.Pb != a && (this.Pb = a, this.ub(this.ha, this.$c, this.Q), this.Ja(!0))
    },Z0: function() {
        return this.Ob
    },$0: function() {
        return this.Pb
    },Hd: null,re: function() {
        return this.Qa
    },Jb: null,oia: function(a, b) {
        c.assert(a, c.e.iT);
        var d = c.Dw.HM(a);
        d ? (d = d.Rd[b]) ? this.hl(d.xj()) : c.log(c.e.hT) : 
        c.log(c.e.gT)
    },yE: function() {
        return this.X
    },TC: function() {
        if (!this.Ud) {
            this.Ud = !0;
            for (var a = this.Rb; a && a != this.X; )
                a.TC(), a = a.parent
        }
    },Oa: function() {
        return this.J
    },Sb: null,Vv: null,De: !1,Vu: !1,$n: !1,ie: null,so: null,bB: null,ctor: null,tL: function(a, b, d) {
        if (void 0 === a)
            c.P.prototype.M.call(this);
        else if ("string" === typeof a)
            "#" === a[0] ? (a = c.Lh.xj(a.substr(1, a.length - 1)), this.wi(a)) : c.P.prototype.M.call(this, a, b);
        else if ("object" === typeof a)
            if (a instanceof c.da)
                this.ra(a, b, d);
            else if (a instanceof c.Af)
                this.wi(a);
            else if (a instanceof HTMLImageElement || a instanceof HTMLCanvasElement)
                b = new c.da, b.Ed(a), b.Vb(), this.ra(b)
    },e0: function() {
        return this.Sb
    },Te: null,M: null,Zk: function(a, b) {
        c.assert(a, c.e.XS);
        var d = c.Ba.Pm(a);
        if (d) {
            if (!b) {
                var e = d.Ch();
                b = S(0, 0, e.width, e.height)
            }
            return this.ra(d, b)
        }
        d = c.Ba.Ac(a);
        return this.ra(d, b || S(0, 0, d.Q.width, d.Q.height))
    },ra: null,rw: null,ub: null,Ze: null,L: null,Ct: function() {
        var a = this.Ea, b = this.Aa, a = {r: a.r,g: a.g,b: a.b,a: b};
        this.Qa && (a.r *= b / 255, a.g *= b / 255, a.b *= b / 255);
        b = this.Sb;
        b.F.t = 
        a;
        b.O.t = a;
        b.N.t = a;
        b.I.t = a;
        this.X && (this.atlasIndex != c.P.$y ? this.textureAtlas.Ay(b, this.atlasIndex) : this.dirty = !0);
        this.De = !0
    },za: null,bb: null,Mb: null,hl: null,i3: function(a) {
        c.log(c.e.fT);
        this.hl(a)
    },JN: null,DZ: function() {
        return c.Af.create(this.J, c.lt(this.ha), this.$c, c.n2(this.uh), c.b4(this.Q))
    },fl: null,ob: null,Tf: function() {
        this.X ? c.log(c.e.PS) : this.J && this.J.ui() ? (this.o.src = c.gc, this.o.T = c.fc, this.opacityModifyRGB = !0) : (this.o.src = c.SRC_ALPHA, this.o.T = c.ONE_MINUS_SRC_ALPHA, this.opacityModifyRGB = 
        !1)
    },lk: function() {
        var a, b = this.J, d = this.so;
        b && d.Fp && this.ie && (a = b.Bb) && (b = c.Ba.$w(this.ie.Bb)) && (this.Vu = !0, a instanceof HTMLCanvasElement && !this.$c && !this.TB ? c.Po(a, b, this.Ea, d, a) : (a = c.Po(a, b, this.Ea, d), b = new c.da, b.Ed(a), b.Vb(), this.texture = b))
    },lL: function(a) {
        a = c.lt(a);
        var b = this.X ? this.textureAtlas.texture : this.J;
        if (b) {
            var d = b.pixelsWidth, e = b.pixelsHeight, f, g = this.Sb;
            this.$c ? (c.Ym ? (b = (2 * a.x + 1) / (2 * d), d = b + (2 * a.height - 2) / (2 * d), f = (2 * a.y + 1) / (2 * e), a = f + (2 * a.width - 2) / (2 * e)) : (b = a.x / d, d = (a.x + a.height) / 
            d, f = a.y / e, a = (a.y + a.width) / e), this.Ob && (e = f, f = a, a = e), this.Pb && (e = b, b = d, d = e), g.F.l.ea = b, g.F.l.fa = f, g.O.l.ea = b, g.O.l.fa = a, g.N.l.ea = d, g.N.l.fa = f, g.I.l.ea = d, g.I.l.fa = a) : (c.Ym ? (b = (2 * a.x + 1) / (2 * d), d = b + (2 * a.width - 2) / (2 * d), f = (2 * a.y + 1) / (2 * e), a = f + (2 * a.height - 2) / (2 * e)) : (b = a.x / d, d = (a.x + a.width) / d, f = a.y / e, a = (a.y + a.height) / e), this.Ob && (e = b, b = d, d = e), this.Pb && (e = f, f = a, a = e), g.F.l.ea = b, g.F.l.fa = a, g.O.l.ea = d, g.O.l.fa = a, g.N.l.ea = b, g.N.l.fa = f, g.I.l.ea = d, g.I.l.fa = f);
            this.De = !0
        }
    },Z: null});
c.P.create = function(a, b, d) {
    return new c.P(a, b, d)
};
c.P.$y = -1;
c.A === c.Da ? (n = c.P.prototype, n.bD = function(a) {
    this.Ja(!0);
    this.ub(a.Eh(), a.ke, a.kf);
    a = this.color;
    255 === a.r && 255 === a.g && 255 === a.b || this.lk();
    this.Od()
}, n.Hd = function(a) {
    this.Qa !== a && (this.Qa = a, this.Ja(!0))
}, n.Jb = function(a) {
    c.ia.prototype.Jb.call(this, a);
    this.oh()
}, n.ctor = function(a, b, d) {
    c.ia.prototype.ctor.call(this);
    this.Kk = !1;
    this.Cb = N(0, 0);
    this.uh = N(0, 0);
    this.o = {src: c.gc,T: c.fc};
    this.ha = S(0, 0, 0, 0);
    this.TB = !1;
    this.na = !0;
    this.so = {x: 0,y: 0,width: 0,height: 0,Fp: !1};
    this.bB = P(0, 0);
    this.tL(a, b, d)
}, n.Te = 
function(a, b) {
    var d = this.o;
    void 0 === b ? (d.src = a.src, d.T = a.T) : (d.src = a, d.T = b);
    this.$n = d && (d.src == c.SRC_ALPHA && d.T == c.ONE || d.src == c.ONE && d.T == c.ONE)
}, n.M = function() {
    if (0 < arguments.length)
        return this.Zk(arguments[0], arguments[1]);
    c.ia.prototype.M.call(this);
    this.dirty = this.kh = !1;
    this.Qa = !0;
    this.o.src = c.gc;
    this.o.T = c.fc;
    this.texture = null;
    this.na = !0;
    this.Ob = this.Pb = !1;
    this.anchorY = this.anchorX = 0.5;
    this.Cb.x = 0;
    this.Cb.y = 0;
    this.ci = !1;
    this.ub(S(0, 0, 0, 0), !1, P(0, 0));
    return !0
}, n.ra = function(a, b, d) {
    c.assert(0 != 
    arguments.length, c.e.fQ);
    if ((d = d || !1) && a.uc) {
        var e = a.Bb, e = c.kE(e, b), f = new c.da;
        f.Ed(e);
        f.Vb();
        a = f;
        this.ha = S(0, 0, b.width, b.height)
    }
    if (!c.ia.prototype.M.call(this))
        return !1;
    this.X = null;
    this.dirty = this.kh = !1;
    this.Qa = !0;
    this.o.src = c.gc;
    this.o.T = c.fc;
    this.Ob = this.Pb = !1;
    this.anchorY = this.anchorX = 0.5;
    this.Cb.x = 0;
    this.Cb.y = 0;
    this.ci = !1;
    this.na = e = a.uc;
    if (!e)
        return this.$c = d, b && (this.ha.x = b.x, this.ha.y = b.y, this.ha.width = b.width, this.ha.height = b.height), a.Wd(this.rw, this), !0;
    b || (b = S(0, 0, a.width, a.height));
    a && 
    (e = b.y + b.height, b.x + b.width > a.width && c.error(c.e.Ez, a.url), e > a.height && c.error(c.e.Dz, a.url));
    this.texture = this.ie = a;
    this.ub(b, d);
    this.batchNode = null;
    return !0
}, n.rw = function(a) {
    if (!this.na) {
        this.na = !0;
        var b = this.ha;
        b ? c.vC(b) && (b.width = a.width, b.height = a.height) : b = S(0, 0, a.width, a.height);
        this.texture = this.ie = a;
        this.ub(b, this.$c);
        this.batchNode = this.X;
        this.Od()
    }
}, n.ub = function(a, b, d) {
    this.$c = b || !1;
    this.Zd(d || a);
    this.eG(a);
    b = this.so;
    d = c.qb();
    b.x = 0 | a.x * d;
    b.y = 0 | a.y * d;
    b.width = 0 | a.width * d;
    b.height = 0 | a.height * 
    d;
    b.Fp = !(0 === b.width || 0 === b.height || 0 > b.x || 0 > b.y);
    a = this.uh;
    this.Ob && (a.x = -a.x);
    this.Pb && (a.y = -a.y);
    this.Cb.x = a.x + (this.Q.width - this.ha.width) / 2;
    this.Cb.y = a.y + (this.Q.height - this.ha.height) / 2;
    this.X && (this.dirty = !0)
}, n.Ze = function() {
    if (this.dirty) {
        var a = this.Rb;
        !this.yc || a && a != this.X && a.Kk ? this.Kk = !0 : (this.Kk = !1, this.fm = a && a != this.X ? c.ll(this.Re(), a.fm) : this.Re());
        this.dirty = this.kh = !1
    }
    this.ci && this.sg(this.s, c.q.Bf.Ze)
}, n.L = function(a, b, d) {
    c.assert(a, c.e.dQ);
    null == b && (b = a.wb);
    null == d && (d = a.tag);
    c.ia.prototype.L.call(this, a, b, d);
    this.ci = !0
}, n.za = function(a) {
    c.ia.prototype.za.call(this, a);
    this.oh()
}, n.bb = function(a) {
    var b = this.color;
    if (b.r !== a.r || b.g !== a.g || b.b !== a.b)
        c.ia.prototype.bb.call(this, a), this.lk(), this.oh()
}, n.Mb = function(a) {
    var b = this.color;
    c.ia.prototype.Mb.call(this, a);
    a = this.Ea;
    if (b.r !== a.r || b.g !== a.g || b.b !== a.b)
        this.lk(), this.oh()
}, n.hl = function(a) {
    var b = this;
    "string" == typeof a && (a = c.Lh.xj(a), c.assert(a, c.e.iQ));
    b.Ja(!0);
    var d = a.ka;
    b.uh.x = d.x;
    b.uh.y = d.y;
    b.$c = a.ke;
    var d = a.Oa(), 
    e = a.na;
    e || (b.na = !1, a.Wd(function(a) {
        b.na = !0;
        var d = a.Oa();
        d != b.J && (b.texture = d);
        b.ub(a.Eh(), a.ke, a.kf);
        b.Od()
    }, b));
    d != b.J && (b.texture = d);
    b.$c && (b.ie = d);
    b.ub(a.Eh(), b.$c, a.kf);
    b.Vu = !1;
    e && (a = b.color, 255 === a.r && 255 === a.g && 255 === a.b || b.lk())
}, n.JN = function(a) {
    return a.Oa() != this.J ? !1 : c.rO(a.Eh(), this.ha)
}, n.fl = function(a) {
    (this.X = a) ? (this.fm = {a: 1,b: 0,D: 0,H: 1,Ka: 0,La: 0}, this.textureAtlas = this.X.textureAtlas) : (this.atlasIndex = c.P.$y, this.textureAtlas = null, this.dirty = this.kh = !1)
}, n.ob = function(a) {
    a && "string" === 
    typeof a ? (a = c.Ba.Ac(a), this.ob(a), a = a.Ch(), this.ub(S(0, 0, a.width, a.height))) : (c.assert(!a || a instanceof c.da, c.e.jQ), this.J != a && (a && a.Bb instanceof HTMLImageElement && (this.ie = a), this.J = a))
}, n.Z = function(a) {
    if (this.na) {
        a = a || c.k;
        this.$n && (a.globalCompositeOperation = "lighter");
        var b = c.view.pa, d = c.view.Ra;
        a.globalAlpha = this.Aa / 255;
        var e = this.ha, f = this.Q, g = this.Cb, h = this.bB, k = 0 | g.x, m = -g.y - e.height, p = this.so;
        h.width = e.width * b;
        h.height = e.height * d;
        if (this.Ob || this.Pb)
            a.save(), this.Ob && (k = -g.x - e.width, a.scale(-1, 
            1)), this.Pb && (m = g.y, a.scale(1, -1));
        k *= b;
        m *= d;
        this.J && p.Fp ? (f = this.J.Bb, this.Vu ? a.drawImage(f, 0, 0, p.width, p.height, k, m, h.width, h.height) : a.drawImage(f, p.x, p.y, p.width, p.height, k, m, h.width, h.height)) : !this.J && p.Fp && (h = this.color, a.fillStyle = "rgba(" + h.r + "," + h.g + "," + h.b + ",1)", a.fillRect(k, m, f.width * b, f.height * d));
        1 === c.Uj || this.XC ? (a.strokeStyle = "rgba(0,255,0,1)", k /= b, m = -(m / d), c.Ae.Yd([N(k, m), N(k + e.width, m), N(k + e.width, m - e.height), N(k, m - e.height)], 4, !0)) : 2 === c.Uj && (a.strokeStyle = "rgba(0,255,0,1)", b = this.ha, 
        m = -m, c.Ae.Yd([N(k, m), N(k + b.width, m), N(k + b.width, m - b.height), N(k, m - b.height)], 4, !0));
        (this.Ob || this.Pb) && a.restore();
        c.Xf++
    }
}, delete n) : (c.assert("function" === typeof c.B.rA, c.e.Mc, "SpritesWebGL.js"), c.B.rA(), delete c.B.rA);
c.assert("function" === typeof c.B.yz, c.e.Mc, "SpritesPropertyDefine.js");
c.B.yz();
delete c.B.yz;
c.Ky = 29;
c.bf = c.q.extend({textureAtlas: null,o: null,yd: null,sb: "SpriteBatchNode",GY: function(a, b, d) {
        c.assert(a, c.e.JS);
        if (!(a instanceof c.P))
            return c.log(c.e.IS), null;
        a.atlasIndex = b;
        var e = 0, f = this.yd;
        if (f && 0 < f.length)
            for (var g = 0; g < f.length; g++) {
                var h = f[g];
                h && h.atlasIndex >= b && ++e
            }
        f.splice(e, 0, a);
        c.q.prototype.L.call(this, a, b, d);
        this.xO(!1);
        return this
    },LE: function() {
        return this.textureAtlas
    },aG: function(a) {
        a != this.textureAtlas && (this.textureAtlas = a)
    },A_: function() {
        return this.yd
    },Zk: function(a, b) {
        var d = c.Ba.Pm(a);
        d || (d = c.Ba.Ac(a));
        return this.ra(d, b)
    },oh: function() {
        this.tg = !0
    },M: function(a, b) {
        var d = c.Ba.Pm(a);
        d || (d = c.Ba.Ac(a));
        return this.ra(d, b)
    },kx: function() {
        var a = this.textureAtlas.capacity, b = Math.floor(4 * (a + 1) / 3);
        c.log(c.e.KS, a, b);
        this.textureAtlas.GF(b) || c.log(c.e.LS)
    },D2: function(a, b) {
        this.removeChild(this.s[a], b)
    },pO: function(a, b) {
        var d = a.children;
        if (d && 0 < d.length)
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                f && 0 > f.zIndex && (b = this.pO(f, b))
            }
        !a == this && (a.atlasIndex = b, b++);
        if (d && 0 < d.length)
            for (e = 0; e < d.length; e++)
                (f = 
                d[e]) && 0 <= f.zIndex && (b = this.pO(f, b));
        return b
    },UE: function(a) {
        var b = a.children;
        return b && 0 != b.length ? this.UE(b[b.length - 1]) : a.atlasIndex
    },Q1: function(a) {
        var b = a.children;
        return b && 0 != b.length ? this.Q1(b[b.length - 1]) : a.atlasIndex
    },WY: function(a, b) {
        var d = a.parent, e = d.children, f = e.indexOf(a), g = null;
        0 < f && f < c.cA && (g = e[f - 1]);
        return d == this ? 0 == f ? 0 : this.UE(g) + 1 : 0 == f ? 0 > b ? d.atlasIndex : d.atlasIndex + 1 : 0 > g.zIndex && 0 > b || 0 <= g.zIndex && 0 <= b ? this.UE(g) + 1 : d.atlasIndex + 1
    },xO: function(a) {
        this.Ud = a
    },Te: function(a, b) {
        this.o = 
        void 0 === b ? a : {src: a,T: b}
    },Ah: function() {
        return this.o
    },op: function(a, b) {
        c.assert(a, c.e.OS);
        -1 === this.s.indexOf(a) ? c.log(c.e.NS) : b !== a.zIndex && (c.q.prototype.op.call(this, a, b), this.Ja())
    },removeChild: function(a, b) {
        null != a && (-1 === this.s.indexOf(a) ? c.log(c.e.MS) : (this.Km(a), c.q.prototype.removeChild.call(this, a, b)))
    },IW: null,Pk: null,S8: !1,ie: null,ctor: null,br: function(a, b) {
        c.q.prototype.ctor.call(this);
        var d;
        b = b || c.Ky;
        "string" == typeof a ? (d = c.Ba.Pm(a)) || (d = c.Ba.Ac(a)) : a instanceof c.da && (d = a);
        d && this.ra(d, 
        b)
    },cr: function(a, b) {
        c.q.prototype.ctor.call(this);
        this.IW = new c.ba;
        var d;
        b = b || c.Ky;
        "string" == typeof a ? (d = c.Ba.Pm(a)) || (d = c.Ba.Ac(a)) : a instanceof c.da && (d = a);
        d && this.ra(d, b)
    },GP: null,vY: function(a, b) {
        c.assert(a, c.e.kQ);
        a instanceof c.P ? (a.batchNode = this, a.atlasIndex = b, a.dirty = !0, a.Ze()) : c.log(c.e.Iy)
    },wY: function(a, b) {
        c.assert(a, c.e.Iy);
        if (a instanceof c.P) {
            for (var d = this.textureAtlas.capacity; b >= d || d == this.textureAtlas.totalQuads; )
                this.kx();
            a.batchNode = this;
            a.atlasIndex = b;
            a.dirty = !0;
            a.Ze()
        } else
            c.log(c.e.Iy)
    },
    Ok: function(a, b) {
        var d = this.yd, e = this.textureAtlas, f = e.quads, g = d[a], h = c.uI(f[a]);
        d[b].atlasIndex = a;
        d[a] = d[b];
        e.Ay(f[b], a);
        d[b] = g;
        e.Ay(h, b)
    },px: null,rW: function(a, b) {
        c.assert(a, c.e.hQ);
        a instanceof c.P ? (a.batchNode = this, a.atlasIndex = b, a.dirty = !0, a.Ze(), this.s.splice(b, 0, a)) : c.log(c.e.gQ)
    },sW: function(a, b) {
        c.assert(a, c.e.cT);
        if (a instanceof c.P) {
            for (var d = this.textureAtlas; b >= d.capacity || d.capacity === d.totalQuads; )
                this.kx();
            a.batchNode = this;
            a.atlasIndex = b;
            d.cF(a.quad, b);
            a.dirty = !0;
            a.Ze()
        } else
            c.log(c.e.bT)
    },
    HL: function(a, b) {
        var d = 0, e = a.children;
        e && (d = e.length);
        var f = 0;
        if (0 === d)
            f = a.atlasIndex, a.atlasIndex = b, a.arrivalOrder = 0, f != b && this.Ok(f, b), b++;
        else {
            f = !0;
            0 <= e[0].zIndex && (f = a.atlasIndex, a.atlasIndex = b, a.arrivalOrder = 0, f != b && this.Ok(f, b), b++, f = !1);
            for (d = 0; d < e.length; d++) {
                var g = e[d];
                f && 0 <= g.zIndex && (f = a.atlasIndex, a.atlasIndex = b, a.arrivalOrder = 0, f != b && this.Ok(f, b), b++, f = !1);
                b = this.HL(g, b)
            }
            f && (f = a.atlasIndex, a.atlasIndex = b, a.arrivalOrder = 0, f != b && this.Ok(f, b), b++)
        }
        return b
    },Tf: function() {
        this.textureAtlas.texture.ui() || 
        (this.o.src = c.SRC_ALPHA, this.o.T = c.ONE_MINUS_SRC_ALPHA)
    },ra: null,DB: function(a) {
        this.s = [];
        this.yd = [];
        this.o = new c.Qj(c.gc, c.fc);
        this.Pk = this.ie = a;
        return !0
    },EB: function(a, b) {
        this.s = [];
        this.yd = [];
        this.o = new c.Qj(c.gc, c.fc);
        b = b || c.Ky;
        this.textureAtlas = new c.$j;
        this.textureAtlas.ra(a, b);
        this.Tf();
        this.shaderProgram = c.Jd.mc(c.Qi);
        return !0
    },bF: function(a, b) {
        a.batchNode = this;
        a.atlasIndex = b;
        a.dirty = !0;
        var d = this.textureAtlas;
        d.totalQuads >= d.capacity && this.kx();
        d.cF(a.quad, b);
        this.yd.splice(b, 0, a);
        var d = b + 
        1, e = this.yd;
        if (e && 0 < e.length)
            for (; d < e.length; d++)
                e[d].atlasIndex++;
        var e = a.children, f;
        if (e)
            for (d = 0, l = e.length || 0; d < l; d++)
                (f = e[d]) && this.bF(f, this.WY(f, f.zIndex))
    },appendChild: null,wU: function(a) {
        this.Ud = !0;
        a.batchNode = this;
        a.dirty = !0;
        this.yd.push(a);
        a.atlasIndex = this.yd.length - 1;
        a = a.children;
        for (var b = 0, d = a.length || 0; b < d; b++)
            this.appendChild(a[b])
    },xU: function(a) {
        this.Ud = !0;
        a.batchNode = this;
        a.dirty = !0;
        this.yd.push(a);
        var b = this.yd.length - 1;
        a.atlasIndex = b;
        var d = this.textureAtlas;
        d.totalQuads == d.capacity && 
        this.kx();
        d.cF(a.quad, b);
        a = a.children;
        b = 0;
        for (d = a.length || 0; b < d; b++)
            this.appendChild(a[b])
    },Km: null,kX: function(a) {
        a.batchNode = null;
        var b = this.yd, d = b.indexOf(a);
        if (-1 != d) {
            b.splice(d, 1);
            for (var e = b.length; d < e; ++d)
                b[d].atlasIndex--
        }
        if (a = a.children)
            for (b = 0, d = a.length || 0; b < d; b++)
                a[b] && this.Km(a[b])
    },lX: function(a) {
        this.textureAtlas.wO(a.atlasIndex);
        a.batchNode = null;
        var b = this.yd, d = b.indexOf(a);
        if (-1 != d) {
            b.splice(d, 1);
            for (var e = b.length; d < e; ++d)
                b[d].atlasIndex--
        }
        if (a = a.children)
            for (b = 0, d = a.length || 0; b < 
            d; b++)
                a[b] && this.Km(a[b])
    },Oa: null,rr: function() {
        return this.Pk
    },yB: function() {
        return this.textureAtlas.texture
    },ob: null,UC: function(a) {
        this.Pk = a;
        for (var b = this.s, d = 0; d < b.length; d++)
            b[d].texture = a
    },VC: function(a) {
        this.textureAtlas.texture = a;
        this.Tf()
    },S: null,hm: function(a) {
        var b = a || c.k;
        if (this.yc) {
            b.save();
            this.transform(a);
            var d = this.s;
            if (d)
                for (this.Sc(), a = 0; a < d.length; a++)
                    d[a] && d[a].S(b);
            b.restore()
        }
    },ns: function(a) {
        a = a || c.k;
        if (this.yc) {
            c.Dm();
            var b = this.grid;
            b && b.uf() && (b.ws(), this.wy());
            this.Sc();
            this.transform(a);
            this.Z(a);
            b && b.uf() && b.ts(this);
            c.Cm();
            this.arrivalOrder = 0
        }
    },L: null,yA: function(a, b, d) {
        c.assert(null != a, c.e.eQ);
        a instanceof c.P ? (b = null == b ? a.zIndex : b, d = null == d ? a.tag : d, c.q.prototype.L.call(this, a, b, d), this.appendChild(a), this.Ja()) : c.log(c.e.cQ)
    },uU: function(a, b, d) {
        c.assert(null != a, c.e.VS);
        a instanceof c.P ? a.texture != this.textureAtlas.texture ? c.log(c.e.US) : (b = null == b ? a.zIndex : b, d = null == d ? a.tag : d, c.q.prototype.L.call(this, a, b, d), this.appendChild(a), this.Ja()) : c.log(c.e.TS)
    },Jg: null,
    iX: function(a) {
        var b = this.yd;
        if (b && 0 < b.length)
            for (var d = 0, e = b.length; d < e; d++)
                b[d] && (b[d].batchNode = null);
        c.q.prototype.Jg.call(this, a);
        this.yd.length = 0
    },jX: function(a) {
        var b = this.yd;
        if (b && 0 < b.length)
            for (var d = 0, e = b.length; d < e; d++)
                b[d] && (b[d].batchNode = null);
        c.q.prototype.Jg.call(this, a);
        this.yd.length = 0;
        this.textureAtlas.uO()
    },Sc: null,cY: function() {
        if (this.Ud) {
            var a, b = 0, d = this.s, e = d.length, f;
            for (a = 1; a < e; a++) {
                var g = d[a], b = a - 1;
                for (f = d[b]; 0 <= b && (g.wb < f.wb || g.wb == f.wb && g.arrivalOrder < f.arrivalOrder); )
                    d[b + 
                    1] = f, b -= 1, f = d[b];
                d[b + 1] = g
            }
            0 < d.length && this.sg(d, c.q.Bf.Sc);
            this.Ud = !1
        }
    },dY: function() {
        if (this.Ud) {
            var a = this.s, b, d = 0, e = a.length, f;
            for (b = 1; b < e; b++) {
                var g = a[b], d = b - 1;
                for (f = a[d]; 0 <= d && (g.wb < f.wb || g.wb == f.wb && g.arrivalOrder < f.arrivalOrder); )
                    a[d + 1] = f, d -= 1, f = a[d];
                a[d + 1] = g
            }
            if (0 < a.length)
                for (this.sg(a, c.q.Bf.Sc), b = d = 0; b < a.length; b++)
                    d = this.HL(a[b], d);
            this.Ud = !1
        }
    },Z: null,Wi: function() {
        0 !== this.textureAtlas.totalQuads && (this.Fb.Jc(), this.Fb.Ye(), this.sg(this.s, c.q.Bf.Ze), c.Fh(this.o.src, this.o.T), this.textureAtlas.xM())
    }});
n = c.bf.prototype;
c.A === c.$ ? (n.ctor = n.cr, n.GP = n.wY, n.px = n.sW, n.ra = n.EB, n.appendChild = n.xU, n.Km = n.lX, n.Oa = n.yB, n.ob = n.VC, n.S = n.ns, n.L = n.uU, n.Jg = n.jX, n.Sc = n.dY, n.Z = n.Wi) : (n.ctor = n.br, n.GP = n.vY, n.px = n.rW, n.ra = n.DB, n.appendChild = n.wU, n.Km = n.kX, n.Oa = n.rr, n.ob = n.UC, n.S = n.hm, n.Jg = n.iX, n.L = n.yA, n.Sc = n.cY, n.Z = c.q.prototype.Z);
c.f(n, "texture", n.Oa, n.ob);
c.f(n, "descendants", n.A_);
c.bf.create = function(a, b) {
    return new c.bf(a, b)
};
c.$P = c.P.extend({ae: null,ye: null,ctor: function() {
        c.P.prototype.ctor.call(this);
        var a = document.createElement("canvas");
        a.width = a.height = 10;
        this.ae = a;
        this.ye = a.getContext("2d");
        var b = new c.da;
        b.Ed(a);
        b.Vb();
        this.ob(b)
    },Daa: function() {
        return this.ye
    },Caa: function() {
        return this.ae
    },zO: function(a, b) {
        void 0 === b && (b = a.height, a = a.width);
        var d = this.ae;
        d.width = a;
        d.height = b;
        this.Oa().Vb();
        this.ub(S(0, 0, a, b), !1)
    }});
c.lg = c.la.extend({mo: null,Qd: 0,yo: null,ctor: function(a, b, d) {
        this.mo = a || null;
        this.Qd = b || 0;
        this.yo = d || null
    },j: function() {
        var a = new c.lg;
        a.wi(this.mo.j(), this.Qd, this.yo);
        return a
    },Nw: function() {
        return c.j(this)
    },copy: function() {
        var a = new c.lg;
        a.wi(this.mo.j(), this.Qd, this.yo);
        return a
    },wi: function(a, b, d) {
        this.mo = a;
        this.Qd = b;
        this.yo = d;
        return !0
    },xj: function() {
        return this.mo
    },hl: function(a) {
        this.mo = a
    },Raa: function() {
        return this.Qd
    },lia: function(a) {
        this.Qd = a
    },Uca: function() {
        return this.yo
    },Rja: function(a) {
        this.yo = 
        a
    }});
c.lg.create = function(a, b, d) {
    return new c.lg(a, b, d)
};
c.Oj = c.la.extend({Rd: null,bj: 0,Vl: !1,n: 0,Qd: 0,ri: 0,ctor: function(a, b, d) {
        this.Rd = [];
        if (void 0 === a)
            this.EN(null, 0);
        else {
            var e = a[0];
            e && (e instanceof c.Af ? this.EN(a, b, d) : e instanceof c.lg && this.lx(a, b, d))
        }
    },nba: function() {
        return this.Rd
    },xia: function(a) {
        this.Rd = a
    },OD: function(a) {
        var b = new c.lg;
        b.wi(a, 1, null);
        this.Rd.push(b);
        this.ri++
    },RL: function(a) {
        a = c.Ba.Ac(a);
        var b = S(0, 0, 0, 0);
        b.width = a.width;
        b.height = a.height;
        a = c.Af.create(a, b);
        this.OD(a)
    },f9: function(a, b) {
        var d = c.Af.create(a, b);
        this.OD(d)
    },lx: function(a, 
    b, d) {
        c.Bo(a, c.lg);
        this.Qd = b;
        this.bj = void 0 === d ? 1 : d;
        this.ri = 0;
        b = this.Rd;
        for (d = b.length = 0; d < a.length; d++) {
            var e = a[d];
            b.push(e);
            this.ri += e.Qd
        }
        return !0
    },j: function() {
        var a = new c.Oj;
        a.lx(this.VI(), this.Qd, this.bj);
        a.nt(this.Vl);
        return a
    },Nw: function() {
        var a = new c.Oj;
        a.lx(this.VI(), this.Qd, this.bj);
        a.nt(this.Vl);
        return a
    },VI: function() {
        for (var a = [], b = 0; b < this.Rd.length; b++)
            a.push(this.Rd[b].j());
        return a
    },copy: function() {
        return this.Nw(null)
    },Dba: function() {
        return this.bj
    },Jia: function(a) {
        this.bj = a
    },nt: function(a) {
        this.Vl = 
        a
    },mca: function() {
        return this.Vl
    },So: function() {
        return this.ri * this.Qd
    },Qaa: function() {
        return this.Qd
    },f3: function(a) {
        this.Qd = a
    },Nca: function() {
        return this.ri
    },EN: function(a, b, d) {
        c.Bo(a, c.Af);
        this.bj = void 0 === d ? 1 : d;
        this.Qd = b || 0;
        this.ri = 0;
        b = this.Rd;
        b.length = 0;
        if (a) {
            for (d = 0; d < a.length; d++) {
                var e = a[d], f = new c.lg;
                f.wi(e, 1, null);
                b.push(f)
            }
            this.ri += a.length
        }
        return !0
    },by: function() {
    },Ei: function() {
    }});
c.Oj.create = function(a, b, d) {
    return new c.Oj(a, b, d)
};
c.Dw = {nn: {},OL: function(a, b) {
        this.nn[b] = a
    },nha: function(a) {
        a && this.nn[a] && delete this.nn[a]
    },HM: function(a) {
        return this.nn[a] ? this.nn[a] : null
    },tU: function(a, b) {
        var d = a.animations;
        if (d) {
            var e = 1, f = a.properties;
            if (f)
                for (var e = null != f.format ? parseInt(f.format) : e, f = f.spritesheets, g = c.Lh, h = c.path, k = 0; k < f.length; k++)
                    g.Bw(h.Eo(b, f[k]));
            switch (e) {
                case 1:
                    this.$W(d);
                    break;
                case 2:
                    this.aX(d);
                    break;
                default:
                    c.log(c.e.NY)
            }
        } else
            c.log(c.e.MY)
    },Y8: function(a) {
        c.assert(a, c.e.VY);
        var b = c.W.Dd(a);
        b ? this.tU(b, a) : c.log(c.e.UY)
    },
    $W: function(a) {
        var b = c.Lh, d;
        for (d in a) {
            var e = a[d], f = e.frames, e = parseFloat(e.delay) || 0, g = null;
            if (f) {
                for (var g = [], h = 0; h < f.length; h++) {
                    var k = b.xj(f[h]);
                    if (k) {
                        var m = new c.lg;
                        m.wi(k, 1, null);
                        g.push(m)
                    } else
                        c.log(c.e.PY, d, f[h])
                }
                0 === g.length ? c.log(c.e.QY, d) : (g.length != f.length && c.log(c.e.RY, d), g = c.Oj.create(g, e, 1), c.Dw.OL(g, d))
            } else
                c.log(c.e.OY, d)
        }
    },aX: function(a) {
        var b = c.Lh, d;
        for (d in a) {
            var e = a[d], f = parseInt(e.loops), f = e.loop ? c.rq : isNaN(f) ? 1 : f, g = e.restoreOriginalFrame && !0 == e.restoreOriginalFrame ? !0 : !1, 
            h = e.frames;
            if (h) {
                for (var k = [], m = 0; m < h.length; m++) {
                    var p = h[m], r = p.spriteframe, s = b.xj(r);
                    if (s) {
                        var r = parseFloat(p.delayUnits) || 0, p = p.notification, u = new c.lg;
                        u.wi(s, r, p);
                        k.push(u)
                    } else
                        c.log(c.e.TY, d, r)
                }
                e = parseFloat(e.delayPerUnit) || 0;
                h = new c.Oj;
                h.lx(k, e, f);
                h.nt(g);
                c.Dw.OL(h, d)
            } else
                c.log(c.e.SY, d)
        }
    },mk: function() {
        this.nn = {}
    }};
c.Af = c.la.extend({ka: null,kf: null,Fe: null,ke: !1,ha: null,Mf: null,Nf: null,J: null,ro: "",na: !1,lv: null,ctor: function(a, b, d, e, f) {
        this.ka = N(0, 0);
        this.Mf = N(0, 0);
        this.kf = P(0, 0);
        this.ke = !1;
        this.Nf = P(0, 0);
        this.ro = "";
        this.J = null;
        this.na = !1;
        void 0 !== a && void 0 !== b && (void 0 === d || void 0 === e || void 0 === f ? this.ra(a, b) : this.ra(a, b, d, e, f))
    },wt: function() {
        return this.na
    },Wd: function(a, b) {
        null == this.lv && (this.lv = []);
        this.lv.push({yh: a,Wf: b})
    },Od: function() {
        var a = this.lv;
        if (a) {
            for (var b = 0, d = a.length; b < d; b++) {
                var e = a[b];
                e.yh.call(e.Wf, this)
            }
            a.length = 0
        }
    },f0: function() {
        var a = this.Fe;
        return S(a.x, a.y, a.width, a.height)
    },hja: function(a) {
        this.Fe || (this.Fe = S(0, 0, 0, 0));
        this.Fe.x = a.x;
        this.Fe.y = a.y;
        this.Fe.width = a.width;
        this.Fe.height = a.height;
        this.ha = c.Ij(a)
    },Hda: function() {
        return this.ke
    },jja: function(a) {
        this.ke = a
    },Eh: function() {
        var a = this.ha;
        return S(a.x, a.y, a.width, a.height)
    },aP: function(a) {
        this.ha || (this.ha = S(0, 0, 0, 0));
        this.ha.x = a.x;
        this.ha.y = a.y;
        this.ha.width = a.width;
        this.ha.height = a.height;
        this.Fe = c.lt(this.ha)
    },Pba: function() {
        return this.Mf
    },
    Sia: function(a) {
        this.Mf.x = a.x;
        this.Mf.y = a.y;
        c.fC(this.Mf, this.ka)
    },Vba: function() {
        return this.Nf
    },Wia: function(a) {
        this.Nf.width = a.width;
        this.Nf.height = a.height
    },Uba: function() {
        return this.kf
    },Via: function(a) {
        this.kf.width = a.width;
        this.kf.height = a.height
    },Oa: function() {
        if (this.J)
            return this.J;
        if ("" !== this.ro) {
            var a = c.Ba.Ac(this.ro);
            a && (this.na = a.uc);
            return a
        }
        return null
    },ob: function(a) {
        if (this.J != a) {
            var b = a.uc;
            this.na = b;
            this.J = a;
            b || a.Wd(function(a) {
                this.na = !0;
                if (this.ke && c.A === c.Da) {
                    var b = a.Bb, b = c.kE(b, 
                    this.Eh()), f = new c.da;
                    f.Ed(b);
                    f.Vb();
                    this.ob(f);
                    b = this.Eh();
                    this.aP(S(0, 0, b.width, b.height))
                }
                b = this.ha;
                0 === b.width && 0 === b.height && (b = a.width, a = a.height, this.ha.width = b, this.ha.height = a, this.Fe = c.lt(this.ha), this.Nf.width = this.Fe.width, this.Nf.height = this.Fe.height, this.kf.width = b, this.kf.height = a);
                this.Od()
            }, this)
        }
    },SM: function() {
        return this.ka
    },ny: function(a) {
        this.ka.x = a.x;
        this.ka.y = a.y
    },j: function() {
        var a = new c.Af;
        a.ra(this.ro, this.Fe, this.ke, this.Mf, this.Nf);
        a.ob(this.J);
        return a
    },Nw: function() {
        var a = 
        new c.Af;
        a.ra(this.ro, this.Fe, this.ke, this.Mf, this.Nf);
        a.ob(this.J);
        return a
    },copy: function() {
        return this.Nw()
    },ra: function(a, b, d, e, f) {
        2 === arguments.length && (b = c.lt(b));
        e = e || N(0, 0);
        f = f || b;
        d = d || !1;
        "string" == typeof a ? (this.J = null, this.ro = a) : a instanceof c.da && this.ob(a);
        if (a = this.Oa()) {
            var g, h;
            d ? (g = b.x + b.height, h = b.y + b.width) : (g = b.x + b.width, h = b.y + b.height);
            g > a.width && c.error(c.e.Ez, a.url);
            h > a.height && c.error(c.e.Dz, a.url)
        }
        this.Fe = b;
        this.ha = c.Ij(b);
        this.Mf.x = e.x;
        this.Mf.y = e.y;
        c.fC(e, this.ka);
        this.Nf.width = 
        f.width;
        this.Nf.height = f.height;
        c.sL(f, this.kf);
        this.ke = d;
        return !0
    }});
c.Af.create = function(a, b, d, e, f) {
    return new c.Af(a, b, d, e, f)
};
c.Af.e8 = function(a, b, d, e, f) {
    var g = new c.Af;
    g.J = a;
    g.Fe = b;
    g.ha = c.Ij(b);
    g.Mf.x = e.x;
    g.Mf.y = e.y;
    c.fC(g.Mf, g.ka);
    g.Nf.width = f.width;
    g.Nf.height = f.height;
    c.sL(g.Nf, g.kf);
    g.ke = d;
    return g
};
c.Lh = {BI: /^\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*$/,gU: /^\s*\{\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*,\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*\}\s*$/,rh: {},nj: {},Pn: {},RK: function(a) {
        return (a = this.gU.exec(a)) ? S(parseFloat(a[1]), parseFloat(a[2]), parseFloat(a[3]), parseFloat(a[4])) : S(0, 0, 0, 0)
    },HK: function(a) {
        return (a = this.BI.exec(a)) ? N(parseFloat(a[1]), parseFloat(a[2])) : N(0, 0)
    },YC: function(a) {
        return (a = this.BI.exec(a)) ? P(parseFloat(a[1]), parseFloat(a[2])) : 
        P(0, 0)
    },GV: function(a) {
        var b = c.W.Dd(a);
        c.assert(b, c.e.f4, a);
        c.W.Ei(a);
        if (b.Wn)
            return this.Pn[a] = b;
        var d = b.frames, e = b.metadata || b.meta, b = {}, f = {}, g = 0;
        e && (g = e.format, g = 1 >= g.length ? parseInt(g) : g, f.G0 = e.textureFileName || e.textureFileName || e.image);
        for (var h in d) {
            var k = d[h];
            if (k) {
                e = {};
                if (0 == g) {
                    e.rect = S(k.x, k.y, k.width, k.height);
                    e.fy = !1;
                    e.offset = N(k.offsetX, k.offsetY);
                    var m = k.originalWidth, k = k.originalHeight;
                    m && k || c.log(c.e.e4);
                    m = Math.abs(m);
                    k = Math.abs(k);
                    e.size = P(m, k)
                } else if (1 == g || 2 == g)
                    e.rect = this.RK(k.frame), 
                    e.fy = k.rotated || !1, e.offset = this.HK(k.offset), e.size = this.YC(k.sourceSize);
                else if (3 == g) {
                    var m = this.YC(k.spriteSize), p = this.RK(k.textureRect);
                    m && (p = S(p.x, p.y, m.width, m.height));
                    e.rect = p;
                    e.fy = k.textureRotated || !1;
                    e.offset = this.HK(k.spriteOffset);
                    e.size = this.YC(k.spriteSourceSize);
                    e.JY = k.aliases
                } else
                    m = k.frame, p = k.sourceSize, h = k.filename || h, e.rect = S(m.x, m.y, m.w, m.h), e.fy = k.rotated || !1, e.offset = N(0, 0), e.size = P(p.w, p.h);
                b[h] = e
            }
        }
        return this.Pn[a] = {Wn: !0,frames: b,R1: f}
    },Bw: function(a, b) {
        c.assert(a, c.e.h4);
        var d = this.Pn[a] || c.W.Dd(a);
        if (d && d.frames) {
            var e = this.Pn[a] || this.GV(a), d = e.frames, e = e.R1;
            b ? b instanceof c.da || ("string" == typeof b ? b = c.Ba.Ac(b) : c.assert(0, c.e.i4)) : b = c.Ba.Ac(c.path.Eo(a, e.G0 || ".png"));
            var e = this.nj, f = this.rh, g;
            for (g in d) {
                var h = d[g], k = f[g];
                if (!k) {
                    k = c.Af.create(b, h.rect, h.fy, h.offset, h.size);
                    if (h = h.JY)
                        for (var m = 0, p = h.length; m < p; m++) {
                            var r = h[m];
                            e[r] && c.log(c.e.g4, r);
                            e[r] = g
                        }
                    c.A === c.Da && k.ke && k.Oa().uc && (h = k.Oa().Bb, h = c.kE(h, k.f0()), m = new c.da, m.Ed(h), m.Vb(), k.ob(m), h = k.ha, k.aP(S(0, 
                    0, h.width, h.height)));
                    f[g] = k
                }
            }
        }
    },V7: function(a) {
        a = a.frames;
        for (var b in a)
            this.rh[b] && c.log(c.e.d4, b)
    },OD: function(a, b) {
        this.rh[b] = a
    },uha: function() {
        this.rh = {};
        this.nj = {}
    },tha: function(a) {
        a && (this.nj[a] && delete this.nj[a], this.rh[a] && delete this.rh[a])
    },vha: function(a) {
        var b = this.rh, d = this.nj;
        if (a = this.Pn[a]) {
            a = a.frames;
            for (var e in a)
                if (b[e]) {
                    delete b[e];
                    for (var f in d)
                        d[f] == e && delete d[f]
                }
        }
    },wha: function(a) {
        var b = this.rh, d = this.nj, e;
        for (e in b) {
            var f = b[e];
            if (f && f.Oa() == a) {
                delete b[e];
                for (var g in d)
                    d[g] == 
                    e && delete d[g]
            }
        }
    },xj: function(a) {
        var b = this.rh[a];
        if (!b) {
            var d = this.nj[a];
            d && ((b = this.rh[d.toString()]) || delete this.nj[a])
        }
        b || c.log(c.e.j4, a);
        return b
    },mk: function() {
        this.rh = {};
        this.nj = {};
        this.Pn = {}
    }};
c.Ho = {W5: 0,U6: 1,INT: 2,S5: 3,t5: 4,Dr: 0,GW: 0,nD: !1,qw: !1,lD: !1,mD: !1,oD: !1,u8: 0,RB: 0,Du: "",js: {},Wn: !1,wr: function() {
        var a = this.js;
        a["cocos2d.x.version"] = c.Qy;
        a["cocos2d.x.compiled_with_profiler"] = !1;
        a["cocos2d.x.compiled_with_gl_state_cache"] = c.Wg;
        this.Wn = !0
    },Iba: function() {
        return this.Dr
    },Hba: function() {
        return this.GW
    },Jba: function() {
        return this.RB
    },fka: function() {
        return this.qw
    },gka: function() {
        return this.nD
    },eka: function() {
        return !1
    },hka: function() {
        return !1
    },bka: function() {
        return !1
    },cka: function() {
        return this.lD
    },
    dka: function() {
        return this.mD
    },ika: function() {
        return this.oD
    },Fo: function(a) {
        return -1 < this.Du.indexOf(a)
    },Wca: function(a, b) {
        this.Wn || this.wr();
        var d = this.js;
        return d[a] ? d[a] : b
    },Tja: function(a, b) {
        this.js[a] = b
    },RZ: function() {
        0 === c.Wg && (c.log(""), c.log(c.e.nZ), c.log(""))
    },p_: function() {
        if (c.A !== c.Da) {
            this.Wn || this.wr();
            var a = c.k, b = this.js;
            b["gl.vendor"] = a.getParameter(a.VENDOR);
            b["gl.renderer"] = a.getParameter(a.RENDERER);
            b["gl.version"] = a.getParameter(a.VERSION);
            this.Du = "";
            for (var d = a.getSupportedExtensions(), 
            e = 0; e < d.length; e++)
                this.Du += d[e] + " ";
            this.Dr = a.getParameter(a.MAX_TEXTURE_SIZE);
            b["gl.max_texture_size"] = this.Dr;
            this.RB = a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
            b["gl.max_texture_units"] = this.RB;
            this.nD = this.Fo("GL_IMG_texture_compression_pvrtc");
            b["gl.supports_PVRTC"] = this.nD;
            this.qw = !1;
            b["gl.supports_NPOT"] = this.qw;
            this.lD = this.Fo("GL_IMG_texture_format_BGRA888");
            b["gl.supports_BGRA8888"] = this.lD;
            this.mD = this.Fo("GL_EXT_discard_framebuffer");
            b["gl.supports_discard_framebuffer"] = this.mD;
            this.oD = this.Fo("vertex_array_object");
            b["gl.supports_vertex_array_object"] = this.oD;
            c.Go()
        }
    },Mfa: function(a) {
        this.Wn || this.wr();
        var b = c.W.Dd(a);
        if (!b)
            throw "Please load the resource first : " + a;
        c.assert(b, c.e.pZ, a);
        if (b = b.data)
            for (var d in b)
                this.js[d] = b[d];
        else
            c.log(c.e.oZ, a)
    }};
c.B.Ny = function() {
    c.U5 = c.la.extend({Bka: function() {
        }});
    var a = c.Wa.prototype;
    a.Om = function(a) {
        var d = this.K;
        this.kP();
        var e = this.ih, f = e.pe.x / e.pa, e = e.pe.y / e.Ra;
        switch (a) {
            case c.Wa.cS:
                c.yi(c.Li);
                c.Zo();
                f = new c.ba;
                c.jF(f, 0, d.width, 0, d.height, -1024, 1024);
                c.$o(f);
                c.yi(c.Ki);
                c.Zo();
                break;
            case c.Wa.iH:
                var g = this.Ks(), h = new c.ba, k = new c.ba;
                c.yi(c.Li);
                c.Zo();
                c.w1(h, d.width / d.height, 2 * g);
                c.$o(h);
                c.yi(c.Ki);
                c.Zo();
                g = c.bp(null, -f + d.width / 2, -e + d.height / 2, g);
                c.LN(k, g, c.bp(null, -f + d.width / 2, -e + d.height / 2, 0), c.bp(null, 
                0, 1, 0));
                c.$o(k);
                break;
            case c.Wa.dS:
                break;
            default:
                c.log(c.e.yQ)
        }
        this.mi = a;
        c.ta.dispatchEvent(this.mv);
        c.ZO()
    };
    a.KO = function(a) {
        var d = c.k;
        a ? (d.clearDepth(1), d.enable(d.DEPTH_TEST), d.depthFunc(d.LEQUAL)) : d.disable(d.DEPTH_TEST)
    };
    a.TF = function(a) {
        this.K.width = c.Xa.width;
        this.K.height = c.Xa.height;
        this.ih = a || c.view;
        a = c.Ho;
        a.p_();
        a.RZ();
        this.Cn();
        this.QO();
        c.ta && c.ta.se(!0)
    };
    a.mk = function() {
        var a = c.k;
        a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT)
    };
    a.FA = function() {
        c.Dm()
    };
    a.zA = function() {
        c.Cm()
    };
    a.Cn = function() {
        if (!c.Rh)
            this.cV();
        else if (null != c.Wa.RJ && !1 != c.Wa.RJ) {
            var a = new c.da;
            a.Ed(c.Wa.On);
            a.Vb();
            var d = c.view.BE().height / 320;
            0 === d && (d = this.K.height / 320);
            var e = new c.Rh;
            e.MC(!0);
            e.pd("00.0", a, 12, 32, ".");
            e.scale = d;
            this.Cf = e;
            e = new c.Rh;
            e.MC(!0);
            e.pd("0.000", a, 12, 32, ".");
            e.scale = d;
            this.Df = e;
            e = new c.Rh;
            e.MC(!0);
            e.pd("000", a, 12, 32, ".");
            e.scale = d;
            this.Gf = e;
            a = c.Ly;
            this.Gf.U(a.x, 34 * d + a.y);
            this.Df.U(a.x, 17 * d + a.y);
            this.Cf.U(a)
        }
    };
    a.cV = function() {
        var a = 0, a = this.K.width > this.K.height ? 0 | this.K.height / 320 * 24 : 0 | this.K.width / 320 * 24;
        this.Cf = 
        c.V.create("000.0", "Arial", a);
        this.Df = c.V.create("0.000", "Arial", a);
        this.Gf = c.V.create("0000", "Arial", a);
        a = c.Ly;
        this.Gf.U(this.Gf.width / 2 + a.x, 5 * this.Gf.height / 2 + a.y);
        this.Df.U(this.Df.width / 2 + a.x, 3 * this.Df.height / 2 + a.y);
        this.Cf.U(this.Cf.width / 2 + a.x, this.Cf.height / 2 + a.y)
    };
    a.qZ = function(a) {
        var d = new c.ba;
        c.QG(d);
        var e = new c.ba;
        c.v1(e, d);
        var f = this.ih.BE(), g = new c.tb;
        c.VN(g, new c.tb(2 * a.x / f.width - 1, 1 - 2 * a.y / f.height, d.c[14] / d.c[15]), e);
        return N(g.x, g.y)
    };
    a.sZ = function(a) {
        var d = new c.ba;
        c.QG(d);
        var e = 
        new c.tb;
        c.VN(e, new c.tb(a.x, a.y, 0), d);
        a = this.ih.BE();
        return N(a.width * (0.5 * e.x + 0.5), a.height * (0.5 * -e.y + 0.5))
    };
    a.Is = function() {
        return this.ih.Is()
    };
    a.OE = function() {
        return this.ih.OE()
    };
    a.Ks = function() {
        return this.K.height / 1.1566
    };
    a.kP = function() {
        var a = this.ih;
        if (a) {
            var d = this.K;
            a.Y3(-a.pe.x / a.pa, -a.pe.y / a.Ra, d.width, d.height)
        }
    };
    a.Rba = function() {
        return this.ih
    };
    a.hca = function() {
        return this.mi
    };
    a.X2 = function() {
        c.Fh(c.gc, c.fc)
    };
    a.QO = function() {
        this.X2();
        this.KO(!1);
        this.Om(this.mi);
        c.k.clearColor(0, 
        0, 0, 1)
    }
};
c.Xf = 0;
c.QG = function(a) {
    var b = new c.ba;
    c.ux(c.Li, b);
    var d = new c.ba;
    c.ux(c.Ki, d);
    c.zi(a, b, d)
};
c.Wa = c.la.extend({r8: !1,Gr: !1,kc: !1,Uv: !1,Gk: !1,Uq: 0,VB: 0,mi: 0,mn: 0,Zg: 1,hr: !1,nk: 0,kB: 0,Cf: null,Df: null,Gf: null,K: null,Ak: null,fi: null,Kv: null,ih: null,pi: null,sC: null,ad: null,Rd: 0,tw: 0,FC: 0,b8: null,Qf: null,rg: null,mv: null,eB: null,gB: null,fB: null,ctor: function() {
        var a = this;
        a.Ak = Date.now();
        c.ta.ND(c.Fc.Op, function() {
            a.Ak = Date.now()
        })
    },M: function() {
        this.VB = this.Uq = 1 / c.yZ;
        this.pi = [];
        this.mi = c.Wa.eS;
        this.sC = null;
        this.kB = this.mn = 0;
        this.hr = !1;
        this.tw = this.Rd = 0;
        this.Ak = Date.now();
        this.Uv = this.kc = !1;
        this.K = 
        P(0, 0);
        this.ih = null;
        this.Zg = 1;
        this.Qf = new c.xq;
        this.rg = c.tG ? new c.tG : null;
        this.Qf.KF(this.rg, c.xq.ju, !1);
        this.eB = new c.Ii(c.Wa.FQ);
        this.eB.setUserData(this);
        this.gB = new c.Ii(c.Wa.HQ);
        this.gB.setUserData(this);
        this.fB = new c.Ii(c.Wa.GQ);
        this.fB.setUserData(this);
        this.mv = new c.Ii(c.Wa.IQ);
        this.mv.setUserData(this);
        return !0
    },gZ: function() {
        var a = Date.now();
        this.Gr ? (this.nk = 0, this.Gr = !1) : this.nk = (a - this.Ak) / 1E3;
        0 < c.Fc.Me[c.Fc.Ug.As] && 0.2 < this.nk && (this.nk = 1 / 60);
        this.Ak = a
    },PZ: function() {
        this.gZ();
        this.kc || 
        (this.Qf.update(this.nk), c.ta.dispatchEvent(this.fB));
        this.mk();
        this.fi && this.w3();
        this.FA && this.FA();
        this.ad && (this.ad.S(), c.ta.dispatchEvent(this.gB));
        this.Kv && this.Kv.S();
        this.hr && this.bY();
        this.zA && this.zA();
        c.ta.dispatchEvent(this.eB);
        this.tw++;
        this.hr && this.IU()
    },FA: null,zA: null,end: function() {
        this.Uv = !0
    },Maa: function() {
        return this.Zg
    },Lba: function() {
        return this.Kv
    },$ca: function() {
        return this.K
    },Js: function() {
        return P(this.K.width * this.Zg, this.K.height * this.Zg)
    },pause: function() {
        this.kc || (this.VB = 
        this.Uq, this.HO(0.25), this.kc = !0)
    },Mga: function() {
        c.assert(this.ad, c.e.vQ);
        this.pi.pop();
        var a = this.pi.length;
        0 == a ? this.end() : (this.Gk = !0, this.fi = this.pi[a - 1])
    },t2: function() {
        c.Dw.mk();
        c.Lh.mk();
        c.Ba.mk()
    },u2: function() {
        this.Xk().xy();
        c.ta && c.ta.se(!1);
        this.ad && (this.ad.Zf(), this.ad.yb(), this.ad.Le());
        this.fi = this.ad = null;
        this.pi.length = 0;
        this.sP();
        this.t2();
        c.Go()
    },v2: function(a) {
        c.assert(a, c.e.KG);
        this.Gk = !1;
        this.pi.push(a);
        this.fi = a
    },IF: function(a) {
        c.assert(a, c.e.KG);
        if (this.ad) {
            var b = this.pi.length;
            0 === b ? (this.Gk = !0, this.pi[b] = a) : (this.Gk = !0, this.pi[b - 1] = a);
            this.fi = a
        } else
            this.v2(a), this.pP()
    },pp: function() {
        this.kc && (this.HO(this.VB), (this.Ak = Date.now()) || c.log(c.e.xQ), this.kc = !1, this.nk = 0)
    },hia: function(a) {
        a != this.Zg && (this.Zg = a, this.Cn())
    },kia: function() {
    },Oia: function(a) {
        this.Gr = a
    },w3: function() {
        var a = !1, b = !1;
        c.ua && (a = this.ad ? this.ad instanceof c.ua : !1, b = this.fi ? this.fi instanceof c.ua : !1);
        if (!b) {
            if (b = this.ad)
                b.Zf(), b.yb();
            this.Gk && b && b.Le()
        }
        this.ad = this.fi;
        this.fi = null;
        a || null == this.ad || 
        (this.ad.ca(), this.ad.Jh())
    },Qia: function(a) {
        this.Kv = a
    },z_: function() {
        return this.sC
    },g3: function(a) {
        this.sC = a
    },bY: function() {
        this.Rd++;
        this.mn += this.nk;
        this.Cf && this.Df && this.Gf ? (this.mn > c.sQ && (this.Df.string = this.FC.toFixed(3), this.kB = this.Rd / this.mn, this.mn = this.Rd = 0, this.Cf.string = this.kB.toFixed(1), this.Gf.string = (0 | c.Xf).toString()), this.Cf.S(), this.Df.S(), this.Gf.S()) : this.Cn();
        c.Xf = 0
    },Kda: function() {
        return this.Gk
    },oca: function() {
        return this.ad
    },yaa: function() {
        return this.Uq
    },xda: function() {
        return this.hr
    },
    j3: function(a) {
        this.hr = a
    },tca: function() {
        return this.FC
    },Cda: function() {
        return this.Gr
    },Eda: function() {
        return this.kc
    },Oca: function() {
        return this.tw
    },Nga: function() {
        this.o2(1)
    },o2: function(a) {
        c.assert(this.ad, c.e.wQ);
        var b = this.pi, d = b.length;
        if (0 == d)
            this.end();
        else if (!(a > d)) {
            for (; d > a; ) {
                var e = b.pop();
                e.running && (e.Zf(), e.yb());
                e.Le();
                d--
            }
            this.fi = b[b.length - 1];
            this.Gk = !1
        }
    },Xk: function() {
        return this.Qf
    },eP: function(a) {
        this.Qf != a && (this.Qf = a)
    },Sw: function() {
        return this.rg
    },GO: function(a) {
        this.rg != a && 
        (this.rg = a)
    },Saa: function() {
        return this.nk
    },Cn: null,IU: function() {
        this.FC = (Date.now() - this.Ak) / 1E3
    }});
c.Wa.IQ = "director_projection_changed";
c.Wa.FQ = "director_after_draw";
c.Wa.HQ = "director_after_visit";
c.Wa.GQ = "director_after_update";
c.zQ = c.Wa.extend({qx: !1,pP: function() {
        this.Gr = !0;
        this.qx = !1
    },$N: function() {
        this.Uv ? (this.Uv = !1, this.u2()) : this.qx || this.PZ()
    },sP: function() {
        this.qx = !0
    },HO: function(a) {
        this.Uq = a;
        this.qx || (this.sP(), this.pP())
    }});
c.Wa.fG = null;
c.Wa.DM = !0;
c.Wa.sB = function() {
    c.Wa.DM && (c.Wa.DM = !1, c.Wa.fG = new c.zQ, c.Wa.fG.M());
    return c.Wa.fG
};
c.yZ = 60;
c.Wa.cS = 0;
c.Wa.iH = 1;
c.Wa.dS = 3;
c.Wa.eS = c.Wa.iH;
c.A === c.Da ? (n = c.Wa.prototype, n.Om = function(a) {
    this.mi = a;
    c.ta.dispatchEvent(this.mv)
}, n.KO = function() {
}, n.TF = function(a) {
    this.K.width = c.Xa.width;
    this.K.height = c.Xa.height;
    this.ih = a || c.view;
    c.ta && c.ta.se(!0)
}, n.mk = function() {
    var a = this.ih.pe;
    c.k.clearRect(-a.x, a.y, a.width, -a.height)
}, n.Cn = function() {
    var a = 0, a = this.K.width > this.K.height ? 0 | this.K.height / 320 * 24 : 0 | this.K.width / 320 * 24;
    this.Cf = c.V.create("000.0", "Arial", a);
    this.Df = c.V.create("0.000", "Arial", a);
    this.Gf = c.V.create("0000", "Arial", a);
    a = c.Ly;
    this.Gf.U(this.Gf.width / 2 + a.x, 5 * this.Gf.height / 2 + a.y);
    this.Df.U(this.Df.width / 2 + a.x, 3 * this.Df.height / 2 + a.y);
    this.Cf.U(this.Cf.width / 2 + a.x, this.Cf.height / 2 + a.y)
}, n.Is = function() {
    return this.K
}, n.OE = function() {
    return N(0, 0)
}) : (c.Wa.On = new Image, c.Ia(c.Wa.On, "load", function() {
    c.Wa.RJ = !0
}), c.On && (c.Wa.On.src = c.On), c.assert("function" === typeof c.B.Ny, c.e.Mc, "CCDirectorWebGL.js"), c.B.Ny(), delete c.B.Ny);
c.Mp = c.la.extend({lr: null,mr: null,nr: null,wn: null,xn: null,yn: null,gs: null,hs: null,is: null,ib: null,Hv: null,ctor: function() {
        this.Hv = new c.ba;
        this.restore()
    },description: function() {
        return "\x3cCCCamera | center \x3d(" + this.wn + "," + this.xn + "," + this.yn + ")\x3e"
    },LO: function(a) {
        this.ib = a
    },dF: function() {
        return this.ib
    },restore: function() {
        this.lr = this.mr = 0;
        this.nr = c.Mp.Ks();
        this.gs = this.wn = this.xn = this.yn = 0;
        this.hs = 1;
        this.is = 0;
        c.Em(this.Hv);
        this.ib = !1
    },Ws: function() {
        if (this.ib) {
            var a = new c.tb, b = new c.tb, d = new c.tb;
            c.bp(a, this.lr, this.mr, this.nr);
            c.bp(b, this.wn, this.xn, this.yn);
            c.bp(d, this.gs, this.hs, this.is);
            c.LN(this.Hv, a, b, d);
            this.ib = !1
        }
        c.$o(this.Hv)
    },qia: function(a, b, d) {
        this.PO(a, b, d)
    },PO: function(a, b, d) {
        this.lr = a;
        this.mr = b;
        this.nr = d;
        this.ib = !0
    },aia: function(a, b, d) {
        this.b3(a, b, d)
    },b3: function(a, b, d) {
        this.wn = a;
        this.xn = b;
        this.yn = d;
        this.ib = !0
    },Qja: function(a, b, d) {
        this.U3(a, b, d)
    },U3: function(a, b, d) {
        this.gs = a;
        this.hs = b;
        this.is = d;
        this.ib = !0
    },hba: function() {
        return {x: this.lr,y: this.mr,z: this.nr}
    },PM: function() {
        return {x: this.lr,
            y: this.mr,z: this.nr}
    },Faa: function() {
        return {x: this.wn,y: this.xn,z: this.yn}
    },KM: function() {
        return {x: this.wn,y: this.xn,z: this.yn}
    },Tca: function() {
        return {x: this.gs,y: this.hs,z: this.is}
    },u0: function() {
        return {x: this.gs,y: this.hs,z: this.is}
    },E7: function() {
    }});
c.Mp.Ks = function() {
    return c.du
};
c.N6 = c.ju + 1;
c.Bo = function(a, b) {
    if (a && 0 < a.length)
        for (var d = 0; d < a.length; d++)
            if (!(a[d] instanceof b))
                return c.log(c.e.Bo), !1;
    return !0
};
c.Ke = function(a, b) {
    for (var d = 0, e = a.length; d < e; d++)
        if (a[d] == b) {
            a.splice(d, 1);
            break
        }
};
c.r9 = function(a, b) {
    for (var d = 0, e = b.length; d < e; d++)
        c.Ke(a, b[d])
};
c.q9 = function(a, b, d) {
    a.splice.apply(a, [d, 0].concat(b));
    return a
};
c.WG = function(a, b, d) {
    this.next = null;
    this.target = a;
    this.s2 = b;
    this.paused = d;
    this.Jx = !1
};
c.RG = function(a, b, d) {
    this.list = a;
    this.vm = b;
    this.target = d;
    this.fx = null
};
c.VQ = function(a, b) {
    this.Gi = null;
    this.target = a;
    this.Bp = 0;
    this.zs = this.ys = null;
    this.paused = b;
    this.fx = null
};
c.PH = c.la.extend({zk: 0,be: null,me: null,jb: 0,eL: !1,Aw: !1,to: 0,xC: 0,bv: 0,tba: function() {
        return this.zk
    },setInterval: function(a) {
        this.zk = a
    },Eaa: function() {
        return this.be
    },ctor: function(a, b, d, e, f) {
        this.me = a;
        this.be = b;
        this.jb = -1;
        this.zk = d || 0;
        this.bv = f || 0;
        this.Aw = 0 < this.bv;
        this.xC = null == e ? c.rq : e;
        this.eL = this.xC == c.rq
    },aB: function() {
        if ("string" == typeof this.be)
            this.me[this.be](this.jb);
        else
            this.be.call(this.me, this.jb)
    },update: function(a) {
        if (-1 == this.jb)
            this.to = this.jb = 0;
        else {
            var b = this.me, d = this.be;
            this.jb += 
            a;
            this.eL && !this.Aw ? this.jb >= this.zk && (b && d && this.aB(), this.jb = 0) : (this.Aw ? this.jb >= this.bv && (b && d && this.aB(), this.jb -= this.bv, this.to += 1, this.Aw = !1) : this.jb >= this.zk && (b && d && this.aB(), this.jb = 0, this.to += 1), this.to > this.xC && c.C.Xk().DP(b, d))
        }
    }});
c.xq = c.la.extend({fs: 1,gm: null,Zi: null,Nu: null,Yi: null,K7: null,xd: null,$h: !1,uw: !1,ctor: function() {
        this.fs = 1;
        this.gm = [[], [], []];
        this.Zi = {};
        this.Nu = [];
        this.Yi = {};
        this.Vq = [];
        this.xd = null;
        this.uw = this.$h = !1
    },wC: function(a) {
        delete this.Yi[a.target.va];
        c.Ke(this.Vq, a);
        a.PH = null;
        a.target = null
    },WK: function(a) {
        if (a = this.Zi[a.target.va])
            c.Ke(a.list, a.vm), delete this.Zi[a.target.va], c.Ke(this.Nu, a), a.vm = null, a.target = null
    },LK: function(a, b, d, e) {
        e = new c.WG(b, d, e);
        if (a) {
            for (var f = a.length - 1, g = 0; g <= f && !(d < a[g].s2); g++)
                ;
            a.splice(g, 0, e)
        } else
            a = [], a.push(e);
        d = new c.RG(a, e, b);
        this.Nu.push(d);
        this.Zi[b.va] = d;
        return a
    },yU: function(a, b, d) {
        d = new c.WG(b, 0, d);
        a.push(d);
        a = new c.RG(a, d, b);
        this.Nu.push(a);
        this.Zi[b.va] = a
    },Bja: function(a) {
        this.fs = a
    },Mca: function() {
        return this.fs
    },update: function(a) {
        var b = this.gm, d = this.Vq, e, f, g;
        this.uw = !0;
        1 != this.fs && (a *= this.fs);
        f = 0;
        for (g = b.length; f < g && 0 <= f; f++)
            for (var h = this.gm[f], k = 0, m = h.length; k < m; k++)
                e = h[k], e.paused || e.Jx || e.target.update(a);
        f = 0;
        for (g = d.length; f < g; f++) {
            e = d[f];
            if (!e)
                break;
            this.xd = e;
            this.$h = !1;
            if (!e.paused)
                for (e.Bp = 0; e.Bp < e.Gi.length; e.Bp++)
                    e.ys = e.Gi[e.Bp], e.zs = !1, e.ys.update(a), e.ys = null;
            this.$h && 0 == e.Gi.length && (this.wC(e), f--)
        }
        f = 0;
        for (g = b.length; f < g; f++)
            for (h = this.gm[f], k = 0, m = h.length; k < m; ) {
                e = h[k];
                if (!e)
                    break;
                e.Jx ? this.WK(e) : k++
            }
        this.uw = !1;
        this.xd = null
    },U2: function(a, b, d, e, f, g) {
        c.assert(b, c.e.GS);
        c.assert(a, c.e.HS);
        d = d || 0;
        e = null == e ? c.rq : e;
        f = f || 0;
        g = g || !1;
        var h = this.Yi[a.va];
        h || (h = new c.VQ(a, g), this.Vq.push(h), this.Yi[a.va] = h);
        if (null == h.Gi)
            h.Gi = [];
        else
            for (var k = 
            0; k < h.Gi.length; k++)
                if (g = h.Gi[k], b == g.be) {
                    c.log(c.e.FS, g.zk.toFixed(4), d.toFixed(4));
                    g.zk = d;
                    return
                }
        g = new c.PH(a, b, d, e, f);
        h.Gi.push(g)
    },KF: function(a, b, d) {
        if (null !== a) {
            var e = this.gm, f = this.Zi[a.va];
            f ? f.vm.Jx = !1 : 0 == b ? this.yU(e[1], a, d) : 0 > b ? e[0] = this.LK(e[0], a, b, d) : e[2] = this.LK(e[2], a, b, d)
        }
    },DP: function(a, b) {
        if (null != a && null != b) {
            var d = this.Yi[a.va];
            if (d)
                for (var e = d.Gi, f = 0, g = e.length; f < g; f++) {
                    var h = e[f];
                    if (b == h.be) {
                        h != d.ys || d.zs || (d.zs = !0);
                        e.splice(f, 1);
                        d.Bp >= f && d.Bp--;
                        0 == e.length && (this.xd == d ? this.$h = 
                        !0 : this.wC(d));
                        break
                    }
                }
        }
    },Bt: function(a) {
        null != a && (a = this.Zi[a.va], null != a && (this.uw ? a.vm.Jx = !0 : this.WK(a.vm)))
    },CP: function(a) {
        if (null != a) {
            var b = this.Yi[a.va];
            if (b) {
                var d = b.Gi;
                !b.zs && 0 <= d.indexOf(b.ys) && (b.zs = !0);
                d.length = 0;
                this.xd == b ? this.$h = !0 : this.wC(b)
            }
            this.Bt(a)
        }
    },xy: function() {
        this.D4(c.xq.ju)
    },D4: function(a) {
        for (var b = this.Vq, d = this.gm, e = 0, f = b.length; e < f; e++)
            this.CP(b[e].target);
        for (e = 2; 0 <= e; e--)
            if (!(1 == e && 0 < a || 0 == e && 0 <= a))
                for (var b = d[e], f = 0, g = b.length; f < g; f++)
                    this.Bt(b[f].target)
    },Hga: function() {
        return this.h2(c.xq.ju)
    },
    h2: function() {
        for (var a = [], b, d = this.Vq, e = this.gm, f = 0, g = d.length; f < g; f++)
            if (b = d[f])
                b.paused = !0, a.push(b.target);
        f = 0;
        for (g = e.length; f < g; f++)
            for (var d = e[f], h = 0, k = d.length; h < k; h++)
                if (b = d[h])
                    b.paused = !0, a.push(b.target);
        return a
    },S2: function(a) {
        if (a)
            for (var b = 0; b < a.length; b++)
                this.Kj(a[b])
    },lp: function(a) {
        c.assert(a, c.e.DS);
        var b = this.Yi[a.va];
        b && (b.paused = !0);
        (a = this.Zi[a.va]) && (a.vm.paused = !0)
    },Kj: function(a) {
        c.assert(a, c.e.ES);
        var b = this.Yi[a.va];
        b && (b.paused = !1);
        (a = this.Zi[a.va]) && (a.vm.paused = !1)
    },
    Nda: function(a) {
        c.assert(a, c.e.CS);
        return (a = this.Yi[a.va]) ? a.paused : !1
    }});
c.xq.ju = -2147483648;
c.eH = 2 * Math.PI;
c.LG = c.la.extend({JA: [],k: null,ctor: function(a) {
        this.k = a
    },MZ: function(a, b) {
        b || (b = 1);
        var d = c.view.pa, e = N(a.x * d, a.y * c.view.Ra);
        this.k.beginPath();
        this.k.arc(e.x, -e.y, b * d, 0, 2 * Math.PI, !1);
        this.k.closePath();
        this.k.fill()
    },NZ: function(a, b, d) {
        if (null != a) {
            d || (d = 1);
            b = this.k;
            var e = c.view.pa, f = c.view.Ra;
            b.beginPath();
            for (var g = 0, h = a.length; g < h; g++)
                b.arc(a[g].x * e, -a[g].y * f, d * e, 0, 2 * Math.PI, !1);
            b.closePath();
            b.fill()
        }
    },wj: function(a, b) {
        var d = this.k, e = c.view.pa, f = c.view.Ra;
        d.beginPath();
        d.moveTo(a.x * e, -a.y * f);
        d.lineTo(b.x * e, -b.y * f);
        d.closePath();
        d.stroke()
    },sE: function(a, b) {
        this.wj(N(a.x, a.y), N(b.x, a.y));
        this.wj(N(b.x, a.y), N(b.x, b.y));
        this.wj(N(b.x, b.y), N(a.x, b.y));
        this.wj(N(a.x, b.y), N(a.x, a.y))
    },yM: function(a, b, d) {
        this.uE([a, N(b.x, a.y), b, N(a.x, b.y)], 4, d)
    },Yd: function(a, b, d, e) {
        e = e || !1;
        if (null != a) {
            if (3 > a.length)
                throw Error("Polygon's point must greater than 2");
            var f = a[0];
            b = this.k;
            var g = c.view.pa, h = c.view.Ra;
            b.beginPath();
            b.moveTo(f.x * g, -f.y * h);
            for (var f = 1, k = a.length; f < k; f++)
                b.lineTo(a[f].x * g, -a[f].y * h);
            d && b.closePath();
            e ? b.fill() : b.stroke()
        }
    },uE: function(a, b, d) {
        this.tp(d.r, d.g, d.b, d.a);
        this.Yd(a, b, !0, !0)
    },oE: function(a, b, d, e, f) {
        f = f || !1;
        e = this.k;
        var g = c.view.pa, h = c.view.Ra;
        e.beginPath();
        e.arc(0 | a.x * g, 0 | -(a.y * h), b * g, -d, -(d - 2 * Math.PI), !1);
        f && e.lineTo(0 | a.x * g, 0 | -(a.y * h));
        e.stroke()
    },rE: function(a, b, d, e) {
        for (var f = this.JA, g = f.length = 0, h = 0; h < e; h++)
            f.push(N(Math.pow(1 - g, 2) * a.x + 2 * (1 - g) * g * b.x + g * g * d.x, Math.pow(1 - g, 2) * a.y + 2 * (1 - g) * g * b.y + g * g * d.y)), g += 1 / e;
        f.push(N(d.x, d.y));
        this.Yd(f, e + 1, !1, !1)
    },pE: function(a, 
    b, d, e, f) {
        for (var g = this.JA, h = g.length = 0, k = 0; k < f; k++)
            g.push(N(Math.pow(1 - h, 3) * a.x + 3 * Math.pow(1 - h, 2) * h * b.x + 3 * (1 - h) * h * h * d.x + h * h * h * e.x, Math.pow(1 - h, 3) * a.y + 3 * Math.pow(1 - h, 2) * h * b.y + 3 * (1 - h) * h * h * d.y + h * h * h * e.y)), h += 1 / f;
        g.push(N(e.x, e.y));
        this.Yd(g, f + 1, !1, !1)
    },nE: function(a, b) {
        this.sm(a, 0.5, b)
    },sm: function(a, b, d) {
        c.k.strokeStyle = "rgba(255,255,255,1)";
        var e = this.JA;
        e.length = 0;
        for (var f, g, h = 1 / a.length, k = 0; k < d + 1; k++)
            g = k / d, 1 == g ? (f = a.length - 1, g = 1) : (f = 0 | g / h, g = (g - h * f) / h), f = c.nQ(c.cd(a, f - 1), c.cd(a, f - 0), c.cd(a, f + 1), 
            c.cd(a, f + 2), b, g), e.push(f);
        this.Yd(e, d + 1, !1, !1)
    },drawImage: function(a, b, d, e, f) {
        switch (arguments.length) {
            case 2:
                this.k.drawImage(a, b.x, -(b.y + a.height));
                break;
            case 3:
                this.k.drawImage(a, b.x, -(b.y + d.height), d.width, d.height);
                break;
            case 5:
                this.k.drawImage(a, b.x, b.y, d.width, d.height, e.x, -(e.y + f.height), f.width, f.height);
                break;
            default:
                throw Error("Argument must be non-nil");
        }
    },QZ: function(a, b, d) {
        a = a || this.k;
        b *= c.view.pa;
        d = "rgba(" + (0 | d.r) + "," + (0 | d.g) + "," + (0 | d.b);
        a.fillStyle = d + ",1)";
        var e = b / 10;
        a.beginPath();
        a.moveTo(-b, b);
        a.lineTo(0, e);
        a.lineTo(b, b);
        a.lineTo(e, 0);
        a.lineTo(b, -b);
        a.lineTo(0, -e);
        a.lineTo(-b, -b);
        a.lineTo(-e, 0);
        a.lineTo(-b, b);
        a.closePath();
        a.fill();
        var f = a.createRadialGradient(0, 0, e, 0, 0, b);
        f.addColorStop(0, d + ", 1)");
        f.addColorStop(0.3, d + ", 0.8)");
        f.addColorStop(1, d + ", 0.0)");
        a.fillStyle = f;
        a.beginPath();
        a.arc(0, 0, b - e, 0, c.eH, !1);
        a.closePath();
        a.fill()
    },JZ: function(a, b, d) {
        a = a || this.k;
        b *= c.view.pa;
        d = "rgba(" + (0 | d.r) + "," + (0 | d.g) + "," + (0 | d.b);
        var e = a.createRadialGradient(0, 0, b / 10, 0, 0, b);
        e.addColorStop(0, 
        d + ", 1)");
        e.addColorStop(0.3, d + ", 0.8)");
        e.addColorStop(0.6, d + ", 0.4)");
        e.addColorStop(1, d + ", 0.0)");
        a.fillStyle = e;
        a.beginPath();
        a.arc(0, 0, b, 0, c.eH, !1);
        a.closePath();
        a.fill()
    },fillText: function(a, b, d) {
        this.k.fillText(a, b, -d)
    },tp: function(a, b, d, e) {
        this.k.fillStyle = "rgba(" + a + "," + b + "," + d + "," + e / 255 + ")";
        this.k.strokeStyle = "rgba(" + a + "," + b + "," + d + "," + e / 255 + ")"
    },A3: function() {
    },RF: function(a) {
        this.k.lineWidth = a * c.view.pa
    }});
c.CQ = c.la.extend({k: null,xr: !1,wc: null,Yh: -1,cf: null,hC: -1,gC: -1,ctor: function(a) {
        null == a && (a = c.k);
        if (!a instanceof WebGLRenderingContext)
            throw "Can't initialise DrawingPrimitiveWebGL. context need is WebGLRenderingContext";
        this.k = a;
        this.cf = new Float32Array([1, 1, 1, 1])
    },Cj: function() {
        this.xr || (this.wc = c.Jd.mc(c.Iz), this.Yh = this.k.getUniformLocation(this.wc.Am(), "u_color"), this.hC = this.k.getUniformLocation(this.wc.Am(), "u_pointSize"), this.xr = !0)
    },m$: function() {
        this.xr = !1
    },MZ: function(a) {
        this.Cj();
        var b = 
        this.k;
        this.wc.Jc();
        this.wc.Ye();
        c.Gc(c.Md);
        b.uniform4fv(this.Yh, this.cf);
        this.wc.rt(this.hC, this.gC);
        var d = b.createBuffer();
        b.bindBuffer(b.ARRAY_BUFFER, d);
        b.bufferData(b.ARRAY_BUFFER, new Float32Array([a.x, a.y]), b.STATIC_DRAW);
        b.vertexAttribPointer(c.pb, 2, b.FLOAT, !1, 0, 0);
        b.drawArrays(b.POINTS, 0, 1);
        b.deleteBuffer(d);
        c.Yf()
    },NZ: function(a) {
        if (a && 0 != a.length) {
            this.Cj();
            var b = this.k;
            this.wc.Jc();
            this.wc.Ye();
            c.Gc(c.Md);
            b.uniform4fv(this.Yh, this.cf);
            this.wc.rt(this.hC, this.gC);
            var d = b.createBuffer();
            b.bindBuffer(b.ARRAY_BUFFER, 
            d);
            b.bufferData(b.ARRAY_BUFFER, this.Tv(a), b.STATIC_DRAW);
            b.vertexAttribPointer(c.pb, 2, b.FLOAT, !1, 0, 0);
            b.drawArrays(b.POINTS, 0, a.length);
            b.deleteBuffer(d);
            c.Yf()
        }
    },Tv: function(a) {
        for (var b = new Float32Array(2 * a.length), d = 0; d < a.length; d++)
            b[2 * d] = a[d].x, b[2 * d + 1] = a[d].y;
        return b
    },wj: function(a, b) {
        this.Cj();
        var d = this.k;
        this.wc.Jc();
        this.wc.Ye();
        c.Gc(c.Md);
        d.uniform4fv(this.Yh, this.cf);
        var e = d.createBuffer();
        d.bindBuffer(d.ARRAY_BUFFER, e);
        d.bufferData(d.ARRAY_BUFFER, this.Tv([a, b]), d.STATIC_DRAW);
        d.vertexAttribPointer(c.pb, 
        2, d.FLOAT, !1, 0, 0);
        d.drawArrays(d.LINES, 0, 2);
        d.deleteBuffer(e);
        c.Yf()
    },sE: function(a, b) {
        this.wj(N(a.x, a.y), N(b.x, a.y));
        this.wj(N(b.x, a.y), N(b.x, b.y));
        this.wj(N(b.x, b.y), N(a.x, b.y));
        this.wj(N(a.x, b.y), N(a.x, a.y))
    },yM: function(a, b, d) {
        this.uE([a, N(b.x, a.y), b, N(a.x, b.y)], 4, d)
    },Yd: function(a, b, d) {
        this.Cj();
        b = this.k;
        this.wc.Jc();
        this.wc.Ye();
        c.Gc(c.Md);
        b.uniform4fv(this.Yh, this.cf);
        var e = b.createBuffer();
        b.bindBuffer(b.ARRAY_BUFFER, e);
        b.bufferData(b.ARRAY_BUFFER, this.Tv(a), b.STATIC_DRAW);
        b.vertexAttribPointer(c.pb, 
        2, b.FLOAT, !1, 0, 0);
        d ? b.drawArrays(b.LINE_LOOP, 0, a.length) : b.drawArrays(b.LINE_STRIP, 0, a.length);
        b.deleteBuffer(e);
        c.Yf()
    },uE: function(a, b, d) {
        this.Cj();
        d && this.tp(d.r, d.g, d.b, d.a);
        b = this.k;
        this.wc.Jc();
        this.wc.Ye();
        c.Gc(c.Md);
        b.uniform4fv(this.Yh, this.cf);
        d = b.createBuffer();
        b.bindBuffer(b.ARRAY_BUFFER, d);
        b.bufferData(b.ARRAY_BUFFER, this.Tv(a), b.STATIC_DRAW);
        b.vertexAttribPointer(c.pb, 2, b.FLOAT, !1, 0, 0);
        b.drawArrays(b.TRIANGLE_FAN, 0, a.length);
        b.deleteBuffer(d);
        c.Yf()
    },oE: function(a, b, d, e, f) {
        this.Cj();
        var g = 1;
        f && g++;
        var h = 2 * Math.PI / e;
        if (f = new Float32Array(2 * (e + 2))) {
            for (var k = 0; k <= e; k++) {
                var m = k * h, p = b * Math.sin(m + d) + a.y;
                f[2 * k] = b * Math.cos(m + d) + a.x;
                f[2 * k + 1] = p
            }
            f[2 * (e + 1)] = a.x;
            f[2 * (e + 1) + 1] = a.y;
            a = this.k;
            this.wc.Jc();
            this.wc.Ye();
            c.Gc(c.Md);
            a.uniform4fv(this.Yh, this.cf);
            b = a.createBuffer();
            a.bindBuffer(a.ARRAY_BUFFER, b);
            a.bufferData(a.ARRAY_BUFFER, f, a.STATIC_DRAW);
            a.vertexAttribPointer(c.pb, 2, a.FLOAT, !1, 0, 0);
            a.drawArrays(a.LINE_STRIP, 0, e + g);
            a.deleteBuffer(b);
            c.Yf()
        }
    },rE: function(a, b, d, e) {
        this.Cj();
        for (var f = 
        new Float32Array(2 * (e + 1)), g = 0, h = 0; h < e; h++)
            f[2 * h] = Math.pow(1 - g, 2) * a.x + 2 * (1 - g) * g * b.x + g * g * d.x, f[2 * h + 1] = Math.pow(1 - g, 2) * a.y + 2 * (1 - g) * g * b.y + g * g * d.y, g += 1 / e;
        f[2 * e] = d.x;
        f[2 * e + 1] = d.y;
        a = this.k;
        this.wc.Jc();
        this.wc.Ye();
        c.Gc(c.Md);
        a.uniform4fv(this.Yh, this.cf);
        b = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, b);
        a.bufferData(a.ARRAY_BUFFER, f, a.STATIC_DRAW);
        a.vertexAttribPointer(c.pb, 2, a.FLOAT, !1, 0, 0);
        a.drawArrays(a.LINE_STRIP, 0, e + 1);
        a.deleteBuffer(b);
        c.Yf()
    },pE: function(a, b, d, e, f) {
        this.Cj();
        for (var g = new Float32Array(2 * 
        (f + 1)), h = 0, k = 0; k < f; k++)
            g[2 * k] = Math.pow(1 - h, 3) * a.x + 3 * Math.pow(1 - h, 2) * h * b.x + 3 * (1 - h) * h * h * d.x + h * h * h * e.x, g[2 * k + 1] = Math.pow(1 - h, 3) * a.y + 3 * Math.pow(1 - h, 2) * h * b.y + 3 * (1 - h) * h * h * d.y + h * h * h * e.y, h += 1 / f;
        g[2 * f] = e.x;
        g[2 * f + 1] = e.y;
        a = this.k;
        this.wc.Jc();
        this.wc.Ye();
        c.Gc(c.Md);
        a.uniform4fv(this.Yh, this.cf);
        b = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, b);
        a.bufferData(a.ARRAY_BUFFER, g, a.STATIC_DRAW);
        a.vertexAttribPointer(c.pb, 2, a.FLOAT, !1, 0, 0);
        a.drawArrays(a.LINE_STRIP, 0, f + 1);
        a.deleteBuffer(b);
        c.Yf()
    },nE: function(a, b) {
        this.sm(a, 
        0.5, b)
    },sm: function(a, b, d) {
        this.Cj();
        for (var e = new Float32Array(2 * (d + 1)), f, g, h = 1 / a.length, k = 0; k < d + 1; k++)
            g = k / d, 1 == g ? (f = a.length - 1, g = 1) : (f = 0 | g / h, g = (g - h * f) / h), f = c.nQ(c.cd(a, f - 1), c.cd(a, f), c.cd(a, f + 1), c.cd(a, f + 2), b, g), e[2 * k] = f.x, e[2 * k + 1] = f.y;
        a = this.k;
        this.wc.Jc();
        this.wc.Ye();
        c.Gc(c.Md);
        a.uniform4fv(this.Yh, this.cf);
        b = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, b);
        a.bufferData(a.ARRAY_BUFFER, e, a.STATIC_DRAW);
        a.vertexAttribPointer(c.pb, 2, a.FLOAT, !1, 0, 0);
        a.drawArrays(a.LINE_STRIP, 0, d + 1);
        a.deleteBuffer(b);
        c.Yf()
    },tp: function(a, b, d, e) {
        this.cf[0] = a / 255;
        this.cf[1] = b / 255;
        this.cf[2] = d / 255;
        this.cf[3] = e / 255
    },A3: function(a) {
        this.gC = a * c.qb()
    },RF: function(a) {
        this.k.lineWidth && this.k.lineWidth(a)
    }});
c.B.oA = function() {
    var a = c.V.prototype;
    a.bb = c.P.prototype.bb;
    a.nf = function() {
        this.mb = !0;
        var a = this.$l, d = this.am;
        this.fw = "rgba(128,128,128," + this.mj + ")";
        this.pv = "rgba(" + (0 | d.r) + "," + (0 | d.g) + "," + (0 | d.b) + ", 1)";
        this.kw = "rgba(" + (0 | a.r) + "," + (0 | a.g) + "," + (0 | a.b) + ", 1)"
    };
    a.Mb = c.P.prototype.Mb;
    a.za = c.P.prototype.za;
    a.Jb = c.P.prototype.Jb;
    a.YE = function(a, d) {
        if (!c.P.prototype.M.call(this))
            return !1;
        this.shaderProgram = c.Jd.mc(c.V.pU);
        this.xD(d, !1);
        this.string = a;
        return !0
    };
    a.jy = function(a) {
        var d = this.am;
        if (d.r != a.r || 
        d.g != a.g || d.b != a.b)
            d.r = a.r, d.g = a.g, d.b = a.b, this.nf(), this.mb = !0
    };
    a.Z = function(a) {
        if (this.Gb && "" != this.Gb) {
            a = a || c.k;
            var d = this.J;
            d && d.uc && (this.Fb.Jc(), this.Fb.Ye(), c.Fh(this.o.src, this.o.T), c.qe(d), c.Gc(c.yl), a.bindBuffer(a.ARRAY_BUFFER, this.Vv), this.De && (a.bufferData(a.ARRAY_BUFFER, this.Sb.Ew, a.STATIC_DRAW), this.De = !1), a.vertexAttribPointer(c.pb, 3, a.FLOAT, !1, 24, 0), a.vertexAttribPointer(c.ud, 2, a.FLOAT, !1, 24, 16), a.vertexAttribPointer(c.we, 4, a.UNSIGNED_BYTE, !0, 24, 12), a.drawArrays(a.TRIANGLE_STRIP, 0, 
            4));
            if (1 === c.Uj)
                a = this.Sb, c.Ae.Yd([N(a.N.i.x, a.N.i.y), N(a.F.i.x, a.F.i.y), N(a.O.i.x, a.O.i.y), N(a.I.i.x, a.I.i.y)], 4, !0);
            else if (2 === c.Uj) {
                a = this.kN().O8;
                var d = this.offsetX, e = this.offsetY;
                c.Ae.Yd([N(d, e), N(d + a.width, e), N(d + a.width, e + a.height), N(d, e + a.height)], 4, !0)
            }
            c.Xf++
        }
    };
    a.ub = c.P.prototype.ub
};
c.B.uz = function() {
    var a = c.V.prototype;
    c.f(a, "color", a.Ne, a.bb);
    c.f(a, "opacity", a.Oe, a.za);
    c.f(a, "string", a.Yk, a.nc);
    c.f(a, "textAlign", a.L_, a.r3);
    c.f(a, "verticalAlign", a.y0, a.X3);
    c.f(a, "fontSize", a.DE, a.ly);
    c.f(a, "fontName", a.CE, a.ky);
    c.f(a, "font", a.FV, a.BX);
    c.f(a, "boundingWidth", a.qB, a.vX);
    c.f(a, "boundingHeight", a.CV, a.uX);
    c.f(a, "fillStyle", a.EV, a.jy);
    c.f(a, "strokeStyle", a.$V, a.XX);
    c.f(a, "lineWidth", a.NV, a.FX);
    c.f(a, "shadowOffsetX", a.VV, a.NX);
    c.f(a, "shadowOffsetY", a.WV, a.OX);
    c.f(a, "shadowOpacity", 
    a.XV, a.PX);
    c.f(a, "shadowBlur", a.UV, a.MX)
};
c.V = c.P.extend({ic: null,yk: c.Aq,Sk: c.Nq,$b: null,Qb: 0,Gb: "",$B: null,ao: !1,$g: null,kd: !1,Bd: null,mj: 0,Jk: 0,fw: null,Cg: !1,$l: null,pj: 0,kw: null,am: null,pv: null,iD: 0,jD: 0,mb: !1,Dv: null,Ev: null,sK: null,sb: "LabelTTF",ctor: function(a, b, d, e, f, g) {
        c.P.prototype.ctor.call(this);
        this.ic = P(0, 0);
        this.yk = c.ru;
        this.Sk = c.Nq;
        this.Qa = !1;
        this.$g = "";
        this.$b = "Arial";
        this.kd = this.ao = !1;
        this.Bd = N(0, 0);
        this.Jk = this.mj = 0;
        this.fw = "rgba(128, 128, 128, 0.5)";
        this.Cg = !1;
        this.$l = c.color(255, 255, 255, 255);
        this.pj = 0;
        this.kw = "";
        this.am = 
        c.color(255, 255, 255, 255);
        this.pv = "rgba(255,255,255,1)";
        this.jD = this.iD = 0;
        this.mb = !1;
        this.sK = [];
        this.nf();
        b && b instanceof c.PG ? this.YE(a, b) : c.V.prototype.pd.call(this, a, b, d, e, f, g)
    },M: function() {
        return this.pd(" ", this.$b, this.Qb)
    },HW: function() {
        this.tB().font = this.$g
    },Er: function(a) {
        return this.tB().measureText(a).width
    },MU: function(a, b) {
        var d = this.Er(a), e = Math.floor(a.length * b / d), f = a.indexOf("\n");
        if (0.8 * e >= f && 0 < f)
            return f + 1;
        if (d < b)
            return a.length;
        for (var d = !1, f = b + 1, g = -1, h = e, k, m = c.V.OU, p = c.V.oX, r = 
        c.V.LU, s = a.substr(e); k = m.exec(s); ) {
            h += k[0].length;
            f = this.Er(a.substr(0, h));
            if ("\n" == k[2] && f < b) {
                d = !0;
                g = h;
                break
            }
            if (f > b) {
                -1 != g && (d = !0);
                break
            }
            g = h;
            s = a.substr(h)
        }
        if (d)
            return g;
        s = a.substr(0, e);
        for (g = e; k = p.exec(s); )
            if (g = k[1].length, s = k[1], f = this.Er(s), f < b) {
                r.test(k[2]) && g++;
                break
            }
        return g || 1
    },description: function() {
        return "\x3ccc.LabelTTF | FontName \x3d" + this.$b + " FontSize \x3d " + this.Qb.toFixed(1) + "\x3e"
    },bb: null,nf: null,Mb: null,za: null,Jb: null,Aka: function(a) {
        c.ia.prototype.Jb.call(this, a);
        this.nf()
    },Yk: function() {
        return this.Gb
    },
    L_: function() {
        return this.yk
    },y0: function() {
        return this.Sk
    },Waa: function() {
        return P(this.ic.width, this.ic.height)
    },DE: function() {
        return this.Qb
    },CE: function() {
        return this.$b
    },pd: function(a, b, d, e, f, g) {
        a = a ? a + "" : "";
        d = d || 16;
        e = e || P(0, d);
        f = f || c.ru;
        g = g || c.Nq;
        this.Qa = !1;
        this.ic = P(e.width, e.height);
        this.$b = b || "Arial";
        this.yk = f;
        this.Sk = g;
        this.Qb = d;
        this.$g = this.Qb + "px '" + b + "'";
        this.bi = c.V.Pq(b, this.Qb);
        this.string = a;
        this.nf();
        this.zw();
        this.mb = !1;
        return !0
    },YE: null,vja: function(a) {
        a && this.xD(a, !0)
    },Gca: function() {
        return this.fX(!1)
    },
    $Z: function(a, b, d, e) {
        d = d || 0.5;
        !1 === this.kd && (this.kd = !0);
        var f = this.Bd;
        if (f && f.x != a || f.Je != b)
            f.x = a, f.y = b;
        this.mj != d && (this.mj = d);
        this.nf();
        this.Jk != e && (this.Jk = e);
        this.mb = !0
    },VV: function() {
        return this.Bd.x
    },NX: function(a) {
        !1 === this.kd && (this.kd = !0);
        this.Bd.x != a && (this.Bd.x = a, this.mb = !0)
    },WV: function() {
        return this.Bd.Je
    },OX: function(a) {
        !1 === this.kd && (this.kd = !0);
        this.Bd.Je != a && (this.Bd.Je = a, this.mb = !0)
    },l8: function() {
        return N(this.Bd.x, this.Bd.y)
    },K8: function(a) {
        !1 === this.kd && (this.kd = !0);
        if (this.Bd.x != 
        a.x || this.Bd.y != a.y)
            this.Bd.x = a.x, this.Bd.y = a.y, this.mb = !0
    },XV: function() {
        return this.mj
    },PX: function(a) {
        !1 === this.kd && (this.kd = !0);
        this.mj != a && (this.mj = a, this.nf(), this.mb = !0)
    },UV: function() {
        return this.Jk
    },MX: function(a) {
        !1 === this.kd && (this.kd = !0);
        this.Jk != a && (this.Jk = a, this.mb = !0)
    },d$: function() {
        this.kd && (this.kd = !1, this.mb = !0)
    },a_: function(a, b) {
        !1 === this.Cg && (this.Cg = !0);
        var d = this.$l;
        if (d.r !== a.r || d.g !== a.g || d.b !== a.b)
            d.r = a.r, d.g = a.g, d.b = a.b, this.nf();
        this.pj !== b && (this.pj = b || 0);
        this.mb = !0
    },
    $V: function() {
        return this.$l
    },XX: function(a) {
        !1 === this.Cg && (this.Cg = !0);
        var b = this.$l;
        if (b.r !== a.r || b.g !== a.g || b.b !== a.b)
            b.r = a.r, b.g = a.g, b.b = a.b, this.nf(), this.mb = !0
    },NV: function() {
        return this.pj
    },FX: function(a) {
        !1 === this.Cg && (this.Cg = !0);
        this.pj !== a && (this.pj = a || 0, this.mb = !0)
    },e$: function() {
        this.Cg && (this.Cg = !1, this.mb = !0)
    },jy: null,EV: function() {
        return this.am
    },xD: function(a, b) {
        a.oaa ? (this.ic.width = a.boundingWidth, this.ic.height = a.boundingHeight) : (this.ic.width = 0, this.ic.height = 0);
        this.yk = a.textAlign;
        this.Sk = a.verticalAlign;
        this.$b = a.fontName;
        this.Qb = a.fontSize || 12;
        this.$g = this.Qb + "px '" + this.$b + "'";
        this.bi = c.V.Pq(this.$b, this.Qb);
        a.mP && this.$Z(a.shadowOffsetX, a.shadowOffsetY, a.shadowOpacity, a.shadowBlur);
        a.jG && this.a_(a.strokeStyle, a.lineWidth);
        this.jy(a.fillStyle);
        b && this.zw()
    },fX: function(a) {
        var b = new c.PG;
        a ? (b.fontSize = this.Qb, b.boundingWidth = c.qb() * this.ic.width, b.boundingHeight = c.qb() * this.ic.height) : (b.fontSize = this.Qb, b.boundingWidth = this.ic.width, b.boundingHeight = this.ic.height);
        b.fontName = 
        this.$b;
        b.textAlign = this.yk;
        b.verticalAlign = this.Sk;
        if (this.Cg) {
            b.jG = !0;
            var d = this.$l;
            b.strokeStyle = c.color(d.r, d.g, d.b);
            b.lineWidth = this.pj
        } else
            b.jG = !1;
        this.kd ? (b.mP = !0, b.shadowBlur = this.Jk, b.shadowOpacity = this.mj, b.shadowOffsetX = (a ? c.qb() : 1) * this.Bd.x, b.shadowOffsetY = (a ? c.qb() : 1) * this.Bd.y) : b.kd = !1;
        a = this.am;
        b.fillStyle = c.color(a.r, a.g, a.b);
        return b
    },bi: 18,nc: function(a) {
        a = String(a);
        this.$B != a && (this.$B = a + "", this.xw(), this.mb = !0)
    },xw: function() {
        this.Gb = this.$B
    },r3: function(a) {
        a !== this.yk && (this.yk = 
        a, this.mb = !0)
    },X3: function(a) {
        a != this.Sk && (this.Sk = a, this.mb = !0)
    },mia: function(a) {
        if (a.width != this.ic.width || a.height != this.ic.height)
            this.ic = a, this.xw(), this.mb = !0
    },qB: function() {
        return this.ic.width
    },vX: function(a) {
        a != this.ic.width && (this.ic.width = a, this.xw(), this.mb = !0)
    },CV: function() {
        return this.ic.height
    },uX: function(a) {
        a != this.ic.height && (this.ic.height = a, this.xw(), this.mb = !0)
    },ly: function(a) {
        this.Qb !== a && (this.Qb = a, this.$g = a + "px '" + this.$b + "'", this.bi = c.V.Pq(this.$b, a), this.mb = !0)
    },ky: function(a) {
        this.$b && 
        this.$b != a && (this.$b = a, this.$g = this.Qb + "px '" + a + "'", this.bi = c.V.Pq(a, this.Qb), this.mb = !0)
    },FV: function() {
        return this.$g
    },BX: function(a) {
        var b = c.V.rV.exec(a);
        b && (this.Qb = parseInt(b[1]), this.$b = b[2], this.$g = a, this.bi = c.V.Pq(this.$b, this.Qb), this.mb = !0)
    },lV: function(a) {
        if (a) {
            var b = this.iD, d = this.jD, e = this.Q.height - d, f = this.Sk, g = this.yk, h = this.bi, k = this.pj;
            a.setTransform(1, 0, 0, 1, 0 + 0.5 * b, e + 0.5 * d);
            a.font != this.$g && (a.font = this.$g);
            a.fillStyle = this.pv;
            var m = d = 0, p = this.Cg;
            p && (a.lineWidth = 2 * k, a.strokeStyle = 
            this.kw);
            this.kd && (k = this.Bd, a.shadowColor = this.fw, a.shadowOffsetX = k.x, a.shadowOffsetY = -k.y, a.shadowBlur = this.Jk);
            a.textBaseline = c.V.lY[f];
            a.textAlign = c.V.kY[g];
            b = this.Q.width - b;
            d = g === c.JH ? d + b : g === c.Aq ? d + b / 2 : d + 0;
            if (this.ao)
                for (g = this.oj.length, f === c.wI ? m = h + e - h * g : f === c.fU && (m = h / 2 + (e - h * g) / 2), f = 0; f < g; f++)
                    b = this.oj[f], k = -e + h * f + m, p && a.strokeText(b, d, k), a.fillText(b, d, k);
            else
                f !== c.wI && (m = f === c.Nq ? m - e : m - 0.5 * e), p && a.strokeText(this.Gb, d, m), a.fillText(this.Gb, d, m)
        }
    },tB: function() {
        if (this.Ev)
            return this.Ev;
        if (!this.Dv) {
            var a = c.Kb("canvas"), b = new c.da;
            b.Ed(a);
            this.texture = b;
            this.Dv = a
        }
        return this.Ev = this.Dv.getContext("2d")
    },yw: function() {
        var a = this.ic.width, b, d, e = this.sK;
        e.length = 0;
        this.ao = !1;
        this.HW();
        if (0 !== a) {
            var f = this.Gb;
            this.oj = [];
            b = 0;
            for (d = this.Gb.length; b < d; ) {
                var g = this.MU(f.substr(b), a);
                this.oj.push(f.substr(b, g));
                b += g
            }
        } else
            for (this.oj = this.Gb.split("\n"), b = 0, d = this.oj.length; b < d; b++)
                e.push(this.Er(this.oj[b]));
        0 < this.oj.length && (this.ao = !0);
        d = b = 0;
        this.Cg && (b = d = 2 * this.pj);
        this.kd && (f = this.Bd, 
        b += 2 * Math.abs(f.x), d += 2 * Math.abs(f.y));
        a = 0 === a ? this.ao ? P(0 | Math.max.apply(Math, e) + b, 0 | this.bi * this.oj.length + d) : P(0 | this.Er(this.Gb) + b, 0 | this.bi + d) : 0 === this.ic.height ? this.ao ? P(0 | a + b, 0 | this.bi * this.oj.length + d) : P(0 | a + b, 0 | this.bi + d) : P(0 | a + b, 0 | this.ic.height + d);
        this.Zd(a);
        this.iD = b;
        this.jD = d;
        e = this.Nc;
        this.hb.x = 0.5 * b + (a.width - b) * e.x;
        this.hb.y = 0.5 * d + (a.height - d) * e.y
    },Ch: function() {
        this.mb && this.yw();
        return c.P.prototype.Ch.call(this)
    },ah: function() {
        this.mb && this.yw();
        return c.P.prototype.ah.call(this)
    },
    wk: function() {
        this.mb && this.yw();
        return c.P.prototype.wk.call(this)
    },zw: function() {
        var a = this.tB(), b = this.Dv, d = this.Q;
        if (0 === this.Gb.length)
            return b.width = 1, b.height = d.height, this.ub(S(0, 0, 1, d.height)), !0;
        a.font = this.$g;
        this.yw();
        var e = d.width, d = d.height, f = b.width == e && b.height == d;
        b.width = e;
        b.height = d;
        f && a.clearRect(0, 0, e, d);
        this.lV(a);
        this.J && this.J.Vb();
        this.ub(S(0, 0, e, d));
        return !0
    },S: function(a) {
        this.Gb && "" != this.Gb && (this.mb && (this.mb = !1, this.zw()), c.P.prototype.S.call(this, a || c.k))
    },Z: null,lL: function(a) {
        var b = 
        this.X ? this.textureAtlas.texture : this.J;
        if (b) {
            var d = b.pixelsWidth, e = b.pixelsHeight, f, g = this.Sb;
            this.$c ? (c.Ym ? (b = (2 * a.x + 1) / (2 * d), d = b + (2 * a.height - 2) / (2 * d), f = (2 * a.y + 1) / (2 * e), a = f + (2 * a.width - 2) / (2 * e)) : (b = a.x / d, d = (a.x + a.height) / d, f = a.y / e, a = (a.y + a.width) / e), this.Ob && (e = f, f = a, a = e), this.Pb && (e = b, b = d, d = e), g.F.l.ea = b, g.F.l.fa = f, g.O.l.ea = b, g.O.l.fa = a, g.N.l.ea = d, g.N.l.fa = f, g.I.l.ea = d, g.I.l.fa = a) : (c.Ym ? (b = (2 * a.x + 1) / (2 * d), d = b + (2 * a.width - 2) / (2 * d), f = (2 * a.y + 1) / (2 * e), a = f + (2 * a.height - 2) / (2 * e)) : (b = a.x / d, d = (a.x + a.width) / 
            d, f = a.y / e, a = (a.y + a.height) / e), this.Ob && (e = b, b = d, d = e), this.Pb && (e = f, f = a, a = e), g.F.l.ea = b, g.F.l.fa = a, g.O.l.ea = d, g.O.l.fa = a, g.N.l.ea = b, g.N.l.fa = f, g.I.l.ea = d, g.I.l.fa = f);
            this.De = !0
        }
    }});
c.A === c.Da ? (n = c.V.prototype, n.bb = function(a) {
    c.ia.prototype.bb.call(this, a);
    this.nf()
}, n.nf = function() {
    this.mb = !0;
    var a = this.Ea, b = this.Aa, d = this.$l, e = this.am;
    this.fw = "rgba(" + (0 | 0.5 * a.r) + "," + (0 | 0.5 * a.g) + "," + (0 | 0.5 * a.b) + "," + this.mj + ")";
    this.pv = "rgba(" + (0 | a.r / 255 * e.r) + "," + (0 | a.g / 255 * e.g) + "," + (0 | a.b / 255 * e.b) + ", " + b / 255 + ")";
    this.kw = "rgba(" + (0 | a.r / 255 * d.r) + "," + (0 | a.g / 255 * d.g) + "," + (0 | a.b / 255 * d.b) + ", " + b / 255 + ")"
}, n.Mb = function(a) {
    c.ia.prototype.Mb.call(this, a);
    this.nf()
}, n.za = function(a) {
    this.Sd !== a && (c.P.prototype.za.call(this, 
    a), this.nf(), this.mb = !0)
}, n.Jb = c.P.prototype.Jb, n.YE = function(a, b) {
    this.xD(b, !1);
    this.string = a;
    return !0
}, n.jy = function(a) {
    var b = this.am;
    if (b.r != a.r || b.g != a.g || b.b != a.b)
        b.r = a.r, b.g = a.g, b.b = a.b, this.nf(), this.mb = !0
}, n.Z = c.P.prototype.Z, n.ub = function(a, b, d) {
    this.$c = b || !1;
    this.Zd(d || a);
    this.eG(a);
    b = this.so;
    b.x = a.x;
    b.y = a.y;
    b.width = a.width;
    b.height = a.height;
    b.Fp = !(0 === b.width || 0 === b.height || 0 > b.x || 0 > b.y);
    a = this.uh;
    this.Ob && (a.x = -a.x);
    this.Pb && (a.y = -a.y);
    this.Cb.x = a.x + (this.Q.width - this.ha.width) / 2;
    this.Cb.y = 
    a.y + (this.Q.height - this.ha.height) / 2;
    this.X && (this.dirty = !0)
}, n = null) : (c.assert("function" === typeof c.B.oA, c.e.Mc, "LabelTTFWebGL.js"), c.B.oA(), delete c.B.oA);
c.assert("function" === typeof c.B.uz, c.e.Mc, "LabelTTFPropertyDefine.js");
c.B.uz();
delete c.B.uz;
c.V.kY = ["left", "center", "right"];
c.V.lY = ["top", "middle", "bottom"];
c.V.OU = /(.+?)([\s\n\r\-\/\\\:]|[\u4E00-\u9FA5]|[\uFE30-\uFFA0])/;
c.V.oX = /(.*)([\s\n\r\-\/\\\:]|[\u4E00-\u9FA5]|[\uFE30-\uFFA0])/;
c.V.LU = /[\s\-\/\\\:]/;
c.V.rV = /^(\d+)px\s+['"]?([\w\s\d]+)['"]?$/;
c.V.create = function(a, b, d, e, f, g) {
    return new c.V(a, b, d, e, f, g)
};
c.V.pU = c.eU ? c.Qi : c.Gz;
c.V.hk = c.Kb("div");
c.V.hk.style.fontFamily = "Arial";
c.V.hk.style.position = "absolute";
c.V.hk.style.left = "-100px";
c.V.hk.style.top = "-100px";
c.V.hk.style.lineHeight = "normal";
document.body ? document.body.appendChild(c.V.hk) : c.Ia(window, "load", function() {
    this.removeEventListener("load", arguments.callee, !1);
    document.body.appendChild(c.V.hk)
}, !1);
c.V.Pq = function(a, b) {
    var d = c.V.CI[a + "." + b];
    if (0 < d)
        return d;
    var e = c.V.hk;
    e.innerHTML = "ajghl~!";
    e.style.fontFamily = a;
    e.style.fontSize = b + "px";
    d = e.clientHeight;
    c.V.CI[a + "." + b] = d;
    e.innerHTML = "";
    return d
};
c.V.CI = {};
c.UQ = c.la.extend({zc: null,target: null,km: 0,rf: null,qm: !1,paused: !1,fx: null,ctor: function() {
        this.zc = [];
        this.target = null;
        this.km = 0;
        this.rf = null;
        this.paused = this.qm = !1;
        this.fx = null
    }});
c.tG = c.la.extend({dh: null,on: null,xd: null,$h: !1,I8: function(a, b) {
        for (var d = 0; d < a.length; d++)
            if (b == a[d].target)
                return a[d];
        return null
    },ctor: function() {
        this.dh = {};
        this.on = [];
        this.xd = null;
        this.$h = !1
    },AY: function(a, b, d) {
        if (!a)
            throw "cc.ActionManager.addAction(): action must be non-null";
        if (!b)
            throw "cc.ActionManager.addAction(): action must be non-null";
        var e = this.dh[b.va];
        e || (e = new c.UQ, e.paused = d, e.target = b, this.dh[b.va] = e, this.on.push(e));
        this.sU(e);
        e.zc.push(a);
        a.v(b)
    },hha: function() {
        for (var a = this.on, 
        b = 0; b < a.length; b++) {
            var d = a[b];
            d && this.tO(d.target, !0)
        }
    },tO: function(a, b) {
        if (null != a) {
            var d = this.dh[a.va];
            d && (-1 === d.zc.indexOf(d.rf) || d.qm || (d.qm = !0), d.zc.length = 0, this.xd != d || b ? this.VA(d) : this.$h = !0)
        }
    },sO: function(a) {
        if (null != a) {
            var b = this.dh[a.originalTarget.va];
            if (b)
                for (var d = 0; d < b.zc.length; d++) {
                    if (b.zc[d] == a) {
                        b.zc.splice(d, 1);
                        break
                    }
                }
            else
                c.log(c.e.RP)
        }
    },B2: function(a, b) {
        a == c.Tm && c.log(c.e.uG);
        c.assert(b, c.e.uG);
        var d = this.dh[b.va];
        if (d)
            for (var e = d.zc.length, f = 0; f < e; ++f) {
                var g = d.zc[f];
                if (g && 
                g.KE() === a && g.originalTarget == b) {
                    this.hX(f, d);
                    break
                }
            }
    },xE: function(a, b) {
        a == c.Tm && c.log(c.e.PP);
        var d = this.dh[b.va];
        if (d) {
            if (null != d.zc)
                for (var e = 0; e < d.zc.length; ++e) {
                    var f = d.zc[e];
                    if (f && f.KE() === a)
                        return f
                }
            c.log(c.e.QP, a)
        }
        return null
    },V1: function(a) {
        return (a = this.dh[a.va]) ? a.zc ? a.zc.length : 0 : 0
    },lp: function(a) {
        (a = this.dh[a.va]) && (a.paused = !0)
    },Kj: function(a) {
        (a = this.dh[a.va]) && (a.paused = !1)
    },Gga: function() {
        for (var a = [], b = this.on, d = 0; d < b.length; d++) {
            var e = b[d];
            e && !e.paused && (e.paused = !0, a.push(e.target))
        }
        return a
    },
    S2: function(a) {
        if (a)
            for (var b = 0; b < a.length; b++)
                a[b] && this.Kj(a[b])
    },Sga: function() {
        c.C.Xk().Bt(this)
    },hX: function(a, b) {
        b.zc[a] != b.rf || b.qm || (b.qm = !0);
        b.zc.splice(a, 1);
        b.km >= a && b.km--;
        0 == b.zc.length && (this.xd == b ? this.$h = !0 : this.VA(b))
    },VA: function(a) {
        a && (delete this.dh[a.target.va], c.Ke(this.on, a), a.zc = null, a.target = null)
    },sU: function(a) {
        null == a.zc && (a.zc = [])
    },update: function(a) {
        for (var b = this.on, d, e = 0; e < b.length; e++) {
            d = this.xd = b[e];
            if (!d.paused)
                for (d.km = 0; d.km < d.zc.length; d.km++)
                    if (d.rf = d.zc[d.km], 
                    d.rf) {
                        d.qm = !1;
                        d.rf.step(a * (d.rf.Wr ? d.rf.le : 1));
                        if (d.qm)
                            d.rf = null;
                        else if (d.rf.Hg()) {
                            d.rf.stop();
                            var f = d.rf;
                            d.rf = null;
                            this.sO(f)
                        }
                        d.rf = null
                    }
            this.$h && 0 === d.zc.length && this.VA(d)
        }
    }});
c.ffa = Number;
c.Wda = Number;
c.Xda = Number;
c.dn = 0;
c.en = 1;
c.kF = 3.141592;
c.z1 = 0.017453;
c.A1 = 57.295779;
c.ya = 0.015625;
c.Hc = function(a) {
    return a * a
};
c.Ss = function(a) {
    return a * c.z1
};
c.afa = function(a) {
    return a * c.A1
};
c.xx = function(a, b) {
    return a < b ? a : b
};
c.wx = function(a, b) {
    return a > b ? a : b
};
c.Vda = function(a, b) {
    return a + c.ya > b && a - c.ya < b
};
c.Hh = function() {
    this.y = this.x = 0
};
c.jfa = function(a, b, d) {
    a.x = b;
    a.y = d;
    return a
};
c.zx = function(a) {
    return Math.sqrt(c.Hc(a.x) + c.Hc(a.y))
};
c.kfa = function(a) {
    return c.Hc(a.x) + c.Hc(a.y)
};
c.G1 = function(a, b) {
    var d = 1 / c.zx(b), e = new c.Hh;
    e.x = b.x * d;
    e.y = b.y * d;
    a.x = e.x;
    a.y = e.y
};
c.gfa = function(a, b, d) {
    a.x = b.x + d.x;
    a.y = b.y + d.y;
    return a
};
c.ifa = function(a, b) {
    return a.x * b.x + a.y * b.y
};
c.Ax = function(a, b, d) {
    a.x = b.x - d.x;
    a.y = b.y - d.y;
    return a
};
c.mfa = function(a, b, d) {
    var e = new c.Hh;
    e.x = b.x * d.c[0] + b.y * d.c[3] + d.c[6];
    e.y = b.x * d.c[1] + b.y * d.c[4] + d.c[7];
    a.x = e.x;
    a.y = e.y;
    return a
};
c.nfa = function() {
    return null
};
c.lfa = function(a, b, d) {
    a.x = b.x * d;
    a.y = b.y * d;
    return a
};
c.hfa = function(a, b) {
    return a.x < b.x + c.ya && a.x > b.x - c.ya && a.y < b.y + c.ya && a.y > b.y - c.ya
};
c.tb = function(a, b, d) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = d || 0
};
c.bp = function(a, b, d, e) {
    if (!a)
        return new c.tb(b, d, e);
    a.x = b;
    a.y = d;
    a.z = e;
    return a
};
c.TN = function(a) {
    return Math.sqrt(c.Hc(a.x) + c.Hc(a.y) + c.Hc(a.z))
};
c.UN = function(a) {
    return c.Hc(a.x) + c.Hc(a.y) + c.Hc(a.z)
};
c.vf = function(a, b) {
    var d = 1 / c.TN(b);
    a.x = b.x * d;
    a.y = b.y * d;
    a.z = b.z * d
};
c.al = function(a, b, d) {
    a.x = b.y * d.z - b.z * d.y;
    a.y = b.z * d.x - b.x * d.z;
    a.z = b.x * d.y - b.y * d.x
};
c.mF = function(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z
};
c.SN = function(a, b, d) {
    a.x = b.x + d.x;
    a.y = b.y + d.y;
    a.z = b.z + d.z
};
c.oF = function(a, b, d) {
    a.x = b.x - d.x;
    a.y = b.y - d.y;
    a.z = b.z - d.z
};
c.sfa = function(a, b, d) {
    a.x = b.x * d.c[0] + b.y * d.c[4] + b.z * d.c[8] + d.c[12];
    a.y = b.x * d.c[1] + b.y * d.c[5] + b.z * d.c[9] + d.c[13];
    a.z = b.x * d.c[2] + b.y * d.c[6] + b.z * d.c[10] + d.c[14];
    return a
};
c.tfa = function(a, b, d) {
    a.x = b.x * d.c[0] + b.y * d.c[4] + b.z * d.c[8];
    a.y = b.x * d.c[1] + b.y * d.c[5] + b.z * d.c[9];
    a.z = b.x * d.c[2] + b.y * d.c[6] + b.z * d.c[10];
    return a
};
c.VN = function(a, b, d) {
    var e = new c.WN, f = new c.WN;
    c.H1(f, b.x, b.y, b.z);
    c.XN(e, f, d);
    a.x = e.x / e.G;
    a.y = e.y / e.G;
    a.z = e.z / e.G
};
c.nF = function(a, b, d) {
    a.x = b.x * d;
    a.y = b.y * d;
    a.z = b.z * d;
    return a
};
c.ofa = function(a, b) {
    return a.x < b.x + c.ya && a.x > b.x - c.ya && a.y < b.y + c.ya && a.y > b.y - c.ya && a.z < b.z + c.ya && a.z > b.z - c.ya ? 1 : 0
};
c.pfa = function(a, b, d) {
    b = new c.tb(b.x - d.c[12], b.y - d.c[13], b.z - d.c[14]);
    a.x = b.x * d.c[0] + b.y * d.c[1] + b.z * d.c[2];
    a.y = b.x * d.c[4] + b.y * d.c[5] + b.z * d.c[6];
    a.z = b.x * d.c[8] + b.y * d.c[9] + b.z * d.c[10];
    return a
};
c.qfa = function(a, b, d) {
    a.x = b.x * d.c[0] + b.y * d.c[1] + b.z * d.c[2];
    a.y = b.x * d.c[4] + b.y * d.c[5] + b.z * d.c[6];
    a.z = b.x * d.c[8] + b.y * d.c[9] + b.z * d.c[10];
    return a
};
c.Ts = function(a, b) {
    a != b && (a.x = b.x, a.y = b.y, a.z = b.z)
};
c.ufa = function(a) {
    a.x = 0;
    a.y = 0;
    a.z = 0;
    return a
};
c.rfa = function(a) {
    if (!a)
        return null;
    var b = new Float32Array(3);
    b[0] = a.x;
    b[1] = a.y;
    b[2] = a.z;
    return b
};
c.WN = function() {
    this.G = this.z = this.y = this.x = 0
};
c.H1 = function(a, b, d, e) {
    a.x = b;
    a.y = d;
    a.z = e;
    a.G = 1
};
c.vfa = function(a, b, d) {
    a.x = b.x + d.x;
    a.y = b.y + d.y;
    a.z = b.z + d.z;
    a.G = b.G + d.G;
    return a
};
c.yfa = function(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z + a.G * b.G
};
c.I1 = function(a) {
    return Math.sqrt(c.Hc(a.x) + c.Hc(a.y) + c.Hc(a.z) + c.Hc(a.G))
};
c.zfa = function(a) {
    return c.Hc(a.x) + c.Hc(a.y) + c.Hc(a.z) + c.Hc(a.G)
};
c.Afa = function(a) {
    return a
};
c.J1 = function(a, b) {
    var d = 1 / c.I1(b);
    a.x *= d;
    a.y *= d;
    a.z *= d;
    a.G *= d
};
c.Bfa = function(a, b, d) {
    c.J1(a, b);
    a.x *= d;
    a.y *= d;
    a.z *= d;
    a.G *= d;
    return a
};
c.Cfa = function(a, b, d) {
    a.x = b.x - d.x;
    a.y = b.y - d.y;
    a.z = b.z - d.z;
    a.G = b.G - d.G;
    return a
};
c.XN = function(a, b, d) {
    a.x = b.x * d.c[0] + b.y * d.c[4] + b.z * d.c[8] + b.G * d.c[12];
    a.y = b.x * d.c[1] + b.y * d.c[5] + b.z * d.c[9] + b.G * d.c[13];
    a.z = b.x * d.c[2] + b.y * d.c[6] + b.z * d.c[10] + b.G * d.c[14];
    a.G = b.x * d.c[3] + b.y * d.c[7] + b.z * d.c[11] + b.G * d.c[15]
};
c.Efa = function(a, b, d, e, f, g) {
    for (var h = 0; h < g; )
        c.XN(a + h * b, d + h * e, f), ++h;
    return a
};
c.wfa = function(a, b) {
    return a.x < b.x + c.ya && a.x > b.x - c.ya && a.y < b.y + c.ya && a.y > b.y - c.ya && a.z < b.z + c.ya && a.z > b.z - c.ya && a.G < b.G + c.ya && a.G > b.G - c.ya
};
c.xfa = function(a, b) {
    if (a == b)
        return c.log("destVec and srcVec are same object"), a;
    a.x = b.x;
    a.y = b.y;
    a.z = b.z;
    a.G = b.G;
    return a
};
c.Dfa = function(a) {
    if (!a)
        return null;
    var b = new Float32Array(4);
    b[0] = a.x;
    b[1] = a.y;
    b[2] = a.z;
    b[3] = a.G;
    return b
};
c.bfa = function(a) {
    this.start = a || new c.Hh;
    this.start = a || new c.Hh
};
c.cfa = function(a, b, d, e, f) {
    a.start.x = b;
    a.start.y = d;
    a.dir.x = e;
    a.dir.y = f
};
c.lF = function(a, b, d, e) {
    var f = a.start.x, g = a.start.y, h = a.start.x + a.dir.x;
    a = a.start.y + a.dir.y;
    var k = b.x, m = b.y, p = d.x, r = d.y, s = (r - m) * (h - f) - (p - k) * (a - g);
    if (s > -c.ya && s < c.ya)
        return c.dn;
    m = ((p - k) * (g - m) - (r - m) * (f - k)) / s;
    k = f + m * (h - f);
    m = g + m * (a - g);
    if (k < c.xx(b.x, d.x) - c.ya || k > c.wx(b.x, d.x) + c.ya || m < c.xx(b.y, d.y) - c.ya || m > c.wx(b.y, d.y) + c.ya || k < c.xx(f, h) - c.ya || k > c.wx(f, h) + c.ya || m < c.xx(g, a) - c.ya || m > c.wx(g, a) + c.ya)
        return c.dn;
    e.x = k;
    e.y = m;
    return c.en
};
c.WD = function(a, b, d) {
    var e = new c.Hh;
    c.Ax(e, b, a);
    d.x = -e.y;
    d.y = e.x;
    c.G1(d, d)
};
c.efa = function(a, b, d, e, f, g) {
    var h = new c.Hh, k = new c.Hh, m = new c.Hh, p = 1E4, r = c.dn, s;
    c.lF(a, b, d, h) && (s = new c.Hh, r = c.en, s = c.zx(c.Ax(s, h, a.start)), s < p && (k.x = h.x, k.y = h.y, p = s, c.WD(b, d, m)));
    c.lF(a, d, e, h) && (s = new c.Hh, r = c.en, s = c.zx(c.Ax(s, h, a.start)), s < p && (k.x = h.x, k.y = h.y, p = s, c.WD(d, e, m)));
    c.lF(a, e, b, h) && (s = new c.Hh, r = c.en, s = c.zx(c.Ax(s, h, a.start)), s < p && (k.x = h.x, k.y = h.y, c.WD(e, b, m)));
    r && (f.x = k.x, f.y = k.y, g && (g.x = m.x, g.y = m.y));
    return r
};
c.dfa = function() {
    c.log("cc.kmRay2IntersectCircle() has not been implemented.")
};
var Float32Array = Float32Array || Array;
c.vx = function() {
    this.c = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0])
};
c.eea = function(a, b) {
    for (var d = 0; 9 > d; d++)
        a.c[d] = b;
    return a
};
c.s1 = function(a, b) {
    a.c[0] = b.c[4] * b.c[8] - b.c[5] * b.c[7];
    a.c[1] = b.c[2] * b.c[7] - b.c[1] * b.c[8];
    a.c[2] = b.c[1] * b.c[5] - b.c[2] * b.c[4];
    a.c[3] = b.c[5] * b.c[6] - b.c[3] * b.c[8];
    a.c[4] = b.c[0] * b.c[8] - b.c[2] * b.c[6];
    a.c[5] = b.c[2] * b.c[3] - b.c[0] * b.c[5];
    a.c[6] = b.c[3] * b.c[7] - b.c[4] * b.c[6];
    a.c[8] = b.c[0] * b.c[4] - b.c[1] * b.c[3]
};
c.KN = function(a) {
    a.c[1] = a.c[2] = a.c[3] = a.c[5] = a.c[6] = a.c[7] = 0;
    a.c[0] = a.c[4] = a.c[8] = 1
};
c.fea = function(a, b, d) {
    var e = new c.vx;
    if (0 === b)
        return null;
    b = 1 / b;
    c.s1(e, d);
    c.t1(a, e, b);
    return a
};
c.vx.AB = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
c.gea = function(a) {
    for (var b = 0; 9 > b; b++)
        if (c.vx.AB[b] !== a.c[b])
            return !1;
    return !0
};
c.rea = function(a, b) {
    var d, e;
    for (d = 0; 3 > d; ++d)
        for (e = 0; 3 > e; ++e)
            a.c[3 * d + e] = b.c[3 * e + d];
    return a
};
c.dea = function(a) {
    var b;
    b = a.c[0] * a.c[4] * a.c[8] + a.c[1] * a.c[5] * a.c[6] + a.c[2] * a.c[3] * a.c[7];
    return b -= a.c[2] * a.c[4] * a.c[6] + a.c[0] * a.c[5] * a.c[7] + a.c[1] * a.c[3] * a.c[8]
};
c.hea = function(a, b, d) {
    b = b.c;
    d = d.c;
    a.c[0] = b[0] * d[0] + b[3] * d[1] + b[6] * d[2];
    a.c[1] = b[1] * d[0] + b[4] * d[1] + b[7] * d[2];
    a.c[2] = b[2] * d[0] + b[5] * d[1] + b[8] * d[2];
    a.c[3] = b[0] * d[3] + b[3] * d[4] + b[6] * d[5];
    a.c[4] = b[1] * d[3] + b[4] * d[4] + b[7] * d[5];
    a.c[5] = b[2] * d[3] + b[5] * d[4] + b[8] * d[5];
    a.c[6] = b[0] * d[6] + b[3] * d[7] + b[6] * d[8];
    a.c[7] = b[1] * d[6] + b[4] * d[7] + b[7] * d[8];
    a.c[8] = b[2] * d[6] + b[5] * d[7] + b[8] * d[8];
    return a
};
c.t1 = function(a, b, d) {
    for (var e = 0; 9 > e; e++)
        a.c[e] = b.c[e] * d
};
c.jea = function(a, b, d) {
    var e = Math.cos(d);
    d = Math.sin(d);
    a.c[0] = e + b.x * b.x * (1 - e);
    a.c[1] = b.z * d + b.y * b.x * (1 - e);
    a.c[2] = -b.y * d + b.z * b.x * (1 - e);
    a.c[3] = -b.z * d + b.x * b.y * (1 - e);
    a.c[4] = e + b.y * b.y * (1 - e);
    a.c[5] = b.x * d + b.z * b.y * (1 - e);
    a.c[6] = b.y * d + b.x * b.z * (1 - e);
    a.c[7] = -b.x * d + b.y * b.z * (1 - e);
    a.c[8] = e + b.z * b.z * (1 - e);
    return a
};
c.cea = function(a, b) {
    if (a == b)
        return c.log("cc.kmMat3Assign(): pOut equals pIn"), a;
    for (var d = 0; 9 > d; d++)
        a.c[d] = b.c[d];
    return a
};
c.bea = function(a, b) {
    if (a == b)
        return !0;
    for (var d = 0; 9 > d; ++d)
        if (!(a.c[d] + c.ya > b.c[d] && a.c[d] - c.ya < b.c[d]))
            return !1;
    return !0
};
c.mea = function(a, b) {
    a.c[0] = 1;
    a.c[1] = 0;
    a.c[2] = 0;
    a.c[3] = 0;
    a.c[4] = Math.cos(b);
    a.c[5] = Math.sin(b);
    a.c[6] = 0;
    a.c[7] = -Math.sin(b);
    a.c[8] = Math.cos(b);
    return a
};
c.nea = function(a, b) {
    a.c[0] = Math.cos(b);
    a.c[1] = 0;
    a.c[2] = -Math.sin(b);
    a.c[3] = 0;
    a.c[4] = 1;
    a.c[5] = 0;
    a.c[6] = Math.sin(b);
    a.c[7] = 0;
    a.c[8] = Math.cos(b);
    return a
};
c.oea = function(a, b) {
    a.c[0] = Math.cos(b);
    a.c[1] = -Math.sin(b);
    a.c[2] = 0;
    a.c[3] = Math.sin(b);
    a.c[4] = Math.cos(b);
    a.c[5] = 0;
    a.c[6] = 0;
    a.c[7] = 0;
    a.c[8] = 1;
    return a
};
c.iea = function(a, b) {
    a.c[0] = Math.cos(b);
    a.c[1] = Math.sin(b);
    a.c[2] = 0;
    a.c[3] = -Math.sin(b);
    a.c[4] = Math.cos(b);
    a.c[5] = 0;
    a.c[6] = 0;
    a.c[7] = 0;
    a.c[8] = 1;
    return a
};
c.pea = function(a, b, d) {
    c.KN(a);
    a.c[0] = b;
    a.c[4] = d;
    return a
};
c.qea = function(a, b, d) {
    c.KN(a);
    a.c[6] = b;
    a.c[7] = d;
    return a
};
c.kea = function(a, b) {
    if (!b || !a)
        return null;
    a.c[0] = 1 - 2 * (b.y * b.y + b.z * b.z);
    a.c[1] = 2 * (b.x * b.y - b.G * b.z);
    a.c[2] = 2 * (b.x * b.z + b.G * b.y);
    a.c[3] = 2 * (b.x * b.y + b.G * b.z);
    a.c[4] = 1 - 2 * (b.x * b.x + b.z * b.z);
    a.c[5] = 2 * (b.y * b.z - b.G * b.x);
    a.c[6] = 2 * (b.x * b.z - b.G * b.y);
    a.c[7] = 2 * (b.y * b.z + b.G * b.x);
    a.c[8] = 1 - 2 * (b.x * b.x + b.y * b.y);
    return a
};
c.lea = function(a, b, d) {
    c.QN(void 0, d);
    c.RN(void 0, a);
    return a
};
c.ba = function() {
    this.c = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
};
c.uea = function(a, b) {
    a.c[0] = a.c[1] = a.c[2] = a.c[3] = a.c[4] = a.c[5] = a.c[6] = a.c[7] = a.c[8] = a.c[9] = a.c[10] = a.c[11] = a.c[12] = a.c[13] = a.c[14] = a.c[15] = b
};
c.Em = function(a) {
    a.c[1] = a.c[2] = a.c[3] = a.c[4] = a.c[6] = a.c[7] = a.c[8] = a.c[9] = a.c[11] = a.c[12] = a.c[13] = a.c[14] = 0;
    a.c[0] = a.c[5] = a.c[10] = a.c[15] = 1
};
c.ba.Jf = function(a, b, d) {
    return a.c[b + 4 * d]
};
c.ba.Hk = function(a, b, d, e) {
    a.c[b + 4 * d] = e
};
c.ba.Ok = function(a, b, d, e, f) {
    var g = c.ba.Jf(a, b, d);
    c.ba.Hk(a, b, d, c.ba.Jf(a, e, f));
    c.ba.Hk(a, e, f, g)
};
c.ba.tV = function(a, b) {
    var d, e = 0, f = 0, g, h, k, m = [0, 0, 0, 0], p = [0, 0, 0, 0], r = [0, 0, 0, 0];
    for (d = 0; 4 > d; d++) {
        for (g = k = 0; 4 > g; g++)
            if (1 != r[g])
                for (h = 0; 4 > h; h++)
                    0 == r[h] && Math.abs(c.ba.Jf(a, g, h)) >= k && (k = Math.abs(c.ba.Jf(a, g, h)), f = g, e = h);
        ++r[e];
        if (f != e) {
            for (g = 0; 4 > g; g++)
                c.ba.Ok(a, f, g, e, g);
            for (g = 0; 4 > g; g++)
                c.ba.Ok(b, f, g, e, g)
        }
        p[d] = f;
        m[d] = e;
        if (0 == c.ba.Jf(a, e, e))
            return c.dn;
        h = 1 / c.ba.Jf(a, e, e);
        c.ba.Hk(a, e, e, 1);
        for (g = 0; 4 > g; g++)
            c.ba.Hk(a, e, g, c.ba.Jf(a, e, g) * h);
        for (g = 0; 4 > g; g++)
            c.ba.Hk(b, e, g, c.ba.Jf(b, e, g) * h);
        for (h = 0; 4 > h; h++)
            if (h != 
            e) {
                k = c.ba.Jf(a, h, e);
                c.ba.Hk(a, h, e, 0);
                for (g = 0; 4 > g; g++)
                    c.ba.Hk(a, h, g, c.ba.Jf(a, h, g) - c.ba.Jf(a, e, g) * k);
                for (g = 0; 4 > g; g++)
                    c.ba.Hk(b, h, g, c.ba.Jf(a, h, g) - c.ba.Jf(b, e, g) * k)
            }
    }
    for (g = 3; 0 <= g; g--)
        if (p[g] != m[g])
            for (h = 0; 4 > h; h++)
                c.ba.Ok(a, h, p[g], h, m[g]);
    return c.en
};
c.ba.AB = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
c.v1 = function(a, b) {
    var d = new c.ba, e = new c.ba;
    c.Bj(d, b);
    c.Em(e);
    c.ba.tV(d, e) != c.dn && c.Bj(a, d)
};
c.yea = function(a) {
    for (var b = 0; 16 > b; b++)
        if (c.ba.AB[b] != a.c[b])
            return !1;
    return !0
};
c.Gea = function(a, b) {
    var d, e, f = a.c, g = b.c;
    for (e = 0; 4 > e; ++e)
        for (d = 0; 4 > d; ++d)
            f[4 * e + d] = g[4 * d + e];
    return a
};
c.zi = function(a, b, d) {
    a = a.c;
    var e = b.c[0], f = b.c[1], g = b.c[2], h = b.c[3], k = b.c[4], m = b.c[5], p = b.c[6], r = b.c[7], s = b.c[8], u = b.c[9], t = b.c[10], v = b.c[11], w = b.c[12], y = b.c[13], B = b.c[14];
    b = b.c[15];
    var G = d.c[0], I = d.c[1], E = d.c[2], z = d.c[3], C = d.c[4], x = d.c[5], F = d.c[6], K = d.c[7], L = d.c[8], J = d.c[9], O = d.c[10], R = d.c[11], Q = d.c[12], U = d.c[13], M = d.c[14];
    d = d.c[15];
    a[0] = G * e + I * k + E * s + z * w;
    a[1] = G * f + I * m + E * u + z * y;
    a[2] = G * g + I * p + E * t + z * B;
    a[3] = G * h + I * r + E * v + z * b;
    a[4] = C * e + x * k + F * s + K * w;
    a[5] = C * f + x * m + F * u + K * y;
    a[6] = C * g + x * p + F * t + K * B;
    a[7] = C * h + x * r + F * v + K * 
    b;
    a[8] = L * e + J * k + O * s + R * w;
    a[9] = L * f + J * m + O * u + R * y;
    a[10] = L * g + J * p + O * t + R * B;
    a[11] = L * h + J * r + O * v + R * b;
    a[12] = Q * e + U * k + M * s + d * w;
    a[13] = Q * f + U * m + M * u + d * y;
    a[14] = Q * g + U * p + M * t + d * B;
    a[15] = Q * h + U * r + M * v + d * b
};
c.V_ = function() {
    var a = c.dl.top.c, b = c.Ej.top.c, d = new Float32Array(16);
    d[0] = a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3];
    d[1] = a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3];
    d[2] = a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3];
    d[3] = a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3];
    d[4] = a[0] * b[4] + a[4] * b[5] + a[8] * b[6] + a[12] * b[7];
    d[5] = a[1] * b[4] + a[5] * b[5] + a[9] * b[6] + a[13] * b[7];
    d[6] = a[2] * b[4] + a[6] * b[5] + a[10] * b[6] + a[14] * b[7];
    d[7] = a[3] * b[4] + a[7] * b[5] + a[11] * b[6] + a[15] * b[7];
    d[8] = a[0] * b[8] + a[4] * b[9] + a[8] * b[10] + a[12] * b[11];
    d[9] = a[1] * b[8] + 
    a[5] * b[9] + a[9] * b[10] + a[13] * b[11];
    d[10] = a[2] * b[8] + a[6] * b[9] + a[10] * b[10] + a[14] * b[11];
    d[11] = a[3] * b[8] + a[7] * b[9] + a[11] * b[10] + a[15] * b[11];
    d[12] = a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12] * b[15];
    d[13] = a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13] * b[15];
    d[14] = a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14] * b[15];
    d[15] = a[3] * b[12] + a[7] * b[13] + a[11] * b[14] + a[15] * b[15];
    return d
};
c.Gba = function(a, b, d) {
    a = a.c;
    b = b.c;
    var e = d.c;
    e[0] = a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3];
    e[1] = a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3];
    e[2] = a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3];
    e[3] = a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3];
    e[4] = a[0] * b[4] + a[4] * b[5] + a[8] * b[6] + a[12] * b[7];
    e[5] = a[1] * b[4] + a[5] * b[5] + a[9] * b[6] + a[13] * b[7];
    e[6] = a[2] * b[4] + a[6] * b[5] + a[10] * b[6] + a[14] * b[7];
    e[7] = a[3] * b[4] + a[7] * b[5] + a[11] * b[6] + a[15] * b[7];
    e[8] = a[0] * b[8] + a[4] * b[9] + a[8] * b[10] + a[12] * b[11];
    e[9] = a[1] * b[8] + a[5] * b[9] + a[9] * b[10] + a[13] * 
    b[11];
    e[10] = a[2] * b[8] + a[6] * b[9] + a[10] * b[10] + a[14] * b[11];
    e[11] = a[3] * b[8] + a[7] * b[9] + a[11] * b[10] + a[15] * b[11];
    e[12] = a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12] * b[15];
    e[13] = a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13] * b[15];
    e[14] = a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14] * b[15];
    e[15] = a[3] * b[12] + a[7] * b[13] + a[11] * b[14] + a[15] * b[15];
    return d.c
};
c.Bj = function(a, b) {
    if (a == b)
        c.log("cc.kmMat4Assign(): pOut equals pIn");
    else {
        var d = a.c, e = b.c;
        d[0] = e[0];
        d[1] = e[1];
        d[2] = e[2];
        d[3] = e[3];
        d[4] = e[4];
        d[5] = e[5];
        d[6] = e[6];
        d[7] = e[7];
        d[8] = e[8];
        d[9] = e[9];
        d[10] = e[10];
        d[11] = e[11];
        d[12] = e[12];
        d[13] = e[13];
        d[14] = e[14];
        d[15] = e[15]
    }
};
c.sea = function(a, b) {
    if (a == b)
        return c.log("cc.kmMat4AreEqual(): pMat1 and pMat2 are same object."), !0;
    for (var d = 0; 16 > d; d++)
        if (!(a.c[d] + c.ya > b.c[d] && a.c[d] - c.ya < b.c[d]))
            return !1;
    return !0
};
c.Dea = function(a, b) {
    a.c[0] = 1;
    a.c[1] = 0;
    a.c[2] = 0;
    a.c[3] = 0;
    a.c[4] = 0;
    a.c[5] = Math.cos(b);
    a.c[6] = Math.sin(b);
    a.c[7] = 0;
    a.c[8] = 0;
    a.c[9] = -Math.sin(b);
    a.c[10] = Math.cos(b);
    a.c[11] = 0;
    a.c[12] = 0;
    a.c[13] = 0;
    a.c[14] = 0;
    a.c[15] = 1;
    return a
};
c.Eea = function(a, b) {
    a.c[0] = Math.cos(b);
    a.c[1] = 0;
    a.c[2] = -Math.sin(b);
    a.c[3] = 0;
    a.c[4] = 0;
    a.c[5] = 1;
    a.c[6] = 0;
    a.c[7] = 0;
    a.c[8] = Math.sin(b);
    a.c[9] = 0;
    a.c[10] = Math.cos(b);
    a.c[11] = 0;
    a.c[12] = 0;
    a.c[13] = 0;
    a.c[14] = 0;
    a.c[15] = 1;
    return a
};
c.Fea = function(a, b) {
    a.c[0] = Math.cos(b);
    a.c[1] = Math.sin(b);
    a.c[2] = 0;
    a.c[3] = 0;
    a.c[4] = -Math.sin(b);
    a.c[5] = Math.cos(b);
    a.c[6] = 0;
    a.c[7] = 0;
    a.c[8] = 0;
    a.c[9] = 0;
    a.c[10] = 1;
    a.c[11] = 0;
    a.c[12] = 0;
    a.c[13] = 0;
    a.c[14] = 0;
    a.c[15] = 1;
    return a
};
c.zea = function(a, b, d, e) {
    var f = Math.cos(b);
    b = Math.sin(b);
    var g = Math.cos(d);
    d = Math.sin(d);
    var h = Math.cos(e);
    e = Math.sin(e);
    var k = b * d, m = f * d;
    a.c[0] = g * h;
    a.c[4] = g * e;
    a.c[8] = -d;
    a.c[1] = k * h - f * e;
    a.c[5] = k * e + f * h;
    a.c[9] = b * g;
    a.c[2] = m * h + b * e;
    a.c[6] = m * e - b * h;
    a.c[10] = f * g;
    a.c[3] = a.c[7] = a.c[11] = 0;
    a.c[15] = 1;
    return a
};
c.Aea = function(a, b) {
    a.c[0] = 1 - 2 * (b.y * b.y + b.z * b.z);
    a.c[1] = 2 * (b.x * b.y + b.z * b.G);
    a.c[2] = 2 * (b.x * b.z - b.y * b.G);
    a.c[3] = 0;
    a.c[4] = 2 * (b.x * b.y - b.z * b.G);
    a.c[5] = 1 - 2 * (b.x * b.x + b.z * b.z);
    a.c[6] = 2 * (b.z * b.y + b.x * b.G);
    a.c[7] = 0;
    a.c[8] = 2 * (b.x * b.z + b.y * b.G);
    a.c[9] = 2 * (b.y * b.z - b.x * b.G);
    a.c[10] = 1 - 2 * (b.x * b.x + b.y * b.y);
    a.c[11] = 0;
    a.c[12] = 0;
    a.c[13] = 0;
    a.c[14] = 0;
    a.c[15] = 1;
    return a
};
c.Cea = function(a, b, d) {
    a.c[0] = b.c[0];
    a.c[1] = b.c[1];
    a.c[2] = b.c[2];
    a.c[3] = 0;
    a.c[4] = b.c[3];
    a.c[5] = b.c[4];
    a.c[6] = b.c[5];
    a.c[7] = 0;
    a.c[8] = b.c[6];
    a.c[9] = b.c[7];
    a.c[10] = b.c[8];
    a.c[11] = 0;
    a.c[12] = d.x;
    a.c[13] = d.y;
    a.c[14] = d.z;
    a.c[15] = 1;
    return a
};
c.y1 = function(a, b, d, e) {
    a.c[0] = b;
    a.c[5] = d;
    a.c[10] = e;
    a.c[15] = 1;
    a.c[1] = a.c[2] = a.c[3] = a.c[4] = a.c[6] = a.c[7] = a.c[8] = a.c[9] = a.c[11] = a.c[12] = a.c[13] = a.c[14] = 0
};
c.MN = function(a, b, d, e) {
    a.c[0] = a.c[5] = a.c[10] = a.c[15] = 1;
    a.c[1] = a.c[2] = a.c[3] = a.c[4] = a.c[6] = a.c[7] = a.c[8] = a.c[9] = a.c[11] = 0;
    a.c[12] = b;
    a.c[13] = d;
    a.c[14] = e
};
c.xea = function(a, b) {
    a.x = b.c[4];
    a.y = b.c[5];
    a.z = b.c[6];
    c.vf(a, a);
    return a
};
c.wea = function(a, b) {
    a.x = b.c[0];
    a.y = b.c[1];
    a.z = b.c[2];
    c.vf(a, a);
    return a
};
c.vea = function(a, b) {
    a.x = b.c[8];
    a.y = b.c[9];
    a.z = b.c[10];
    c.vf(a, a);
    return a
};
c.w1 = function(a, b, d) {
    var e = c.Ss(30), f = d - 0.1, g = Math.sin(e);
    0 != f && 0 != g && 0 != b && (e = Math.cos(e) / g, c.Em(a), a.c[0] = e / b, a.c[5] = e, a.c[10] = -(d + 0.1) / f, a.c[11] = -1, a.c[14] = -0.2 * d / f, a.c[15] = 0)
};
c.jF = function(a, b, d, e, f, g, h) {
    c.Em(a);
    a.c[0] = 2 / (d - b);
    a.c[5] = 2 / (f - e);
    a.c[10] = -2 / (h - g);
    a.c[12] = -((d + b) / (d - b));
    a.c[13] = -((f + e) / (f - e));
    a.c[14] = -((h + g) / (h - g))
};
c.LN = function(a, b, d, e) {
    var f = new c.tb, g = new c.tb, h = new c.tb, k = new c.tb, m = new c.ba;
    c.oF(f, d, b);
    c.vf(f, f);
    c.Ts(g, e);
    c.vf(g, g);
    c.al(h, f, g);
    c.vf(h, h);
    c.al(k, h, f);
    c.vf(h, h);
    c.Em(a);
    a.c[0] = h.x;
    a.c[4] = h.y;
    a.c[8] = h.z;
    a.c[1] = k.x;
    a.c[5] = k.y;
    a.c[9] = k.z;
    a.c[2] = -f.x;
    a.c[6] = -f.y;
    a.c[10] = -f.z;
    c.MN(m, -b.x, -b.y, -b.z);
    c.zi(a, a, m)
};
c.x1 = function(a, b, d) {
    var e = Math.cos(d);
    d = Math.sin(d);
    var f = new c.tb;
    c.vf(f, b);
    a.c[0] = e + f.x * f.x * (1 - e);
    a.c[1] = f.z * d + f.y * f.x * (1 - e);
    a.c[2] = -f.y * d + f.z * f.x * (1 - e);
    a.c[3] = 0;
    a.c[4] = -f.z * d + f.x * f.y * (1 - e);
    a.c[5] = e + f.y * f.y * (1 - e);
    a.c[6] = f.x * d + f.z * f.y * (1 - e);
    a.c[7] = 0;
    a.c[8] = f.y * d + f.x * f.z * (1 - e);
    a.c[9] = -f.x * d + f.y * f.z * (1 - e);
    a.c[10] = e + f.z * f.z * (1 - e);
    a.c[11] = 0;
    a.c[12] = 0;
    a.c[13] = 0;
    a.c[14] = 0;
    a.c[15] = 1
};
c.u1 = function(a, b) {
    a.c[0] = b.c[0];
    a.c[1] = b.c[1];
    a.c[2] = b.c[2];
    a.c[3] = b.c[4];
    a.c[4] = b.c[5];
    a.c[5] = b.c[6];
    a.c[6] = b.c[8];
    a.c[7] = b.c[9];
    a.c[8] = b.c[10]
};
c.tea = function(a, b, d) {
    switch (d) {
        case c.jR:
            a.a = b.c[3] - b.c[0];
            a.b = b.c[7] - b.c[4];
            a.D = b.c[11] - b.c[8];
            a.H = b.c[15] - b.c[12];
            break;
        case c.hR:
            a.a = b.c[3] + b.c[0];
            a.b = b.c[7] + b.c[4];
            a.D = b.c[11] + b.c[8];
            a.H = b.c[15] + b.c[12];
            break;
        case c.fR:
            a.a = b.c[3] + b.c[1];
            a.b = b.c[7] + b.c[5];
            a.D = b.c[11] + b.c[9];
            a.H = b.c[15] + b.c[13];
            break;
        case c.kR:
            a.a = b.c[3] - b.c[1];
            a.b = b.c[7] - b.c[5];
            a.D = b.c[11] - b.c[9];
            a.H = b.c[15] - b.c[13];
            break;
        case c.gR:
            a.a = b.c[3] - b.c[2];
            a.b = b.c[7] - b.c[6];
            a.D = b.c[11] - b.c[10];
            a.H = b.c[15] - b.c[14];
            break;
        case c.iR:
            a.a = 
            b.c[3] + b.c[2];
            a.b = b.c[7] + b.c[6];
            a.D = b.c[11] + b.c[10];
            a.H = b.c[15] + b.c[14];
            break;
        default:
            c.log("cc.kmMat4ExtractPlane(): Invalid plane index")
    }
    b = Math.sqrt(a.a * a.a + a.b * a.b + a.D * a.D);
    a.a /= b;
    a.b /= b;
    a.D /= b;
    a.H /= b;
    return a
};
c.Bea = function(a, b, d) {
    b = new ea;
    var e = new c.vx;
    c.u1(e, d);
    c.QN(b, e);
    c.RN(b, a);
    return a
};
c.hR = 0;
c.jR = 1;
c.fR = 2;
c.kR = 3;
c.iR = 4;
c.gR = 5;
c.Hea = function(a, b, d, e) {
    this.a = a || 0;
    this.b = b || 0;
    this.D = d || 0;
    this.H = e || 0
};
c.aS = 0;
c.$R = 1;
c.bS = 2;
c.Jea = function(a, b) {
    return a.a * b.x + a.b * b.y + a.D * b.z + a.H * b.G
};
c.Kea = function(a, b) {
    return a.a * b.x + a.b * b.y + a.D * b.z + a.H
};
c.Lea = function(a, b) {
    return a.a * b.x + a.b * b.y + a.D * b.z
};
c.Mea = function(a, b, d) {
    a.a = d.x;
    a.b = d.y;
    a.D = d.z;
    a.H = -c.mF(d, b);
    return a
};
c.Nea = function(a, b, d, e) {
    var f = new c.tb, g = new c.tb, h = new c.tb;
    c.oF(g, d, b);
    c.oF(h, e, b);
    c.al(f, g, h);
    c.vf(f, f);
    a.a = f.x;
    a.b = f.y;
    a.D = f.z;
    a.H = c.mF(c.nF(f, f, -1), b);
    return a
};
c.Oea = function() {
    throw "cc.kmPlaneIntersectLine() hasn't been implemented.";
};
c.Pea = function(a, b) {
    var d = new c.tb;
    d.x = b.a;
    d.y = b.b;
    d.z = b.D;
    var e = 1 / c.TN(d);
    c.vf(d, d);
    a.a = d.x;
    a.b = d.y;
    a.D = d.z;
    a.H = b.H * e;
    return a
};
c.Qea = function() {
    c.log("cc.kmPlaneScale() has not been implemented.")
};
c.Iea = function(a, b) {
    var d = a.a * b.x + a.b * b.y + a.D * b.z + a.H;
    return 0.001 < d ? c.aS : -0.001 > d ? c.$R : c.bS
};
function ea() {
    this.G = this.z = this.y = this.x = 0
}
c.C1 = function(a, b) {
    a.x = -b.x;
    a.y = -b.y;
    a.z = -b.z;
    a.G = b.G;
    return a
};
c.D1 = function(a, b) {
    return a.G * b.G + a.x * b.x + a.y * b.y + a.z * b.z
};
c.Sea = function(a) {
    return a
};
c.E1 = function(a) {
    a.x = 0;
    a.y = 0;
    a.z = 0;
    a.G = 1
};
c.Tea = function(a, b) {
    var d = c.NN(b), e = new ea;
    if (Math.abs(d) > c.ya)
        return a.x = 0, a.y = 0, a.z = 0, a.G = 0, a;
    c.yx(a, c.C1(e, b), 1 / d);
    return a
};
c.Uea = function(a) {
    return 0 == a.x && 0 == a.y && 0 == a.z && 1 == a.G
};
c.NN = function(a) {
    return Math.sqrt(c.F1(a))
};
c.F1 = function(a) {
    return a.x * a.x + a.y * a.y + a.z * a.z + a.G * a.G
};
c.Vea = function(a) {
    return a
};
c.Wea = function(a, b, d) {
    a.G = b.G * d.G - b.x * d.x - b.y * d.y - b.z * d.z;
    a.x = b.G * d.x + b.x * d.G + b.y * d.z - b.z * d.y;
    a.y = b.G * d.y + b.y * d.G + b.z * d.x - b.x * d.z;
    a.z = b.G * d.z + b.z * d.G + b.x * d.y - b.y * d.x;
    return a
};
c.ON = function(a, b) {
    var d = c.NN(b);
    if (Math.abs(d) <= c.ya)
        throw "cc.kmQuaternionNormalize(): pIn is an invalid value";
    c.yx(a, b, 1 / d)
};
c.PN = function(a, b) {
    var d = 0.5 * c.kF, e = Math.sin(d);
    a.G = Math.cos(d);
    a.x = b.x * e;
    a.y = b.y * e;
    a.z = b.z * e
};
c.QN = function(a, b) {
    var d, e, f, g;
    d = [];
    e = g = 0;
    if (b) {
        d[0] = b.c[0];
        d[1] = b.c[3];
        d[2] = b.c[6];
        d[4] = b.c[1];
        d[5] = b.c[4];
        d[6] = b.c[7];
        d[8] = b.c[2];
        d[9] = b.c[5];
        d[10] = b.c[8];
        d[15] = 1;
        var h = d[0];
        e = h[0] + h[5] + h[10] + 1;
        e > c.ya ? (g = 2 * Math.sqrt(e), d = (h[9] - h[6]) / g, e = (h[2] - h[8]) / g, f = (h[4] - h[1]) / g, g *= 0.25) : h[0] > h[5] && h[0] > h[10] ? (g = 2 * Math.sqrt(1 + h[0] - h[5] - h[10]), d = 0.25 * g, e = (h[4] + h[1]) / g, f = (h[2] + h[8]) / g, g = (h[9] - h[6]) / g) : h[5] > h[10] ? (g = 2 * Math.sqrt(1 + h[5] - h[0] - h[10]), d = (h[4] + h[1]) / g, e = 0.25 * g, f = (h[9] + h[6]) / g, g = (h[2] - h[8]) / g) : (g = 2 * Math.sqrt(1 + 
        h[10] - h[0] - h[5]), d = (h[2] + h[8]) / g, e = (h[9] + h[6]) / g, f = 0.25 * g, g = (h[4] - h[1]) / g);
        a.x = d;
        a.y = e;
        a.z = f;
        a.G = g
    }
};
c.Zea = function(a, b, d, e) {
    var f, g, h, k, m;
    f = c.Ss(d) / 2;
    g = c.Ss(b) / 2;
    h = c.Ss(e) / 2;
    e = Math.cos(f);
    b = Math.cos(g);
    d = Math.cos(h);
    f = Math.sin(f);
    g = Math.sin(g);
    h = Math.sin(h);
    k = b * d;
    m = g * h;
    a.G = e * k + f * m;
    a.x = f * k - e * m;
    a.y = e * g * d + f * b * h;
    a.z = e * b * h - f * g * d;
    c.ON(a, a);
    return a
};
c.$ea = function(a, b, d, e) {
    if (b.x == d.x && b.y == d.y && b.z == d.z && b.G == d.G)
        return a.x = b.x, a.y = b.y, a.z = b.z, a.G = b.G, a;
    var f = c.D1(b, d), g = Math.acos(f), f = Math.sqrt(1 - c.Hc(f)), h = Math.sin(e * g) / f, k = new ea, m = new ea;
    c.yx(k, b, Math.sin((1 - e) * g) / f);
    c.yx(m, d, h);
    c.B1(a, k, m);
    return a
};
c.RN = function(a, b) {
    var d;
    d = Math.sqrt(c.Hc(a.x) + c.Hc(a.y) + c.Hc(a.z));
    d > -c.ya && d < c.ya || d < 2 * c.kF + c.ya && d > 2 * c.kF - c.ya ? (b.x = 0, b.y = 0, b.z = 1) : (b.x = a.x / d, b.y = a.y / d, b.z = a.z / d, c.vf(b, b))
};
c.yx = function(a, b, d) {
    a.x = b.x * d;
    a.y = b.y * d;
    a.z = b.z * d;
    a.G = b.G * d
};
c.Rea = function(a, b) {
    a.x = b.x;
    a.y = b.y;
    a.z = b.z;
    a.G = b.G;
    return a
};
c.B1 = function(a, b, d) {
    a.x = b.x + d.x;
    a.y = b.y + d.y;
    a.z = b.z + d.z;
    a.G = b.G + d.G
};
c.Yea = function(a, b, d, e) {
    var f = new c.tb, g = new c.tb;
    c.Ts(f, b);
    c.Ts(g, d);
    c.vf(f, f);
    c.vf(g, g);
    d = c.mF(f, g);
    if (1 <= d)
        return c.E1(a), a;
    -0.999999 > d ? Math.abs(c.UN(e)) < c.ya ? c.PN(a, e) : (f = new c.tb, g = new c.tb, g.x = 1, g.y = 0, g.z = 0, c.al(f, g, b), Math.abs(c.UN(f)) < c.ya && (g = new c.tb, g.x = 0, g.y = 1, g.z = 0, c.al(f, g, b)), c.vf(f, f), c.PN(a, f)) : (b = Math.sqrt(2 * (1 + d)), e = 1 / b, d = new c.tb, c.al(d, f, g), a.x = d.x * e, a.y = d.y * e, a.z = d.z * e, a.G = 0.5 * b, c.ON(a, a));
    return a
};
c.Xea = function(a, b, d) {
    var e = new c.tb, f = new c.tb, g = new c.tb;
    g.x = b.x;
    g.y = b.y;
    g.z = b.z;
    c.al(e, g, d);
    c.al(f, g, e);
    c.nF(e, e, 2 * b.G);
    c.nF(f, f, 2);
    c.SN(a, d, e);
    c.SN(a, a, f);
    return a
};
c.Rda = function(a, b) {
    this.min = a || new c.tb;
    this.max = b || new c.tb
};
c.Tda = function(a, b) {
    return a.x >= b.min.x && a.x <= b.max.x && a.y >= b.min.y && a.y <= b.max.y && a.z >= b.min.z && a.z <= b.max.z ? c.en : c.dn
};
c.Sda = function(a, b) {
    c.Ts(a.min, b.min);
    c.Ts(a.max, b.max);
    return a
};
c.Uda = function() {
    c.log("cc.kmAABBScale hasn't been supported.")
};
c.Bx = function(a, b, d, e) {
    this.top = d;
    this.stack = e
};
c.Bx.i6 = 30;
c.pF = function(a) {
    a.stack = [];
    a.top = null
};
c.Cx = function(a, b) {
    a.stack.push(a.top);
    a.top = new c.ba;
    c.Bj(a.top, b)
};
c.Ffa = function(a) {
    a.top = a.stack.pop()
};
c.qF = function(a) {
    a.stack = null;
    a.top = null
};
c.Ki = 5888;
c.Li = 5889;
c.TG = 5890;
c.Ej = new c.Bx;
c.dl = new c.Bx;
c.xt = new c.Bx;
c.Ub = null;
c.aF = !1;
c.L1 = function() {
    if (!c.aF) {
        var a = new c.ba;
        c.pF(c.Ej);
        c.pF(c.dl);
        c.pF(c.xt);
        c.Ub = c.Ej;
        c.aF = !0;
        c.Em(a);
        c.Cx(c.Ej, a);
        c.Cx(c.dl, a);
        c.Cx(c.xt, a)
    }
};
c.L1();
c.r1 = function() {
    c.qF(c.Ej);
    c.qF(c.dl);
    c.qF(c.xt);
    c.aF = !1;
    c.Ub = null
};
c.Dm = function() {
    c.Cx(c.Ub, c.Ub.top)
};
c.Zda = function(a) {
    c.Ub.stack.push(c.Ub.top);
    c.Bj(a, c.Ub.top);
    c.Ub.top = a
};
c.Cm = function() {
    c.Ub.top = c.Ub.stack.pop()
};
c.yi = function(a) {
    switch (a) {
        case c.Ki:
            c.Ub = c.Ej;
            break;
        case c.Li:
            c.Ub = c.dl;
            break;
        case c.TG:
            c.Ub = c.xt;
            break;
        default:
            throw "Invalid matrix mode specified";
    }
};
c.Zo = function() {
    c.Em(c.Ub.top)
};
c.Yda = function(a) {
    c.Bj(c.Ub.top, a)
};
c.$o = function(a) {
    c.zi(c.Ub.top, c.Ub.top, a)
};
c.ap = function(a, b) {
    var d = new c.ba;
    c.MN(d, a, b, 0);
    c.zi(c.Ub.top, c.Ub.top, d)
};
c.$da = function(a, b, d, e) {
    b = new c.tb(b, d, e);
    d = new c.ba;
    c.x1(d, b, c.Ss(a));
    c.zi(c.Ub.top, c.Ub.top, d)
};
c.aea = function(a, b, d) {
    var e = new c.ba;
    c.y1(e, a, b, d);
    c.zi(c.Ub.top, c.Ub.top, e)
};
c.ux = function(a, b) {
    switch (a) {
        case c.Ki:
            c.Bj(b, c.Ej.top);
            break;
        case c.Li:
            c.Bj(b, c.dl.top);
            break;
        case c.TG:
            c.Bj(b, c.xt.top);
            break;
        default:
            throw "Invalid matrix mode specified";
    }
};
c.xS = "precision lowp float;\nvarying vec4 v_fragmentColor;\nvoid main()                              \n{ \n    gl_FragColor \x3d v_fragmentColor;      \n}\n";
c.yS = "attribute vec4 a_position;\nuniform    vec4 u_color;\nuniform float u_pointSize;\nvarying lowp vec4 v_fragmentColor; \nvoid main(void)   \n{\n    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n    gl_PointSize \x3d u_pointSize;          \n    v_fragmentColor \x3d u_color;           \n}";
c.lS = "precision lowp float; \nvarying vec4 v_fragmentColor; \nvoid main() \n{ \n     gl_FragColor \x3d v_fragmentColor; \n} ";
c.oS = "attribute vec4 a_position;\nattribute vec4 a_color;\nvarying lowp vec4 v_fragmentColor;\nvoid main()\n{\n    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_fragmentColor \x3d a_color;             \n}";
c.mS = "// #extension GL_OES_standard_derivatives : enable\nvarying mediump vec4 v_color;\nvarying mediump vec2 v_texcoord;\nvoid main()\t\n{ \n// #if defined GL_OES_standard_derivatives\t\n// gl_FragColor \x3d v_color*smoothstep(0.0, length(fwidth(v_texcoord)), 1.0 - length(v_texcoord)); \n// #else\t\ngl_FragColor \x3d v_color * step(0.0, 1.0 - length(v_texcoord)); \n// #endif \n}";
c.nS = "attribute mediump vec4 a_position; \nattribute mediump vec2 a_texcoord; \nattribute mediump vec4 a_color;\t\nvarying mediump vec4 v_color; \nvarying mediump vec2 v_texcoord;\t\nvoid main() \n{ \n     v_color \x3d a_color;//vec4(a_color.rgb * a_color.a, a_color.a); \n     v_texcoord \x3d a_texcoord; \n    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n}";
c.tS = "precision lowp float;   \nvarying vec2 v_texCoord;  \nuniform sampler2D CC_Texture0; \nvoid main() \n{  \n    gl_FragColor \x3d  texture2D(CC_Texture0, v_texCoord);   \n}";
c.wS = "attribute vec4 a_position; \nattribute vec2 a_texCoord; \nvarying mediump vec2 v_texCoord; \nvoid main() \n{ \n    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_texCoord \x3d a_texCoord;               \n}";
c.uS = "precision lowp float;  \nuniform vec4 u_color; \nvarying vec2 v_texCoord; \nuniform sampler2D CC_Texture0;  \nvoid main() \n{  \n    gl_FragColor \x3d  texture2D(CC_Texture0, v_texCoord) * u_color;    \n}";
c.vS = "attribute vec4 a_position;\nattribute vec2 a_texCoord; \nvarying mediump vec2 v_texCoord; \nvoid main() \n{ \n    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_texCoord \x3d a_texCoord;                 \n}";
c.pS = "precision lowp float;  \nvarying vec4 v_fragmentColor; \nvarying vec2 v_texCoord; \nuniform sampler2D CC_Texture0; \nvoid main() \n{ \n    gl_FragColor \x3d vec4( v_fragmentColor.rgb,         \n        v_fragmentColor.a * texture2D(CC_Texture0, v_texCoord).a   \n    ); \n}";
c.qS = "attribute vec4 a_position; \nattribute vec2 a_texCoord; \nattribute vec4 a_color;  \nvarying lowp vec4 v_fragmentColor; \nvarying mediump vec2 v_texCoord; \nvoid main() \n{ \n    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_fragmentColor \x3d a_color; \n    v_texCoord \x3d a_texCoord; \n}";
c.sS = "precision lowp float;\nvarying vec4 v_fragmentColor; \nvarying vec2 v_texCoord; \nuniform sampler2D CC_Texture0; \nvoid main() \n{ \n    gl_FragColor \x3d v_fragmentColor * texture2D(CC_Texture0, v_texCoord); \n}";
c.BH = "attribute vec4 a_position; \nattribute vec2 a_texCoord; \nattribute vec4 a_color;  \nvarying lowp vec4 v_fragmentColor; \nvarying mediump vec2 v_texCoord; \nvoid main() \n{ \n    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_fragmentColor \x3d a_color; \n    v_texCoord \x3d a_texCoord; \n}";
c.rS = "precision lowp float;   \nvarying vec4 v_fragmentColor; \nvarying vec2 v_texCoord;   \nuniform sampler2D CC_Texture0; \nuniform float CC_alpha_value; \nvoid main() \n{  \n    vec4 texColor \x3d texture2D(CC_Texture0, v_texCoord);  \n    // mimic: glAlphaFunc(GL_GREATER)           \n    //pass if ( incoming_pixel \x3e\x3d CC_alpha_value ) \x3d\x3e fail if incoming_pixel \x3c CC_alpha_value   \n    if ( texColor.a \x3c\x3d CC_alpha_value )          \n        discard; \n    gl_FragColor \x3d texColor * v_fragmentColor;  \n}";
c.S6 = "precision lowp float; \nvarying vec4 v_fragmentColor; \nvarying vec2 v_texCoord; \nuniform sampler2D u_texture;  \nuniform sampler2D   u_mask;   \nvoid main()  \n{  \n    vec4 texColor   \x3d texture2D(u_texture, v_texCoord);  \n    vec4 maskColor  \x3d texture2D(u_mask, v_texCoord); \n    vec4 finalColor \x3d vec4(texColor.r, texColor.g, texColor.b, maskColor.a * texColor.a);        \n    gl_FragColor    \x3d v_fragmentColor * finalColor; \n}";
c.Jd = {Sz: 0,Tz: 1,Qz: 2,Rz: 3,Vz: 4,Uz: 5,Wz: 6,NH: 7,q7: 8,jd: {},wr: function() {
        this.O1();
        return !0
    },Ce: function(a, b) {
        switch (b) {
            case this.Sz:
                a.xi(c.BH, c.sS);
                a.od(c.kl, c.pb);
                a.od(c.Hp, c.we);
                a.od(c.Um, c.ud);
                break;
            case this.Tz:
                a.xi(c.BH, c.rS);
                a.od(c.kl, c.pb);
                a.od(c.Hp, c.we);
                a.od(c.Um, c.ud);
                break;
            case this.Qz:
                a.xi(c.oS, c.lS);
                a.od(c.kl, c.pb);
                a.od(c.Hp, c.we);
                break;
            case this.Rz:
                a.xi(c.wS, c.tS);
                a.od(c.kl, c.pb);
                a.od(c.Um, c.ud);
                break;
            case this.Vz:
                a.xi(c.vS, c.uS);
                a.od(c.kl, c.pb);
                a.od(c.Um, c.ud);
                break;
            case this.Uz:
                a.xi(c.qS, 
                c.pS);
                a.od(c.kl, c.pb);
                a.od(c.Hp, c.we);
                a.od(c.Um, c.ud);
                break;
            case this.Wz:
                a.xi(c.yS, c.xS);
                a.od("aVertex", c.pb);
                break;
            case this.NH:
                a.xi(c.nS, c.mS);
                a.od(c.kl, c.pb);
                a.od(c.Um, c.ud);
                a.od(c.Hp, c.we);
                break;
            default:
                c.log("cocos2d: cc.shaderCache._loadDefaultShader, error shader type");
                return
        }
        a.link();
        a.J4()
    },O1: function() {
        var a = new c.Ph;
        this.Ce(a, this.Sz);
        this.jd[c.Qi] = a;
        this.jd.ShaderPositionTextureColor = a;
        a = new c.Ph;
        this.Ce(a, this.Tz);
        this.jd[c.qu] = a;
        this.jd.ShaderPositionTextureColorAlphaTest = a;
        a = new c.Ph;
        this.Ce(a, this.Qz);
        this.jd[c.pu] = a;
        this.jd.ShaderPositionColor = a;
        a = new c.Ph;
        this.Ce(a, this.Rz);
        this.jd[c.vq] = a;
        this.jd.ShaderPositionTexture = a;
        a = new c.Ph;
        this.Ce(a, this.Vz);
        this.jd[c.Hz] = a;
        this.jd.ShaderPositionTextureUColor = a;
        a = new c.Ph;
        this.Ce(a, this.Uz);
        this.jd[c.Gz] = a;
        this.jd.ShaderPositionTextureA8Color = a;
        a = new c.Ph;
        this.Ce(a, this.Wz);
        this.jd[c.Iz] = a;
        this.jd.ShaderPositionUColor = a;
        a = new c.Ph;
        this.Ce(a, this.NH);
        this.jd[c.AH] = a;
        this.jd.ShaderPositionLengthTextureColor = a
    },gha: function() {
        var a = this.mc(c.Qi);
        a.reset();
        this.Ce(a, this.Sz);
        a = this.mc(c.qu);
        a.reset();
        this.Ce(a, this.Tz);
        a = this.mc(c.pu);
        a.reset();
        this.Ce(a, this.Qz);
        a = this.mc(c.vq);
        a.reset();
        this.Ce(a, this.Rz);
        a = this.mc(c.Hz);
        a.reset();
        this.Ce(a, this.Vz);
        a = this.mc(c.Gz);
        a.reset();
        this.Ce(a, this.Uz);
        a = this.mc(c.Iz);
        a.reset();
        this.Ce(a, this.Wz)
    },mc: function(a) {
        return this.jd[a]
    },Am: function(a) {
        return this.jd[a]
    },e9: function(a, b) {
        this.jd[b] = a
    }};
c.WQ = function() {
    this.location = this.value = void 0;
    this.fx = {}
};
c.Ph = c.la.extend({ga: null,Eb: null,of: null,wg: null,xb: null,bh: null,LL: !1,Ie: function(a, b) {
        if (null == a)
            return !1;
        for (var d = !0, e = null, f = 0; f < this.bh.length; f++)
            this.bh[f].location == a && (e = this.bh[f]);
        e ? e.value == b ? d = !1 : e.value = b : (e = new c.WQ, e.location = a, e.value = b, this.bh.push(e));
        return d
    },a8: function() {
        return "\x3cCCGLProgram \x3d " + this.toString() + " | Program \x3d " + this.Eb.toString() + ", VertexShader \x3d " + this.of.toString() + ", FragmentShader \x3d " + this.wg.toString() + "\x3e"
    },TI: function(a, b, d) {
        if (!d || 
        !a)
            return !1;
        this.ga.shaderSource(a, "precision highp float;        \nuniform mat4 CC_PMatrix;         \nuniform mat4 CC_MVMatrix;        \nuniform mat4 CC_MVPMatrix;       \nuniform vec4 CC_Time;            \nuniform vec4 CC_SinTime;         \nuniform vec4 CC_CosTime;         \nuniform vec4 CC_Random01;        \n//CC INCLUDES END                \n" + d);
        this.ga.compileShader(a);
        d = this.ga.getShaderParameter(a, this.ga.COMPILE_STATUS);
        d || (c.log("cocos2d: ERROR: Failed to compile shader:\n" + this.ga.getShaderSource(a)), 
        b == this.ga.VERTEX_SHADER ? c.log("cocos2d: \n" + this.N4()) : c.log("cocos2d: \n" + this.m_()));
        return 1 == d
    },ctor: function(a, b, d) {
        this.xb = [];
        this.bh = [];
        this.ga = d || c.k;
        a && b && this.M(a, b)
    },b$: function() {
        this.bh = this.xb = this.wg = this.of = null;
        this.ga.deleteProgram(this.Eb)
    },xi: function(a, b) {
        var d = this.ga;
        this.Eb = d.createProgram();
        this.wg = this.of = null;
        a && (this.of = d.createShader(d.VERTEX_SHADER), this.TI(this.of, d.VERTEX_SHADER, a) || c.log("cocos2d: ERROR: Failed to compile vertex shader"));
        b && (this.wg = d.createShader(d.FRAGMENT_SHADER), 
        this.TI(this.wg, d.FRAGMENT_SHADER, b) || c.log("cocos2d: ERROR: Failed to compile fragment shader"));
        this.of && d.attachShader(this.Eb, this.of);
        c.Go();
        this.wg && d.attachShader(this.Eb, this.wg);
        this.bh.length = 0;
        c.Go();
        return !0
    },pd: function(a, b) {
        return this.xi(a, b)
    },U0: function(a, b) {
        var d = c.W.Dd(a);
        if (!d)
            throw "Please load the resource firset : " + a;
        var e = c.W.Dd(b);
        if (!e)
            throw "Please load the resource firset : " + b;
        return this.xi(d, e)
    },M: function(a, b) {
        return this.U0(a, b)
    },od: function(a, b) {
        this.ga.bindAttribLocation(this.Eb, 
        b, a)
    },link: function() {
        if (!this.Eb)
            return c.log("cc.GLProgram.link(): Cannot link invalid program"), !1;
        this.ga.linkProgram(this.Eb);
        this.of && this.ga.deleteShader(this.of);
        this.wg && this.ga.deleteShader(this.wg);
        this.wg = this.of = null;
        return c.Fc.Me[c.Fc.Ug.As] && !this.ga.getProgramParameter(this.Eb, this.ga.LINK_STATUS) ? (c.log("cocos2d: ERROR: Failed to link program: " + this.ga.getProgramInfoLog(this.Eb)), c.A0(this.Eb), this.Eb = null, !1) : !0
    },Jc: function() {
        c.QE(this.Eb)
    },J4: function() {
        this.xb[c.fA] = this.ga.getUniformLocation(this.Eb, 
        c.ZT);
        this.xb[c.eA] = this.ga.getUniformLocation(this.Eb, c.XT);
        this.xb[c.Mq] = this.ga.getUniformLocation(this.Eb, c.YT);
        this.xb[c.jA] = this.ga.getUniformLocation(this.Eb, c.cU);
        this.xb[c.iA] = this.ga.getUniformLocation(this.Eb, c.bU);
        this.xb[c.dA] = this.ga.getUniformLocation(this.Eb, c.WT);
        this.LL = null != this.xb[c.jA] || null != this.xb[c.iA] || null != this.xb[c.dA];
        this.xb[c.gA] = this.ga.getUniformLocation(this.Eb, c.$T);
        this.xb[c.hA] = this.ga.getUniformLocation(this.Eb, c.aU);
        this.Jc();
        this.jP(this.xb[c.hA], 0)
    },Qca: function(a) {
        if (!a)
            throw "cc.GLProgram.getUniformLocationForName(): uniform name should be non-null";
        if (!this.Eb)
            throw "cc.GLProgram.getUniformLocationForName(): Invalid operation. Cannot get uniform location when program is not initialized";
        return this.ga.getUniformLocation(this.Eb, a)
    },Rca: function() {
        return this.xb[c.Mq]
    },Sca: function() {
        return this.xb[c.hA]
    },jP: function(a, b) {
        this.Ie(a, b) && this.ga.uniform1i(a, b)
    },Ija: function(a, b, d) {
        this.Ie(a, [b, d]) && this.ga.uniform2i(a, b, d)
    },Lja: function(a, b, d, e) {
        this.Ie(a, [b, d, e]) && this.ga.uniform3i(a, b, d, e)
    },Oja: function(a, b, d, e, f) {
        this.Ie(a, [b, d, e, f]) && this.ga.uniform4i(a, 
        b, d, e, f)
    },Jja: function(a, b) {
        this.Ie(a, b) && this.ga.uniform2iv(a, b)
    },Mja: function(a, b) {
        this.Ie(a, b) && this.ga.uniform3iv(a, b)
    },Pja: function(a, b) {
        this.Ie(a, b) && this.ga.uniform4iv(a, b)
    },Gja: function(a, b) {
        this.jP(a, b)
    },rt: function(a, b) {
        this.Ie(a, b) && this.ga.uniform1f(a, b)
    },S3: function(a, b, d) {
        this.Ie(a, [b, d]) && this.ga.uniform2f(a, b, d)
    },T3: function(a, b, d, e) {
        this.Ie(a, [b, d, e]) && this.ga.uniform3f(a, b, d, e)
    },st: function(a, b, d, e, f) {
        this.Ie(a, [b, d, e, f]) && this.ga.uniform4f(a, b, d, e, f)
    },Hja: function(a, b) {
        this.Ie(a, 
        b) && this.ga.uniform2fv(a, b)
    },Kja: function(a, b) {
        this.Ie(a, b) && this.ga.uniform3fv(a, b)
    },Nja: function(a, b) {
        this.Ie(a, b) && this.ga.uniform4fv(a, b)
    },dG: function(a, b) {
        this.Ie(a, b) && this.ga.uniformMatrix4fv(a, !1, b)
    },Fja: function() {
        if (!(2 > arguments.length))
            switch (arguments.length) {
                case 2:
                    this.rt(arguments[0], arguments[1]);
                    break;
                case 3:
                    this.S3(arguments[0], arguments[1], arguments[2]);
                    break;
                case 4:
                    this.T3(arguments[0], arguments[1], arguments[2], arguments[3]);
                    break;
                case 5:
                    this.st(arguments[0], arguments[1], arguments[2], 
                    arguments[3], arguments[4])
            }
    },tt: function() {
        var a = new c.ba, b = new c.ba, d = new c.ba;
        c.ux(c.Li, a);
        c.ux(c.Ki, b);
        c.zi(d, a, b);
        this.dG(this.xb[c.fA], a.c, 1);
        this.dG(this.xb[c.eA], b.c, 1);
        this.dG(this.xb[c.Mq], d.c, 1);
        this.LL && (a = c.C, a = a.tw * a.Uq, this.st(this.xb[c.jA], a / 10, a, 2 * a, 4 * a), this.st(this.xb[c.iA], a / 8, a / 4, a / 2, Math.sin(a)), this.st(this.xb[c.dA], a / 8, a / 4, a / 2, Math.cos(a)));
        -1 != this.xb[c.gA] && this.st(this.xb[c.gA], Math.random(), Math.random(), Math.random(), Math.random())
    },Dja: function() {
        this.ga.uniformMatrix4fv(this.xb[c.Mq], 
        !1, c.V_())
    },Eja: function(a) {
        c.zi(a, c.dl.top, c.Ej.top);
        this.ga.uniformMatrix4fv(this.xb[c.Mq], !1, a.c)
    },Ye: function() {
        this.ga.uniformMatrix4fv(this.xb[c.eA], !1, c.Ej.top.c);
        this.ga.uniformMatrix4fv(this.xb[c.fA], !1, c.dl.top.c)
    },N4: function() {
        return this.ga.getShaderInfoLog(this.of)
    },Xca: function() {
        return this.ga.getShaderInfoLog(this.of)
    },lba: function() {
        return this.ga.getShaderInfoLog(this.of)
    },m_: function() {
        return this.ga.getShaderInfoLog(this.wg)
    },Pga: function() {
        return this.ga.getProgramInfoLog(this.Eb)
    },
    gca: function() {
        return this.ga.getProgramInfoLog(this.Eb)
    },reset: function() {
        this.wg = this.of = null;
        this.xb.length = 0;
        this.ga.deleteProgram(this.Eb);
        this.Eb = null;
        for (var a = 0; a < this.bh.length; a++)
            this.bh[a].value = null, this.bh[a] = null;
        this.bh.length = 0
    },Am: function() {
        return this.Eb
    },by: function() {
    },Ei: function() {
    }});
c.Ph.create = function(a, b) {
    return new c.Ph(a, b)
};
c.ZI = -1;
c.BD = !1;
c.AD = !1;
c.CD = !1;
c.Wg && (c.vR = 16, c.er = -1, c.dr = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], c.sn = -1, c.rn = -1, c.mU = 0, c.Mz && (c.DL = 0));
c.fda = function() {
    c.r1();
    c.ZI = -1;
    c.BD = !1;
    c.AD = !1;
    c.CD = !1;
    if (c.Wg) {
        c.er = -1;
        for (var a = 0; a < c.vR; a++)
            c.dr[a] = -1;
        c.sn = -1;
        c.rn = -1;
        c.mU = 0
    }
};
c.QE = function(a) {
    a !== c.er && (c.er = a, c.k.useProgram(a))
};
c.Wg || (c.QE = function(a) {
    c.k.useProgram(a)
});
c.A0 = function(a) {
    c.Wg && a === c.er && (c.er = -1);
    gl.deleteProgram(a)
};
c.Fh = function(a, b) {
    if (a !== c.sn || b !== c.rn)
        c.sn = a, c.rn = b, c.hy(a, b)
};
c.hy = function(a, b) {
    var d = c.k;
    a === d.ONE && b === d.ZERO ? d.disable(d.BLEND) : (d.enable(d.BLEND), c.k.blendFunc(a, b))
};
c.mN = function(a, b) {
    if (a !== c.sn || b !== c.rn) {
        c.sn = a;
        c.rn = b;
        var d = c.k;
        a === d.ONE && b === d.ZERO ? d.disable(d.BLEND) : (d.enable(d.BLEND), d.blendFuncSeparate(d.SRC_ALPHA, b, a, b))
    }
};
c.Wg || (c.Fh = c.hy);
c.cda = function() {
    var a = c.k;
    a.blendEquation(a.FUNC_ADD);
    c.Wg ? c.hy(c.sn, c.rn) : c.hy(a.gc, a.fc)
};
c.ZO = function() {
    c.ZI = -1
};
c.Gc = function(a) {
    var b = c.k, d = a & c.Md;
    d !== c.BD && (d ? b.enableVertexAttribArray(c.pb) : b.disableVertexAttribArray(c.pb), c.BD = d);
    d = a & c.Au;
    d !== c.AD && (d ? b.enableVertexAttribArray(c.we) : b.disableVertexAttribArray(c.we), c.AD = d);
    a &= c.ln;
    a !== c.CD && (a ? b.enableVertexAttribArray(c.ud) : b.disableVertexAttribArray(c.ud), c.CD = a)
};
c.qe = function(a) {
    c.PE(0, a)
};
c.PE = function(a, b) {
    if (c.dr[a] != b) {
        c.dr[a] = b;
        var d = c.k;
        d.activeTexture(d.TEXTURE0 + a);
        b ? d.bindTexture(d.TEXTURE_2D, b.Vd) : d.bindTexture(d.TEXTURE_2D, null)
    }
};
c.Wg || (c.PE = function(a, b) {
    var d = c.k;
    d.activeTexture(d.TEXTURE0 + a);
    b ? d.bindTexture(d.TEXTURE_2D, b.Vd) : d.bindTexture(d.TEXTURE_2D, null)
});
c.dda = function(a) {
    c.B0(a)
};
c.B0 = function(a) {
    c.Wg && a == c.dr[0] && (c.dr[0] = -1);
    c.k.deleteTexture(a)
};
c.bda = function(a) {
    c.Mz && c.Wg && c.DL != a && (c.DL = a)
};
c.eda = function() {
};
c.d6 = 0;
c.e6 = 1;
c.f6 = 2;
c.Tj = function(a) {
    a -= 1;
    a |= a >> 1;
    a |= a >> 2;
    a |= a >> 4;
    a |= a >> 8;
    return (a | a >> 16) + 1
};
c.gn = c.q.extend({sprite: null,Jw: 0,cE: 0,us: !1,ae: null,ye: null,ov: 0,fr: 0,hi: 0,J: null,es: null,oY: null,ji: c.da.Pi,Ui: null,dE: 0,QA: null,sb: "RenderTexture",ctor: null,br: function(a, b, d, e) {
        c.q.prototype.ctor.call(this);
        this.Ui = c.color(255, 255, 255, 255);
        this.QA = "rgba(255,255,255,1)";
        this.ae = c.Kb("canvas");
        this.ye = this.ae.getContext("2d");
        this.anchorY = this.anchorX = 0;
        void 0 !== a && void 0 !== b && (d = d || c.da.Pi, this.ox(a, b, d, e || 0))
    },cr: function(a, b, d, e) {
        c.q.prototype.ctor.call(this);
        this.Ui = c.color(0, 0, 0, 0);
        void 0 !== 
        a && void 0 !== b && (d = d || c.da.Pi, this.ox(a, b, d, e || 0))
    },Le: null,QU: function() {
        c.q.prototype.yb.call(this);
        this.ae = this.ye = null
    },RU: function() {
        c.q.prototype.yb.call(this);
        this.es = null;
        var a = c.k;
        a.deleteFramebuffer(this.ov);
        this.fr && a.deleteRenderbuffer(this.fr);
        this.oY = null
    },eN: function() {
        return this.sprite
    },py: function(a) {
        this.sprite = a
    },ox: null,nW: function(a, b) {
        var d = this.ae, e = c.qb();
        d.width = 0 | a * e;
        d.height = 0 | b * e;
        this.ye.translate(0, d.height);
        e = new c.da;
        e.Ed(d);
        e.Vb();
        this.sprite = c.P.create(e);
        return !0
    },
    oW: function(a, b, d, e) {
        d == c.da.mq && c.log("cc.RenderTexture._initWithWidthAndHeightForWebGL() : only RGB and RGBA formats are valid for a render texture;");
        var f = c.k, g = c.qb();
        a = 0 | a * g;
        b = 0 | b * g;
        this.hi = f.getParameter(f.FRAMEBUFFER_BINDING);
        var h;
        c.Ho.qw ? (g = a, h = b) : (g = c.Tj(a), h = c.Tj(b));
        for (var k = new Uint8Array(g * h * 4), m = 0; m < g * h * 4; m++)
            k[m] = 0;
        this.ji = d;
        this.J = new c.da;
        if (!this.J)
            return !1;
        m = this.J;
        m.Os(k, this.ji, g, h, P(a, b));
        d = f.getParameter(f.RENDERBUFFER_BINDING);
        if (c.Ho.Fo("GL_QCOM")) {
            this.es = new c.da;
            if (!this.es)
                return !1;
            this.es.Os(k, this.ji, g, h, P(a, b))
        }
        this.ov = f.createFramebuffer();
        f.bindFramebuffer(f.FRAMEBUFFER, this.ov);
        f.framebufferTexture2D(f.FRAMEBUFFER, f.COLOR_ATTACHMENT0, f.TEXTURE_2D, m.Vd, 0);
        0 != e && (this.fr = f.createRenderbuffer(), f.bindRenderbuffer(f.RENDERBUFFER, this.fr), f.renderbufferStorage(f.RENDERBUFFER, e, g, h), f.framebufferRenderbuffer(f.FRAMEBUFFER, f.DEPTH_ATTACHMENT, f.RENDERBUFFER, this.fr));
        f.checkFramebufferStatus(f.FRAMEBUFFER) !== f.FRAMEBUFFER_COMPLETE && c.log("Could not attach texture to the framebuffer");
        m.LF();
        a = this.sprite = c.P.create(m);
        a.scaleY = -1;
        a.Te(f.ONE, f.ONE_MINUS_SRC_ALPHA);
        f.bindRenderbuffer(f.RENDERBUFFER, d);
        f.bindFramebuffer(f.FRAMEBUFFER, this.hi);
        this.us = !1;
        this.L(a);
        return !0
    },xh: null,CU: function() {
        c.k = this.ye;
        c.view.jL()
    },DU: function() {
        c.yi(c.Li);
        c.Dm();
        c.yi(c.Ki);
        c.Dm();
        var a = c.C;
        a.Om(a.mi);
        var b = this.J.Q, d = c.C.Js(), a = d.width / b.width, d = d.height / b.height, e = c.k;
        e.viewport(0, 0, b.width, b.height);
        b = new c.ba;
        c.jF(b, -1 / a, 1 / a, -1 / d, 1 / d, -1, 1);
        c.$o(b);
        this.hi = e.getParameter(e.FRAMEBUFFER_BINDING);
        e.bindFramebuffer(e.FRAMEBUFFER, this.ov);
        c.Ho.Fo("GL_QCOM") && (e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.es.Vd, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.J.Vd, 0))
    },cZ: function(a, b, d, e, f, g) {
        var h = c.k;
        f = f || h.COLOR_BUFFER_BIT;
        g = g || h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT;
        this.GA(a, b, d, e, f, g, h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT | h.STENCIL_BUFFER_BIT)
    },GA: null,EU: function(a, b, d, e) {
        this.xh();
        a = 
        a || 0;
        b = b || 0;
        d = d || 0;
        e = isNaN(e) ? 1 : e;
        var f = this.ye, g = this.ae;
        f.save();
        f.fillStyle = "rgba(" + (0 | a) + "," + (0 | b) + "," + (0 | d) + "," + e / 255 + ")";
        f.clearRect(0, 0, g.width, -g.height);
        f.fillRect(0, 0, g.width, -g.height);
        f.restore()
    },FU: function(a, b, d, e, f, g, h) {
        this.xh();
        var k = c.k, m = [0, 0, 0, 0], p = 0, r = 0;
        h & k.COLOR_BUFFER_BIT && (m = k.getParameter(k.COLOR_CLEAR_VALUE), k.clearColor(a, b, d, e));
        h & k.DEPTH_BUFFER_BIT && (p = k.getParameter(k.DEPTH_CLEAR_VALUE), k.clearDepth(f));
        h & k.STENCIL_BUFFER_BIT && (r = k.getParameter(k.STENCIL_CLEAR_VALUE), 
        k.clearStencil(g));
        k.clear(h);
        h & k.COLOR_BUFFER_BIT && k.clearColor(m[0], m[1], m[2], m[3]);
        h & k.DEPTH_BUFFER_BIT && k.clearDepth(p);
        h & k.STENCIL_BUFFER_BIT && k.clearStencil(r)
    },end: null,mV: function() {
        c.k = c.FW;
        c.view.XK()
    },nV: function() {
        var a = c.k, b = c.C;
        a.bindFramebuffer(a.FRAMEBUFFER, this.hi);
        b.kP();
        c.yi(c.Li);
        c.Cm();
        c.yi(c.Ki);
        c.Cm()
    },clear: function(a, b, d, e) {
        this.cZ(a, b, d, e);
        this.end()
    },clearRect: null,UU: function(a, b, d, e) {
        this.ye.clearRect(a, b, d, -e)
    },VU: function() {
    },clearDepth: null,SU: function() {
        c.log("clearDepth isn't supported on Cocos2d-Html5")
    },
    TU: function(a) {
        this.xh();
        var b = c.k, d = b.getParameter(b.DEPTH_CLEAR_VALUE);
        b.clearDepth(a);
        b.clear(b.DEPTH_BUFFER_BIT);
        b.clearDepth(d);
        this.end()
    },clearStencil: null,WU: function() {
        c.log("clearDepth isn't supported on Cocos2d-Html5")
    },XU: function(a) {
        var b = c.k, d = b.getParameter(b.STENCIL_CLEAR_VALUE);
        b.clearStencil(a);
        b.clear(b.STENCIL_BUFFER_BIT);
        b.clearStencil(d)
    },S: null,hm: function(a) {
        this.yc && (a = a || c.k, a.save(), this.Z(a), this.transform(a), this.sprite.S(), a.restore(), this.arrivalOrder = 0)
    },ns: function(a) {
        if (this.yc) {
            c.Dm();
            var b = this.grid;
            b && b.uf() && (b.ws(), this.wy());
            this.transform(a);
            this.sprite.S();
            this.Z(a);
            b && b.uf() && b.ts(this);
            c.Cm();
            this.arrivalOrder = 0
        }
    },Z: null,El: function(a) {
        a = a || c.k;
        if (this.us) {
            this.xh();
            if (this.Jw) {
                var b = this.ae;
                a.save();
                a.fillStyle = this.QA;
                a.clearRect(0, 0, b.width, -b.height);
                a.fillRect(0, 0, b.width, -b.height);
                a.restore()
            }
            this.Sc();
            a = this.s;
            for (var b = a.length, d = this.sprite, e = 0; e < b; e++) {
                var f = a[e];
                f != d && f.S()
            }
            this.end()
        }
    },Wi: function() {
        var a = c.k;
        if (this.us) {
            this.xh();
            var b = this.Jw;
            if (b) {
                var d = 
                [0, 0, 0, 0], e = 0, f = 0;
                b & a.COLOR_BUFFER_BIT && (d = a.getParameter(a.COLOR_CLEAR_VALUE), a.clearColor(this.Ui.r / 255, this.Ui.g / 255, this.Ui.b / 255, this.Ui.a / 255));
                b & a.DEPTH_BUFFER_BIT && (e = a.getParameter(a.DEPTH_CLEAR_VALUE), a.clearDepth(this.cE));
                b & a.STENCIL_BUFFER_BIT && (f = a.getParameter(a.STENCIL_CLEAR_VALUE), a.clearStencil(this.dE));
                a.clear(b);
                b & a.COLOR_BUFFER_BIT && a.clearColor(d[0], d[1], d[2], d[3]);
                b & a.DEPTH_BUFFER_BIT && a.clearDepth(e);
                b & a.STENCIL_BUFFER_BIT && a.clearStencil(f)
            }
            this.Sc();
            a = this.s;
            for (b = 0; b < a.length; b++)
                d = 
                a[b], d != this.sprite && d.S();
            this.end()
        }
    },Rfa: function() {
        c.log("saveToFile isn't supported on cocos2d-html5");
        return null
    },v8: function(a, b, d, e, f) {
        for (var g = 0; g < f; g++)
            a[b + g] = d[e + g]
    },Iha: function() {
        c.log("saveToFile isn't supported on Cocos2d-Html5")
    },Ifa: function() {
        c.log("listenToBackground isn't supported on Cocos2d-Html5")
    },Jfa: function() {
        c.log("listenToForeground isn't supported on Cocos2d-Html5")
    },Jaa: function() {
        return this.Jw
    },cia: function(a) {
        this.Jw = a
    },w_: function() {
        return this.Ui
    },NF: null,wX: function(a) {
        var b = 
        this.Ui;
        b.r = a.r;
        b.g = a.g;
        b.b = a.b;
        b.a = a.a;
        this.QA = "rgba(" + (0 | a.r) + "," + (0 | a.g) + "," + (0 | a.b) + "," + a.a / 255 + ")"
    },xX: function(a) {
        var b = this.Ui;
        b.r = a.r;
        b.g = a.g;
        b.b = a.b;
        b.a = a.a
    },Iaa: function() {
        return this.cE
    },bia: function(a) {
        this.cE = a
    },Kaa: function() {
        return this.dE
    },dia: function(a) {
        this.dE = a
    },rda: function() {
        return this.us
    },Vha: function(a) {
        this.us = a
    }});
n = c.gn.prototype;
c.A == c.$ ? (n.ctor = n.cr, n.Le = n.RU, n.ox = n.oW, n.xh = n.DU, n.GA = n.FU, n.end = n.nV, n.clearRect = n.VU, n.clearDepth = n.TU, n.clearStencil = n.XU, n.S = n.ns, n.Z = n.Wi, n.NF = n.xX) : (n.ctor = n.br, n.Le = n.QU, n.ox = n.nW, n.xh = n.CU, n.GA = n.EU, n.end = n.mV, n.clearRect = n.UU, n.clearDepth = n.SU, n.clearStencil = n.WU, n.S = n.hm, n.Z = n.El, n.NF = n.wX);
c.f(n, "clearColorVal", n.w_, n.NF);
c.gn.create = function(a, b, d, e) {
    return new c.gn(a, b, d, e)
};
c.Rh = c.Hi.extend({Gb: null,OB: null,na: !1,fb: null,sb: "LabelAtlas",ctor: function(a, b, d, e, f) {
        c.Hi.prototype.ctor.call(this);
        b && c.Rh.prototype.pd.call(this, a, b, d, e, f)
    },wt: function() {
        return this.na
    },Wd: function(a, b) {
        this.fb || (this.fb = []);
        this.fb.push({yh: a,Wf: b})
    },Od: function() {
        if (this.fb) {
            this.na = !0;
            for (var a = this.fb, b = 0, d = a.length; b < d; b++) {
                var e = a[b];
                e.yh.call(e.Wf, this)
            }
            a.length = 0
        }
    },pd: function(a, b, d, e, f) {
        var g = a + "", h, k;
        if (void 0 === d) {
            d = c.W.Dd(b);
            if (1 !== parseInt(d.version, 10))
                return c.log("cc.LabelAtlas.initWithString(): Unsupported version. Upgrade cocos2d version"), 
                !1;
            b = c.path.Eo(b, d.textureFilename);
            e = c.qb();
            h = parseInt(d.itemWidth, 10) / e;
            k = parseInt(d.itemHeight, 10) / e;
            d = String.fromCharCode(parseInt(d.firstChar, 10))
        } else
            h = d || 0, k = e || 0, d = f || " ";
        var m = null, m = b instanceof c.da ? b : c.Ba.Ac(b);
        (this.na = b = m.uc) || m.Wd(function() {
            this.ra(m, h, k, g.length);
            this.string = g;
            this.Od()
        }, this);
        return this.ra(m, h, k, g.length) ? (this.OB = d, this.string = g, !0) : !1
    },bb: function(a) {
        c.Hi.prototype.bb.call(this, a);
        this.Dp()
    },Yk: function() {
        return this.Gb
    },Z: function(a) {
        c.Hi.prototype.Z.call(this, 
        a);
        c.mR && (a = this.size, c.Ae.Yd([N(0, 0), N(a.width, 0), N(a.width, a.height), N(0, a.height)], 4, !0))
    },yA: function(a, b, d) {
        a.zW = !0;
        c.ia.prototype.L.call(this, a, b, d)
    },Dp: null,pY: function() {
        for (var a = this.Gb || "", b = a.length, d = this.texture, e = this.di, f = this.gh, g = 0; g < b; g++) {
            var h = a.charCodeAt(g) - this.OB.charCodeAt(0), h = S(parseInt(h % this.bo, 10) * e, parseInt(h / this.bo, 10) * f, e, f), k = a.charCodeAt(g), m = this.Bh(g);
            m ? 32 == k ? (m.M(), m.ub(S(0, 0, 10, 10), !1, P(0, 0))) : (m.ra(d, h), m.visible = !0, m.opacity = this.Aa) : (m = new c.P, 32 == k ? (m.M(), 
            m.ub(S(0, 0, 10, 10), !1, P(0, 0))) : m.ra(d, h), c.ia.prototype.L.call(this, m, 0, g));
            m.U(g * e + e / 2, f / 2)
        }
    },qY: function() {
        var a = this.Gb, b = a.length, d = this.textureAtlas, e = d.texture, f = e.pixelsWidth, e = e.pixelsHeight, g = this.di, h = this.gh;
        this.xv || (g = this.di * c.qb(), h = this.gh * c.qb());
        b > d.vd && c.log("cc.LabelAtlas._updateAtlasValues(): Invalid String length");
        for (var k = d.quads, m = this.Ea, m = {r: m.r,g: m.g,b: m.b,a: this.Aa}, p = this.di, r = 0; r < b; r++) {
            var s = a.charCodeAt(r) - this.OB.charCodeAt(0), u = s % this.bo, t = 0 | s / this.bo, v;
            c.Ym ? (u = 
            (2 * u * g + 1) / (2 * f), s = u + (2 * g - 2) / (2 * f), t = (2 * t * h + 1) / (2 * e), v = t + (2 * h - 2) / (2 * e)) : (u = u * g / f, s = u + g / f, t = t * h / e, v = t + h / e);
            var w = k[r], y = w.N, B = w.I, G = w.F, w = w.O;
            y.l.ea = u;
            y.l.fa = t;
            B.l.ea = s;
            B.l.fa = t;
            G.l.ea = u;
            G.l.fa = v;
            w.l.ea = s;
            w.l.fa = v;
            G.i.x = r * p;
            G.i.y = 0;
            G.i.z = 0;
            w.i.x = r * p + p;
            w.i.y = 0;
            w.i.z = 0;
            y.i.x = r * p;
            y.i.y = this.gh;
            y.i.z = 0;
            B.i.x = r * p + p;
            B.i.y = this.gh;
            B.i.z = 0;
            y.t = m;
            B.t = m;
            G.t = m;
            w.t = m
        }
        0 < b && (d.dirty = !0, a = d.totalQuads, b > a && d.tN(b - a))
    },nc: null,UX: function(a) {
        a = String(a);
        var b = a.length;
        this.Gb = a;
        this.width = b * this.di;
        this.height = this.gh;
        if (this.s) {
            a = this.s;
            for (var b = a.length, d = 0; d < b; d++) {
                var e = a[d];
                e && !e.zW && (e.visible = !1)
            }
        }
        this.Dp();
        this.quadsToDraw = b
    },WX: function(a) {
        a = String(a);
        var b = a.length;
        b > this.textureAtlas.totalQuads && this.textureAtlas.GF(b);
        this.Gb = a;
        this.width = b * this.di;
        this.height = this.gh;
        this.Dp();
        this.quadsToDraw = b
    },za: null,PC: function(a) {
        if (this.Aa !== a) {
            c.Hi.prototype.za.call(this, a);
            for (var b = this.s, d = 0, e = b.length; d < e; d++)
                b[d] && (b[d].opacity = a)
        }
    },QC: function(a) {
        this.Sd !== a && c.Hi.prototype.za.call(this, a)
    }});
n = c.Rh.prototype;
c.A === c.$ ? (n.Dp = n.qY, n.nc = n.WX, n.za = n.QC) : (n.Dp = n.pY, n.nc = n.UX, n.za = n.PC, n.L = n.yA);
c.f(n, "opacity", n.Oe, n.za);
c.f(n, "string", n.Yk, n.nc);
c.Rh.create = function(a, b, d, e, f) {
    return new c.Rh(a, b, d, e, f)
};
c.k6 = -1;
c.bz = c.bf.extend({vb: !0,Qa: !1,Gb: "",Ef: null,rv: "",Xn: "",Sq: c.Aq,os: -1,rK: !1,yv: null,ZK: null,Aa: 255,Td: 255,Ea: null,bc: null,wd: !0,ce: !0,na: !1,fb: null,sb: "LabelBMFont",kL: function(a, b) {
        b ? this.Xn = a : this.Gb = a;
        var d = this.s;
        if (d)
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                f && f.lP(!1)
            }
        this.na && (this.Ow(), b && this.ig())
    },ctor: function(a, b, d, e, f) {
        c.bf.prototype.ctor.call(this);
        this.yv = N(0, 0);
        this.Ea = c.color(255, 255, 255, 255);
        this.bc = c.color(255, 255, 255, 255);
        this.ZK = [];
        this.pd(a, b, d, e, f)
    },wt: function() {
        return this.na
    },Wd: function(a, 
    b) {
        this.fb || (this.fb = []);
        this.fb.push({yh: a,Wf: b})
    },Od: function() {
        if (this.fb) {
            for (var a = this.fb, b = 0, d = a.length; b < d; b++) {
                var e = a[b];
                e.yh.call(e.Wf, this)
            }
            a.length = 0
        }
    },Z: function(a) {
        c.bf.prototype.Z.call(this, a);
        if (c.nR) {
            a = this.Ch();
            var b = N(0 | -this.hb.x, 0 | -this.hb.y);
            a = [N(b.x, b.y), N(b.x + a.width, b.y), N(b.x + a.width, b.y + a.height), N(b.x, b.y + a.height)];
            c.Ae.tp(0, 255, 0, 255);
            c.Ae.Yd(a, 4, !0)
        }
    },bb: function(a) {
        var b = this.Ea, d = this.bc;
        if (d.r != a.r || d.g != a.g || d.b != a.b || d.a != a.a)
            b.r = d.r = a.r, b.g = d.g = a.g, b.b = d.b = a.b, 
            this.na && this.wd && (b = c.color.WHITE, (d = this.Rb) && d.vb && d.cascadeColor && (b = d.zm()), this.Mb(b)), void 0 === a.a || a.qs || this.za(a.a)
    },re: function() {
        return this.Qa
    },Hd: function(a) {
        this.Qa = a;
        if (a = this.s)
            for (var b = 0; b < a.length; b++) {
                var d = a[b];
                d && d.vb && (d.opacityModifyRGB = this.Qa)
            }
    },Oe: function() {
        return this.Td
    },LM: function() {
        return this.Aa
    },za: function(a) {
        this.Aa = this.Td = a;
        if (this.ce) {
            var b = 255, d = this.Rb;
            d && d.vb && d.cascadeOpacity && (b = d.Aa);
            this.Jb(b)
        }
        this.Ea.a = this.bc.a = a
    },Jb: function(a) {
        this.Aa = this.Td * a / 
        255;
        a = this.s;
        for (var b = 0; b < a.length; b++) {
            var d = a[b];
            c.A == c.$ ? d.Jb(this.Aa) : (c.ia.prototype.Jb.call(d, this.Aa), d.Ja())
        }
        this.lk()
    },Qs: function() {
        return !1
    },sp: function(a) {
        this.ce = a
    },Ne: function() {
        var a = this.bc;
        return c.color(a.r, a.g, a.b, a.a)
    },zm: function() {
        return this.Ea
    },Mb: function(a) {
        var b = this.Ea, d = this.bc;
        b.r = d.r * a.r / 255;
        b.g = d.g * a.g / 255;
        b.b = d.b * a.b / 255;
        a = this.s;
        for (b = 0; b < a.length; b++)
            d = a[b], c.A == c.$ ? d.Mb(this.Ea) : (c.ia.prototype.Mb.call(d, this.Ea), d.Ja());
        this.lk()
    },lk: function() {
        if (c.A != c.$) {
            var a, 
            b = this.texture;
            b && 0 < b.width && (a = b.Bb) && (b = c.Ba.$w(this.ie.Bb)) && (a instanceof HTMLCanvasElement && !this.$c ? c.Po(a, b, this.Ea, null, a) : (a = c.Po(a, b, this.Ea), b = new c.da, b.Ed(a), b.Vb(), this.texture = b))
        }
    },Ps: function() {
        return !1
    },rp: function(a) {
        this.wd = a
    },M: function() {
        return this.pd(null, null, null, null, null)
    },pd: function(a, b, d, e, f) {
        a = a || "";
        this.Ef && c.log("cc.LabelBMFont.initWithString(): re-init is no longer supported");
        if (b) {
            var g = c.W.Dd(b);
            if (!g)
                return c.log("cc.LabelBMFont.initWithString(): Impossible to create font. Please check file"), 
                !1;
            this.Ef = g;
            this.rv = b;
            b = c.Ba.Ac(g.TL);
            (this.na = g = b.uc) || b.Wd(function(a) {
                this.na = !0;
                this.ra(a, this.Xn.length);
                this.nc(this.Xn, !0);
                this.Od()
            }, this)
        } else
            b = new c.da, g = new Image, b.Ed(g), this.na = !1;
        return this.ra(b, a.length) ? (this.Sq = e || c.ru, this.yv = f || N(0, 0), this.os = null == d ? -1 : d, this.Aa = this.Td = 255, this.Ea = c.color(255, 255, 255, 255), this.bc = c.color(255, 255, 255, 255), this.wd = this.ce = !0, this.Q.width = 0, this.Q.height = 0, this.el(0.5, 0.5), c.A === c.$ && (d = this.textureAtlas.texture, this.Qa = d.ui(), e = this.ZK = new c.P, 
        e.ra(d, S(0, 0, 0, 0), !1), e.batchNode = this), this.nc(a, !0), !0) : !1
    },Ow: function() {
        var a = c.A, b = a === c.Da ? this.texture : this.textureAtlas.texture, d = 0, e = P(0, 0), f = 0, g = 1, h = this.Gb, k = h ? h.length : 0;
        if (0 !== k) {
            var m, p = this.Ef, r = p.l1, s = p.fE, u = p.l_;
            for (m = 0; m < k - 1; m++)
                10 == h.charCodeAt(m) && g++;
            var t = s * g, g = -(s - s * g), v = -1;
            for (m = 0; m < k; m++)
                if (s = h.charCodeAt(m), 0 != s)
                    if (10 === s)
                        d = 0, g -= p.fE;
                    else {
                        var w = r[v << 16 | s & 65535] || 0, y = u[s];
                        if (y) {
                            var B = S(y.rect.x, y.rect.y, y.rect.width, y.rect.height), B = c.Ij(B);
                            B.x += this.yv.x;
                            B.y += this.yv.y;
                            (v = 
                            this.Bh(m)) ? 32 === s && a === c.Da ? v.ub(B, !1, P(0, 0)) : (v.ub(B, !1), v.visible = !0) : (v = new c.P, 32 === s && a === c.Da && (B = S(0, 0, 0, 0)), v.ra(b, B, !1), v.TB = !0, this.L(v, 0, m));
                            v.opacityModifyRGB = this.Qa;
                            c.A == c.$ ? (v.Mb(this.Ea), v.Jb(this.Aa)) : (c.ia.prototype.Mb.call(v, this.Ea), c.ia.prototype.Jb.call(v, this.Aa), v.Ja());
                            B = N(d + y.LP + 0.5 * y.rect.width + w, g + (p.fE - y.MP) - 0.5 * B.height * c.qb());
                            v.U(c.AF(B));
                            d += y.S4 + w;
                            v = s;
                            f < d && (f = d)
                        } else
                            c.log("cocos2d: LabelBMFont: character not found " + h[m])
                    }
            e.width = f;
            e.height = t;
            this.Zd(c.nP(e))
        }
    },
    Cka: function(a) {
        var b = this.s;
        if (b)
            for (var d = 0, e = b.length; d < e; d++) {
                var f = b[d];
                f && (f.visible = !1)
            }
        this.Ef && this.Ow();
        a || this.ig()
    },Yk: function() {
        return this.Xn
    },nc: function(a, b) {
        a = String(a);
        null == b && (b = !0);
        if (null == a || "string" != typeof a)
            a += "";
        this.Xn = a;
        this.kL(a, b)
    },VX: function(a) {
        this.nc(a, !1)
    },Zha: function(a) {
        this.nc(a, !0)
    },ig: function() {
        this.string = this.Xn;
        if (0 < this.os) {
            for (var a = this.Gb.length, b = [], d = [], e = 1, f = 0, g = !1, h = !1, k = -1, m = -1, p = 0, r, s = 0, u = this.s.length; s < u; s++) {
                for (var t = 0; !(r = this.Bh(s + p + t)); )
                    t++;
                p += t;
                if (f >= a)
                    break;
                var v = this.Gb[f];
                h || (m = this.uB(r), h = !0);
                g || (k = m, g = !0);
                if (10 == v.charCodeAt(0)) {
                    d.push("\n");
                    b = b.concat(d);
                    d.length = 0;
                    g = h = !1;
                    k = m = -1;
                    s--;
                    p -= t;
                    e++;
                    if (f >= a)
                        break;
                    m || (m = this.uB(r), h = !0);
                    k || (k = m, g = !0);
                    f++
                } else if (c.gF(v))
                    d.push(v), b = b.concat(d), d.length = 0, h = !1, m = -1, f++;
                else if (this.MV(r) - k > this.os)
                    if (this.rK) {
                        c.HP(d);
                        d.push("\n");
                        b = b.concat(d);
                        d.length = 0;
                        g = h = !1;
                        k = m = -1;
                        e++;
                        if (f >= a)
                            break;
                        m || (m = this.uB(r), h = !0);
                        k || (k = m, g = !0);
                        s--
                    } else
                        d.push(v), -1 != b.lastIndexOf(" ") ? c.HP(b) : b = [], 0 < b.length && 
                        b.push("\n"), e++, g = !1, k = -1, f++;
                else
                    d.push(v), f++
            }
            b = b.concat(d);
            s = b.length;
            r = "";
            for (f = 0; f < s; ++f)
                r += b[f];
            r += String.fromCharCode(0);
            this.kL(r, !1)
        }
        if (this.Sq != c.ru)
            for (b = f = 0, a = this.Gb.length, d = [], e = 0; e < a; e++)
                if (10 == this.Gb[e].charCodeAt(0) || 0 == this.Gb[e].charCodeAt(0))
                    if (s = 0, g = d.length, 0 == g)
                        b++;
                    else {
                        if (r = f + g - 1 + b, !(0 > r) && (s = this.Bh(r), null != s)) {
                            s = s.Pe() + s.ah() / 2;
                            h = 0;
                            switch (this.Sq) {
                                case c.Aq:
                                    h = this.width / 2 - s / 2;
                                    break;
                                case c.JH:
                                    h = this.width - s
                            }
                            if (0 != h)
                                for (s = 0; s < g; s++)
                                    (r = f + s + b, 0 > r || !(r = this.Bh(r))) || (r.x += 
                                    h);
                            f += g;
                            b++;
                            d.length = 0
                        }
                    }
                else
                    d.push(this.Gb[f])
    },W2: function(a) {
        this.Sq = a;
        this.ig()
    },wV: function() {
        return this.Sq
    },a3: function(a) {
        this.os = a;
        this.ig()
    },qB: function() {
        return this.os
    },Iia: function(a) {
        this.rK = a;
        this.ig()
    },up: function(a, b) {
        c.q.prototype.up.call(this, a, b);
        this.ig()
    },ot: function(a) {
        c.q.prototype.ot.call(this, a);
        this.ig()
    },pt: function(a) {
        c.q.prototype.pt.call(this, a);
        this.ig()
    },sia: function(a) {
        if (null != a && a != this.rv) {
            var b = c.W.Dd(a);
            b ? (this.rv = a, this.Ef = b, a = c.Ba.Ac(b.TL), this.na = b = a.uc, this.texture = 
            a, c.A === c.Da && (this.ie = this.texture), b ? this.Ow() : a.Wd(function(a) {
                this.na = !0;
                this.texture = a;
                this.Ow();
                this.lk();
                this.ig();
                this.Od()
            }, this)) : c.log("cc.LabelBMFont.setFntFile() : Impossible to create font. Please check file")
        }
    },jba: function() {
        return this.rv
    },el: function(a, b) {
        c.q.prototype.el.call(this, a, b);
        this.ig()
    },hL: function(a) {
        c.q.prototype.hL.call(this, a);
        this.ig()
    },HC: function(a) {
        c.q.prototype.HC.call(this, a);
        this.ig()
    },IC: function(a) {
        c.q.prototype.IC.call(this, a);
        this.ig()
    },L7: function() {
    },
    q8: function(a, b) {
        var d = 0;
        if (this.$U.m1) {
            var e = this.$U.m1[(a << 16 | b & 65535).toString()];
            e && (d = e.o9)
        }
        return d
    },uB: function(a) {
        return a.Pe() * this.pa - a.ah() * this.pa * a.Nc.x
    },MV: function(a) {
        return a.Pe() * this.pa + a.ah() * this.pa * a.Nc.x
    }});
n = c.bz.prototype;
c.f(n, "opacityModifyRGB", n.re, n.Hd);
c.f(n, "opacity", n.Oe, n.za);
c.f(n, "cascadeOpacity", n.Qs, n.sp);
c.f(n, "color", n.Ne, n.bb);
c.f(n, "cascadeColor", n.Ps, n.rp);
c.f(n, "string", n.Yk, n.VX);
c.f(n, "boundingWidth", n.qB, n.a3);
c.f(n, "textAlign", n.wV, n.W2);
c.bz.create = function(a, b, d, e, f) {
    return new c.bz(a, b, d, e, f)
};
c.gF = function(a) {
    a = a.charCodeAt(0);
    return 9 <= a && 13 >= a || 32 == a || 133 == a || 160 == a || 5760 == a || 8192 <= a && 8202 >= a || 8232 == a || 8233 == a || 8239 == a || 8287 == a || 12288 == a
};
c.HP = function(a) {
    var b = a.length;
    if (!(0 >= b) && (b -= 1, c.gF(a[b]))) {
        for (var d = b - 1; 0 <= d; --d)
            if (c.gF(a[d]))
                b = d;
            else
                break;
        c.L4(a, b)
    }
};
c.L4 = function(a, b) {
    var d = a.length;
    b >= d || 0 > b || a.splice(b, d)
};
c.pV = {YQ: /info [^\n]*(\n|$)/gi,mQ: /common [^\n]*(\n|$)/gi,XR: /page [^\n]*(\n|$)/gi,lQ: /char [^\n]*(\n|$)/gi,eR: /kerning [^\n]*(\n|$)/gi,$Q: /\w+=[^ \r\n]+/gi,ZQ: /^[\-]?\d+$/,Kr: function(a) {
        a = a.match(this.$Q);
        var b = {};
        if (a)
            for (var d = 0, e = a.length; d < e; d++) {
                var f = a[d], g = f.indexOf("\x3d"), h = f.substring(0, g), f = f.substring(g + 1);
                f.match(this.ZQ) ? f = parseInt(f) : '"' == f[0] && (f = f.substring(1, f.length - 1));
                b[h] = f
            }
        return b
    },d2: function(a, b) {
        var d = {};
        this.Kr(a.match(this.YQ)[0]);
        var e = this.Kr(a.match(this.mQ)[0]);
        d.fE = e.lineHeight;
        if (c.A === c.$) {
            var f = c.Ho.Dr;
            (e.scaleW > f.width || e.scaleH > f.height) && c.log("cc.LabelBMFont._parseCommonArguments(): page can't be larger than supported")
        }
        1 !== e.pages && c.log("cc.LabelBMFont._parseCommonArguments(): only supports 1 page");
        e = this.Kr(a.match(this.XR)[0]);
        0 !== e.id && c.log("cc.LabelBMFont._parseImageFileName() : file could not be found");
        d.TL = c.path.Eo(b, e.file);
        for (var g = a.match(this.lQ), h = d.l_ = {}, e = 0, f = g.length; e < f; e++) {
            var k = this.Kr(g[e]);
            h[k.id] = {rect: {x: k.x,y: k.y,width: k.width,
                    height: k.height},LP: k.xoffset,MP: k.yoffset,S4: k.xadvance}
        }
        g = d.l1 = {};
        if (h = a.match(this.eR))
            for (e = 0, f = h.length; e < f; e++)
                k = this.Kr(h[e]), g[k.first << 16 | k.second & 65535] = k.amount;
        return d
    },load: function(a, b, d, e) {
        var f = this;
        c.W.Hx(a, function(a, d) {
            if (a)
                return e(a);
            e(null, f.d2(d, b))
        })
    }};
c.W.Jj(["fnt"], c.pV);
c.$G = c.ia.extend({texture: null,Mo: !1,Fi: !1,o: null,bs: 0,iB: 0,Ol: 0,QB: 0,Bk: 0,qC: 0,jC: null,iC: null,Sa: null,An: null,Sf: null,bd: null,Bn: null,qo: null,sb: "MotionStreak",ctor: function(a, b, d, e, f) {
        c.ia.prototype.ctor.call(this);
        this.zg = N(0, 0);
        this.o = new c.Qj(c.SRC_ALPHA, c.ONE_MINUS_SRC_ALPHA);
        this.DD = c.k.createBuffer();
        this.Fi = this.Mo = !1;
        this.texture = null;
        this.qC = this.Bk = this.QB = this.Ol = this.iB = this.bs = 0;
        this.qo = this.Bn = this.bd = this.Sf = this.An = this.Sa = this.iC = this.jC = null;
        void 0 !== f && this.L0(a, b, d, e, f)
    },Oa: function() {
        return this.texture
    },
    ob: function(a) {
        this.texture != a && (this.texture = a)
    },Ah: function() {
        return this.o
    },Te: function(a, b) {
        void 0 === b ? this.o = a : (this.o.src = a, this.o.T = b)
    },Oe: function() {
        c.log("cc.MotionStreak.getOpacity has not been supported.");
        return 0
    },za: function() {
        c.log("cc.MotionStreak.setOpacity has not been supported.")
    },Hd: function() {
    },re: function() {
        return !1
    },yb: function() {
        c.q.prototype.yb.call(this);
        this.bd && c.k.deleteBuffer(this.bd);
        this.qo && c.k.deleteBuffer(this.qo);
        this.Bn && c.k.deleteBuffer(this.Bn)
    },zda: function() {
        return this.Mo
    },
    ria: function(a) {
        this.Mo = a
    },Lda: function() {
        return this.Fi
    },oja: function(a) {
        this.Fi = a
    },L0: function(a, b, d, e, f) {
        if (!f)
            throw "cc.MotionStreak.initWithFade(): Invalid filename or texture";
        "string" === typeof f && (f = c.Ba.Ac(f));
        c.q.prototype.U.call(this, N(0, 0));
        this.anchorY = this.anchorX = 0;
        this.ignoreAnchor = !0;
        this.Fi = !1;
        this.Mo = !0;
        this.Ol = -1 == b ? d / 5 : b;
        this.Ol *= this.Ol;
        this.bs = d;
        this.iB = 1 / a;
        a = (0 | 60 * a) + 2;
        this.Bk = 0;
        this.iC = new Float32Array(a);
        this.jC = new Float32Array(2 * a);
        this.Sa = new Float32Array(4 * a);
        this.Sf = new Float32Array(4 * 
        a);
        this.An = new Uint8Array(8 * a);
        this.QB = a;
        a = c.k;
        this.bd = a.createBuffer();
        this.qo = a.createBuffer();
        this.Bn = a.createBuffer();
        this.o.src = a.SRC_ALPHA;
        this.o.T = a.ONE_MINUS_SRC_ALPHA;
        this.shaderProgram = c.Jd.mc(c.Qi);
        this.texture = f;
        this.color = e;
        this.DO();
        a.bindBuffer(a.ARRAY_BUFFER, this.bd);
        a.bufferData(a.ARRAY_BUFFER, this.Sa, a.DYNAMIC_DRAW);
        a.bindBuffer(a.ARRAY_BUFFER, this.qo);
        a.bufferData(a.ARRAY_BUFFER, this.Sf, a.DYNAMIC_DRAW);
        a.bindBuffer(a.ARRAY_BUFFER, this.Bn);
        a.bufferData(a.ARRAY_BUFFER, this.An, a.DYNAMIC_DRAW);
        return !0
    },vka: function(a) {
        this.color = a;
        for (var b = this.An, d = 0, e = 2 * this.Bk; d < e; d++)
            b[4 * d] = a.r, b[4 * d + 1] = a.g, b[4 * d + 2] = a.b
    },reset: function() {
        this.Bk = 0
    },U: function(a, b) {
        this.Fi = !0;
        void 0 === b ? (this.zg.x = a.x, this.zg.y = a.y) : (this.zg.x = a, this.zg.y = b)
    },Pe: function() {
        return this.zg.x
    },WO: function(a) {
        this.zg.x = a;
        this.Fi || (this.Fi = !0)
    },Gg: function() {
        return this.zg.y
    },XO: function(a) {
        this.zg.y = a;
        this.Fi || (this.Fi = !0)
    },Z: function(a) {
        1 >= this.Bk || !this.texture || !this.texture.uc || (a = a || c.k, c.Xs(this), c.Gc(c.yl), c.Fh(this.o.src, 
        this.o.T), c.qe(this.texture), a.bindBuffer(a.ARRAY_BUFFER, this.bd), a.bufferData(a.ARRAY_BUFFER, this.Sa, a.DYNAMIC_DRAW), a.vertexAttribPointer(c.pb, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, this.qo), a.bufferData(a.ARRAY_BUFFER, this.Sf, a.DYNAMIC_DRAW), a.vertexAttribPointer(c.ud, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, this.Bn), a.bufferData(a.ARRAY_BUFFER, this.An, a.DYNAMIC_DRAW), a.vertexAttribPointer(c.we, 4, a.UNSIGNED_BYTE, !0, 0, 0), a.drawArrays(a.TRIANGLE_STRIP, 0, 2 * this.Bk), c.Xf++)
    },update: function(a) {
        if (this.Fi) {
            a *= 
            this.iB;
            var b, d, e, f, g = 0, h = this.Bk, k = this.iC, m = this.jC, p = this.Sa, r = this.An;
            for (e = 0; e < h; e++)
                k[e] -= a, 0 >= k[e] ? g++ : (b = e - g, 0 < g ? (k[b] = k[e], m[2 * b] = m[2 * e], m[2 * b + 1] = m[2 * e + 1], f = 2 * e, d = 2 * b, p[2 * d] = p[2 * f], p[2 * d + 1] = p[2 * f + 1], p[2 * (d + 1)] = p[2 * (f + 1)], p[2 * (d + 1) + 1] = p[2 * (f + 1) + 1], f *= 4, d *= 4, r[d + 0] = r[f + 0], r[d + 1] = r[f + 1], r[d + 2] = r[f + 2], r[d + 4] = r[f + 4], r[d + 5] = r[f + 5], r[d + 6] = r[f + 6]) : d = 8 * b, b = 255 * k[b], r[d + 3] = b, r[d + 7] = b);
            h -= g;
            e = !0;
            h >= this.QB ? e = !1 : 0 < h && (a = 1 == h ? !1 : c.gO(N(m[2 * (h - 2)], m[2 * (h - 2) + 1]), this.zg) < 2 * this.Ol, c.gO(N(m[2 * (h - 1)], m[2 * 
            (h - 1) + 1]), this.zg) < this.Ol || a) && (e = !1);
            e && (m[2 * h] = this.zg.x, m[2 * h + 1] = this.zg.y, k[h] = 1, e = 8 * h, k = this.Ea, r[e] = k.r, r[e + 1] = k.g, r[e + 2] = k.b, r[e + 4] = k.r, r[e + 5] = k.g, r[e + 6] = k.b, r[e + 3] = 255, r[e + 7] = 255, 0 < h && this.Mo && (1 < h ? c.qG(m, this.bs, this.Sa, h, 1) : c.qG(m, this.bs, this.Sa, 0, 2)), h++);
            this.Mo || c.qG(m, this.bs, this.Sa, 0, h);
            if (h && this.qC != h) {
                m = 1 / h;
                r = this.Sf;
                for (e = 0; e < h; e++)
                    r[4 * e] = 0, r[4 * e + 1] = m * e, r[2 * (2 * e + 1)] = 1, r[2 * (2 * e + 1) + 1] = m * e;
                this.qC = h
            }
            this.Bk = h
        }
    }});
c.$G.create = function(a, b, d, e, f) {
    return new c.$G(a, b, d, e, f)
};
c.kz = c.q.extend({grid: null,me: null,Gs: function() {
        return this.grid
    },q3: function(a) {
        this.grid = a
    },$F: function(a) {
        this.me = a
    },L: function(a, b, d) {
        c.q.prototype.L.call(this, a, b, d);
        a && !this.me && (this.me = a)
    },S: function() {
        if (this.yc) {
            var a = c.A == c.$, b = this.grid;
            a && b && b.ik && b.ws();
            this.transform();
            var d = this.s;
            if (d && 0 < d.length) {
                var e = d.length;
                this.Sc();
                for (i = 0; i < e; i++) {
                    var f = d[i];
                    f && f.S()
                }
            }
            a && b && b.ik && b.ts(this.me)
        }
    },nY: function() {
        var a = this.sD, b = c.Ub.top, d = this.Re(), e = a.c;
        e[0] = d.a;
        e[4] = d.D;
        e[12] = d.Ka;
        e[1] = d.b;
        e[5] = d.H;
        e[13] = d.La;
        e[14] = this.ms;
        c.zi(b, b, a);
        null == this.Ti || this.grid && this.grid.uf() || (a = this.hb.x, b = this.hb.y, 0 !== a || 0 !== b ? (c.Jz || (a |= 0, b |= 0), c.ap(a, b), this.Ti.Ws(), c.ap(-a, -b)) : this.Ti.Ws())
    }});
n = c.kz.prototype;
c.A === c.$ && (n.transform = n.nY);
c.f(n, "target", null, n.$F);
c.kz.create = function() {
    return new c.kz
};
c.Fka = function() {
    return {x: 0,y: 0}
};
c.jl = function(a, b) {
    return {x: a,y: b}
};
c.te = function(a, b) {
    return c.jl(a.x + b.x, a.y + b.y)
};
c.oc = function(a, b) {
    return c.jl(a.x - b.x, a.y - b.y)
};
c.rd = function(a, b) {
    return c.jl(a.x * b, a.y * b)
};
c.Ep = function(a) {
    return c.jl(-a.y, a.x)
};
c.jg = function(a) {
    return c.jl(-a.x, -a.y)
};
c.IP = function(a, b) {
    return a.x * b.x + a.y * b.y
};
c.Eka = function(a) {
    return c.jl(Math.cos(a), Math.sin(a))
};
c.Dt = function(a) {
    a = c.Ig(N(a.x, a.y));
    return c.jl(a.x, a.y)
};
c.xe = function(a) {
    return c.jl(a.x, a.y)
};
c.Ha = function(a) {
    return {ea: a.x,fa: a.y}
};
c.AQ = c.q.extend({ab: null,o: null,Xc: 1,ff: null,sb: "DrawNodeCanvas",ctor: function() {
        c.q.prototype.ctor.call(this);
        this.ab = [];
        this.ff = c.color(255, 255, 255, 255);
        this.o = new c.Qj(c.gc, c.fc);
        this.M()
    },Ah: function() {
        return this.o
    },Te: function(a, b) {
        void 0 === b ? (this.o.src = a.src, this.o.T = a.T) : (this.o.src = a, this.o.T = b)
    },RF: function(a) {
        this.Xc = a
    },Q_: function() {
        return this.Xc
    },tp: function(a) {
        var b = this.ff;
        b.r = a.r;
        b.g = a.g;
        b.b = a.b;
        b.a = null == a.a ? 255 : a.a
    },Cd: function() {
        return c.color(this.ff.r, this.ff.g, this.ff.b, this.ff.a)
    },
    sE: function(a, b, d, e, f) {
        e = e || this.Xc;
        f = f || this.Cd();
        null == f.a && (f.a = 255);
        a = [a, N(b.x, a.y), b, N(a.x, b.y)];
        b = new c.ck(c.Ld.Yj);
        b.kg = a;
        b.lineWidth = e;
        b.Dj = f;
        b.rx = !0;
        b.$k = !0;
        b.lineCap = "butt";
        if (b.fillColor = d)
            null == d.a && (d.a = 255), b.eF = !0;
        this.ab.push(b)
    },oE: function(a, b, d, e, f, g, h) {
        g = g || this.Xc;
        h = h || this.Cd();
        null == h.a && (h.a = 255);
        for (var k = 2 * Math.PI / e, m = [], p = 0; p <= e; p++) {
            var r = p * k;
            m.push(N(b * Math.cos(r + d) + a.x, b * Math.sin(r + d) + a.y))
        }
        f && m.push(N(a.x, a.y));
        a = new c.ck(c.Ld.Yj);
        a.kg = m;
        a.lineWidth = g;
        a.Dj = h;
        a.rx = !0;
        a.$k = !0;
        this.ab.push(a)
    },rE: function(a, b, d, e, f, g) {
        f = f || this.Xc;
        g = g || this.Cd();
        null == g.a && (g.a = 255);
        for (var h = [], k = 0, m = 0; m < e; m++)
            h.push(N(Math.pow(1 - k, 2) * a.x + 2 * (1 - k) * k * b.x + k * k * d.x, Math.pow(1 - k, 2) * a.y + 2 * (1 - k) * k * b.y + k * k * d.y)), k += 1 / e;
        h.push(N(d.x, d.y));
        a = new c.ck(c.Ld.Yj);
        a.kg = h;
        a.lineWidth = f;
        a.Dj = g;
        a.$k = !0;
        a.lineCap = "round";
        this.ab.push(a)
    },pE: function(a, b, d, e, f, g, h) {
        g = g || this.Xc;
        h = h || this.Cd();
        null == h.a && (h.a = 255);
        for (var k = [], m = 0, p = 0; p < f; p++)
            k.push(N(Math.pow(1 - m, 3) * a.x + 3 * Math.pow(1 - m, 2) * m * b.x + 3 * (1 - 
            m) * m * m * d.x + m * m * m * e.x, Math.pow(1 - m, 3) * a.y + 3 * Math.pow(1 - m, 2) * m * b.y + 3 * (1 - m) * m * m * d.y + m * m * m * e.y)), m += 1 / f;
        k.push(N(e.x, e.y));
        a = new c.ck(c.Ld.Yj);
        a.kg = k;
        a.lineWidth = g;
        a.Dj = h;
        a.$k = !0;
        a.lineCap = "round";
        this.ab.push(a)
    },nE: function(a, b, d, e) {
        this.sm(a, 0.5, b, d, e)
    },sm: function(a, b, d, e, f) {
        e = e || this.Xc;
        f = f || this.Cd();
        null == f.a && (f.a = 255);
        for (var g = [], h, k, m = 1 / a.length, p = 0; p < d + 1; p++)
            k = p / d, 1 == k ? (h = a.length - 1, k = 1) : (h = 0 | k / m, k = (k - m * h) / m), h = c.aE(c.cd(a, h - 1), c.cd(a, h - 0), c.cd(a, h + 1), c.cd(a, h + 2), b, k), g.push(h);
        a = new c.ck(c.Ld.Yj);
        a.kg = g;
        a.lineWidth = e;
        a.Dj = f;
        a.$k = !0;
        a.lineCap = "round";
        this.ab.push(a)
    },qE: function(a, b, d) {
        d = d || this.Cd();
        null == d.a && (d.a = 255);
        var e = new c.ck(c.Ld.MH);
        e.kg = [a];
        e.lineWidth = b;
        e.fillColor = d;
        this.ab.push(e)
    },KZ: function(a, b, d) {
        if (a && 0 != a.length) {
            d = d || this.Cd();
            null == d.a && (d.a = 255);
            for (var e = 0, f = a.length; e < f; e++)
                this.qE(a[e], b, d)
        }
    },tE: function(a, b, d, e) {
        d = d || this.Xc;
        e = e || this.Cd();
        null == e.a && (e.a = 255);
        var f = new c.ck(c.Ld.Yj);
        f.kg = [a, b];
        f.lineWidth = 2 * d;
        f.Dj = e;
        f.$k = !0;
        f.lineCap = "round";
        this.ab.push(f)
    },OZ: function(a, 
    b, d, e) {
        d = d || this.Xc;
        e = e || this.Cd();
        null == e.a && (e.a = 255);
        var f = new c.ck(c.Ld.Yj);
        f.kg = a;
        f.fillColor = b;
        f.lineWidth = d;
        f.Dj = e;
        f.rx = !0;
        f.$k = !0;
        f.lineCap = "round";
        b && (f.eF = !0);
        this.ab.push(f)
    },Yd: function(a, b, d, e) {
        for (var f = [], g = 0; g < a.length; g++)
            f.push(N(a[g].x, a[g].y));
        return this.OZ(f, b, d, e)
    },Z: function(a) {
        a = a || c.k;
        this.o && this.o.src == c.SRC_ALPHA && this.o.T == c.ONE && (a.globalCompositeOperation = "lighter");
        for (var b = 0; b < this.ab.length; b++) {
            var d = this.ab[b];
            switch (d.type) {
                case c.Ld.MH:
                    this.iV(a, d);
                    break;
                case c.Ld.rT:
                    this.kV(a, 
                    d);
                    break;
                case c.Ld.Yj:
                    this.jV(a, d)
            }
        }
    },iV: function(a, b) {
        var d = b.fillColor, e = b.kg[0], f = b.lineWidth, g = c.view.pa, h = c.view.Ra;
        a.fillStyle = "rgba(" + (0 | d.r) + "," + (0 | d.g) + "," + (0 | d.b) + "," + d.a / 255 + ")";
        a.beginPath();
        a.arc(e.x * g, -e.y * h, f * g, 0, 2 * Math.PI, !1);
        a.closePath();
        a.fill()
    },kV: function(a, b) {
        var d = b.Dj, e = b.kg[0], f = b.kg[1], g = b.lineWidth, h = b.lineCap, k = c.view.pa, m = c.view.Ra;
        a.strokeStyle = "rgba(" + (0 | d.r) + "," + (0 | d.g) + "," + (0 | d.b) + "," + d.a / 255 + ")";
        a.lineWidth = g * k;
        a.beginPath();
        a.lineCap = h;
        a.moveTo(e.x * k, -e.y * m);
        a.lineTo(f.x * 
        k, -f.y * m);
        a.stroke()
    },jV: function(a, b) {
        var d = b.kg, e = b.lineCap, f = b.fillColor, g = b.lineWidth, h = b.Dj, k = b.rx, m = b.eF, p = b.$k;
        if (null != d) {
            var r = d[0], s = c.view.pa, u = c.view.Ra;
            a.lineCap = e;
            f && (a.fillStyle = "rgba(" + (0 | f.r) + "," + (0 | f.g) + "," + (0 | f.b) + "," + f.a / 255 + ")");
            g && (a.lineWidth = g * s);
            h && (a.strokeStyle = "rgba(" + (0 | h.r) + "," + (0 | h.g) + "," + (0 | h.b) + "," + h.a / 255 + ")");
            a.beginPath();
            a.moveTo(r.x * s, -r.y * u);
            e = 1;
            for (f = d.length; e < f; e++)
                a.lineTo(d[e].x * s, -d[e].y * u);
            k && a.closePath();
            m && a.fill();
            p && a.stroke()
        }
    },clear: function() {
        this.ab.length = 
        0
    }});
c.BQ = c.q.extend({vn: 0,ab: null,tj: null,AL: null,zL: null,Xc: 1,ff: null,o: null,ib: !1,sb: "DrawNodeWebGL",Ah: function() {
        return this.o
    },Te: function(a, b) {
        void 0 === b ? (this.o.src = a.src, this.o.T = a.T) : (this.o.src = a, this.o.T = b)
    },ctor: function() {
        c.q.prototype.ctor.call(this);
        this.ab = [];
        this.o = new c.Qj(c.gc, c.fc);
        this.ff = c.color(255, 255, 255, 255);
        this.M()
    },M: function() {
        return c.q.prototype.M.call(this) ? (this.shaderProgram = c.Jd.mc(c.AH), this.kr(64), this.AL = c.k.createBuffer(), this.ib = !0) : !1
    },RF: function(a) {
        this.Xc = a
    },
    Q_: function() {
        return this.Xc
    },tp: function(a) {
        var b = this.ff;
        b.r = a.r;
        b.g = a.g;
        b.b = a.b;
        b.a = a.a
    },Cd: function() {
        return c.color(this.ff.r, this.ff.g, this.ff.b, this.ff.a)
    },sE: function(a, b, d, e, f) {
        e = e || this.Xc;
        f = f || this.Cd();
        null == f.a && (f.a = 255);
        a = [a, N(b.x, a.y), b, N(a.x, b.y)];
        null == d ? this.fv(a, e, f, !0) : this.Yd(a, d, e, f)
    },oE: function(a, b, d, e, f, g, h) {
        g = g || this.Xc;
        h = h || this.Cd();
        null == h.a && (h.a = 255);
        var k = 2 * Math.PI / e, m = [], p;
        for (p = 0; p <= e; p++) {
            var r = p * k;
            m.push(N(b * Math.cos(r + d) + a.x, b * Math.sin(r + d) + a.y))
        }
        f && m.push(N(a.x, 
        a.y));
        g *= 0.5;
        p = 0;
        for (a = m.length; p < a - 1; p++)
            this.tE(m[p], m[p + 1], g, h)
    },rE: function(a, b, d, e, f, g) {
        f = f || this.Xc;
        g = g || this.Cd();
        null == g.a && (g.a = 255);
        for (var h = [], k = 0, m = 0; m < e; m++)
            h.push(N(Math.pow(1 - k, 2) * a.x + 2 * (1 - k) * k * b.x + k * k * d.x, Math.pow(1 - k, 2) * a.y + 2 * (1 - k) * k * b.y + k * k * d.y)), k += 1 / e;
        h.push(N(d.x, d.y));
        this.fv(h, f, g, !1)
    },pE: function(a, b, d, e, f, g, h) {
        g = g || this.Xc;
        h = h || this.Cd();
        null == h.a && (h.a = 255);
        for (var k = [], m = 0, p = 0; p < f; p++)
            k.push(N(Math.pow(1 - m, 3) * a.x + 3 * Math.pow(1 - m, 2) * m * b.x + 3 * (1 - m) * m * m * d.x + m * m * m * e.x, Math.pow(1 - 
            m, 3) * a.y + 3 * Math.pow(1 - m, 2) * m * b.y + 3 * (1 - m) * m * m * d.y + m * m * m * e.y)), m += 1 / f;
        k.push(N(e.x, e.y));
        this.fv(k, g, h, !1)
    },nE: function(a, b, d, e) {
        this.sm(a, 0.5, b, d, e)
    },sm: function(a, b, d, e, f) {
        e = e || this.Xc;
        f = f || this.Cd();
        null == f.a && (f.a = 255);
        for (var g = [], h, k, m = 1 / a.length, p = 0; p < d + 1; p++)
            k = p / d, 1 == k ? (h = a.length - 1, k = 1) : (h = 0 | k / m, k = (k - m * h) / m), h = c.aE(c.cd(a, h - 1), c.cd(a, h - 0), c.cd(a, h + 1), c.cd(a, h + 2), b, k), g.push(h);
        e *= 0.5;
        a = 0;
        for (b = g.length; a < b - 1; a++)
            this.tE(g[a], g[a + 1], e, f)
    },nX: function() {
        var a = c.k;
        c.Gc(c.yl);
        a.bindBuffer(a.ARRAY_BUFFER, 
        this.AL);
        this.ib && (a.bufferData(a.ARRAY_BUFFER, this.tj, a.STREAM_DRAW), this.ib = !1);
        var b = c.td.BYTES_PER_ELEMENT;
        a.vertexAttribPointer(c.pb, 2, a.FLOAT, !1, b, 0);
        a.vertexAttribPointer(c.we, 4, a.UNSIGNED_BYTE, !0, b, 8);
        a.vertexAttribPointer(c.ud, 2, a.FLOAT, !1, b, 12);
        a.drawArrays(a.TRIANGLES, 0, 3 * this.ab.length);
        c.Yf()
    },kr: function(a) {
        var b = this.ab;
        if (b.length + a > this.vn) {
            var d = c.Yb.BYTES_PER_ELEMENT;
            this.vn += Math.max(this.vn, a);
            if (null == b || 0 === b.length)
                this.ab = [], this.tj = new ArrayBuffer(d * this.vn), this.zL = new Uint8Array(this.tj);
            else {
                a = [];
                for (var e = new ArrayBuffer(d * this.vn), f = 0; f < b.length; f++)
                    a[f] = new c.Yb(b[f].a, b[f].b, b[f].D, e, f * d);
                this.zL = new Uint8Array(e);
                this.tj = e;
                this.ab = a
            }
        }
    },Z: function() {
        c.Fh(this.o.src, this.o.T);
        this.Fb.Jc();
        this.Fb.tt();
        this.nX()
    },qE: function(a, b, d) {
        d = d || this.Cd();
        null == d.a && (d.a = 255);
        var e = {r: 0 | d.r,g: 0 | d.g,b: 0 | d.b,a: 0 | d.a};
        d = {i: {x: a.x - b,y: a.y - b},t: e,l: {ea: -1,fa: -1}};
        var f = {i: {x: a.x - b,y: a.y + b},t: e,l: {ea: -1,fa: 1}}, g = {i: {x: a.x + b,y: a.y + b},t: e,l: {ea: 1,fa: 1}};
        a = {i: {x: a.x + b,y: a.y - b},t: e,l: {ea: 1,fa: -1}};
        this.kr(6);
        this.ab.push(new c.Yb(d, f, g, this.tj, this.ab.length * c.Yb.BYTES_PER_ELEMENT));
        this.ab.push(new c.Yb(d, g, a, this.tj, this.ab.length * c.Yb.BYTES_PER_ELEMENT));
        this.ib = !0
    },KZ: function(a, b, d) {
        if (a && 0 != a.length) {
            d = d || this.Cd();
            null == d.a && (d.a = 255);
            for (var e = 0, f = a.length; e < f; e++)
                this.qE(a[e], b, d)
        }
    },tE: function(a, b, d, e) {
        e = e || this.Cd();
        null == e.a && (e.a = 255);
        d = d || 0.5 * this.Xc;
        this.kr(18);
        e = {r: 0 | e.r,g: 0 | e.g,b: 0 | e.b,a: 0 | e.a};
        var f = c.xe(a);
        b = c.xe(b);
        a = c.Dt(c.Ep(c.oc(b, f)));
        var g = c.Ep(a), h = c.rd(a, d);
        d = c.rd(g, 
        d);
        var k = c.te(b, c.oc(h, d)), m = c.oc(b, h), p = c.te(b, h), r = c.oc(f, h), s = c.te(f, h), u = c.oc(f, c.oc(h, d)), f = c.te(f, c.te(h, d)), t = c.Yb.BYTES_PER_ELEMENT, v = this.tj, w = this.ab;
        w.push(new c.Yb({i: c.oc(b, c.te(h, d)),t: e,l: c.Ha(c.jg(c.te(a, g)))}, {i: k,t: e,l: c.Ha(c.oc(a, g))}, {i: m,t: e,l: c.Ha(c.jg(a))}, v, w.length * t));
        w.push(new c.Yb({i: p,t: e,l: c.Ha(a)}, {i: k,t: e,l: c.Ha(c.oc(a, g))}, {i: m,t: e,l: c.Ha(c.jg(a))}, v, w.length * t));
        w.push(new c.Yb({i: p,t: e,l: c.Ha(a)}, {i: r,t: e,l: c.Ha(c.jg(a))}, {i: m,t: e,l: c.Ha(c.jg(a))}, v, w.length * t));
        w.push(new c.Yb({i: p,t: e,l: c.Ha(a)}, {i: r,t: e,l: c.Ha(c.jg(a))}, {i: s,t: e,l: c.Ha(a)}, v, w.length * t));
        w.push(new c.Yb({i: u,t: e,l: c.Ha(c.oc(g, a))}, {i: r,t: e,l: c.Ha(c.jg(a))}, {i: s,t: e,l: c.Ha(a)}, v, w.length * t));
        w.push(new c.Yb({i: u,t: e,l: c.Ha(c.oc(g, a))}, {i: f,t: e,l: c.Ha(c.te(a, g))}, {i: s,t: e,l: c.Ha(a)}, v, w.length * t));
        this.ib = !0
    },Yd: function(a, b, d, e) {
        if (null == b)
            this.fv(a, d, e, !0);
        else {
            null == b.a && (b.a = 255);
            null == e.a && (e.a = 255);
            d = d || this.Xc;
            d *= 0.5;
            b = {r: 0 | b.r,g: 0 | b.g,b: 0 | b.b,a: 0 | b.a};
            e = {r: 0 | e.r,g: 0 | e.g,b: 0 | e.b,
                a: 0 | e.a};
            var f = [], g, h, k, m, p = a.length;
            for (g = 0; g < p; g++) {
                h = c.xe(a[(g - 1 + p) % p]);
                k = c.xe(a[g]);
                m = c.xe(a[(g + 1) % p]);
                var r = c.Dt(c.Ep(c.oc(k, h)));
                k = c.Dt(c.Ep(c.oc(m, k)));
                f[g] = {offset: c.rd(c.te(r, k), 1 / (c.IP(r, k) + 1)),bl: k}
            }
            r = 0 < d;
            this.kr(3 * (3 * p - 2));
            var s = c.Yb.BYTES_PER_ELEMENT, u = this.tj, t = this.ab, v = !1 == r ? 0.5 : 0;
            for (g = 0; g < p - 2; g++)
                h = c.oc(c.xe(a[0]), c.rd(f[0].offset, v)), k = c.oc(c.xe(a[g + 1]), c.rd(f[g + 1].offset, v)), m = c.oc(c.xe(a[g + 2]), c.rd(f[g + 2].offset, v)), t.push(new c.Yb({i: h,t: b,l: c.Ha({x: 0,y: 0})}, {i: k,t: b,l: c.Ha({x: 0,
                        y: 0})}, {i: m,t: b,l: c.Ha({x: 0,y: 0})}, u, t.length * s));
            for (g = 0; g < p; g++) {
                v = (g + 1) % p;
                h = c.xe(a[g]);
                k = c.xe(a[v]);
                m = f[g].bl;
                var w = f[g].offset, y = f[v].offset, v = r ? c.oc(h, c.rd(w, d)) : c.oc(h, c.rd(w, 0.5)), B = r ? c.oc(k, c.rd(y, d)) : c.oc(k, c.rd(y, 0.5));
                h = r ? c.te(h, c.rd(w, d)) : c.te(h, c.rd(w, 0.5));
                k = r ? c.te(k, c.rd(y, d)) : c.te(k, c.rd(y, 0.5));
                r ? (t.push(new c.Yb({i: v,t: e,l: c.Ha(c.jg(m))}, {i: B,t: e,l: c.Ha(c.jg(m))}, {i: k,t: e,l: c.Ha(m)}, u, t.length * s)), t.push(new c.Yb({i: v,t: e,l: c.Ha(c.jg(m))}, {i: h,t: e,l: c.Ha(m)}, {i: k,t: e,l: c.Ha(m)}, 
                u, t.length * s))) : (t.push(new c.Yb({i: v,t: b,l: c.Ha({x: 0,y: 0})}, {i: B,t: b,l: c.Ha({x: 0,y: 0})}, {i: k,t: b,l: c.Ha(m)}, u, t.length * s)), t.push(new c.Yb({i: v,t: b,l: c.Ha({x: 0,y: 0})}, {i: h,t: b,l: c.Ha(m)}, {i: k,t: b,l: c.Ha(m)}, u, t.length * s)))
            }
            this.ib = !0
        }
    },fv: function(a, b, d, e) {
        b = b || this.Xc;
        d = d || this.ff;
        null == d.a && (d.a = 255);
        b *= 0.5;
        if (!(0 >= b)) {
            d = {r: 0 | d.r,g: 0 | d.g,b: 0 | d.b,a: 0 | d.a};
            var f = [], g, h, k, m, p = a.length;
            for (g = 0; g < p; g++) {
                h = c.xe(a[(g - 1 + p) % p]);
                k = c.xe(a[g]);
                m = c.xe(a[(g + 1) % p]);
                var r = c.Dt(c.Ep(c.oc(k, h)));
                k = c.Dt(c.Ep(c.oc(m, 
                k)));
                f[g] = {offset: c.rd(c.te(r, k), 1 / (c.IP(r, k) + 1)),bl: k}
            }
            this.kr(3 * (3 * p - 2));
            m = c.Yb.BYTES_PER_ELEMENT;
            var r = this.tj, s = this.ab;
            e = e ? p : p - 1;
            for (g = 0; g < e; g++) {
                var u = (g + 1) % p;
                h = c.xe(a[g]);
                k = c.xe(a[u]);
                var t = f[g].bl, v = f[g].offset, u = f[u].offset, w = c.oc(h, c.rd(v, b));
                h = c.te(h, c.rd(v, b));
                v = c.te(k, c.rd(u, b));
                s.push(new c.Yb({i: w,t: d,l: c.Ha(c.jg(t))}, {i: c.oc(k, c.rd(u, b)),t: d,l: c.Ha(c.jg(t))}, {i: v,t: d,l: c.Ha(t)}, r, s.length * m));
                s.push(new c.Yb({i: w,t: d,l: c.Ha(c.jg(t))}, {i: h,t: d,l: c.Ha(t)}, {i: v,t: d,l: c.Ha(t)}, r, s.length * 
                m))
            }
            this.ib = !0
        }
    },clear: function() {
        this.ab.length = 0;
        this.ib = !0
    }});
c.Ld = c.A == c.$ ? c.BQ : c.AQ;
c.Ld.create = function() {
    return new c.Ld
};
c.ck = function(a) {
    this.type = a;
    this.fillColor = this.kg = null;
    this.lineWidth = 0;
    this.Dj = null;
    this.lineCap = "butt";
    this.$k = this.eF = this.rx = !1
};
c.Ld.MH = 0;
c.Ld.rT = 1;
c.Ld.Yj = 2;
c.vt = -1;
c.YO = function(a, b) {
    a.shaderProgram = b;
    var d = a.children;
    if (d)
        for (var e = 0; e < d.length; e++)
            c.YO(d[e], b)
};
c.Xb = c.q.extend({lm: 0,Gh: !1,ld: null,$J: !1,ctor: function(a) {
        c.q.prototype.ctor.call(this);
        this.ld = null;
        this.lm = 0;
        this.Gh = !1;
        c.Xb.prototype.M.call(this, a || null)
    },M: null,sb: "ClippingNode",iW: function(a) {
        this.ld = a;
        this.lm = 1;
        this.Gh = !1;
        c.Xb.FB = !0;
        c.Xb.FB && (c.vt = c.k.getParameter(c.k.STENCIL_BITS), 0 >= c.vt && c.log("Stencil buffer is not enabled."), c.Xb.FB = !1);
        return !0
    },hW: function(a) {
        this.ld = a;
        this.lm = 1;
        this.Gh = !1
    },ca: function() {
        c.q.prototype.ca.call(this);
        this.ld.ca()
    },Jh: function() {
        c.q.prototype.Jh.call(this);
        this.ld.Jh()
    },Zf: function() {
        this.ld.Zf();
        c.q.prototype.Zf.call(this)
    },yb: function() {
        this.ld.yb();
        c.q.prototype.yb.call(this)
    },S: null,ns: function(a) {
        var b = a || c.k;
        if (1 > c.vt)
            c.q.prototype.S.call(this, a);
        else if (this.ld && this.ld.visible)
            if (c.Xb.Br = -1, c.Xb.Br + 1 == c.vt)
                c.Xb.ID = !0, c.Xb.ID && (c.log("Nesting more than " + c.vt + "stencils is not supported. Everything will be drawn without stencil for this node and its childs."), c.Xb.ID = !1), c.q.prototype.S.call(this, a);
            else {
                c.Xb.Br++;
                var d = 1 << c.Xb.Br, e = d | d - 1, f = b.isEnabled(b.STENCIL_TEST), 
                g = b.getParameter(b.STENCIL_WRITEMASK), h = b.getParameter(b.STENCIL_FUNC), k = b.getParameter(b.STENCIL_REF), m = b.getParameter(b.STENCIL_VALUE_MASK), p = b.getParameter(b.STENCIL_FAIL), r = b.getParameter(b.STENCIL_PASS_DEPTH_FAIL), s = b.getParameter(b.STENCIL_PASS_DEPTH_PASS);
                b.enable(b.STENCIL_TEST);
                b.stencilMask(d);
                var u = b.getParameter(b.DEPTH_WRITEMASK);
                b.depthMask(!1);
                b.stencilFunc(b.NEVER, d, d);
                b.stencilOp(this.Gh ? b.REPLACE : b.ZERO, b.KEEP, b.KEEP);
                c.Ae.yM(N(0, 0), c.Z1(), c.color(255, 255, 255, 255));
                b.stencilFunc(b.NEVER, 
                d, d);
                b.stencilOp(this.Gh ? b.ZERO : b.REPLACE, b.KEEP, b.KEEP);
                if (1 > this.lm) {
                    var d = c.Jd.mc(c.qu), t = b.getUniformLocation(d.Am(), c.tI);
                    c.QE(d.Am());
                    d.rt(t, this.lm);
                    c.YO(this.ld, d)
                }
                c.Dm();
                this.transform();
                this.ld.S();
                c.Cm();
                b.depthMask(u);
                b.stencilFunc(b.EQUAL, e, e);
                b.stencilOp(b.KEEP, b.KEEP, b.KEEP);
                c.q.prototype.S.call(this, a);
                b.stencilFunc(h, k, m);
                b.stencilOp(p, r, s);
                b.stencilMask(g);
                f || b.disable(b.STENCIL_TEST);
                c.Xb.Br--
            }
        else
            this.Gh && c.q.prototype.S.call(this, a)
    },hm: function(a) {
        if (this.ld && this.ld.visible) {
            a = 
            a || c.k;
            var b = a.canvas;
            if (this.LA() || this.ld instanceof c.P) {
                var d = c.Xb.YV();
                d.width = b.width;
                d.height = b.height;
                d.getContext("2d").drawImage(b, 0, 0);
                a.save();
                c.q.prototype.S.call(this, a);
                a.globalCompositeOperation = this.Gh ? "destination-out" : "destination-in";
                this.transform(a);
                this.ld.S();
                a.restore();
                a.save();
                a.setTransform(1, 0, 0, 1, 0, 0);
                a.globalCompositeOperation = "destination-over";
                a.drawImage(d, 0, 0)
            } else {
                var d = this.s, e;
                a.save();
                this.transform(a);
                this.ld.S(a);
                this.Gh && (a.save(), a.setTransform(1, 0, 0, 1, 0, 
                0), a.moveTo(0, 0), a.lineTo(0, b.height), a.lineTo(b.width, b.height), a.lineTo(b.width, 0), a.lineTo(0, 0), a.restore());
                a.clip();
                this.LA(!0);
                var f = d.length;
                if (0 < f) {
                    this.Sc();
                    for (b = 0; b < f; b++)
                        if (e = d[b], 0 > e.wb)
                            e.S(a);
                        else
                            break;
                    for (this.Z(a); b < f; b++)
                        d[b].S(a)
                } else
                    this.Z(a);
                this.LA(!1)
            }
            a.restore()
        } else
            this.Gh && c.q.prototype.S.call(this, a)
    },r0: function() {
        return this.ld
    },YF: null,TX: function(a) {
        this.ld = a
    },SX: function(a) {
        this.ld = a;
        var b = c.k;
        !(a instanceof c.P) && a instanceof c.Ld && (a.Z = function() {
            var d = c.view.pa, 
            e = c.view.Ra;
            b.beginPath();
            for (var f = 0; f < a.ab.length; f++) {
                var g = a.ab[f].kg, h = g[0];
                b.moveTo(h.x * d, -h.y * e);
                for (var h = 1, k = g.length; h < k; h++)
                    b.lineTo(g[h].x * d, -g[h].y * e)
            }
        })
    },taa: function() {
        return this.lm
    },Uha: function(a) {
        this.lm = a
    },Ada: function() {
        return this.Gh
    },Cia: function(a) {
        this.Gh = a
    },LA: function(a) {
        if (!0 === a || !1 === a)
            c.Xb.prototype.$J = a;
        return c.Xb.prototype.$J
    }});
n = c.Xb.prototype;
c.A === c.$ ? (n.M = n.iW, n.S = n.ns, n.YF = n.TX) : (n.M = n.hW, n.S = n.hm, n.YF = n.SX);
c.f(n, "stencil", n.r0, n.YF);
c.Xb.FB = null;
c.Xb.ID = null;
c.Xb.Br = null;
c.Xb.qL = null;
c.Xb.YV = function() {
    return c.Xb.qL || (c.Xb.qL = document.createElement("canvas"))
};
c.Xb.create = function(a) {
    return new c.Xb(a)
};
c.an = c.la.extend({ik: !1,ni: 0,Y: null,J: null,Bg: null,Rn: null,Kl: !1,Fb: null,XA: 0,ib: !1,ctor: function(a, b, d) {
        c.PA();
        this.ik = !1;
        this.ni = 0;
        this.J = this.Y = null;
        this.Bg = N(0, 0);
        this.Rn = null;
        this.Kl = !1;
        this.Fb = null;
        this.XA = 0;
        this.ib = !1;
        void 0 !== a && this.nx(a, b, d)
    },uf: function() {
        return this.ik
    },setActive: function(a) {
        this.ik = a;
        a || (a = c.C, a.Om(a.mi))
    },nca: function() {
        return this.ni
    },F3: function(a) {
        this.ni = a
    },J_: function() {
        return P(this.Y.width, this.Y.height)
    },zia: function(a) {
        this.Y.width = parseInt(a.width);
        this.Y.height = 
        parseInt(a.height)
    },JE: function() {
        return N(this.Bg.x, this.Bg.y)
    },pja: function(a) {
        this.Bg.x = a.x;
        this.Bg.y = a.y
    },Oda: function() {
        return this.Kl
    },wja: function(a) {
        this.Kl != a && (this.Kl = a, this.Iw())
    },nx: function(a, b, d) {
        if (!b) {
            var e = c.C.Js(), f = c.Tj(e.width), g = c.Tj(e.height), h = new Uint8Array(f * g * 4);
            if (!h)
                return c.log("cocos2d: CCGrid: not enough memory."), !1;
            b = new c.da;
            b.Os(h, c.da.Pi, f, g, e);
            if (!b)
                return c.log("cocos2d: CCGrid: error creating texture"), !1
        }
        this.ik = !1;
        this.ni = 0;
        this.Y = a;
        this.J = b;
        this.Kl = d || !1;
        this.Bg.x = this.J.width / a.width;
        this.Bg.y = this.J.height / a.height;
        this.Rn = new c.SQ;
        if (!this.Rn)
            return !1;
        this.Rn.C0(this.J);
        this.Fb = c.Jd.mc(c.vq);
        this.Iw();
        return !0
    },ws: function() {
        this.XA = c.C.mi;
        this.V2();
        this.Rn.bZ(this.J)
    },ts: function(a) {
        this.Rn.IY(this.J);
        c.C.Om(this.XA);
        if (a.ym().dF()) {
            var b = a.hb;
            c.ap(b.x, b.y);
            a.ym().Ws();
            c.ap(-b.x, -b.y)
        }
        c.qe(this.J);
        this.RD()
    },RD: function() {
        c.log("cc.GridBase.blit(): Shall be overridden in subclass.")
    },HF: function() {
        c.log("cc.GridBase.reuse(): Shall be overridden in subclass.")
    },
    Iw: function() {
        c.log("cc.GridBase.calculateVertexPoints(): Shall be overridden in subclass.")
    },V2: function() {
        var a = c.C.Js();
        c.k.viewport(0, 0, a.width, a.height);
        c.yi(c.Li);
        c.Zo();
        var b = new c.ba;
        c.jF(b, 0, a.width, 0, a.height, -1, 1);
        c.$o(b);
        c.yi(c.Ki);
        c.Zo();
        c.ZO()
    }});
c.an.create = function(a, b, d) {
    return new c.an(a, b, d)
};
c.Xy = c.an.extend({Dg: null,Sa: null,dj: null,kb: null,Rf: null,bd: null,Kf: null,ctor: function(a, b, d) {
        c.an.prototype.ctor.call(this);
        this.Kf = this.bd = this.Rf = this.kb = this.dj = this.Sa = this.Dg = null;
        void 0 !== a && this.nx(a, b, d)
    },KP: function(a) {
        a.x === (0 | a.x) && a.y === (0 | a.y) || c.log("cc.Grid3D.vertex() : Numbers must be integers");
        a = 0 | 3 * (a.x * (this.Y.height + 1) + a.y);
        var b = this.Sa;
        return new c.sc(b[a], b[a + 1], b[a + 2])
    },Ic: function(a) {
        a.x === (0 | a.x) && a.y === (0 | a.y) || c.log("cc.Grid3D.originalVertex() : Numbers must be integers");
        a = 0 | 3 * (a.x * (this.Y.height + 1) + a.y);
        var b = this.dj;
        return new c.sc(b[a], b[a + 1], b[a + 2])
    },Id: function(a, b) {
        a.x === (0 | a.x) && a.y === (0 | a.y) || c.log("cc.Grid3D.setVertex() : Numbers must be integers");
        var d = 0 | 3 * (a.x * (this.Y.height + 1) + a.y), e = this.Sa;
        e[d] = b.x;
        e[d + 1] = b.y;
        e[d + 2] = b.z;
        this.ib = !0
    },RD: function() {
        var a = this.Y.width * this.Y.height;
        c.Gc(c.Md | c.ln);
        this.Fb.Jc();
        this.Fb.tt();
        var b = c.k, d = this.ib;
        b.bindBuffer(b.ARRAY_BUFFER, this.bd);
        d && b.bufferData(b.ARRAY_BUFFER, this.Sa, b.DYNAMIC_DRAW);
        b.vertexAttribPointer(c.pb, 
        3, b.FLOAT, !1, 0, 0);
        b.bindBuffer(b.ARRAY_BUFFER, this.Rf);
        d && b.bufferData(b.ARRAY_BUFFER, this.Dg, b.DYNAMIC_DRAW);
        b.vertexAttribPointer(c.ud, 2, b.FLOAT, !1, 0, 0);
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.Kf);
        d && b.bufferData(b.ELEMENT_ARRAY_BUFFER, this.kb, b.STATIC_DRAW);
        b.drawElements(b.TRIANGLES, 6 * a, b.UNSIGNED_SHORT, 0);
        d && (this.ib = !1);
        c.Yf()
    },HF: function() {
        if (0 < this.ni) {
            for (var a = this.dj, b = this.Sa, d = 0, e = this.Sa.length; d < e; d++)
                a[d] = b[d];
            --this.ni
        }
    },Iw: function() {
        var a = c.k, b = this.J.pixelsWidth, d = this.J.pixelsHeight, 
        e = this.J.Q.height, f = this.Y, g = (f.width + 1) * (f.height + 1);
        this.Sa = new Float32Array(3 * g);
        this.Dg = new Float32Array(2 * g);
        this.kb = new Uint16Array(f.width * f.height * 6);
        this.bd && a.deleteBuffer(this.bd);
        this.bd = a.createBuffer();
        this.Rf && a.deleteBuffer(this.Rf);
        this.Rf = a.createBuffer();
        this.Kf && a.deleteBuffer(this.Kf);
        this.Kf = a.createBuffer();
        for (var h, k, m = this.kb, p = this.Dg, r = this.Kl, s = this.Sa, g = 0; g < f.width; ++g)
            for (h = 0; h < f.height; ++h) {
                var u = h * f.width + g;
                k = g * this.Bg.x;
                var t = k + this.Bg.x, v = h * this.Bg.y, w = v + this.Bg.y, 
                y = g * (f.height + 1) + h, B = (g + 1) * (f.height + 1) + h, G = (g + 1) * (f.height + 1) + (h + 1), I = g * (f.height + 1) + (h + 1);
                m[6 * u] = y;
                m[6 * u + 1] = B;
                m[6 * u + 2] = I;
                m[6 * u + 3] = B;
                m[6 * u + 4] = G;
                m[6 * u + 5] = I;
                var u = [3 * y, 3 * B, 3 * G, 3 * I], E = [{x: k,y: v,z: 0}, {x: t,y: v,z: 0}, {x: t,y: w,z: 0}, {x: k,y: w,z: 0}], y = [2 * y, 2 * B, 2 * G, 2 * I], t = [N(k, v), N(t, v), N(t, w), N(k, w)];
                for (k = 0; 4 > k; ++k)
                    s[u[k]] = E[k].x, s[u[k] + 1] = E[k].y, s[u[k] + 2] = E[k].z, p[y[k]] = t[k].x / b, p[y[k] + 1] = r ? (e - t[k].y) / d : t[k].y / d
            }
        this.dj = new Float32Array(this.Sa);
        a.bindBuffer(a.ARRAY_BUFFER, this.bd);
        a.bufferData(a.ARRAY_BUFFER, 
        this.Sa, a.DYNAMIC_DRAW);
        a.bindBuffer(a.ARRAY_BUFFER, this.Rf);
        a.bufferData(a.ARRAY_BUFFER, this.Dg, a.DYNAMIC_DRAW);
        a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.Kf);
        a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.kb, a.STATIC_DRAW);
        this.ib = !0
    }});
c.Xy.create = function(a, b, d) {
    return new c.Xy(a, b, d)
};
c.Zz = c.an.extend({Dg: null,Sa: null,dj: null,kb: null,Rf: null,bd: null,Kf: null,ctor: function(a, b, d) {
        c.an.prototype.ctor.call(this);
        this.Kf = this.bd = this.Rf = this.kb = this.dj = this.Sa = this.Dg = null;
        void 0 !== a && this.nx(a, b, d)
    },wP: function(a) {
        a.x === (0 | a.x) && a.y === (0 | a.y) || c.log("cc.TiledGrid3D.tile() : Numbers must be integers");
        a = 12 * (this.Y.height * a.x + a.y);
        var b = this.Sa;
        return new c.mu(new c.sc(b[a], b[a + 1], b[a + 2]), new c.sc(b[a + 3], b[a + 4], b[a + 5]), new c.sc(b[a + 6], b[a + 7], b[a + 8]), new c.sc(b[a + 9], b[a + 10], b[a + 11]))
    },
    $f: function(a) {
        a.x === (0 | a.x) && a.y === (0 | a.y) || c.log("cc.TiledGrid3D.originalTile() : Numbers must be integers");
        a = 12 * (this.Y.height * a.x + a.y);
        var b = this.dj;
        return new c.mu(new c.sc(b[a], b[a + 1], b[a + 2]), new c.sc(b[a + 3], b[a + 4], b[a + 5]), new c.sc(b[a + 6], b[a + 7], b[a + 8]), new c.sc(b[a + 9], b[a + 10], b[a + 11]))
    },Xe: function(a, b) {
        a.x === (0 | a.x) && a.y === (0 | a.y) || c.log("cc.TiledGrid3D.setTile() : Numbers must be integers");
        var d = 12 * (this.Y.height * a.x + a.y), e = this.Sa;
        e[d] = b.F.x;
        e[d + 1] = b.F.y;
        e[d + 2] = b.F.z;
        e[d + 3] = b.O.x;
        e[d + 
        4] = b.O.y;
        e[d + 5] = b.O.z;
        e[d + 6] = b.N.x;
        e[d + 7] = b.N.y;
        e[d + 8] = b.N.z;
        e[d + 9] = b.I.x;
        e[d + 10] = b.I.y;
        e[d + 11] = b.I.z;
        this.ib = !0
    },RD: function() {
        var a = this.Y.width * this.Y.height;
        this.Fb.Jc();
        this.Fb.tt();
        var b = c.k, d = this.ib;
        c.Gc(c.Md | c.ln);
        b.bindBuffer(b.ARRAY_BUFFER, this.bd);
        d && b.bufferData(b.ARRAY_BUFFER, this.Sa, b.DYNAMIC_DRAW);
        b.vertexAttribPointer(c.pb, 3, b.FLOAT, !1, 0, this.Sa);
        b.bindBuffer(b.ARRAY_BUFFER, this.Rf);
        d && b.bufferData(b.ARRAY_BUFFER, this.Dg, b.DYNAMIC_DRAW);
        b.vertexAttribPointer(c.ud, 2, b.FLOAT, !1, 0, this.Dg);
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.Kf);
        d && b.bufferData(b.ELEMENT_ARRAY_BUFFER, this.kb, b.STATIC_DRAW);
        b.drawElements(b.TRIANGLES, 6 * a, b.UNSIGNED_SHORT, 0);
        d && (this.ib = !1);
        c.Yf()
    },HF: function() {
        if (0 < this.ni) {
            for (var a = this.Sa, b = this.dj, d = 0; d < a.length; d++)
                b[d] = a[d];
            --this.ni
        }
    },Iw: function() {
        var a = this.J.pixelsWidth, b = this.J.pixelsHeight, d = this.J.Q.height, e = this.Y, f = e.width * e.height;
        this.Sa = new Float32Array(12 * f);
        this.Dg = new Float32Array(8 * f);
        this.kb = new Uint16Array(6 * f);
        var g = c.k;
        this.bd && g.deleteBuffer(this.bd);
        this.bd = g.createBuffer();
        this.Rf && g.deleteBuffer(this.Rf);
        this.Rf = g.createBuffer();
        this.Kf && g.deleteBuffer(this.Kf);
        this.Kf = g.createBuffer();
        var h, k, m = 0, p = this.Bg, r = this.Sa, s = this.Dg, u = this.Kl;
        for (h = 0; h < e.width; h++)
            for (k = 0; k < e.height; k++) {
                var t = h * p.x, v = t + p.x, w = k * p.y, y = w + p.y;
                r[12 * m] = t;
                r[12 * m + 1] = w;
                r[12 * m + 2] = 0;
                r[12 * m + 3] = v;
                r[12 * m + 4] = w;
                r[12 * m + 5] = 0;
                r[12 * m + 6] = t;
                r[12 * m + 7] = y;
                r[12 * m + 8] = 0;
                r[12 * m + 9] = v;
                r[12 * m + 10] = y;
                r[12 * m + 11] = 0;
                var B = w, G = y;
                u && (B = d - w, G = d - y);
                s[8 * m] = t / a;
                s[8 * m + 1] = B / b;
                s[8 * m + 2] = v / a;
                s[8 * m + 3] = B / b;
                s[8 * 
                m + 4] = t / a;
                s[8 * m + 5] = G / b;
                s[8 * m + 6] = v / a;
                s[8 * m + 7] = G / b;
                m++
            }
        a = this.kb;
        for (h = 0; h < f; h++)
            a[6 * h + 0] = 4 * h + 0, a[6 * h + 1] = 4 * h + 1, a[6 * h + 2] = 4 * h + 2, a[6 * h + 3] = 4 * h + 1, a[6 * h + 4] = 4 * h + 2, a[6 * h + 5] = 4 * h + 3;
        this.dj = new Float32Array(this.Sa);
        g.bindBuffer(g.ARRAY_BUFFER, this.bd);
        g.bufferData(g.ARRAY_BUFFER, this.Sa, g.DYNAMIC_DRAW);
        g.bindBuffer(g.ARRAY_BUFFER, this.Rf);
        g.bufferData(g.ARRAY_BUFFER, this.Dg, g.DYNAMIC_DRAW);
        g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, this.Kf);
        g.bufferData(g.ELEMENT_ARRAY_BUFFER, this.kb, g.DYNAMIC_DRAW);
        this.ib = !0
    }});
c.Zz.create = function(a, b, d) {
    return new c.Zz(a, b, d)
};
c.SQ = c.la.extend({Cu: null,hi: null,AK: null,Qn: null,ctor: function() {
        c.PA();
        this.Qn = c.k;
        this.AK = [0, 0, 0, 0];
        this.hi = null;
        this.Cu = this.Qn.createFramebuffer()
    },C0: function(a) {
        var b = this.Qn;
        this.hi = b.getParameter(b.FRAMEBUFFER_BINDING);
        b.bindFramebuffer(b.FRAMEBUFFER, this.Cu);
        b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, a.Vd, 0);
        b.checkFramebufferStatus(b.FRAMEBUFFER) != b.FRAMEBUFFER_COMPLETE && c.log("Frame Grabber: could not attach texture to frmaebuffer");
        b.bindFramebuffer(b.FRAMEBUFFER, 
        this.hi)
    },bZ: function() {
        var a = this.Qn;
        this.hi = a.getParameter(a.FRAMEBUFFER_BINDING);
        a.bindFramebuffer(a.FRAMEBUFFER, this.Cu);
        this.AK = a.getParameter(a.COLOR_CLEAR_VALUE);
        a.clearColor(0, 0, 0, 0);
        a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT)
    },IY: function() {
        var a = this.Qn;
        a.bindFramebuffer(a.FRAMEBUFFER, this.hi);
        a.colorMask(!0, !0, !0, !0)
    },Z9: function() {
        this.Qn.deleteFramebuffer(this.Cu)
    }});
c.Tm = -1;
c.ed = c.la.extend({originalTarget: null,target: null,tag: c.Tm,ctor: function() {
        this.target = this.originalTarget = null;
        this.tag = c.Tm
    },copy: function() {
        c.log("copy is deprecated. Please use clone instead.");
        return this.j()
    },j: function() {
        var a = new c.ed;
        a.originalTarget = null;
        a.target = null;
        a.tag = this.tag;
        return a
    },Hg: function() {
        return !0
    },v: function(a) {
        this.target = this.originalTarget = a
    },stop: function() {
        this.target = null
    },step: function() {
        c.log("[Action step]. override me")
    },update: function() {
        c.log("[Action update]. override me")
    },Eca: function() {
        return this.target
    },
    $F: function(a) {
        this.target = a
    },Wba: function() {
        return this.originalTarget
    },Xia: function(a) {
        this.originalTarget = a
    },KE: function() {
        return this.tag
    },ZF: function(a) {
        this.tag = a
    },by: function() {
    },Ei: function() {
    }});
c.ed.create = function() {
    return new c.ed
};
c.Ji = c.ed.extend({n: 0,ctor: function() {
        c.ed.prototype.ctor.call(this);
        this.n = 0
    },So: function() {
        return this.n * (this.dc || 1)
    },ag: function(a) {
        this.n = a
    },reverse: function() {
        c.log("cocos2d: FiniteTimeAction#reverse: Implement me");
        return null
    },j: function() {
        return new c.Ji
    }});
c.zq = c.ed.extend({le: 0,lb: null,ctor: function(a, b) {
        c.ed.prototype.ctor.call(this);
        this.le = 0;
        this.lb = null;
        a && this.aa(a, b)
    },Yw: function() {
        return this.le
    },Ve: function(a) {
        this.le = a
    },aa: function(a, b) {
        if (!a)
            throw "cc.Speed.initWithAction(): action must be non nil";
        this.lb = a;
        this.le = b;
        return !0
    },j: function() {
        var a = new c.zq;
        a.aa(this.lb.j(), this.le);
        return a
    },v: function(a) {
        c.ed.prototype.v.call(this, a);
        this.lb.v(a)
    },stop: function() {
        this.lb.stop();
        c.ed.prototype.stop.call(this)
    },step: function(a) {
        this.lb.step(a * 
        this.le)
    },Hg: function() {
        return this.lb.Hg()
    },reverse: function() {
        return c.zq.create(this.lb.reverse(), this.le)
    },RO: function(a) {
        this.lb != a && (this.lb = a)
    },EE: function() {
        return this.lb
    }});
c.zq.create = function(a, b) {
    return new c.zq(a, b)
};
c.fu = c.ed.extend({Mn: null,tn: !1,Ru: !1,vv: null,or: null,Fm: 0,Lm: 0,Qm: 0,mm: 0,LD: null,ctor: function(a, b) {
        c.ed.prototype.ctor.call(this);
        this.Mn = null;
        this.Ru = this.tn = !1;
        this.or = this.vv = null;
        this.mm = this.Qm = this.Lm = this.Fm = 0;
        this.LD = S(0, 0, 0, 0);
        a && (b ? this.Yo(a, b) : this.Yo(a))
    },j: function() {
        var a = new c.fu, b = this.LD;
        a.Yo(this.Mn, new c.wH(b.x, b.y, b.width, b.height));
        return a
    },vda: function() {
        return this.tn
    },Yha: function(a) {
        this.tn = a
    },Yo: function(a, b) {
        if (!a)
            throw "cc.Follow.initWithAction(): followedNode must be non nil";
        b = b || S(0, 0, 0, 0);
        this.Mn = a;
        this.LD = b;
        this.tn = !c.vC(b);
        this.Ru = !1;
        var d = c.C.K;
        this.or = N(d.width, d.height);
        this.vv = c.Ci(this.or, 0.5);
        this.tn && (this.Fm = -(b.x + b.width - this.or.x), this.Lm = -b.x, this.Qm = -b.y, this.mm = -(b.y + b.height - this.or.y), this.Lm < this.Fm && (this.Lm = this.Fm = (this.Fm + this.Lm) / 2), this.Qm < this.mm && (this.Qm = this.mm = (this.Qm + this.mm) / 2), this.Qm == this.mm && this.Fm == this.Lm && (this.Ru = !0));
        return !0
    },step: function() {
        var a = this.Mn.x, b = this.Mn.y, a = this.vv.x - a, b = this.vv.y - b;
        this.tn ? this.Ru || this.target.U(c.Rc(a, 
        this.Fm, this.Lm), c.Rc(b, this.mm, this.Qm)) : this.target.U(a, b)
    },Hg: function() {
        return !this.Mn.running
    },stop: function() {
        this.target = null;
        c.ed.prototype.stop.call(this)
    }});
c.fu.create = function(a, b) {
    return new c.fu(a, b)
};
c.u = c.Ji.extend({jb: 0,qv: !1,vg: null,dc: 1,Qr: !1,io: !1,le: 1,Wr: !1,ctor: function(a) {
        this.dc = this.le = 1;
        this.Qr = !1;
        this.MAX_VALUE = 2;
        this.Wr = this.io = !1;
        c.Ji.prototype.ctor.call(this);
        void 0 !== a && this.d(a)
    },Zaa: function() {
        return this.jb
    },d: function(a) {
        this.n = 0 === a ? c.du : a;
        this.jb = 0;
        return this.qv = !0
    },Hg: function() {
        return this.jb >= this.n
    },wa: function(a) {
        a.Qr = this.Qr;
        a.le = this.le;
        a.dc = this.dc;
        a.vg = this.vg;
        a.Wr = this.Wr;
        a.io = this.io
    },je: function(a) {
        if (this.vg) {
            a.vg = [];
            for (var b = 0; b < this.vg.length; b++)
                a.vg.push(this.vg[b].reverse())
        }
    },
    j: function() {
        var a = new c.u(this.n);
        this.wa(a);
        return a
    },Ta: function(a) {
        this.vg ? this.vg.length = 0 : this.vg = [];
        for (var b = 0; b < arguments.length; b++)
            this.vg.push(arguments[b]);
        return this
    },gd: function(a) {
        var b = this.vg;
        if (!b || 0 === b.length)
            return a;
        for (var d = 0, e = b.length; d < e; d++)
            a = b[d].Ta(a);
        return a
    },step: function(a) {
        this.qv ? (this.qv = !1, this.jb = 0) : this.jb += a;
        a = this.jb / (1.192092896E-7 < this.n ? this.n : 1.192092896E-7);
        a = 1 > a ? a : 1;
        this.update(0 < a ? a : 0);
        this.io && 1 < this.dc && this.Hg() && (this.Qr || this.dc--, this.v(this.target), 
        this.step(this.jb - this.n))
    },v: function(a) {
        c.ed.prototype.v.call(this, a);
        this.jb = 0;
        this.qv = !0
    },reverse: function() {
        c.log("cc.IntervalAction: reverse not implemented.");
        return null
    },Mm: function() {
        c.log("cc.ActionInterval.setAmplitudeRate(): it should be overridden in subclass.")
    },xm: function() {
        c.log("cc.ActionInterval.getAmplitudeRate(): it should be overridden in subclass.");
        return 0
    },speed: function(a) {
        if (0 >= a)
            return c.log("The speed parameter error"), this;
        this.Wr = !0;
        this.le *= a;
        return this
    },Yw: function() {
        return this.le
    },
    Ve: function(a) {
        this.le = a;
        return this
    },repeat: function(a) {
        a = Math.round(a);
        if (isNaN(a) || 1 > a)
            return c.log("The repeat parameter error"), this;
        this.io = !0;
        this.dc *= a;
        return this
    },L2: function() {
        this.io = !0;
        this.dc = this.MAX_VALUE;
        this.Qr = !0;
        return this
    }});
c.u.create = function(a) {
    return new c.u(a)
};
c.Ca = c.u.extend({Xh: null,uL: null,Ar: 0,ctor: function(a) {
        c.u.prototype.ctor.call(this);
        this.Xh = [];
        var b = a instanceof Array ? a : arguments, d = b.length - 1;
        0 <= d && null == b[d] && c.log("parameters should not be ending with null in Javascript");
        if (0 <= d) {
            for (var e = b[0], f = 1; f < d; f++)
                b[f] && (e = c.Ca.Ri(e, b[f]));
            this.Bm(e, b[d])
        }
    },Bm: function(a, b) {
        if (!a || !b)
            throw "cc.Sequence.initWithTwoActions(): arguments must all be non nil";
        this.d(a.n + b.n);
        this.Xh[0] = a;
        this.Xh[1] = b;
        return !0
    },j: function() {
        var a = new c.Ca;
        this.wa(a);
        a.Bm(this.Xh[0].j(), 
        this.Xh[1].j());
        return a
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        this.uL = this.Xh[0].n / this.n;
        this.Ar = -1
    },stop: function() {
        -1 !== this.Ar && this.Xh[this.Ar].stop();
        c.ed.prototype.stop.call(this)
    },update: function(a) {
        a = this.gd(a);
        var b = 0, d = this.uL, e = this.Xh, f = this.Ar;
        a < d ? (a = 0 !== d ? a / d : 1, 0 === b && 1 === f && (e[1].update(0), e[1].stop())) : (b = 1, a = 1 === d ? 1 : (a - d) / (1 - d), -1 === f && (e[0].v(this.target), e[0].update(1), e[0].stop()), f || (e[0].update(1), e[0].stop()));
        f === b && e[b].Hg() || (f !== b && e[b].v(this.target), e[b].update(a), 
        this.Ar = b)
    },reverse: function() {
        var a = c.Ca.Ri(this.Xh[1].reverse(), this.Xh[0].reverse());
        this.wa(a);
        this.je(a);
        return a
    }});
c.Ca.create = function(a) {
    var b = a instanceof Array ? a : arguments;
    0 < b.length && null == b[b.length - 1] && c.log("parameters should not be ending with null in Javascript");
    for (var d = b[0], e = 1; e < b.length; e++)
        b[e] && (d = c.Ca.Ri(d, b[e]));
    return d
};
c.Ca.Ri = function(a, b) {
    var d = new c.Ca;
    d.Bm(a, b);
    return d
};
c.tq = c.u.extend({dc: 0,Qk: 0,UB: 0,II: !1,lb: null,ctor: function(a, b) {
        c.u.prototype.ctor.call(this);
        void 0 !== b && this.aa(a, b)
    },aa: function(a, b) {
        return this.d(a.n * b) ? (this.dc = b, this.lb = a, a instanceof c.ue && (this.II = !0, this.dc -= 1), this.Qk = 0, !0) : !1
    },j: function() {
        var a = new c.tq;
        this.wa(a);
        a.aa(this.lb.j(), this.dc);
        return a
    },v: function(a) {
        this.Qk = 0;
        this.UB = this.lb.n / this.n;
        c.u.prototype.v.call(this, a);
        this.lb.v(a)
    },stop: function() {
        this.lb.stop();
        c.ed.prototype.stop.call(this)
    },update: function(a) {
        a = this.gd(a);
        var b = this.lb, d = this.n, e = this.dc, f = this.UB;
        if (a >= f) {
            for (; a > f && this.Qk < e; )
                b.update(1), this.Qk++, b.stop(), b.v(this.target), this.UB = f += b.n / d;
            1 <= a && this.Qk < e && this.Qk++;
            this.II || (this.Qk === e ? (b.update(1), b.stop()) : b.update(a - (f - b.n / d)))
        } else
            b.update(a * e % 1)
    },Hg: function() {
        return this.Qk == this.dc
    },reverse: function() {
        var a = c.tq.create(this.lb.reverse(), this.dc);
        this.wa(a);
        this.je(a);
        return a
    },RO: function(a) {
        this.lb != a && (this.lb = a)
    },EE: function() {
        return this.lb
    }});
c.tq.create = function(a, b) {
    return new c.tq(a, b)
};
c.hn = c.u.extend({lb: null,ctor: function(a) {
        c.u.prototype.ctor.call(this);
        this.lb = null;
        a && this.aa(a)
    },aa: function(a) {
        if (!a)
            throw "cc.RepeatForever.initWithAction(): action must be non null";
        this.lb = a;
        return !0
    },j: function() {
        var a = new c.hn;
        this.wa(a);
        a.aa(this.lb.j());
        return a
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        this.lb.v(a)
    },step: function(a) {
        var b = this.lb;
        b.step(a);
        b.Hg() && (b.v(this.target), b.step(b.jb - b.n))
    },Hg: function() {
        return !1
    },reverse: function() {
        var a = c.hn.create(this.lb.reverse());
        this.wa(a);
        this.je(a);
        return a
    },RO: function(a) {
        this.lb != a && (this.lb = a)
    },EE: function() {
        return this.lb
    }});
c.hn.create = function(a) {
    return new c.hn(a)
};
c.ve = c.u.extend({cj: null,uj: null,ctor: function(a) {
        c.u.prototype.ctor.call(this);
        this.uj = this.cj = null;
        var b = a instanceof Array ? a : arguments, d = b.length - 1;
        0 <= d && null == b[d] && c.log("parameters should not be ending with null in Javascript");
        if (0 <= d) {
            for (var e = b[0], f = 1; f < d; f++)
                b[f] && (e = c.ve.Ri(e, b[f]));
            this.Bm(e, b[d])
        }
    },Bm: function(a, b) {
        if (!a || !b)
            throw "cc.Spawn.initWithTwoActions(): arguments must all be non null";
        var d = !1, e = a.n, f = b.n;
        this.d(Math.max(e, f)) && (this.cj = a, this.uj = b, e > f ? this.uj = c.Ca.Ri(b, c.Kc.create(e - 
        f)) : e < f && (this.cj = c.Ca.Ri(a, c.Kc.create(f - e))), d = !0);
        return d
    },j: function() {
        var a = new c.ve;
        this.wa(a);
        a.Bm(this.cj.j(), this.uj.j());
        return a
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        this.cj.v(a);
        this.uj.v(a)
    },stop: function() {
        this.cj.stop();
        this.uj.stop();
        c.ed.prototype.stop.call(this)
    },update: function(a) {
        a = this.gd(a);
        this.cj && this.cj.update(a);
        this.uj && this.uj.update(a)
    },reverse: function() {
        var a = c.ve.Ri(this.cj.reverse(), this.uj.reverse());
        this.wa(a);
        this.je(a);
        return a
    }});
c.ve.create = function(a) {
    var b = a instanceof Array ? a : arguments;
    0 < b.length && null == b[b.length - 1] && c.log("parameters should not be ending with null in Javascript");
    for (var d = b[0], e = 1; e < b.length; e++)
        null != b[e] && (d = c.ve.Ri(d, b[e]));
    return d
};
c.ve.Ri = function(a, b) {
    var d = new c.ve;
    d.Bm(a, b);
    return d
};
c.nu = c.u.extend({gv: 0,Xr: 0,cJ: 0,cB: 0,no: 0,dJ: 0,ctor: function(a, b, d) {
        c.u.prototype.ctor.call(this);
        void 0 !== b && this.d(a, b, d)
    },d: function(a, b, d) {
        return c.u.prototype.d.call(this, a) ? (this.gv = b || 0, this.cB = d || this.gv, !0) : !1
    },j: function() {
        var a = new c.nu;
        this.wa(a);
        a.d(this.n, this.gv, this.cB);
        return a
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        var b = a.rotationX % 360, d = this.gv - b;
        180 < d && (d -= 360);
        -180 > d && (d += 360);
        this.Xr = b;
        this.cJ = d;
        this.no = a.rotationY % 360;
        a = this.cB - this.no;
        180 < a && (a -= 360);
        -180 > a && (a += 360);
        this.dJ = a
    },reverse: function() {
        c.log("cc.RotateTo.reverse(): it should be overridden in subclass.")
    },update: function(a) {
        a = this.gd(a);
        this.target && (this.target.rotationX = this.Xr + this.cJ * a, this.target.rotationY = this.no + this.dJ * a)
    }});
c.nu.create = function(a, b, d) {
    return new c.nu(a, b, d)
};
c.jn = c.u.extend({Yg: 0,Xr: 0,Mu: 0,no: 0,ctor: function(a, b, d) {
        c.u.prototype.ctor.call(this);
        void 0 !== b && this.d(a, b, d)
    },d: function(a, b, d) {
        return c.u.prototype.d.call(this, a) ? (this.Yg = b || 0, this.Mu = d || this.Yg, !0) : !1
    },j: function() {
        var a = new c.jn;
        this.wa(a);
        a.d(this.n, this.Yg, this.Mu);
        return a
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        this.Xr = a.rotationX;
        this.no = a.rotationY
    },update: function(a) {
        a = this.gd(a);
        this.target && (this.target.rotationX = this.Xr + this.Yg * a, this.target.rotationY = this.no + this.Mu * a)
    },reverse: function() {
        var a = 
        c.jn.create(this.n, -this.Yg, -this.Mu);
        this.wa(a);
        this.je(a);
        return a
    }});
c.jn.create = function(a, b, d) {
    var e = new c.jn;
    e.d(a, b, d);
    return e
};
c.yf = c.u.extend({ki: null,Dc: null,Pc: null,ctor: function(a, b, d) {
        c.u.prototype.ctor.call(this);
        this.ki = N(0, 0);
        this.Dc = N(0, 0);
        this.Pc = N(0, 0);
        void 0 !== b && this.d(a, b, d)
    },d: function(a, b, d) {
        return c.u.prototype.d.call(this, a) ? (void 0 !== b.x && (d = b.y, b = b.x), this.ki.x = b, this.ki.y = d, !0) : !1
    },j: function() {
        var a = new c.yf;
        this.wa(a);
        a.d(this.n, this.ki);
        return a
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        var b = a.Pe();
        a = a.Gg();
        this.Pc.x = b;
        this.Pc.y = a;
        this.Dc.x = b;
        this.Dc.y = a
    },update: function(a) {
        a = this.gd(a);
        if (this.target) {
            var b = 
            this.ki.x * a;
            a *= this.ki.y;
            var d = this.Dc;
            if (c.Kt) {
                var e = this.target.Gg(), f = this.Pc;
                d.x = d.x + this.target.Pe() - f.x;
                d.y = d.y + e - f.y;
                b += d.x;
                a += d.y;
                f.x = b;
                f.y = a;
                this.target.U(b, a)
            } else
                this.target.U(d.x + b, d.y + a)
        }
    },reverse: function() {
        var a = c.yf.create(this.n, N(-this.ki.x, -this.ki.y));
        this.wa(a);
        this.je(a);
        return a
    }});
c.yf.create = function(a, b, d) {
    return new c.yf(a, b, d)
};
c.lq = c.yf.extend({Hf: null,ctor: function(a, b, d) {
        c.yf.prototype.ctor.call(this);
        this.Hf = N(0, 0);
        void 0 !== b && this.d(a, b, d)
    },d: function(a, b, d) {
        return c.yf.prototype.d.call(this, a, b, d) ? (void 0 !== b.x && (d = b.y, b = b.x), this.Hf.x = b, this.Hf.y = d, !0) : !1
    },j: function() {
        var a = new c.lq;
        this.wa(a);
        a.d(this.n, this.Hf);
        return a
    },v: function(a) {
        c.yf.prototype.v.call(this, a);
        this.ki.x = this.Hf.x - a.Pe();
        this.ki.y = this.Hf.y - a.Gg()
    }});
c.lq.create = function(a, b, d) {
    return new c.lq(a, b, d)
};
c.Vj = c.u.extend({ph: 0,qh: 0,hw: 0,iw: 0,jv: 0,kv: 0,df: 0,ef: 0,ctor: function(a, b, d) {
        c.u.prototype.ctor.call(this);
        void 0 !== d && this.d(a, b, d)
    },d: function(a, b, d) {
        var e = !1;
        c.u.prototype.d.call(this, a) && (this.jv = b, this.kv = d, e = !0);
        return e
    },j: function() {
        var a = new c.Vj;
        this.wa(a);
        a.d(this.n, this.jv, this.kv);
        return a
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        this.hw = a.skewX % 180;
        this.df = this.jv - this.hw;
        180 < this.df && (this.df -= 360);
        -180 > this.df && (this.df += 360);
        this.iw = a.skewY % 360;
        this.ef = this.kv - this.iw;
        180 < this.ef && 
        (this.ef -= 360);
        -180 > this.ef && (this.ef += 360)
    },update: function(a) {
        a = this.gd(a);
        this.target.skewX = this.hw + this.df * a;
        this.target.skewY = this.iw + this.ef * a
    }});
c.Vj.create = function(a, b, d) {
    return new c.Vj(a, b, d)
};
c.yq = c.Vj.extend({ctor: function(a, b, d) {
        c.Vj.prototype.ctor.call(this);
        void 0 !== d && this.d(a, b, d)
    },d: function(a, b, d) {
        var e = !1;
        c.Vj.prototype.d.call(this, a, b, d) && (this.ph = b, this.qh = d, e = !0);
        return e
    },j: function() {
        var a = new c.yq;
        this.wa(a);
        a.d(this.n, this.ph, this.qh);
        return a
    },v: function(a) {
        c.Vj.prototype.v.call(this, a);
        this.df = this.ph;
        this.ef = this.qh;
        this.jv = this.hw + this.df;
        this.kv = this.iw + this.ef
    },reverse: function() {
        var a = c.yq.create(this.n, -this.ph, -this.qh);
        this.wa(a);
        this.je(a);
        return a
    }});
c.yq.create = function(a, b, d) {
    var e = new c.yq;
    e && e.d(a, b, d);
    return e
};
c.Qh = c.u.extend({Dc: null,ai: null,vr: 0,aj: 0,Pc: null,ctor: function(a, b, d, e, f) {
        c.u.prototype.ctor.call(this);
        this.Dc = N(0, 0);
        this.Pc = N(0, 0);
        this.ai = N(0, 0);
        void 0 !== e && this.d(a, b, d, e, f)
    },d: function(a, b, d, e, f) {
        return c.u.prototype.d.call(this, a) ? (void 0 === f && (f = e, e = d, d = b.y, b = b.x), this.ai.x = b, this.ai.y = d, this.vr = e, this.aj = f, !0) : !1
    },j: function() {
        var a = new c.Qh;
        this.wa(a);
        a.d(this.n, this.ai, this.vr, this.aj);
        return a
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        var b = a.Pe();
        a = a.Gg();
        this.Pc.x = b;
        this.Pc.y = a;
        this.Dc.x = b;
        this.Dc.y = a
    },update: function(a) {
        a = this.gd(a);
        if (this.target) {
            var b = a * this.aj % 1, b = 4 * this.vr * b * (1 - b), b = b + this.ai.y * a;
            a *= this.ai.x;
            var d = this.Dc;
            if (c.Kt) {
                var e = this.target.Gg(), f = this.Pc;
                d.x = d.x + this.target.Pe() - f.x;
                d.y = d.y + e - f.y;
                a += d.x;
                b += d.y;
                f.x = a;
                f.y = b;
                this.target.U(a, b)
            } else
                this.target.U(d.x + a, d.y + b)
        }
    },reverse: function() {
        var a = c.Qh.create(this.n, N(-this.ai.x, -this.ai.y), this.vr, this.aj);
        this.wa(a);
        this.je(a);
        return a
    }});
c.Qh.create = function(a, b, d, e, f) {
    return new c.Qh(a, b, d, e, f)
};
c.gu = c.Qh.extend({Hf: null,ctor: function(a, b, d, e, f) {
        c.Qh.prototype.ctor.call(this);
        this.Hf = N(0, 0);
        void 0 !== e && this.d(a, b, d, e, f)
    },d: function(a, b, d, e, f) {
        return c.Qh.prototype.d.call(this, a, b, d, e, f) ? (void 0 === f && (d = b.y, b = b.x), this.Hf.x = b, this.Hf.y = d, !0) : !1
    },v: function(a) {
        c.Qh.prototype.v.call(this, a);
        this.ai.x = this.Hf.x - this.Dc.x;
        this.ai.y = this.Hf.y - this.Dc.y
    },j: function() {
        var a = new c.gu;
        this.wa(a);
        a.d(this.n, this.Hf, this.vr, this.aj);
        return a
    }});
c.gu.create = function(a, b, d, e, f) {
    return new c.gu(a, b, d, e, f)
};
c.YL = function(a, b, d, e) {
    return 0 * Math.pow(1 - e, 3) + 3 * e * Math.pow(1 - e, 2) * a + 3 * Math.pow(e, 2) * (1 - e) * b + Math.pow(e, 3) * d
};
c.Pj = c.u.extend({Ef: null,Dc: null,Pc: null,ctor: function(a, b) {
        c.u.prototype.ctor.call(this);
        this.Ef = [];
        this.Dc = N(0, 0);
        this.Pc = N(0, 0);
        b && this.d(a, b)
    },d: function(a, b) {
        return c.u.prototype.d.call(this, a) ? (this.Ef = b, !0) : !1
    },j: function() {
        var a = new c.Pj;
        this.wa(a);
        for (var b = [], d = 0; d < this.Ef.length; d++) {
            var e = this.Ef[d];
            b.push(N(e.x, e.y))
        }
        a.d(this.n, b);
        return a
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        var b = a.Pe();
        a = a.Gg();
        this.Pc.x = b;
        this.Pc.y = a;
        this.Dc.x = b;
        this.Dc.y = a
    },update: function(a) {
        a = this.gd(a);
        if (this.target) {
            var b = this.Ef, d = c.YL(b[0].x, b[1].x, b[2].x, a);
            a = c.YL(b[0].y, b[1].y, b[2].y, a);
            b = this.Dc;
            if (c.Kt) {
                var e = this.target.Gg(), f = this.Pc;
                b.x = b.x + this.target.Pe() - f.x;
                b.y = b.y + e - f.y;
                d += b.x;
                a += b.y;
                f.x = d;
                f.y = a;
                this.target.U(d, a)
            } else
                this.target.U(b.x + d, b.y + a)
        }
    },reverse: function() {
        var a = this.Ef, a = c.Pj.create(this.n, [c.Fj(a[1], c.wF(a[2])), c.Fj(a[0], c.wF(a[2])), c.wF(a[2])]);
        this.wa(a);
        this.je(a);
        return a
    }});
c.Pj.create = function(a, b) {
    return new c.Pj(a, b)
};
c.Ft = c.Pj.extend({sw: null,ctor: function(a, b) {
        c.Pj.prototype.ctor.call(this);
        this.sw = [];
        b && this.d(a, b)
    },d: function(a, b) {
        return c.u.prototype.d.call(this, a) ? (this.sw = b, !0) : !1
    },j: function() {
        var a = new c.Ft;
        this.wa(a);
        a.d(this.n, this.sw);
        return a
    },v: function(a) {
        c.Pj.prototype.v.call(this, a);
        a = this.Dc;
        var b = this.sw, d = this.Ef;
        d[0] = c.Gd(b[0], a);
        d[1] = c.Gd(b[1], a);
        d[2] = c.Gd(b[2], a)
    }});
c.Ft.create = function(a, b) {
    return new c.Ft(a, b)
};
c.Uc = c.u.extend({pa: 1,Ra: 1,Zr: 1,$r: 1,In: 0,Jn: 0,df: 0,ef: 0,ctor: function(a, b, d) {
        c.u.prototype.ctor.call(this);
        void 0 !== b && this.d(a, b, d)
    },d: function(a, b, d) {
        return c.u.prototype.d.call(this, a) ? (this.In = b, this.Jn = null != d ? d : b, !0) : !1
    },j: function() {
        var a = new c.Uc;
        this.wa(a);
        a.d(this.n, this.In, this.Jn);
        return a
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        this.Zr = a.scaleX;
        this.$r = a.scaleY;
        this.df = this.In - this.Zr;
        this.ef = this.Jn - this.$r
    },update: function(a) {
        a = this.gd(a);
        this.target && (this.target.scaleX = this.Zr + 
        this.df * a, this.target.scaleY = this.$r + this.ef * a)
    }});
c.Uc.create = function(a, b, d) {
    var e = new c.Uc;
    e.d(a, b, d);
    return e
};
c.kn = c.Uc.extend({v: function(a) {
        c.Uc.prototype.v.call(this, a);
        this.df = this.Zr * this.In - this.Zr;
        this.ef = this.$r * this.Jn - this.$r
    },reverse: function() {
        var a = c.kn.create(this.n, 1 / this.In, 1 / this.Jn);
        this.wa(a);
        this.je(a);
        return a
    },j: function() {
        var a = new c.kn;
        this.wa(a);
        a.d(this.n, this.In, this.Jn);
        return a
    }});
c.kn.create = function(a, b, d) {
    return new c.kn(a, b, d)
};
c.Kp = c.u.extend({dc: 0,DK: !1,ctor: function(a, b) {
        c.u.prototype.ctor.call(this);
        void 0 !== b && this.d(a, b)
    },d: function(a, b) {
        return c.u.prototype.d.call(this, a) ? (this.dc = b, !0) : !1
    },j: function() {
        var a = new c.Kp;
        this.wa(a);
        a.d(this.n, this.dc);
        return a
    },update: function(a) {
        a = this.gd(a);
        if (this.target && !this.Hg()) {
            var b = 1 / this.dc;
            this.target.visible = a % b > b / 2
        }
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        this.DK = a.visible
    },stop: function() {
        this.target.visible = this.DK;
        c.u.prototype.stop.call(this)
    },reverse: function() {
        var a = 
        c.Kp.create(this.n, this.dc);
        this.wa(a);
        this.je(a);
        return a
    }});
c.Kp.create = function(a, b) {
    var d = new c.Kp;
    d.d(a, b);
    return d
};
c.Sj = c.u.extend({wo: 0,tv: 0,ctor: function(a, b) {
        c.u.prototype.ctor.call(this);
        void 0 !== b && this.d(a, b)
    },d: function(a, b) {
        return c.u.prototype.d.call(this, a) ? (this.wo = b, !0) : !1
    },j: function() {
        var a = new c.Sj;
        this.wa(a);
        a.d(this.n, this.wo);
        return a
    },update: function(a) {
        a = this.gd(a);
        if (this.target.vb) {
            var b = void 0 !== this.tv ? this.tv : 255;
            this.target.opacity = b + (this.wo - b) * a
        }
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        this.target.vb && (this.tv = a.opacity)
    }});
c.Sj.create = function(a, b) {
    return new c.Sj(a, b)
};
c.Zm = c.Sj.extend({DC: null,reverse: function() {
        var a = new c.$m;
        a.d(this.n, 0);
        this.wa(a);
        this.je(a);
        return a
    },j: function() {
        var a = new c.Zm;
        this.wa(a);
        a.d(this.n, this.wo);
        return a
    },v: function(a) {
        this.DC && (this.wo = this.DC.tv);
        c.Sj.prototype.v.call(this, a)
    }});
c.Zm.create = function(a) {
    return new c.Zm(a, 255)
};
c.$m = c.Sj.extend({reverse: function() {
        var a = new c.Zm;
        a.DC = this;
        a.d(this.n, 255);
        this.wa(a);
        this.je(a);
        return a
    },j: function() {
        var a = new c.$m;
        this.wa(a);
        a.d(this.n, this.wo);
        return a
    }});
c.$m.create = function(a) {
    var b = new c.$m;
    b.d(a, 0);
    return b
};
c.zu = c.u.extend({md: null,Oc: null,ctor: function(a, b, d, e) {
        c.u.prototype.ctor.call(this);
        this.md = c.color(0, 0, 0);
        this.Oc = c.color(0, 0, 0);
        void 0 !== e && this.d(a, b, d, e)
    },d: function(a, b, d, e) {
        return c.u.prototype.d.call(this, a) ? (this.md = c.color(b, d, e), !0) : !1
    },j: function() {
        var a = new c.zu;
        this.wa(a);
        var b = this.md;
        a.d(this.n, b.r, b.g, b.b);
        return a
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        this.target.vb && (this.Oc = this.target.color)
    },update: function(a) {
        a = this.gd(a);
        var b = this.Oc, d = this.md;
        b && this.target.vb && (this.target.color = 
        c.color(b.r + (d.r - b.r) * a, b.g + (d.g - b.g) * a, b.b + (d.b - b.b) * a))
    }});
c.zu.create = function(a, b, d, e) {
    return new c.zu(a, b, d, e)
};
c.Hq = c.u.extend({ev: 0,dv: 0,cv: 0,UJ: 0,TJ: 0,SJ: 0,ctor: function(a, b, d, e) {
        c.u.prototype.ctor.call(this);
        void 0 !== e && this.d(a, b, d, e)
    },d: function(a, b, d, e) {
        return c.u.prototype.d.call(this, a) ? (this.ev = b, this.dv = d, this.cv = e, !0) : !1
    },j: function() {
        var a = new c.Hq;
        this.wa(a);
        a.d(this.n, this.ev, this.dv, this.cv);
        return a
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        a.vb && (a = a.color, this.UJ = a.r, this.TJ = a.g, this.SJ = a.b)
    },update: function(a) {
        a = this.gd(a);
        this.target.vb && (this.target.color = c.color(this.UJ + this.ev * a, this.TJ + 
        this.dv * a, this.SJ + this.cv * a))
    },reverse: function() {
        var a = c.Hq.create(this.n, -this.ev, -this.dv, -this.cv);
        this.wa(a);
        this.je(a);
        return a
    }});
c.Hq.create = function(a, b, d, e) {
    return new c.Hq(a, b, d, e)
};
c.Kc = c.u.extend({update: function() {
    },reverse: function() {
        var a = c.Kc.create(this.n);
        this.wa(a);
        this.je(a);
        return a
    },j: function() {
        var a = new c.Kc;
        this.wa(a);
        a.d(this.n);
        return a
    }});
c.Kc.create = function(a) {
    return new c.Kc(a)
};
c.ul = c.u.extend({ej: null,ctor: function(a) {
        c.u.prototype.ctor.call(this);
        this.ej = null;
        a && this.aa(a)
    },aa: function(a) {
        if (!a)
            throw "cc.ReverseTime.initWithAction(): action must be non null";
        if (a == this.ej)
            throw "cc.ReverseTime.initWithAction(): the action was already passed in.";
        return c.u.prototype.d.call(this, a.n) ? (this.ej = a, !0) : !1
    },j: function() {
        var a = new c.ul;
        this.wa(a);
        a.aa(this.ej.j());
        return a
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        this.ej.v(a)
    },update: function(a) {
        a = this.gd(a);
        this.ej && this.ej.update(1 - 
        a)
    },reverse: function() {
        return this.ej.j()
    },stop: function() {
        this.ej.stop();
        c.ed.prototype.stop.call(this)
    }});
c.ul.create = function(a) {
    return new c.ul(a)
};
c.Vm = c.u.extend({kk: null,Hr: 0,ZB: null,nv: 0,aD: null,ctor: function(a) {
        c.u.prototype.ctor.call(this);
        this.aD = [];
        a && this.vN(a)
    },HM: function() {
        return this.kk
    },Y2: function(a) {
        this.kk = a
    },vN: function(a) {
        if (!a)
            throw "cc.Animate.initWithAnimation(): animation must be non-NULL";
        var b = a.So();
        if (this.d(b * a.bj)) {
            this.Hr = 0;
            this.Y2(a);
            this.ZB = null;
            this.nv = 0;
            var d = this.aD, e = d.length = 0, f = b / a.ri;
            a = a.Rd;
            c.Bo(a, c.lg);
            for (var g = 0; g < a.length; g++) {
                var h = e * f / b, e = e + a[g].Qd;
                d.push(h)
            }
            return !0
        }
        return !1
    },j: function() {
        var a = new c.Vm;
        this.wa(a);
        a.vN(this.kk.j());
        return a
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        this.kk.Vl && (this.ZB = a.DZ());
        this.nv = this.Hr = 0
    },update: function(a) {
        a = this.gd(a);
        1 > a && (a *= this.kk.bj, (0 | a) > this.nv && (this.Hr = 0, this.nv++), a %= 1);
        for (var b = this.kk.Rd, d = b.length, e = this.aD, f = this.Hr; f < d; f++)
            if (e[f] <= a)
                this.target.hl(b[f].xj()), this.Hr = f + 1;
            else
                break
    },reverse: function() {
        var a = this.kk, b = a.Rd, d = [];
        c.Bo(b, c.lg);
        if (0 < b.length)
            for (var e = b.length - 1; 0 <= e; e--) {
                var f = b[e];
                if (!f)
                    break;
                d.push(f.j())
            }
        b = c.Oj.create(d, 
        a.Qd, a.bj);
        b.nt(a.Vl);
        a = c.Vm.create(b);
        this.wa(a);
        this.je(a);
        return a
    },stop: function() {
        this.kk.Vl && this.target && this.target.hl(this.ZB);
        c.ed.prototype.stop.call(this)
    }});
c.Vm.create = function(a) {
    return new c.Vm(a)
};
c.xu = c.u.extend({Qq: null,Nn: null,ctor: function(a, b) {
        c.u.prototype.ctor.call(this);
        b && this.Yo(a, b)
    },Yo: function(a, b) {
        return this.d(b.n) ? (this.Nn = a, this.Qq = b, !0) : !1
    },j: function() {
        var a = new c.xu;
        this.wa(a);
        a.Yo(this.Nn, this.Qq.j());
        return a
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        this.Qq.v(this.Nn)
    },stop: function() {
        this.Qq.stop()
    },update: function(a) {
        a = this.gd(a);
        this.Qq.update(a)
    },kba: function() {
        return this.Nn
    },tia: function(a) {
        this.Nn != a && (this.Nn = a)
    }});
c.xu.create = function(a, b) {
    return new c.xu(a, b)
};
c.ue = c.Ji.extend({Hg: function() {
        return !0
    },step: function() {
        this.update(1)
    },update: function() {
    },reverse: function() {
        return this.j()
    },j: function() {
        return new c.ue
    }});
c.zf = c.ue.extend({update: function() {
        this.target.visible = !0
    },reverse: function() {
        return c.Xg.create()
    },j: function() {
        return new c.zf
    }});
c.zf.create = function() {
    return new c.zf
};
c.Xg = c.ue.extend({update: function() {
        this.target.visible = !1
    },reverse: function() {
        return c.zf.create()
    },j: function() {
        return new c.Xg
    }});
c.Xg.create = function() {
    return new c.Xg
};
c.Iq = c.ue.extend({update: function() {
        this.target.visible = !this.target.visible
    },reverse: function() {
        return new c.Iq
    },j: function() {
        return new c.Iq
    }});
c.Iq.create = function() {
    return new c.Iq
};
c.sq = c.ue.extend({Bv: !0,ctor: function(a) {
        c.Ji.prototype.ctor.call(this);
        void 0 !== a && this.M(a)
    },update: function() {
        this.target.Se(this.Bv)
    },M: function(a) {
        this.Bv = a;
        return !0
    },reverse: function() {
        return new c.sq(this.Bv)
    },j: function() {
        return new c.sq(this.Bv)
    }});
c.sq.create = function(a) {
    return new c.sq(a)
};
c.gq = c.ue.extend({Ob: !1,ctor: function(a) {
        c.Ji.prototype.ctor.call(this);
        this.Ob = !1;
        void 0 !== a && this.xN(a)
    },xN: function(a) {
        this.Ob = a;
        return !0
    },update: function() {
        this.target.flippedX = this.Ob
    },reverse: function() {
        return c.gq.create(!this.Ob)
    },j: function() {
        var a = new c.gq;
        a.xN(this.Ob);
        return a
    }});
c.gq.create = function(a) {
    return new c.gq(a)
};
c.hq = c.ue.extend({Pb: !1,ctor: function(a) {
        c.Ji.prototype.ctor.call(this);
        this.Pb = !1;
        void 0 !== a && this.yN(a)
    },yN: function(a) {
        this.Pb = a;
        return !0
    },update: function() {
        this.target.flippedY = this.Pb
    },reverse: function() {
        return c.hq.create(!this.Pb)
    },j: function() {
        var a = new c.hq;
        a.yN(this.Pb);
        return a
    }});
c.hq.create = function(a) {
    return new c.hq(a)
};
c.lu = c.ue.extend({vh: 0,Je: 0,ctor: function(a, b) {
        c.Ji.prototype.ctor.call(this);
        this.Je = this.vh = 0;
        void 0 !== a && (void 0 !== a.x && (b = a.y, a = a.x), this.DN(a, b))
    },DN: function(a, b) {
        this.vh = a;
        this.Je = b;
        return !0
    },update: function() {
        this.target.U(this.vh, this.Je)
    },j: function() {
        var a = new c.lu;
        a.DN(this.vh, this.Je);
        return a
    }});
c.lu.create = function(a, b) {
    return new c.lu(a, b)
};
c.Nb = c.ue.extend({jj: null,Tu: null,pr: null,En: null,ctor: function(a, b, d) {
        c.Ji.prototype.ctor.call(this);
        void 0 !== a && (void 0 === b ? this.mx(a) : this.mx(a, b, d))
    },mx: function(a, b, d) {
        b ? (this.En = d, this.Tu = a, this.jj = b) : a && (this.pr = a);
        return !0
    },execute: function() {
        null != this.Tu ? this.Tu.call(this.jj, this.target, this.En) : this.pr && this.pr.call(null, this.target)
    },update: function() {
        this.execute()
    },Fca: function() {
        return this.jj
    },uja: function(a) {
        a != this.jj && (this.jj && (this.jj = null), this.jj = a)
    },j: function() {
        var a = new c.Nb;
        this.jj ? a.mx(this.Tu, this.jj, this.En) : this.pr && a.mx(this.pr);
        return a
    }});
c.Nb.create = function(a, b, d) {
    return new c.Nb(a, b, d)
};
c.By = c.u.extend({MA: 0,NA: 0,OA: 0,LJ: 0,MJ: 0,NJ: 0,EL: 0,FL: 0,GL: 0,ctor: function() {
        c.u.prototype.ctor.call(this);
        this.GL = this.FL = this.EL = this.NJ = this.MJ = this.LJ = this.OA = this.NA = this.MA = 0
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        a = a.ym();
        var b = a.KM();
        this.MA = b.x;
        this.NA = b.y;
        this.OA = b.z;
        b = a.PM();
        this.LJ = b.x;
        this.MJ = b.y;
        this.NJ = b.z;
        a = a.u0();
        this.EL = a.x;
        this.FL = a.y;
        this.GL = a.z
    },j: function() {
        return new c.By
    },reverse: function() {
        return c.ul.create(this)
    }});
c.$d = c.By.extend({Ee: 0,WA: 0,Tq: 0,aJ: 0,Yg: 0,$I: 0,PK: 0,NK: 0,OK: 0,MK: 0,ctor: function(a, b, d, e, f, g, h) {
        c.By.prototype.ctor.call(this);
        void 0 !== h && this.d(a, b, d, e, f, g, h)
    },d: function(a, b, d, e, f, g, h) {
        return c.u.prototype.d.call(this, a) ? (this.Ee = b, this.WA = d, this.Tq = e, this.aJ = f, this.Yg = g, this.$I = h, this.NK = c.Vf(f), this.MK = c.Vf(h), !0) : !1
    },c4: function() {
        var a = this.target.ym(), b = a.PM(), d = a.KM(), a = b.x - d.x, e = b.y - d.y, b = b.z - d.z, d = Math.sqrt(Math.pow(a, 2) + Math.pow(e, 2) + Math.pow(b, 2)), f = Math.sqrt(Math.pow(a, 2) + Math.pow(e, 
        2));
        0 === f && (f = c.du);
        0 === d && (d = c.du);
        return {U1: d / c.Mp.Ks(),T4: Math.acos(b / d),azimuth: 0 > a ? Math.PI - Math.asin(e / f) : Math.asin(e / f)}
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        a = this.c4();
        isNaN(this.Ee) && (this.Ee = a.U1);
        isNaN(this.Tq) && (this.Tq = c.CF(a.T4));
        isNaN(this.Yg) && (this.Yg = c.CF(a.azimuth));
        this.PK = c.Vf(this.Tq);
        this.OK = c.Vf(this.Yg)
    },j: function() {
        var a = new c.$d;
        a.d(this.n, this.Ee, this.WA, this.Tq, this.aJ, this.Yg, this.$I);
        return a
    },update: function(a) {
        a = this.gd(a);
        var b = (this.Ee + this.WA * a) * c.Mp.Ks(), 
        d = this.PK + this.NK * a, e = this.OK + this.MK * a;
        a = Math.sin(d) * Math.cos(e) * b + this.MA;
        e = Math.sin(d) * Math.sin(e) * b + this.NA;
        b = Math.cos(d) * b + this.OA;
        this.target.ym().PO(a, e, b)
    }});
c.$d.create = function(a, b, d, e, f, g, h) {
    return new c.$d(a, b, d, e, f, g, h)
};
c.Pa = c.u.extend({p: null,ctor: function(a) {
        c.u.prototype.ctor.call(this);
        a && this.aa(a)
    },aa: function(a) {
        if (!a)
            throw "cc.ActionEase.initWithAction(): action must be non nil";
        return this.d(a.So()) ? (this.p = a, !0) : !1
    },j: function() {
        var a = new c.Pa;
        a.aa(this.p.j());
        return a
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        this.p.v(this.target)
    },stop: function() {
        this.p.stop();
        c.u.prototype.stop.call(this)
    },update: function(a) {
        this.p.update(a)
    },reverse: function() {
        return c.Pa.create(this.p.reverse())
    },EE: function() {
        return this.p
    }});
c.Pa.create = function(a) {
    return new c.Pa(a)
};
c.ql = c.Pa.extend({ac: 0,ctor: function(a, b) {
        c.Pa.prototype.ctor.call(this);
        void 0 !== b && this.aa(a, b)
    },fja: function(a) {
        this.ac = a
    },jca: function() {
        return this.ac
    },aa: function(a, b) {
        return c.Pa.prototype.aa.call(this, a) ? (this.ac = b, !0) : !1
    },j: function() {
        var a = new c.ql;
        a.aa(this.p.j(), this.ac);
        return a
    },reverse: function() {
        return c.ql.create(this.p.reverse(), 1 / this.ac)
    }});
c.ql.create = function(a, b) {
    return new c.ql(a, b)
};
c.$t = c.ql.extend({update: function(a) {
        this.p.update(Math.pow(a, this.ac))
    },reverse: function() {
        return c.$t.create(this.p.reverse(), 1 / this.ac)
    },j: function() {
        var a = new c.$t;
        a.aa(this.p.j(), this.ac);
        return a
    }});
c.$t.create = function(a, b) {
    return new c.$t(a, b)
};
c.WZ = function(a) {
    return {ac: a,Ta: function(a) {
            return Math.pow(a, this.ac)
        },reverse: function() {
            return c.WZ(1 / this.ac)
        }}
};
c.pl = c.ql.extend({update: function(a) {
        this.p.update(Math.pow(a, 1 / this.ac))
    },reverse: function() {
        return c.pl.create(this.p.reverse(), 1 / this.ac)
    },j: function() {
        var a = new c.pl;
        a.aa(this.p.j(), this.ac);
        return a
    }});
c.pl.create = function(a, b) {
    return new c.pl(a, b)
};
c.YZ = function(a) {
    return {ac: a,Ta: function(a) {
            return Math.pow(a, 1 / this.ac)
        },reverse: function() {
            return c.YZ(1 / this.ac)
        }}
};
c.Wp = c.ql.extend({update: function(a) {
        a *= 2;
        1 > a ? this.p.update(0.5 * Math.pow(a, this.ac)) : this.p.update(1 - 0.5 * Math.pow(2 - a, this.ac))
    },j: function() {
        var a = new c.Wp;
        a.aa(this.p.j(), this.ac);
        return a
    },reverse: function() {
        return c.Wp.create(this.p.reverse(), this.ac)
    }});
c.Wp.create = function(a, b) {
    return new c.Wp(a, b)
};
c.XZ = function(a) {
    return {ac: a,Ta: function(a) {
            a *= 2;
            return 1 > a ? 0.5 * Math.pow(a, this.ac) : 1 - 0.5 * Math.pow(2 - a, this.ac)
        },reverse: function() {
            return c.XZ(this.ac)
        }}
};
c.Xt = c.Pa.extend({update: function(a) {
        this.p.update(0 === a ? 0 : Math.pow(2, 10 * (a - 1)))
    },reverse: function() {
        return c.Zt.create(this.p.reverse())
    },j: function() {
        var a = new c.Xt;
        a.aa(this.p.j());
        return a
    }});
c.Xt.create = function(a) {
    return new c.Xt(a)
};
c.uJ = {Ta: function(a) {
        return 0 === a ? 0 : Math.pow(2, 10 * (a - 1))
    },reverse: function() {
        return c.wJ
    }};
c.C$ = function() {
    return c.uJ
};
c.Zt = c.Pa.extend({update: function(a) {
        this.p.update(1 == a ? 1 : -Math.pow(2, -10 * a) + 1)
    },reverse: function() {
        return c.Xt.create(this.p.reverse())
    },j: function() {
        var a = new c.Zt;
        a.aa(this.p.j());
        return a
    }});
c.Zt.create = function(a) {
    return new c.Zt(a)
};
c.wJ = {Ta: function(a) {
        return 1 == a ? 1 : -Math.pow(2, -10 * a) + 1
    },reverse: function() {
        return c.uJ
    }};
c.E$ = function() {
    return c.wJ
};
c.Yt = c.Pa.extend({update: function(a) {
        1 != a && 0 !== a && (a *= 2, a = 1 > a ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (-Math.pow(2, -10 * (a - 1)) + 2));
        this.p.update(a)
    },reverse: function() {
        return c.Yt.create(this.p.reverse())
    },j: function() {
        var a = new c.Yt;
        a.aa(this.p.j());
        return a
    }});
c.Yt.create = function(a) {
    return new c.Yt(a)
};
c.vJ = {Ta: function(a) {
        return 1 !== a && 0 !== a ? (a *= 2, 1 > a ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (-Math.pow(2, -10 * (a - 1)) + 2)) : a
    },reverse: function() {
        return c.vJ
    }};
c.D$ = function() {
    return c.vJ
};
c.au = c.Pa.extend({update: function(a) {
        a = 0 === a || 1 === a ? a : -1 * Math.cos(a * Math.PI / 2) + 1;
        this.p.update(a)
    },reverse: function() {
        return c.cu.create(this.p.reverse())
    },j: function() {
        var a = new c.au;
        a.aa(this.p.j());
        return a
    }});
c.au.create = function(a) {
    return new c.au(a)
};
c.GJ = {Ta: function(a) {
        return 0 === a || 1 === a ? a : -1 * Math.cos(a * Math.PI / 2) + 1
    },reverse: function() {
        return c.IJ
    }};
c.O$ = function() {
    return c.GJ
};
c.cu = c.Pa.extend({update: function(a) {
        a = 0 === a || 1 === a ? a : Math.sin(a * Math.PI / 2);
        this.p.update(a)
    },reverse: function() {
        return c.au.create(this.p.reverse())
    },j: function() {
        var a = new c.cu;
        a.aa(this.p.j());
        return a
    }});
c.cu.create = function(a) {
    return new c.cu(a)
};
c.IJ = {Ta: function(a) {
        return 0 === a || 1 == a ? a : Math.sin(a * Math.PI / 2)
    },reverse: function() {
        return c.GJ
    }};
c.Q$ = function() {
    return c.IJ
};
c.bu = c.Pa.extend({update: function(a) {
        a = 0 === a || 1 === a ? a : -0.5 * (Math.cos(Math.PI * a) - 1);
        this.p.update(a)
    },j: function() {
        var a = new c.bu;
        a.aa(this.p.j());
        return a
    },reverse: function() {
        return c.bu.create(this.p.reverse())
    }});
c.bu.create = function(a) {
    return new c.bu(a)
};
c.HJ = {Ta: function(a) {
        return 0 === a || 1 === a ? a : -0.5 * (Math.cos(Math.PI * a) - 1)
    },reverse: function() {
        return c.HJ
    }};
c.P$ = function() {
    return c.HJ
};
c.Wm = c.Pa.extend({Db: 0.3,ctor: function(a, b) {
        c.Pa.prototype.ctor.call(this);
        a && this.aa(a, b)
    },aca: function() {
        return this.Db
    },bja: function(a) {
        this.Db = a
    },aa: function(a, b) {
        c.Pa.prototype.aa.call(this, a);
        this.Db = null == b ? 0.3 : b;
        return !0
    },reverse: function() {
        c.log("cc.EaseElastic.reverse(): it should be overridden in subclass.");
        return null
    },j: function() {
        var a = new c.Wm;
        a.aa(this.p.j(), this.Db);
        return a
    }});
c.Wm.create = function(a, b) {
    return new c.Wm(a, b)
};
c.Ut = c.Wm.extend({update: function(a) {
        var b = 0;
        0 === a || 1 === a ? b = a : (b = this.Db / 4, a -= 1, b = -Math.pow(2, 10 * a) * Math.sin((a - b) * Math.PI * 2 / this.Db));
        this.p.update(b)
    },reverse: function() {
        return c.Wt.create(this.p.reverse(), this.Db)
    },j: function() {
        var a = new c.Ut;
        a.aa(this.p.j(), this.Db);
        return a
    }});
c.Ut.create = function(a, b) {
    return new c.Ut(a, b)
};
c.sJ = {Ta: function(a) {
        if (0 === a || 1 === a)
            return a;
        a -= 1;
        return -Math.pow(2, 10 * a) * Math.sin((a - 0.075) * Math.PI * 2 / 0.3)
    },reverse: function() {
        return c.tJ
    }};
c.TZ = function(a) {
    return a && 0.3 !== a ? {Db: a,Ta: function(a) {
            if (0 === a || 1 === a)
                return a;
            a -= 1;
            return -Math.pow(2, 10 * a) * Math.sin((a - this.Db / 4) * Math.PI * 2 / this.Db)
        },reverse: function() {
            return c.VZ(this.Db)
        }} : c.sJ
};
c.Wt = c.Wm.extend({update: function(a) {
        var b = 0, b = 0 === a || 1 == a ? a : Math.pow(2, -10 * a) * Math.sin((a - this.Db / 4) * Math.PI * 2 / this.Db) + 1;
        this.p.update(b)
    },reverse: function() {
        return c.Ut.create(this.p.reverse(), this.Db)
    },j: function() {
        var a = new c.Wt;
        a.aa(this.p.j(), this.Db);
        return a
    }});
c.Wt.create = function(a, b) {
    return new c.Wt(a, b)
};
c.tJ = {Ta: function(a) {
        return 0 === a || 1 === a ? a : Math.pow(2, -10 * a) * Math.sin((a - 0.075) * Math.PI * 2 / 0.3) + 1
    },reverse: function() {
        return c.sJ
    }};
c.VZ = function(a) {
    return a && 0.3 !== a ? {Db: a,Ta: function(a) {
            return 0 === a || 1 === a ? a : Math.pow(2, -10 * a) * Math.sin((a - this.Db / 4) * Math.PI * 2 / this.Db) + 1
        },reverse: function() {
            return c.TZ(this.Db)
        }} : c.tJ
};
c.Vt = c.Wm.extend({update: function(a) {
        var b = 0, b = this.Db;
        if (0 === a || 1 == a)
            b = a;
        else {
            b || (b = this.Db = 0.3 * 1.5);
            var d = b / 4;
            a = 2 * a - 1;
            b = 0 > a ? -0.5 * Math.pow(2, 10 * a) * Math.sin((a - d) * Math.PI * 2 / b) : Math.pow(2, -10 * a) * Math.sin((a - d) * Math.PI * 2 / b) * 0.5 + 1
        }
        this.p.update(b)
    },reverse: function() {
        return c.Vt.create(this.p.reverse(), this.Db)
    },j: function() {
        var a = new c.Vt;
        a.aa(this.p.j(), this.Db);
        return a
    }});
c.Vt.create = function(a, b) {
    return new c.Vt(a, b)
};
c.UZ = function(a) {
    return {Db: a || 0.3,Ta: function(a) {
            var d = 0, d = this.Db;
            if (0 === a || 1 === a)
                d = a;
            else {
                d || (d = this.Db = 0.3 * 1.5);
                var e = d / 4;
                a = 2 * a - 1;
                d = 0 > a ? -0.5 * Math.pow(2, 10 * a) * Math.sin((a - e) * Math.PI * 2 / d) : Math.pow(2, -10 * a) * Math.sin((a - e) * Math.PI * 2 / d) * 0.5 + 1
            }
            return d
        },reverse: function() {
            return c.UZ(this.Db)
        }}
};
c.ol = c.Pa.extend({Hw: function(a) {
        if (a < 1 / 2.75)
            return 7.5625 * a * a;
        if (a < 2 / 2.75)
            return a -= 1.5 / 2.75, 7.5625 * a * a + 0.75;
        if (a < 2.5 / 2.75)
            return a -= 2.25 / 2.75, 7.5625 * a * a + 0.9375;
        a -= 2.625 / 2.75;
        return 7.5625 * a * a + 0.984375
    },j: function() {
        var a = new c.ol;
        a.aa(this.p.j());
        return a
    },reverse: function() {
        return c.ol.create(this.p.reverse())
    }});
c.ol.create = function(a) {
    return new c.ol(a)
};
c.Rt = c.ol.extend({update: function(a) {
        this.p.update(1 - this.Hw(1 - a))
    },reverse: function() {
        return c.Tt.create(this.p.reverse())
    },j: function() {
        var a = new c.Rt;
        a.aa(this.p.j());
        return a
    }});
c.Rt.create = function(a) {
    return new c.Rt(a)
};
c.Qu = function(a) {
    if (a < 1 / 2.75)
        return 7.5625 * a * a;
    if (a < 2 / 2.75)
        return a -= 1.5 / 2.75, 7.5625 * a * a + 0.75;
    if (a < 2.5 / 2.75)
        return a -= 2.25 / 2.75, 7.5625 * a * a + 0.9375;
    a -= 2.625 / 2.75;
    return 7.5625 * a * a + 0.984375
};
c.jJ = {Ta: function(a) {
        return 1 - c.Qu(1 - a)
    },reverse: function() {
        return c.lJ
    }};
c.t$ = function() {
    return c.jJ
};
c.Tt = c.ol.extend({update: function(a) {
        this.p.update(this.Hw(a))
    },reverse: function() {
        return c.Rt.create(this.p.reverse())
    },j: function() {
        var a = new c.Tt;
        a.aa(this.p.j());
        return a
    }});
c.Tt.create = function(a) {
    return new c.Tt(a)
};
c.lJ = {Ta: function(a) {
        return c.Qu(a)
    },reverse: function() {
        return c.jJ
    }};
c.v$ = function() {
    return c.lJ
};
c.St = c.ol.extend({update: function(a) {
        var b = 0, b = 0.5 > a ? 0.5 * (1 - this.Hw(1 - 2 * a)) : 0.5 * this.Hw(2 * a - 1) + 0.5;
        this.p.update(b)
    },j: function() {
        var a = new c.St;
        a.aa(this.p.j());
        return a
    },reverse: function() {
        return c.St.create(this.p.reverse())
    }});
c.St.create = function(a) {
    return new c.St(a)
};
c.kJ = {Ta: function(a) {
        return a = 0.5 > a ? 0.5 * (1 - c.Qu(1 - 2 * a)) : 0.5 * c.Qu(2 * a - 1) + 0.5
    },reverse: function() {
        return c.kJ
    }};
c.u$ = function() {
    return c.kJ
};
c.Ot = c.Pa.extend({update: function(a) {
        this.p.update(0 === a || 1 == a ? a : a * a * (2.70158 * a - 1.70158))
    },reverse: function() {
        return c.Qt.create(this.p.reverse())
    },j: function() {
        var a = new c.Ot;
        a.aa(this.p.j());
        return a
    }});
c.Ot.create = function(a) {
    return new c.Ot(a)
};
c.gJ = {Ta: function(a) {
        return 0 === a || 1 === a ? a : a * a * (2.70158 * a - 1.70158)
    },reverse: function() {
        return c.iJ
    }};
c.q$ = function() {
    return c.gJ
};
c.Qt = c.Pa.extend({update: function(a) {
        a -= 1;
        this.p.update(a * a * (2.70158 * a + 1.70158) + 1)
    },reverse: function() {
        return c.Ot.create(this.p.reverse())
    },j: function() {
        var a = new c.Qt;
        a.aa(this.p.j());
        return a
    }});
c.Qt.create = function(a) {
    return new c.Qt(a)
};
c.iJ = {Ta: function(a) {
        a -= 1;
        return a * a * (2.70158 * a + 1.70158) + 1
    },reverse: function() {
        return c.gJ
    }};
c.s$ = function() {
    return c.iJ
};
c.Pt = c.Pa.extend({update: function(a) {
        a *= 2;
        1 > a ? this.p.update(a * a * (3.5949095 * a - 2.5949095) / 2) : (a -= 2, this.p.update(a * a * (3.5949095 * a + 2.5949095) / 2 + 1))
    },j: function() {
        var a = new c.Pt;
        a.aa(this.p.j());
        return a
    },reverse: function() {
        return c.Pt.create(this.p.reverse())
    }});
c.Pt.create = function(a) {
    return new c.Pt(a)
};
c.hJ = {Ta: function(a) {
        a *= 2;
        if (1 > a)
            return a * a * (3.5949095 * a - 2.5949095) / 2;
        a -= 2;
        return a * a * (3.5949095 * a + 2.5949095) / 2 + 1
    },reverse: function() {
        return c.hJ
    }};
c.r$ = function() {
    return c.hJ
};
c.Pp = c.Pa.extend({Ov: null,Pv: null,Qv: null,Rv: null,ctor: function(a) {
        c.Pa.prototype.ctor.call(this, a)
    },oa: function(a, b, d, e, f) {
        return Math.pow(1 - f, 3) * a + 3 * f * Math.pow(1 - f, 2) * b + 3 * Math.pow(f, 2) * (1 - f) * d + Math.pow(f, 3) * e
    },update: function(a) {
        this.p.update(this.oa(this.Ov, this.Pv, this.Qv, this.Rv, a))
    },j: function() {
        var a = new c.Pp;
        a.aa(this.p.j());
        a.JO(this.Ov, this.Pv, this.Qv, this.Rv);
        return a
    },reverse: function() {
        var a = c.Pp.create(this.p.reverse());
        a.JO(this.Rv, this.Qv, this.Pv, this.Ov);
        return a
    },JO: function(a, b, 
    d, e) {
        this.Ov = a || 0;
        this.Pv = b || 0;
        this.Qv = d || 0;
        this.Rv = e || 0
    }});
c.Pp.create = function(a) {
    return new c.Pp(a)
};
c.SZ = function(a, b, d, e) {
    return {Ta: function(f) {
            return c.Pp.prototype.oa(a, b, d, e, f)
        },reverse: function() {
            return c.SZ(e, d, b, a)
        }}
};
c.Xp = c.Pa.extend({oa: function(a) {
        return Math.pow(a, 2)
    },update: function(a) {
        this.p.update(this.oa(a))
    },j: function() {
        var a = new c.Xp;
        a.aa(this.p.j());
        return a
    },reverse: function() {
        return c.Xp.create(this.p.reverse())
    }});
c.Xp.create = function(a) {
    return new c.Xp(a)
};
c.xJ = {Ta: c.Xp.prototype.oa,reverse: function() {
        return c.xJ
    }};
c.F$ = function() {
    return c.xJ
};
c.Zp = c.Pa.extend({oa: function(a) {
        return -a * (a - 2)
    },update: function(a) {
        this.p.update(this.oa(a))
    },j: function() {
        var a = new c.Zp;
        a.aa();
        return a
    },reverse: function() {
        return c.Zp.create(this.p.reverse())
    }});
c.Zp.create = function(a) {
    return new c.Zp(a)
};
c.zJ = {Ta: c.Zp.prototype.oa,reverse: function() {
        return c.zJ
    }};
c.H$ = function() {
    return c.zJ
};
c.Yp = c.Pa.extend({oa: function(a) {
        var b = a;
        a *= 2;
        1 > a ? b = a * a * 0.5 : (--a, b = -0.5 * (a * (a - 2) - 1));
        return b
    },update: function(a) {
        this.p.update(this.oa(a))
    },j: function() {
        var a = new c.Yp;
        a.aa(this.p.j());
        return a
    },reverse: function() {
        return c.Yp.create(this.p.reverse())
    }});
c.Yp.create = function(a) {
    return new c.Yp(a)
};
c.yJ = {Ta: c.Yp.prototype.oa,reverse: function() {
        return c.yJ
    }};
c.G$ = function() {
    return c.yJ
};
c.$p = c.Pa.extend({oa: function(a) {
        return a * a * a * a
    },update: function(a) {
        this.p.update(this.oa(a))
    },j: function() {
        var a = new c.$p;
        a.aa(this.p.j());
        return a
    },reverse: function() {
        return c.$p.create(this.p.reverse())
    }});
c.$p.create = function(a) {
    return new c.$p(a)
};
c.AJ = {Ta: c.$p.prototype.oa,reverse: function() {
        return c.AJ
    }};
c.I$ = function() {
    return c.AJ
};
c.bq = c.Pa.extend({oa: function(a) {
        a -= 1;
        return -(a * a * a * a - 1)
    },update: function(a) {
        this.p.update(this.oa(a))
    },j: function() {
        var a = new c.bq;
        a.aa(this.p.j());
        return a
    },reverse: function() {
        return c.bq.create(this.p.reverse())
    }});
c.bq.create = function(a) {
    return new c.bq(a)
};
c.CJ = {Ta: c.bq.prototype.oa,reverse: function() {
        return c.CJ
    }};
c.K$ = function() {
    return c.CJ
};
c.aq = c.Pa.extend({oa: function(a) {
        a *= 2;
        if (1 > a)
            return 0.5 * a * a * a * a;
        a -= 2;
        return -0.5 * (a * a * a * a - 2)
    },update: function(a) {
        this.p.update(this.oa(a))
    },j: function() {
        var a = new c.aq;
        a.aa(this.p.j());
        return a
    },reverse: function() {
        return c.aq.create(this.p.reverse())
    }});
c.aq.create = function(a) {
    return new c.aq(a)
};
c.BJ = {Ta: c.aq.prototype.oa,reverse: function() {
        return c.BJ
    }};
c.J$ = function() {
    return c.BJ
};
c.cq = c.Pa.extend({oa: function(a) {
        return a * a * a * a * a
    },update: function(a) {
        this.p.update(this.oa(a))
    },j: function() {
        var a = new c.cq;
        a.aa(this.p.j());
        return a
    },reverse: function() {
        return c.cq.create(this.p.reverse())
    }});
c.cq.create = function(a) {
    return new c.cq(a)
};
c.DJ = {Ta: c.cq.prototype.oa,reverse: function() {
        return c.DJ
    }};
c.L$ = function() {
    return c.DJ
};
c.eq = c.Pa.extend({oa: function(a) {
        a -= 1;
        return a * a * a * a * a + 1
    },update: function(a) {
        this.p.update(this.oa(a))
    },j: function() {
        var a = new c.eq;
        a.aa(this.p.j());
        return a
    },reverse: function() {
        return c.eq.create(this.p.reverse())
    }});
c.eq.create = function(a) {
    return new c.eq(a)
};
c.FJ = {Ta: c.eq.prototype.oa,reverse: function() {
        return c.FJ
    }};
c.N$ = function() {
    return c.FJ
};
c.dq = c.Pa.extend({oa: function(a) {
        a *= 2;
        if (1 > a)
            return 0.5 * a * a * a * a * a;
        a -= 2;
        return 0.5 * (a * a * a * a * a + 2)
    },update: function(a) {
        this.p.update(this.oa(a))
    },j: function() {
        var a = new c.dq;
        a.aa(this.p.j());
        return a
    },reverse: function() {
        return c.dq.create(this.p.reverse())
    }});
c.dq.create = function(a) {
    return new c.dq(a)
};
c.EJ = {Ta: c.dq.prototype.oa,reverse: function() {
        return c.EJ
    }};
c.M$ = function() {
    return c.EJ
};
c.Qp = c.Pa.extend({oa: function(a) {
        return -1 * (Math.sqrt(1 - a * a) - 1)
    },update: function(a) {
        this.p.update(this.oa(a))
    },j: function() {
        var a = new c.Qp;
        a.aa(this.p.j());
        return a
    },reverse: function() {
        return c.Qp.create(this.p.reverse())
    }});
c.Qp.create = function(a) {
    return new c.Qp(a)
};
c.mJ = {Ta: c.Qp.prototype.oa,reverse: function() {
        return c.mJ
    }};
c.w$ = function() {
    return c.mJ
};
c.Sp = c.Pa.extend({oa: function(a) {
        a -= 1;
        return Math.sqrt(1 - a * a)
    },update: function(a) {
        this.p.update(this.oa(a))
    },j: function() {
        var a = new c.Sp;
        a.aa(this.p.j());
        return a
    },reverse: function() {
        return c.Sp.create(this.p.reverse())
    }});
c.Sp.create = function(a) {
    return new c.Sp(a)
};
c.oJ = {Ta: c.Sp.prototype.oa,reverse: function() {
        return c.oJ
    }};
c.y$ = function() {
    return c.oJ
};
c.Rp = c.Pa.extend({oa: function(a) {
        a *= 2;
        if (1 > a)
            return -0.5 * (Math.sqrt(1 - a * a) - 1);
        a -= 2;
        return 0.5 * (Math.sqrt(1 - a * a) + 1)
    },update: function(a) {
        this.p.update(this.oa(a))
    },j: function() {
        var a = new c.Rp;
        a.aa(this.p.j());
        return a
    },reverse: function() {
        return c.Rp.create(this.p.reverse())
    }});
c.Rp.create = function(a) {
    return new c.Rp(a)
};
c.nJ = {Ta: c.Rp.prototype.oa,reverse: function() {
        return c.nJ
    }};
c.x$ = function() {
    return c.nJ
};
c.Tp = c.Pa.extend({oa: function(a) {
        return a * a * a
    },update: function(a) {
        this.p.update(this.oa(a))
    },j: function() {
        var a = new c.Tp;
        a.aa(this.p.j());
        return a
    },reverse: function() {
        return c.Tp.create(this.p.reverse())
    }});
c.Tp.create = function(a) {
    return new c.Tp(a)
};
c.pJ = {Ta: c.Tp.prototype.oa,reverse: function() {
        return c.pJ
    }};
c.z$ = function() {
    return c.pJ
};
c.Vp = c.Pa.extend({oa: function(a) {
        a -= 1;
        return a * a * a + 1
    },update: function(a) {
        this.p.update(this.oa(a))
    },j: function() {
        var a = new c.Vp;
        a.aa(this.p.j());
        return a
    },reverse: function() {
        return c.Vp.create(this.p.reverse())
    }});
c.Vp.create = function(a) {
    return new c.Vp(a)
};
c.rJ = {Ta: c.Vp.prototype.oa,reverse: function() {
        return c.rJ
    }};
c.B$ = function() {
    return c.rJ
};
c.Up = c.Pa.extend({oa: function(a) {
        a *= 2;
        if (1 > a)
            return 0.5 * a * a * a;
        a -= 2;
        return 0.5 * (a * a * a + 2)
    },update: function(a) {
        this.p.update(this.oa(a))
    },j: function() {
        var a = new c.Up;
        a.aa(this.p.j());
        return a
    },reverse: function() {
        return c.Up.create(this.p.reverse())
    }});
c.Up.create = function(a) {
    return new c.Up(a)
};
c.qJ = {Ta: c.Up.prototype.oa,reverse: function() {
        return c.qJ
    }};
c.A$ = function() {
    return c.qJ
};
c.aE = function(a, b, d, e, f, g) {
    var h = g * g, k = h * g, m = (1 - f) / 2;
    f = m * (-k + 2 * h - g);
    var p = m * (-k + h) + (2 * k - 3 * h + 1);
    g = m * (k - 2 * h + g) + (-2 * k + 3 * h);
    h = m * (k - h);
    return N(a.x * f + b.x * p + d.x * g + e.x * h, a.y * f + b.y * p + d.y * g + e.y * h)
};
c.BO = function(a) {
    for (var b = [], d = a.length - 1; 0 <= d; d--)
        b.push(N(a[d].x, a[d].y));
    return b
};
c.Mw = function(a) {
    for (var b = [], d = 0; d < a.length; d++)
        b.push(N(a[d].x, a[d].y));
    return b
};
c.cd = function(a, b) {
    var d = Math.min(a.length - 1, Math.max(b, 0));
    return a[d]
};
c.Cha = function(a) {
    for (var b = a.length, d = 0 | b / 2, e = 0; e < d; ++e) {
        var f = a[e];
        a[e] = a[b - e - 1];
        a[b - e - 1] = f
    }
};
c.Vg = c.u.extend({jh: null,bJ: 0,po: 0,Pc: null,HI: null,ctor: function(a, b, d) {
        c.u.prototype.ctor.call(this);
        this.jh = [];
        void 0 !== d && this.d(a, b, d)
    },d: function(a, b, d) {
        if (!b || 0 == b.length)
            throw "Invalid configuration. It must at least have one control point";
        return c.u.prototype.d.call(this, a) ? (this.B3(b), this.po = d, !0) : !1
    },j: function() {
        var a = new c.Vg;
        a.d(this.n, c.Mw(this.jh), this.po);
        return a
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        this.bJ = 1 / (this.jh.length - 1);
        this.Pc = N(this.target.Pe(), this.target.Gg());
        this.HI = N(0, 0)
    },update: function(a) {
        a = this.gd(a);
        var b, d = this.jh;
        if (1 == a)
            b = d.length - 1, a = 1;
        else {
            var e = this.bJ;
            b = 0 | a / e;
            a = (a - e * b) / e
        }
        b = c.aE(c.cd(d, b - 1), c.cd(d, b - 0), c.cd(d, b + 1), c.cd(d, b + 2), this.po, a);
        c.Kt && (d = this.target.Pe() - this.Pc.x, a = this.target.Gg() - this.Pc.y, 0 != d || 0 != a) && (e = this.HI, d = e.x + d, a = e.y + a, e.x = d, e.y = a, b.x += d, b.y += a);
        this.zy(b)
    },reverse: function() {
        var a = c.BO(this.jh);
        return c.Vg.create(this.n, a, this.po)
    },zy: function(a) {
        this.target.U(a);
        this.Pc = a
    },bca: function() {
        return this.jh
    },B3: function(a) {
        this.jh = 
        a
    }});
c.Vg.create = function(a, b, d) {
    return new c.Vg(a, b, d)
};
c.nl = c.Vg.extend({Dc: null,ctor: function(a, b, d) {
        c.Vg.prototype.ctor.call(this);
        this.Dc = N(0, 0);
        void 0 !== d && this.d(a, b, d)
    },v: function(a) {
        c.Vg.prototype.v.call(this, a);
        this.Dc.x = a.Pe();
        this.Dc.y = a.Gg()
    },reverse: function() {
        for (var a = this.jh.slice(), b, d = a[0], e = 1; e < a.length; ++e)
            b = a[e], a[e] = c.Gd(b, d), d = b;
        a = c.BO(a);
        d = a[a.length - 1];
        a.pop();
        d.x = -d.x;
        d.y = -d.y;
        a.unshift(d);
        for (e = 1; e < a.length; ++e)
            b = a[e], b.x = -b.x, b.y = -b.y, b.x += d.x, b.y += d.y, d = a[e] = b;
        return c.nl.create(this.n, a, this.po)
    },zy: function(a) {
        var b = this.Dc, 
        d = a.x + b.x;
        a = a.y + b.y;
        this.Pc.x = d;
        this.Pc.y = a;
        this.target.U(d, a)
    },j: function() {
        var a = new c.nl;
        a.d(this.n, c.Mw(this.jh), this.po);
        return a
    }});
c.nl.create = function(a, b, d) {
    return new c.nl(a, b, d)
};
c.It = c.Vg.extend({ctor: function(a, b) {
        b && this.d(a, b)
    },d: function(a, b) {
        return c.Vg.prototype.d.call(this, a, b, 0.5)
    },j: function() {
        var a = new c.It;
        a.d(this.n, c.Mw(this.jh));
        return a
    }});
c.It.create = function(a, b) {
    return new c.It(a, b)
};
c.Ht = c.nl.extend({ctor: function(a, b) {
        c.nl.prototype.ctor.call(this);
        b && this.d(a, b)
    },d: function(a, b) {
        return c.Vg.prototype.d.call(this, a, b, 0.5)
    },j: function() {
        var a = new c.Ht;
        a.d(this.n, c.Mw(this.jh));
        return a
    }});
c.Ht.create = function(a, b) {
    return new c.Ht(a, b)
};
c.j5 = c.la.extend({I4: function() {
    }});
c.Ip = c.u.extend({key: "",Rw: 0,vy: 0,Bs: 0,ctor: function(a, b, d, e) {
        c.u.prototype.ctor.call(this);
        this.key = "";
        void 0 !== e && this.d(a, b, d, e)
    },d: function(a, b, d, e) {
        return c.u.prototype.d.call(this, a) ? (this.key = b, this.vy = e, this.Rw = d, !0) : !1
    },v: function(a) {
        if (!a || !a.I4)
            throw "cc.ActionTween.startWithTarget(): target must be non-null, and target must implement updateTweenAction function";
        c.u.prototype.v.call(this, a);
        this.Bs = this.vy - this.Rw
    },update: function() {
    },reverse: function() {
        return c.Ip.create(this.duration, this.key, 
        this.vy, this.Rw)
    },j: function() {
        var a = new c.Ip;
        a.d(this.n, this.key, this.Rw, this.vy);
        return a
    }});
c.Ip.create = function(a, b, d, e) {
    var f = new c.Ip;
    return f.d(a, b, d, e) ? f : null
};
c.action = c.ed.create;
c.speed = c.zq.create;
c.naa = c.fu.create;
c.nga = c.$d.create;
c.F9 = c.Vg.create;
c.E9 = c.nl.create;
c.H9 = c.It.create;
c.G9 = c.Ht.create;
c.show = c.zf.create;
c.jda = c.Xg.create;
c.wka = c.Iq.create;
c.sha = c.sq.create;
c.laa = c.gq.create;
c.maa = c.hq.create;
c.Kga = c.lu.create;
c.A9 = c.Nb.create;
c.W8 = c.u.create;
c.Qha = c.Ca.create;
c.repeat = c.tq.create;
c.L2 = c.hn.create;
c.$ja = c.ve.create;
c.Hha = c.nu.create;
c.Gha = c.jn.create;
c.moveBy = c.yf.create;
c.moveTo = c.lq.create;
c.Yja = c.Vj.create;
c.Xja = c.yq.create;
c.Pda = c.Qh.create;
c.Qda = c.gu.create;
c.v9 = c.Pj.create;
c.w9 = c.Ft.create;
c.Lha = c.Uc.create;
c.Kha = c.kn.create;
c.blink = c.Kp.create;
c.iaa = c.Sj.create;
c.gaa = c.Zm.create;
c.haa = c.$m.create;
c.uka = c.zu.create;
c.tka = c.Hq.create;
c.X9 = c.Kc.create;
c.Dha = c.ul.create;
c.p9 = c.Vm.create;
c.mka = c.xu.create;
c.X8 = c.Ip.create;
c.hc = c.u.extend({Y: null,ctor: function(a, b) {
        c.PA();
        c.u.prototype.ctor.call(this);
        this.Y = P(0, 0);
        b && this.d(a, b)
    },j: function() {
        var a = new c.hc, b = this.Y;
        a.d(this.n, P(b.width, b.height));
        return a
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        var b = this.Gs(), d = this.target;
        (a = d.grid) && 0 < a.ni ? (b = a.J_(), a.uf() && b.width == this.Y.width && b.height == this.Y.height && a.HF()) : (a && a.uf() && a.setActive(!1), d.grid = b, d.grid.setActive(!0))
    },reverse: function() {
        return c.ul.create(this)
    },d: function(a, b) {
        return c.u.prototype.d.call(this, 
        a) ? (this.Y.width = b.width, this.Y.height = b.height, !0) : !1
    },Gs: function() {
        c.log("cc.GridAction.getGrid(): it should be overridden in subclass.")
    }});
c.hc.create = function(a, b) {
    return new c.hc(a, b)
};
c.Tc = c.hc.extend({Gs: function() {
        return c.Xy.create(this.Y)
    },KP: function(a) {
        return this.target.grid.KP(a)
    },Ic: function(a) {
        return this.target.grid.Ic(a)
    },Id: function(a, b) {
        this.target.grid.Id(a, b)
    }});
c.Tc.create = function(a, b) {
    return new c.Tc(a, b)
};
c.rc = c.hc.extend({wP: function(a) {
        return this.target.grid.wP(a)
    },$f: function(a) {
        return this.target.grid.$f(a)
    },Xe: function(a, b) {
        this.target.grid.Xe(a, b)
    },Gs: function() {
        return c.Zz.create(this.Y)
    }});
c.rc.create = function(a, b) {
    return new c.rc(a, b)
};
c.wl = c.ue.extend({v: function(a) {
        c.ue.prototype.v.call(this, a);
        (a = this.target.grid) && a.uf() && a.setActive(!1)
    }});
c.wl.create = function() {
    return new c.wl
};
c.xH = c.ue.extend({dc: null,ctor: function(a) {
        c.ue.prototype.ctor.call(this);
        void 0 !== a && this.T0(a)
    },T0: function(a) {
        this.dc = a;
        return !0
    },v: function(a) {
        c.ue.prototype.v.call(this, a);
        this.target.grid && this.target.grid.uf() && this.target.grid.F3(this.target.grid.ni + this.dc)
    }});
c.xH.create = function(a) {
    return new c.xH(a)
};
c.yI = c.Tc.extend({qf: 0,Za: 0,$a: 0,ctor: function(a, b, d, e) {
        c.hc.prototype.ctor.call(this);
        void 0 !== e && this.d(a, b, d, e)
    },Qo: function() {
        return this.Za
    },qp: function(a) {
        this.Za = a
    },xm: function() {
        return this.$a
    },Mm: function(a) {
        this.$a = a
    },d: function(a, b, d, e) {
        return c.Tc.prototype.d.call(this, a, b) ? (this.qf = d, this.Za = e, this.$a = 1, !0) : !1
    },update: function(a) {
        for (var b = this.Y, d = this.Za, e = N(0, 0), f = this.$a, g = this.qf, h = 0; h < b.width + 1; ++h)
            for (var k = 0; k < b.height + 1; ++k) {
                e.x = h;
                e.y = k;
                var m = this.Ic(e);
                m.z += Math.sin(Math.PI * 
                a * g * 2 + 0.01 * (m.y + m.x)) * d * f;
                this.Id(e, m)
            }
    }});
c.yI.create = function(a, b, d, e) {
    return new c.yI(a, b, d, e)
};
c.Wy = c.Tc.extend({ctor: function(a) {
        void 0 !== a ? c.hc.prototype.ctor.call(this, a, P(1, 1)) : c.hc.prototype.ctor.call(this)
    },d: function(a) {
        return c.Tc.prototype.d.call(this, a, P(1, 1))
    },nx: function(a, b) {
        return 1 != a.width || 1 != a.height ? (c.log("Grid size must be (1,1)"), !1) : c.Tc.prototype.d.call(this, b, a)
    },update: function(a) {
        var b = Math.PI * a;
        a = Math.sin(b);
        var d = Math.cos(b / 2), b = new c.sc, e = N(0, 0);
        e.x = e.y = 1;
        var f = this.Ic(e);
        e.x = e.y = 0;
        var e = this.Ic(e), g = f.x, h = e.x, k, m;
        g > h ? (f = N(0, 0), e = N(0, 1), k = N(1, 0), m = N(1, 1)) : (k = N(0, 
        0), m = N(0, 1), f = N(1, 0), e = N(1, 1), g = h);
        b.x = g - g * d;
        b.z = Math.abs(parseFloat(g * a / 4));
        a = this.Ic(f);
        a.x = b.x;
        a.z += b.z;
        this.Id(f, a);
        a = this.Ic(e);
        a.x = b.x;
        a.z += b.z;
        this.Id(e, a);
        a = this.Ic(k);
        a.x -= b.x;
        a.z -= b.z;
        this.Id(k, a);
        a = this.Ic(m);
        a.x -= b.x;
        a.z -= b.z;
        this.Id(m, a)
    }});
c.Wy.create = function(a) {
    return new c.Wy(a)
};
c.OG = c.Wy.extend({ctor: function(a) {
        void 0 !== a ? c.hc.prototype.ctor.call(this, a, P(1, 1)) : c.hc.prototype.ctor.call(this)
    },update: function(a) {
        var b = Math.PI * a;
        a = Math.sin(b);
        var d = Math.cos(b / 2), b = new c.sc, e = N(0, 0);
        e.x = e.y = 1;
        var f = this.Ic(e);
        e.x = e.y = 0;
        var e = this.Ic(e), g = f.y, h = e.y, k, m;
        g > h ? (f = N(0, 0), e = N(0, 1), k = N(1, 0), m = N(1, 1)) : (e = N(0, 0), f = N(0, 1), m = N(1, 0), k = N(1, 1), g = h);
        b.y = g - g * d;
        b.z = Math.abs(parseFloat(g * a) / 4);
        a = this.Ic(f);
        a.y = b.y;
        a.z += b.z;
        this.Id(f, a);
        a = this.Ic(e);
        a.y -= b.y;
        a.z -= b.z;
        this.Id(e, a);
        a = this.Ic(k);
        a.y = b.y;
        a.z += b.z;
        this.Id(k, a);
        a = this.Ic(m);
        a.y -= b.y;
        a.z -= b.z;
        this.Id(m, a)
    }});
c.OG.create = function(a) {
    return new c.OG(a)
};
c.UG = c.Tc.extend({xa: null,Ee: 0,Fv: 0,ZU: !1,ib: !1,ctor: function(a, b, d, e) {
        c.hc.prototype.ctor.call(this);
        this.xa = N(0, 0);
        void 0 !== e && this.d(a, b, d, e)
    },Aba: function() {
        return this.Fv
    },Hia: function(a) {
        this.Fv = a
    },gia: function(a) {
        this.ZU = a
    },Vw: function() {
        return this.xa
    },U: function(a) {
        c.zF(a, this.xa) || (this.xa.x = a.x, this.xa.y = a.y, this.ib = !0)
    },d: function(a, b, d, e) {
        return c.Tc.prototype.d.call(this, a, b) ? (this.U(d), this.Ee = e, this.Fv = 0.7, this.ib = !0) : !1
    },update: function() {
        if (this.ib) {
            for (var a = this.Y.width, b = this.Y.height, 
            d = this.Ee, e = this.Fv, f = N(0, 0), g = N(0, 0), h, k, m, p = 0; p < a + 1; ++p)
                for (var r = 0; r < b + 1; ++r)
                    f.x = p, f.y = r, h = this.Ic(f), g.x = this.xa.x - h.x, g.y = this.xa.y - h.y, k = c.cl(g), k < d && (k = d - k, k /= d, 0 == k && (k = 0.001), k = Math.log(k) * e, m = Math.exp(k) * d, k = c.cl(g), 0 < k && (g.x /= k, g.y /= k, g.x *= m, g.y *= m, h.z += c.cl(g) * e)), this.Id(f, h);
            this.ib = !1
        }
    }});
c.UG.create = function(a, b, d, e) {
    return new c.UG(a, b, d, e)
};
c.yH = c.Tc.extend({xa: null,Ee: 0,qf: 0,Za: 0,$a: 0,ctor: function(a, b, d, e, f, g) {
        c.hc.prototype.ctor.call(this);
        this.xa = N(0, 0);
        void 0 !== g && this.d(a, b, d, e, f, g)
    },Vw: function() {
        return this.xa
    },U: function(a) {
        this.xa.x = a.x;
        this.xa.y = a.y
    },Qo: function() {
        return this.Za
    },qp: function(a) {
        this.Za = a
    },xm: function() {
        return this.$a
    },Mm: function(a) {
        this.$a = a
    },d: function(a, b, d, e, f, g) {
        return c.Tc.prototype.d.call(this, a, b) ? (this.U(d), this.Ee = e, this.qf = f, this.Za = g, this.$a = 1, !0) : !1
    },update: function(a) {
        for (var b = this.Y.width, 
        d = this.Y.height, e = N(0, 0), f = this.Ee, g = this.qf, h = this.Za, k = this.$a, m, p, r = N(0, 0), s = 0; s < b + 1; ++s)
            for (var u = 0; u < d + 1; ++u)
                e.x = s, e.y = u, m = this.Ic(e), r.x = this.xa.x - m.x, r.y = this.xa.y - m.y, p = c.cl(r), p < f && (p = f - p, m.z += Math.sin(a * Math.PI * g * 2 + 0.1 * p) * h * k * Math.pow(p / f, 2)), this.Id(e, m)
    }});
c.yH.create = function(a, b, d, e, f, g) {
    return new c.yH(a, b, d, e, f, g)
};
c.CH = c.Tc.extend({Fk: 0,Vr: !1,ctor: function(a, b, d, e) {
        c.hc.prototype.ctor.call(this);
        void 0 !== e && this.d(a, b, d, e)
    },d: function(a, b, d, e) {
        return c.Tc.prototype.d.call(this, a, b) ? (this.Fk = d, this.Vr = e, !0) : !1
    },update: function() {
        for (var a = this.Y.width, b = this.Y.height, d = this.Fk, e = this.Vr, f = N(0, 0), g, h = 0; h < a + 1; ++h)
            for (var k = 0; k < b + 1; ++k)
                f.x = h, f.y = k, g = this.Ic(f), g.x += c.zb() % (2 * d) - d, g.y += c.zb() % (2 * d) - d, e && (g.z += c.zb() % (2 * d) - d), this.Id(f, g)
    }});
c.CH.create = function(a, b, d, e) {
    return new c.CH(a, b, d, e)
};
c.VG = c.Tc.extend({qf: 0,Za: 0,$a: 0,ctor: function(a, b, d, e) {
        c.hc.prototype.ctor.call(this);
        void 0 !== e && this.d(a, b, d, e)
    },Qo: function() {
        return this.Za
    },qp: function(a) {
        this.Za = a
    },xm: function() {
        return this.$a
    },Mm: function(a) {
        this.$a = a
    },d: function(a, b, d, e) {
        return c.Tc.prototype.d.call(this, a, b) ? (this.qf = d, this.Za = e, this.$a = 1, !0) : !1
    },update: function(a) {
        for (var b = this.Y.width, d = this.Y.height, e = N(0, 0), f = this.qf, g = this.Za, h = this.$a, k, m = 1; m < b; ++m)
            for (var p = 1; p < d; ++p)
                e.x = m, e.y = p, k = this.Ic(e), k.x += Math.sin(a * Math.PI * 
                f * 2 + 0.01 * k.x) * g * h, k.y += Math.sin(a * Math.PI * f * 2 + 0.01 * k.y) * g * h, this.Id(e, k)
    }});
c.VG.create = function(a, b, d, e) {
    return new c.VG(a, b, d, e)
};
c.xI = c.Tc.extend({qf: 0,Za: 0,$a: 0,NL: !1,dK: !1,ctor: function(a, b, d, e, f, g) {
        c.hc.prototype.ctor.call(this);
        void 0 !== g && this.d(a, b, d, e, f, g)
    },Qo: function() {
        return this.Za
    },qp: function(a) {
        this.Za = a
    },xm: function() {
        return this.$a
    },Mm: function(a) {
        this.$a = a
    },d: function(a, b, d, e, f, g) {
        return c.Tc.prototype.d.call(this, a, b) ? (this.qf = d, this.Za = e, this.$a = 1, this.dK = f, this.NL = g, !0) : !1
    },update: function(a) {
        for (var b = this.Y.width, d = this.Y.height, e = N(0, 0), f = this.NL, g = this.dK, h = this.qf, k = this.Za, m = this.$a, p, r = 0; r < b + 1; ++r)
            for (var s = 
            0; s < d + 1; ++s)
                e.x = r, e.y = s, p = this.Ic(e), f && (p.x += Math.sin(a * Math.PI * h * 2 + 0.01 * p.y) * k * m), g && (p.y += Math.sin(a * Math.PI * h * 2 + 0.01 * p.x) * k * m), this.Id(e, p)
    }});
c.xI.create = function(a, b, d, e, f, g) {
    return new c.xI(a, b, d, e, f, g)
};
c.sI = c.Tc.extend({xa: null,BL: 0,Za: 0,$a: 0,ctor: function(a, b, d, e, f) {
        c.hc.prototype.ctor.call(this);
        this.xa = N(0, 0);
        void 0 !== f && this.d(a, b, d, e, f)
    },Vw: function() {
        return this.xa
    },U: function(a) {
        this.xa.x = a.x;
        this.xa.y = a.y
    },Qo: function() {
        return this.Za
    },qp: function(a) {
        this.Za = a
    },xm: function() {
        return this.$a
    },Mm: function(a) {
        this.$a = a
    },d: function(a, b, d, e, f) {
        return c.Tc.prototype.d.call(this, a, b) ? (this.U(d), this.BL = e, this.Za = f, this.$a = 1, !0) : !1
    },update: function(a) {
        for (var b = this.xa, d = this.Y.width, e = this.Y.height, 
        f = N(0, 0), g = 0.1 * this.Za * this.$a, h = this.BL, k, m, p, r = N(0, 0), s = 0; s < d + 1; ++s)
            for (var u = 0; u < e + 1; ++u)
                f.x = s, f.y = u, k = this.Ic(f), r.x = s - d / 2, r.y = u - e / 2, m = c.cl(r) * Math.cos(Math.PI / 2 + a * Math.PI * h * 2) * g, p = Math.sin(m) * (k.y - b.y) + Math.cos(m) * (k.x - b.x), m = Math.cos(m) * (k.y - b.y) - Math.sin(m) * (k.x - b.x), k.x = b.x + p, k.y = b.y + m, this.Id(f, k)
    }});
c.sI.create = function(a, b, d, e, f) {
    return new c.sI(a, b, d, e, f)
};
c.DH = c.rc.extend({Fk: 0,Vr: !1,ctor: function(a, b, d, e) {
        c.hc.prototype.ctor.call(this);
        void 0 !== e && this.d(a, b, d, e)
    },d: function(a, b, d, e) {
        return c.rc.prototype.d.call(this, a, b) ? (this.Fk = d, this.Vr = e, !0) : !1
    },update: function() {
        for (var a = this.Y, b = this.Fk, d = N(0, 0), e = 0; e < a.width; ++e)
            for (var f = 0; f < a.height; ++f) {
                d.x = e;
                d.y = f;
                var g = this.$f(d);
                g.F.x += c.zb() % (2 * b) - b;
                g.O.x += c.zb() % (2 * b) - b;
                g.N.x += c.zb() % (2 * b) - b;
                g.I.x += c.zb() % (2 * b) - b;
                g.F.y += c.zb() % (2 * b) - b;
                g.O.y += c.zb() % (2 * b) - b;
                g.N.y += c.zb() % (2 * b) - b;
                g.I.y += c.zb() % (2 * b) - 
                b;
                this.Vr && (g.F.z += c.zb() % (2 * b) - b, g.O.z += c.zb() % (2 * b) - b, g.N.z += c.zb() % (2 * b) - b, g.I.z += c.zb() % (2 * b) - b);
                this.Xe(d, g)
            }
    }});
c.DH.create = function(a, b, d, e) {
    return new c.DH(a, b, d, e)
};
c.EH = c.rc.extend({Fk: 0,YB: !1,rL: !1,ctor: function(a, b, d, e) {
        c.hc.prototype.ctor.call(this);
        void 0 !== e && this.d(a, b, d, e)
    },d: function(a, b, d, e) {
        return c.rc.prototype.d.call(this, a, b) ? (this.YB = !1, this.Fk = d, this.rL = e, !0) : !1
    },update: function() {
        if (!1 === this.YB) {
            for (var a = this.Y, b = this.Fk, d, e = N(0, 0), f = 0; f < a.width; ++f)
                for (var g = 0; g < a.height; ++g)
                    e.x = f, e.y = g, d = this.$f(e), d.F.x += c.zb() % (2 * b) - b, d.O.x += c.zb() % (2 * b) - b, d.N.x += c.zb() % (2 * b) - b, d.I.x += c.zb() % (2 * b) - b, d.F.y += c.zb() % (2 * b) - b, d.O.y += c.zb() % (2 * b) - b, d.N.y += c.zb() % 
                    (2 * b) - b, d.I.y += c.zb() % (2 * b) - b, this.rL && (d.F.z += c.zb() % (2 * b) - b, d.O.z += c.zb() % (2 * b) - b, d.N.z += c.zb() % (2 * b) - b, d.I.z += c.zb() % (2 * b) - b), this.Xe(e, d);
            this.YB = !0
        }
    }});
c.EH.create = function(a, b, d, e) {
    return new c.EH(a, b, d, e)
};
function fa() {
    this.position = N(0, 0);
    this.k4 = N(0, 0);
    this.Bs = N(0, 0)
}
c.FH = c.rc.extend({GC: 0,rj: 0,qi: null,He: null,ctor: function(a, b, d) {
        c.hc.prototype.ctor.call(this);
        this.qi = [];
        this.He = [];
        void 0 !== d && this.d(a, b, d)
    },d: function(a, b, d) {
        return c.rc.prototype.d.call(this, a, b) ? (this.GC = d, this.qi.length = 0, this.He.length = 0, !0) : !1
    },gG: function(a, b) {
        for (var d = b - 1; 0 <= d; d--) {
            var e = 0 | c.zb() % (d + 1), f = a[d];
            a[d] = a[e];
            a[e] = f
        }
    },AE: function(a) {
        var b = this.Y, d = a.width * b.height + a.height;
        return P(this.qi[d] / b.height - a.width, this.qi[d] % b.height - a.height)
    },k2: function(a, b) {
        var d = this.$f(a), 
        e = this.target.grid.JE(), f = b.position;
        d.F.x += f.x * e.x;
        d.F.y += f.y * e.y;
        d.O.x += f.x * e.x;
        d.O.y += f.y * e.y;
        d.N.x += f.x * e.x;
        d.N.y += f.y * e.y;
        d.I.x += f.x * e.x;
        d.I.y += f.y * e.y;
        this.Xe(a, d)
    },v: function(a) {
        c.rc.prototype.v.call(this, a);
        a = this.Y;
        this.rj = a.width * a.height;
        for (var b = this.qi, d = b.length = 0; d < this.rj; ++d)
            b[d] = d;
        this.gG(b, this.rj);
        for (var b = this.He, d = b.length = 0, e = P(0, 0), f = 0; f < a.width; ++f)
            for (var g = 0; g < a.height; ++g)
                b[d] = new fa, b[d].position = N(f, g), b[d].k4 = N(f, g), e.width = f, e.height = g, b[d].Bs = this.AE(e), ++d
    },update: function(a) {
        for (var b = 
        0, d = this.Y, e = this.He, f, g = N(0, 0), h = 0; h < d.width; ++h)
            for (var k = 0; k < d.height; ++k)
                g.x = h, g.y = k, f = e[b], f.position.x = f.Bs.width * a, f.position.y = f.Bs.height * a, this.k2(g, f), ++b
    }});
c.FH.create = function(a, b, d) {
    return new c.FH(a, b, d)
};
c.fq = c.rc.extend({uy: function(a, b) {
        var d = this.Y.width * b, e = this.Y.height * b;
        return 0 == d + e ? 1 : Math.pow((a.width + a.height) / (d + e), 6)
    },oG: function(a) {
        this.Xe(a, this.$f(a))
    },nG: function(a) {
        this.Xe(a, new c.mu)
    },zP: function(a, b) {
        var d = this.$f(a), e = this.target.grid.JE();
        d.F.x += e.x / 2 * (1 - b);
        d.F.y += e.y / 2 * (1 - b);
        d.O.x -= e.x / 2 * (1 - b);
        d.O.y += e.y / 2 * (1 - b);
        d.N.x += e.x / 2 * (1 - b);
        d.N.y -= e.y / 2 * (1 - b);
        d.I.x -= e.x / 2 * (1 - b);
        d.I.y -= e.y / 2 * (1 - b);
        this.Xe(a, d)
    },update: function(a) {
        for (var b = this.Y, d = N(0, 0), e = P(0, 0), f, g = 0; g < b.width; ++g)
            for (var h = 
            0; h < b.height; ++h)
                d.x = g, d.y = h, e.width = g, e.height = h, f = this.uy(e, a), 0 == f ? this.nG(d) : 1 > f ? this.zP(d, f) : this.oG(d)
    }});
c.fq.create = function(a, b) {
    return new c.fq(a, b)
};
c.Uy = c.fq.extend({uy: function(a, b) {
        return 0 == a.width + a.height ? 1 : Math.pow((this.Y.width * (1 - b) + this.Y.height * (1 - b)) / (a.width + a.height), 6)
    }});
c.Uy.create = function(a, b) {
    return new c.Uy(a, b)
};
c.eu = c.fq.extend({uy: function(a, b) {
        var d = this.Y.height * b;
        return 0 == d ? 1 : Math.pow(a.height / d, 6)
    },zP: function(a, b) {
        var d = this.$f(a), e = this.target.grid.JE();
        d.F.y += e.y / 2 * (1 - b);
        d.O.y += e.y / 2 * (1 - b);
        d.N.y -= e.y / 2 * (1 - b);
        d.I.y -= e.y / 2 * (1 - b);
        this.Xe(a, d)
    }});
c.eu.create = function(a, b) {
    return new c.eu(a, b)
};
c.Vy = c.eu.extend({uy: function(a, b) {
        return 0 == a.height ? 1 : Math.pow(this.Y.height * (1 - b) / a.height, 6)
    }});
c.Vy.create = function(a, b) {
    return new c.Vy(a, b)
};
c.bA = c.rc.extend({GC: null,rj: 0,qi: null,ctor: function(a, b, d) {
        c.hc.prototype.ctor.call(this);
        this.qi = [];
        void 0 !== b && this.d(a, b, d)
    },d: function(a, b, d) {
        return c.rc.prototype.d.call(this, a, b) ? (this.GC = d || 0, this.qi.length = 0, !0) : !1
    },gG: function(a, b) {
        for (var d = b - 1; 0 <= d; d--) {
            var e = 0 | c.zb() % (d + 1), f = a[d];
            a[d] = a[e];
            a[e] = f
        }
    },oG: function(a) {
        this.Xe(a, this.$f(a))
    },nG: function(a) {
        this.Xe(a, new c.mu)
    },v: function(a) {
        c.rc.prototype.v.call(this, a);
        this.rj = this.Y.width * this.Y.height;
        a = this.qi;
        for (var b = a.length = 0; b < this.rj; ++b)
            a[b] = 
            b;
        this.gG(a, this.rj)
    },update: function(a) {
        a = 0 | a * this.rj;
        for (var b = this.Y, d, e = N(0, 0), f = this.qi, g = 0; g < this.rj; g++)
            d = f[g], e.x = 0 | d / b.height, e.y = d % (0 | b.height), g < a ? this.nG(e) : this.oG(e)
    }});
c.bA.create = function(a, b, d) {
    return new c.bA(a, b, d)
};
c.zI = c.rc.extend({qf: 0,Za: 0,$a: 0,ctor: function(a, b, d, e) {
        c.hc.prototype.ctor.call(this);
        void 0 !== e && this.d(a, b, d, e)
    },Qo: function() {
        return this.Za
    },qp: function(a) {
        this.Za = a
    },xm: function() {
        return this.$a
    },Mm: function(a) {
        this.$a = a
    },d: function(a, b, d, e) {
        return c.rc.prototype.d.call(this, a, b) ? (this.qf = d, this.Za = e, this.$a = 1, !0) : !1
    },update: function(a) {
        for (var b = this.Y, d = this.qf, e = this.Za, f = this.$a, g = N(0, 0), h, k = 0; k < b.width; k++)
            for (var m = 0; m < b.height; m++)
                g.x = k, g.y = m, h = this.$f(g), h.F.z = Math.sin(a * Math.PI * d * 2 + 
                0.01 * (h.F.y + h.F.x)) * e * f, h.O.z = h.F.z, h.N.z = h.F.z, h.I.z = h.F.z, this.Xe(g, h)
    }});
c.zI.create = function(a, b, d, e) {
    return new c.zI(a, b, d, e)
};
c.SG = c.rc.extend({aj: 0,Za: 0,$a: 0,ctor: function(a, b, d, e) {
        c.hc.prototype.ctor.call(this);
        void 0 !== e && this.d(a, b, d, e)
    },Qo: function() {
        return this.Za
    },qp: function(a) {
        this.Za = a
    },xm: function() {
        return this.$a
    },Mm: function(a) {
        this.$a = a
    },d: function(a, b, d, e) {
        return c.rc.prototype.d.call(this, a, b) ? (this.aj = d, this.Za = e, this.$a = 1, !0) : !1
    },update: function(a) {
        var b = Math.sin(Math.PI * a * this.aj * 2) * this.Za * this.$a;
        a = Math.sin(Math.PI * (a * this.aj * 2 + 1)) * this.Za * this.$a;
        for (var d = this.Y, e = this.target.grid, f, g = N(0, 0), h = 0; h < 
        d.width; h++)
            for (var k = 0; k < d.height; k++)
                g.x = h, g.y = k, f = e.$f(g), 0 == (h + k) % 2 ? (f.F.z += b, f.O.z += b, f.N.z += b, f.I.z += b) : (f.F.z += a, f.O.z += a, f.N.z += a, f.I.z += a), e.Xe(g, f)
    }});
c.SG.create = function(a, b, d, e) {
    return new c.SG(a, b, d, e)
};
c.Lz = c.rc.extend({pX: 0,ps: null,ctor: function(a, b) {
        c.hc.prototype.ctor.call(this);
        void 0 !== b && this.d(a, b)
    },d: function(a, b) {
        this.pX = b;
        return c.rc.prototype.d.call(this, a, P(1, b))
    },update: function(a) {
        for (var b = this.Y, d = this.ps.width, e, f, g = N(0, 0), h = 0; h < b.height; ++h)
            g.y = h, e = this.$f(g), f = 1, 0 == h % 2 && (f = -1), e.F.x += f * d * a, e.O.x += f * d * a, e.N.x += f * d * a, e.I.x += f * d * a, this.Xe(g, e)
    },v: function(a) {
        c.rc.prototype.v.call(this, a);
        this.ps = c.C.Js()
    }});
c.Lz.create = function(a, b) {
    return new c.Lz(a, b)
};
c.Kz = c.rc.extend({YU: 0,ps: null,ctor: function(a, b) {
        c.hc.prototype.ctor.call(this);
        void 0 !== b && this.d(a, b)
    },d: function(a, b) {
        this.YU = b;
        return c.rc.prototype.d.call(this, a, P(b, 1))
    },update: function(a) {
        for (var b = this.Y.width, d = this.ps.height, e, f, g = N(0, 0), h = 0; h < b; ++h)
            g.x = h, e = this.$f(g), f = 1, 0 == h % 2 && (f = -1), e.F.y += f * d * a, e.O.y += f * d * a, e.N.y += f * d * a, e.I.y += f * d * a, this.Xe(g, e)
    },v: function(a) {
        c.rc.prototype.v.call(this, a);
        this.ps = c.C.Js()
    }});
c.Kz.create = function(a, b) {
    return new c.Kz(a, b)
};
c.ku = c.Tc.extend({update: function(a) {
        var b = Math.max(0, a - 0.25), b = -100 - b * b * 500, d = +Math.PI / 2 + -Math.PI / 2 * Math.sqrt(a);
        a = Math.sin(d);
        for (var d = Math.cos(d), e = this.Y, f = N(0, 0), g = 0; g <= e.width; ++g)
            for (var h = 0; h <= e.height; ++h) {
                f.x = g;
                f.y = h;
                var k = this.Ic(f), m = Math.sqrt(k.x * k.x + (k.y - b) * (k.y - b)), p = m * a, r = Math.asin(k.x / m) / a, s = Math.cos(r);
                k.x = r <= Math.PI ? p * Math.sin(r) : 0;
                k.y = m + b - p * (1 - s) * a;
                k.z = p * (1 - s) * d / 7;
                0.5 > k.z && (k.z = 0.5);
                this.Id(f, k)
            }
    }});
c.ku.create = function(a, b) {
    return new c.ku(a, b)
};
c.Ma = c.ia.extend({lc: null,ii: 0,cc: null,hh: null,Bl: null,Ad: !1,sb: "ProgressTimer",Y_: function() {
        return N(this.hh.x, this.hh.y)
    },UO: function(a) {
        this.hh = c.fO(a)
    },q_: function() {
        return N(this.Bl.x, this.Bl.y)
    },IO: function(a) {
        this.Bl = c.fO(a)
    },NE: function() {
        return this.lc
    },b0: function() {
        return this.ii
    },eN: function() {
        return this.cc
    },z3: function(a) {
        this.ii != a && (this.ii = c.Rc(a, 0, 100), this.wD())
    },Hd: function() {
    },re: function() {
        return !1
    },d1: function() {
        return this.Ad
    },IA: function(a) {
        if (a < c.Ma.HH) {
            var b = c.Ma.mT;
            return this.Ad ? 
            N(b >> 7 - (a << 1) & 1, b >> 7 - ((a << 1) + 1) & 1) : N(b >> (a << 1) + 1 & 1, b >> (a << 1) & 1)
        }
        return N(0, 0)
    },Nv: null,gD: 270,dB: 270,Ee: 0,UA: !1,EA: null,nd: 0,xc: null,pf: null,DD: null,ls: !1,ctor: null,br: function() {
        c.ia.prototype.ctor.call(this);
        this.lc = c.Ma.Sh;
        this.ii = 0;
        this.hh = N(0, 0);
        this.Bl = N(0, 0);
        this.Ad = !1;
        this.cc = null;
        this.Nv = N(0, 0);
        this.dB = this.gD = 270;
        this.Ee = 0;
        this.UA = !1;
        this.EA = S(0, 0, 0, 0)
    },cr: function() {
        c.ia.prototype.ctor.call(this);
        this.lc = c.Ma.Sh;
        this.ii = 0;
        this.hh = N(0, 0);
        this.Bl = N(0, 0);
        this.Ad = !1;
        this.cc = null;
        this.DD = c.k.createBuffer();
        this.nd = 0;
        this.pf = this.xc = null;
        this.ls = !1
    },bb: function(a) {
        this.cc.color = a;
        this.ec()
    },za: function(a) {
        this.cc.opacity = a;
        this.ec()
    },Ne: function() {
        return this.cc.color
    },Oe: function() {
        return this.cc.opacity
    },bP: null,KX: function(a) {
        this.Ad !== a && (this.Ad = a)
    },LX: function(a) {
        this.Ad !== a && (this.Ad = a, this.pf = this.xc = null, this.nd = 0)
    },py: null,QX: function(a) {
        this.cc != a && (this.cc = a, this.width = this.cc.width, this.height = this.cc.height)
    },RX: function(a) {
        a && this.cc != a && (this.cc = a, this.width = a.width, this.height = a.height, 
        this.xc && (this.pf = this.xc = null, this.nd = 0))
    },cG: null,YX: function(a) {
        a !== this.lc && (this.lc = a)
    },ZX: function(a) {
        a !== this.lc && (this.xc && (this.pf = this.xc = null, this.nd = 0), this.lc = a)
    },UF: null,IX: function(a) {
        this.Ad !== a && (this.Ad = a)
    },JX: function(a) {
        this.Ad !== a && (this.Ad = a, this.pf = this.xc = null, this.nd = 0)
    },ne: function(a) {
        var b = this.cc;
        if (!b)
            return {ea: 0,fa: 0};
        var d = b.quad, e = N(d.F.l.ea, d.F.l.fa), d = N(d.I.l.ea, d.I.l.fa);
        b.textureRectRotated && (b = a.x, a.x = a.y, a.y = b);
        return {ea: e.x * (1 - a.x) + d.x * a.x,fa: e.y * (1 - a.y) + d.y * 
            a.y}
    },oe: function(a) {
        if (!this.cc)
            return {x: 0,y: 0};
        var b = this.cc.quad, d = N(b.F.i.x, b.F.i.y), b = N(b.I.i.x, b.I.i.y);
        return {x: d.x * (1 - a.x) + b.x * a.x,y: d.y * (1 - a.y) + b.y * a.y}
    },XE: null,lW: function(a) {
        this.percentage = 0;
        this.anchorY = this.anchorX = 0.5;
        this.lc = c.Ma.Sh;
        this.Ad = !1;
        this.midPoint = N(0.5, 0.5);
        this.barChangeRate = N(1, 1);
        this.sprite = a;
        return !0
    },mW: function(a) {
        this.percentage = 0;
        this.pf = this.xc = null;
        this.nd = 0;
        this.anchorY = this.anchorX = 0.5;
        this.lc = c.Ma.Sh;
        this.Ad = !1;
        this.midPoint = N(0.5, 0.5);
        this.barChangeRate = 
        N(1, 1);
        this.sprite = a;
        this.shaderProgram = c.Jd.mc(c.Qi);
        return !0
    },Z: null,El: function(a) {
        a = a || c.k;
        var b = this.cc;
        b.$n && (a.globalCompositeOperation = "lighter");
        var d = c.view.pa, e = c.view.Ra;
        a.globalAlpha = b.Aa / 255;
        var f = b.ha, g = b.Q, h = b.Cb, k = b.bB, m = 0 | h.x, p = -h.y - f.height, r = b.so;
        k.width = f.width * d;
        k.height = f.height * e;
        a.save();
        b.Ob && (m = -h.x - f.width, a.scale(-1, 1));
        b.Pb && (p = h.y, a.scale(1, -1));
        m *= d;
        p *= e;
        this.lc == c.Ma.Xj ? (f = this.EA, a.beginPath(), a.rect(f.x * d, f.y * e, f.width * d, f.height * e), a.clip(), a.closePath()) : this.lc == 
        c.Ma.Sh && (f = this.Nv.x * d, h = this.Nv.y * e, a.beginPath(), a.arc(f, h, this.Ee * e, Math.PI / 180 * this.gD, Math.PI / 180 * this.dB, this.UA), a.lineTo(f, h), a.clip(), a.closePath());
        b.J && r.Fp ? (d = b.J.Bb, this.Vu ? a.drawImage(d, 0, 0, r.width, r.height, m, p, k.width, k.height) : a.drawImage(d, r.x, r.y, r.width, r.height, m, p, k.width, k.height)) : 0 !== g.width && (k = this.color, a.fillStyle = "rgba(" + k.r + "," + k.g + "," + k.b + ",1)", a.fillRect(m, p, g.width * d, g.height * e));
        a.restore();
        c.Yf()
    },Wi: function(a) {
        a = a || c.k;
        if (this.xc && this.cc) {
            c.Xs(this);
            var b = this.cc.Ah();
            c.Fh(b.src, b.T);
            c.Gc(c.yl);
            c.qe(this.cc.texture);
            a.bindBuffer(a.ARRAY_BUFFER, this.DD);
            this.ls && (a.bufferData(a.ARRAY_BUFFER, this.pf, a.DYNAMIC_DRAW), this.ls = !1);
            b = c.td.BYTES_PER_ELEMENT;
            a.vertexAttribPointer(c.pb, 2, a.FLOAT, !1, b, 0);
            a.vertexAttribPointer(c.we, 4, a.UNSIGNED_BYTE, !0, b, 8);
            a.vertexAttribPointer(c.ud, 2, a.FLOAT, !1, b, 12);
            this.lc === c.Ma.Sh ? a.drawArrays(a.TRIANGLE_FAN, 0, this.nd) : this.lc == c.Ma.Xj && (this.Ad ? (a.drawArrays(a.TRIANGLE_STRIP, 0, this.nd / 2), a.drawArrays(a.TRIANGLE_STRIP, 4, this.nd / 2), c.Xf++) : 
            a.drawArrays(a.TRIANGLE_STRIP, 0, this.nd));
            c.Xf++
        }
    },xY: function() {
        if (this.cc) {
            var a, b = this.hh;
            a = this.ii / 100;
            var d = N(b.x, 1), e = c.b2(d, b, 2 * c.PI * (this.Ad ? a : 1 - a)), f = 0;
            if (0 == a)
                e = d, f = 0;
            else if (1 == a)
                e = d, f = 4;
            else {
                var g = c.OQ, h = c.Ma.HH;
                for (a = 0; a <= h; ++a) {
                    var k = this.IA(a % h), m = this.IA((a + (h - 1)) % h);
                    0 == a ? m = c.iO(k, m, 1 - b.x) : 4 == a && (k = c.iO(k, m, 1 - b.x));
                    var p = N(0, 0);
                    c.vF(k, m, b, e, p) && (0 != a && 4 != a || 0 <= p.x && 1 >= p.x) && 0 <= p.y && p.y < g && (g = p.y, f = a)
                }
                e = c.Fj(b, c.Ci(c.Gd(e, b), g))
            }
            g = !0;
            this.nd != f + 3 && (g = !1, this.pf = this.xc = null, this.nd = 
            0);
            if (!this.xc) {
                h = this.nd = f + 3;
                k = c.td.BYTES_PER_ELEMENT;
                this.pf = new ArrayBuffer(h * k);
                m = [];
                for (a = 0; a < h; a++)
                    m[a] = new c.td(null, null, null, this.pf, a * k);
                this.xc = m;
                if (!this.xc) {
                    c.log("cc.ProgressTimer._updateRadial() : Not enough memory");
                    return
                }
            }
            this.ec();
            h = this.xc;
            if (!g)
                for (h[0].l = this.ne(b), h[0].i = this.oe(b), h[1].l = this.ne(d), h[1].i = this.oe(d), a = 0; a < f; a++)
                    b = this.IA(a), h[a + 2].l = this.ne(b), h[a + 2].i = this.oe(b);
            h[this.nd - 1].l = this.ne(e);
            h[this.nd - 1].i = this.oe(e)
        }
    },rY: function() {
        if (this.cc) {
            var a, b = this.ii / 
            100, d = this.Bl, d = c.Ci(N(1 - d.x + b * d.x, 1 - d.y + b * d.y), 0.5), b = c.Gd(this.hh, d), d = c.Fj(this.hh, d);
            0 > b.x && (d.x += -b.x, b.x = 0);
            1 < d.x && (b.x -= d.x - 1, d.x = 1);
            0 > b.y && (d.y += -b.y, b.y = 0);
            1 < d.y && (b.y -= d.y - 1, d.y = 1);
            if (this.Ad) {
                if (!this.xc) {
                    this.nd = 8;
                    var e = c.td.BYTES_PER_ELEMENT;
                    this.pf = new ArrayBuffer(8 * e);
                    var f = [];
                    for (a = 0; 8 > a; a++)
                        f[a] = new c.td(null, null, null, this.pf, a * e);
                    f[0].l = this.ne(N(0, 1));
                    f[0].i = this.oe(N(0, 1));
                    f[1].l = this.ne(N(0, 0));
                    f[1].i = this.oe(N(0, 0));
                    f[6].l = this.ne(N(1, 1));
                    f[6].i = this.oe(N(1, 1));
                    f[7].l = this.ne(N(1, 
                    0));
                    f[7].i = this.oe(N(1, 0));
                    this.xc = f
                }
                a = this.xc;
                a[2].l = this.ne(N(b.x, d.y));
                a[2].i = this.oe(N(b.x, d.y));
                a[3].l = this.ne(N(b.x, b.y));
                a[3].i = this.oe(N(b.x, b.y));
                a[4].l = this.ne(N(d.x, d.y));
                a[4].i = this.oe(N(d.x, d.y));
                a[5].l = this.ne(N(d.x, b.y));
                a[5].i = this.oe(N(d.x, b.y))
            } else {
                if (!this.xc)
                    for (this.nd = 4, e = c.td.BYTES_PER_ELEMENT, this.pf = new ArrayBuffer(4 * e), this.xc = [], a = 0; 4 > a; a++)
                        this.xc[a] = new c.td(null, null, null, this.pf, a * e);
                a = this.xc;
                a[0].l = this.ne(N(b.x, d.y));
                a[0].i = this.oe(N(b.x, d.y));
                a[1].l = this.ne(N(b.x, 
                b.y));
                a[1].i = this.oe(N(b.x, b.y));
                a[2].l = this.ne(N(d.x, d.y));
                a[2].i = this.oe(N(d.x, d.y));
                a[3].l = this.ne(N(d.x, b.y));
                a[3].i = this.oe(N(d.x, b.y))
            }
            this.ec()
        }
    },ec: function() {
        if (this.cc && this.xc) {
            for (var a = this.cc.quad.N.t, b = this.xc, d = 0, e = this.nd; d < e; ++d)
                b[d].t = a;
            this.ls = !0
        }
    },wD: null,tY: function() {
        var a = this.cc, b = a.width, d = a.height, e = this.hh;
        if (this.lc == c.Ma.Sh) {
            this.Ee = Math.round(Math.sqrt(b * b + d * d));
            var f, g = !1, h = this.Nv;
            h.x = b * e.x;
            h.y = -d * e.y;
            this.Ad ? (f = 270, e = 270 - 3.6 * this.ii) : (e = -90, f = -90 + 3.6 * this.ii);
            a.Ob && 
            (h.x -= 2 * b * this.hh.x, e = -e - 180, f = -f - 180, g = !g);
            a.Pb && (h.y += 2 * d * this.hh.y, g = !g, e = -e, f = -f);
            this.gD = e;
            this.dB = f;
            this.UA = g
        } else {
            f = this.Bl;
            h = this.ii / 100;
            g = this.EA;
            f = P(b * (1 - f.x), d * (1 - f.y));
            var h = P((b - f.width) * h, (d - f.height) * h), h = P(f.width + h.width, f.height + h.height), k = N(b * e.x, d * e.y);
            f = k.x - h.width / 2;
            0.5 < e.x && h.width / 2 >= b - k.x && (f = b - h.width);
            b = k.y - h.height / 2;
            0.5 < e.y && h.height / 2 >= d - k.y && (b = d - h.height);
            g.x = 0;
            d = 1;
            a.Ob && (g.x -= h.width, d = -1);
            0 < f && (g.x += f * d);
            g.y = 0;
            d = 1;
            a.Pb && (g.y += h.height, d = -1);
            0 < b && (g.y -= b * d);
            g.width = 
            h.width;
            g.height = -h.height
        }
    },uY: function() {
        var a = this.lc;
        a === c.Ma.Sh ? this.xY() : a === c.Ma.Xj && this.rY();
        this.ls = !0
    }});
n = c.Ma.prototype;
c.A == c.$ ? (n.ctor = n.cr, n.bP = n.LX, n.py = n.RX, n.cG = n.ZX, n.UF = n.JX, n.XE = n.mW, n.Z = n.Wi, n.wD = n.uY) : (n.ctor = n.br, n.bP = n.KX, n.py = n.QX, n.cG = n.YX, n.UF = n.IX, n.XE = n.lW, n.Z = n.El, n.wD = c.Ma.prototype.tY);
c.f(n, "midPoint", n.Y_, n.UO);
c.f(n, "barChangeRate", n.q_, n.IO);
c.f(n, "type", n.NE, n.cG);
c.f(n, "percentage", n.b0, n.z3);
c.f(n, "sprite", n.eN, n.py);
c.f(n, "reverseDir", n.d1, n.UF);
c.Ma.create = function(a) {
    var b = new c.Ma;
    return b.XE(a) ? b : null
};
c.Ma.HH = 4;
c.Ma.mT = 75;
c.Ma.Sh = 0;
c.Ma.Xj = 1;
c.qz = c.u.extend({md: 0,Oc: 0,ctor: function(a, b) {
        c.u.prototype.ctor.call(this);
        this.Oc = this.md = 0;
        void 0 !== b && this.d(a, b)
    },d: function(a, b) {
        return c.u.prototype.d.call(this, a) ? (this.md = b, !0) : !1
    },j: function() {
        var a = new c.qz;
        a.d(this.n, this.md);
        return a
    },reverse: function() {
        c.log("cc.ProgressTo.reverse(): reverse hasn't been supported.");
        return null
    },v: function(a) {
        c.u.prototype.v.call(this, a);
        this.Oc = a.percentage;
        100 == this.Oc && (this.Oc = 0)
    },update: function(a) {
        this.target instanceof c.Ma && (this.target.percentage = 
        this.Oc + (this.md - this.Oc) * a)
    }});
c.qz.create = function(a, b) {
    return new c.qz(a, b)
};
c.qq = c.u.extend({md: 0,Oc: 0,ctor: function(a, b, d) {
        c.u.prototype.ctor.call(this);
        this.Oc = this.md = 0;
        void 0 !== d && this.d(a, b, d)
    },d: function(a, b, d) {
        return c.u.prototype.d.call(this, a) ? (this.md = d, this.Oc = b, !0) : !1
    },j: function() {
        var a = new c.qq;
        a.d(this.n, this.Oc, this.md);
        return a
    },reverse: function() {
        return c.qq.create(this.n, this.md, this.Oc)
    },v: function(a) {
        c.u.prototype.v.call(this, a)
    },update: function(a) {
        this.target instanceof c.Ma && (this.target.percentage = this.Oc + (this.md - this.Oc) * a)
    }});
c.qq.create = function(a, b, d) {
    return new c.qq(a, b, d)
};
c.uq = 4208917214;
c.w7 = c.la.extend({sf: function() {
    }});
c.o7 = 0;
c.Wj = 1;
c.wu = 0;
c.n7 = 1;
c.ua = c.vl.extend({ma: null,cb: null,n: null,fh: !1,mK: !1,sb: "TransitionScene",ctor: function(a, b) {
        c.vl.prototype.ctor.call(this);
        void 0 !== a && void 0 !== b && this.d(a, b)
    },iL: function() {
        this.pG(this.iL);
        var a = c.C;
        this.mK = a.Gk;
        a.IF(this.ma);
        c.ta.se(!0);
        this.cb.visible = !0
    },oi: function() {
        this.fh = !0
    },Z: function() {
        this.fh ? (this.cb.S(), this.ma.S()) : (this.ma.S(), this.cb.S())
    },ca: function() {
        c.q.prototype.ca.call(this);
        c.ta.se(!1);
        this.cb.Zf();
        this.ma.ca()
    },yb: function() {
        c.q.prototype.yb.call(this);
        c.ta.se(!0);
        this.cb.yb();
        this.ma.Jh()
    },Le: function() {
        c.q.prototype.Le.call(this);
        this.mK && this.cb.Le()
    },d: function(a, b) {
        if (!b)
            throw "cc.TransitionScene.initWithDuration(): Argument scene must be non-nil";
        if (this.M()) {
            this.n = a;
            this.Tb({x: 0,y: 0,anchorX: 0,anchorY: 0});
            this.ma = b;
            this.cb = c.C.ad;
            this.cb || (this.cb = c.vl.create(), this.cb.M());
            if (this.ma == this.cb)
                throw "cc.TransitionScene.initWithDuration(): Incoming scene must be different from the outgoing scene";
            this.oi();
            return !0
        }
        return !1
    },finish: function() {
        this.ma.Tb({visible: !0,
            x: 0,y: 0,scale: 1,rotation: 0});
        c.A === c.$ && this.ma.ym().restore();
        this.cb.Tb({visible: !1,x: 0,y: 0,scale: 1,rotation: 0});
        c.A === c.$ && this.cb.ym().restore();
        this.gy(this.iL, 0)
    },gx: function() {
        this.ma.visible = !0;
        this.cb.visible = !1
    }});
c.ua.create = function(a, b) {
    return new c.ua(a, b)
};
c.bk = c.ua.extend({Ql: 0,d: function(a, b, d) {
        c.ua.prototype.d.call(this, a, b) && (this.Ql = d);
        return !0
    }});
c.bk.create = function(a, b, d) {
    var e = new c.bk;
    e.d(a, b, d);
    return e
};
c.iI = c.ua.extend({ca: function() {
        c.ua.prototype.ca.call(this);
        this.ma.Tb({scale: 0.001,anchorX: 0.5,anchorY: 0.5});
        this.cb.Tb({scale: 1,anchorX: 0.5,anchorY: 0.5});
        var a = c.Ca.create(c.ve.create(c.kn.create(this.n / 2, 0.001), c.jn.create(this.n / 2, 720)), c.Kc.create(this.n / 2));
        this.cb.gb(a);
        this.ma.gb(c.Ca.create(a.reverse(), c.Nb.create(this.finish, this)))
    }});
c.iI.create = function(a, b) {
    var d = new c.iI;
    return null != d && d.d(a, b) ? d : null
};
c.YH = c.ua.extend({ca: function() {
        c.ua.prototype.ca.call(this);
        var a = c.C.K;
        this.ma.Tb({scale: 0.5,x: a.width,y: 0,anchorX: 0.5,anchorY: 0.5});
        this.cb.anchorX = 0.5;
        this.cb.anchorY = 0.5;
        var b = c.Qh.create(this.n / 4, N(-a.width, 0), a.width / 4, 2), d = c.Uc.create(this.n / 4, 1), a = c.Uc.create(this.n / 4, 0.5), a = c.Ca.create(a, b), b = c.Ca.create(b, d), d = c.Kc.create(this.n / 2);
        this.cb.gb(a);
        this.ma.gb(c.Ca.create(d, b, c.Nb.create(this.finish, this)))
    }});
c.YH.create = function(a, b) {
    var d = new c.YH;
    return null != d && d.d(a, b) ? d : null
};
c.Kq = c.ua.extend({ca: function() {
        c.ua.prototype.ca.call(this);
        this.zj();
        var a = this.action();
        this.ma.gb(c.Ca.create(this.sf(a), c.Nb.create(this.finish, this)))
    },zj: function() {
        this.ma.U(-c.C.K.width, 0)
    },action: function() {
        return c.lq.create(this.n, N(0, 0))
    },sf: function(a) {
        return c.pl.create(a, 2)
    }});
c.Kq.create = function(a, b) {
    var d = new c.Kq;
    return null != d && d.d(a, b) ? d : null
};
c.$H = c.Kq.extend({zj: function() {
        this.ma.U(c.C.K.width, 0)
    }});
c.$H.create = function(a, b) {
    var d = new c.$H;
    return null != d && d.d(a, b) ? d : null
};
c.aI = c.Kq.extend({zj: function() {
        this.ma.U(0, c.C.K.height)
    }});
c.aI.create = function(a, b) {
    var d = new c.aI;
    return null != d && d.d(a, b) ? d : null
};
c.ZH = c.Kq.extend({zj: function() {
        this.ma.U(0, -c.C.K.height)
    }});
c.ZH.create = function(a, b) {
    var d = new c.ZH;
    return null != d && d.d(a, b) ? d : null
};
c.Nj = 0.5;
c.Lq = c.ua.extend({oi: function() {
        this.fh = !1
    },ca: function() {
        c.ua.prototype.ca.call(this);
        this.zj();
        var a = this.action(), b = this.action(), a = this.sf(a), b = c.Ca.create(this.sf(b), c.Nb.create(this.finish, this));
        this.ma.gb(a);
        this.cb.gb(b)
    },zj: function() {
        this.ma.U(-c.C.K.width + c.Nj, 0)
    },action: function() {
        return c.yf.create(this.n, N(c.C.K.width - c.Nj, 0))
    },sf: function(a) {
        return c.pl.create(a, 2)
    }});
c.Lq.create = function(a, b) {
    var d = new c.Lq;
    return null != d && d.d(a, b) ? d : null
};
c.lI = c.Lq.extend({oi: function() {
        this.fh = !0
    },zj: function() {
        this.ma.U(c.C.K.width - c.Nj, 0)
    },action: function() {
        return c.yf.create(this.n, N(-(c.C.K.width - c.Nj), 0))
    }});
c.lI.create = function(a, b) {
    var d = new c.lI;
    return null != d && d.d(a, b) ? d : null
};
c.kI = c.Lq.extend({oi: function() {
        this.fh = !1
    },zj: function() {
        this.ma.U(0, c.C.K.height - c.Nj)
    },action: function() {
        return c.yf.create(this.n, N(0, -(c.C.K.height - c.Nj)))
    }});
c.kI.create = function(a, b) {
    var d = new c.kI;
    return null != d && d.d(a, b) ? d : null
};
c.mI = c.Lq.extend({oi: function() {
        this.fh = !0
    },zj: function() {
        this.ma.U(0, -(c.C.K.height - c.Nj))
    },action: function() {
        return c.yf.create(this.n, N(0, c.C.K.height - c.Nj))
    }});
c.mI.create = function(a, b) {
    var d = new c.mI;
    return null != d && d.d(a, b) ? d : null
};
c.jI = c.ua.extend({ca: function() {
        c.ua.prototype.ca.call(this);
        this.ma.Tb({scale: 0.001,anchorX: 2 / 3,anchorY: 0.5});
        this.cb.Tb({scale: 1,anchorX: 1 / 3,anchorY: 0.5});
        var a = c.Uc.create(this.n, 0.01), b = c.Uc.create(this.n, 1);
        this.ma.gb(this.sf(b));
        this.cb.gb(c.Ca.create(this.sf(a), c.Nb.create(this.finish, this)))
    },sf: function(a) {
        return c.pl.create(a, 2)
    }});
c.jI.create = function(a, b) {
    var d = new c.jI;
    return null != d && d.d(a, b) ? d : null
};
c.WH = c.bk.extend({ca: function() {
        c.ua.prototype.ca.call(this);
        var a, b;
        this.ma.visible = !1;
        var d;
        this.Ql === c.Wj ? (a = 90, d = 270, b = 90) : (a = -90, d = 90, b = -90);
        a = c.Ca.create(c.Kc.create(this.n / 2), c.zf.create(), c.$d.create(this.n / 2, 1, 0, d, a, 0, 0), c.Nb.create(this.finish, this));
        b = c.Ca.create(c.$d.create(this.n / 2, 1, 0, 0, b, 0, 0), c.Xg.create(), c.Kc.create(this.n / 2));
        this.ma.gb(a);
        this.cb.gb(b)
    }});
c.WH.create = function(a, b, d) {
    null == d && (d = c.Wj);
    var e = new c.WH;
    e.d(a, b, d);
    return e
};
c.XH = c.bk.extend({ca: function() {
        c.ua.prototype.ca.call(this);
        var a, b;
        this.ma.visible = !1;
        var d;
        this.Ql == c.wu ? (a = 90, d = 270, b = 90) : (a = -90, d = 90, b = -90);
        a = c.Ca.create(c.Kc.create(this.n / 2), c.zf.create(), c.$d.create(this.n / 2, 1, 0, d, a, 90, 0), c.Nb.create(this.finish, this));
        b = c.Ca.create(c.$d.create(this.n / 2, 1, 0, 0, b, 90, 0), c.Xg.create(), c.Kc.create(this.n / 2));
        this.ma.gb(a);
        this.cb.gb(b)
    }});
c.XH.create = function(a, b, d) {
    null == d && (d = c.wu);
    var e = new c.XH;
    e.d(a, b, d);
    return e
};
c.VH = c.bk.extend({ca: function() {
        c.ua.prototype.ca.call(this);
        var a, b;
        this.ma.visible = !1;
        var d;
        this.Ql === c.Wj ? (a = 90, d = 270, b = 90) : (a = -90, d = 90, b = -90);
        a = c.Ca.create(c.Kc.create(this.n / 2), c.zf.create(), c.$d.create(this.n / 2, 1, 0, d, a, -45, 0), c.Nb.create(this.finish, this));
        b = c.Ca.create(c.$d.create(this.n / 2, 1, 0, 0, b, 45, 0), c.Xg.create(), c.Kc.create(this.n / 2));
        this.ma.gb(a);
        this.cb.gb(b)
    }});
c.VH.create = function(a, b, d) {
    null == d && (d = c.Wj);
    var e = new c.VH;
    e.d(a, b, d);
    return e
};
c.qI = c.bk.extend({ca: function() {
        c.ua.prototype.ca.call(this);
        var a, b;
        this.ma.visible = !1;
        var d;
        this.Ql === c.Wj ? (a = 90, d = 270, b = 90) : (a = -90, d = 90, b = -90);
        a = c.Ca.create(c.Kc.create(this.n / 2), c.ve.create(c.$d.create(this.n / 2, 1, 0, d, a, 0, 0), c.Uc.create(this.n / 2, 1), c.zf.create()), c.Nb.create(this.finish, this));
        b = c.Ca.create(c.ve.create(c.$d.create(this.n / 2, 1, 0, 0, b, 0, 0), c.Uc.create(this.n / 2, 0.5)), c.Xg.create(), c.Kc.create(this.n / 2));
        this.ma.scale = 0.5;
        this.ma.gb(a);
        this.cb.gb(b)
    }});
c.qI.create = function(a, b, d) {
    null == d && (d = c.Wj);
    var e = new c.qI;
    e.d(a, b, d);
    return e
};
c.rI = c.bk.extend({ca: function() {
        c.ua.prototype.ca.call(this);
        var a, b;
        this.ma.visible = !1;
        var d;
        this.Ql === c.wu ? (a = 90, d = 270, b = 90) : (a = -90, d = 90, b = -90);
        a = c.Ca.create(c.Kc.create(this.n / 2), c.ve.create(c.$d.create(this.n / 2, 1, 0, d, a, 90, 0), c.Uc.create(this.n / 2, 1), c.zf.create()), c.Nb.create(this.finish, this));
        b = c.Ca.create(c.ve.create(c.$d.create(this.n / 2, 1, 0, 0, b, 90, 0), c.Uc.create(this.n / 2, 0.5)), c.Xg.create(), c.Kc.create(this.n / 2));
        this.ma.scale = 0.5;
        this.ma.gb(a);
        this.cb.gb(b)
    }});
c.rI.create = function(a, b, d) {
    null == d && (d = c.wu);
    var e = new c.rI;
    e.d(a, b, d);
    return e
};
c.pI = c.bk.extend({ca: function() {
        c.ua.prototype.ca.call(this);
        var a, b;
        this.ma.visible = !1;
        var d;
        this.Ql === c.Wj ? (a = 90, d = 270, b = 90) : (a = -90, d = 90, b = -90);
        a = c.Ca.create(c.Kc.create(this.n / 2), c.ve.create(c.$d.create(this.n / 2, 1, 0, d, a, -45, 0), c.Uc.create(this.n / 2, 1), c.zf.create()), c.zf.create(), c.Nb.create(this.finish, this));
        b = c.Ca.create(c.ve.create(c.$d.create(this.n / 2, 1, 0, 0, b, 45, 0), c.Uc.create(this.n / 2, 0.5)), c.Xg.create(), c.Kc.create(this.n / 2));
        this.ma.scale = 0.5;
        this.ma.gb(a);
        this.cb.gb(b)
    }});
c.pI.create = function(a, b, d) {
    null == d && (d = c.Wj);
    var e = new c.pI;
    e.d(a, b, d);
    return e
};
c.RH = c.ua.extend({de: null,ctor: function() {
        c.ua.prototype.ctor.call(this);
        this.de = c.color()
    },ca: function() {
        c.ua.prototype.ca.call(this);
        var a = c.fd.create(this.de);
        this.ma.visible = !1;
        this.L(a, 2, c.uq);
        var a = this.Bh(c.uq), b = c.Ca.create(c.Zm.create(this.n / 2), c.Nb.create(this.gx, this), c.$m.create(this.n / 2), c.Nb.create(this.finish, this));
        a.gb(b)
    },yb: function() {
        c.ua.prototype.yb.call(this);
        this.EF(c.uq, !1)
    },d: function(a, b, d) {
        d = d || c.color.BLACK;
        c.ua.prototype.d.call(this, a, b) && (this.de.r = d.r, this.de.g = d.g, 
        this.de.b = d.b, this.de.a = 0);
        return !0
    }});
c.RH.create = function(a, b, d) {
    var e = new c.RH;
    e.d(a, b, d);
    return e
};
c.QH = c.ua.extend({ca: function() {
        c.ua.prototype.ca.call(this);
        var a = c.color(0, 0, 0, 0), b = c.C.K, a = c.fd.create(a), d = c.gn.create(b.width, b.height);
        if (null != d) {
            d.sprite.anchorX = 0.5;
            d.sprite.anchorY = 0.5;
            d.Tb({x: b.width / 2,y: b.height / 2,anchorX: 0.5,anchorY: 0.5});
            d.xh();
            this.ma.S();
            d.end();
            var e = c.gn.create(b.width, b.height);
            e.U(b.width / 2, b.height / 2);
            e.sprite.anchorX = e.anchorX = 0.5;
            e.sprite.anchorY = e.anchorY = 0.5;
            e.xh();
            this.cb.S();
            e.end();
            d.sprite.Te(c.ONE, c.ONE);
            e.sprite.Te(c.SRC_ALPHA, c.ONE_MINUS_SRC_ALPHA);
            a.L(d);
            a.L(e);
            d.sprite.opacity = 255;
            e.sprite.opacity = 255;
            b = c.Ca.create(c.Sj.create(this.n, 0), c.Nb.create(this.gx, this), c.Nb.create(this.finish, this));
            e.sprite.gb(b);
            this.L(a, 2, c.uq)
        }
    },yb: function() {
        this.EF(c.uq, !1);
        c.ua.prototype.yb.call(this)
    },Z: function() {
    }});
c.QH.create = function(a, b) {
    var d = new c.QH;
    d.d(a, b);
    return d
};
c.oI = c.ua.extend({oi: function() {
        this.fh = !1
    },ca: function() {
        c.ua.prototype.ca.call(this);
        var a = c.C.K, a = c.bA.create(this.n, P(0 | a.width / a.height * 12, 12)), a = this.sf(a);
        this.cb.gb(c.Ca.create(a, c.Nb.create(this.finish, this), c.wl.create()))
    },sf: function(a) {
        return a
    }});
c.oI.create = function(a, b) {
    var d = new c.oI;
    return null != d && d.d(a, b) ? d : null
};
c.aA = c.ua.extend({ca: function() {
        c.ua.prototype.ca.call(this);
        this.ma.visible = !1;
        var a = this.action(), a = c.Ca.create(a, c.Nb.create(this.gx, this), a.reverse());
        this.gb(c.Ca.create(this.sf(a), c.Nb.create(this.finish, this), c.wl.create()))
    },sf: function(a) {
        return c.Wp.create(a, 3)
    },action: function() {
        return c.Kz.create(this.n / 2, 3)
    }});
c.aA.create = function(a, b) {
    var d = new c.aA;
    return null != d && d.d(a, b) ? d : null
};
c.nI = c.aA.extend({action: function() {
        return c.Lz.create(this.n / 2, 3)
    }});
c.nI.create = function(a, b) {
    var d = new c.nI;
    return null != d && d.d(a, b) ? d : null
};
c.Jq = c.ua.extend({oi: function() {
        this.fh = !1
    },ca: function() {
        c.ua.prototype.ca.call(this);
        var a = c.C.K, a = this.zo(P(0 | a.width / a.height * 12, 12));
        this.cb.gb(c.Ca.create(this.sf(a), c.Nb.create(this.finish, this), c.wl.create()))
    },sf: function(a) {
        return a
    },zo: function(a) {
        return c.fq.create(this.n, a)
    }});
c.Jq.create = function(a, b) {
    var d = new c.Jq;
    return null != d && d.d(a, b) ? d : null
};
c.SH = c.Jq.extend({zo: function(a) {
        return c.Uy.create(this.n, a)
    }});
c.SH.create = function(a, b) {
    var d = new c.SH;
    return null != d && d.d(a, b) ? d : null
};
c.UH = c.Jq.extend({zo: function(a) {
        return c.eu.create(this.n, a)
    }});
c.UH.create = function(a, b) {
    var d = new c.UH;
    return null != d && d.d(a, b) ? d : null
};
c.TH = c.Jq.extend({zo: function(a) {
        return c.Vy.create(this.n, a)
    }});
c.TH.create = function(a, b) {
    var d = new c.TH;
    return null != d && d.d(a, b) ? d : null
};
c.zH = 49153;
c.ak = c.ua.extend({md: 0,Oc: 0,aw: null,sb: "TransitionProgress",Xl: function(a, b, d) {
        a.Tb({x: b,y: d,anchorX: 0.5,anchorY: 0.5})
    },ca: function() {
        c.ua.prototype.ca.call(this);
        this.pL();
        var a = c.C.K, b = c.gn.create(a.width, a.height);
        b.sprite.anchorX = 0.5;
        b.sprite.anchorY = 0.5;
        this.Xl(b, a.width / 2, a.height / 2);
        b.clear(0, 0, 0, 1);
        b.xh();
        this.aw.S();
        b.end();
        this.aw == this.cb && this.gx();
        a = this.Sl(b);
        b = c.Ca.create(c.qq.create(this.n, this.Oc, this.md), c.Nb.create(this.finish, this));
        a.gb(b);
        this.L(a, 2, c.zH)
    },yb: function() {
        this.EF(c.zH, !0);
        c.ua.prototype.yb.call(this)
    },pL: function() {
        this.aw = this.cb;
        this.Oc = 100;
        this.md = 0
    },Sl: function() {
        c.log("cc.TransitionProgress._progressTimerNodeWithRenderTexture(): should be overridden in subclass");
        return null
    },oi: function() {
        this.fh = !1
    }});
c.ak.create = function(a, b) {
    var d = new c.ak;
    return null != d && d.d(a, b) ? d : null
};
c.fI = c.ak.extend({Sl: function(a) {
        var b = c.C.K;
        a = c.Ma.create(a.sprite);
        c.A === c.$ && (a.sprite.flippedY = !0);
        a.type = c.Ma.Sh;
        a.reverseDir = !1;
        a.percentage = 100;
        this.Xl(a, b.width / 2, b.height / 2);
        return a
    }});
c.fI.create = function(a, b) {
    var d = new c.fI;
    return null != d && d.d(a, b) ? d : null
};
c.gI = c.ak.extend({Sl: function(a) {
        var b = c.C.K;
        a = c.Ma.create(a.sprite);
        c.A === c.$ && (a.sprite.flippedY = !0);
        a.type = c.Ma.Sh;
        a.reverseDir = !0;
        a.percentage = 100;
        this.Xl(a, b.width / 2, b.height / 2);
        return a
    }});
c.gI.create = function(a, b) {
    var d = new c.gI;
    return null != d && d.d(a, b) ? d : null
};
c.cI = c.ak.extend({Sl: function(a) {
        var b = c.C.K;
        a = c.Ma.create(a.sprite);
        c.A === c.$ && (a.sprite.flippedY = !0);
        a.type = c.Ma.Xj;
        a.midPoint = N(1, 0);
        a.barChangeRate = N(1, 0);
        a.percentage = 100;
        this.Xl(a, b.width / 2, b.height / 2);
        return a
    }});
c.cI.create = function(a, b) {
    var d = new c.cI;
    return null != d && d.d(a, b) ? d : null
};
c.hI = c.ak.extend({Sl: function(a) {
        var b = c.C.K;
        a = c.Ma.create(a.sprite);
        c.A === c.$ && (a.sprite.flippedY = !0);
        a.type = c.Ma.Xj;
        a.midPoint = N(0, 0);
        a.barChangeRate = N(0, 1);
        a.percentage = 100;
        this.Xl(a, b.width / 2, b.height / 2);
        return a
    }});
c.hI.create = function(a, b) {
    var d = new c.hI;
    return null != d && d.d(a, b) ? d : null
};
c.dI = c.ak.extend({Sl: function(a) {
        var b = c.C.K;
        a = c.Ma.create(a.sprite);
        c.A === c.$ && (a.sprite.flippedY = !0);
        a.type = c.Ma.Xj;
        a.midPoint = N(0.5, 0.5);
        a.barChangeRate = N(1, 1);
        a.percentage = 0;
        this.Xl(a, b.width / 2, b.height / 2);
        return a
    },oi: function() {
        this.fh = !1
    },pL: function() {
        this.aw = this.ma;
        this.Oc = 0;
        this.md = 100
    }});
c.dI.create = function(a, b) {
    var d = new c.dI;
    return null != d && d.d(a, b) ? d : null
};
c.eI = c.ak.extend({Sl: function(a) {
        var b = c.C.K;
        a = c.Ma.create(a.sprite);
        c.A === c.$ && (a.sprite.flippedY = !0);
        a.type = c.Ma.Xj;
        a.midPoint = N(0.5, 0.5);
        a.barChangeRate = N(1, 1);
        a.percentage = 100;
        this.Xl(a, b.width / 2, b.height / 2);
        return a
    }});
c.eI.create = function(a, b) {
    var d = new c.eI;
    return null != d && d.d(a, b) ? d : null
};
c.bI = c.ua.extend({Ou: !0,sb: "TransitionPageTurn",d: function(a, b, d) {
        this.Ou = d;
        c.ua.prototype.d.call(this, a, b);
        return !0
    },zo: function(a) {
        return this.Ou ? c.ul.create(c.ku.create(this.n, a)) : c.ku.create(this.n, a)
    },ca: function() {
        c.ua.prototype.ca.call(this);
        var a = c.C.K, b;
        a.width > a.height ? (a = 16, b = 12) : (a = 12, b = 16);
        a = this.zo(P(a, b));
        this.Ou ? (this.ma.visible = !1, this.ma.gb(c.Ca.create(c.zf.create(), a, c.Nb.create(this.finish, this), c.wl.create()))) : this.cb.gb(c.Ca.create(a, c.Nb.create(this.finish, this), c.wl.create()))
    },
    oi: function() {
        this.fh = this.Ou
    }});
c.bI.create = function(a, b, d) {
    var e = new c.bI;
    e.d(a, b, d);
    return e
};
c.ja = {name: "Jacob__Codec"};
c.E4 = function() {
    return c.ja.Ga.cx.apply(c.ja.Ga, arguments)
};
c.F4 = function() {
    var a = c.ja.ml.kM.apply(c.ja.ml, arguments);
    return c.ja.Ga.cx.apply(c.ja.Ga, [a])
};
c.FP = function(a, b) {
    b = b || 1;
    var d = this.F4(a), e = [], f, g, h;
    f = 0;
    for (h = d.length / b; f < h; f++)
        for (e[f] = 0, g = b - 1; 0 <= g; --g)
            e[f] += d.charCodeAt(f * b + g) << 8 * g;
    return e
};
c.yka = function(a, b) {
    b = b || 1;
    var d = this.E4(a), e = [], f, g, h;
    f = 0;
    for (h = d.length / b; f < h; f++)
        for (e[f] = 0, g = b - 1; 0 <= g; --g)
            e[f] += d.charCodeAt(f * b + g) << 8 * g;
    return e
};
c.a7 = function(a) {
    a = a.split(",");
    var b = [], d;
    for (d = 0; d < a.length; d++)
        b.push(parseInt(a[d]));
    return b
};
c.ja.ml = {name: "Jacob__Codec__Base64"};
c.ja.ml.Cv = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d";
c.ja.ml.kM = function(a) {
    var b = [], d, e, f, g, h, k = 0;
    for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); k < a.length; )
        d = this.Cv.indexOf(a.charAt(k++)), e = this.Cv.indexOf(a.charAt(k++)), g = this.Cv.indexOf(a.charAt(k++)), h = this.Cv.indexOf(a.charAt(k++)), d = d << 2 | e >> 4, e = (e & 15) << 4 | g >> 2, f = (g & 3) << 6 | h, b.push(String.fromCharCode(d)), 64 != g && b.push(String.fromCharCode(e)), 64 != h && b.push(String.fromCharCode(f));
    return b = b.join("")
};
c.ja.ml.lM = function(a, b) {
    var d = this.kM(a), e = [], f, g, h;
    f = 0;
    for (h = d.length / b; f < h; f++)
        for (e[f] = 0, g = b - 1; 0 <= g; --g)
            e[f] += d.charCodeAt(f * b + g) << 8 * g;
    return e
};
c.B4 = function(a) {
    if (0 != a.length % 4)
        return null;
    for (var b = a.length / 4, d = window.z7 ? new Uint32Array(b) : [], e = 0; e < b; e++) {
        var f = 4 * e;
        d[e] = a[f] + 256 * a[f + 1] + 65536 * a[f + 2] + 16777216 * a[f + 3]
    }
    return d
};
c.ja.Ga = function(a) {
    this.data = a;
    this.debug = !1;
    this.yj = void 0;
    this.files = 0;
    this.yy = [];
    this.TD = Array(32768);
    this.wh = 0;
    this.Kx = !1;
    this.$L = 0;
    this.ti = 1;
    this.Co = 0;
    this.ep = [];
    this.BM = void 0;
    this.Us = Array(c.ja.Ga.pR);
    this.rm = Array(32);
    this.At = 0;
    this.oz = null;
    this.Ih = 0;
    this.No = Array(17);
    this.No[0] = 0;
    this.GM = this.EM = void 0
};
c.ja.Ga.cx = function(a) {
    return (new c.ja.Ga(a)).cx()[0][0]
};
c.ja.Ga.Yy = function() {
    this.Gw = this.Fw = 0;
    this.iF = null;
    this.j1 = -1
};
c.ja.Ga.pR = 288;
c.ja.Ga.aH = 256;
c.ja.Ga.QD = [0, 128, 64, 192, 32, 160, 96, 224, 16, 144, 80, 208, 48, 176, 112, 240, 8, 136, 72, 200, 40, 168, 104, 232, 24, 152, 88, 216, 56, 184, 120, 248, 4, 132, 68, 196, 36, 164, 100, 228, 20, 148, 84, 212, 52, 180, 116, 244, 12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178, 114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254, 1, 129, 65, 193, 33, 161, 97, 225, 17, 145, 
    81, 209, 49, 177, 113, 241, 9, 137, 73, 201, 41, 169, 105, 233, 25, 153, 89, 217, 57, 185, 121, 249, 5, 133, 69, 197, 37, 165, 101, 229, 21, 149, 85, 213, 53, 181, 117, 245, 13, 141, 77, 205, 45, 173, 109, 237, 29, 157, 93, 221, 61, 189, 125, 253, 3, 131, 67, 195, 35, 163, 99, 227, 19, 147, 83, 211, 51, 179, 115, 243, 11, 139, 75, 203, 43, 171, 107, 235, 27, 155, 91, 219, 59, 187, 123, 251, 7, 135, 71, 199, 39, 167, 103, 231, 23, 151, 87, 215, 55, 183, 119, 247, 15, 143, 79, 207, 47, 175, 111, 239, 31, 159, 95, 223, 63, 191, 127, 255];
c.ja.Ga.hM = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
c.ja.Ga.iM = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99];
c.ja.Ga.gM = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
c.ja.Ga.Io = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
c.ja.Ga.border = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
c.ja.Ga.prototype.cx = function() {
    this.et = [];
    gAa(this);
    return this.yy
};
c.ja.Ga.prototype.R = function() {
    this.Co += 8;
    return this.$L < this.data.length ? this.data.charCodeAt(this.$L++) : -1
};
function V(a) {
    var b;
    a.Co++;
    b = a.ti & 1;
    a.ti >>= 1;
    0 == a.ti && (a.ti = a.R(), b = a.ti & 1, a.ti = a.ti >> 1 | 128);
    return b
}
function W(a, b) {
    for (var d = 0, e = b; e--; )
        d = d << 1 | V(a);
    b && (d = c.ja.Ga.QD[d] >> 8 - b);
    return d
}
function X(a, b) {
    a.TD[a.wh++] = b;
    a.et.push(String.fromCharCode(b));
    32768 == a.wh && (a.wh = 0)
}
function ha(a) {
    for (; ; ) {
        if (a.No[a.Ih] >= a.GM)
            return -1;
        if (a.EM[a.No[a.Ih]] == a.Ih)
            return a.No[a.Ih]++;
        a.No[a.Ih]++
    }
}
function ia(a) {
    var b = a.oz[a.At], d;
    if (17 == a.Ih)
        return -1;
    a.At++;
    a.Ih++;
    d = ha(a);
    if (0 <= d)
        b.Fw = d;
    else if (b.Fw = 32768, ia(a))
        return -1;
    d = ha(a);
    if (0 <= d)
        b.Gw = d, b.iF = null;
    else if (b.Gw = 32768, b.iF = a.oz[a.At], b.j1 = a.At, ia(a))
        return -1;
    a.Ih--;
    return 0
}
function ja(a, b, d, e) {
    a.oz = b;
    a.At = 0;
    a.EM = e;
    a.GM = d;
    for (b = 0; 17 > b; b++)
        a.No[b] = 0;
    a.Ih = 0;
    return ia(a) ? -1 : 0
}
function la(a, b) {
    for (var d, e, f = 0, g = b[f]; ; )
        if (d = V(a)) {
            if (!(g.Gw & 32768))
                return g.Gw;
            g = g.iF;
            d = b.length;
            for (e = 0; e < d; e++)
                if (b[e] === g) {
                    f = e;
                    break
                }
        } else {
            if (!(g.Fw & 32768))
                return g.Fw;
            f++;
            g = b[f]
        }
    return -1
}
function ma(a) {
    var b, d, e, f, g;
    do
        if (b = V(a), e = W(a, 2), 0 == e)
            for (a.ti = 1, e = a.R(), e |= a.R() << 8, d = a.R(), d |= a.R() << 8, (e ^ ~d) & 65535 && document.write("BlockLen checksum mismatch\n"); e--; )
                d = a.R(), X(a, d);
        else if (1 == e)
            for (; ; )
                if (e = c.ja.Ga.QD[W(a, 7)] >> 1, 23 < e ? (e = e << 1 | V(a), 199 < e ? (e -= 128, e = e << 1 | V(a)) : (e -= 48, 143 < e && (e += 136))) : e += 256, 256 > e)
                    X(a, e);
                else if (256 == e)
                    break;
                else {
                    var h;
                    e -= 257;
                    g = W(a, c.ja.Ga.iM[e]) + c.ja.Ga.hM[e];
                    e = c.ja.Ga.QD[W(a, 5)] >> 3;
                    8 < c.ja.Ga.Io[e] ? (h = W(a, 8), h |= W(a, c.ja.Ga.Io[e] - 8) << 8) : h = W(a, c.ja.Ga.Io[e]);
                    h += 
                    c.ja.Ga.gM[e];
                    for (e = 0; e < g; e++)
                        d = a.TD[a.wh - h & 32767], X(a, d)
                }
        else if (2 == e) {
            var k = Array(320);
            d = 257 + W(a, 5);
            h = 1 + W(a, 5);
            f = 4 + W(a, 4);
            for (e = 0; 19 > e; e++)
                k[e] = 0;
            for (e = 0; e < f; e++)
                k[c.ja.Ga.border[e]] = W(a, 3);
            g = a.rm.length;
            for (f = 0; f < g; f++)
                a.rm[f] = new c.ja.Ga.Yy;
            if (ja(a, a.rm, 19, k)) {
                a.wh = 0;
                return
            }
            g = d + h;
            f = 0;
            for (var m = -1; f < g; )
                if (m++, e = la(a, a.rm), 16 > e)
                    k[f++] = e;
                else if (16 == e) {
                    var p;
                    e = 3 + W(a, 2);
                    if (f + e > g) {
                        a.wh = 0;
                        return
                    }
                    for (p = f ? k[f - 1] : 0; e--; )
                        k[f++] = p
                } else {
                    e = 17 == e ? 3 + W(a, 3) : 11 + W(a, 7);
                    if (f + e > g) {
                        a.wh = 0;
                        return
                    }
                    for (; e--; )
                        k[f++] = 
                        0
                }
            g = a.Us.length;
            for (f = 0; f < g; f++)
                a.Us[f] = new c.ja.Ga.Yy;
            if (ja(a, a.Us, d, k)) {
                a.wh = 0;
                return
            }
            g = a.Us.length;
            for (f = 0; f < g; f++)
                a.rm[f] = new c.ja.Ga.Yy;
            e = [];
            for (f = d; f < k.length; f++)
                e[f - d] = k[f];
            if (ja(a, a.rm, h, e)) {
                a.wh = 0;
                return
            }
            for (; ; )
                if (e = la(a, a.Us), 256 <= e) {
                    e -= 256;
                    if (0 == e)
                        break;
                    e--;
                    g = W(a, c.ja.Ga.iM[e]) + c.ja.Ga.hM[e];
                    e = la(a, a.rm);
                    8 < c.ja.Ga.Io[e] ? (h = W(a, 8), h |= W(a, c.ja.Ga.Io[e] - 8) << 8) : h = W(a, c.ja.Ga.Io[e]);
                    for (h += c.ja.Ga.gM[e]; g--; )
                        d = a.TD[a.wh - h & 32767], X(a, d)
                } else
                    X(a, e)
        }
    while (!b);
    a.wh = 0;
    a.ti = 1
}
function gAa(a) {
    a.et = [];
    a.Kx = !1;
    var b = [];
    b[0] = a.R();
    b[1] = a.R();
    120 == b[0] && 218 == b[1] && (ma(a), a.yy[a.files] = [a.et.join(""), "geonext.gxt"], a.files++);
    31 == b[0] && 139 == b[1] && (qa(a), a.yy[a.files] = [a.et.join(""), "file"], a.files++);
    if (80 == b[0] && 75 == b[1] && (a.Kx = !0, b[2] = a.R(), b[3] = a.R(), 3 == b[2] && 4 == b[3])) {
        b[0] = a.R();
        b[1] = a.R();
        a.yj = a.R();
        a.yj |= a.R() << 8;
        b = a.R();
        b |= a.R() << 8;
        a.R();
        a.R();
        a.R();
        a.R();
        a.R();
        a.R();
        a.R();
        a.R();
        a.R();
        a.R();
        a.R();
        a.R();
        var d = a.R(), d = d | a.R() << 8, e = a.R(), e = e | a.R() << 8, f = 0;
        for (a.ep = []; d--; ) {
            var g = 
            a.R();
            "/" == g | ":" == g ? f = 0 : f < c.ja.Ga.aH - 1 && (a.ep[f++] = String.fromCharCode(g))
        }
        a.BM || (a.BM = a.ep);
        for (var f = 0; f < e; )
            a.R(), f++;
        8 == b && (ma(a), a.yy[a.files] = [a.et.join(""), a.ep.join("")], a.files++);
        qa(a)
    }
}
function qa(a) {
    var b = [], d;
    a.yj & 8 && (b[0] = a.R(), b[1] = a.R(), b[2] = a.R(), b[3] = a.R(), a.R(), a.R(), a.R(), a.R(), a.R(), a.R(), a.R(), a.R());
    a.Kx && gAa(a);
    b[0] = a.R();
    if (8 == b[0]) {
        a.yj = a.R();
        a.R();
        a.R();
        a.R();
        a.R();
        a.R();
        a.R();
        if (a.yj & 4)
            for (b[0] = a.R(), b[2] = a.R(), a.Ih = b[0] + 256 * b[1], b = 0; b < a.Ih; b++)
                a.R();
        if (a.yj & 8)
            for (b = 0, a.ep = []; d = a.R(); ) {
                if ("7" == d || ":" == d)
                    b = 0;
                b < c.ja.Ga.aH - 1 && (a.ep[b++] = d)
            }
        if (a.yj & 16)
            for (; a.R(); )
                ;
        a.yj & 2 && (a.R(), a.R());
        ma(a);
        a.R();
        a.R();
        a.R();
        a.R();
        a.Kx && gAa(a)
    }
}
; /*
 zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
(function() {
    function a(a) {
        throw a;
    }
    function b(a, b) {
        var d = a.split("."), e = E;
        d[0] in e || !e.execScript || e.execScript("var " + d[0]);
        for (var f; d.length && (f = d.shift()); )
            d.length || b === G ? e = e[f] ? e[f] : e[f] = {} : e[f] = b
    }
    function d(a) {
        if ("string" === typeof a) {
            a = a.split("");
            var b, d;
            b = 0;
            for (d = a.length; b < d; b++)
                a[b] = (a[b].charCodeAt(0) & 255) >>> 0
        }
        b = 1;
        d = 0;
        for (var e = a.length, f, g = 0; 0 < e; ) {
            f = 1024 < e ? 1024 : e;
            e -= f;
            do
                b += a[g++], d += b;
            while (--f);
            b %= 65521;
            d %= 65521
        }
        return (d << 16 | b) >>> 0
    }
    function e(b, d) {
        this.index = "number" === typeof d ? d : 0;
        this.Ms = 0;
        this.buffer = b instanceof (z ? Uint8Array : Array) ? b : new (z ? Uint8Array : Array)(32768);
        2 * this.buffer.length <= this.index && a(Error("invalid index"));
        this.buffer.length <= this.index && this.zh()
    }
    function f(a) {
        this.buffer = new (z ? Uint16Array : Array)(2 * a);
        this.length = 0
    }
    function g(a) {
        var b = a.length, d = 0, e = Number.POSITIVE_INFINITY, f, g, h, k, m, p, r, s, t;
        for (s = 0; s < b; ++s)
            a[s] > d && (d = a[s]), a[s] < e && (e = a[s]);
        f = 1 << d;
        g = new (z ? Uint32Array : Array)(f);
        h = 1;
        k = 0;
        for (m = 2; h <= d; ) {
            for (s = 0; s < b; ++s)
                if (a[s] === h) {
                    p = 0;
                    r = k;
                    for (t = 0; t < h; ++t)
                        p = 
                        p << 1 | r & 1, r >>= 1;
                    for (t = p; t < f; t += m)
                        g[t] = h << 16 | s;
                    ++k
                }
            ++h;
            k <<= 1;
            m <<= 1
        }
        return [g, d, e]
    }
    function h(a, b) {
        this.Wo = O;
        this.G = 0;
        this.input = a;
        this.b = 0;
        b && (b.K1 && (this.G = b.K1), "number" === typeof b.gE && (this.Wo = b.gE), b.Qx && (this.a = z && b.Qx instanceof Array ? new Uint8Array(b.Qx) : b.Qx), "number" === typeof b.X1 && (this.b = b.X1));
        this.a || (this.a = new (z ? Uint8Array : Array)(32768))
    }
    function k(a, b) {
        this.length = a;
        this.QQ = b
    }
    function m() {
        var b = Q;
        switch (I) {
            case 3 === b:
                return [257, b - 3, 0];
            case 4 === b:
                return [258, b - 4, 0];
            case 5 === b:
                return [259, 
                    b - 5, 0];
            case 6 === b:
                return [260, b - 6, 0];
            case 7 === b:
                return [261, b - 7, 0];
            case 8 === b:
                return [262, b - 8, 0];
            case 9 === b:
                return [263, b - 9, 0];
            case 10 === b:
                return [264, b - 10, 0];
            case 12 >= b:
                return [265, b - 11, 1];
            case 14 >= b:
                return [266, b - 13, 1];
            case 16 >= b:
                return [267, b - 15, 1];
            case 18 >= b:
                return [268, b - 17, 1];
            case 22 >= b:
                return [269, b - 19, 2];
            case 26 >= b:
                return [270, b - 23, 2];
            case 30 >= b:
                return [271, b - 27, 2];
            case 34 >= b:
                return [272, b - 31, 2];
            case 42 >= b:
                return [273, b - 35, 3];
            case 50 >= b:
                return [274, b - 43, 3];
            case 58 >= b:
                return [275, b - 51, 3];
            case 66 >= b:
                return [276, 
                    b - 59, 3];
            case 82 >= b:
                return [277, b - 67, 4];
            case 98 >= b:
                return [278, b - 83, 4];
            case 114 >= b:
                return [279, b - 99, 4];
            case 130 >= b:
                return [280, b - 115, 4];
            case 162 >= b:
                return [281, b - 131, 5];
            case 194 >= b:
                return [282, b - 163, 5];
            case 226 >= b:
                return [283, b - 195, 5];
            case 257 >= b:
                return [284, b - 227, 5];
            case 258 === b:
                return [285, b - 258, 0];
            default:
                a("invalid length: " + b)
        }
    }
    function p(b, d) {
        function e(b, d) {
            var f = b.QQ, g = [], h = 0, k;
            k = U[b.length];
            g[h++] = k & 65535;
            g[h++] = k >> 16 & 255;
            g[h++] = k >> 24;
            var m;
            switch (I) {
                case 1 === f:
                    m = [0, f - 1, 0];
                    break;
                case 2 === f:
                    m = [1, f - 
                        2, 0];
                    break;
                case 3 === f:
                    m = [2, f - 3, 0];
                    break;
                case 4 === f:
                    m = [3, f - 4, 0];
                    break;
                case 6 >= f:
                    m = [4, f - 5, 1];
                    break;
                case 8 >= f:
                    m = [5, f - 7, 1];
                    break;
                case 12 >= f:
                    m = [6, f - 9, 2];
                    break;
                case 16 >= f:
                    m = [7, f - 13, 2];
                    break;
                case 24 >= f:
                    m = [8, f - 17, 3];
                    break;
                case 32 >= f:
                    m = [9, f - 25, 3];
                    break;
                case 48 >= f:
                    m = [10, f - 33, 4];
                    break;
                case 64 >= f:
                    m = [11, f - 49, 4];
                    break;
                case 96 >= f:
                    m = [12, f - 65, 5];
                    break;
                case 128 >= f:
                    m = [13, f - 97, 5];
                    break;
                case 192 >= f:
                    m = [14, f - 129, 6];
                    break;
                case 256 >= f:
                    m = [15, f - 193, 6];
                    break;
                case 384 >= f:
                    m = [16, f - 257, 7];
                    break;
                case 512 >= f:
                    m = [17, f - 385, 7];
                    break;
                case 768 >= f:
                    m = [18, f - 513, 8];
                    break;
                case 1024 >= f:
                    m = [19, f - 769, 8];
                    break;
                case 1536 >= f:
                    m = [20, f - 1025, 9];
                    break;
                case 2048 >= f:
                    m = [21, f - 1537, 9];
                    break;
                case 3072 >= f:
                    m = [22, f - 2049, 10];
                    break;
                case 4096 >= f:
                    m = [23, f - 3073, 10];
                    break;
                case 6144 >= f:
                    m = [24, f - 4097, 11];
                    break;
                case 8192 >= f:
                    m = [25, f - 6145, 11];
                    break;
                case 12288 >= f:
                    m = [26, f - 8193, 12];
                    break;
                case 16384 >= f:
                    m = [27, f - 12289, 12];
                    break;
                case 24576 >= f:
                    m = [28, f - 16385, 13];
                    break;
                case 32768 >= f:
                    m = [29, f - 24577, 13];
                    break;
                default:
                    a("invalid distance")
            }
            k = m;
            g[h++] = k[0];
            g[h++] = k[1];
            g[h++] = k[2];
            f = 0;
            for (h = g.length; f < h; ++f)
                t[u++] = g[f];
            w[g[0]]++;
            x[g[3]]++;
            v = b.length + d - 1;
            s = null
        }
        var f, g, h, m, p, r = {}, s, t = z ? new Uint16Array(2 * d.length) : [], u = 0, v = 0, w = new (z ? Uint32Array : Array)(286), x = new (z ? Uint32Array : Array)(30), B = b.G, y;
        if (!z) {
            for (h = 0; 285 >= h; )
                w[h++] = 0;
            for (h = 0; 29 >= h; )
                x[h++] = 0
        }
        w[256] = 1;
        f = 0;
        for (g = d.length; f < g; ++f) {
            h = p = 0;
            for (m = 3; h < m && f + h !== g; ++h)
                p = p << 8 | d[f + h];
            r[p] === G && (r[p] = []);
            h = r[p];
            if (!(0 < v--)) {
                for (; 0 < h.length && 32768 < f - h[0]; )
                    h.shift();
                if (f + 3 >= g) {
                    s && e(s, -1);
                    h = 0;
                    for (m = g - f; h < m; ++h)
                        y = d[f + h], t[u++] = y, ++w[y];
                    break
                }
                if (0 < h.length) {
                    p = m = G;
                    var C = 0, F = G, E = G, J = F = G, M = d.length, E = 0, J = h.length;
                    a: for (; E < J; E++) {
                        m = h[J - E - 1];
                        F = 3;
                        if (3 < C) {
                            for (F = C; 3 < F; F--)
                                if (d[m + F - 1] !== d[f + F - 1])
                                    continue a;
                            F = C
                        }
                        for (; 258 > F && f + F < M && d[m + F] === d[f + F]; )
                            ++F;
                        F > C && (p = m, C = F);
                        if (258 === F)
                            break
                    }
                    m = new k(C, f - p);
                    s ? s.length < m.length ? (y = d[f - 1], t[u++] = y, ++w[y], e(m, 0)) : e(s, -1) : m.length < B ? s = m : e(m, 0)
                } else
                    s ? e(s, -1) : (y = d[f], t[u++] = y, ++w[y])
            }
            h.push(f)
        }
        t[u++] = 256;
        w[256]++;
        b.lR = w;
        b.dR = x;
        return z ? t.subarray(0, u) : t
    }
    function r(a, b) {
        function d(a) {
            var b = t[a][u[a]];
            b === 
            r ? (d(a + 1), d(a + 1)) : --s[b];
            ++u[a]
        }
        var e = a.length, g = new f(572), h = new (z ? Uint8Array : Array)(e), k, m, p;
        if (!z)
            for (m = 0; m < e; m++)
                h[m] = 0;
        for (m = 0; m < e; ++m)
            0 < a[m] && g.push(m, a[m]);
        e = Array(g.length / 2);
        k = new (z ? Uint32Array : Array)(g.length / 2);
        if (1 === e.length)
            return h[g.pop().index] = 1, h;
        m = 0;
        for (p = g.length / 2; m < p; ++m)
            e[m] = g.pop(), k[m] = e[m].value;
        var r = k.length;
        m = new (z ? Uint16Array : Array)(b);
        var g = new (z ? Uint8Array : Array)(b), s = new (z ? Uint8Array : Array)(r);
        p = Array(b);
        var t = Array(b), u = Array(b), v = (1 << b) - r, w = 1 << b - 1, x, y, B;
        m[b - 
        1] = r;
        for (x = 0; x < b; ++x)
            v < w ? g[x] = 0 : (g[x] = 1, v -= w), v <<= 1, m[b - 2 - x] = (m[b - 1 - x] / 2 | 0) + r;
        m[0] = g[0];
        p[0] = Array(m[0]);
        t[0] = Array(m[0]);
        for (x = 1; x < b; ++x)
            m[x] > 2 * m[x - 1] + g[x] && (m[x] = 2 * m[x - 1] + g[x]), p[x] = Array(m[x]), t[x] = Array(m[x]);
        for (v = 0; v < r; ++v)
            s[v] = b;
        for (w = 0; w < m[b - 1]; ++w)
            p[b - 1][w] = k[w], t[b - 1][w] = w;
        for (v = 0; v < b; ++v)
            u[v] = 0;
        1 === g[b - 1] && (--s[0], ++u[b - 1]);
        for (x = b - 2; 0 <= x; --x) {
            y = v = 0;
            B = u[x + 1];
            for (w = 0; w < m[x]; w++)
                y = p[x + 1][B] + p[x + 1][B + 1], y > k[v] ? (p[x][w] = y, t[x][w] = r, B += 2) : (p[x][w] = k[v], t[x][w] = v, ++v);
            u[x] = 0;
            1 === g[x] && d(x)
        }
        k = 
        s;
        m = 0;
        for (p = e.length; m < p; ++m)
            h[e[m].index] = k[m];
        return h
    }
    function s(b) {
        var d = new (z ? Uint16Array : Array)(b.length), e = [], f = [], g = 0, h, k, m;
        h = 0;
        for (k = b.length; h < k; h++)
            e[b[h]] = (e[b[h]] | 0) + 1;
        h = 1;
        for (k = 16; h <= k; h++)
            f[h] = g, g += e[h] | 0, g > 1 << h && a("overcommitted"), g <<= 1;
        65536 > g && a("undercommitted");
        h = 0;
        for (k = b.length; h < k; h++)
            for (g = f[b[h]], f[b[h]] += 1, e = d[h] = 0, m = b[h]; e < m; e++)
                d[h] = d[h] << 1 | g & 1, g >>>= 1;
        return d
    }
    function u(a, b) {
        this.input = a;
        this.a = new (z ? Uint8Array : Array)(32768);
        this.Wo = M.sx;
        var d = {}, e;
        !b && (b = {}) || "number" !== 
        typeof b.gE || (this.Wo = b.gE);
        for (e in b)
            d[e] = b[e];
        d.Qx = this.a;
        this.z = new h(this.input, d)
    }
    function t(b, d) {
        this.tx = [];
        this.Dx = 32768;
        this.Fg = this.g = this.D = this.Wx = 0;
        this.input = z ? new Uint8Array(b) : b;
        this.JF = !1;
        this.Ix = ba;
        this.zG = !1;
        if (d || !(d = {}))
            d.index && (this.D = d.index), d.UD && (this.Dx = d.UD), d.VD && (this.Ix = d.VD), d.resize && (this.zG = d.resize);
        switch (this.Ix) {
            case ka:
                this.b = 32768;
                this.a = new (z ? Uint8Array : Array)(32768 + this.Dx + 258);
                break;
            case ba:
                this.b = 0;
                this.a = new (z ? Uint8Array : Array)(this.Dx);
                this.zh = this.cR;
                this.kG = this.TQ;
                this.Lx = this.XQ;
                break;
            default:
                a(Error("invalid inflate mode"))
        }
    }
    function v(b, d) {
        for (var e = b.g, f = b.Fg, g = b.input, h = b.D, k; f < d; )
            k = g[h++], k === G && a(Error("input buffer is broken")), e |= k << f, f += 8;
        b.g = e >>> d;
        b.Fg = f - d;
        b.D = h;
        return e & (1 << d) - 1
    }
    function w(b, d) {
        for (var e = b.g, f = b.Fg, g = b.input, h = b.D, k = d[0], m = d[1], p; f < m; )
            p = g[h++], p === G && a(Error("input buffer is broken")), e |= p << f, f += 8;
        g = k[e & (1 << m) - 1];
        k = g >>> 16;
        b.g = e >> k;
        b.Fg = f - k;
        b.D = h;
        return g & 65535
    }
    function y(a) {
        function b(a, d, e) {
            var f, g, h, k;
            for (k = 0; k < 
            a; )
                switch (f = w(this, d), f) {
                    case 16:
                        for (h = 3 + v(this, 2); h--; )
                            e[k++] = g;
                        break;
                    case 17:
                        for (h = 3 + v(this, 3); h--; )
                            e[k++] = 0;
                        g = 0;
                        break;
                    case 18:
                        for (h = 11 + v(this, 7); h--; )
                            e[k++] = 0;
                        g = 0;
                        break;
                    default:
                        g = e[k++] = f
                }
            return e
        }
        var d = v(a, 5) + 257, e = v(a, 5) + 1, f = v(a, 4) + 4, h = new (z ? Uint8Array : Array)(na.length), k;
        for (k = 0; k < f; ++k)
            h[na[k]] = v(a, 3);
        f = g(h);
        h = new (z ? Uint8Array : Array)(d);
        k = new (z ? Uint8Array : Array)(e);
        a.Lx(g(b.call(a, d, f, h)), g(b.call(a, e, f, k)))
    }
    function B(b, d) {
        var e, f;
        this.input = b;
        this.D = 0;
        if (d || !(d = {}))
            d.index && (this.D = d.index), 
            d.JP && (this.uR = d.JP);
        e = b[this.D++];
        f = b[this.D++];
        switch (e & 15) {
            case $:
                this.method = $;
                break;
            default:
                a(Error("unsupported compression method"))
        }
        0 !== ((e << 8) + f) % 31 && a(Error("invalid fcheck flag:" + ((e << 8) + f) % 31));
        f & 32 && a(Error("fdict flag is not supported"));
        this.rG = new t(b, {index: this.D,UD: d.UD,VD: d.VD,resize: d.resize})
    }
    var G = void 0, I = !0, E = this, z = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Uint32Array;
    e.prototype.zh = function() {
        var a = this.buffer, b, d = a.length, e = 
        new (z ? Uint8Array : Array)(d << 1);
        if (z)
            e.set(a);
        else
            for (b = 0; b < d; ++b)
                e[b] = a[b];
        return this.buffer = e
    };
    e.prototype.H = function(a, b, d) {
        var e = this.buffer, f = this.index, g = this.Ms, h = e[f];
        d && 1 < b && (a = 8 < b ? (J[a & 255] << 24 | J[a >>> 8 & 255] << 16 | J[a >>> 16 & 255] << 8 | J[a >>> 24 & 255]) >> 32 - b : J[a] >> 8 - b);
        if (8 > b + g)
            h = h << b | a, g += b;
        else
            for (d = 0; d < b; ++d)
                h = h << 1 | a >> b - d - 1 & 1, 8 === ++g && (g = 0, e[f++] = J[h], h = 0, f === e.length && (e = this.zh()));
        e[f] = h;
        this.buffer = e;
        this.Ms = g;
        this.index = f
    };
    e.prototype.finish = function() {
        var a = this.buffer, b = this.index, d;
        0 < 
        this.Ms && (a[b] <<= 8 - this.Ms, a[b] = J[a[b]], b++);
        z ? d = a.subarray(0, b) : (a.length = b, d = a);
        return d
    };
    var C = new (z ? Uint8Array : Array)(256), x;
    for (x = 0; 256 > x; ++x) {
        for (var F = x, K = F, L = 7, F = F >>> 1; F; F >>>= 1)
            K <<= 1, K |= F & 1, --L;
        C[x] = (K << L & 255) >>> 0
    }
    var J = C, C = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 
        4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 
        251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 
        1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 
        1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 
        1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
    z && new Uint32Array(C);
    f.prototype.getParent = function(a) {
        return 2 * 
        ((a - 2) / 4 | 0)
    };
    f.prototype.push = function(a, b) {
        var d, e, f = this.buffer, g;
        d = this.length;
        f[this.length++] = b;
        for (f[this.length++] = a; 0 < d; )
            if (e = this.getParent(d), f[d] > f[e])
                g = f[d], f[d] = f[e], f[e] = g, g = f[d + 1], f[d + 1] = f[e + 1], f[e + 1] = g, d = e;
            else
                break;
        return this.length
    };
    f.prototype.pop = function() {
        var a, b, d = this.buffer, e, f, g;
        b = d[0];
        a = d[1];
        this.length -= 2;
        d[0] = d[this.length];
        d[1] = d[this.length + 1];
        for (g = 0; ; ) {
            f = 2 * g + 2;
            if (f >= this.length)
                break;
            f + 2 < this.length && d[f + 2] > d[f] && (f += 2);
            if (d[f] > d[g])
                e = d[g], d[g] = d[f], d[f] = e, e = d[g + 
                1], d[g + 1] = d[f + 1], d[f + 1] = e;
            else
                break;
            g = f
        }
        return {index: a,value: b,length: this.length}
    };
    var O = 2, C = {NONE: 0,r: 1,sx: O,A6: 3}, R = [];
    for (x = 0; 288 > x; x++)
        switch (I) {
            case 143 >= x:
                R.push([x + 48, 8]);
                break;
            case 255 >= x:
                R.push([x - 144 + 400, 9]);
                break;
            case 279 >= x:
                R.push([x - 256 + 0, 7]);
                break;
            case 287 >= x:
                R.push([x - 280 + 192, 8]);
                break;
            default:
                a("invalid literal: " + x)
        }
    h.prototype.bl = function() {
        var b, d, f, g, h = this.input;
        switch (this.Wo) {
            case 0:
                f = 0;
                for (g = h.length; f < g; ) {
                    d = z ? h.subarray(f, f + 65535) : h.slice(f, f + 65535);
                    f += d.length;
                    var k = f === 
                    g, m = G, t = m = G, t = m = G, u = this.a, v = this.b;
                    if (z) {
                        for (u = new Uint8Array(this.a.buffer); u.length <= v + d.length + 5; )
                            u = new Uint8Array(u.length << 1);
                        u.set(this.a)
                    }
                    m = k ? 1 : 0;
                    u[v++] = m | 0;
                    m = d.length;
                    t = ~m + 65536 & 65535;
                    u[v++] = m & 255;
                    u[v++] = m >>> 8 & 255;
                    u[v++] = t & 255;
                    u[v++] = t >>> 8 & 255;
                    if (z)
                        u.set(d, v), v += d.length, u = u.subarray(0, v);
                    else {
                        m = 0;
                        for (t = d.length; m < t; ++m)
                            u[v++] = d[m];
                        u.length = v
                    }
                    this.b = v;
                    this.a = u
                }
                break;
            case 1:
                f = new e(new Uint8Array(this.a.buffer), this.b);
                f.H(1, 1, I);
                f.H(1, 2, I);
                h = p(this, h);
                d = 0;
                for (k = h.length; d < k; d++)
                    if (g = h[d], 
                    e.prototype.H.apply(f, R[g]), 256 < g)
                        f.H(h[++d], h[++d], I), f.H(h[++d], 5), f.H(h[++d], h[++d], I);
                    else if (256 === g)
                        break;
                this.a = f.finish();
                this.b = this.a.length;
                break;
            case O:
                g = new e(new Uint8Array(this.a), this.b);
                var w, x, y, B = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], F, C, m = Array(19), H, u = O;
                g.H(1, 1, I);
                g.H(u, 2, I);
                h = p(this, h);
                t = r(this.lR, 15);
                F = s(t);
                u = r(this.dR, 7);
                v = s(u);
                for (w = 286; 257 < w && 0 === t[w - 1]; w--)
                    ;
                for (x = 30; 1 < x && 0 === u[x - 1]; x--)
                    ;
                var E = w, J = x;
                b = new (z ? Uint32Array : Array)(E + J);
                var M = new (z ? Uint32Array : Array)(316), 
                K, L;
                C = new (z ? Uint8Array : Array)(19);
                for (H = y = 0; H < E; H++)
                    b[y++] = t[H];
                for (H = 0; H < J; H++)
                    b[y++] = u[H];
                if (!z)
                    for (H = 0, J = C.length; H < J; ++H)
                        C[H] = 0;
                H = K = 0;
                for (J = b.length; H < J; H += y) {
                    for (y = 1; H + y < J && b[H + y] === b[H]; ++y)
                        ;
                    E = y;
                    if (0 === b[H])
                        if (3 > E)
                            for (; 0 < E--; )
                                M[K++] = 0, C[0]++;
                        else
                            for (; 0 < E; )
                                L = 138 > E ? E : 138, L > E - 3 && L < E && (L = E - 3), 10 >= L ? (M[K++] = 17, M[K++] = L - 3, C[17]++) : (M[K++] = 18, M[K++] = L - 11, C[18]++), E -= L;
                    else if (M[K++] = b[H], C[b[H]]++, E--, 3 > E)
                        for (; 0 < E--; )
                            M[K++] = b[H], C[b[H]]++;
                    else
                        for (; 0 < E; )
                            L = 6 > E ? E : 6, L > E - 3 && L < E && (L = E - 3), M[K++] = 16, M[K++] = 
                            L - 3, C[16]++, E -= L
                }
                b = z ? M.subarray(0, K) : M.slice(0, K);
                C = r(C, 7);
                for (H = 0; 19 > H; H++)
                    m[H] = C[B[H]];
                for (y = 19; 4 < y && 0 === m[y - 1]; y--)
                    ;
                B = s(C);
                g.H(w - 257, 5, I);
                g.H(x - 1, 5, I);
                g.H(y - 4, 4, I);
                for (H = 0; H < y; H++)
                    g.H(m[H], 3, I);
                H = 0;
                for (m = b.length; H < m; H++)
                    if (d = b[H], g.H(B[d], C[d], I), 16 <= d) {
                        H++;
                        switch (d) {
                            case 16:
                                k = 2;
                                break;
                            case 17:
                                k = 3;
                                break;
                            case 18:
                                k = 7;
                                break;
                            default:
                                a("invalid code: " + d)
                        }
                        g.H(b[H], k, I)
                    }
                k = [F, t];
                v = [v, u];
                d = k[0];
                k = k[1];
                u = v[0];
                F = v[1];
                v = 0;
                for (m = h.length; v < m; ++v)
                    if (f = h[v], g.H(d[f], k[f], I), 256 < f)
                        g.H(h[++v], h[++v], I), t = h[++v], 
                        g.H(u[t], F[t], I), g.H(h[++v], h[++v], I);
                    else if (256 === f)
                        break;
                this.a = g.finish();
                this.b = this.a.length;
                break;
            default:
                a("invalid compression type")
        }
        return this.a
    };
    x = [];
    var Q;
    for (Q = 3; 258 >= Q; Q++)
        F = m(), x[Q] = F[2] << 24 | F[1] << 16 | F[0];
    var U = z ? new Uint32Array(x) : x, M = C;
    u.prototype.bl = function() {
        var b, e, f, g, h = 0;
        g = this.a;
        b = $;
        switch (b) {
            case $:
                e = Math.LOG2E * Math.log(32768) - 8;
                break;
            default:
                a(Error("invalid compression method"))
        }
        e = e << 4 | b;
        g[h++] = e;
        switch (b) {
            case $:
                switch (this.Wo) {
                    case M.NONE:
                        f = 0;
                        break;
                    case M.r:
                        f = 1;
                        break;
                    case M.sx:
                        f = 2;
                        break;
                    default:
                        a(Error("unsupported compression type"))
                }
                break;
            default:
                a(Error("invalid compression method"))
        }
        b = f << 6 | 0;
        g[h++] = b | 31 - (256 * e + b) % 31;
        b = d(this.input);
        this.z.b = h;
        g = this.z.bl();
        h = g.length;
        z && (g = new Uint8Array(g.buffer), g.length <= h + 4 && (this.a = new Uint8Array(g.length + 4), this.a.set(g), g = this.a), g = g.subarray(0, h + 4));
        g[h++] = b >> 24 & 255;
        g[h++] = b >> 16 & 255;
        g[h++] = b >> 8 & 255;
        g[h++] = b & 255;
        return g
    };
    b("Zlib.Deflate", u);
    b("Zlib.Deflate.compress", function(a, b) {
        return (new u(a, b)).bl()
    });
    b("Zlib.Deflate.CompressionType", 
    M);
    b("Zlib.Deflate.CompressionType.NONE", M.NONE);
    b("Zlib.Deflate.CompressionType.FIXED", M.r);
    b("Zlib.Deflate.CompressionType.DYNAMIC", M.sx);
    var ka = 0, ba = 1, C = {pQ: ka,bQ: ba};
    t.prototype.Rx = function() {
        for (; !this.JF; ) {
            var b = v(this, 3);
            b & 1 && (this.JF = I);
            b >>>= 1;
            switch (b) {
                case 0:
                    var b = this.input, d = this.D, e = this.a, f = this.b, g = G, h = G, k = G, m = e.length, g = G;
                    this.Fg = this.g = 0;
                    g = b[d++];
                    g === G && a(Error("invalid uncompressed block header: LEN (first byte)"));
                    h = g;
                    g = b[d++];
                    g === G && a(Error("invalid uncompressed block header: LEN (second byte)"));
                    h |= g << 8;
                    g = b[d++];
                    g === G && a(Error("invalid uncompressed block header: NLEN (first byte)"));
                    k = g;
                    g = b[d++];
                    g === G && a(Error("invalid uncompressed block header: NLEN (second byte)"));
                    k |= g << 8;
                    h === ~k && a(Error("invalid uncompressed block header: length verify"));
                    d + h > b.length && a(Error("input buffer is broken"));
                    switch (this.Ix) {
                        case ka:
                            for (; f + h > e.length; ) {
                                g = m - f;
                                h -= g;
                                if (z)
                                    e.set(b.subarray(d, d + g), f), f += g, d += g;
                                else
                                    for (; g--; )
                                        e[f++] = b[d++];
                                this.b = f;
                                e = this.zh();
                                f = this.b
                            }
                            break;
                        case ba:
                            for (; f + h > e.length; )
                                e = this.zh({fa: 2});
                            break;
                        default:
                            a(Error("invalid inflate mode"))
                    }
                    if (z)
                        e.set(b.subarray(d, d + h), f), f += h, d += h;
                    else
                        for (; h--; )
                            e[f++] = b[d++];
                    this.D = d;
                    this.b = f;
                    this.a = e;
                    break;
                case 1:
                    this.Lx(ra, sa);
                    break;
                case 2:
                    y(this);
                    break;
                default:
                    a(Error("unknown BTYPE: " + b))
            }
        }
        return this.kG()
    };
    x = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    var na = z ? new Uint16Array(x) : x;
    x = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258];
    var oa = z ? new Uint16Array(x) : x;
    x = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 
        3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0];
    var ca = z ? new Uint8Array(x) : x;
    x = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
    var pa = z ? new Uint16Array(x) : x;
    x = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
    var da = z ? new Uint8Array(x) : x;
    x = new (z ? Uint8Array : Array)(288);
    F = 0;
    for (K = x.length; F < K; ++F)
        x[F] = 143 >= F ? 8 : 255 >= F ? 9 : 279 >= F ? 7 : 8;
    var ra = g(x);
    x = new (z ? Uint8Array : Array)(30);
    F = 0;
    for (K = x.length; F < K; ++F)
        x[F] = 5;
    var sa = g(x);
    t.prototype.Lx = 
    function(a, b) {
        var d = this.a, e = this.b;
        this.ea = a;
        for (var f = d.length - 258, g, h, k; 256 !== (g = w(this, a)); )
            if (256 > g)
                e >= f && (this.b = e, d = this.zh(), e = this.b), d[e++] = g;
            else
                for (g -= 257, k = oa[g], 0 < ca[g] && (k += v(this, ca[g])), g = w(this, b), h = pa[g], 0 < da[g] && (h += v(this, da[g])), e >= f && (this.b = e, d = this.zh(), e = this.b); k--; )
                    d[e] = d[e++ - h];
        for (; 8 <= this.Fg; )
            this.Fg -= 8, this.D--;
        this.b = e
    };
    t.prototype.XQ = function(a, b) {
        var d = this.a, e = this.b;
        this.ea = a;
        for (var f = d.length, g, h, k; 256 !== (g = w(this, a)); )
            if (256 > g)
                e >= f && (d = this.zh(), f = d.length), 
                d[e++] = g;
            else
                for (g -= 257, k = oa[g], 0 < ca[g] && (k += v(this, ca[g])), g = w(this, b), h = pa[g], 0 < da[g] && (h += v(this, da[g])), e + k > f && (d = this.zh(), f = d.length); k--; )
                    d[e] = d[e++ - h];
        for (; 8 <= this.Fg; )
            this.Fg -= 8, this.D--;
        this.b = e
    };
    t.prototype.zh = function() {
        var a = new (z ? Uint8Array : Array)(this.b - 32768), b = this.b - 32768, d, e, f = this.a;
        if (z)
            a.set(f.subarray(32768, a.length));
        else
            for (d = 0, e = a.length; d < e; ++d)
                a[d] = f[d + 32768];
        this.tx.push(a);
        this.Wx += a.length;
        if (z)
            f.set(f.subarray(b, b + 32768));
        else
            for (d = 0; 32768 > d; ++d)
                f[d] = f[b + d];
        this.b = 
        32768;
        return f
    };
    t.prototype.cR = function(a) {
        var b, d = this.input.length / this.D + 1 | 0, e, f, g, h = this.input, k = this.a;
        a && ("number" === typeof a.fa && (d = a.fa), "number" === typeof a.NQ && (d += a.NQ));
        2 > d ? (e = (h.length - this.D) / this.ea[2], g = e / 2 * 258 | 0, f = g < k.length ? k.length + g : k.length << 1) : f = k.length * d;
        z ? (b = new Uint8Array(f), b.set(k)) : b = k;
        return this.a = b
    };
    t.prototype.kG = function() {
        var a = 0, b = this.a, d = this.tx, e, f = new (z ? Uint8Array : Array)(this.Wx + (this.b - 32768)), g, h, k, m;
        if (0 === d.length)
            return z ? this.a.subarray(32768, this.b) : 
            this.a.slice(32768, this.b);
        g = 0;
        for (h = d.length; g < h; ++g)
            for (e = d[g], k = 0, m = e.length; k < m; ++k)
                f[a++] = e[k];
        g = 32768;
        for (h = this.b; g < h; ++g)
            f[a++] = b[g];
        this.tx = [];
        return this.buffer = f
    };
    t.prototype.TQ = function() {
        var a, b = this.b;
        z ? this.zG ? (a = new Uint8Array(b), a.set(this.a.subarray(0, b))) : a = this.a.subarray(0, b) : (this.a.length > b && (this.a.length = b), a = this.a);
        return this.buffer = a
    };
    B.prototype.Rx = function() {
        var b = this.input, e, f;
        e = this.rG.Rx();
        this.D = this.rG.D;
        this.uR && (f = (b[this.D++] << 24 | b[this.D++] << 16 | b[this.D++] << 
        8 | b[this.D++]) >>> 0, f !== d(e) && a(Error("invalid adler-32 checksum")));
        return e
    };
    b("Zlib.Inflate", B);
    b("Zlib.Inflate.BufferType", C);
    C.U4 = C.bQ;
    C.s5 = C.pQ;
    b("Zlib.Inflate.prototype.decompress", B.prototype.Rx);
    C = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    z && new Uint16Array(C);
    C = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258];
    z && new Uint16Array(C);
    C = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0];
    z && new Uint8Array(C);
    C = [1, 2, 3, 4, 5, 7, 9, 13, 
        17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
    z && new Uint16Array(C);
    C = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
    z && new Uint8Array(C);
    C = new (z ? Uint8Array : Array)(288);
    x = 0;
    for (F = C.length; x < F; ++x)
        C[x] = 143 >= x ? 8 : 255 >= x ? 9 : 279 >= x ? 7 : 8;
    g(C);
    C = new (z ? Uint8Array : Array)(30);
    x = 0;
    for (F = C.length; x < F; ++x)
        C[x] = 5;
    g(C);
    var $ = 8
}).call(this);
n = window;
n = n.D7 = n.Zlib;
n.JG = n.Deflate;
n.JG.Q9 = n.JG.compress;
n.bn = n.Inflate;
n.bn.G5 = n.bn.BufferType;
n.bn.prototype.mM = n.bn.prototype.decompress;
c.ZR = c.la.extend({ctor: function(a) {
        var b, d, e, f;
        this.data = a;
        this.Ya = 8;
        this.xF = [];
        this.jx = [];
        this.Rm = {};
        this.PD = null;
        this.text = {};
        for (e = null; ; ) {
            b = this.Hj();
            f = a = void 0;
            f = [];
            for (a = 0; 4 > a; ++a)
                f.push(String.fromCharCode(this.data[this.Ya++]));
            a = f.join("");
            switch (a) {
                case "IHDR":
                    this.width = this.Hj();
                    this.height = this.Hj();
                    this.Co = this.data[this.Ya++];
                    this.eE = this.data[this.Ya++];
                    this.Ya++;
                    this.Ya++;
                    this.Ya++;
                    break;
                case "acTL":
                    this.PD = {cga: this.Hj(),dga: this.Hj() || Infinity,frames: []};
                    break;
                case "PLTE":
                    this.xF = 
                    this.ht(b);
                    break;
                case "fcTL":
                    e && this.PD.frames.push(e);
                    this.Ya += 4;
                    e = {width: this.Hj(),height: this.Hj(),LP: this.Hj(),MP: this.Hj()};
                    a = this.oO();
                    b = this.oO() || 100;
                    e.W9 = 1E3 * a / b;
                    e.k$ = this.data[this.Ya++];
                    e.z9 = this.data[this.Ya++];
                    e.data = [];
                    break;
                case "IDAT":
                case "fdAT":
                    "fdAT" === a && (this.Ya += 4, b -= 4);
                    a = (null != e ? e.data : void 0) || this.jx;
                    for (f = 0; 0 <= b ? f < b : f > b; 0 <= b ? ++f : --f)
                        a.push(this.data[this.Ya++]);
                    break;
                case "tRNS":
                    this.Rm = {};
                    switch (this.eE) {
                        case 3:
                            this.Rm.VE = this.ht(b);
                            b = 255 - this.Rm.VE.length;
                            if (0 < b)
                                for (a = 
                                0; 0 <= b ? a < b : a > b; 0 <= b ? ++a : --a)
                                    this.Rm.VE.push(255);
                            break;
                        case 0:
                            this.Rm.hda = this.ht(b)[0];
                            break;
                        case 2:
                            this.Rm.Fha = this.ht(b)
                    }
                    break;
                case "tEXt":
                    f = this.ht(b);
                    b = f.indexOf(0);
                    a = String.fromCharCode.apply(String, f.slice(0, b));
                    this.text[a] = String.fromCharCode.apply(String, f.slice(b + 1));
                    break;
                case "IEND":
                    e && this.PD.frames.push(e);
                    a: {
                        switch (this.eE) {
                            case 0:
                            case 3:
                            case 4:
                                e = 1;
                                break a;
                            case 2:
                            case 6:
                                e = 3;
                                break a
                        }
                        e = void 0
                    }
                    this.t = e;
                    this.pN = 4 === (d = this.eE) || 6 === d;
                    d = this.t + (this.pN ? 1 : 0);
                    this.j2 = this.Co * d;
                    Uint8Array != 
                    Array && (this.jx = new Uint8Array(this.jx));
                    return;
                default:
                    this.Ya += b
            }
            this.Ya += 4;
            if (this.Ya > this.data.length)
                throw Error("Incomplete or corrupt PNG file");
        }
    },ht: function(a) {
        var b, d;
        d = [];
        for (b = 0; 0 <= a ? b < a : b > a; 0 <= a ? ++b : --b)
            d.push(this.data[this.Ya++]);
        return d
    },Hj: function() {
        var a, b, d, e;
        a = this.data[this.Ya++] << 24;
        b = this.data[this.Ya++] << 16;
        d = this.data[this.Ya++] << 8;
        e = this.data[this.Ya++];
        return a | b | d | e
    },oO: function() {
        var a, b;
        a = this.data[this.Ya++] << 8;
        b = this.data[this.Ya++];
        return a | b
    },xZ: function(a) {
        var b, 
        d, e, f, g, h, k, m, p, r, s, u, t, v, w;
        null == a && (a = this.jx);
        if (0 === a.length)
            return new Uint8Array(0);
        a = (new Zlib.bn(a, {index: 0,JP: !1})).mM();
        m = this.j2 / 8;
        u = m * this.width;
        p = new Uint8Array(u * this.height);
        h = a.length;
        for (d = r = s = 0; r < h; ) {
            switch (a[r++]) {
                case 0:
                    for (b = 0; b < u; b += 1)
                        p[d++] = a[r++];
                    break;
                case 1:
                    for (f = t = 0; t < u; f = t += 1)
                        b = a[r++], g = f < m ? 0 : p[d - m], p[d++] = (b + g) % 256;
                    break;
                case 2:
                    for (f = g = 0; g < u; f = g += 1)
                        b = a[r++], e = (f - f % m) / m, t = s && p[(s - 1) * u + e * m + f % m], p[d++] = (t + b) % 256;
                    break;
                case 3:
                    for (f = w = 0; w < u; f = w += 1)
                        b = a[r++], e = (f - f % m) / m, g = f < 
                        m ? 0 : p[d - m], t = s && p[(s - 1) * u + e * m + f % m], p[d++] = (b + Math.floor((g + t) / 2)) % 256;
                    break;
                case 4:
                    for (f = w = 0; w < u; f = w += 1)
                        b = a[r++], e = (f - f % m) / m, g = f < m ? 0 : p[d - m], 0 === s ? t = v = 0 : (t = p[(s - 1) * u + e * m + f % m], v = e && p[(s - 1) * u + (e - 1) * m + f % m]), k = g + t - v, f = Math.abs(k - g), e = Math.abs(k - t), k = Math.abs(k - v), g = f <= e && f <= k ? g : e <= k ? t : v, p[d++] = (b + g) % 256;
                    break;
                default:
                    throw Error("Invalid filter algorithm: " + a[r - 1]);
            }
            s++
        }
        return p
    },tZ: function(a, b) {
        var d, e, f, g, h, k, m, p;
        e = this.t;
        p = null;
        d = this.pN;
        this.xF.length && (p = null != (f = this.eV) ? f : this.eV = this.wZ(), e = 4, 
        d = !0);
        f = a.data || a;
        m = f.length;
        h = p || b;
        g = k = 0;
        if (1 === e)
            for (; g < m; )
                e = p ? 4 * b[g / 4] : k, k = h[e++], f[g++] = k, f[g++] = k, f[g++] = k, f[g++] = d ? h[e++] : 255, k = e;
        else
            for (; g < m; )
                e = p ? 4 * b[g / 4] : k, f[g++] = h[e++], f[g++] = h[e++], f[g++] = h[e++], f[g++] = d ? h[e++] : 255, k = e
    },wZ: function() {
        var a, b, d, e, f, g, h, k, m;
        d = this.xF;
        g = this.Rm.VE || [];
        f = new Uint8Array((g.length || 0) + d.length);
        b = h = a = e = 0;
        for (k = d.length; h < k; b = h += 3)
            f[e++] = d[b], f[e++] = d[b + 1], f[e++] = d[b + 2], f[e++] = null != (m = g[a++]) ? m : 255;
        return f
    },K2: function(a) {
        var b;
        a.width = this.width;
        a.height = 
        this.height;
        a = a.getContext("2d");
        b = a.createImageData(this.width, this.height);
        this.tZ(b, this.xZ());
        return a.putImageData(b, 0, 0)
    }});
c.z4 = {tK: !1,bm: null,jB: [],getUint8: function(a) {
        return this.bm[a]
    },getUint16: function(a) {
        return this.tK ? this.bm[a + 1] << 8 | this.bm[a] : this.bm[a] << 8 | this.bm[a + 1]
    },getUint32: function(a) {
        var b = this.bm;
        return this.tK ? b[a + 3] << 24 | b[a + 2] << 16 | b[a + 1] << 8 | b[a] : b[a] << 24 | b[a + 1] << 16 | b[a + 2] << 8 | b[a + 3]
    },hZ: function() {
        var a = this.getUint16(0);
        if (18761 === a)
            this.rF = !0;
        else if (19789 === a)
            this.rF = !1;
        else
            throw console.log(a), TypeError("Invalid byte order value.");
        return this.rF
    },E0: function() {
        if (42 !== this.getUint16(2))
            throw RangeError("You forgot your towel!");
        return !0
    },G_: function(a) {
        var b = this.k_;
        return a in b ? b[a] : null
    },E_: function(a) {
        var b = this.j_;
        if (a in b)
            return b[a];
        console.log("Unknown Field Tag:", a);
        return "Tag" + a
    },F_: function(a) {
        return -1 !== ["BYTE", "ASCII", "SBYTE", "UNDEFINED"].indexOf(a) ? 1 : -1 !== ["SHORT", "SSHORT"].indexOf(a) ? 2 : -1 !== ["LONG", "SLONG", "FLOAT"].indexOf(a) ? 4 : -1 !== ["RATIONAL", "SRATIONAL", "DOUBLE"].indexOf(a) ? 8 : null
    },H_: function(a, b, d, e) {
        a = [];
        var f = this.F_(b);
        if (4 >= f * d)
            !1 === this.rF ? a.push(e >>> 8 * (4 - f)) : a.push(e);
        else
            for (var g = 0; g < d; g++) {
                var h = 
                f * g;
                8 <= f ? -1 !== ["RATIONAL", "SRATIONAL"].indexOf(b) ? (a.push(this.getUint32(e + h)), a.push(this.getUint32(e + h + 4))) : c.log("Can't handle this field type or size") : a.push(this.IM(f, e + h))
            }
        "ASCII" === b && a.forEach(function(a, b, d) {
            d[b] = String.fromCharCode(a)
        });
        return a
    },IM: function(a, b) {
        if (0 >= a)
            c.log("No bytes requested");
        else {
            if (1 >= a)
                return this.getUint8(b);
            if (2 >= a)
                return this.getUint16(b);
            if (3 >= a)
                return this.getUint32(b) >>> 8;
            if (4 >= a)
                return this.getUint32(b);
            c.log("Too many bytes requested")
        }
    },r_: function(a, 
    b, d) {
        d = d || 0;
        b += Math.floor(d / 8);
        var e = d + a;
        a = 32 - a;
        var f, g;
        0 >= e ? console.log("No bits requested") : 8 >= e ? (f = 24 + d, g = this.getUint8(b)) : 16 >= e ? (f = 16 + d, g = this.getUint16(b)) : 32 >= e ? (f = d, g = this.getUint32(b)) : console.log("Too many bits requested");
        return {bits: g << f >>> a,byteOffset: b + Math.floor(e / 8),bitOffset: e % 8}
    },lO: function(a) {
        var b = this.getUint16(a), d = [];
        a += 2;
        for (var e = 0; e < b; a += 12, e++) {
            var f = this.getUint16(a), g = this.getUint16(a + 2), h = this.getUint32(a + 4), k = this.getUint32(a + 8), f = this.E_(f), g = this.G_(g), h = this.H_(f, 
            g, h, k);
            d[f] = {type: g,Nh: h}
        }
        this.jB.push(d);
        b = this.getUint32(a);
        0 !== b && this.lO(b)
    },om: function(a, b) {
        var d = Math.pow(2, 8 - b);
        return Math.floor(a * d + (d - 1))
    },e2: function(a, b) {
        b = b || c.Kb("canvas");
        this.bm = a;
        this.canvas = b;
        this.hZ();
        if (this.E0()) {
            var d = this.getUint32(4);
            this.jB.length = 0;
            this.lO(d);
            var e = this.jB[0], d = e.ImageWidth.Nh[0], f = e.ImageLength.Nh[0];
            this.canvas.width = d;
            this.canvas.height = f;
            var g = [], h = e.Compression ? e.Compression.Nh[0] : 1, k = e.SamplesPerPixel.Nh[0], m = [], p = 0, r = !1;
            e.BitsPerSample.Nh.forEach(function(a, 
            b) {
                m[b] = {Do: a,ex: !1,xs: void 0};
                0 === a % 8 && (m[b].ex = !0, m[b].xs = a / 8);
                p += a
            }, this);
            if (0 === p % 8)
                var r = !0, s = p / 8;
            var u = e.StripOffsets.Nh, t = u.length;
            if (e.StripByteCounts)
                var v = e.StripByteCounts.Nh;
            else if (c.log("Missing StripByteCounts!"), 1 === t)
                v = [Math.ceil(d * f * p / 8)];
            else
                throw Error("Cannot recover from missing StripByteCounts");
            for (var w = 0; w < t; w++) {
                var y = u[w];
                g[w] = [];
                for (var B = v[w], G = 0, I = 0, E = 1, z = !0, C = [], x = 0, F = 0, K = 0; G < B; G += E)
                    switch (h) {
                        case 1:
                            E = 0;
                            for (C = []; E < k; E++)
                                if (m[E].ex)
                                    C.push(this.IM(m[E].xs, y + G + m[E].xs * 
                                    E));
                                else {
                                    var L = this.r_(m[E].Do, y + G, I);
                                    C.push(L.Co);
                                    G = L.byteOffset - y;
                                    I = L.x9;
                                    throw RangeError("Cannot handle sub-byte bits per sample");
                                }
                            g[w].push(C);
                            if (r)
                                E = s;
                            else
                                throw E = 0, RangeError("Cannot handle sub-byte bits per pixel");
                            break;
                        case 32773:
                            if (z) {
                                var z = !1, J = 1, O = 1, E = this.getInt8(y + G);
                                0 <= E && 127 >= E ? J = E + 1 : -127 <= E && -1 >= E ? O = -E + 1 : z = !0
                            } else {
                                for (var R = this.getUint8(y + G), E = 0; E < O; E++) {
                                    if (m[F].ex)
                                        K = K << 8 * x | R, x++, x === m[F].xs && (C.push(K), K = x = 0, F++);
                                    else
                                        throw RangeError("Cannot handle sub-byte bits per sample");
                                    F === k && (g[w].push(C), C = [], F = 0)
                                }
                                J--;
                                0 === J && (z = !0)
                            }
                            E = 1
                    }
            }
            if (b.getContext) {
                s = this.canvas.getContext("2d");
                s.fillStyle = "rgba(255, 255, 255, 0)";
                w = e.RowsPerStrip ? e.RowsPerStrip.Nh[0] : f;
                y = g.length;
                f %= w;
                f = 0 === f ? w : f;
                G = w;
                h = 0;
                C = e.PhotometricInterpretation.Nh[0];
                J = [];
                O = 0;
                e.ExtraSamples && (J = e.ExtraSamples.Nh, O = J.length);
                if (e.ColorMap)
                    var L = e.ColorMap.Nh, Q = Math.pow(2, m[0].Do);
                for (w = 0; w < y; w++) {
                    w + 1 === y && (G = f);
                    e = g[w].length;
                    h *= w;
                    for (r = k = 0; k < G, r < e; k++)
                        for (u = 0; u < d; u++, r++) {
                            v = g[w][r];
                            z = I = B = 0;
                            t = 1;
                            if (0 < O)
                                for (B = 0; B < O; B++)
                                    if (1 === 
                                    J[B] || 2 === J[B]) {
                                        t = v[3 + B] / 256;
                                        break
                                    }
                            switch (C) {
                                case 0:
                                    if (m[0].ex)
                                        var U = Math.pow(16, 2 * m[0].xs);
                                    v.forEach(function(a, b, d) {
                                        d[b] = U - a
                                    });
                                case 1:
                                    B = I = z = this.om(v[0], m[0].Do);
                                    break;
                                case 2:
                                    B = this.om(v[0], m[0].Do);
                                    I = this.om(v[1], m[1].Do);
                                    z = this.om(v[2], m[2].Do);
                                    break;
                                case 3:
                                    if (void 0 === L)
                                        throw Error("Palette image missing color map");
                                    v = v[0];
                                    B = this.om(L[v], 16);
                                    I = this.om(L[Q + v], 16);
                                    z = this.om(L[2 * Q + v], 16);
                                    break;
                                default:
                                    throw RangeError("Unknown Photometric Interpretation:", C);
                            }
                            s.fillStyle = "rgba(" + B + ", " + I + ", " + z + 
                            ", " + t + ")";
                            s.fillRect(u, h + k, 1, 1)
                        }
                    h = G
                }
            }
            return this.canvas
        }
    },j_: {315: "Artist",258: "BitsPerSample",265: "CellLength",264: "CellWidth",320: "ColorMap",259: "Compression",33432: "Copyright",306: "DateTime",338: "ExtraSamples",266: "FillOrder",289: "FreeByteCounts",288: "FreeOffsets",291: "GrayResponseCurve",290: "GrayResponseUnit",316: "HostComputer",270: "ImageDescription",257: "ImageLength",256: "ImageWidth",271: "Make",281: "MaxSampleValue",280: "MinSampleValue",272: "Model",254: "NewSubfileType",274: "Orientation",262: "PhotometricInterpretation",
        284: "PlanarConfiguration",296: "ResolutionUnit",278: "RowsPerStrip",277: "SamplesPerPixel",305: "Software",279: "StripByteCounts",273: "StripOffsets",255: "SubfileType",263: "Threshholding",282: "XResolution",283: "YResolution",326: "BadFaxLines",327: "CleanFaxData",343: "ClipPath",328: "ConsecutiveBadFaxLines",433: "Decode",434: "DefaultImageColor",269: "DocumentName",336: "DotRange",321: "HalftoneHints",346: "Indexed",347: "JPEGTables",285: "PageName",297: "PageNumber",317: "Predictor",319: "PrimaryChromaticities",532: "ReferenceBlackWhite",
        339: "SampleFormat",559: "StripRowCounts",330: "SubIFDs",292: "T4Options",293: "T6Options",325: "TileByteCounts",323: "TileLength",324: "TileOffsets",322: "TileWidth",301: "TransferFunction",318: "WhitePoint",344: "XClipPathUnits",286: "XPosition",529: "YCbCrCoefficients",531: "YCbCrPositioning",530: "YCbCrSubSampling",345: "YClipPathUnits",287: "YPosition",37378: "ApertureValue",40961: "ColorSpace",36868: "DateTimeDigitized",36867: "DateTimeOriginal",34665: "Exif IFD",36864: "ExifVersion",33434: "ExposureTime",41728: "FileSource",
        37385: "Flash",40960: "FlashpixVersion",33437: "FNumber",42016: "ImageUniqueID",37384: "LightSource",37500: "MakerNote",37377: "ShutterSpeedValue",37510: "UserComment",33723: "IPTC",34675: "ICC Profile",700: "XMP",42112: "GDAL_METADATA",42113: "GDAL_NODATA",34377: "Photoshop"},k_: {1: "BYTE",2: "ASCII",3: "SHORT",4: "LONG",5: "RATIONAL",6: "SBYTE",7: "UNDEFINED",8: "SSHORT",9: "SLONG",10: "SRATIONAL",11: "FLOAT",12: "DOUBLE"}};
c.og = function(a, b, d, e, f, g, h, k, m, p, r, s) {
    this.Ya = a ? a : N(0, 0);
    this.sy = b ? b : N(0, 0);
    this.color = d ? d : {r: 0,g: 0,b: 0,a: 255};
    this.Cs = e ? e : {r: 0,g: 0,b: 0,a: 255};
    this.size = f || 0;
    this.lE = g || 0;
    this.rotation = h || 0;
    this.sM = k || 0;
    this.il = m || 0;
    this.atlasIndex = p || 0;
    this.Wb = r ? r : new c.og.hz;
    this.Fd = s ? s : new c.og.iz;
    this.HN = !1;
    this.Es = N(0, 0)
};
c.og.hz = function(a, b, d) {
    this.dir = a ? a : N(0, 0);
    this.radialAccel = b || 0;
    this.tangentialAccel = d || 0
};
c.og.iz = function(a, b, d, e) {
    this.Eg = a || 0;
    this.oM = b || 0;
    this.gt = d || 0;
    this.rM = e || 0
};
c.og.yu = [N(), N(), N(), N()];
c.m = c.q.extend({eC: "",jb: 0,fJ: !1,Wb: null,Fd: null,sb: "ParticleSystem",kC: N(0, 0),Dk: null,Fl: 0,lf: 0,X: null,atlasIndex: 0,em: !1,Lu: 0,Pw: null,qy: null,Yn: !1,qd: 0,duration: 0,lo: null,Ek: null,Qe: 0,dp: 0,Eg: 0,Ao: 0,wp: 0,xp: 0,um: 0,Jo: 0,sh: null,Lk: null,Be: null,pk: null,yp: 0,zp: 0,Ko: 0,Lo: 0,tm: 0,nb: 0,J: null,o: null,Qa: !1,Di: null,vs: !1,Fa: 0,Cc: null,kb: null,tc: null,Nr: null,na: null,Zc: null,ctor: function(a) {
        c.q.prototype.ctor.call(this);
        this.Fa = c.m.eb;
        this.Wb = new c.m.hz;
        this.Fd = new c.m.iz;
        this.o = {src: c.gc,T: c.fc};
        this.Dk = 
        [];
        this.lo = N(0, 0);
        this.Ek = N(0, 0);
        this.sh = c.color(255, 255, 255, 255);
        this.Lk = c.color(255, 255, 255, 255);
        this.Be = c.color(255, 255, 255, 255);
        this.pk = c.color(255, 255, 255, 255);
        this.eC = "";
        this.jb = 0;
        this.fJ = !1;
        this.kC = N(0, 0);
        this.lf = this.Fl = 0;
        this.X = null;
        this.atlasIndex = 0;
        this.em = !1;
        this.Lu = 0;
        this.Pw = c.m.zS;
        this.qy = c.m.UP;
        this.Yn = !1;
        this.nb = this.tm = this.Lo = this.Ko = this.zp = this.yp = this.Jo = this.um = this.xp = this.wp = this.Ao = this.Eg = this.dp = this.Qe = this.duration = this.qd = 0;
        this.J = null;
        this.Qa = !1;
        this.Di = c.m.Gq;
        this.vs = 
        !1;
        this.tc = [0, 0];
        this.Cc = [];
        this.kb = [];
        this.Nr = S(0, 0, 0, 0);
        this.na = !0;
        c.A === c.$ && (this.Zc = null);
        a && "number" !== typeof a ? a && this.Zk(a) : (a = a || 100, this.k3(c.m.IH), this.Va(a))
    },WE: function() {
        for (var a = this.kb, b = 0, d = this.nb; b < d; ++b) {
            var e = 6 * b, f = 4 * b;
            a[e + 0] = f + 0;
            a[e + 1] = f + 1;
            a[e + 2] = f + 2;
            a[e + 5] = f + 1;
            a[e + 4] = f + 2;
            a[e + 3] = f + 3
        }
    },uN: function(a) {
        var b = c.qb(), d = S(a.x * b, a.y * b, a.width * b, a.height * b), e = a.width, f = a.height;
        this.J && (e = this.J.pixelsWidth, f = this.J.pixelsHeight);
        if (c.A !== c.Da) {
            c.Ym ? (a = (2 * d.x + 1) / (2 * e), b = (2 * d.y + 1) / 
            (2 * f), e = a + (2 * d.width - 2) / (2 * e), d = b + (2 * d.height - 2) / (2 * f)) : (a = d.x / e, b = d.y / f, e = a + d.width / e, d = b + d.height / f);
            var f = d, d = b, b = f, g = 0, h = 0;
            this.X ? (f = this.X.textureAtlas.quads, g = this.atlasIndex, h = this.atlasIndex + this.nb) : (f = this.Cc, g = 0, h = this.nb);
            for (; g < h; g++) {
                f[g] || (f[g] = c.vI());
                var k = f[g];
                k.F.l.ea = a;
                k.F.l.fa = b;
                k.O.l.ea = e;
                k.O.l.fa = b;
                k.N.l.ea = a;
                k.N.l.fa = d;
                k.I.l.ea = e;
                k.I.l.fa = d
            }
        }
    },yE: function() {
        return this.X
    },fl: function(a) {
        if (this.X != a) {
            var b = this.X;
            if (this.X = a)
                for (var d = this.Dk, e = 0; e < this.nb; e++)
                    d[e].atlasIndex = 
                    e;
            a ? b || (this.X.textureAtlas.bV(this.Cc, this.atlasIndex), c.k.deleteBuffer(this.tc[1])) : (this.KI(), this.WE(), this.ob(b.Oa()), this.Yl())
        }
    },Ro: function() {
        return this.atlasIndex
    },MF: function(a) {
        this.atlasIndex = a
    },Xaa: function() {
        return this.Pw
    },k3: function(a) {
        this.Pw = a
    },uca: function() {
        return this.qy
    },mja: function(a) {
        this.qy = a
    },uf: function() {
        return this.Yn
    },$ba: function() {
        return this.qd
    },aja: function(a) {
        this.qd = a
    },So: function() {
        return this.duration
    },ag: function(a) {
        this.duration = a
    },p0: function() {
        return {x: this.lo.x,
            y: this.lo.y}
    },L3: function(a) {
        this.lo = a
    },GE: function() {
        return {x: this.Ek.x,y: this.Ek.y}
    },Rg: function(a) {
        this.Ek = a
    },Bba: function() {
        return this.Qe
    },Pg: function(a) {
        this.Qe = a
    },Cba: function() {
        return this.dp
    },Qg: function(a) {
        this.dp = a
    },waa: function() {
        return this.Eg
    },Kg: function(a) {
        this.Eg = a
    },xaa: function() {
        return this.Ao
    },Lg: function(a) {
        this.Ao = a
    },QM: function() {
        this.Fa !== c.m.eb && c.log("cc.ParticleBatchNode.getGravity() : Particle Mode should be Gravity");
        var a = this.Wb.gravity;
        return N(a.x, a.y)
    },cg: function(a) {
        this.Fa !== 
        c.m.eb && c.log("cc.ParticleBatchNode.setGravity() : Particle Mode should be Gravity");
        this.Wb.gravity = a
    },Yw: function() {
        this.Fa !== c.m.eb && c.log("cc.ParticleBatchNode.getSpeed() : Particle Mode should be Gravity");
        return this.Wb.speed
    },Ve: function(a) {
        this.Fa !== c.m.eb && c.log("cc.ParticleBatchNode.setSpeed() : Particle Mode should be Gravity");
        this.Wb.speed = a
    },dN: function() {
        this.Fa !== c.m.eb && c.log("cc.ParticleBatchNode.getSpeedVar() : Particle Mode should be Gravity");
        return this.Wb.speedVar
    },fg: function(a) {
        this.Fa !== 
        c.m.eb && c.log("cc.ParticleBatchNode.setSpeedVar() : Particle Mode should be Gravity");
        this.Wb.speedVar = a
    },iN: function() {
        this.Fa !== c.m.eb && c.log("cc.ParticleBatchNode.getTangentialAccel() : Particle Mode should be Gravity");
        return this.Wb.tangentialAccel
    },Lj: function(a) {
        this.Fa !== c.m.eb && c.log("cc.ParticleBatchNode.setTangentialAccel() : Particle Mode should be Gravity");
        this.Wb.tangentialAccel = a
    },jN: function() {
        this.Fa !== c.m.eb && c.log("cc.ParticleBatchNode.getTangentialAccelVar() : Particle Mode should be Gravity");
        return this.Wb.tangentialAccelVar
    },Mj: function(a) {
        this.Fa !== c.m.eb && c.log("cc.ParticleBatchNode.setTangentialAccelVar() : Particle Mode should be Gravity");
        this.Wb.tangentialAccelVar = a
    },XM: function() {
        this.Fa !== c.m.eb && c.log("cc.ParticleBatchNode.getRadialAccel() : Particle Mode should be Gravity");
        return this.Wb.radialAccel
    },dg: function(a) {
        this.Fa !== c.m.eb && c.log("cc.ParticleBatchNode.setRadialAccel() : Particle Mode should be Gravity");
        this.Wb.radialAccel = a
    },YM: function() {
        this.Fa !== c.m.eb && c.log("cc.ParticleBatchNode.getRadialAccelVar() : Particle Mode should be Gravity");
        return this.Wb.radialAccelVar
    },eg: function(a) {
        this.Fa !== c.m.eb && c.log("cc.ParticleBatchNode.setRadialAccelVar() : Particle Mode should be Gravity");
        this.Wb.radialAccelVar = a
    },h0: function() {
        this.Fa !== c.m.eb && c.log("cc.ParticleBatchNode.getRotationIsDir() : Particle Mode should be Gravity");
        return this.Wb.rotationIsDir
    },G3: function(a) {
        this.Fa !== c.m.eb && c.log("cc.ParticleBatchNode.setRotationIsDir() : Particle Mode should be Gravity");
        this.Wb.rotationIsDir = a
    },gN: function() {
        this.Fa !== c.m.$e && c.log("cc.ParticleBatchNode.getStartRadius() : Particle Mode should be Radius");
        return this.Fd.startRadius
    },gP: function(a) {
        this.Fa !== c.m.$e && c.log("cc.ParticleBatchNode.setStartRadius() : Particle Mode should be Radius");
        this.Fd.startRadius = a
    },hN: function() {
        this.Fa !== c.m.$e && c.log("cc.ParticleBatchNode.getStartRadiusVar() : Particle Mode should be Radius");
        return this.Fd.startRadiusVar
    },hP: function(a) {
        this.Fa !== c.m.$e && c.log("cc.ParticleBatchNode.setStartRadiusVar() : Particle Mode should be Radius");
        this.Fd.startRadiusVar = a
    },NM: function() {
        this.Fa !== c.m.$e && c.log("cc.ParticleBatchNode.getEndRadius() : Particle Mode should be Radius");
        return this.Fd.endRadius
    },NO: function(a) {
        this.Fa !== c.m.$e && c.log("cc.ParticleBatchNode.setEndRadius() : Particle Mode should be Radius");
        this.Fd.endRadius = a
    },OM: function() {
        this.Fa !== c.m.$e && c.log("cc.ParticleBatchNode.getEndRadiusVar() : Particle Mode should be Radius");
        return this.Fd.endRadiusVar
    },OO: function(a) {
        this.Fa !== c.m.$e && c.log("cc.ParticleBatchNode.setEndRadiusVar() : Particle Mode should be Radius");
        this.Fd.endRadiusVar = a
    },ZM: function() {
        this.Fa !== c.m.$e && c.log("cc.ParticleBatchNode.getRotatePerSecond() : Particle Mode should be Radius");
        return this.Fd.dy
    },cP: function(a) {
        this.Fa !== c.m.$e && c.log("cc.ParticleBatchNode.setRotatePerSecond() : Particle Mode should be Radius");
        this.Fd.dy = a
    },$M: function() {
        this.Fa !== c.m.$e && c.log("cc.ParticleBatchNode.getRotatePerSecondVar() : Particle Mode should be Radius");
        return this.Fd.ey
    },dP: function(a) {
        this.Fa !== c.m.$e && c.log("cc.ParticleBatchNode.setRotatePerSecondVar() : Particle Mode should be Radius");
        this.Fd.ey = a
    },up: function(a, b) {
        this.em = !0;
        c.q.prototype.up.call(this, a, b)
    },VF: function(a) {
        this.em = 
        !0;
        c.q.prototype.VF.call(this, a)
    },ot: function(a) {
        this.em = !0;
        c.q.prototype.ot.call(this, a)
    },pt: function(a) {
        this.em = !0;
        c.q.prototype.pt.call(this, a)
    },xca: function() {
        return this.wp
    },Sg: function(a) {
        this.wp = a
    },yca: function() {
        return this.xp
    },Tg: function(a) {
        this.xp = a
    },bba: function() {
        return this.um
    },Og: function(a) {
        this.um = a
    },cba: function() {
        return this.Jo
    },m3: function(a) {
        this.Jo = a
    },Zw: function() {
        return c.color(this.sh.r, this.sh.g, this.sh.b, this.sh.a)
    },We: function(a) {
        this.sh = c.color(a)
    },fN: function() {
        return c.color(this.Lk.r, 
        this.Lk.g, this.Lk.b, this.Lk.a)
    },gg: function(a) {
        this.Lk = c.color(a)
    },Uw: function() {
        return c.color(this.Be.r, this.Be.g, this.Be.b, this.Be.a)
    },Ue: function(a) {
        this.Be = c.color(a)
    },MM: function() {
        return c.color(this.pk.r, this.pk.g, this.pk.b, this.pk.a)
    },bg: function(a) {
        this.pk = c.color(a)
    },zca: function() {
        return this.yp
    },N3: function(a) {
        this.yp = a
    },Aca: function() {
        return this.zp
    },O3: function(a) {
        this.zp = a
    },dba: function() {
        return this.Ko
    },n3: function(a) {
        this.Ko = a
    },eba: function() {
        return this.Lo
    },o3: function(a) {
        this.Lo = 
        a
    },$aa: function() {
        return this.tm
    },Mg: function(a) {
        this.tm = a
    },t0: function() {
        return this.nb
    },R3: function(a) {
        if (c.A === c.Da)
            this.nb = 200 > a ? a : 200;
        else {
            if (a > this.Lu) {
                var b = c.Ab.BYTES_PER_ELEMENT;
                this.kb = new Uint16Array(6 * a);
                var d = new ArrayBuffer(a * b), e = this.Dk;
                e.length = 0;
                for (var f = this.Cc, g = f.length = 0; g < a; g++)
                    e[g] = new c.og, f[g] = new c.Ab(null, null, null, null, d, g * b);
                this.nb = this.Lu = a;
                if (this.X)
                    for (b = 0; b < a; b++)
                        e[b].atlasIndex = b;
                this.Zc = d;
                this.WE();
                this.Yl();
                this.J && this.uN(S(0, 0, this.J.width, this.J.height))
            } else
                this.nb = 
                a;
            this.M2()
        }
    },Oa: function() {
        return this.J
    },ob: function(a) {
        a.uc ? this.bG(a, S(0, 0, a.width, a.height)) : (this.na = !1, a.Wd(function(a) {
            this.na = !0;
            this.bG(a, S(0, 0, a.width, a.height))
        }, this))
    },Ah: function() {
        return this.o
    },Te: function(a, b) {
        if (void 0 === b)
            this.o != a && (this.o = a, this.Tf());
        else if (this.o.src != a || this.o.T != b)
            this.o = {src: a,T: b}, this.Tf()
    },re: function() {
        return this.Qa
    },Hd: function(a) {
        this.Qa = a
    },Y0: function() {
        return this.o.src == c.SRC_ALPHA && this.o.T == c.ONE || this.o.src == c.ONE && this.o.T == c.ONE
    },Kh: function(a) {
        var b = 
        this.o;
        a ? (b.src = c.SRC_ALPHA, b.T = c.ONE) : c.A === c.$ ? this.J && !this.J.ui() ? (b.src = c.SRC_ALPHA, b.T = c.ONE_MINUS_SRC_ALPHA) : (b.src = c.gc, b.T = c.fc) : (b.src = c.gc, b.T = c.fc)
    },dca: function() {
        return this.Di
    },cja: function(a) {
        this.Di = a
    },tda: function() {
        return this.vs
    },Wha: function(a) {
        this.vs = a
    },aba: function() {
        return this.Fa
    },Ng: function(a) {
        this.Fa = a
    },M: function() {
        return this.Va(150)
    },Zk: function(a) {
        this.eC = a;
        a = c.W.Dd(a);
        return a ? this.J0(a, "") : (c.log("cc.ParticleSystem.initWithFile(): Particles: file not found"), !1)
    },
    s_: function() {
        return S(0, 0, c.Xa.width, c.Xa.height)
    },J0: function(a) {
        var b = !1, d = null, d = this.zY, e = parseInt(d("maxParticles", a));
        if (this.Va(e)) {
            this.Eg = parseFloat(d("angle", a));
            this.Ao = parseFloat(d("angleVariance", a));
            this.duration = parseFloat(d("duration", a));
            this.o.src = parseInt(d("blendFuncSource", a));
            this.o.T = parseInt(d("blendFuncDestination", a));
            b = this.sh;
            b.r = 255 * parseFloat(d("startColorRed", a));
            b.g = 255 * parseFloat(d("startColorGreen", a));
            b.b = 255 * parseFloat(d("startColorBlue", a));
            b.a = 255 * parseFloat(d("startColorAlpha", 
            a));
            b = this.Lk;
            b.r = 255 * parseFloat(d("startColorVarianceRed", a));
            b.g = 255 * parseFloat(d("startColorVarianceGreen", a));
            b.b = 255 * parseFloat(d("startColorVarianceBlue", a));
            b.a = 255 * parseFloat(d("startColorVarianceAlpha", a));
            b = this.Be;
            b.r = 255 * parseFloat(d("finishColorRed", a));
            b.g = 255 * parseFloat(d("finishColorGreen", a));
            b.b = 255 * parseFloat(d("finishColorBlue", a));
            b.a = 255 * parseFloat(d("finishColorAlpha", a));
            b = this.pk;
            b.r = 255 * parseFloat(d("finishColorVarianceRed", a));
            b.g = 255 * parseFloat(d("finishColorVarianceGreen", 
            a));
            b.b = 255 * parseFloat(d("finishColorVarianceBlue", a));
            b.a = 255 * parseFloat(d("finishColorVarianceAlpha", a));
            this.wp = parseFloat(d("startParticleSize", a));
            this.xp = parseFloat(d("startParticleSizeVariance", a));
            this.um = parseFloat(d("finishParticleSize", a));
            this.Jo = parseFloat(d("finishParticleSizeVariance", a));
            this.U(parseFloat(d("sourcePositionx", a)), parseFloat(d("sourcePositiony", a)));
            this.Ek.x = parseFloat(d("sourcePositionVariancex", a));
            this.Ek.y = parseFloat(d("sourcePositionVariancey", a));
            this.yp = parseFloat(d("rotationStart", 
            a));
            this.zp = parseFloat(d("rotationStartVariance", a));
            this.Ko = parseFloat(d("rotationEnd", a));
            this.Lo = parseFloat(d("rotationEndVariance", a));
            this.Fa = parseInt(d("emitterType", a));
            if (this.Fa == c.m.eb)
                b = this.Wb, b.gravity.x = parseFloat(d("gravityx", a)), b.gravity.y = parseFloat(d("gravityy", a)), b.speed = parseFloat(d("speed", a)), b.speedVar = parseFloat(d("speedVariance", a)), e = d("radialAcceleration", a), b.radialAccel = e ? parseFloat(e) : 0, e = d("radialAccelVariance", a), b.radialAccelVar = e ? parseFloat(e) : 0, e = d("tangentialAcceleration", 
                a), b.tangentialAccel = e ? parseFloat(e) : 0, e = d("tangentialAccelVariance", a), b.tangentialAccelVar = e ? parseFloat(e) : 0, e = d("rotationIsDir", a).toLowerCase(), b.rotationIsDir = null != e && ("true" === e || "1" === e);
            else if (this.Fa == c.m.$e)
                b = this.Fd, b.startRadius = parseFloat(d("maxRadius", a)), b.startRadiusVar = parseFloat(d("maxRadiusVariance", a)), b.endRadius = parseFloat(d("minRadius", a)), b.endRadiusVar = 0, b.dy = parseFloat(d("rotatePerSecond", a)), b.ey = parseFloat(d("rotatePerSecondVariance", a));
            else
                return c.log("cc.ParticleSystem.initWithDictionary(): Invalid emitterType in config file"), 
                !1;
            this.Qe = parseFloat(d("particleLifespan", a));
            this.dp = parseFloat(d("particleLifespanVariance", a));
            this.tm = this.nb / this.Qe;
            if (!this.X)
                if (this.Qa = !1, b = d("textureFileName", a), b = c.path.Eo(this.eC, b), e = c.Ba.Pm(b))
                    this.ob(e);
                else if ((a = d("textureImageData", a)) && 0 == a.length) {
                    e = c.Ba.Ac(b);
                    if (!e)
                        return !1;
                    this.ob(e)
                } else {
                    d = c.FP(a, 1);
                    if (!d)
                        return c.log("cc.ParticleSystem: error decoding or ungzipping textureImageData"), !1;
                    a = c.N_(d);
                    if (a !== c.NG && a !== c.Ty)
                        return c.log("cc.ParticleSystem: unknown image format with Data"), 
                        !1;
                    e = c.Kb("canvas");
                    a === c.Ty ? (new c.ZR(d)).K2(e) : c.z4.e2(d, e);
                    c.Ba.eZ(b, e);
                    (a = c.Ba.Pm(b)) || c.log("cc.ParticleSystem.initWithDictionary() : error loading the texture");
                    this.ob(a)
                }
            b = !0
        }
        return b
    },Va: function(a) {
        this.nb = a;
        var b, d = this.Dk;
        for (b = d.length = 0; b < a; b++)
            d[b] = new c.og;
        if (!d)
            return c.log("Particle system: not enough memory"), !1;
        this.Lu = a;
        if (this.X)
            for (b = 0; b < this.nb; b++)
                d[b].atlasIndex = b;
        this.Yn = !0;
        this.o.src = c.gc;
        this.o.T = c.fc;
        this.Di = c.m.Gq;
        this.Fa = c.m.eb;
        this.em = this.vs = !1;
        this.EO(1);
        if (c.A === 
        c.$) {
            if (!this.KI())
                return !1;
            this.WE();
            this.Yl();
            this.shaderProgram = c.Jd.mc(c.Qi)
        }
        return !0
    },a$: function() {
        this.EP()
    },EY: function() {
        if (this.a1())
            return !1;
        var a, b = this.Dk;
        c.A === c.Da ? this.qd < b.length ? a = b[this.qd] : (a = new c.og, b.push(a)) : a = b[this.qd];
        this.H0(a);
        ++this.qd;
        return !0
    },H0: function(a) {
        var b = c.w2;
        a.il = this.Qe + this.dp * b();
        a.il = Math.max(0, a.il);
        a.Ya.x = this.lo.x + this.Ek.x * b();
        a.Ya.y = this.lo.y + this.Ek.y * b();
        var d, e;
        d = this.sh;
        var f = this.Lk, g = this.Be;
        e = this.pk;
        c.A === c.Da ? (d = c.color(c.Rc(d.r + f.r * b(), 
        0, 255), c.Rc(d.g + f.g * b(), 0, 255), c.Rc(d.b + f.b * b(), 0, 255), c.Rc(d.a + f.a * b(), 0, 255)), e = c.color(c.Rc(g.r + e.r * b(), 0, 255), c.Rc(g.g + e.g * b(), 0, 255), c.Rc(g.b + e.b * b(), 0, 255), c.Rc(g.a + e.a * b(), 0, 255))) : (d = {r: c.Rc(d.r + f.r * b(), 0, 255),g: c.Rc(d.g + f.g * b(), 0, 255),b: c.Rc(d.b + f.b * b(), 0, 255),a: c.Rc(d.a + f.a * b(), 0, 255)}, e = {r: c.Rc(g.r + e.r * b(), 0, 255),g: c.Rc(g.g + e.g * b(), 0, 255),b: c.Rc(g.b + e.b * b(), 0, 255),a: c.Rc(g.a + e.a * b(), 0, 255)});
        a.color = d;
        f = a.Cs;
        g = a.il;
        f.r = (e.r - d.r) / g;
        f.g = (e.g - d.g) / g;
        f.b = (e.b - d.b) / g;
        f.a = (e.a - d.a) / g;
        d = this.wp + 
        this.xp * b();
        d = Math.max(0, d);
        a.size = d;
        this.um === c.m.pg ? a.lE = 0 : (e = this.um + this.Jo * b(), e = Math.max(0, e), a.lE = (e - d) / g);
        d = this.yp + this.zp * b();
        e = this.Ko + this.Lo * b();
        a.rotation = d;
        a.sM = (e - d) / g;
        this.Di == c.m.Gq ? a.sy = this.Lw(this.kC) : this.Di == c.m.Xz && (a.sy.x = this.xa.x, a.sy.y = this.xa.y);
        d = c.Vf(this.Eg + this.Ao * b());
        if (this.Fa === c.m.eb)
            g = this.Wb, e = a.Wb, f = g.speed + g.speedVar * b(), e.dir.x = Math.cos(d), e.dir.y = Math.sin(d), c.kp(e.dir, f), e.radialAccel = g.radialAccel + g.radialAccelVar * b(), e.tangentialAccel = g.tangentialAccel + 
            g.tangentialAccelVar * b(), g.rotationIsDir && (a.rotation = -c.CF(c.c2(e.dir)));
        else {
            e = this.Fd;
            a = a.Fd;
            var f = e.startRadius + e.startRadiusVar * b(), h = e.endRadius + e.endRadiusVar * b();
            a.gt = f;
            a.rM = e.endRadius === c.m.AS ? 0 : (h - f) / g;
            a.Eg = d;
            a.oM = c.Vf(e.dy + e.ey * b())
        }
    },p4: function() {
        this.Yn = !1;
        this.jb = this.duration;
        this.Fl = 0
    },M2: function() {
        this.Yn = !0;
        this.jb = 0;
        var a = this.Dk;
        for (this.lf = 0; this.lf < this.qd; ++this.lf)
            a[this.lf].il = 0
    },a1: function() {
        return this.qd >= this.nb
    },H4: function(a, b) {
        var d = null;
        this.X ? (d = this.X.textureAtlas.quads[this.atlasIndex + 
        a.atlasIndex], this.X.textureAtlas.dirty = !0) : d = this.Cc[this.lf];
        var e, f, g, h;
        this.Qa ? (e = 0 | a.color.r * a.color.a / 255, f = 0 | a.color.g * a.color.a / 255, g = 0 | a.color.b * a.color.a / 255) : (e = 0 | a.color.r, f = 0 | a.color.g, g = 0 | a.color.b);
        h = 0 | a.color.a;
        var k = d.F.t;
        k.r = e;
        k.g = f;
        k.b = g;
        k.a = h;
        k = d.O.t;
        k.r = e;
        k.g = f;
        k.b = g;
        k.a = h;
        k = d.N.t;
        k.r = e;
        k.g = f;
        k.b = g;
        k.a = h;
        k = d.I.t;
        k.r = e;
        k.g = f;
        k.b = g;
        k.a = h;
        e = a.size / 2;
        if (a.rotation) {
            f = -e;
            g = -e;
            h = b.x;
            var k = b.y, m = -c.Vf(a.rotation), p = Math.cos(m), m = Math.sin(m);
            d.F.i.x = f * p - g * m + h;
            d.F.i.y = f * m + g * p + k;
            d.O.i.x = 
            e * p - g * m + h;
            d.O.i.y = e * m + g * p + k;
            d.N.i.x = f * p - e * m + h;
            d.N.i.y = f * m + e * p + k;
            d.I.i.x = e * p - e * m + h;
            d.I.i.y = e * m + e * p + k
        } else
            d.F.i.x = b.x - e, d.F.i.y = b.y - e, d.O.i.x = b.x + e, d.O.i.y = b.y - e, d.N.i.x = b.x - e, d.N.i.y = b.y + e, d.I.i.x = b.x + e, d.I.i.y = b.y + e
    },p2: function() {
        if (c.A === c.$) {
            var a = c.k;
            a.bindBuffer(a.ARRAY_BUFFER, this.tc[0]);
            a.bufferData(a.ARRAY_BUFFER, this.Zc, a.DYNAMIC_DRAW)
        }
    },update: function(a) {
        if (this.Yn && this.tm) {
            var b = 1 / this.tm;
            this.qd < this.nb && (this.Fl += a);
            for (; this.qd < this.nb && this.Fl > b; )
                this.EY(), this.Fl -= b;
            this.jb += a;
            -1 != this.duration && this.duration < this.jb && this.p4()
        }
        this.lf = 0;
        b = c.og.yu[0];
        this.Di == c.m.Gq ? c.Gj(b, this.Lw(this.kC)) : this.Di == c.m.Xz && (b.x = this.xa.x, b.y = this.xa.y);
        if (this.yc) {
            for (var d = c.og.yu[1], e = c.og.yu[2], f = c.og.yu[3], g = this.Dk; this.lf < this.qd; ) {
                c.Ux(d);
                c.Ux(e);
                c.Ux(f);
                var h = g[this.lf];
                h.il -= a;
                if (0 < h.il) {
                    if (this.Fa == c.m.eb) {
                        var k = f, m = d, p = e;
                        h.Ya.x || h.Ya.y ? (c.Gj(m, h.Ya), c.a2(m)) : c.Ux(m);
                        c.Gj(p, m);
                        c.kp(m, h.Wb.radialAccel);
                        var r = p.x;
                        p.x = -p.y;
                        p.y = r;
                        c.kp(p, h.Wb.tangentialAccel);
                        c.Gj(k, m);
                        c.Sx(k, p);
                        c.Sx(k, this.Wb.gravity);
                        c.kp(k, a);
                        c.Sx(h.Wb.dir, k);
                        c.Gj(k, h.Wb.dir);
                        c.kp(k, a);
                        c.Sx(h.Ya, k)
                    } else
                        k = h.Fd, k.Eg += k.oM * a, k.gt += k.rM * a, h.Ya.x = -Math.cos(k.Eg) * k.gt, h.Ya.y = -Math.sin(k.Eg) * k.gt;
                    this.fJ && c.A !== c.Da || (h.color.r += h.Cs.r * a, h.color.g += h.Cs.g * a, h.color.b += h.Cs.b * a, h.color.a += h.Cs.a * a, h.HN = !0);
                    h.size += h.lE * a;
                    h.size = Math.max(0, h.size);
                    h.rotation += h.sM * a;
                    k = d;
                    this.Di == c.m.Gq || this.Di == c.m.Xz ? (m = e, c.Gj(m, b), c.kO(m, h.sy), c.Gj(k, h.Ya), c.kO(k, m)) : c.Gj(k, h.Ya);
                    this.X && (k.x += this.xa.x, k.y += this.xa.y);
                    c.A == 
                    c.$ ? this.H4(h, k) : c.Gj(h.Es, k);
                    ++this.lf
                } else if (h = h.atlasIndex, this.lf !== this.qd - 1 && (k = g[this.lf], g[this.lf] = g[this.qd - 1], g[this.qd - 1] = k), this.X && (this.X.CZ(this.atlasIndex + h), g[this.qd - 1].atlasIndex = h), --this.qd, 0 == this.qd && this.vs) {
                    this.EP();
                    this.Rb.removeChild(this, !0);
                    return
                }
            }
            this.em = !1
        }
        this.X || this.p2()
    },K4: function() {
        this.update(0)
    },zY: function(a, b) {
        if (b) {
            var d = b[a];
            return null != d ? d : ""
        }
        return ""
    },Tf: function() {
        if (this.X)
            c.log("Can't change blending functions when the particle is being batched");
        else {
            var a = this.J;
            if (a && a instanceof c.da) {
                this.Qa = !1;
                var b = this.o;
                b.src == c.gc && b.T == c.fc && (a.ui() ? this.Qa = !0 : (b.src = c.SRC_ALPHA, b.T = c.ONE_MINUS_SRC_ALPHA))
            }
        }
    },j: function() {
        var a = new c.m;
        if (a.Va(this.nb)) {
            a.Kg(this.Eg);
            a.Lg(this.Ao);
            a.ag(this.So());
            var b = this.Ah();
            a.Te(b.src, b.T);
            a.We(this.Zw());
            a.gg(this.fN());
            a.Ue(this.Uw());
            a.bg(this.MM());
            a.Sg(this.wp);
            a.Tg(this.xp);
            a.Og(this.um);
            a.m3(this.Jo);
            a.U(N(this.x, this.y));
            a.Rg(N(this.GE().x, this.GE().y));
            a.N3(this.yp || 0);
            a.O3(this.zp || 0);
            a.n3(this.Ko || 
            0);
            a.o3(this.Lo || 0);
            a.Ng(this.Fa);
            this.Fa == c.m.eb ? (b = this.QM(), a.cg(N(b.x, b.y)), a.Ve(this.Yw()), a.fg(this.dN()), a.dg(this.XM()), a.eg(this.YM()), a.Lj(this.iN()), a.Mj(this.jN())) : this.Fa == c.m.$e && (a.gP(this.gN()), a.hP(this.hN()), a.NO(this.NM()), a.OO(this.OM()), a.cP(this.ZM()), a.dP(this.$M()));
            a.Pg(this.Qe);
            a.Qg(this.dp);
            a.Mg(this.tm);
            if (!this.X && (a.Hd(this.re()), b = this.Oa())) {
                var d = b.Ch();
                a.bG(b, S(0, 0, d.width, d.height))
            }
        }
        return a
    },i3: function(a) {
        var b = a.Mf;
        0 == b.x && 0 == b.y || c.log("cc.ParticleSystem.setDisplayFrame(): QuadParticle only supports SpriteFrames with no offsets");
        c.A === c.$ && (this.J && a.Oa().Vd == this.J.Vd || this.ob(a.Oa()))
    },bG: function(a, b) {
        var d = this.J;
        c.A === c.$ ? d && a.Vd == d.Vd || d == a || (this.J = a, this.Tf()) : d && a == d || d == a || (this.J = a, this.Tf());
        this.Nr = b;
        this.uN(b)
    },Z: function(a) {
        this.na && !this.X && (c.A === c.Da ? this.El(a) : this.Wi(a), c.Xf++)
    },El: function(a) {
        a = a || c.k;
        a.save();
        a.globalCompositeOperation = this.Y0() ? "lighter" : "source-over";
        for (var b = 0; b < this.qd; b++) {
            var d = this.Dk[b], e = 0 | 0.5 * d.size;
            if (this.Pw == c.m.IH) {
                if (e = this.J.Bb, e.width && e.height) {
                    a.save();
                    a.globalAlpha = 
                    d.color.a / 255;
                    a.translate(0 | d.Es.x, -(0 | d.Es.y));
                    var f = 4 * Math.floor(d.size / 4), g = this.Nr.width, h = this.Nr.height;
                    a.scale(Math.max(1 / g * f, 1E-6), Math.max(1 / h * f, 1E-6));
                    d.rotation && a.rotate(c.Vf(d.rotation));
                    a.translate(-(0 | g / 2), -(0 | h / 2));
                    d.HN && (f = c.Ba.$w(e)) && (f.yt || (f.yt = c.Kb("canvas"), f.yt.width = e.width, f.yt.height = e.height), c.Po(e, f, d.color, this.Nr, f.yt), e = f.yt);
                    a.drawImage(e, 0, 0);
                    a.restore()
                }
            } else
                a.save(), a.globalAlpha = d.color.a / 255, a.translate(0 | d.Es.x, -(0 | d.Es.y)), this.qy == c.m.BS ? (d.rotation && a.rotate(c.Vf(d.rotation)), 
                c.Ae.QZ(a, e, d.color)) : c.Ae.JZ(a, e, d.color), a.restore()
        }
        a.restore()
    },Wi: function(a) {
        this.J && (a = a || c.k, this.Fb.Jc(), this.Fb.Ye(), c.qe(this.J), c.mN(this.o.src, this.o.T), c.Gc(c.yl), a.bindBuffer(a.ARRAY_BUFFER, this.tc[0]), a.vertexAttribPointer(c.pb, 3, a.FLOAT, !1, 24, 0), a.vertexAttribPointer(c.we, 4, a.UNSIGNED_BYTE, !0, 24, 12), a.vertexAttribPointer(c.ud, 2, a.FLOAT, !1, 24, 16), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.tc[1]), a.drawElements(a.TRIANGLES, 6 * this.lf, a.UNSIGNED_SHORT, 0))
    },Hfa: function() {
        c.Mz || this.Yl()
    },
    M8: function() {
    },Yl: function() {
        if (c.A != c.Da) {
            var a = c.k;
            this.tc[0] = a.createBuffer();
            a.bindBuffer(a.ARRAY_BUFFER, this.tc[0]);
            a.bufferData(a.ARRAY_BUFFER, this.Zc, a.DYNAMIC_DRAW);
            this.tc[1] = a.createBuffer();
            a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.tc[1]);
            a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.kb, a.STATIC_DRAW)
        }
    },KI: function() {
        if (c.A === c.Da)
            return !0;
        if (this.X)
            return c.log("cc.ParticleSystem._allocMemory(): Memory should not be allocated when not using batchNode"), !1;
        var a = c.Ab.BYTES_PER_ELEMENT, b = this.nb, 
        d = this.Cc;
        d.length = 0;
        this.kb = new Uint16Array(6 * b);
        for (var e = new ArrayBuffer(a * b), f = 0; f < b; f++)
            d[f] = new c.Ab(null, null, null, null, e, f * a);
        if (!d || !this.kb)
            return c.log("cocos2d: Particle system: not enough memory"), !1;
        this.Zc = e;
        return !0
    }});
n = c.m.prototype;
c.f(n, "opacityModifyRGB", n.re, n.Hd);
c.f(n, "batchNode", n.yE, n.fl);
c.f(n, "active", n.uf);
c.f(n, "sourcePos", n.p0, n.L3);
c.f(n, "posVar", n.GE, n.Rg);
c.f(n, "gravity", n.QM, n.cg);
c.f(n, "speed", n.Yw, n.Ve);
c.f(n, "speedVar", n.dN, n.fg);
c.f(n, "tangentialAccel", n.iN, n.Lj);
c.f(n, "tangentialAccelVar", n.jN, n.Mj);
c.f(n, "radialAccel", n.XM, n.dg);
c.f(n, "radialAccelVar", n.YM, n.eg);
c.f(n, "rotationIsDir", n.h0, n.G3);
c.f(n, "startRadius", n.gN, n.gP);
c.f(n, "startRadiusVar", n.hN, n.hP);
c.f(n, "endRadius", n.NM, n.NO);
c.f(n, "endRadiusVar", n.OM, n.OO);
c.f(n, "rotatePerS", n.ZM, n.cP);
c.f(n, "rotatePerSVar", n.$M, n.dP);
c.f(n, "startColor", n.Zw, n.We);
c.f(n, "startColorVar", n.fN, n.gg);
c.f(n, "endColor", n.Uw, n.Ue);
c.f(n, "endColorVar", n.MM, n.bg);
c.f(n, "totalParticles", n.t0, n.R3);
c.f(n, "texture", n.Oa, n.ob);
c.m.create = function(a) {
    return new c.m(a)
};
c.m.hz = function(a, b, d, e, f, g, h, k) {
    this.gravity = a ? a : N(0, 0);
    this.speed = b || 0;
    this.speedVar = d || 0;
    this.tangentialAccel = e || 0;
    this.tangentialAccelVar = f || 0;
    this.radialAccel = g || 0;
    this.radialAccelVar = h || 0;
    this.rotationIsDir = k || !1
};
c.m.iz = function(a, b, d, e, f, g) {
    this.startRadius = a || 0;
    this.startRadiusVar = b || 0;
    this.endRadius = d || 0;
    this.endRadiusVar = e || 0;
    this.dy = f || 0;
    this.ey = g || 0
};
c.m.zS = 0;
c.m.IH = 1;
c.m.BS = 0;
c.m.UP = 1;
c.m.Oh = -1;
c.m.pg = -1;
c.m.AS = -1;
c.m.eb = 0;
c.m.$e = 1;
c.m.Gq = 0;
c.m.Xz = 1;
c.m.p7 = 2;
c.lH = c.m.extend({M: function() {
        return this.Va(c.A === c.$ ? 300 : 150)
    },Va: function(a) {
        return c.m.prototype.Va.call(this, a) ? (this.ag(c.m.Oh), this.Ng(c.m.eb), this.cg(N(0, 0)), this.dg(0), this.eg(0), this.Ve(60), this.fg(20), this.Kg(90), this.Lg(10), this.U(c.C.K.width / 2, 60), this.Rg(N(40, 20)), this.Pg(3), this.Qg(0.25), this.Sg(54), this.Tg(10), this.Og(c.m.pg), this.Mg(this.nb / this.Qe), this.We(c.color(194, 64, 31, 255)), this.gg(c.color(0, 0, 0, 0)), this.Ue(c.color(0, 0, 0, 255)), this.bg(c.color(0, 0, 0, 0)), this.Kh(!0), !0) : !1
    }});
c.lH.create = function() {
    var a = new c.lH;
    return a.M() ? a : null
};
c.mH = c.m.extend({M: function() {
        return this.Va(c.A === c.$ ? 1500 : 150)
    },Va: function(a) {
        return c.m.prototype.Va.call(this, a) ? (this.ag(c.m.Oh), this.Ng(c.m.eb), this.cg(N(0, -90)), this.dg(0), this.eg(0), this.Ve(180), this.fg(50), a = c.C.K, this.U(a.width / 2, a.height / 2), this.Kg(90), this.Lg(20), this.Pg(3.5), this.Qg(1), this.Mg(this.nb / this.Qe), this.We(c.color(128, 128, 128, 255)), this.gg(c.color(128, 128, 128, 255)), this.Ue(c.color(26, 26, 26, 51)), this.bg(c.color(26, 26, 26, 51)), this.Sg(8), this.Tg(2), this.Og(c.m.pg), this.Kh(!1), 
        !0) : !1
    }});
c.mH.create = function() {
    var a = new c.mH;
    return a.M() ? a : null
};
c.uH = c.m.extend({M: function() {
        return this.Va(c.A === c.$ ? 350 : 150)
    },Va: function(a) {
        return c.m.prototype.Va.call(this, a) ? (this.Kh(!0), this.ag(c.m.Oh), this.Ng(c.m.eb), this.cg(N(0, 0)), this.dg(0), this.eg(0), this.Ve(20), this.fg(5), this.Kg(90), this.Lg(360), a = c.C.K, this.U(a.width / 2, a.height / 2), this.Rg(N(0, 0)), this.Pg(1), this.Qg(0.5), this.Sg(30), this.Tg(10), this.Og(c.m.pg), this.Mg(this.nb / this.Qe), this.We(c.color(194, 64, 31, 255)), this.gg(c.color(0, 0, 0, 0)), this.Ue(c.color(0, 0, 0, 255)), this.bg(c.color(0, 0, 0, 0)), 
        !0) : !1
    }});
c.uH.create = function() {
    var a = new c.uH;
    return a.M() ? a : null
};
c.oH = c.m.extend({M: function() {
        return this.Va(c.A === c.$ ? 200 : 100)
    },Va: function(a) {
        return c.m.prototype.Va.call(this, a) ? (this.ag(c.m.Oh), this.Ng(c.m.eb), this.cg(N(0, 0)), this.Ve(60), this.fg(10), this.dg(-80), this.eg(0), this.Lj(80), this.Mj(0), this.Kg(90), this.Lg(360), a = c.C.K, this.U(a.width / 2, a.height / 2), this.Rg(N(0, 0)), this.Pg(4), this.Qg(1), this.Sg(37), this.Tg(10), this.Og(c.m.pg), this.Mg(this.nb / this.Qe), this.We(c.color(31, 64, 194, 255)), this.gg(c.color(0, 0, 0, 0)), this.Ue(c.color(0, 0, 0, 255)), this.bg(c.color(0, 
        0, 0, 0)), this.Kh(!0), !0) : !1
    }});
c.oH.create = function() {
    var a = new c.oH;
    return a.M() ? a : null
};
c.nH = c.m.extend({M: function() {
        return this.Va(c.A === c.$ ? 250 : 100)
    },Va: function(a) {
        return c.m.prototype.Va.call(this, a) ? (this.ag(c.m.Oh), this.Ng(c.m.eb), this.cg(N(0, 0)), this.Ve(80), this.fg(10), this.dg(-60), this.eg(0), this.Lj(15), this.Mj(0), this.Kg(90), this.Lg(360), a = c.C.K, this.U(a.width / 2, a.height / 2), this.Rg(N(0, 0)), this.Pg(4), this.Qg(1), this.Sg(30), this.Tg(10), this.Og(c.m.pg), this.Mg(this.nb / this.Qe), this.We(c.color(128, 128, 128, 255)), this.gg(c.color(128, 128, 128, 128)), this.Ue(c.color(0, 0, 0, 255)), this.bg(c.color(0, 
        0, 0, 0)), this.Kh(!0), !0) : !1
    }});
c.nH.create = function() {
    var a = new c.nH;
    return a.M() ? a : null
};
c.pH = c.m.extend({M: function() {
        return this.Va(c.A === c.$ ? 150 : 100)
    },Va: function(a) {
        return c.m.prototype.Va.call(this, a) ? (this.ag(c.m.Oh), this.Ng(c.m.eb), this.cg(N(-200, 200)), this.Ve(15), this.fg(5), this.dg(0), this.eg(0), this.Lj(0), this.Mj(0), this.Kg(90), this.Lg(360), a = c.C.K, this.U(a.width / 2, a.height / 2), this.Rg(N(0, 0)), this.Pg(2), this.Qg(1), this.Sg(60), this.Tg(10), this.Og(c.m.pg), this.Mg(this.nb / this.Qe), this.We(c.color(51, 102, 179)), this.gg(c.color(0, 0, 51, 26)), this.Ue(c.color(0, 0, 0, 255)), this.bg(c.color(0, 
        0, 0, 0)), this.Kh(!0), !0) : !1
    }});
c.pH.create = function() {
    var a = new c.pH;
    return a.M() ? a : null
};
c.tH = c.m.extend({M: function() {
        return this.Va(c.A === c.$ ? 500 : 100)
    },Va: function(a) {
        return c.m.prototype.Va.call(this, a) ? (this.ag(c.m.Oh), this.Ng(c.m.eb), this.cg(N(0, 0)), this.Ve(150), this.fg(0), this.dg(-380), this.eg(0), this.Lj(45), this.Mj(0), this.Kg(90), this.Lg(0), a = c.C.K, this.U(a.width / 2, a.height / 2), this.Rg(N(0, 0)), this.Pg(12), this.Qg(0), this.Sg(20), this.Tg(0), this.Og(c.m.pg), this.Mg(this.nb / this.Qe), this.We(c.color(128, 128, 128, 255)), this.gg(c.color(128, 128, 128, 0)), this.Ue(c.color(128, 128, 128, 255)), 
        this.bg(c.color(128, 128, 128, 0)), this.Kh(!1), !0) : !1
    }});
c.tH.create = function() {
    var a = new c.tH;
    return a.M() ? a : null
};
c.kH = c.m.extend({M: function() {
        return this.Va(c.A === c.$ ? 700 : 300)
    },Va: function(a) {
        return c.m.prototype.Va.call(this, a) ? (this.ag(0.1), this.Ng(c.m.eb), this.cg(N(0, 0)), this.Ve(70), this.fg(40), this.dg(0), this.eg(0), this.Lj(0), this.Mj(0), this.Kg(90), this.Lg(360), a = c.C.K, this.U(a.width / 2, a.height / 2), this.Rg(N(0, 0)), this.Pg(5), this.Qg(2), this.Sg(15), this.Tg(10), this.Og(c.m.pg), this.Mg(this.nb / this.So()), this.We(c.color(179, 26, 51, 255)), this.gg(c.color(128, 128, 128, 0)), this.Ue(c.color(128, 128, 128, 0)), this.bg(c.color(128, 
        128, 128, 0)), this.Kh(!1), !0) : !1
    }});
c.kH.create = function() {
    var a = new c.kH;
    return a.M() ? a : null
};
c.rH = c.m.extend({M: function() {
        return this.Va(c.A === c.$ ? 200 : 100)
    },Va: function(a) {
        return c.m.prototype.Va.call(this, a) ? (this.ag(c.m.Oh), this.Ng(c.m.eb), this.cg(N(0, 0)), this.dg(0), this.eg(0), this.Ve(25), this.fg(10), this.Kg(90), this.Lg(5), this.U(c.C.K.width / 2, 0), this.Rg(N(20, 0)), this.Pg(4), this.Qg(1), this.Sg(60), this.Tg(10), this.Og(c.m.pg), this.Mg(this.nb / this.Qe), this.We(c.color(204, 204, 204, 255)), this.gg(c.color(5, 5, 5, 0)), this.Ue(c.color(0, 0, 0, 255)), this.bg(c.color(0, 0, 0, 0)), this.Kh(!1), !0) : !1
    }});
c.rH.create = function() {
    var a = new c.rH;
    return a.M() ? a : null
};
c.sH = c.m.extend({M: function() {
        return this.Va(c.A === c.$ ? 700 : 250)
    },Va: function(a) {
        return c.m.prototype.Va.call(this, a) ? (this.ag(c.m.Oh), this.Ng(c.m.eb), this.cg(N(0, -1)), this.Ve(5), this.fg(1), this.dg(0), this.eg(1), this.Lj(0), this.Mj(1), a = c.C.K, this.U(a.width / 2, a.height + 10), this.Rg(N(a.width / 2, 0)), this.Kg(-90), this.Lg(5), this.Pg(45), this.Qg(15), this.Sg(10), this.Tg(5), this.Og(c.m.pg), this.Mg(10), this.We(c.color(255, 255, 255, 255)), this.gg(c.color(0, 0, 0, 0)), this.Ue(c.color(255, 255, 255, 0)), this.bg(c.color(0, 
        0, 0, 0)), this.Kh(!1), !0) : !1
    }});
c.sH.create = function() {
    var a = new c.sH;
    return a.M() ? a : null
};
c.qH = c.m.extend({M: function() {
        return this.Va(c.A === c.$ ? 1E3 : 300)
    },Va: function(a) {
        return c.m.prototype.Va.call(this, a) ? (this.ag(c.m.Oh), this.Ng(c.m.eb), this.cg(N(10, -10)), this.dg(0), this.eg(1), this.Lj(0), this.Mj(1), this.Ve(130), this.fg(30), this.Kg(-90), this.Lg(5), a = c.C.K, this.U(a.width / 2, a.height), this.Rg(N(a.width / 2, 0)), this.Pg(4.5), this.Qg(0), this.Sg(4), this.Tg(2), this.Og(c.m.pg), this.Mg(20), this.We(c.color(179, 204, 255, 255)), this.gg(c.color(0, 0, 0, 0)), this.Ue(c.color(179, 204, 255, 128)), this.bg(c.color(0, 
        0, 0, 0)), this.Kh(!1), !0) : !1
    }});
c.qH.create = function() {
    var a = new c.qH;
    return a.M() ? a : null
};
c.M6 = 500;
c.nz = c.q.extend({textureAtlas: null,t7: !0,o: null,sb: "ParticleBatchNode",ctor: function(a, b) {
        c.q.prototype.ctor.call(this);
        this.o = {src: c.gc,T: c.fc};
        "string" == typeof a ? this.M(a, b) : a instanceof c.da && this.ra(a, b)
    },ra: function(a, b) {
        this.textureAtlas = new c.$j;
        this.textureAtlas.ra(a, b);
        this.s.length = 0;
        c.A === c.$ && (this.shaderProgram = c.Jd.mc(c.Qi));
        return !0
    },Zk: function(a, b) {
        var d = c.Ba.Ac(a);
        return this.ra(d, b)
    },M: function(a, b) {
        var d = c.s7.sba().Ac(a);
        return this.ra(d, b)
    },L: function(a, b, d) {
        if (!a)
            throw "cc.ParticleBatchNode.addChild() : child should be non-null";
        if (!(a instanceof 
        c.m))
            throw "cc.ParticleBatchNode.addChild() : only supports cc.ParticleSystem as children";
        b = null == b ? a.zIndex : b;
        d = null == d ? a.tag : d;
        if (a.Oa() != this.textureAtlas.texture)
            throw "cc.ParticleSystem.addChild() : the child is not using the same texture id";
        var e = a.Ah();
        if (0 === this.s.length)
            this.Te(e);
        else if (e.src != this.o.src || e.T != this.o.T) {
            c.log("cc.ParticleSystem.addChild() : Can't add a ParticleSystem that uses a different blending function");
            return
        }
        b = this.vU(a, b, d);
        d = 0;
        0 != b ? (b = this.s[b - 1], d = b.Ro() + b.nb) : 
        d = 0;
        this.bF(a, d);
        a.fl(this)
    },bF: function(a, b) {
        var d = a.nb, e = this.textureAtlas, f = e.totalQuads;
        a.MF(b);
        f + d > e.vd && (this.fW(f + d), e.CM(e.vd - d, d));
        a.Ro() + d != f && e.aO(b, b + d);
        e.tN(d);
        this.vD()
    },removeChild: function(a, b) {
        if (null != a) {
            if (!(a instanceof c.m))
                throw "cc.ParticleBatchNode.removeChild(): only supports cc.ParticleSystem as children";
            if (-1 == this.s.indexOf(a))
                c.log("cc.ParticleBatchNode.removeChild(): doesn't contain the sprite. Can't remove it");
            else {
                c.q.prototype.removeChild.call(this, a, b);
                var d = this.textureAtlas;
                d.H2(a.Ro(), a.nb);
                d.CM(d.totalQuads, a.nb);
                a.fl(null);
                this.vD()
            }
        }
    },op: function(a, b) {
        if (!a)
            throw "cc.ParticleBatchNode.reorderChild(): child should be non-null";
        if (!(a instanceof c.m))
            throw "cc.ParticleBatchNode.reorderChild(): only supports cc.QuadParticleSystems as children";
        if (-1 === this.s.indexOf(a))
            c.log("cc.ParticleBatchNode.reorderChild(): Child doesn't belong to batch");
        else if (b != a.zIndex) {
            if (1 < this.s.length) {
                var d = this.DV(a, b);
                if (d.cO != d.bO) {
                    this.s.splice(d.cO, 1);
                    this.s.splice(d.bO, 0, a);
                    d = a.Ro();
                    this.vD();
                    for (var e = 0, f = this.s, g = 0; g < f.length; g++)
                        if (f[g] == a) {
                            e = a.Ro();
                            break
                        }
                    this.textureAtlas.aO(d, a.nb, e);
                    a.K4()
                }
            }
            a.cw(b)
        }
    },D2: function(a, b) {
        this.removeChild(this.s[i], b)
    },Jg: function(a) {
        for (var b = this.s, d = 0; d < b.length; d++)
            b[d].fl(null);
        c.q.prototype.Jg.call(this, a);
        this.textureAtlas.uO()
    },CZ: function(a) {
        a = this.textureAtlas.quads[a];
        a.O.i.x = a.O.i.y = a.I.i.x = a.I.i.y = a.N.i.x = a.N.i.y = a.F.i.x = a.F.i.y = 0;
        this.textureAtlas.Ik(!0)
    },Z: function() {
        c.A !== c.Da && 0 != this.textureAtlas.totalQuads && (c.Xs(this), c.mN(this.o.src, 
        this.o.T), this.textureAtlas.xM())
    },Oa: function() {
        return this.textureAtlas.texture
    },ob: function(a) {
        this.textureAtlas.texture = a;
        var b = this.o;
        a && !a.ui() && b.src == c.gc && b.T == c.fc && (b.src = c.SRC_ALPHA, b.T = c.ONE_MINUS_SRC_ALPHA)
    },Te: function(a, b) {
        void 0 === b ? (this.o.src = a.src, this.o.T = a.T) : (this.o.src = a, this.o.src = b)
    },Ah: function() {
        return {src: this.o.src,T: this.o.T}
    },S: function(a) {
        c.A !== c.Da && this.yc && (c.Dm(), this.grid && this.grid.uf() && (this.grid.ws(), this.wy()), this.transform(a), this.Z(a), this.grid && this.grid.uf() && 
        this.grid.ts(this), c.Cm())
    },vD: function() {
        for (var a = 0, b = this.s, d = 0; d < b.length; d++) {
            var e = b[d];
            e.MF(a);
            a += e.nb
        }
    },fW: function(a) {
        c.log("cocos2d: cc.ParticleBatchNode: resizing TextureAtlas capacity from [" + this.textureAtlas.vd + "] to [" + a + "].");
        this.textureAtlas.GF(a) || c.log("cc.ParticleBatchNode._increaseAtlasCapacityTo() : WARNING: Not enough memory to resize the atlas")
    },qX: function(a) {
        for (var b = this.s, d = b.length, e = 0; e < d; e++)
            if (b[e].zIndex > a)
                return e;
        return d
    },DV: function(a, b) {
        for (var d = !1, e = !1, f = 
        0, g = 0, h = 0, k = this.s, m = k.length, p = 0; p < m; p++) {
            var r = k[p];
            if (r.zIndex > b && !e && (f = p, e = !0, d && e))
                break;
            if (a == r && (g = p, d = !0, e || (h = -1), d && e))
                break
        }
        e || (f = m);
        return {bO: f + h,cO: g}
    },vU: function(a, b, d) {
        if (!a)
            throw "cc.ParticleBatchNode._addChildHelper(): child should be non-null";
        if (a.parent)
            return c.log("cc.ParticleBatchNode._addChildHelper(): child already added. It can't be added again"), null;
        this.s || (this.s = []);
        var e = this.qX(b);
        this.s.splice(e, 0, a);
        a.tag = d;
        a.cw(b);
        a.parent = this;
        this.nh && (a.ca(), a.Jh());
        return e
    },
    Tf: function() {
        this.textureAtlas.texture.ui() || (this.o.src = c.SRC_ALPHA, this.o.T = c.ONE_MINUS_SRC_ALPHA)
    },LE: function() {
        return this.textureAtlas
    },aG: function(a) {
        this.textureAtlas = a
    }});
n = c.nz.prototype;
c.f(n, "texture", n.Oa, n.ob);
c.nz.create = function(a, b) {
    return new c.nz(a, b)
};
c.h6 = function(a, b, d) {
    this.xh = a || S(0, 0, 0, 0);
    this.end = b || S(0, 0, 0, 0);
    this.duration = d || 0
};
c.g6 = c.la.extend({ctor: function() {
        c.vi.QL(this)
    },Zx: function() {
        c.vi.Zx(this)
    },XY: function() {
        return c.vi.UL(this)
    },uM: function() {
        return c.vi.tM(this)
    },YD: function() {
        return !1
    },AZ: function() {
    },ZD: function() {
        return !1
    },BZ: function() {
    },GN: function() {
    },qM: function() {
    },zE: function() {
        return ""
    },q1: function() {
    },o1: function() {
    },p1: function() {
    },n1: function() {
    }});
c.Zy = c.la.extend({jc: null,Ua: null,Vi: "",Ll: null,ctor: function() {
        this.Ua = new c.Zy.bR;
        this.Ll = N(0, 0)
    },M: function() {
        if (!c.Lb.Aj) {
            this.jc = c.rb("#imeDispatcherInput");
            this.jc || (this.jc = c.NP(), this.jc.setAttribute("type", "text"), this.jc.setAttribute("id", "imeDispatcherInput"), this.jc.resize(0, 0), this.jc.AP(0, 0), this.jc.style.opacity = "0", this.jc.style.fontSize = "1px", this.jc.setAttribute("tabindex", 2), this.jc.style.position = "absolute", this.jc.style.top = 0, this.jc.style.left = 0, document.body.appendChild(this.jc));
            var a = this;
            c.Ia(this.jc, "input", function() {
                a.rC(a.jc.value)
            }, !1);
            c.Ia(this.jc, "keydown", function(b) {
                b.keyCode === c.iq.r4 ? (b.stopPropagation(), b.preventDefault()) : b.keyCode == c.iq.AM && (a.Ds("\n", 1), b.stopPropagation(), b.preventDefault())
            }, !1);
            /msie/i.test(navigator.userAgent) && c.Ia(this.jc, "keyup", function(b) {
                b.keyCode == c.iq.WL && a.rC(a.jc.value)
            }, !1);
            c.Ia(window, "mousedown", function(b) {
                var d = b.pageY || 0;
                a.Ll.x = b.pageX || 0;
                a.Ll.y = d
            }, !1)
        }
    },rC: function(a) {
        var b, d;
        b = this.Vi.length < a.length ? this.Vi.length : 
        a.length;
        for (d = 0; d < b && a[d] === this.Vi[d]; d++)
            ;
        var e = this.Vi.length - d, f = a.length - d;
        for (b = 0; b < e; b++)
            this.vM();
        for (b = 0; b < f; b++)
            this.Ds(a[d + b], 1);
        this.Vi = a
    },Ds: function(a, b) {
        !this.Ua || !a || 0 >= b || this.Ua.ee && this.Ua.ee.GN(a, b)
    },vM: function() {
        this.Ua && this.Ua.ee && this.Ua.ee.qM()
    },zE: function() {
        if (this.Ua && this.Ua.ee) {
            var a = this.Ua.ee.zE();
            return a ? a : ""
        }
        return ""
    },j$: function() {
        if (this.Ua)
            for (var a = 0; a < this.Ua.ug.length; a++)
                ;
    },h$: function() {
        if (this.Ua)
            for (var a = 0; a < this.Ua.ug.length; a++)
                ;
    },i$: function() {
        if (this.Ua)
            for (var a = 
            0; a < this.Ua.ug.length; a++)
                ;
    },g$: function() {
        if (this.Ua)
            for (var a = 0; a < this.Ua.ug.length; a++)
                ;
    },QL: function(a) {
        a && this.Ua && (-1 < this.Ua.ug.indexOf(a) || this.Ua.ug.splice(0, 0, a))
    },UL: function(a) {
        if (!this.Ua || !a || -1 == this.Ua.ug.indexOf(a))
            return !1;
        if (this.Ua.ee) {
            if (!this.Ua.ee.ZD() || !a.YD())
                return !1;
            this.Ua.ee = null;
            this.PJ(a);
            return !0
        }
        if (!a.YD())
            return !1;
        this.PJ(a);
        return !0
    },PJ: function(a) {
        c.Lb.Aj ? (this.Ua.ee = a, this.Vi = a.string || "", a = prompt("please enter your word:", this.Vi), null != a && this.rC(a), this.Ds("\n", 
        1)) : (this.Ua.ee = a, this.Vi = a.string || "", this.jc.focus(), this.jc.value = this.Vi, this.hV())
    },hV: function() {
        /msie/i.test(navigator.userAgent) ? (this.jc.style.left = this.Ll.x + "px", this.jc.style.top = this.Ll.y + "px") : this.jc.AP(this.Ll.x, this.Ll.y)
    },tM: function(a) {
        if (!this.Ua || !a || this.Ua.ee != a || !a.ZD())
            return !1;
        this.Ua.ee = null;
        c.Xa.focus();
        return !0
    },Zx: function(a) {
        this.Ua && a && -1 != this.Ua.ug.indexOf(a) && (this.Ua.ee && a == this.Ua.ee && (this.Ua.ee = null), c.Ke(this.Ua.ug, a))
    },Oga: function(a) {
        32 > a ? a == c.iq.WL ? this.vM() : 
        a == c.iq.AM && this.Ds("\n", 1) : 255 > a && this.Ds(String.fromCharCode(a), 1)
    }});
c.Zy.bR = c.la.extend({ee: null,ug: null,ctor: function() {
        this.ug = []
    },jaa: function(a) {
        for (var b = 0; b < this.ug.length; b++)
            if (this.ug[b] == a)
                return b;
        return null
    }});
c.vi = new c.Zy;
document.body ? c.vi.M() : c.Ia(window, "load", function() {
    c.vi.M()
}, !1);
c.r7 = c.la.extend({iga: function() {
        return !1
    },kga: function() {
        return !1
    },lga: function() {
        return !1
    },jga: function() {
        return !1
    },gga: function() {
        return !1
    }});
c.Yz = c.V.extend({pM: null,Kw: null,s8: null,Lf: "",Rl: "",Uu: 0,sb: "TextFieldTTF",ctor: function(a, b, d, e, f) {
        this.Kw = c.color(127, 127, 127);
        c.vi.QL(this);
        c.V.prototype.ctor.call(this);
        void 0 !== f ? (this.P0("", b, d, e, f), a && this.mt(a)) : void 0 === e && void 0 !== d && (this.pd("", b, d), a && this.mt(a))
    },z_: function() {
        return this.pM
    },g3: function(a) {
        this.pM = a
    },t_: function() {
        return this.Uu
    },Laa: function() {
        return this.Kw
    },eia: function(a) {
        this.Kw = a
    },P0: function(a, b, d, e, f) {
        switch (arguments.length) {
            case 5:
                return a && this.mt(a), this.pd(this.Rl, 
                e, f, b, d);
            case 3:
                return a && this.mt(a), this.pd(this.Rl, arguments[1], arguments[2]);
            default:
                throw "Argument must be non-nil ";
        }
    },nc: function(a) {
        this.Lf = (a = String(a)) || "";
        this.Lf.length ? c.V.prototype.nc.call(this, this.Lf) : c.V.prototype.nc.call(this, this.Rl);
        this.Uu = this.Lf.length
    },Yk: function() {
        return this.Lf
    },mt: function(a) {
        this.Rl = a || "";
        this.Lf.length || c.V.prototype.nc.call(this, this.Rl)
    },c0: function() {
        return this.Rl
    },Z: function(a) {
        a = a || c.k;
        if (this.Lf && 0 < this.Lf.length)
            c.V.prototype.Z.call(this, a);
        else {
            var b = 
            this.color;
            this.color = this.Kw;
            c.A === c.Da && this.zw();
            c.V.prototype.Z.call(this, a);
            this.color = b
        }
    },S: function(a) {
        this._super(a)
    },XY: function() {
        return c.vi.UL(this)
    },uM: function() {
        return c.vi.tM(this)
    },YD: function() {
        return !0
    },AZ: function() {
    },ZD: function() {
        return !0
    },BZ: function() {
    },qM: function() {
        var a = this.Lf.length;
        0 != a && (1 >= a ? (this.Lf = "", this.Uu = 0, c.V.prototype.nc.call(this, this.Rl)) : this.string = this.Lf.substring(0, a - 1))
    },Zx: function() {
        c.vi.Zx(this)
    },GN: function(a) {
        var b = a;
        a = b.indexOf("\n");
        -1 < a && (b = 
        b.substring(0, a));
        0 < b.length && (b = this.Lf + b, this.Uu = b.length, this.string = b);
        -1 != a && this.uM()
    },zE: function() {
        return this.Lf
    },q1: function() {
    },o1: function() {
    },p1: function() {
    },n1: function() {
    }});
n = c.Yz.prototype;
c.f(n, "charCount", n.t_);
c.f(n, "placeHolder", n.c0, n.mt);
c.Yz.create = function(a, b, d, e, f) {
    return new c.Yz(a, b, d, e, f)
};
c.uv = c.aR;
c.ur = "Arial";
c.YJ = !1;
c.Bc = c.ia.extend({gf: !1,me: null,be: null,yr: !1,sb: "MenuItem",ctor: function(a, b) {
        var d = c.ia.prototype;
        d.ctor.call(this);
        this.be = this.me = null;
        this.gf = this.yr = !1;
        d.el.call(this, 0.5, 0.5);
        this.me = b || null;
        if (this.be = a || null)
            this.gf = !0
    },Jda: function() {
        return this.yr
    },Hd: function() {
    },re: function() {
        return !1
    },$F: function(a, b) {
        this.me = b;
        this.be = a
    },isEnabled: function() {
        return this.gf
    },se: function(a) {
        this.gf = a
    },Ns: function(a, b) {
        this.anchorY = this.anchorX = 0.5;
        this.me = b;
        this.be = a;
        this.gf = !0;
        this.yr = !1;
        return !0
    },rect: function() {
        var a = 
        this.xa, b = this.Q, d = this.Nc;
        return S(a.x - b.width * d.x, a.y - b.height * d.y, b.width, b.height)
    },selected: function() {
        this.yr = !0
    },Mh: function() {
        this.yr = !1
    },$ha: function(a, b) {
        this.me = b;
        this.be = a
    },rs: function() {
        if (this.gf) {
            var a = this.me, b = this.be;
            if (b)
                if (a && "string" == typeof b)
                    a[b](this);
                else
                    a && "function" == typeof b ? b.call(a, this) : b(this)
        }
    }});
n = c.Bc.prototype;
c.f(n, "enabled", n.isEnabled, n.se);
c.Bc.create = function(a, b) {
    return new c.Bc(a, b)
};
c.Ni = c.Bc.extend({Gn: null,Wc: null,VW: 0,Zq: null,ctor: function(a, b, d) {
        c.Bc.prototype.ctor.call(this, b, d);
        this.Wc = this.Gn = null;
        this.VW = 0;
        this.Zq = null;
        a && (this.Jr = 1, this.Zq = c.color.WHITE, this.Gn = c.color(126, 126, 126), this.my(a), this.cascadeOpacity = this.cascadeColor = !0)
    },B_: function() {
        return this.Gn
    },h3: function(a) {
        this.Gn = a
    },P_: function() {
        return this.Wc
    },my: function(a) {
        a && (this.L(a), a.anchorX = 0, a.anchorY = 0, this.width = a.width, this.height = a.height);
        this.Wc && this.removeChild(this.Wc, !0);
        this.Wc = a
    },se: function(a) {
        if (this.gf != 
        a) {
            var b = this.Wc;
            a ? b.color = this.Zq : (this.Zq = b.color, b.color = this.Gn)
        }
        c.Bc.prototype.se.call(this, a)
    },za: function(a) {
        this.Wc.opacity = a
    },Oe: function() {
        return this.Wc.opacity
    },bb: function(a) {
        this.Wc.color = a
    },Ne: function() {
        return this.Wc.color
    },BN: function(a, b, d) {
        this.Ns(b, d);
        this.Jr = 1;
        this.Zq = c.color.WHITE;
        this.Gn = c.color(126, 126, 126);
        this.my(a);
        return this.cascadeOpacity = this.cascadeColor = !0
    },nc: function(a) {
        this.Wc.string = a;
        this.width = this.Wc.width;
        this.height = this.Wc.height
    },Yk: function() {
        return this.Wc.string
    },
    rs: function() {
        this.gf && (this.hG(), this.scale = this.Jr, c.Bc.prototype.rs.call(this))
    },selected: function() {
        if (this.gf) {
            c.Bc.prototype.selected.call(this);
            var a = this.xE(c.Bu);
            a ? this.l4(a) : this.Jr = this.scale;
            a = c.Uc.create(0.1, 1.2 * this.Jr);
            a.ZF(c.Bu);
            this.gb(a)
        }
    },Mh: function() {
        if (this.gf) {
            c.Bc.prototype.Mh.call(this);
            this.m4(c.Bu);
            var a = c.Uc.create(0.1, this.Jr);
            a.ZF(c.Bu);
            this.gb(a)
        }
    }});
n = c.Ni.prototype;
c.f(n, "string", n.Yk, n.nc);
c.f(n, "disabledColor", n.B_, n.h3);
c.f(n, "label", n.P_, n.my);
c.Ni.create = function(a, b, d) {
    return new c.Ni(a, b, d)
};
c.YG = c.Ni.extend({ctor: function(a, b, d, e, f, g, h) {
        var k;
        a && 0 < a.length && (k = c.Rh.create(a, b, d, e, f));
        c.Ni.prototype.ctor.call(this, k, g, h)
    },pd: function(a, b, d, e, f, g, h) {
        if (!a || 0 == a.length)
            throw "cc.MenuItemAtlasFont.initWithString(): value should be non-null and its length should be greater than 0";
        var k = new c.Rh;
        k.pd(a, b, d, e, f);
        this.BN(k, g, h);
        return !0
    }});
c.YG.create = function(a, b, d, e, f, g, h) {
    return new c.YG(a, b, d, e, f, g, h)
};
c.tl = c.Ni.extend({Qb: null,$b: null,ctor: function(a, b, d) {
        var e;
        a && 0 < a.length ? (this.$b = c.ur, this.Qb = c.uv, e = c.V.create(a, this.$b, this.Qb)) : (this.Qb = 0, this.$b = "");
        c.Ni.prototype.ctor.call(this, e, b, d)
    },pd: function(a, b, d) {
        if (!a || 0 == a.length)
            throw "Value should be non-null and its length should be greater than 0";
        this.$b = c.ur;
        this.Qb = c.uv;
        a = c.V.create(a, this.$b, this.Qb);
        this.BN(a, b, d);
        return !0
    },ly: function(a) {
        this.Qb = a;
        this.QK()
    },DE: function() {
        return this.Qb
    },ky: function(a) {
        this.$b = a;
        this.QK()
    },CE: function() {
        return this.$b
    },
    QK: function() {
        var a = c.V.create(this.Wc.string, this.$b, this.Qb);
        this.my(a)
    }});
c.tl.ly = function(a) {
    c.uv = a
};
c.tl.fontSize = function() {
    return c.uv
};
c.tl.ky = function(a) {
    c.YJ && (c.ur = "");
    c.ur = a;
    c.YJ = !0
};
n = c.tl.prototype;
c.f(n, "fontSize", n.DE, n.ly);
c.f(n, "fontName", n.CE, n.ky);
c.tl.fontName = function() {
    return c.ur
};
c.tl.create = function(a, b, d) {
    return new c.tl(a, b, d)
};
c.Oi = c.Bc.extend({hd: null,Ge: null,ze: null,ctor: function(a, b, d, e, f) {
        c.Bc.prototype.ctor.call(this);
        this.ze = this.Ge = this.hd = null;
        if (void 0 !== b) {
            var g, h, k;
            void 0 !== f ? (g = d, k = e, h = f) : void 0 !== e && "function" === typeof e ? (g = d, k = e) : void 0 !== e && "function" === typeof d ? (h = e, k = d, g = b) : void 0 === d && (g = b);
            this.CN(a, b, g, k, h)
        }
    },a0: function() {
        return this.hd
    },SF: function(a) {
        this.hd != a && (a && (this.L(a, 0, c.wR), a.anchorX = 0, a.anchorY = 0), this.hd && this.removeChild(this.hd, !0), this.hd = a, this.width = this.hd.width, this.height = this.hd.height, 
        this.vw(), a.wt && !a.na && a.Wd(function(a) {
            this.width = a.width;
            this.height = a.height
        }, this))
    },l0: function() {
        return this.Ge
    },WF: function(a) {
        this.Ge != a && (a && (this.L(a, 0, c.kS), a.anchorX = 0, a.anchorY = 0), this.Ge && this.removeChild(this.Ge, !0), this.Ge = a, this.vw())
    },C_: function() {
        return this.ze
    },PF: function(a) {
        this.ze != a && (a && (this.L(a, 0, c.tQ), a.anchorX = 0, a.anchorY = 0), this.ze && this.removeChild(this.ze, !0), this.ze = a, this.vw())
    },CN: function(a, b, d, e, f) {
        this.Ns(e, f);
        this.SF(a);
        this.WF(b);
        this.PF(d);
        if (a = this.hd)
            this.width = 
            a.width, this.height = a.height, a.wt && !a.na && a.Wd(function(a) {
                this.width = a.width;
                this.height = a.height;
                this.cascadeOpacity = this.cascadeColor = !0
            }, this);
        return this.cascadeOpacity = this.cascadeColor = !0
    },bb: function(a) {
        this.hd.color = a;
        this.Ge && (this.Ge.color = a);
        this.ze && (this.ze.color = a)
    },Ne: function() {
        return this.hd.color
    },za: function(a) {
        this.hd.opacity = a;
        this.Ge && (this.Ge.opacity = a);
        this.ze && (this.ze.opacity = a)
    },Oe: function() {
        return this.hd.opacity
    },selected: function() {
        c.Bc.prototype.selected.call(this);
        this.hd && (this.ze && (this.ze.visible = !1), this.Ge ? (this.hd.visible = !1, this.Ge.visible = !0) : this.hd.visible = !0)
    },Mh: function() {
        c.Bc.prototype.Mh.call(this);
        this.hd && (this.hd.visible = !0, this.Ge && (this.Ge.visible = !1), this.ze && (this.ze.visible = !1))
    },se: function(a) {
        this.gf != a && (c.Bc.prototype.se.call(this, a), this.vw())
    },vw: function() {
        var a = this.hd, b = this.Ge, d = this.ze;
        this.gf ? (a && (a.visible = !0), b && (b.visible = !1), d && (d.visible = !1)) : d ? (a && (a.visible = !1), b && (b.visible = !1), d && (d.visible = !0)) : (a && (a.visible = !0), 
        b && (b.visible = !1))
    }});
n = c.Oi.prototype;
c.f(n, "normalImage", n.a0, n.SF);
c.f(n, "selectedImage", n.l0, n.WF);
c.f(n, "disabledImage", n.C_, n.PF);
c.Oi.create = function(a, b, d, e, f) {
    return new c.Oi(a, b, d, e, f || void 0)
};
c.ZG = c.Oi.extend({ctor: function(a, b, d, e, f) {
        var g = null, h = null, k = null, m = null, p = null;
        void 0 === a ? c.Oi.prototype.ctor.call(this) : (g = c.P.create(a), b && (h = c.P.create(b)), void 0 === e ? m = d : void 0 === f ? (m = d, p = e) : f && (k = c.P.create(d), m = e, p = f), c.Oi.prototype.ctor.call(this, g, h, k, m, p))
    },Pia: function(a) {
        this.SF(c.P.create(a))
    },lja: function(a) {
        this.WF(c.P.create(a))
    },nia: function(a) {
        this.PF(c.P.create(a))
    },mda: function(a, b, d, e, f) {
        var g = null, h = null, k = null;
        a && (g = c.P.create(a));
        b && (h = c.P.create(b));
        d && (k = c.P.create(d));
        return this.CN(g, h, k, e, f)
    }});
c.ZG.create = function(a, b, d, e, f) {
    return new c.ZG(a, b, d, e, f)
};
c.gz = c.Bc.extend({dd: null,Ag: 0,Sd: null,de: null,ctor: function() {
        var a = arguments.length, b, d;
        "function" === typeof arguments[a - 2] ? (b = arguments[a - 2], d = arguments[a - 1], a -= 2) : "function" === typeof arguments[a - 1] && (b = arguments[a - 1], a -= 1);
        c.Bc.prototype.ctor.call(this, b, d);
        this.Ag = 0;
        this.dd = [];
        this.Sd = 0;
        this.de = c.color.WHITE;
        if (0 < a) {
            b = this.dd;
            for (d = b.length = 0; d < a; d++)
                arguments[d] && b.push(arguments[d]);
            this.Ag = c.cA;
            this.qt(0);
            this.rp(!0);
            this.sp(!0)
        }
    },Oe: function() {
        return this.Sd
    },za: function(a) {
        this.Sd = a;
        if (this.dd && 
        0 < this.dd.length)
            for (var b = 0; b < this.dd.length; b++)
                this.dd[b].opacity = a;
        this.de.a = a
    },Ne: function() {
        var a = this.de;
        return c.color(a.r, a.g, a.b, a.a)
    },bb: function(a) {
        var b = this.de;
        b.r = a.r;
        b.g = a.g;
        b.b = a.b;
        if (this.dd && 0 < this.dd.length)
            for (b = 0; b < this.dd.length; b++)
                this.dd[b].bb(a);
        void 0 === a.a || a.qs || this.za(a.a)
    },m0: function() {
        return this.Ag
    },qt: function(a) {
        if (a != this.Ag) {
            this.Ag = a;
            (a = this.Bh(c.CG)) && a.Se(!1);
            a = this.dd[this.Ag];
            this.L(a, 0, c.CG);
            var b = a.width, d = a.height;
            this.width = b;
            this.height = d;
            a.U(b / 2, 
            d / 2)
        }
    },Cca: function() {
        return this.dd
    },rja: function(a) {
        this.dd = a
    },AN: function(a) {
        var b = a.length;
        "function" === typeof a[a.length - 2] ? (this.Ns(a[a.length - 2], a[a.length - 1]), b -= 2) : "function" === typeof a[a.length - 1] ? (this.Ns(a[a.length - 1], null), b -= 1) : this.Ns(null, null);
        for (var d = this.dd, e = d.length = 0; e < b; e++)
            a[e] && d.push(a[e]);
        this.Ag = c.cA;
        this.qt(0);
        return this.cascadeOpacity = this.cascadeColor = !0
    },g9: function(a) {
        this.dd.push(a)
    },rs: function() {
        this.gf && this.qt((this.Ag + 1) % this.dd.length);
        c.Bc.prototype.rs.call(this)
    },
    selected: function() {
        c.Bc.prototype.selected.call(this);
        this.dd[this.Ag].selected()
    },Mh: function() {
        c.Bc.prototype.Mh.call(this);
        this.dd[this.Ag].Mh()
    },se: function(a) {
        if (this.gf != a) {
            c.Bc.prototype.se.call(this, a);
            var b = this.dd;
            if (b && 0 < b.length)
                for (var d = 0; d < b.length; d++)
                    b[d].enabled = a
        }
    },Oha: function() {
        return this.dd[this.Ag]
    },ca: function() {
        c.q.prototype.ca.call(this);
        this.qt(this.Ag)
    }});
n = c.gz.prototype;
c.f(n, "selectedIndex", n.m0, n.qt);
c.gz.create = function() {
    0 < arguments.length && null == arguments[arguments.length - 1] && c.log("parameters should not be ending with null in Javascript");
    var a = new c.gz;
    a.AN(Array.prototype.slice.apply(arguments));
    return a
};
c.kq = 0;
c.jq = 1;
c.z6 = -128;
c.GG = 5;
c.Mi = c.xf.extend({enabled: !1,de: null,Sd: 0,Qc: null,th: -1,yL: null,sb: "Menu",ctor: function(a) {
        c.xf.prototype.ctor.call(this);
        this.de = c.color.WHITE;
        this.enabled = !1;
        this.Sd = 255;
        this.Qc = null;
        this.th = -1;
        this.yL = c.sa.create({event: c.sa.Fq,Ap: !0,Gm: this.PW,ip: this.TW,hp: this.RW,$s: this.QW});
        0 < arguments.length && null == arguments[arguments.length - 1] && c.log("parameters should not be ending with null in Javascript");
        var b = arguments.length, d;
        if (0 == b)
            d = [];
        else if (1 == b)
            d = a instanceof Array ? a : [a];
        else if (1 < b) {
            d = [];
            for (var e = 0; e < b; e++)
                arguments[e] && d.push(arguments[e])
        }
        this.wN(d)
    },ca: function() {
        var a = this.yL;
        a.mf || c.ta.addListener(a, this);
        c.q.prototype.ca.call(this)
    },Ne: function() {
        var a = this.de;
        return c.color(a.r, a.g, a.b, a.a)
    },bb: function(a) {
        var b = this.de;
        b.r = a.r;
        b.g = a.g;
        b.b = a.b;
        if ((b = this.s) && 0 < b.length)
            for (var d = 0; d < b.length; d++)
                b[d].bb(a);
        void 0 === a.a || a.qs || this.za(a.a)
    },Oe: function() {
        return this.Sd
    },za: function(a) {
        this.Sd = a;
        var b = this.s;
        if (b && 0 < b.length)
            for (var d = 0; d < b.length; d++)
                b[d].za(a);
        this.de.a = a
    },
    isEnabled: function() {
        return this.enabled
    },se: function(a) {
        this.enabled = a
    },AN: function(a) {
        var b = [];
        if (a)
            for (var d = 0; d < a.length; d++)
                a[d] && b.push(a[d]);
        return this.wN(b)
    },wN: function(a) {
        if (c.xf.prototype.M.call(this)) {
            this.enabled = !0;
            var b = c.Et;
            this.U(b.width / 2, b.height / 2);
            this.Zd(b);
            this.el(0.5, 0.5);
            this.hx(!0);
            if (a)
                for (b = 0; b < a.length; b++)
                    this.L(a[b], b);
            this.Qc = null;
            this.th = c.kq;
            return this.cascadeOpacity = this.cascadeColor = !0
        }
        return !1
    },L: function(a, b, d) {
        if (!(a instanceof c.Bc))
            throw "cc.Menu.addChild() : Menu only supports MenuItem objects as children";
        c.sd.prototype.L.call(this, a, b, d)
    },m9: function() {
        this.KY(c.GG)
    },KY: function(a) {
        var b = -a, d = this.s, e, f, g, h;
        if (d && 0 < d.length) {
            f = 0;
            for (e = d.length; f < e; f++)
                b += d[f].height * d[f].scaleY + a;
            var k = b / 2;
            f = 0;
            for (e = d.length; f < e; f++)
                h = d[f], g = h.height, b = h.scaleY, h.U(0, k - g * b / 2), k -= g * b + a
        }
    },j9: function() {
        this.Cw(c.GG)
    },Cw: function(a) {
        var b = -a, d = this.s, e, f, g, h;
        if (d && 0 < d.length) {
            e = 0;
            for (f = d.length; e < f; e++)
                b += d[e].width * d[e].scaleX + a;
            var k = -b / 2;
            e = 0;
            for (f = d.length; e < f; e++)
                h = d[e], b = h.scaleX, g = d[e].width, h.U(k + g * b / 2, 0), k += 
                g * b + a
        }
    },k9: function() {
        0 < arguments.length && null == arguments[arguments.length - 1] && c.log("parameters should not be ending with null in Javascript");
        for (var a = [], b = 0; b < arguments.length; b++)
            a.push(arguments[b]);
        var d = -5, e = 0, f = 0, g = 0, h, k, m, p = this.s;
        if (p && 0 < p.length)
            for (b = 0, m = p.length; b < m; b++)
                e >= a.length || !(h = a[e]) || (k = p[b].height, f = f >= k || isNaN(k) ? f : k, ++g, g >= h && (d += f + 5, f = g = 0, ++e));
        var r = c.C.K, s = h = f = e = 0, u = 0, d = d / 2;
        if (p && 0 < p.length)
            for (b = 0, m = p.length; b < m; b++) {
                var t = p[b];
                0 == h && (h = a[e], u = s = r.width / (1 + h));
                k = t.wk();
                f = f >= k || isNaN(k) ? f : k;
                t.U(u - r.width / 2, d - k / 2);
                u += s;
                ++g;
                g >= h && (d -= f + 5, f = h = g = 0, ++e)
            }
    },l9: function() {
        0 < arguments.length && null == arguments[arguments.length - 1] && c.log("parameters should not be ending with null in Javascript");
        var a = [], b;
        for (b = 0; b < arguments.length; b++)
            a.push(arguments[b]);
        var d = [], e = [], f = -10, g = -5, h = 0, k = 0, m = 0, p, r, s, u, t = this.s;
        if (t && 0 < t.length)
            for (b = 0, s = t.length; b < s; b++)
                (r = t[b], h >= a.length || !(p = a[h])) || (u = r.width, k = k >= u || isNaN(u) ? k : u, g += r.height + 5, ++m, m >= p && (d.push(k), e.push(g), f += k + 10, k = m = 
                0, g = -5, ++h));
        g = c.C.K;
        p = k = h = 0;
        var f = -f / 2, v = 0;
        if (t && 0 < t.length)
            for (b = 0, s = t.length; b < s; b++)
                r = t[b], 0 == p && (p = a[h], v = e[h]), u = r.ah(), k = k >= u || isNaN(u) ? k : u, r.U(f + d[h] / 2, v - g.height / 2), v -= r.height + 10, ++m, m >= p && (f += k + 5, k = p = m = 0, ++h)
    },removeChild: function(a, b) {
        null != a && (a instanceof c.Bc ? (this.Qc == a && (this.Qc = null), c.q.prototype.removeChild.call(this, a, b)) : c.log("cc.Menu.removeChild():Menu only supports MenuItem objects as children"))
    },PW: function(a, b) {
        var d = b.xd;
        if (d.th != c.kq || !d.yc || !d.enabled)
            return !1;
        for (var e = 
        d.parent; null != e; e = e.parent)
            if (!e.yc)
                return !1;
        d.Qc = d.nK(a);
        return d.Qc ? (d.th = c.jq, d.Qc.selected(), !0) : !1
    },RW: function(a, b) {
        var d = b.xd;
        d.th !== c.jq ? c.log("cc.Menu.onTouchEnded(): invalid state") : (d.Qc && (d.Qc.Mh(), d.Qc.rs()), d.th = c.kq)
    },QW: function(a, b) {
        var d = b.xd;
        d.th !== c.jq ? c.log("cc.Menu.onTouchCancelled(): invalid state") : (this.Qc && d.Qc.Mh(), d.th = c.kq)
    },TW: function(a, b) {
        var d = b.xd;
        if (d.th !== c.jq)
            c.log("cc.Menu.onTouchMoved(): invalid state");
        else {
            var e = d.nK(a);
            e != d.Qc && (d.Qc && d.Qc.Mh(), d.Qc = e, d.Qc && 
            d.Qc.selected())
        }
    },yb: function() {
        this.th == c.jq && (this.Qc && (this.Qc.Mh(), this.Qc = null), this.th = c.kq);
        c.q.prototype.yb.call(this)
    },Hd: function() {
    },re: function() {
        return !1
    },nK: function(a) {
        a = a.Wk();
        var b = this.s, d;
        if (b && 0 < b.length)
            for (var e = 0; e < b.length; e++)
                if (d = b[e], d.yc && d.isEnabled()) {
                    var f = d.iE(a), g = d.rect();
                    g.x = 0;
                    g.y = 0;
                    if (c.qO(g, f))
                        return d
                }
        return null
    }});
n = c.Mi.prototype;
c.Mi.create = function(a) {
    var b = arguments.length;
    0 < b && null == arguments[b - 1] && c.log("parameters should not be ending with null in Javascript");
    return 0 == b ? new c.Mi : 1 == b ? new c.Mi(a) : new c.Mi(Array.prototype.slice.call(arguments, 0))
};
c.h7 = 0;
c.d7 = 1;
c.g7 = 2;
c.e7 = 3;
c.f7 = 4;
c.c7 = 5;
c.pka = function(a, b, d) {
    var e = 2;
    if (e + 1 > b)
        return !1;
    a = new c.aQ(a);
    a.ny(e);
    d.type = a.R();
    e += 10;
    if (e + 4 + 1 > b)
        return !1;
    a.ny(e);
    d.width = a.y2();
    d.height = a.x2();
    d.pixelDepth = a.R();
    if (e + 5 + 1 > b)
        return !1;
    b = a.R();
    d.FM = 0;
    b & 32 && (d.FM = 1);
    return !0
};
c.qka = function(a, b, d) {
    var e, f;
    e = 0 | d.pixelDepth / 2;
    f = d.height * d.width * e;
    if (18 + f > b)
        return !1;
    d.tf = c.Fu(a, 18, 18 + f);
    if (3 <= e)
        for (a = 0; a < f; a += e)
            b = d.tf[a], d.tf[a] = d.tf[a + 2], d.tf[a + 2] = b;
    return !0
};
c.ska = function(a) {
    var b, d;
    if (8 !== a.pixelDepth) {
        var e = a.pixelDepth / 8, f = new Uint8Array(a.height * a.width);
        if (null !== f) {
            for (d = b = 0; d < a.width * a.height; b += e, d++)
                f[d] = 0.3 * a.tf[b] + 0.59 * a.tf[b + 1] + 0.11 * a.tf[b + 2];
            a.pixelDepth = 8;
            a.type = 3;
            a.tf = f
        }
    }
};
c.nka = function(a) {
    a && (a.tf = null)
};
c.rka = function(a, b, d) {
    var e, f, g, h = 0, k = 0, m = 0, p = [], r = 0, s = 18;
    e = d.pixelDepth / 8;
    f = d.height * d.width;
    for (g = 0; g < f; g++) {
        if (0 != r)
            r--, k = 0 != m;
        else {
            if (s + 1 > b)
                break;
            r = a[s];
            s += 1;
            (m = r & 128) && (r -= 128);
            k = 0
        }
        if (!k) {
            if (s + e > b)
                break;
            p = c.Fu(a, s, s + e);
            s += e;
            3 <= e && (k = p[0], p[0] = p[2], p[2] = k)
        }
        for (k = 0; k < e; k++)
            d.tf[h + k] = p[k];
        h += e
    }
    return !0
};
c.oka = function(a) {
    for (var b = a.pixelDepth / 8 * a.width, d = 0; d < a.height / 2; d++) {
        var e = c.Fu(a.tf, d * b, d * b + b);
        c.DI(c.Fu(a.tf, (a.height - (d + 1)) * b, b), a.tf, d * b);
        c.DI(e, a.tf, (a.height - (d + 1)) * b)
    }
    a.FM = 0
};
c.Fu = function(a, b, d) {
    return a instanceof Array ? a.slice(b, d) : a.subarray(b, d)
};
c.DI = function(a, b, d) {
    for (var e = 0; e < a.length; e++)
        b[d + e] = a[e]
};
c.aQ = c.la.extend({pn: null,ka: 0,ctor: function(a) {
        this.pn = a
    },Xha: function(a) {
        this.pn = a;
        this.ka = 0
    },zaa: function() {
        return this.pn
    },PU: function(a) {
        if (!(this.ka + Math.ceil(a / 8) < this.En.length))
            throw Error("Index out of bound");
    },dV: function(a, b) {
        var d = a + b + 1, e = d >> 3;
        this.PU(d);
        var d = Math.pow(2, b - 1) - 1, f = this.uC(a + b, 1, e), g = this.uC(a, b, e), h = 0, k = 2, m = 0;
        do
            for (var p = this.Wv(++m, e), r = a % 8 || 8, s = 1 << r; s >>= 1; )
                p & s && (h += 1 / k), k *= 2;
        while (a -= r);
        this.ka += e;
        return g == (d << 1) + 1 ? h ? NaN : f ? -Infinity : Infinity : (1 + -2 * f) * (g || h ? g ? Math.pow(2, 
        g - d) * (1 + h) : Math.pow(2, -d + 1) * h : 0)
    },Wv: function(a, b) {
        return this.En[this.ka + b - a - 1]
    },av: function(a, b) {
        var d = this.uC(0, a, a / 8), e = Math.pow(2, a);
        this.ka += a / 8;
        return b && d >= e / 2 ? d - e : d
    },aY: function(a, b) {
        for (++b; --b; a = 1073741824 == ((a %= 2147483648) & 1073741824) ? 2 * a : 2 * (a - 1073741824) + 2147483648)
            ;
        return a
    },uC: function(a, b, d) {
        var e = (a + b) % 8, f = a % 8, g = d - (a >> 3) - 1;
        a = d + (-(a + b) >> 3);
        var h = g - a;
        b = this.Wv(g, d) >> f & (1 << (h ? 8 - f : b)) - 1;
        for (h && e && (b += (this.Wv(a++, d) & (1 << e) - 1) << (h-- << 3) - f); h; )
            b += this.aY(this.Wv(a++, d), (h-- << 3) - f);
        return b
    },
    Xga: function() {
        return this.av(32, !0)
    },x2: function() {
        return this.av(32, !1)
    },Zga: function() {
        return this.dV(23, 8)
    },Yga: function() {
        return this.av(16, !0)
    },y2: function() {
        return this.av(16, !1)
    },R: function() {
        var a = this.En[this.ka];
        this.ka += 1;
        return a
    },Uga: function(a, b) {
        return this.pn instanceof Array ? this.pn.slice(a, b) : this.pn.subarray(a, b)
    },ny: function(a) {
        this.ka = a
    },SM: function() {
        return this.ka
    }});
c.uu = 0;
c.su = 1;
c.tu = 2;
c.Nz = c.ia.extend({Ib: null,sF: null,gp: null,Yc: null,Hb: null,qj: null,sb: "TMXTiledMap",ctor: function(a, b) {
        c.q.prototype.ctor.call(this);
        this.Yc = P(0, 0);
        this.Hb = P(0, 0);
        void 0 !== b ? this.$E(a, b) : void 0 !== a && this.ZE(a)
    },FE: function() {
        return P(this.Yc.width, this.Yc.height)
    },TO: function(a) {
        this.Yc.width = a.width;
        this.Yc.height = a.height
    },xB: function() {
        return this.Yc.width
    },OC: function(a) {
        this.Yc.width = a
    },wB: function() {
        return this.Yc.height
    },NC: function(a) {
        this.Yc.height = a
    },Vo: function() {
        return P(this.Hb.width, this.Hb.height)
    },
    iP: function(a) {
        this.Hb.width = a.width;
        this.Hb.height = a.height
    },tr: function() {
        return this.Hb.width
    },Ur: function(a) {
        this.Hb.width = a
    },sr: function() {
        return this.Hb.height
    },Tr: function(a) {
        this.Hb.height = a
    },Eba: function() {
        return this.sF
    },Kia: function(a) {
        this.sF = a
    },RM: function() {
        return this.gp
    },VO: function(a) {
        this.gp = a
    },Xw: function() {
        return this.Ib
    },oy: function(a) {
        this.Ib = a
    },ZE: function(a) {
        if (!a || 0 == a.length)
            throw "cc.TMXTiledMap.initWithTMXFile(): tmxFile should be non-null or non-empty string.";
        this.height = 
        this.width = 0;
        a = c.Cq.create(a);
        if (!a)
            return !1;
        var b = a.cm;
        b && 0 !== b.length || c.log("cc.TMXTiledMap.initWithTMXFile(): Map not found. Please check the filename.");
        this.OI(a);
        return !0
    },$E: function(a, b) {
        this.height = this.width = 0;
        var d = c.Cq.create(a, b), e = d.cm;
        e && 0 !== e.length || c.log("cc.TMXTiledMap.initWithXML(): Map not found. Please check the filename.");
        this.OI(d);
        return !0
    },OI: function(a) {
        this.Yc = a.FE();
        this.Hb = a.Vo();
        this.sF = a.orientation;
        this.gp = a.RM();
        this.Ib = a.Ib;
        this.qj = a.qj;
        var b = 0, d = a.he;
        if (d)
            for (var e = 
            null, f = 0, g = d.length; f < g; f++)
                (e = d[f]) && e.visible && (e = this.ZW(e, a), this.L(e, b, b), this.width = Math.max(this.width, e.width), this.height = Math.max(this.height, e.height), b++)
    },n9: function() {
        for (var a = [], b = this.s, d = 0, e = b.length; d < e; d++) {
            var f = b[d];
            f && f instanceof c.Bq && a.push(f)
        }
        return a
    },uba: function(a) {
        if (!a || 0 === a.length)
            throw "cc.TMXTiledMap.getLayer(): layerName should be non-null or non-empty string.";
        for (var b = this.s, d = 0; d < b.length; d++) {
            var e = b[d];
            if (e && e.Fx == a)
                return e
        }
        return null
    },Nba: function(a) {
        if (!a || 
        0 === a.length)
            throw "cc.TMXTiledMap.getObjectGroup(): groupName should be non-null or non-empty string.";
        if (this.gp)
            for (var b = 0; b < this.gp.length; b++) {
                var d = this.gp[b];
                if (d && d.Ls == a)
                    return d
            }
        return null
    },HE: function(a) {
        return this.Ib[a.toString()]
    },Qga: function(a) {
        return this.qj[a]
    },ZW: function(a, b) {
        var d = this.mY(a, b), d = c.Bq.create(d, a, b);
        a.eO = !1;
        d.Z3();
        return d
    },mY: function(a, b) {
        var d = a.qa, e = b.cm;
        if (e)
            for (var f = e.length - 1; 0 <= f; f--) {
                var g = e[f];
                if (g)
                    for (var h = 0; h < d.height; h++)
                        for (var k = 0; k < d.width; k++) {
                            var m = 
                            a.He[k + d.width * h];
                            if (0 != m && (m & c.Oz) >>> 0 >= g.wm)
                                return g
                        }
            }
        c.log("cocos2d: Warning: TMX Layer " + a.name + " has no tiles");
        return null
    }});
n = c.Nz.prototype;
c.f(n, "mapWidth", n.xB, n.OC);
c.f(n, "mapHeight", n.wB, n.NC);
c.f(n, "tileWidth", n.tr, n.Ur);
c.f(n, "tileHeight", n.sr, n.Tr);
c.Nz.create = function(a, b) {
    return new c.Nz(a, b)
};
c.pT = 0;
c.j7 = 1;
c.i7 = 2;
c.l7 = 3;
c.k7 = 4;
c.m7 = 5;
c.Dq = 2147483648;
c.Eq = 1073741824;
c.KH = 536870912;
c.LH = (c.Dq | c.Eq | c.KH) >>> 0;
c.Oz = ~c.LH >>> 0;
c.xl = c.la.extend({Ib: null,name: "",qa: null,He: null,visible: null,Sd: null,eO: !0,Nl: 1E5,Ml: 0,offset: null,ctor: function() {
        this.Ib = [];
        this.name = "";
        this.qa = null;
        this.He = [];
        this.visible = !0;
        this.Sd = 0;
        this.eO = !0;
        this.Nl = 1E5;
        this.Ml = 0;
        this.offset = N(0, 0)
    },Xw: function() {
        return this.Ib
    },oy: function(a) {
        this.Ib = a
    }});
c.oT = c.la.extend({name: "",wm: 0,Hb: null,ut: 0,margin: 0,oP: "",ix: null,ctor: function() {
        this.Hb = P(0, 0);
        this.ix = P(0, 0)
    },it: function(a) {
        var b = S(0, 0, 0, 0);
        b.width = this.Hb.width;
        b.height = this.Hb.height;
        a &= c.Oz;
        a -= parseInt(this.wm, 10);
        var d = parseInt((this.ix.width - 2 * this.margin + this.ut) / (this.Hb.width + this.ut), 10);
        b.x = parseInt(a % d * (this.Hb.width + this.ut) + this.margin, 10);
        b.y = parseInt(parseInt(a / d, 10) * (this.Hb.height + this.ut) + this.margin, 10);
        return b
    }});
c.Cq = c.ou.extend({Ib: null,orientation: null,parentElement: null,Vx: null,Ex: 0,iG: !1,Cp: null,jE: null,Lv: null,Yc: null,Hb: null,he: null,cm: null,qj: null,Zv: "",YI: 0,ctor: function(a, b) {
        c.ou.prototype.ctor.apply(this);
        this.Yc = P(0, 0);
        this.Hb = P(0, 0);
        this.he = [];
        this.cm = [];
        this.Lv = [];
        this.Ib = [];
        this.qj = {};
        this.YI = 0;
        void 0 !== b ? this.$E(a, b) : void 0 !== a && this.ZE(a)
    },Tba: function() {
        return this.orientation
    },Uia: function(a) {
        this.orientation = a
    },FE: function() {
        return P(this.Yc.width, this.Yc.height)
    },TO: function(a) {
        this.Yc.width = 
        a.width;
        this.Yc.height = a.height
    },xB: function() {
        return this.Yc.width
    },OC: function(a) {
        this.Yc.width = a
    },wB: function() {
        return this.Yc.height
    },NC: function(a) {
        this.Yc.height = a
    },Vo: function() {
        return P(this.Hb.width, this.Hb.height)
    },iP: function(a) {
        this.Hb.width = a.width;
        this.Hb.height = a.height
    },tr: function() {
        return this.Hb.width
    },Ur: function(a) {
        this.Hb.width = a
    },sr: function() {
        return this.Hb.height
    },Tr: function(a) {
        this.Hb.height = a
    },zba: function() {
        return this.he
    },s3: function(a) {
        this.he.push(a)
    },Lca: function() {
        return this.cm
    },
    Q3: function(a) {
        this.cm.push(a)
    },RM: function() {
        return this.Lv
    },VO: function(a) {
        this.Lv.push(a)
    },Yba: function() {
        return this.parentElement
    },Zia: function(a) {
        this.parentElement = a
    },Zba: function() {
        return this.Vx
    },$ia: function(a) {
        this.Vx = a
    },vba: function() {
        return this.Ex
    },Dia: function(a) {
        this.Ex = a
    },Bca: function() {
        return this.iG
    },qja: function(a) {
        this.iG = a
    },Xw: function() {
        return this.Ib
    },oy: function(a) {
        this.Ib = a
    },ZE: function(a) {
        this.fK(a, null);
        return this.yF(a)
    },$E: function(a, b) {
        this.fK(null, b);
        return this.f2(a)
    },
    yF: function(a, b) {
        var d = (b = b || !1) ? a : c.W.Dd(a);
        if (!d)
            throw "Please load the resource first : " + a;
        var e, f, d = this.bC(d).documentElement;
        e = d.getAttribute("version");
        f = d.getAttribute("orientation");
        if ("map" == d.nodeName && ("1.0" != e && null !== e && c.log("cocos2d: TMXFormat: Unsupported TMX version:" + e), "orthogonal" == f ? this.orientation = c.uu : "isometric" == f ? this.orientation = c.tu : "hexagonal" == f ? this.orientation = c.su : null !== f && c.log("cocos2d: TMXFomat: Unsupported orientation:" + f), e = P(0, 0), e.width = parseFloat(d.getAttribute("width")), 
        e.height = parseFloat(d.getAttribute("height")), this.TO(e), e = P(0, 0), e.width = parseFloat(d.getAttribute("tilewidth")), e.height = parseFloat(d.getAttribute("tileheight")), this.iP(e), f = d.querySelectorAll("map \x3e properties \x3e  property"))) {
            var g = {};
            for (e = 0; e < f.length; e++)
                g[f[e].getAttribute("name")] = f[e].getAttribute("value");
            this.Ib = g
        }
        g = d.getElementsByTagName("tileset");
        "map" !== d.nodeName && (g = [], g.push(d));
        for (e = 0; e < g.length; e++) {
            f = g[e];
            var h = f.getAttribute("source");
            if (h)
                f = b ? c.path.join(this.Zv, h) : 
                c.path.Eo(a, h), this.yF(f);
            else {
                h = new c.oT;
                h.name = f.getAttribute("name") || "";
                h.wm = parseInt(f.getAttribute("firstgid")) || 0;
                h.ut = parseInt(f.getAttribute("spacing")) || 0;
                h.margin = parseInt(f.getAttribute("margin")) || 0;
                var k = P(0, 0);
                k.width = parseFloat(f.getAttribute("tilewidth"));
                k.height = parseFloat(f.getAttribute("tileheight"));
                h.Hb = k;
                var k = f.getElementsByTagName("image")[0].getAttribute("source"), m = -1;
                this.Cp && (m = this.Cp.lastIndexOf("/"));
                h.oP = -1 !== m ? this.Cp.substr(0, m + 1) + k : this.Zv + (this.Zv ? "/" : "") + k;
                this.Q3(h);
                if (k = f.getElementsByTagName("tile"))
                    for (m = 0; m < k.length; m++) {
                        f = k[m];
                        this.Vx = parseInt(h.wm) + parseInt(f.getAttribute("id") || 0);
                        var p = f.querySelectorAll("properties \x3e property");
                        if (p) {
                            var r = {};
                            for (f = 0; f < p.length; f++) {
                                var s = p[f].getAttribute("name");
                                r[s] = p[f].getAttribute("value")
                            }
                            this.qj[this.Vx] = r
                        }
                    }
            }
        }
        if (g = d.getElementsByTagName("layer"))
            for (e = 0; e < g.length; e++) {
                k = g[e];
                m = k.getElementsByTagName("data")[0];
                h = new c.xl;
                h.name = k.getAttribute("name");
                f = P(0, 0);
                f.width = parseFloat(k.getAttribute("width"));
                f.height = 
                parseFloat(k.getAttribute("height"));
                h.qa = f;
                f = k.getAttribute("visible");
                h.visible = "0" != f;
                f = k.getAttribute("opacity") || 1;
                h.Sd = f ? parseInt(255 * parseFloat(f)) : 255;
                h.offset = N(parseFloat(k.getAttribute("x")) || 0, parseFloat(k.getAttribute("y")) || 0);
                p = "";
                for (f = 0; f < m.childNodes.length; f++)
                    p += m.childNodes[f].nodeValue;
                p = p.trim();
                f = m.getAttribute("compression");
                r = m.getAttribute("encoding");
                if (f && "gzip" !== f && "zlib" !== f)
                    return c.log("cc.TMXMapInfo.parseXMLFile(): unsupported compression method"), null;
                switch (f) {
                    case "gzip":
                        h.He = 
                        c.FP(p, 4);
                        break;
                    case "zlib":
                        f = new Zlib.bn(c.ja.ml.lM(p, 1));
                        h.He = c.B4(f.mM());
                        break;
                    case null:
                    case "":
                        if ("base64" == r)
                            h.He = c.ja.ml.lM(p, 4);
                        else if ("csv" === r)
                            for (h.He = [], f = p.split(","), m = 0; m < f.length; m++)
                                h.He.push(parseInt(f[m]));
                        else
                            for (f = m.getElementsByTagName("tile"), h.He = [], m = 0; m < f.length; m++)
                                h.He.push(parseInt(f[m].getAttribute("gid")));
                        break;
                    default:
                        this.Ex == c.xl.sG && c.log("cc.TMXMapInfo.parseXMLFile(): Only base64 and/or gzip/zlib maps are supported")
                }
                if (k = k.querySelectorAll("properties \x3e property")) {
                    m = 
                    {};
                    for (f = 0; f < k.length; f++)
                        m[k[f].getAttribute("name")] = k[f].getAttribute("value");
                    h.Ib = m
                }
                this.s3(h)
            }
        if (g = d.getElementsByTagName("objectgroup"))
            for (e = 0; e < g.length; e++) {
                k = g[e];
                h = new c.nT;
                h.Ls = k.getAttribute("name");
                h.C3(N(parseFloat(k.getAttribute("x")) * this.Vo().width || 0, parseFloat(k.getAttribute("y")) * this.Vo().height || 0));
                if (m = k.querySelectorAll("objectgroup \x3e properties \x3e property"))
                    for (f = 0; f < m.length; f++)
                        p = {}, p[m[f].getAttribute("name")] = m[f].getAttribute("value"), h.Ib = p;
                if (k = k.querySelectorAll("object"))
                    for (f = 
                    0; f < k.length; f++) {
                        p = k[f];
                        m = {};
                        m.name = p.getAttribute("name") || "";
                        m.type = p.getAttribute("type") || "";
                        m.x = parseInt(p.getAttribute("x") || 0) + h.ho.x;
                        r = parseInt(p.getAttribute("y") || 0) + h.ho.y;
                        m.width = parseInt(p.getAttribute("width")) || 0;
                        m.height = parseInt(p.getAttribute("height")) || 0;
                        m.y = parseInt(this.FE().height * this.Vo().height) - r - m.height;
                        if (r = p.querySelectorAll("properties \x3e property"))
                            for (s = 0; s < r.length; s++)
                                m[r[s].getAttribute("name")] = r[s].getAttribute("value");
                        (r = p.querySelectorAll("polygon")) && 
                        0 < r.length && (r = r[0].getAttribute("points")) && (m.polygonPoints = this.EK(r));
                        (p = p.querySelectorAll("polyline")) && 0 < p.length && (p = p[0].getAttribute("points")) && (m.polylinePoints = this.EK(p));
                        h.x3(m)
                    }
                this.VO(h)
            }
        return d
    },EK: function(a) {
        if (!a)
            return null;
        var b = [];
        a = a.split(" ");
        for (var d = 0; d < a.length; d++) {
            var e = a[d].split(",");
            b.push({x: e[0],y: e[1]})
        }
        return b
    },f2: function(a) {
        return this.yF(a, !0)
    },Ica: function() {
        return this.qj
    },yja: function(a) {
        this.qj.push(a)
    },Oaa: function() {
        return this.jE
    },jia: function(a) {
        this.jE = 
        a
    },Dca: function() {
        return this.Cp
    },tja: function(a) {
        this.Cp = a
    },fK: function(a, b) {
        this.cm.length = 0;
        this.he.length = 0;
        this.Cp = a;
        b && (this.Zv = b);
        this.Lv.length = 0;
        this.Ib.length = 0;
        this.qj.length = 0;
        this.jE = "";
        this.iG = !1;
        this.Ex = c.xl.sG;
        this.parentElement = c.pT;
        this.YI = 0
    }});
n = c.Cq.prototype;
c.f(n, "mapWidth", n.xB, n.OC);
c.f(n, "mapHeight", n.wB, n.NC);
c.f(n, "tileWidth", n.tr, n.Ur);
c.f(n, "tileHeight", n.sr, n.Tr);
c.Cq.create = function(a, b) {
    return new c.Cq(a, b)
};
c.W.Jj(["tmx", "tsx"], c.CL);
c.xl.sG = 1;
c.xl.e5 = 2;
c.xl.f5 = 4;
c.xl.g5 = 8;
c.nT = c.la.extend({Ib: null,Ls: "",ho: null,fo: null,ctor: function() {
        this.Ls = "";
        this.ho = N(0, 0);
        this.Ib = [];
        this.fo = []
    },cca: function() {
        return this.ho
    },C3: function(a) {
        this.ho.x = a.x;
        this.ho.y = a.y
    },Xw: function() {
        return this.Ib
    },oy: function(a) {
        this.Ib.push(a)
    },pba: function() {
        return this.Ls.toString()
    },Aia: function(a) {
        this.Ls = a
    },Rga: function(a) {
        return this.Ib[a]
    },fga: function(a) {
        if (this.fo && 0 < this.fo.length)
            for (var b = this.fo, d = 0, e = b.length; d < e; d++) {
                var f = b[d].name;
                if (f && f == a)
                    return b[d]
            }
        return null
    },Oba: function() {
        return this.fo
    },
    x3: function(a) {
        this.fo.push(a)
    }});
c.Bq = c.bf.extend({Kd: null,hg: null,cp: null,Ib: null,Fx: "",qa: null,vc: null,Sd: 255,Nl: null,Ml: null,ED: null,yD: null,J7: null,mh: null,Nd: null,Zg: null,ae: null,ye: null,KA: null,lw: null,mw: null,Nk: 0,kD: 0,yK: 1E7,sb: "TMXLayer",ctor: function(a, b, d) {
        c.bf.prototype.ctor.call(this);
        this.yd = [];
        this.qa = P(0, 0);
        this.vc = P(0, 0);
        if (c.A === c.Da) {
            var e = c.Xa, f = c.Kb("canvas");
            f.width = e.width;
            f.height = e.height;
            this.ae = f;
            this.ye = this.ae.getContext("2d");
            var g = new c.da;
            g.Ed(f);
            g.Vb();
            this.KA = g;
            this.width = e.width;
            this.height = e.height;
            this.Si = this
        }
        void 0 !== d && this.S0(a, b, d)
    },Zd: function(a, b) {
        var d = this.Q;
        c.q.prototype.Zd.call(this, a, b);
        if (c.A === c.Da) {
            var e = this.ae, f = c.qb();
            e.width = 0 | 1.5 * d.width * f;
            e.height = 0 | 1.5 * d.height * f;
            this.ye.translate(0, e.height);
            d = this.KA.Q;
            d.width = e.width;
            d.height = e.height;
            d = e.width * e.height;
            if (d > this.yK) {
                this.lw || (this.lw = []);
                this.mw || (this.mw = []);
                this.Nk = Math.ceil(d / this.yK);
                d = this.lw;
                for (f = 0; f < this.Nk; f++) {
                    d[f] || (d[f] = document.createElement("canvas"), this.mw[f] = d[f].getContext("2d"));
                    var g = d[f];
                    g.width = 
                    this.kD = Math.round(e.width / this.Nk);
                    g.height = e.height
                }
                for (f = this.Nk; f < d.length; f++)
                    g.width = 0, g.height = 0
            } else
                this.Nk = 0
        }
    },Oa: null,rr: function() {
        return this.KA
    },S: null,hm: function(a) {
        var b = a || c.k;
        if (this.yc) {
            b.save();
            this.transform(a);
            var d, e = this.s;
            if (this.tg) {
                var f = c.view;
                f.jL();
                var g = this.ye, h = this.ae;
                g.clearRect(0, 0, h.width, -h.height);
                g.save();
                g.translate(this.hb.x, -this.hb.y);
                if (e)
                    for (this.Sc(), d = 0; d < e.length; d++)
                        e[d] && e[d].S(g);
                g.restore();
                if (0 < this.Nk)
                    for (e = this.kD, g = h.height, d = 0; d < this.Nk; d++)
                        this.mw[d].drawImage(h, 
                        d * e, 0, e, g, 0, 0, e, g);
                f.XK();
                this.tg = !1
            }
            this.Z(a);
            b.restore()
        }
    },Z: null,El: function(a) {
        a = a || c.k;
        var b = 0 | -this.hb.x, d = 0 | -this.hb.y, e = c.view, f = this.ae;
        if (f) {
            var g = this.Nk, h = f.height * e.Ra;
            if (0 < g)
                for (var f = this.lw, k = 0; k < g; k++) {
                    var m = f[k];
                    a.drawImage(f[k], 0, 0, m.width, m.height, b + k * this.kD, -(d + h), m.width * e.pa, h)
                }
            else
                a.drawImage(f, 0, 0, f.width, f.height, b, -(d + h), f.width * e.pa, h)
        }
    },yba: function() {
        return P(this.qa.width, this.qa.height)
    },Gia: function(a) {
        this.qa.width = a.width;
        this.qa.height = a.height
    },LV: function() {
        return this.qa.width
    },
    EX: function(a) {
        this.qa.width = a
    },KV: function() {
        return this.qa.height
    },DX: function(a) {
        this.qa.height = a
    },Fba: function() {
        return P(this.vc.width, this.vc.height)
    },Lia: function(a) {
        this.vc.width = a.width;
        this.vc.height = a.height
    },tr: function() {
        return this.vc.width
    },Ur: function(a) {
        this.vc.width = a
    },sr: function() {
        return this.vc.height
    },Tr: function(a) {
        this.vc.height = a
    },Jca: function() {
        return this.Kd
    },zja: function(a) {
        this.Kd = a
    },Kca: function() {
        return this.hg
    },Aja: function(a) {
        this.hg = a
    },xba: function() {
        return this.cp
    },
    Fia: function(a) {
        this.cp = a
    },Xw: function() {
        return this.Ib
    },oy: function(a) {
        this.Ib = a
    },S0: function(a, b, d) {
        var e = b.qa, f = 0.35 * parseInt(e.width * e.height) + 1, g;
        a && (g = c.Ba.Ac(a.oP));
        return this.ra(g, f) ? (this.Fx = b.name, this.qa = e, this.Kd = b.He, this.Nl = b.Nl, this.Ml = b.Ml, this.Sd = b.Sd, this.Ib = b.Ib, this.Zg = c.C.Zg, this.hg = a, this.vc = d.Vo(), this.cp = d.orientation, a = this.HU(b.offset), this.U(c.AF(a)), this.Nd = [], this.Zd(c.nP(P(this.qa.width * this.vc.width, this.qa.height * this.vc.height))), this.yD = !1, this.ED = 0, !0) : !1
    },fha: function() {
        this.Kd && 
        (this.Kd = null);
        this.Nd && (this.Nd = null)
    },Hca: function(a, b) {
        if (!a)
            throw "cc.TMXLayer.getTileAt(): pos should be non-null";
        void 0 !== b && (a = N(a, b));
        if (a.x >= this.qa.width || a.y >= this.qa.height || 0 > a.x || 0 > a.y)
            throw "cc.TMXLayer.getTileAt(): invalid position";
        if (!this.Kd || !this.Nd)
            return c.log("cc.TMXLayer.getTileAt(): TMXLayer: the tiles map has been released"), null;
        var d = null, e = this.ME(a);
        if (0 === e)
            return d;
        var f = 0 | a.x + a.y * this.qa.width, d = this.Bh(f);
        d || (e = this.hg.it(e), e = c.Ij(e), d = new c.P, d.ra(this.texture, 
        e), d.batchNode = this, d.U(this.Ww(a)), d.vertexZ = this.ML(a), d.anchorX = 0, d.anchorY = 0, d.opacity = this.Sd, e = this.AA(f), this.GY(d, e, f));
        return d
    },ME: function(a, b) {
        if (!a)
            throw "cc.TMXLayer.getTileGIDAt(): pos should be non-null";
        void 0 !== b && (a = N(a, b));
        if (a.x >= this.qa.width || a.y >= this.qa.height || 0 > a.x || 0 > a.y)
            throw "cc.TMXLayer.getTileGIDAt(): invalid position";
        return this.Kd && this.Nd ? (this.Kd[0 | a.x + a.y * this.qa.width] & c.Oz) >>> 0 : (c.log("cc.TMXLayer.getTileGIDAt(): TMXLayer: the tiles map has been released"), null)
    },
    s0: function(a, b) {
        if (!a)
            throw "cc.TMXLayer.getTileFlagsAt(): pos should be non-null";
        void 0 !== b && (a = N(a, b));
        if (a.x >= this.qa.width || a.y >= this.qa.height || 0 > a.x || 0 > a.y)
            throw "cc.TMXLayer.getTileFlagsAt(): invalid position";
        return this.Kd && this.Nd ? (this.Kd[0 | a.x + a.y * this.qa.width] & c.LH) >>> 0 : (c.log("cc.TMXLayer.getTileFlagsAt(): TMXLayer: the tiles map has been released"), null)
    },xja: function(a, b, d, e) {
        if (!b)
            throw "cc.TMXLayer.setTileGID(): pos should be non-null";
        void 0 !== e ? b = N(b, d) : e = d;
        if (b.x >= this.qa.width || 
        b.y >= this.qa.height || 0 > b.x || 0 > b.y)
            throw "cc.TMXLayer.setTileGID(): invalid position";
        if (this.Kd && this.Nd)
            if (0 !== a && a < this.hg.wm)
                c.log("cc.TMXLayer.setTileGID(): invalid gid:" + a);
            else {
                e = e || 0;
                this.oh();
                d = this.s0(b);
                var f = this.ME(b);
                if (f != a || d != e)
                    if (d = (a | e) >>> 0, 0 === a)
                        this.J2(b);
                    else if (0 === f)
                        this.tW(d, b);
                    else {
                        var f = b.x + b.y * this.qa.width, g = this.Bh(f);
                        g ? (a = this.hg.it(a), a = c.Ij(a), g.ub(a, !1), null != e && this.ew(g, b, d), this.Kd[f] = d) : this.yY(d, b)
                    }
            }
        else
            c.log("cc.TMXLayer.setTileGID(): TMXLayer: the tiles map has been released")
    },
    J2: function(a, b) {
        if (!a)
            throw "cc.TMXLayer.removeTileAt(): pos should be non-null";
        void 0 !== b && (a = N(a, b));
        if (a.x >= this.qa.width || a.y >= this.qa.height || 0 > a.x || 0 > a.y)
            throw "cc.TMXLayer.removeTileAt(): invalid position";
        if (!this.Kd || !this.Nd)
            c.log("cc.TMXLayer.removeTileAt(): TMXLayer: the tiles map has been released");
        else if (0 !== this.ME(a)) {
            c.A === c.Da && this.oh();
            var d = 0 | a.x + a.y * this.qa.width, e = this.AA(d);
            this.Kd[d] = 0;
            this.Nd.splice(e, 1);
            if (d = this.Bh(d))
                c.bf.prototype.removeChild.call(this, d, !0);
            else if (c.A === 
            c.$ && this.textureAtlas.wO(e), this.s)
                for (var d = this.s, f = 0, g = d.length; f < g; f++) {
                    var h = d[f];
                    if (h) {
                        var k = h.atlasIndex;
                        k >= e && (h.atlasIndex = k - 1)
                    }
                }
        }
    },Ww: function(a, b) {
        void 0 !== b && (a = N(a, b));
        var d = N(0, 0);
        switch (this.cp) {
            case c.uu:
                d = this.eX(a);
                break;
            case c.tu:
                d = this.dX(a);
                break;
            case c.su:
                d = this.cX(a)
        }
        return c.AF(d)
    },HE: function(a) {
        return this.Ib[a]
    },Z3: function() {
        c.A === c.Da ? this.hg.ix = this.ie.Q : (this.hg.ix = this.textureAtlas.texture.Q, this.textureAtlas.texture.LF());
        this.YW();
        c.A === c.Da && this.oh();
        for (var a = 
        this.qa.height, b = this.qa.width, d = 0; d < a; d++)
            for (var e = 0; e < b; e++) {
                var f = this.Kd[e + b * d];
                0 !== f && (this.zU(f, N(e, d)), this.Nl = Math.min(f, this.Nl), this.Ml = Math.max(f, this.Ml))
            }
        this.Ml >= this.hg.wm && this.Nl >= this.hg.wm || c.log("cocos2d:TMX: Only 1 tileset per layer is supported")
    },L: function() {
        c.log("addChild: is not supported on cc.TMXLayer. Instead use setTileGID or tileAt.")
    },removeChild: function(a, b) {
        if (a)
            if (-1 === this.s.indexOf(a))
                c.log("cc.TMXLayer.removeChild(): Tile does not belong to TMXLayer");
            else {
                c.A === 
                c.Da && this.oh();
                var d = a.atlasIndex;
                this.Kd[this.Nd[d]] = 0;
                this.Nd.splice(d, 1);
                c.bf.prototype.removeChild.call(this, a, b)
            }
    },wba: function() {
        return this.Fx
    },Eia: function(a) {
        this.Fx = a
    },dX: function(a) {
        return N(this.vc.width / 2 * (this.qa.width + a.x - a.y - 1), this.vc.height / 2 * (2 * this.qa.height - a.x - a.y - 2))
    },eX: function(a) {
        return N(a.x * this.vc.width, (this.qa.height - a.y - 1) * this.vc.height)
    },cX: function(a) {
        return N(a.x * this.vc.width * 3 / 4, (this.qa.height - a.y - 1) * this.vc.height + (1 == a.x % 2 ? -this.vc.height / 2 : 0))
    },HU: function(a) {
        var b = 
        N(0, 0);
        switch (this.cp) {
            case c.uu:
                b = N(a.x * this.vc.width, -a.y * this.vc.height);
                break;
            case c.tu:
                b = N(this.vc.width / 2 * (a.x - a.y), this.vc.height / 2 * (-a.x - a.y));
                break;
            case c.su:
                0 === a.x && 0 === a.y || c.log("offset for hexagonal map not implemented yet")
        }
        return b
    },zU: function(a, b) {
        var d = this.hg.it(a), d = c.Ij(d), e = 0 | b.x + b.y * this.qa.width, d = this.CC(d);
        this.ew(d, b, a);
        var f = this.Nd.length;
        this.px(d, f);
        this.Nd.splice(f, 0, e);
        return d
    },tW: function(a, b) {
        var d = this.hg.it(a), d = c.Ij(d), e = 0 | b.x + b.y * this.qa.width, d = this.CC(d);
        this.ew(d, b, a);
        var f = this.BU(e);
        this.px(d, f);
        this.Nd.splice(f, 0, e);
        if (this.s)
            for (var g = this.s, h = 0, k = g.length; h < k; h++) {
                var m = g[h];
                if (m) {
                    var p = m.atlasIndex;
                    p >= f && (m.atlasIndex = p + 1)
                }
            }
        this.Kd[e] = a;
        return d
    },yY: function(a, b) {
        var d = this.hg.it(a), e = this.Zg, d = S(d.x / e, d.y / e, d.width / e, d.height / e), e = b.x + b.y * this.qa.width, d = this.CC(d);
        this.ew(d, b, a);
        d.atlasIndex = this.AA(e);
        d.dirty = !0;
        d.Ze();
        this.Kd[e] = a;
        return d
    },YW: function() {
        var a = this.HE("cc_vertexz");
        if (a)
            if ("automatic" == a) {
                this.yD = !0;
                var b = this.HE("cc_alpha_func"), 
                a = 0;
                b && (a = parseFloat(b));
                c.A === c.$ && (this.shaderProgram = c.Jd.mc(c.qu), b = c.k.getUniformLocation(this.shaderProgram.Am(), c.tI), this.shaderProgram.Jc(), this.shaderProgram.rt(b, a))
            } else
                this.ED = parseInt(a, 10)
    },ew: function(a, b, d) {
        var e = b.x + b.y * this.qa.width;
        a.U(this.Ww(b));
        c.A === c.$ ? a.vertexZ = this.ML(b) : a.tag = e;
        a.anchorX = 0;
        a.anchorY = 0;
        a.opacity = this.Sd;
        c.A === c.$ && (a.rotation = 0);
        a.iy(!1);
        a.QF(!1);
        (d & c.KH) >>> 0 ? (a.anchorX = 0.5, a.anchorY = 0.5, a.x = this.Ww(b).x + a.width / 2, a.y = this.Ww(b).y + a.height / 2, b = (d & (c.Dq | 
        c.Eq) >>> 0) >>> 0, b == c.Dq ? a.rotation = 90 : b == c.Eq ? a.rotation = 270 : (a.rotation = b == (c.Eq | c.Dq) >>> 0 ? 90 : 270, a.iy(!0))) : ((d & c.Dq) >>> 0 && a.iy(!0), (d & c.Eq) >>> 0 && a.QF(!0))
    },CC: function(a) {
        c.A === c.$ ? (this.mh ? (this.mh.batchNode = null, this.mh.ub(a, !1)) : (this.mh = new c.P, this.mh.ra(this.texture, a, !1)), this.mh.batchNode = this) : (this.mh = new c.P, this.mh.ra(this.Pk, a, !1), this.mh.batchNode = this, this.mh.parent = this);
        return this.mh
    },ML: function(a) {
        var b = 0, d = 0;
        if (this.yD)
            switch (this.cp) {
                case c.tu:
                    d = this.qa.width + this.qa.height;
                    b = -(d - (a.x + a.y));
                    break;
                case c.uu:
                    b = -(this.qa.height - a.y);
                    break;
                case c.su:
                    c.log("TMX Hexa zOrder not supported");
                    break;
                default:
                    c.log("TMX invalid value")
            }
        else
            b = this.ED;
        return b
    },AA: function(a) {
        var b;
        if (this.Nd)
            for (var d = this.Nd, e = 0, f = d.length; e < f && (b = d[e], b != a); e++)
                ;
        "number" != typeof b && c.log("cc.TMXLayer._atlasIndexForExistantZ(): TMX atlas index not found. Shall not happen");
        return e
    },BU: function(a) {
        for (var b = this.Nd, d = 0, e = b.length; d < e && !(a < b[d]); d++)
            ;
        return d
    }});
n = c.Bq.prototype;
c.A == c.$ ? (n.Z = c.bf.prototype.Z, n.S = c.bf.prototype.S, n.Oa = c.bf.prototype.Oa) : (n.Z = n.El, n.S = n.hm, n.Oa = n.rr);
c.f(n, "texture", n.Oa, n.ob);
c.f(n, "layerWidth", n.LV, n.EX);
c.f(n, "layerHeight", n.KV, n.DX);
c.f(n, "tileWidth", n.tr, n.Ur);
c.f(n, "tileHeight", n.sr, n.Tr);
c.Bq.create = function(a, b, d) {
    return new c.Bq(a, b, d)
};
c.pz = c.la.extend({Pr: null,ka: null,Yq: null,kca: function() {
        return this.Pr
    },gja: function(a) {
        this.Pr = a
    },SM: function() {
        return this.ka
    },ny: function(a) {
        this.ka = a
    },Gaa: function() {
        return this.Yq
    },c3: function(a) {
        this.Yq = a
    },I0: function(a, b) {
        this.Pr = a;
        this.ka = b;
        this.Yq = null;
        return !0
    }});
c.pz.create = function(a, b) {
    var d = new c.pz;
    d.I0(a, b);
    return d
};
c.jH = c.ia.extend({Hm: null,LB: null,sb: "ParallaxNode",Xba: function() {
        return this.Hm
    },Yia: function(a) {
        this.Hm = a
    },ctor: function() {
        c.ia.prototype.ctor.call(this);
        this.Hm = [];
        this.LB = N(-100, -100)
    },L: function(a, b, d, e) {
        if (3 === arguments.length)
            c.log("ParallaxNode: use addChild(child, z, ratio, offset) instead");
        else {
            if (!a)
                throw "cc.ParallaxNode.addChild(): child should be non-null";
            var f = c.pz.create(d, e);
            f.c3(a);
            this.Hm.push(f);
            a.U(this.xa.x * d.x + e.x, this.xa.y * d.y + e.y);
            c.ia.prototype.L.call(this, a, b, a.tag)
        }
    },
    removeChild: function(a, b) {
        for (var d = this.Hm, e = 0; e < d.length; e++)
            if (d[e].Yq == a) {
                d.splice(e, 1);
                break
            }
        c.ia.prototype.removeChild.call(this, a, b)
    },Jg: function(a) {
        this.Hm.length = 0;
        c.ia.prototype.Jg.call(this, a)
    },S: function() {
        var a = this.rU();
        if (!c.zF(a, this.LB)) {
            for (var b = this.Hm, d = 0, e = b.length; d < e; d++) {
                var f = b[d];
                f.Yq.U(-a.x + a.x * f.Pr.x + f.ka.x, -a.y + a.y * f.Pr.y + f.ka.y)
            }
            this.LB = a
        }
        c.ia.prototype.S.call(this)
    },rU: function() {
        for (var a = this.xa, b = this; null != b.parent; )
            b = b.parent, a = c.Fj(a, b.Vw());
        return a
    }});
c.jH.create = function() {
    return new c.jH
};
if (c.Lb.nw) {
    var Y = c.Ika = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext);
    c.lA = c.la.extend({Kn: null,ab: null,Zl: null,KD: null,src: null,BF: null,autoplay: null,controls: null,Pfa: null,currentTime: 0,startTime: 0,duration: 0,NB: null,JD: 1,Sv: 0,kc: !1,as: !0,yg: -1,ctor: function(a) {
            this.Kn = {};
            this.src = a;
            this.KD = Y.createGain ? Y.createGain() : Y.createGainNode();
            this.OW = this.NW.bind(this);
            this.LW = this.KW.bind(this)
        },cC: function(a) {
            var b = this.Zl = Y.createBufferSource(), d = this.KD;
            a = a || 0;
            b.buffer = 
            this.ab;
            d.gain.value = this.JD;
            b.connect(d);
            d.connect(Y.destination);
            b.loop = this.NB;
            this.as = this.kc = !1;
            b.start ? b.start(0, a) : b.noteGrainOn ? (d = b.buffer.duration, this.loop ? b.noteGrainOn(0, a, d) : b.noteGrainOn(0, a, d - a)) : b.noteOn(0);
            this.Sv = 0
        },xL: function() {
            var a = this.Zl;
            this.as || (a.stop ? a.stop(0) : a.Sfa(0), this.as = !0)
        },play: function() {
            if (-1 == this.yg)
                this.yg = 0;
            else if (1 == this.yg) {
                var a = this.Zl;
                if (this.as || !a || 2 != a.playbackState)
                    this.startTime = Y.currentTime, this.cC(0)
            }
        },pause: function() {
            this.Sv = Y.currentTime;
            this.kc = !0;
            this.xL()
        },pp: function() {
            this.kc && this.cC(this.ab ? (this.Sv - this.startTime) % this.ab.duration : 0)
        },stop: function() {
            this.Sv = 0;
            this.kc = !1;
            this.xL()
        },load: function() {
            var a = this;
            if (1 != a.yg) {
                a.yg = -1;
                a.played = !1;
                a.ended = !0;
                var b = new XMLHttpRequest;
                b.open("GET", a.src, !0);
                b.responseType = "arraybuffer";
                b.onload = function() {
                    Y.decodeAudioData(b.response, a.OW, a.LW)
                };
                b.send()
            }
        },addEventListener: function(a, b) {
            this.Kn[a] = b.bind(this)
        },removeEventListener: function(a) {
            delete this.Kn[a]
        },C9: function() {
            return c.Lb.nw
        },
        NW: function(a) {
            this.ab = a;
            a = this.Kn.success;
            var b = this.Kn.canplaythrough;
            a && a();
            b && b();
            0 != this.yg && "autoplay" != this.autoplay && !0 != this.autoplay || this.cC();
            this.yg = 1
        },KW: function() {
            var a = this.Kn.error;
            a && a();
            this.yg = -2
        },cloneNode: function() {
            var a = new c.lA(this.src);
            a.volume = this.volume;
            a.yg = this.yg;
            a.ab = this.ab;
            0 != a.yg && -1 != a.yg || a.load();
            return a
        }});
    n = c.lA.prototype;
    c.f(n, "loop", function() {
        return this.NB
    }, function(a) {
        this.NB = a;
        this.Zl && (this.Zl.loop = a)
    });
    c.f(n, "volume", function() {
        return this.JD
    }, function(a) {
        this.JD = 
        a;
        this.KD.gain.value = a
    });
    c.f(n, "paused", function() {
        return this.kc
    });
    c.f(n, "ended", function() {
        var a = this.Zl;
        return !this.kc && (this.as || !a || 3 == a.playbackState)
    });
    c.f(n, "played", function() {
        var a = this.Zl;
        return a && 2 == a.playbackState
    })
}
c.xG = c.la.extend({$C: !1,Pd: null,$u: null,hf: 0,LI: 0,fe: {},Wq: {},iv: 1,PB: 5,ok: null,Mr: [],ctor: function() {
        this.$C = 0 < c.BA.ow.length;
        this.ok && (this.ok = this.ok.bind(this))
    },Kka: function() {
        return !1
    },Yaa: function() {
        return this.iv
    },Lga: function(a, b) {
        if (this.$C) {
            var d = this.Pd;
            d && this.Mk(d);
            a != this.$u && (this.Pd = d = this.oB(a), this.$u = a);
            d && (d.loop = b || !1, this.dC(d))
        }
    },oB: function(a) {
        var b = c.W, d = b.Dd(a);
        d || (b.load(a), d = b.Dd(a));
        return d
    },dC: function(a) {
        a.ended || (a.stop ? a.stop() : (a.pause(), a.currentTime = 0));
        this.hf = 
        2;
        a.play()
    },o4: function(a) {
        if (0 < this.hf) {
            var b = this.Pd;
            b && this.Mk(b) && (a && c.W.Ei(this.$u), this.$u = this.Pd = null, this.hf = 0)
        }
    },Mk: function(a) {
        return a && !a.ended ? (a.stop ? a.stop() : a.duration && Infinity != a.duration ? a.currentTime = a.duration : a.pause(), !0) : !1
    },mO: function() {
        2 == this.hf && (this.Pd.pause(), this.hf = 1)
    },R2: function() {
        1 == this.hf && (this.hj(this.Pd), this.hf = 2)
    },hj: function(a) {
        a && !a.ended && (a.pp ? a.pp() : a.play())
    },Eha: function() {
        this.Pd && this.dC(this.Pd)
    },Kba: function() {
        return 0 == this.hf ? 0 : this.Pd.volume
    },
    Mia: function(a) {
        0 < this.hf && (this.Pd.volume = Math.min(Math.max(a, 0), 1))
    },fF: function() {
        return 2 == this.hf && this.Pd && !this.Pd.ended
    },rB: function(a) {
        var b = this.Wq[a];
        b || (b = this.Wq[a] = []);
        return b
    },WJ: function(a) {
        var b;
        if (!this.$C)
            return null;
        for (var d = this.rB(a), e = 0, f = d.length; e < f; e++) {
            var g = d[e];
            if (g.ended) {
                b = g;
                b.currentTime = 0;
                window.chrome && b.load();
                break
            }
        }
        if (!b) {
            if (d.length >= this.PB)
                return c.log("Error: " + a + " greater than " + this.PB), null;
            b = this.oB(a);
            if (!b)
                return null;
            b = b.cloneNode(!0);
            this.ok && c.Ia(b, 
            "pause", this.ok);
            b.volume = this.iv;
            d.push(b)
        }
        return b
    },l2: function(a, b) {
        var d = this.WJ(a);
        if (!d)
            return null;
        d.loop = b || !1;
        d.play();
        var e = this.LI++;
        this.fe[e] = d;
        return e
    },pia: function(a) {
        a = this.iv = Math.min(Math.max(a, 0), 1);
        var b = this.fe, d;
        for (d in b)
            b[d].volume = a
    },i2: function(a) {
        (a = this.fe[a]) && !a.ended && a.pause()
    },g2: function() {
        var a = this.fe, b;
        for (b in a) {
            var d = a[b];
            d.ended || d.pause()
        }
    },Q2: function(a) {
        this.hj(this.fe[a])
    },P2: function() {
        var a = this.fe, b;
        for (b in a)
            this.hj(a[b])
    },n4: function(a) {
        this.Mk(this.fe[a]);
        delete this.fe[a]
    },rP: function() {
        var a = this.fe, b;
        for (b in a)
            this.Mk(a[b]), delete a[b]
    },C4: function(a) {
        var b = c.W, d = this.fe, e = this.rB(a);
        b.Ei(a);
        if (0 != e.length) {
            b = e[0].src;
            delete this.Wq[a];
            for (var f in d)
                d[f].src == b && (this.Mk(d[f]), delete d[f])
        }
    },end: function() {
        this.o4();
        this.rP()
    },GK: function() {
        var a = this.fe, b, d;
        for (d in a)
            !(b = a[d]) || b.ended || b.paused || (this.Mr.push(b), b.pause());
        this.fF() && (this.Mr.push(this.Pd), this.Pd.pause())
    },YK: function() {
        for (var a = this.Mr, b = 0, d = a.length; b < d; b++)
            this.hj(a[b]);
        a.length = 0
    }});
!c.Lb.nw && 0 > c.Lb.jY && (c.yG = c.xG.extend({Tk: [],Lr: [],Ff: null,PB: 2,hv: {},Pl: !1,Ln: 0,HB: !1,dC: function(a) {
        this.hD();
        this._super(a)
    },R2: function() {
        1 == this.hf && (this.hD(), this.Pl = !1, this.Ln = 0, this._super())
    },l2: function(a, b) {
        var d = this.Ff, e = b ? this.WJ(a) : this.ZV(a);
        if (!e)
            return null;
        e.loop = b || !1;
        var f = this.LI++;
        this.fe[f] = e;
        this.fF() && (this.mO(), this.Pl = !0);
        d ? (d != e && this.Tk.push(this.Dn), this.Tk.push(f), d.pause()) : (this.Ff = e, this.Dn = f, e.play());
        return f
    },i2: function() {
        c.log("pauseEffect not supported in single audio mode!")
    },g2: function() {
        var a = 
        this.Tk, b = this.Lr, d = this.Ff;
        if (d) {
            for (var e = 0, f = a.length; e < f; e++)
                b.push(a[e]);
            a.length = 0;
            b.push(this.Dn);
            d.pause()
        }
    },Q2: function() {
        c.log("resumeEffect not supported in single audio mode!")
    },P2: function() {
        var a = this.Tk, b = this.Lr;
        this.fF() && (this.mO(), this.Pl = !0);
        for (var d = 0, e = b.length; d < e; d++)
            a.push(b[d]);
        b.length = 0;
        !this.Ff && 0 <= a.length && (a = a.pop(), b = this.fe[a]) && (this.Dn = a, this.Ff = b, this.hj(b))
    },n4: function(a) {
        var b = this.Ff, d = this.Tk, e = this.Lr;
        b && this.Dn == a ? this.Mk(b) : (b = d.indexOf(a), 0 <= b ? d.splice(b, 
        1) : (b = e.indexOf(a), 0 <= b && e.splice(b, 1)))
    },rP: function() {
        this.hD();
        !this.Ff && this.Pl && (this.hj(this.Pd), this.hf = 2, this.Pl = !1, this.Ln = 0)
    },C4: function(a) {
        var b = c.W, d = this.fe, e = this.hv, f = this.rB(a), g = this.Ff;
        b.Ei(a);
        if (0 != f.length || e[a]) {
            b = 0 < f.length ? f[0].src : e[a].src;
            delete this.Wq[a];
            delete e[a];
            for (var h in d)
                d[h].src == b && delete d[h];
            g && g.src == b && this.Mk(g)
        }
    },ZV: function(a) {
        var b = this.hv[a], d = this.Tk, e = this.Lr, f = this.fe;
        if (b)
            b.currentTime = 0;
        else {
            b = this.oB(a);
            if (!b)
                return null;
            b = b.cloneNode(!0);
            this.ok && 
            c.Ia(b, "pause", this.ok);
            b.volume = this.iv;
            this.hv[a] = b
        }
        a = 0;
        for (var g = d.length; a < g; )
            f[d[a]] == b ? d.splice(a, 1) : a++;
        a = 0;
        for (g = e.length; a < g; )
            f[e[a]] == b ? e.splice(a, 1) : a++;
        b.zr = !0;
        return b
    },hD: function() {
        var a = this.Ff, b = this.Wq, d = this.hv, e = this.Tk, f = this.Lr;
        if (a || 0 != e.length || 0 != f.length) {
            for (var g in d) {
                var h = d[g];
                h.duration && Infinity != h.duration && (h.currentTime = h.duration)
            }
            e.length = 0;
            f.length = 0;
            for (g in b)
                for (d = b[g], e = 0, f = d.length; e < f; e++)
                    h = d[e], h.loop = !1, h.duration && Infinity != h.duration && (h.currentTime = 
                    h.duration);
            a && this.Mk(a)
        }
    },ok: function() {
        if (!this.HB) {
            var a = this.bW();
            if (a)
                a.zr ? (delete a.zr, a.play()) : this.hj(a);
            else if (this.Pl) {
                a = this.Pd;
                if (a.duration && Infinity != a.duration) {
                    var b = a.currentTime + this.Ln, b = b - a.duration * (b / a.duration | 0);
                    a.currentTime = b
                }
                this.Ln = 0;
                this.hj(a);
                this.hf = 2;
                this.Pl = !1
            }
        }
    },bW: function() {
        var a = this.Tk, b = this.fe, d = this.Ff, e = d ? d.currentTime - (d.startTime || 0) : 0;
        for (this.Ln += e; 0 != a.length; ) {
            var f = a.pop();
            if (d = b[f]) {
                if (d.zr || d.loop || d.duration && d.currentTime + e < d.duration)
                    return this.Dn = 
                    f, this.Ff = d, !d.zr && d.duration && Infinity != d.duration && (a = d.currentTime + e, a -= d.duration * (a / d.duration | 0), d.currentTime = a), d.zr = !1, d;
                d.duration && Infinity != d.duration && (d.currentTime = d.duration)
            }
        }
        return this.Ff = this.Dn = null
    },GK: function() {
        var a = this.Ff;
        this.HB = !0;
        if (a = 2 == this.hf ? this.Pd : a)
            this.Mr.push(a), a.pause()
    },YK: function() {
        var a = this.Mr;
        this.HB = !1;
        0 < a.length && (this.hj(a[0]), a.length = 0)
    }}));
c.BA = {ow: null,Tw: function() {
        return c.W.YY
    },MB: function(a, b, d, e, f, g, h) {
        var k = this, m = c.W, p = c.path, r = this.ow, s = "";
        if (0 == r.length)
            return h("can not support audio!");
        if (-1 == e)
            s = (p.Vk(a) || "").toLowerCase(), k.ZY(s) || (s = r[0], e = 0);
        else if (e < r.length)
            s = r[e];
        else
            return h("can not found the resource of audio! Last match url is : " + a);
        if (0 <= f.indexOf(s))
            return k.MB(a, b, d, e + 1, f, g, h);
        a = p.bM(a, s);
        f.push(s);
        g = k.AW(a, g, function(m) {
            if (m)
                return k.MB(a, b, d, e + 1, f, g, h);
            h(null, g)
        }, e == r.length - 1);
        m.Uf[b] = g
    },ZY: function(a) {
        return a ? 
        0 <= this.ow.indexOf(a.toLowerCase()) : !1
    },AW: function(a, b, d, e) {
        var f = "file://" == location.origin ? Audio : c.lA || Audio;
        2 == arguments.length ? (d = b, b = new f) : 3 < arguments.length && !b && (b = new f);
        b.src = a;
        b.BF = "auto";
        f = navigator.userAgent;
        /Mobile/.test(f) && (/iPhone OS/.test(f) || /iPad/.test(f) || /Firefox/.test(f)) || /MSIE/.test(f) ? (b.load(), d(null, b)) : (c.Ia(b, "canplaythrough", function() {
            d(null, b);
            this.removeEventListener("canplaythrough", arguments.callee, !1);
            this.removeEventListener("error", arguments.callee, !1)
        }, !1), 
        c.Ia(b, "error", function() {
            d("load " + a + " failed");
            e && (this.removeEventListener("canplaythrough", arguments.callee, !1), this.removeEventListener("error", arguments.callee, !1))
        }, !1), b.load());
        return b
    },load: function(a, b, d, e) {
        this.MB(a, b, d, -1, [], null, e)
    }};
c.BA.ow = function() {
    var a = c.Kb("audio"), b = [];
    if (a.canPlayType) {
        var d = function(b) {
            b = a.canPlayType(b);
            return "no" != b && "" != b
        };
        d('audio/ogg; codecs\x3d"vorbis"') && b.push(".ogg");
        d("audio/mpeg") && b.push(".mp3");
        d('audio/wav; codecs\x3d"1"') && b.push(".wav");
        d("audio/mp4") && b.push(".mp4");
        (d("audio/x-m4a") || d("audio/aac")) && b.push(".m4a")
    }
    return b
}();
c.W.Jj(["mp3", "ogg", "wav", "mp4", "m4a"], c.BA);
c.VL = c.yG ? new c.yG : new c.xG;
c.ta.ND(c.Fc.Mt, function() {
    c.VL.GK()
});
c.ta.ND(c.Fc.Op, function() {
    c.VL.YK()
});
var ta = "res/role_0.png res/role_1.png res/mooncake.png res/mooncake.plist res/others.png res/others.plist res/gameover.png res/gameover.plist".split(" ");
var ya = c.sd.extend({n8: null,w8: null,N8: null,f8: null,ctor: function() {
        this._super();
        this.vj();
        return !0
    },vj: function() {
        c.Lh.Bw("res/mooncake.plist");
        c.Lh.Bw("res/others.plist");
        c.Lh.Bw("res/gameover.plist");
        var a = c.C.K, b = new c.P.create("#bg.png");
        b.scaleX = a.width / b.width;
        b.scaleY = a.height / b.height;
        b.Tb({anchorX: 0,anchorY: 0,x: 0,y: 0});
        this.L(b);
        _moonLayer = new ua(this);
        _moonLayer.visible = !1;
        this.L(_moonLayer);
        _gameOverLayer = new va(this);
        _gameOverLayer.visible = !1;
        this.L(_gameOverLayer);
        _homeLayer = new wa(this);
        this.L(_homeLayer);
        _shareLayer = new xa(this);
        _shareLayer.visible = !1;
        this.L(_shareLayer)
    },ry: function(a) {
        _shareLayer.visible = a
    },F0: function() {
        _gameOverLayer.visible = !1;
        this.ry(!1);
        _homeLayer.visible = !1;
        _moonLayer.qP();
        _moonLayer.visible = !0
    },rN: function() {
        window.location = "http://nsgame.qiniudn.com"
    },sN: function() {
        window.location = "http://nsgame.qiniudn.com/ios/index.html"
    },S1: function(a, b) {
        share(a, b);
        _gameOverLayer.G4(a, b);
        _gameOverLayer.visible = !0
    },n_: function() {
        this.ry(!0)
    },o_: function() {
        _gameOverLayer.visible = 
        !1;
        this.ry(!1);
        _homeLayer.visible = !1;
        _moonLayer.qP();
        _moonLayer.visible = !0
    }}), za = c.vl.extend({ca: function() {
        this._super();
        var a = new ya;
        this.L(a)
    }}), va = c.sd.extend({nB: null,I7: null,ctor: function(a) {
        this._super();
        _gameLayer = a;
        this.vj();
        return !0
    },vj: function() {
        var a = c.C.K, b = new c.P.create("#gameoverbg.png");
        b.Tb({anchorX: 0.5,anchorY: 0,x: 0.5 * a.width,y: 0.5 * a.height});
        this.L(b);
        _alertLab = new c.V.create("\u4f60\u4e00\u5171\u5403\u4e860\u4e2a\u677e\u679c, \u597d\u817b\u5bb3! \u628a\u5173\u952e\u5b57\u201c\u677e\u679c\u201d+\u6e38\u620f\u7ed3\u679c\u622a\u5c4f\u53d1\u9001\u5230\u3010\u0055\u0043\u6d4f\u89c8\u5668\u3011\u5b98\u65b9\u5fae\u4fe1, \u8d62\u0055\u0043\u65b0\u7248\u677e\u9f20!", Z, 24);
        _alertLab.Tb({anchorX: 0.5,
            anchorY: 0.5,x: 0.5 * a.width,y: 0.5 * a.height + 0.25 * b.height});
        _alertLab.color = c.color(0, 0, 0);
        this.L(_alertLab);
        /*b = c.V.create("\u66f4\u591aiOS\u6e38\u620f", Z, 40);
        b.color = c.color(40, 40, 40);
        b = c.Ni.create(b, function() {
            this.mE()
        }, this);
        b = c.Mi.create(b);
        b.x = a.width / 2;
        b.y = 130;
        b.Cw(60);
        this.L(b);
        b.visible = !1;*/
        var b = new c.P.create("#share_n.png"), d = new c.P.create("#share_s.png"), d = new c.Oi.create(b, d, null, function() {
            this.GZ()
        }, this), e = new c.P.create("#tryagain_n.png"), f = new c.P.create("#tryagain_s.png"), e = new c.Oi.create(e, f, 
        null, function() {
            this.HZ()
        }, this), d = c.Mi.create(d, e);
        d.x = a.width / 2;
        d.y = 0.5 * a.height - 20 - 0.5 * b.height;
        d.Cw(40);
        this.L(d)
    },GZ: function() {
        _gameLayer.n_()
    },HZ: function() {
        _gameLayer.o_()
    },EZ: function() {
        _gameLayer.rN()
    },mE: function() {
        _gameLayer.sN()
    },G4: function(a, b) {
        _alertLab.nc("\u4f60\u4e00\u5171\u5403\u4e86" + a + "\u4e2a\u677e\u679c,\u597d\u817b\u5bb3!\n\u628a\u5173\u952e\u5b57\u201c\u677e\u679c\u201d+\u6e38\u620f\u7ed3\u679c\u622a\u5c4f\n\u53d1\u9001\u5230\u3010\u0055\u0043\u6d4f\u89c8\u5668\u3011\u5b98\u65b9\u5fae\u4fe1,\n\u8d62\u0055\u0043\u65b0\u7248\u677e\u9f20!")
    }}), wa = c.sd.extend({nB: null,ctor: function(a) {
        this._super();
        _gameLayer = a;
        this.vj();
        return !0
    },vj: function() {
        var a = c.C.K, b = new c.P.create("#play.png"), 
        d = new c.P.create("#play_s.png"), b = new c.Oi.create(b, d, null, function() {
            this.FZ()
        }, this), b = new c.Mi.create(b);
        b.x = a.width / 2;
        b.y = a.height / 2;
        this.L(b);
        /*b = new c.V.create("\u66f4\u591aiOS\u6e38\u620f", Z, 40);
        b.color = c.color(40, 40, 40);
        b = new c.Ni.create(b, function() {
            this.mE()
        }, this);
        b = new c.Mi.create(b);
        b.x = a.width / 2;
        b.y = 130;
        b.Cw(60);
        this.L(b);*/
        b = new c.V.create("UC\u75af\u72c2\u5403\u677e\u679c", Z, 90);
        b.color = c.color(0, 175, 183);
        b.x = 0.5 * a.width;
        b.y = 3.5 * a.height / 4;
        this.L(b)
        //b.visible = !1;
    },FZ: function() {
        _gameLayer.F0()
    },EZ: function() {
        _gameLayer.rN()
    },
    mE: function() {
        _gameLayer.sN()
    }}), xa = c.sd.extend({nB: null,ctor: function(a) {
        this._super();
        _gameLayer = a;
        this.vj();
        return !0
    },vj: function() {
        var a = c.C.K, b = new c.fd.create(c.color(0, 0, 0));
        b.opacity = 220;
        this.L(b);
        b = new c.P.create("#arrow.png");
        b.Tb({anchorX: 1,anchorY: 1,x: a.width - 5,y: a.height - 5});
        this.L(b);
        var d = new c.V.create("\u8bf7\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u83dc\u5355\u6309\u94ae", Z, 30);
        d.x = 0.5 * a.width;
        d.y = a.height - 10 - b.height;
        this.L(d)
    }});
MoonLayerZ = {q: 0,jS: 1,Gt: 2,rl: 3};
MoonGameState = {wq: 0,pq: 1,RQ: 2};
var ua = c.sd.extend({nB: null,B8: null,C8: 100,T8: null,U8: 1E3,F8: null,T7: [],S7: 0,O7: [],N7: 0,Y7: [],X7: 0,A8: [],z8: 0,g8: MoonGameState.wq,P7: 0,R7: 0,Q7: null,Q8: null,ctor: function(a) {
        this._super();
        _gameLayer = a;
        this.vj();
        a = c.sa.create({event: c.sa.Fq,Ap: !0,Gm: function(a) {
                a = a.Wk();
                _gameState != MoonGameState.wq && (_role.x = a.x);
                return !0
            },ip: function(a) {
                a = a.Wk();
                _gameState != MoonGameState.wq && (_role.x = a.x)
            },hp: function(a) {
                a = a.Wk();
                _gameState != MoonGameState.wq && (_role.x = a.x);
                _gameLayer.ry(!1)
            }});
        c.ta.addListener(a, this);
        this.DO();
        return !0
    },vj: function() {
        _cakes = [];
        _bottles = [];
        _daozis = [];
        _poisons = [];
        _poisonTime = _daoziTime = _bottleTime = _cakeTime = 0;
        _weightNum = 1E3;
        _progressNum = 100;
        _gameState = MoonGameState.wq;
        _cakeNum = _cakeBloodTime = 0;
        var a = c.Ba.Ac("res/mooncake.png");
        _texOpaqueBatch = c.bf.create(a);
        this.L(_texOpaqueBatch, MoonLayerZ.q);
        this.vZ();
        this.uZ()
    },vZ: function() {
        var a = c.C.K;
        _role = new c.P.create("res/role_0.png");
        _role.Tb({anchorX: 0.5,anchorY: 0,x: 0.5 * a.width,y: 130});
        this.L(_role, MoonLayerZ.jS);
        a = new c.Oj.create;
        a.RL("res/role_0.png");
        a.RL("res/role_1.png");
        a.f3(0.2);
        a.nt(!0);
        _role.gb(new c.hn.create(new c.Vm.create(a)))
    },uZ: function() {
        var a = c.C.K, b = new c.V.create("\u751f\u547d: ", Z, 35);
        b.Tb({anchorX: 0,anchorY: 0.5,x: 10,y: a.height - 10 - 0.5 * b.height});
        this.L(b, MoonLayerZ.rl);
        var d = new c.P.create("#progress_b.png");
        _progress = new c.Ma.create(d);
        _progress.Tb({anchorX: 0,anchorY: 0.5,x: 10 + b.width,y: a.height - 10 - 0.5 * b.height});
        _progress.IO(N(1, 0));
        _progress.UO(N(0, 0));
        _progress.type = c.Ma.Xj;
        _progress.percentage = _progressNum;
        _progress.scale = 
        0.8;
        this.L(_progress, MoonLayerZ.rl);
        d = new c.P.create("#progress_t.png");
        d.Tb({anchorX: 0,anchorY: 0.5,x: 10 + b.width,y: a.height - 10 - 0.5 * b.height});
        d.scale = 0.8;
        this.L(d, MoonLayerZ.rl);
        d = new c.V.create("\u4f53\u91cd: ", Z, 35);
        d.Tb({anchorX: 0,anchorY: 0.5,x: 10,y: a.height - 20 - b.height - 0.5 * d.height});
        this.L(d, MoonLayerZ.rl);
        _weight = new c.V.create("10.00kg", Z, 35);
        _weight.Tb({anchorX: 0,anchorY: 0.5,x: 10 + d.width,y: a.height - 20 - b.height - 0.5 * d.height});
        this.L(_weight, MoonLayerZ.rl);
        var e = new c.V.create("\u6708\u997c: ", 
        Z, 35);
        e.Tb({anchorX: 0,anchorY: 0.5,x: 10,y: a.height - 30 - b.height - d.height - 0.5 * e.height});
        this.L(e, MoonLayerZ.rl);
        _cakeLab = new c.V.create("0\u4e2a", Z, 35);
        _cakeLab.Tb({anchorX: 0,anchorY: 0.5,x: 10 + d.width,y: a.height - 30 - b.height - d.height - 0.5 * e.height});
        this.L(_cakeLab, MoonLayerZ.rl)
    },update: function(a) {
        _gameState == MoonGameState.pq && 0 >= _progressNum ? (_gameState = MoonGameState.RQ, _gameLayer.S1(_cakeNum, _weightNum)) : (this.zy(a), _gameState == MoonGameState.pq && this.mZ(), this.I2(), _gameState == MoonGameState.pq && (this.CY(a), 
        this.BY(a), this.DY(a), this.FY(a), this.M1(a), c.X6))
    },zy: function(a) {
        for (var b = 0; b < _cakes.length; b++) {
            var d = _cakes[b];
            d.y -= this.fZ(d.tag) * a
        }
        for (b = 0; b < _bottles.length; b++)
            _bottles[b].y -= 480 * a;
        for (b = 0; b < _daozis.length; b++)
            _daozis[b].y -= 520 * a;
        for (b = 0; b < _poisons.length; b++)
            _poisons[b].y -= 440 * a
    },mZ: function() {
        for (var a = 0; a < _cakes.length; a++) {
            var b = _cakes[a], d = b.Fs(), e = this.cy();
            c.Xx(d, e) && (b.Se(), _cakes.splice(a, 1), a--, this.HY(this.O4(b.tag)), this.ss(1), _cakeNum++, _cakeLab.nc(_cakeNum + "\u4e2a"))
        }
        for (a = 0; a < 
        _bottles.length; a++)
            b = _bottles[a], d = b.Fs(), e = this.cy(), c.Xx(d, e) && (b.Se(), _bottles.splice(a, 1), a--, this.ss(15));
        for (a = 0; a < _daozis.length; a++)
            b = _daozis[a], d = b.Fs(), e = this.cy(), c.Xx(d, e) && (b.Se(), _daozis.splice(a, 1), a--, this.ss(-20));
        for (a = 0; a < _poisons.length; a++)
            b = _poisons[a], d = b.Fs(), e = this.cy(), c.Xx(d, e) && (b.Se(), _poisons.splice(a, 1), a--, this.ss(-25))
    },I2: function() {
        for (var a = 0; a < _cakes.length; a++) {
            var b = _cakes[a];
            -100 < b.y || (b.Se(), _cakes.splice(a, 1), a--)
        }
        for (a = 0; a < _bottles.length; a++)
            b = _bottles[a], 
            -100 < b.y || (b.Se(), _bottles.splice(a, 1), a--);
        for (a = 0; a < _daozis.length; a++)
            b = _daozis[a], -100 < b.y || (b.Se(), _daozis.splice(a, 1), a--);
        for (a = 0; a < _poisons.length; a++)
            b = _poisons[a], -100 < b.y || (b.Se(), _poisons.splice(a, 1), a--)
    },CY: function(a) {
        _cakeTime += a;
        if (!(0.3 > _cakeTime)) {
            _cakeTime = 0;
            a = c.C.K;
            var b = new c.P.create("#cake_" + parseInt(9 * Math.random()) + ".png");
            b.Tb({anchorX: 0.5,anchorY: 0.5,x: a.width * Math.random(),y: a.height + 80 + 20 * Math.random()});
            b.tag = parseInt(6 * Math.random());
            b.scale = 0.7 + 0.5 * Math.random();
            _texOpaqueBatch.L(b, 
            MoonLayerZ.Gt);
            _cakes.push(b)
        }
    },BY: function(a) {
        _bottleTime += a;
        if (!(_bottleTime < 3.4 + 0.8 * Math.random())) {
            _bottleTime = 0;
            a = c.C.K;
            var b = new c.P.create("#bottle.png");
            b.Tb({anchorX: 0.5,anchorY: 0.5,x: a.width * Math.random(),y: a.height + 50 + 50 * Math.random()});
            _texOpaqueBatch.L(b, MoonLayerZ.Gt);
            _bottles.push(b)
        }
    },DY: function(a) {
        _daoziTime += a;
        if (!(_daoziTime < 0.6 + 0.2 * Math.random())) {
            _daoziTime = 0;
            a = c.C.K;
            var b = new c.P.create("#daozi.png");
            b.Tb({anchorX: 0.5,anchorY: 0.5,x: a.width * Math.random(),y: a.height + 100 + 40 * Math.random()});
            b.scale = 0.6;
            _texOpaqueBatch.L(b, MoonLayerZ.Gt);
            _daozis.push(b)
        }
    },FY: function(a) {
        _poisonTime += a;
        if (!(_poisonTime < 1.2 + 0.2 * Math.random())) {
            _poisonTime = 0;
            a = c.C.K;
            var b = new c.P.create("#poison.png");
            b.Tb({anchorX: 0.5,anchorY: 0.5,x: a.width * Math.random(),y: a.height + 100 + 30 * Math.random()});
            b.scale = 0.6;
            _texOpaqueBatch.L(b, MoonLayerZ.Gt);
            _poisons.push(b)
        }
    },M1: function(a) {
        _cakeBloodTime += a;
        1 > _cakeBloodTime || (_cakeBloodTime = 0, this.ss(-4))
    },cy: function() {
        var a = _role.Fs(), b = a.height - a.width;
        a.height -= b;
        a.y += b;
        return a
    },
    HY: function(a) {
        _weightNum += a;
        _weight.nc((_weightNum / 100).toFixed(2) + "kg");
        a = c.Uc.create(0.1, 1.1);
        var b = c.Uc.create(0.04, 1);
        _weight.gb(c.Ca.create(a, b))
    },ss: function(a) {
        _progressNum += a;
        100 < _progressNum && (_progressNum = 100);
        0 > _progressNum && (_progressNum = 0);
        _progress.percentage = _progressNum
    },O4: function(a) {
        return 0 == a ? 1 : 1 == a ? 3 : 2 == a ? 5 : 3 == a ? 8 : 4 == a ? 11 : 5 == a ? 15 : 1
    },zha: function(a) {
        _gameState == MoonGameState.pq && (_role.x = a.x)
    },fZ: function(a) {
        return 0 == a ? 370 : 1 == a ? 390 : 2 == a ? 410 : 3 == a ? 430 : 4 == a ? 450 : 5 == a ? 490 : 300
    },kZ: function() {
        for (var a = 
        0; a < _cakes.length; a++)
            _cakes[a].Se();
        for (a = 0; a < _bottles.length; a++)
            _bottles[a].Se();
        for (a = 0; a < _daozis.length; a++)
            _daozis[a].Se();
        for (a = 0; a < _poisons.length; a++)
            _poisons[a].Se();
        _cakes.splice(0, _cakes.length);
        _bottles.splice(0, _bottles.length);
        _daozis.splice(0, _daozis.length);
        _poisons.splice(0, _poisons.length)
    },qP: function() {
        this.kZ();
        _cakeBloodTime = _poisonTime = _daoziTime = _bottleTime = _cakeTime = 0;
        _progressNum = 100;
        _progress.percentage = _progressNum;
        _weightNum = 1E3;
        _weight.nc((_weightNum / 100).toFixed(2) + 
        "kg");
        _cakeNum = 0;
        _cakeLab.nc(_cakeNum + "\u4e2a");
        _gameState = MoonGameState.pq
    }});
var Z = "Arial";
c.Fc.tF = function() {
    c.view.OF(640, 960, c.af.Nt);
    c.view.N2(!0);
    c.ez.BF(ta, function() {
        c.C.IF(new za)
    }, this)
};
c.Fc.T2();
