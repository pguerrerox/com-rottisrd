(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{308:function(t,e,n){var content=n(312);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("00db4e66",content,!0,{sourceMap:!1})},309:function(t,e,n){var map={"./slide1.png":117,"./slide2.png":118,"./slide3.png":119,"./slide4.png":120};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=309},310:function(t,e,n){var map={"./fija1.png":113,"./fija2.png":114,"./fija3.png":115,"./fija4.png":116};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=310},311:function(t,e,n){"use strict";var o=n(308);n.n(o).a},312:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".slideshow[data-v-c5fd50c0]{width:100%;margin:0 auto;padding:0;overflow:hidden}.images[data-v-c5fd50c0]{width:100%}.slides-imgs[data-v-c5fd50c0]{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.circles[data-v-c5fd50c0]{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;position:absolute;left:95%;z-index:5}.dots[data-v-c5fd50c0]{background-color:#fff;width:15px;height:15px;margin:10px 0;box-sizing:border-box;border-radius:50%}.active[data-v-c5fd50c0]{background-color:hsla(0,0%,100%,0);border:1px solid #fff}.fade[data-v-c5fd50c0]{-webkit-animation-name:fade-data-v-c5fd50c0;-webkit-animation-duration:s;animation-name:fade-data-v-c5fd50c0;-webkit-animation-duration:.5s;animation-duration:.5s}@-webkit-keyframes fade-data-v-c5fd50c0{0%{opacity:.6}to{opacity:1}}@keyframes fade-data-v-c5fd50c0{0%{opacity:.6}to{opacity:1}}@media screen and (max-width:425px){.images[data-v-c5fd50c0]{width:100%;height:250px}}",""])},313:function(t,e,n){"use strict";var o={props:{slides:Object,page:String,marca:String,fijas:Object,nonSlides:Boolean},data:function(){return{imgs:this.slides}},mounted:function(){},methods:{}},r=(n(311),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"slideshow"},[t.nonSlides?t._e():o("div",{staticClass:"images"},[o("img",{staticClass:"slides-imgs fade",attrs:{src:n(309)("./"+t.imgs[t.page]+".png")}})]),t._v(" "),t.nonSlides?o("div",{staticClass:"images"},[o("img",{staticClass:"slides-imgs fade",attrs:{src:n(310)("./"+t.fijas[t.marca]+".png")}})]):t._e()])}),[],!1,null,"c5fd50c0",null);e.a=component.exports},314:function(t,e,n){var content=n(326);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("4c011ac8",content,!0,{sourceMap:!1})},315:function(t,e,n){var map={"./baruk-logo.png":121,"./costero-logo.png":122,"./nauj-logo.png":123,"./rottis-logo.png":124};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=315},316:function(t,e,n){"use strict";var o=n(3),r=n(16),c=n(22),d=n(125),l=n(57),f=n(10),h=n(39).f,v=n(58).f,m=n(9).f,x=n(323).trim,w=o.Number,k=w,_=w.prototype,y="Number"==c(n(74)(_)),j="trim"in String.prototype,N=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,c=(e=j?e.trim():x(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var code,d=e.slice(2),i=0,f=d.length;i<f;i++)if((code=d.charCodeAt(i))<48||code>r)return NaN;return parseInt(d,o)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(y?f((function(){_.valueOf.call(n)})):"Number"!=c(n))?d(new k(N(e)),n,w):N(e)};for(var O,E=n(8)?h(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;E.length>C;C++)r(k,O=E[C])&&!r(w,O)&&m(w,O,v(k,O));w.prototype=_,_.constructor=w,n(11)(o,"Number",w)}},323:function(t,e,n){var o=n(7),r=n(21),c=n(10),d=n(324),l="["+d+"]",f=RegExp("^"+l+l+"*"),h=RegExp(l+l+"*$"),v=function(t,e,n){var r={},l=c((function(){return!!d[t]()||"​"!="​"[t]()})),f=r[t]=l?e(m):d[t];n&&(r[n]=f),o(o.P+o.F*l,"String",r)},m=v.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(h,"")),t};t.exports=v},324:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},325:function(t,e,n){"use strict";var o=n(314);n.n(o).a},326:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".sign[data-v-274275c8]{background-color:#fff;width:100%;max-height:450px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.sign-wraper[data-v-274275c8]{width:100%;margin:75px auto}.sign-message[data-v-274275c8]{text-align:center}.sign-message h1[data-v-274275c8]{margin:0}.sign-message h2[data-v-274275c8]{margin-top:0}.sign-logos[data-v-274275c8]{width:100%;display:-webkit-box;display:flex;margin-top:50px;-webkit-box-pack:space-evenly;justify-content:space-evenly;-webkit-box-align:center;align-items:center}.sign-logos img[data-v-274275c8]{width:200px;height:auto;align-self:baseline}.noMargin[data-v-274275c8]{margin:0!important}@media screen and (max-width:768px){.sign[data-v-274275c8]{max-height:100%}.sign-logos[data-v-274275c8]{flex-wrap:wrap}.sign-logos img[data-v-274275c8]{width:175px;height:auto;padding:10px 15px}}@media screen and (max-width:425px){.sign[data-v-274275c8]{max-height:100%}.sign-message h2[data-v-274275c8]{font-size:1.2em}.sign-logos[data-v-274275c8]{flex-wrap:wrap}.sign-logos img[data-v-274275c8]{width:150px;height:auto;padding:10px 5px}}",""])},327:function(t,e,n){var content=n(359);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("64b3a590",content,!0,{sourceMap:!1})},334:function(t,e,n){"use strict";n(316);var o={props:{id:Number,data:Object},data:function(){var t=this.data.signs[this.id-1];return{idx:t.id,h1:t.h1,h2:t.h2,imgs:t.imgs,marcas:["rottis","baruk","nauj","costero"]}}},r=(n(325),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"sign"},[o("div",{staticClass:"sign-wraper"},[o("div",{staticClass:"sign-message"},[o("h1",[t._v(t._s(t.h1))]),t._v(" "),o("h2",[t._v(t._s(t.h2))])]),t._v(" "),o("div",{staticClass:"sign-logos",class:{noMargin:t.imgs.length<=0}},t._l(t.imgs,(function(img,e){return o("a",{key:img.id,attrs:{href:"/marcas/"+t.marcas[e]}},[o("img",{attrs:{src:n(315)("./"+img+".png"),alt:"Rottis Logo"}})])})),0)])])}),[],!1,null,"274275c8",null);e.a=component.exports},356:function(t){t.exports=JSON.parse('{"es":{"banners":[{"id":1,"h1":"¿Quienes somos?","p":"La <strong>fábrica de quesos Rottis</strong> nace en el pueblo pequeño de Luperón, Puerto Plata; con la visión de producir quesos dominicanos de la más alta calidad para su exportación hacia los Estados Unidos.","button":"Descubre más sobre nosotros","a":"/nosotros"},{"id":2,"h1":"Conoce nuestros productos","p":"Nuestros productos son elaborados con los mejores estándares de calidad del mercado, producidos de <strong>leche 100% dominicana.</strong>","button":"Descubre más de nuestros productos","a":"/productos"}],"signs":[{"id":1,"h1":"La calidad es tradicion","h2":"Conoce toda la calidad de nuestros productos","imgs":["rottis-logo","baruk-logo","nauj-logo","costero-logo"]},{"id":2,"h1":"Un pedazo de mi tierra","h2":"Productos dominicanos de la más alta calidad","imgs":""}]}}')},357:function(t,e,n){var map={"./banner1.png":127,"./banner2.png":128};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=357},358:function(t,e,n){"use strict";var o=n(327);n.n(o).a},359:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".banner[data-v-ce57cc06]{background-size:cover;background-repeat:no-repeat;width:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;position:relative;overflow:hidden}.banner img[data-v-ce57cc06]{top:0;left:0;width:100%;height:100%;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover}.banner-wraper[data-v-ce57cc06]{position:absolute;left:7.5%}.banner-content[data-v-ce57cc06]{background-color:hsla(0,0%,100%,.85);width:600px;height:350px;overflow:hidden;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.banner-content p[data-v-ce57cc06]{width:75%;padding:0 30px;text-align:justify}.banner-content p[data-v-ce57cc06] strong{color:#c00000}@media screen and (max-width:768px){.banner[data-v-ce57cc06]{background-size:cover;background-repeat:no-repeat;width:100%;height:600px}.banner-wraper[data-v-ce57cc06]{left:50%;margin-left:-300px}.banner-content p[data-v-ce57cc06]{width:75%;padding:0 30px;text-align:justify;font-size:.9em}.banner-content p[data-v-ce57cc06] strong{color:#c00000}}@media screen and (max-width:425px){.banner[data-v-ce57cc06]{background-size:cover;background-repeat:no-repeat;width:100%;height:600px}.banner-wraper[data-v-ce57cc06]{position:absolute;left:0;width:100%;margin-left:0}.banner-content[data-v-ce57cc06]{background-color:hsla(0,0%,100%,.85);width:100%}.banner-content p[data-v-ce57cc06]{width:75%;padding:0 30px;text-align:justify;font-size:.9em}.banner-content p[data-v-ce57cc06] strong{color:#c00000}}@media screen and (max-width:320px){.banner-wraper[data-v-ce57cc06]{position:absolute;left:0;width:100%;margin-left:0}.banner-content[data-v-ce57cc06]{background-color:hsla(0,0%,100%,.85);width:100%;height:80%}.banner-content h1[data-v-ce57cc06]{font-size:3em}.banner-content p[data-v-ce57cc06]{width:75%;padding:0 30px;text-align:justify;font-size:.9em}.banner-content p[data-v-ce57cc06] strong{color:#c00000}}",""])},383:function(t,e,n){"use strict";n.r(e);var o=n(356),r=n(73),c=n(313),d=n(334),l=(n(316),{props:{id:Number,data:Object,background:Array},data:function(){var t=this.data.banners[this.id-1];return{idx:t.id,h1:t.h1,p:t.p,button:t.button,aLink:t.a}}}),f=(n(358),n(6)),h=Object(f.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"banner"},[o("img",{attrs:{src:n(357)("./"+t.background[t.id-1]+".png")}}),t._v(" "),o("div",{staticClass:"banner-wraper"},[o("div",{staticClass:"banner-content"},[o("h1",[t._v(t._s(t.h1))]),t._v(" "),o("p",{domProps:{innerHTML:t._s(t.p)}}),t._v(" "),o("a",{staticClass:"button",attrs:{href:t.aLink}},[t._v(t._s(t.button))])])])])}),[],!1,null,"ce57cc06",null).exports,v={components:{Slideshow:c.a,Sign:d.a,Banner:h},data:function(){return{slides:r.slideshow,page:"index",data:o.es,banners:r.banners.index}}},m=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("Slideshow",{attrs:{slides:t.slides,page:t.page}}),t._v(" "),n("Sign",{attrs:{id:1,data:t.data}}),t._v(" "),n("Banner",{attrs:{id:1,data:t.data,background:t.banners}}),t._v(" "),n("Sign",{attrs:{id:2,data:t.data}}),t._v(" "),n("Banner",{attrs:{id:2,data:t.data,background:t.banners}})],1)}),[],!1,null,null,null);e.default=m.exports}}]);