!function(){var t={},e={},n={id:"988268596e7a833ffbfb2e9f82d93e18",dm:["dowebok.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:"",ctrk:!1,align:-1,nv:-1,vdur:18e5,age:31536e6,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,conv:0,apps:""},a=!0,o=null,i=!1;e.g={},e.g.xa=/msie (\d+\.\d+)/i.test(navigator.userAgent),e.g.cookieEnabled=navigator.cookieEnabled,e.g.javaEnabled=navigator.javaEnabled(),e.g.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"",e.g.ia=(window.screen.width||0)+"x"+(window.screen.height||0),e.g.colorDepth=window.screen.colorDepth||0,e.cookie={},e.cookie.set=function(t,e,n){var a;n.z&&(a=new Date,a.setTime(a.getTime()+n.z)),document.cookie=t+"="+e+(n.domain?"; domain="+n.domain:"")+(n.path?"; path="+n.path:"")+(a?"; expires="+a.toGMTString():"")+(n.Ba?"; secure":"")},e.cookie.get=function(t){return(t=RegExp("(^| )"+t+"=([^;]*)(;|$)").exec(document.cookie))?t[2]:o},e.event={},e.event.e=function(t,e,n){t.attachEvent?t.attachEvent("on"+e,function(e){n.call(t,e)}):t.addEventListener&&t.addEventListener(e,n,i)},e.event.preventDefault=function(t){t.preventDefault?t.preventDefault():t.returnValue=i},e.m={},e.m.parse=function(){return new Function('return (" + source + ")')()},e.m.stringify=function(){function t(t){return/["\\\x00-\x1f]/.test(t)&&(t=t.replace(/["\\\x00-\x1f]/g,function(t){var e=a[t];return e?e:(e=t.charCodeAt(),"\\u00"+Math.floor(e/16).toString(16)+(e%16).toString(16))})),'"'+t+'"'}function n(t){return 10>t?"0"+t:t}var a={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(a){switch(typeof a){case"undefined":return"undefined";case"number":return isFinite(a)?String(a):"null";case"string":return t(a);case"boolean":return String(a);default:if(a===o)return"null";if(a instanceof Array){var i,r,c,s=["["],u=a.length;for(r=0;u>r;r++)switch(c=a[r],typeof c){case"undefined":case"function":case"unknown":break;default:i&&s.push(","),s.push(e.m.stringify(c)),i=1}return s.push("]"),s.join("")}if(a instanceof Date)return'"'+a.getFullYear()+"-"+n(a.getMonth()+1)+"-"+n(a.getDate())+"T"+n(a.getHours())+":"+n(a.getMinutes())+":"+n(a.getSeconds())+'"';i=["{"],r=e.m.stringify;for(u in a)if(Object.prototype.hasOwnProperty.call(a,u))switch(c=a[u],typeof c){case"undefined":case"unknown":case"function":break;default:s&&i.push(","),s=1,i.push(r(u)+":"+r(c))}return i.push("}"),i.join("")}}}(),e.lang={},e.lang.d=function(t,e){return"[object "+e+"]"==={}.toString.call(t)},e.lang.ya=function(t){return e.lang.d(t,"Number")&&isFinite(t)},e.lang.Aa=function(t){return e.lang.d(t,"String")},e.localStorage={},e.localStorage.s=function(){if(!e.localStorage.f)try{e.localStorage.f=document.createElement("input"),e.localStorage.f.type="hidden",e.localStorage.f.style.display="none",e.localStorage.f.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(e.localStorage.f)}catch(t){return i}return a},e.localStorage.set=function(t,n,a){var o=new Date;o.setTime(o.getTime()+a||31536e6);try{window.localStorage?(n=o.getTime()+"|"+n,window.localStorage.setItem(t,n)):e.localStorage.s()&&(e.localStorage.f.expires=o.toUTCString(),e.localStorage.f.load(document.location.hostname),e.localStorage.f.setAttribute(t,n),e.localStorage.f.save(document.location.hostname))}catch(i){}},e.localStorage.get=function(t){if(window.localStorage){if(t=window.localStorage.getItem(t)){var n=t.indexOf("|"),a=t.substring(0,n)-0;if(a&&a>(new Date).getTime())return t.substring(n+1)}}else if(e.localStorage.s())try{return e.localStorage.f.load(document.location.hostname),e.localStorage.f.getAttribute(t)}catch(i){}return o},e.localStorage.remove=function(t){if(window.localStorage)window.localStorage.removeItem(t);else if(e.localStorage.s())try{e.localStorage.f.load(document.location.hostname),e.localStorage.f.removeAttribute(t),e.localStorage.f.save(document.location.hostname)}catch(n){}},e.sessionStorage={},e.sessionStorage.set=function(t,e){if(window.sessionStorage)try{window.sessionStorage.setItem(t,e)}catch(n){}},e.sessionStorage.get=function(t){return window.sessionStorage?window.sessionStorage.getItem(t):o},e.sessionStorage.remove=function(t){window.sessionStorage&&window.sessionStorage.removeItem(t)},e.G={},e.G.log=function(t,e){var n=new Image,a="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[a]=n,n.onload=n.onerror=n.onabort=function(){n.onload=n.onerror=n.onabort=o,n=window[a]=o,e&&e(t)},n.src=t},e.H={},e.H.ba=function(){var t="";if(navigator.plugins&&navigator.mimeTypes.length){var e=navigator.plugins["Shockwave Flash"];e&&e.description&&(t=e.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{(e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))&&(t=e.GetVariable("$version"))&&(t=t.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(n){}return t},e.H.ta=function(t,e,n,a,o){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+t+'" width="'+n+'" height="'+a+'"><param name="movie" value="'+e+'" /><param name="flashvars" value="'+(o||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+t+'" width="'+n+'" height="'+a+'" src="'+e+'" flashvars="'+(o||"")+'" allowscriptaccess="always" /></object>'},e.url={},e.url.k=function(t,e){var n=t.match(RegExp("(^|&|\\?|#)("+e+")=([^&#]*)(&|$|#)",""));return n?n[3]:o},e.url.va=function(t){return(t=t.match(/^(https?:)\/\//))?t[1]:o},e.url.Z=function(t){return(t=t.match(/^(https?:\/\/)?([^\/\?#]*)/))?t[2].replace(/.*@/,""):o},e.url.K=function(t){return(t=e.url.Z(t))?t.replace(/:\d+$/,""):t},e.url.ua=function(t){return(t=t.match(/^(https?:\/\/)?[^\/]*(.*)/))?t[2].replace(/[\?#].*/,"").replace(/^$/,"/"):o},t.I={wa:"http://tongji.baidu.com/hm-web/welcome/ico",P:"hm.baidu.com/hm.gif",S:"baidu.com",ea:"hmmd",fa:"hmpl",da:"hmkw",ca:"hmci",ga:"hmsr",l:0,h:Math.round(+new Date/1e3),protocol:"https:"==document.location.protocol?"https:":"http:",za:0,qa:6e5,ra:10,sa:1024,pa:1,q:2147483647,Q:"cc cf ci ck cl cm cp cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ")},function(){var e={i:{},e:function(t,e){this.i[t]=this.i[t]||[],this.i[t].push(e)},o:function(t,e){this.i[t]=this.i[t]||[];for(var n=this.i[t].length,a=0;n>a;a++)this.i[t][a](e)}};return t.w=e}(),function(){function n(t,e){var n=document.createElement("script");n.charset="utf-8",a.d(e,"Function")&&(n.readyState?n.onreadystatechange=function(){("loaded"===n.readyState||"complete"===n.readyState)&&(n.onreadystatechange=o,e())}:n.onload=function(){e()}),n.src=t;var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)}var a=e.lang;return t.load=n}(),function(){function n(){return function(){t.b.a.nv=0,t.b.a.st=4,t.b.a.et=3,t.b.a.ep=t.t.$()+","+t.t.Y(),t.b.j()}}function o(){clearTimeout(s);var t;w&&(t="visible"==document[w]),_&&(t=!document[_]),h="undefined"==typeof t?a:t,d&&f||!h||!g?!d||!f||h&&g||(b=i,v+=+new Date-p):(b=a,p=+new Date),d=h,f=g,s=setTimeout(o,100)}function r(t){var e=document,n="";if(t in e)n=t;else for(var a=["webkit","ms","moz","o"],o=0;o<a.length;o++){var i=a[o]+t.charAt(0).toUpperCase()+t.slice(1);if(i in e){n=i;break}}return n}function c(t){("focus"!=t.type&&"blur"!=t.type||!t.target||t.target==window)&&(g="focus"==t.type||"focusin"==t.type?a:i,o())}var s,u=e.event,l=t.w,d=a,h=a,f=a,g=a,m=+new Date,p=m,v=0,b=a,w=r("visibilityState"),_=r("hidden");return o(),function(){var t=w.replace(/[vV]isibilityState/,"visibilitychange");u.e(document,t,o),u.e(window,"pageshow",o),u.e(window,"pagehide",o),"object"==typeof document.onfocusin?(u.e(document,"focusin",c),u.e(document,"focusout",c)):(u.e(window,"focus",c),u.e(window,"blur",c))}(),t.t={$:function(){return+new Date-m},Y:function(){return b?+new Date-p+v:v}},l.e("pv-b",function(){u.e(window,"unload",n())}),t.t}(),function(){function r(t){for(var e in t)if({}.hasOwnProperty.call(t,e)){var n=t[e];u.d(n,"Object")||u.d(n,"Array")?r(n):t[e]=String(n)}}function c(t){return t.replace?t.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):t}var s=e.G,u=e.lang,l=e.m,d=t.I,h=t.w,f={L:o,n:[],r:0,M:i,init:function(){f.c=0,f.L={push:function(){f.D.apply(f,arguments)}},h.e("pv-b",function(){f.V(),f.W()}),h.e("pv-d",f.X),h.e("stag-b",function(){t.b.a.api=f.c||f.r?f.c+"_"+f.r:""}),h.e("stag-d",function(){t.b.a.api=0,f.c=0,f.r=0})},V:function(){var t=window._hmt;if(t&&t.length)for(var e=0;e<t.length;e++){var n=t[e];switch(n[0]){case"_setAccount":1<n.length&&/^[0-9a-z]{32}$/.test(n[1])&&(f.c|=1,window._bdhm_account=n[1]);break;case"_setAutoPageview":1<n.length&&(n=n[1],i===n||a===n)&&(f.c|=2,window._bdhm_autoPageview=n)}}},W:function(){if("undefined"==typeof window._bdhm_account||window._bdhm_account===n.id){window._bdhm_account=n.id;var t=window._hmt;if(t&&t.length)for(var e=0,a=t.length;a>e;e++)u.d(t[e],"Array")&&"_trackEvent"!==t[e][0]&&"_trackRTEvent"!==t[e][0]?f.D(t[e]):f.n.push(t[e]);window._hmt=f.L}},X:function(){if(0<f.n.length)for(var t=0,e=f.n.length;e>t;t++)f.D(f.n[t]);f.n=o},D:function(t){if(u.d(t,"Array")){var e=t[0];f.hasOwnProperty(e)&&u.d(f[e],"Function")&&f[e](t)}},_trackPageview:function(e){if(1<e.length&&e[1].charAt&&"/"==e[1].charAt(0)){f.c|=4,t.b.a.et=0,t.b.a.ep="",t.b.B?(t.b.a.nv=0,t.b.a.st=4):t.b.B=a;var n=t.b.a.u,o=t.b.a.su;t.b.a.u=d.protocol+"//"+document.location.host+e[1],f.M||(t.b.a.su=document.location.href),t.b.j(),t.b.a.u=n,t.b.a.su=o}},_trackEvent:function(e){2<e.length&&(f.c|=8,t.b.a.nv=0,t.b.a.st=4,t.b.a.et=4,t.b.a.ep=c(e[1])+"*"+c(e[2])+(e[3]?"*"+c(e[3]):"")+(e[4]?"*"+c(e[4]):""),t.b.j())},_setCustomVar:function(e){if(!(4>e.length)){var a=e[1],o=e[4]||3;if(a>0&&6>a&&o>0&&4>o){f.r++;for(var i=(t.b.a.cv||"*").split("!"),r=i.length;a-1>r;r++)i.push("*");i[a-1]=o+"*"+c(e[2])+"*"+c(e[3]),t.b.a.cv=i.join("!"),e=t.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,""),""!==e?t.b.setData("Hm_cv_"+n.id,encodeURIComponent(e),n.age):t.b.ha("Hm_cv_"+n.id)}}},_setReferrerOverride:function(e){1<e.length&&(t.b.a.su=e[1].charAt&&"/"==e[1].charAt(0)?d.protocol+"//"+window.location.host+e[1]:e[1],f.M=a)},_trackOrder:function(e){e=e[1],u.d(e,"Object")&&(r(e),f.c|=16,t.b.a.nv=0,t.b.a.st=4,t.b.a.et=94,t.b.a.ep=l.stringify(e),t.b.j())},_trackMobConv:function(e){(e={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[e[1]])&&(f.c|=32,t.b.a.et=93,t.b.a.ep=e,t.b.j())},_trackRTPageview:function(e){e=e[1],u.d(e,"Object")&&(r(e),e=l.stringify(e),512>=encodeURIComponent(e).length&&(f.c|=64,t.b.a.rt=e))},_trackRTEvent:function(e){if(e=e[1],u.d(e,"Object")){r(e),e=encodeURIComponent(l.stringify(e));var n=function(e){var n=t.b.a.rt;f.c|=128,t.b.a.et=90,t.b.a.rt=e,t.b.j(),t.b.a.rt=n},a=e.length;if(900>=a)n.call(this,e);else for(var a=Math.ceil(a/900),o="block|"+Math.round(Math.random()*d.q).toString(16)+"|"+a+"|",i=[],c=0;a>c;c++)i.push(c),i.push(e.substring(900*c,900*c+900)),n.call(this,o+i.join("|")),i=[]}},_setUserId:function(e){if(e=e[1],u.d(e,"String")||u.d(e,"Number")){var a=t.b.A(),o="hm-"+t.b.a.v;f.O=f.O||Math.round(Math.random()*d.q),s.log("//datax.baidu.com/x.gif?si="+n.id+"&dm="+encodeURIComponent(a)+"&ac="+encodeURIComponent(e)+"&v="+o+"&li="+f.O+"&rnd="+Math.round(Math.random()*d.q))}}};return f.init(),t.T=f,t.T}(),function(){function o(){"undefined"==typeof window["_bdhm_loaded_"+n.id]&&(window["_bdhm_loaded_"+n.id]=a,this.a={},this.B=i,this.init())}var r=e.url,c=e.G,s=e.H,u=e.lang,l=e.cookie,d=e.g,h=e.localStorage,f=e.sessionStorage,g=t.I,m=t.w;return o.prototype={C:function(t,e){t="."+t.replace(/:\d+/,""),e="."+e.replace(/:\d+/,"");var n=t.indexOf(e);return n>-1&&n+e.length==t.length},N:function(t,e){return t=t.replace(/^https?:\/\//,""),0===t.indexOf(e)},p:function(t){for(var e=0;e<n.dm.length;e++)if(-1<n.dm[e].indexOf("/")){if(this.N(t,n.dm[e]))return a}else{var o=r.K(t);if(o&&this.C(o,n.dm[e]))return a}return i},A:function(){for(var t=document.location.hostname,e=0,a=n.dm.length;a>e;e++)if(this.C(t,n.dm[e]))return n.dm[e].replace(/(:\d+)?[\/\?#].*/,"");return t},J:function(){for(var t=0,e=n.dm.length;e>t;t++){var a=n.dm[t];if(-1<a.indexOf("/")&&this.N(document.location.href,a))return a.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},aa:function(){if(!document.referrer)return g.h-g.l>n.vdur?1:4;var t=i;return this.p(document.referrer)&&this.p(document.location.href)?t=a:(t=r.K(document.referrer),t=this.C(t||"",document.location.hostname)),t?g.h-g.l>n.vdur?1:4:3},getData:function(t){try{return l.get(t)||f.get(t)||h.get(t)}catch(e){}},setData:function(t,e,n){try{l.set(t,e,{domain:this.A(),path:this.J(),z:n}),n?h.set(t,e,n):f.set(t,e)}catch(a){}},ha:function(t){try{l.set(t,"",{domain:this.A(),path:this.J(),z:-1}),f.remove(t),h.remove(t)}catch(e){}},na:function(){var t,e,a,o,i;if(g.l=this.getData("Hm_lpvt_"+n.id)||0,13==g.l.length&&(g.l=Math.round(g.l/1e3)),e=this.aa(),t=4!=e?1:0,a=this.getData("Hm_lvt_"+n.id)){for(o=a.split(","),i=o.length-1;i>=0;i--)13==o[i].length&&(o[i]=""+Math.round(o[i]/1e3));for(;2592e3<g.h-o[0];)o.shift();for(i=4>o.length?2:3,1===t&&o.push(g.h);4<o.length;)o.shift();a=o.join(","),o=o[o.length-1]}else a=g.h,o="",i=1;this.setData("Hm_lvt_"+n.id,a,n.age),this.setData("Hm_lpvt_"+n.id,g.h),a=g.h==this.getData("Hm_lpvt_"+n.id)?"1":"0",0===n.nv&&this.p(document.location.href)&&(""===document.referrer||this.p(document.referrer))&&(t=0,e=4),this.a.nv=t,this.a.st=e,this.a.cc=a,this.a.lt=o,this.a.lv=i},ma:function(){for(var t=[],e=0,n=g.Q.length;n>e;e++){var a=g.Q[e],o=this.a[a];"undefined"!=typeof o&&""!==o&&t.push(a+"="+encodeURIComponent(o))}return e=this.a.et,this.a.rt&&(0===e?t.push("rt="+encodeURIComponent(this.a.rt)):90===e&&t.push("rt="+this.a.rt)),t.join("&")},oa:function(){this.na(),this.a.si=n.id,this.a.su=document.referrer,this.a.ds=d.ia,this.a.cl=d.colorDepth+"-bit",this.a.ln=d.language,this.a.ja=d.javaEnabled?1:0,this.a.ck=d.cookieEnabled?1:0,this.a.lo="number"==typeof _bdhm_top?1:0,this.a.fl=s.ba(),this.a.v="1.0.75",this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+n.id)||""),1==this.a.nv&&(this.a.tt=document.title||"");var t=document.location.href;this.a.cm=r.k(t,g.ea)||"",this.a.cp=r.k(t,g.fa)||"",this.a.cw=r.k(t,g.da)||"",this.a.ci=r.k(t,g.ca)||"",this.a.cf=r.k(t,g.ga)||""},init:function(){try{this.oa(),0===this.a.nv?this.la():this.F(".*"),t.b=this,this.U(),m.o("pv-b"),this.ka()}catch(e){var a=[];a.push("si="+n.id),a.push("n="+encodeURIComponent(e.name)),a.push("m="+encodeURIComponent(e.message)),a.push("r="+encodeURIComponent(document.referrer)),c.log(g.protocol+"//"+g.P+"?"+a.join("&"))}},ka:function(){function t(){m.o("pv-d")}"undefined"==typeof window._bdhm_autoPageview||window._bdhm_autoPageview===a?(this.B=a,this.a.et=0,this.a.ep="",this.j(t)):t()},j:function(t){var e=this;e.a.rnd=Math.round(Math.random()*g.q),m.o("stag-b");var n=g.protocol+"//"+g.P+"?"+e.ma();m.o("stag-d"),e.R(n),c.log(n,function(n){e.F(n),u.d(t,"Function")&&t.call(e)})},U:function(){var t=document.location.hash.substring(1),e=RegExp(n.id),o=-1<document.referrer.indexOf(g.S)?a:i,c=r.k(t,"jn"),s=/^heatlink$|^select$/.test(c);t&&e.test(t)&&o&&s&&(t=document.createElement("script"),t.setAttribute("type","text/javascript"),t.setAttribute("charset","utf-8"),t.setAttribute("src",g.protocol+"//"+n.js+c+".js?"+this.a.rnd),c=document.getElementsByTagName("script")[0],c.parentNode.insertBefore(t,c))},R:function(t){var e=f.get("Hm_unsent_"+n.id)||"",a=this.a.u?"":"&u="+encodeURIComponent(document.location.href),e=encodeURIComponent(t.replace(/^https?:\/\//,"")+a)+(e?","+e:"");f.set("Hm_unsent_"+n.id,e)},F:function(t){var e=f.get("Hm_unsent_"+n.id)||"";e&&((e=e.replace(RegExp(encodeURIComponent(t.replace(/^https?:\/\//,"")).replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),"").replace(/,$/,""))?f.set("Hm_unsent_"+n.id,e):f.remove("Hm_unsent_"+n.id))},la:function(){var t=this,e=f.get("Hm_unsent_"+n.id);if(e)for(var e=e.split(","),a=function(e){c.log(g.protocol+"//"+decodeURIComponent(e).replace(/^https?:\/\//,""),function(e){t.F(e)})},o=0,i=e.length;i>o;o++)a(e[o])}},new o}()}();