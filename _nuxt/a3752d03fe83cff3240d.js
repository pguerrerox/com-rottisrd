(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{188:function(t,e,n){var content=n(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("0a693732",content,!0,{sourceMap:!1})},189:function(t){t.exports=JSON.parse('{"mainLogo":"main-logo","slideshow":["slide1","slide2","slide3","slide4"],"marcasLogos":{"rottis":{"file":"rottis-logo"},"baruk":{"file":"baruk-logo"},"nauj":{"file":"nauj-logo"},"costero":{"file":"costero-logo"}},"banners":{"index":["banner1","banner2"],"productos":["rottis-bg","baruk-bg","nauj-bg","costero-bg"],"marcas":{"rottis":["holandes-bg","gouda-bg"],"baruk":["mozzarella-bg","danes-bg"],"nauj":["blancofreir-bg","amarillofreir-bg","cheddar-bg","dehoja-bg"],"costero":[]}},"productShots":{"rottis":["shot-holandes","shot-gouda"],"baruk":["shot-mozzarella","shot-danes"],"nauj":["shot-blancofreir","shot-amarillofreir","shot-cheddar","shot-dehoja"],"costero":[]}}')},190:function(t,e,n){var map={"./slide1.png":191,"./slide2.png":192,"./slide3.png":193,"./slide4.png":194};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=190},191:function(t,e,n){t.exports=n.p+"img/6d8a687.png"},192:function(t,e,n){t.exports=n.p+"img/95816e1.png"},193:function(t,e,n){t.exports=n.p+"img/d3121c0.png"},194:function(t,e,n){t.exports=n.p+"img/9f0a939.png"},195:function(t,e,n){"use strict";var o=n(188);n.n(o).a},196:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".slideshow[data-v-4a732f74]{width:100%;height:50vh;max-height:500px;overflow:hidden;position:relative}.circles[data-v-4a732f74]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;height:100%;position:absolute;left:95%;z-index:5}.dots[data-v-4a732f74]{background-color:#fff;width:15px;height:15px;margin:10px 0;box-sizing:border-box;border-radius:50%}.active[data-v-4a732f74]{background-color:hsla(0,0%,100%,0);border:1px solid #fff}.images[data-v-4a732f74]{width:inherit;height:100%}.slides-imgs[data-v-4a732f74]{width:100%;height:inherit;position:absolute;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.fade[data-v-4a732f74]{-webkit-animation-name:fade-data-v-4a732f74;-webkit-animation-duration:s;animation-name:fade-data-v-4a732f74;-webkit-animation-duration:.5s;animation-duration:.5s}@-webkit-keyframes fade-data-v-4a732f74{0%{opacity:.6}to{opacity:1}}@keyframes fade-data-v-4a732f74{0%{opacity:.6}to{opacity:1}}",""])},197:function(t,e,n){var content=n(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("11f5c7d3",content,!0,{sourceMap:!1})},198:function(t,e,n){"use strict";var o={props:{slides:Array},data:function(){return{slideshowPos:Math.floor(Math.random()*Math.floor(4)),imgs:this.slides}},mounted:function(){var t=this;setInterval((function(){t.counter()}),3500)},methods:{counter:function(){this.slideshowPos>=this.imgs.length-1?this.slideshowPos=0:this.slideshowPos++}}},r=(n(195),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"slideshow"},[o("div",{staticClass:"circles"},t._l(t.imgs,(function(img){return o("div",{key:img.id,staticClass:"dots",class:{active:t.slideshowPos===t.imgs.indexOf(img)},on:{click:function(e){t.slideshowPos=t.imgs.indexOf(img)}}})})),0),t._v(" "),o("div",{staticClass:"images"},t._l(t.imgs,(function(img){return o("img",{directives:[{name:"show",rawName:"v-show",value:t.slideshowPos===t.imgs.indexOf(img),expression:"slideshowPos === imgs.indexOf(img)"}],key:img.id,staticClass:"slides-imgs fade",attrs:{src:n(190)("./"+img+".png")}})})),0)])}),[],!1,null,"4a732f74",null);e.a=component.exports},199:function(t,e,n){t.exports=n.p+"img/9b4f8b7.png"},200:function(t,e,n){t.exports=n.p+"img/d006c6c.png"},201:function(t,e,n){t.exports=n.p+"img/147fa62.png"},202:function(t,e,n){t.exports=n.p+"img/2ccae12.png"},203:function(t,e,n){"use strict";var o=n(3),r=n(16),c=n(22),d=n(109),l=n(57),f=n(10),h=n(39).f,m=n(58).f,v=n(9).f,x=n(208).trim,w=o.Number,k=w,_=w.prototype,y="Number"==c(n(73)(_)),N="trim"in String.prototype,j=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,c=(e=N?e.trim():x(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var code,d=e.slice(2),i=0,f=d.length;i<f;i++)if((code=d.charCodeAt(i))<48||code>r)return NaN;return parseInt(d,o)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(y?f((function(){_.valueOf.call(n)})):"Number"!=c(n))?d(new k(j(e)),n,w):j(e)};for(var O,E=n(8)?h(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;E.length>C;C++)r(k,O=E[C])&&!r(w,O)&&v(w,O,m(k,O));w.prototype=_,_.constructor=w,n(11)(o,"Number",w)}},207:function(t,e,n){var map={"./baruk-logo.png":199,"./costero-logo.png":200,"./nauj-logo.png":201,"./rottis-logo.png":202};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=207},208:function(t,e,n){var o=n(7),r=n(21),c=n(10),d=n(209),l="["+d+"]",f=RegExp("^"+l+l+"*"),h=RegExp(l+l+"*$"),m=function(t,e,n){var r={},l=c((function(){return!!d[t]()||"​"!="​"[t]()})),f=r[t]=l?e(v):d[t];n&&(r[n]=f),o(o.P+o.F*l,"String",r)},v=m.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(h,"")),t};t.exports=m},209:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},210:function(t,e,n){"use strict";var o=n(197);n.n(o).a},211:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".noMargin[data-v-7ddf0378]{margin:0!important}.sign[data-v-7ddf0378]{width:100%;max-height:450px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.sign-wraper[data-v-7ddf0378]{width:1440px;margin:75px auto}.sign-message[data-v-7ddf0378]{text-align:center}.sign-message h1[data-v-7ddf0378]{margin:0}.sign-message h3[data-v-7ddf0378]{margin-top:0}.sign-logos[data-v-7ddf0378]{width:100%;display:-webkit-box;display:flex;margin-top:50px;justify-content:space-around;-webkit-box-align:center;align-items:center}.sign-logos img[data-v-7ddf0378]{width:150px;height:auto}",""])},212:function(t,e,n){var content=n(237);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("07735cd6",content,!0,{sourceMap:!1})},224:function(t,e,n){"use strict";n(203);var o={props:{id:Number,data:Object},data:function(){var t=this.data.signs[this.id-1];return{idx:t.id,h1:t.h1,h3:t.h3,imgs:t.imgs}}},r=(n(210),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"sign"},[o("div",{staticClass:"sign-wraper"},[o("div",{staticClass:"sign-message"},[o("h1",[t._v(t._s(t.h1))]),t._v(" "),o("h3",[t._v(t._s(t.h3))])]),t._v(" "),o("div",{staticClass:"sign-logos",class:{noMargin:t.imgs.length<=0}},t._l(t.imgs,(function(img){return o("img",{key:img.id,attrs:{src:n(207)("./"+img),alt:"Rottis Logo"}})})),0)])])}),[],!1,null,"7ddf0378",null);e.a=component.exports},231:function(t){t.exports=JSON.parse('{"es":{"banners":[{"id":1,"h1":"¿Quienes somos?","p":"La <strong>fábrica de quesos Rottis</strong> nace en el pueblo pequeño de Luperón, Puerto Plata; con la visión de producir quesos dominicanos de la más alta calidad para su exportación hacia los Estados Unidos.","button":"Descubre más sobre nosotros"},{"id":2,"h1":"Conoce nuestros productos","p":"Nuestros productos son elaborados con los mejores estándares de calidad del mercado, producidos de <strong>leche 100% dominicana.</strong>","button":"Descubre más de nuestros productos"}],"signs":[{"id":1,"h1":"La calidad es tradicion","h3":"Conoce toda la calidad de nuestros productos","imgs":["rottis-logo.png","baruk-logo.png","nauj-logo.png","costero-logo.png"]},{"id":2,"h1":"Un pedazo de mi tierra","h3":"Productos dominicanos de la más alta calidad","imgs":""}]}}')},232:function(t,e,n){var map={"./banner1.png":233,"./banner2.png":234,"./banner3.png":235};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=232},233:function(t,e,n){t.exports=n.p+"img/a5ad119.png"},234:function(t,e,n){t.exports=n.p+"img/ffde320.png"},235:function(t,e,n){t.exports=n.p+"img/f8867c5.png"},236:function(t,e,n){"use strict";var o=n(212);n.n(o).a},237:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".banner[data-v-37c919b6]{background-size:cover;background-repeat:no-repeat;width:100%;height:700px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;position:relative;overflow:hidden}.banner img[data-v-37c919b6]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover}.banner-wraper[data-v-37c919b6]{width:100%;max-width:1440px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.banner-content[data-v-37c919b6]{background-color:hsla(0,0%,100%,.85);width:630px;height:400px;overflow:hidden;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.banner-content p[data-v-37c919b6]{width:75%;font-size:1.2em;padding:0 30px;text-align:justify}.banner-content p[data-v-37c919b6] strong{color:#c00000}",""])},271:function(t,e,n){"use strict";n.r(e);var o=n(231),r=n(189),c=n(198),d=n(224),l=(n(203),{props:{id:Number,data:Object,background:Array},data:function(){var t=this.data.banners[this.id-1];return{idx:t.id,h1:t.h1,p:t.p,button:t.button}}}),f=(n(236),n(6)),h=Object(f.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"banner"},[o("img",{attrs:{src:n(232)("./"+t.background[t.id-1]+".png")}}),t._v(" "),o("div",{staticClass:"banner-wraper"},[o("div",{staticClass:"banner-content"},[o("h1",[t._v(t._s(t.h1))]),t._v(" "),o("p",{domProps:{innerHTML:t._s(t.p)}}),t._v(" "),o("a",{staticClass:"button",attrs:{href:""}},[t._v(t._s(t.button))])])])])}),[],!1,null,"37c919b6",null).exports,m={components:{Slideshow:c.a,Sign:d.a,Banner:h},data:function(){return{slides:r.slideshow,data:o.es,banners:r.banners.index}}},v=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("Slideshow",{attrs:{slides:t.slides}}),t._v(" "),n("Sign",{attrs:{id:1,data:t.data}}),t._v(" "),n("Banner",{attrs:{id:1,data:t.data,background:t.banners}}),t._v(" "),n("Sign",{attrs:{id:2,data:t.data}}),t._v(" "),n("Banner",{attrs:{id:2,data:t.data,background:t.banners}})],1)}),[],!1,null,null,null);e.default=v.exports}}]);