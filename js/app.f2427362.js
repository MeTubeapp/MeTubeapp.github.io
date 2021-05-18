(function(e){function t(t){for(var n,i,l=t[0],a=t[1],s=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,l=1;l<r.length;l++){var a=r[l];0!==c[a]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},c={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=a;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"4a90":function(e,t,r){"use strict";r("7dd03")},"7dd03":function(e,t,r){},"9d64":function(e,t,r){e.exports=r.p+"img/logo.096d6de1.png"},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),c=r("552e"),o={class:"App flex h-screen w-screen overflow-y-hidden"},i={class:"relative flex flex-col h-full w-full z-10 bg-background bg-opacity-75 overflow-y-auto"};function l(e,t,r,c,l,a){var s=Object(n["u"])("ParticlesBg"),u=Object(n["u"])("Navigation"),d=Object(n["u"])("router-view");return Object(n["p"])(),Object(n["d"])("div",o,[Object(n["f"])(s,{class:"absolute z-0 blur",type:"circle",color:"#F6453A",num:7}),Object(n["f"])("div",i,[Object(n["f"])(u,{class:"z-20"}),Object(n["f"])(d,{class:"z-10"})])])}var a=r("2091"),s=r("9d64"),u=r.n(s),d={class:"flex justify-between items-center p-2 font-extrabold bg-background shadow-lg"},p=Object(n["f"])("img",{class:"h-14 w-14 mr-2",src:u.a},null,-1),f=Object(n["e"])(" SongTube ");function b(e,t,r,c,o,i){var l=Object(n["u"])("router-link");return Object(n["p"])(),Object(n["d"])("div",d,[Object(n["f"])(l,{to:"/",class:"flex items-center text-2xl"},{default:Object(n["B"])((function(){return[p,f]})),_:1})])}var j=Object(n["g"])({name:"NavigationBar",setup:function(){var e=[{title:"About",url:"/about"}];return{Links:e}}});j.render=b;var g=j,O=Object(n["g"])({name:"App",components:{ParticlesBg:a["a"],Navigation:g}});r("4a90");O.render=l;var m=O,h=r("6c02"),v=(r("a4d3"),r("e01a"),{class:"home flex flex-col-reverse md:flex-row md:w-full md:h-full justify-center items-center md:pl-8"}),x={class:"flex flex-col justify-center items-center mb-12 md:mb-0 px-8"},y=Object(n["f"])("h1",{class:"text-4xl font-bold text-center my-8 md:my-0 md:mb-8"}," Beautiful, functional and fast Youtube Client ",-1),w={class:"grid grid-flow-col grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-4"},C={class:"leading-relaxed"},V={class:"text-lg text-accent font-bold"},M={class:"text-sm"},S=Object(n["f"])("div",{class:"flex flex-col items-center mt-12"},[Object(n["f"])("a",{href:"https://github.com/SongTube/SongTube-App/releases/latest",target:"_blank",rel:"noopener noreferrer",class:"bg-accent shadow-lg rounded-2xl p-4 font-bold mb-6"}," Download SongTube "),Object(n["f"])("a",{href:"https://www.paypal.com/paypalme/artixo",target:"_blank",rel:"noopener noreferrer",class:"font-bold"}," Donate ")],-1);function L(e,t,r,c,o,i){var l=Object(n["u"])("Screenshots");return Object(n["p"])(),Object(n["d"])("div",v,[Object(n["f"])(l,{class:"flex md:items-center md:justify-center"}),Object(n["f"])("div",x,[y,Object(n["f"])("div",w,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(e.featureList,(function(e,t){return Object(n["p"])(),Object(n["d"])("div",{key:"feature".concat(t),class:"flex"},[(Object(n["p"])(),Object(n["d"])(Object(n["v"])(e.icon),{class:"mr-3 mt-1.5"})),Object(n["f"])("div",C,[Object(n["f"])("h4",V,Object(n["x"])(e.title),1),Object(n["f"])("p",M,Object(n["x"])(e.description),1)])])})),128))]),S])])}var k={class:"relative flex w-88 mb-4"};function H(e,t,r,c,o,i){return Object(n["p"])(),Object(n["d"])("div",k,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(e.Images,(function(t,r){return Object(n["p"])(),Object(n["d"])("img",{key:t,class:["w-full rounded-3xl shadow-lg transition-opacity duration-300",e.currentIndex==r?"opacity-100":"absolute opacity-0"],src:t},null,10,["src"])})),128))])}var P=Object(n["g"])({name:"Screenshots",setup:function(){var e=Object(n["s"])(0),t=["https://i.imgur.com/COIt2PJ.jpg","https://i.imgur.com/KcpdKpy.jpg","https://i.imgur.com/fWMv9n9.jpg","https://i.imgur.com/LB7NILV.jpg","https://i.imgur.com/xWWZsNU.jpg","https://i.imgur.com/bO4n4Wl.jpg"];return setInterval((function(){e.value<t.length-1?e.value+=1:e.value=0}),4e3),{currentIndex:e,Images:t}}});P.render=H;var B=P,A={style:{width:"24px",height:"24px","min-width":"24px","min-height":"24px"},viewBox:"0 0 24 24"},_=Object(n["f"])("path",{fill:"currentColor",d:"M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21Z"},null,-1);function T(e,t){return Object(n["p"])(),Object(n["d"])("svg",A,[_])}const I={};I.render=T;var Z=I,z={style:{width:"24px",height:"24px","min-width":"24px","min-height":"24px"},viewBox:"0 0 24 24"},N=Object(n["f"])("path",{fill:"currentColor",d:"M22 17V16.5C22 15.12 20.88 14 19.5 14S17 15.12 17 16.5V17C16.45 17 16 17.45 16 18V22C16 22.55 16.45 23 17 23H22C22.55 23 23 22.55 23 22V18C23 17.45 22.55 17 22 17M21 17H18V16.5C18 15.67 18.67 15 19.5 15S21 15.67 21 16.5V17M14 20H4V17C4 14.33 9.33 13 12 13C13.08 13 14.6 13.22 16 13.66C15.61 14.15 15.33 14.74 15.16 15.38C14.19 15.1 13.09 14.9 12 14.9C9.03 14.9 5.9 16.36 5.9 17V18.1H14V20M12 12C14.21 12 16 10.21 16 8S14.21 4 12 4 8 5.79 8 8 9.79 12 12 12M12 6C13.11 6 14 6.9 14 8S13.11 10 12 10 10 9.11 10 8 10.9 6 12 6Z"},null,-1);function W(e,t){return Object(n["p"])(),Object(n["d"])("svg",z,[N])}const D={};D.render=W;var J=D,K={style:{width:"24px",height:"24px","min-width":"24px","min-height":"24px"},viewBox:"0 0 24 24"},F=Object(n["f"])("path",{fill:"currentColor",d:"M12 3V13.55A4 4 0 1 0 14 17V7H18V3M10 19A2 2 0 1 1 12 17A2 2 0 0 1 10 19Z"},null,-1);function G(e,t){return Object(n["p"])(),Object(n["d"])("svg",K,[F])}const U={};U.render=G;var Y=U,q={style:{width:"24px",height:"24px","min-width":"24px","min-height":"24px"},viewBox:"0 0 24 24"},E=Object(n["f"])("path",{fill:"currentColor",d:"M14,10H2V12H14V10M14,6H2V8H14V6M2,16H10V14H2V16M21.5,11.5L23,13L16,20L11.5,15.5L13,14L16,17L21.5,11.5Z"},null,-1);function Q(e,t){return Object(n["p"])(),Object(n["d"])("svg",q,[E])}const R={};R.render=Q;var X=R,$=Object(n["g"])({name:"Home",components:{Screenshots:B},setup:function(){Object(c["b"])({title:"SongTube",meta:[{name:"description",content:"Official SongTube Website"}]});var e=[{title:"Ad-free, forever",description:"Do anything, without any interruptions",icon:Z},{title:"Fast Servers",description:"Added Best Servers For Fast Streaming",icon:J},{title:"Download",description:"Download Any Movies Or Webseries In One ClicK",icon:Y},{title:"Live Tv Channels",description:"60+ Live Tv Channels",icon:X}];return{featureList:e}}});$.render=L;var ee=$,te=[{path:"/",name:"Home",component:ee}],re=Object(h["a"])({history:Object(h["b"])("/"),routes:te}),ne=re,ce=(r("b972"),Object(n["c"])(m)),oe=Object(c["a"])();ce.use(oe).use(ne).mount("#app")}});
//# sourceMappingURL=app.f2427362.js.map
