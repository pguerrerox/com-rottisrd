(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{291:function(t,e,n){var content=n(295);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("5a41e296",content,!0,{sourceMap:!1})},292:function(t,e,n){var map={"./slide1.webp":114,"./slide2.webp":115,"./slide3.webp":116,"./slide4.webp":117};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=292},293:function(t,e,n){var map={"./fija1.webp":110,"./fija2.webp":111,"./fija3.webp":112,"./fija4.webp":113};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=293},294:function(t,e,n){"use strict";var o=n(291);n.n(o).a},295:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".slideshow[data-v-b22aff80]{width:100%;margin:0 auto;padding:0;overflow:hidden}.images[data-v-b22aff80]{width:100%}.slides-imgs[data-v-b22aff80]{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.circles[data-v-b22aff80]{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;position:absolute;left:95%;z-index:5}.dots[data-v-b22aff80]{background-color:#fff;width:15px;height:15px;margin:10px 0;box-sizing:border-box;border-radius:50%}.active[data-v-b22aff80]{background-color:hsla(0,0%,100%,0);border:1px solid #fff}.fade[data-v-b22aff80]{-webkit-animation-name:fade-data-v-b22aff80;-webkit-animation-duration:s;animation-name:fade-data-v-b22aff80;-webkit-animation-duration:.5s;animation-duration:.5s}@-webkit-keyframes fade-data-v-b22aff80{0%{opacity:.6}to{opacity:1}}@keyframes fade-data-v-b22aff80{0%{opacity:.6}to{opacity:1}}",""])},296:function(t,e,n){"use strict";var o={props:{slides:Object,page:String,marca:String,fijas:Object,nonSlides:Boolean},data:function(){return{imgs:this.slides}},mounted:function(){},methods:{}},r=(n(294),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"slideshow"},[t.nonSlides?t._e():o("div",{staticClass:"images"},[o("img",{staticClass:"slides-imgs fade",attrs:{src:n(292)("./"+t.imgs[t.page]+".webp")}})]),t._v(" "),t.nonSlides?o("div",{staticClass:"images"},[o("img",{staticClass:"slides-imgs fade",attrs:{src:n(293)("./"+t.fijas[t.marca]+".webp")}})]):t._e()])}),[],!1,null,"b22aff80",null);e.a=component.exports},297:function(t,e,n){var content=n(309);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("c5c0f27c",content,!0,{sourceMap:!1})},298:function(t,e,n){var map={"./baruk-logo.webp":118,"./costero-logo.webp":119,"./nauj-logo.webp":120,"./rottis-logo.webp":121};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=298},299:function(t,e,n){"use strict";var o=n(3),r=n(16),c=n(22),d=n(122),l=n(57),f=n(10),v=n(39).f,h=n(58).f,m=n(9).f,w=n(306).trim,x=o.Number,k=x,_=x.prototype,y="Number"==c(n(74)(_)),N="trim"in String.prototype,j=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,c=(e=N?e.trim():w(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var code,d=e.slice(2),i=0,f=d.length;i<f;i++)if((code=d.charCodeAt(i))<48||code>r)return NaN;return parseInt(d,o)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(y?f((function(){_.valueOf.call(n)})):"Number"!=c(n))?d(new k(j(e)),n,x):j(e)};for(var O,E=n(8)?v(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;E.length>C;C++)r(k,O=E[C])&&!r(x,O)&&m(x,O,h(k,O));x.prototype=_,_.constructor=x,n(11)(o,"Number",x)}},306:function(t,e,n){var o=n(7),r=n(21),c=n(10),d=n(307),l="["+d+"]",f=RegExp("^"+l+l+"*"),v=RegExp(l+l+"*$"),h=function(t,e,n){var r={},l=c((function(){return!!d[t]()||"​"!="​"[t]()})),f=r[t]=l?e(m):d[t];n&&(r[n]=f),o(o.P+o.F*l,"String",r)},m=h.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(v,"")),t};t.exports=h},307:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},308:function(t,e,n){"use strict";var o=n(297);n.n(o).a},309:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".sign[data-v-34fb38cc]{background-color:#fff;width:100%;max-height:450px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.sign-wraper[data-v-34fb38cc]{width:100%;margin:75px auto}.sign-message[data-v-34fb38cc]{text-align:center}.sign-message h1[data-v-34fb38cc]{margin:0}.sign-message h2[data-v-34fb38cc]{margin-top:0}.sign-logos[data-v-34fb38cc]{width:100%;display:-webkit-box;display:flex;margin-top:50px;-webkit-box-pack:space-evenly;justify-content:space-evenly;-webkit-box-align:center;align-items:center}.sign-logos img[data-v-34fb38cc]{width:200px;height:auto;align-self:baseline}.noMargin[data-v-34fb38cc]{margin:0!important}",""])},310:function(t,e,n){var content=n(340);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("009258cd",content,!0,{sourceMap:!1})},316:function(t,e,n){"use strict";n(299);var o={props:{id:Number,data:Object},data:function(){var t=this.data.signs[this.id-1];return{idx:t.id,h1:t.h1,h2:t.h2,imgs:t.imgs}}},r=(n(308),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"sign"},[o("div",{staticClass:"sign-wraper"},[o("div",{staticClass:"sign-message"},[o("h1",[t._v(t._s(t.h1))]),t._v(" "),o("h2",[t._v(t._s(t.h2))])]),t._v(" "),o("div",{staticClass:"sign-logos",class:{noMargin:t.imgs.length<=0}},t._l(t.imgs,(function(img){return o("img",{key:img.id,attrs:{src:n(298)("./"+img+".webp"),alt:"Rottis Logo"}})})),0)])])}),[],!1,null,"34fb38cc",null);e.a=component.exports},337:function(t){t.exports=JSON.parse('{"es":{"banners":[{"id":1,"h1":"¿Quienes somos?","p":"La <strong>fábrica de quesos Rottis</strong> nace en el pueblo pequeño de Luperón, Puerto Plata; con la visión de producir quesos dominicanos de la más alta calidad para su exportación hacia los Estados Unidos.","button":"Descubre más sobre nosotros","a":"/nosotros"},{"id":2,"h1":"Conoce nuestros productos","p":"Nuestros productos son elaborados con los mejores estándares de calidad del mercado, producidos de <strong>leche 100% dominicana.</strong>","button":"Descubre más de nuestros productos","a":"/productos"}],"signs":[{"id":1,"h1":"La calidad es tradicion","h2":"Conoce toda la calidad de nuestros productos","imgs":["rottis-logo","baruk-logo","nauj-logo","costero-logo"]},{"id":2,"h1":"Un pedazo de mi tierra","h2":"Productos dominicanos de la más alta calidad","imgs":""}]}}')},338:function(t,e,n){var map={"./banner1.webp":124,"./banner2.webp":125};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=338},339:function(t,e,n){"use strict";var o=n(310);n.n(o).a},340:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,".banner[data-v-902f23bc]{background-size:cover;background-repeat:no-repeat;width:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;position:relative;overflow:hidden}.banner img[data-v-902f23bc]{top:0;left:0;width:100%;height:100%;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover}.banner-wraper[data-v-902f23bc]{position:absolute;left:7.5%}.banner-content[data-v-902f23bc]{background-color:hsla(0,0%,100%,.85);width:600px;height:350px;overflow:hidden;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.banner-content p[data-v-902f23bc]{width:75%;padding:0 30px;text-align:justify}.banner-content p[data-v-902f23bc] strong{color:#c00000}",""])},361:function(t,e,n){"use strict";n.r(e);var o=n(337),r=n(73),c=n(296),d=n(316),l=(n(299),{props:{id:Number,data:Object,background:Array},data:function(){var t=this.data.banners[this.id-1];return{idx:t.id,h1:t.h1,p:t.p,button:t.button,aLink:t.a}}}),f=(n(339),n(6)),v=Object(f.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"banner"},[o("img",{attrs:{src:n(338)("./"+t.background[t.id-1]+".webp")}}),t._v(" "),o("div",{staticClass:"banner-wraper"},[o("div",{staticClass:"banner-content"},[o("h1",[t._v(t._s(t.h1))]),t._v(" "),o("p",{domProps:{innerHTML:t._s(t.p)}}),t._v(" "),o("a",{staticClass:"button",attrs:{href:t.aLink}},[t._v(t._s(t.button))])])])])}),[],!1,null,"902f23bc",null).exports,h={components:{Slideshow:c.a,Sign:d.a,Banner:v},data:function(){return{slides:r.slideshow,page:"index",data:o.es,banners:r.banners.index}}},m=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("Slideshow",{attrs:{slides:t.slides,page:t.page}}),t._v(" "),n("Sign",{attrs:{id:1,data:t.data}}),t._v(" "),n("Banner",{attrs:{id:1,data:t.data,background:t.banners}}),t._v(" "),n("Sign",{attrs:{id:2,data:t.data}}),t._v(" "),n("Banner",{attrs:{id:2,data:t.data,background:t.banners}})],1)}),[],!1,null,null,null);e.default=m.exports}}]);