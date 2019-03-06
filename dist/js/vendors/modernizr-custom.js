"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,n,t){function o(e){var n=d.className,t=u._config.classPrefix||"";if(y&&(n=n.baseVal),u._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}u._config.enableClasses&&(n+=" "+t+e.join(" "+t),y?d.className.baseVal=n:d.className=n)}function s(e,n){return(void 0===e?"undefined":_typeof(e))===n}function a(){var e,n,t,o,a,i,r;for(var l in p)if(p.hasOwnProperty(l)){if(e=[],n=p[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=s(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?u[r[0]]=o:(!u[r[0]]||u[r[0]]instanceof Boolean||(u[r[0]]=new Boolean(u[r[0]])),u[r[0]][r[1]]=o),f.push((o?"":"no-")+r.join("-"))}}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):y?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(y?"svg":"body"),e.fake=!0),e}function l(e,t,o,s){var a,l,f,p,c="modernizr",u=i("div"),y=r();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=s?s[o]:c+(o+1),u.appendChild(f);return a=i("style"),a.type="text/css",a.id="s"+c,(y.fake?y:u).appendChild(a),y.appendChild(u),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),u.id=c,y.fake&&(y.style.background="",y.style.overflow="hidden",p=d.style.overflow,d.style.overflow="hidden",d.appendChild(y)),l=t(u,e),y.fake?(y.parentNode.removeChild(y),d.style.overflow=p,d.offsetHeight):u.parentNode.removeChild(u),!!l}var f=[],p=[],c={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function e(n,t){var o=this;setTimeout(function(){t(o[n])},0)},addTest:function e(n,t,o){p.push({name:n,fn:t,options:o})},addAsyncTest:function e(n){p.push({name:null,fn:n})}},u=function e(){};u.prototype=c,u=new u;var d=n.documentElement,y="svg"===d.nodeName.toLowerCase();u.addTest("webgl",function(){var n=i("canvas"),t="probablySupportsContext"in n?"probablySupportsContext":"supportsContext";return t in n?n[t]("webgl")||n[t]("experimental-webgl"):"WebGLRenderingContext"in e});var m=c._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];c._prefixes=m;var h=c.testStyles=l;u.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",m.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");h(o,function(e){t=9===e.offsetTop})}return t}),a(),o(f),delete c.addTest,delete c.addAsyncTest;for(var v=0;v<u._q.length;v++)u._q[v]();e.Modernizr=u}(window,document);