(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{188:function(e,o,n){var content=n(201);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("5d4fb04a",content,!0,{sourceMap:!1})},189:function(e){e.exports=JSON.parse('{"mainLogo":"main-logo","slideshow":["slide1","slide2","slide3","slide4"],"fijas":{"rottis":"fija1","baruk":"fija2","nauj":"fija3","costero":"fija4"},"marcasLogos":{"rottis":{"file":"rottis-logo"},"baruk":{"file":"baruk-logo"},"nauj":{"file":"nauj-logo"},"costero":{"file":"costero-logo"}},"banners":{"index":["banner1","banner2"],"productos":["rottis-bg","baruk-bg","nauj-bg","costero-bg"],"marcas":{"rottis":["holandes-bg","gouda-bg"],"baruk":["mozzarella-bg","danes-bg"],"nauj":["blancofreir-bg","amarillofreir-bg","cheddar-bg","dehoja-bg"],"costero":["blancofreir-costero-bg","blancofreir-costero-bg","blancofreir-costero-bg","blancofreir-costero-bg"]}},"productShots":{"rottis":["shot-holandes","shot-gouda"],"baruk":["shot-mozzarella","shot-danes"],"nauj":["shot-blancofreir","shot-amarillofreir","shot-cheddar","shot-dehoja"],"costero":["shot-holandes-costero","shot-amarillofreir-costero","shot-blancofreir-costero"]}}')},190:function(e,o,n){var map={"./slide1.png":191,"./slide2.png":192,"./slide3.png":193,"./slide4.png":194};function t(e){var o=r(e);return n(o)}function r(e){if(!n.o(map,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return map[e]}t.keys=function(){return Object.keys(map)},t.resolve=r,e.exports=t,t.id=190},191:function(e,o,n){e.exports=n.p+"img/6ef3408.png"},192:function(e,o,n){e.exports=n.p+"img/a711a31.png"},193:function(e,o,n){e.exports=n.p+"img/faf577c.png"},194:function(e,o,n){e.exports=n.p+"img/06c4896.png"},195:function(e,o,n){var map={"./fija1.png":196,"./fija2.png":197,"./fija3.png":198,"./fija4.png":199};function t(e){var o=r(e);return n(o)}function r(e){if(!n.o(map,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return map[e]}t.keys=function(){return Object.keys(map)},t.resolve=r,e.exports=t,t.id=195},196:function(e,o,n){e.exports=n.p+"img/6d8a687.png"},197:function(e,o,n){e.exports=n.p+"img/d3121c0.png"},198:function(e,o,n){e.exports=n.p+"img/faf577c.png"},199:function(e,o,n){e.exports=n.p+"img/06c4896.png"},200:function(e,o,n){"use strict";var t=n(188);n.n(t).a},201:function(e,o,n){(e.exports=n(19)(!1)).push([e.i,".slideshow[data-v-63173068]{width:100%;overflow:hidden;position:relative;margin:0;padding:0}.circles[data-v-63173068]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;height:100%;position:absolute;left:95%;z-index:5}.dots[data-v-63173068]{background-color:#fff;width:15px;height:15px;margin:10px 0;box-sizing:border-box;border-radius:50%}.active[data-v-63173068]{background-color:hsla(0,0%,100%,0);border:1px solid #fff}.slides-imgs[data-v-63173068]{width:100%;display:block}.fade[data-v-63173068]{-webkit-animation-name:fade-data-v-63173068;-webkit-animation-duration:s;animation-name:fade-data-v-63173068;-webkit-animation-duration:.5s;animation-duration:.5s}@-webkit-keyframes fade-data-v-63173068{0%{opacity:.6}to{opacity:1}}@keyframes fade-data-v-63173068{0%{opacity:.6}to{opacity:1}}",""])},202:function(e,o,n){"use strict";var t={props:{slides:Array,marca:String,fijas:Object,nonSlides:Boolean},data:function(){return{slideshowPos:Math.floor(Math.random()*Math.floor(4)),imgs:this.slides}},mounted:function(){var e=this;setInterval((function(){e.counter()}),3500)},methods:{counter:function(){this.imgs&&(this.slideshowPos>=this.imgs.length-1?this.slideshowPos=0:this.slideshowPos++)}}},r=(n(200),n(6)),component=Object(r.a)(t,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"slideshow"},[e.nonSlides?e._e():t("div",{staticClass:"circles"},e._l(e.imgs,(function(img){return t("div",{key:img.id,staticClass:"dots",class:{active:e.slideshowPos===e.imgs.indexOf(img)},on:{click:function(o){e.slideshowPos=e.imgs.indexOf(img)}}})})),0),e._v(" "),e.nonSlides?e._e():t("div",{staticClass:"images"},e._l(e.imgs,(function(img){return t("img",{directives:[{name:"show",rawName:"v-show",value:e.slideshowPos===e.imgs.indexOf(img),expression:"slideshowPos === imgs.indexOf(img)"}],key:img.id,staticClass:"slides-imgs fade",attrs:{src:n(190)("./"+img+".png")}})})),0),e._v(" "),e.nonSlides?t("div",{staticClass:"images"},[t("img",{staticClass:"slides-imgs fade",attrs:{src:n(195)("./"+e.fijas[e.marca]+".png")}})]):e._e()])}),[],!1,null,"63173068",null);o.a=component.exports},204:function(e,o,n){e.exports=n.p+"img/69d9aac.png"},205:function(e,o,n){e.exports=n.p+"img/18e8447.png"},206:function(e,o,n){e.exports=n.p+"img/613d836.png"},207:function(e,o,n){e.exports=n.p+"img/d64ddcb.png"},225:function(e,o,n){var map={"./baruk-logo.png":204,"./costero-logo.png":205,"./nauj-logo.png":206,"./rottis-logo.png":207};function t(e){var o=r(e);return n(o)}function r(e){if(!n.o(map,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return map[e]}t.keys=function(){return Object.keys(map)},t.resolve=r,e.exports=t,t.id=225},227:function(e,o,n){var content=n(253);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("9905d8a6",content,!0,{sourceMap:!1})},228:function(e,o,n){var content=n(277);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("314017da",content,!0,{sourceMap:!1})},251:function(e){e.exports=JSON.parse('{"es":{"rottis":{"marcaIntro":"Nuestra linea de quesos maduros <strong>Rottis</strong>, esta compuesta por el queso tipo Holandés y el queso tipo Gouda, caracterizados por su gran aroma y sabor.","marcaDetalles":[{"index":0,"quesoTipo":"Holandés","info":"Nuestro queso <strong>Rottis tipo holandés</strong>, es el reflejo de la tradición gastronomica dominicana, el cual se consume habitualmente en el desayuno y en la cena, pero  igual manera se le puede disfrutar en meriendas y picaderas.<br>Esta fabricado con leche pura de vaca, se caracteriza por tener un color amarillo anaranjado y suele tener agujeros en su interior. Es un queso semi duro y de una maduracion de 30, 45 y 60 dias."},{"index":1,"quesoTipo":"Gouda","info":""}]},"baruk":{"marcaIntro":"La linea <strong>Baruk</strong> esta compuesta por nuestros quesos Mozzarella y Danes. El mozzarella viene en una presentación en barra de 5 libras, ideal para ser utilizado en pizzas, lasañas ,etc.<br>Nuestro queso Danes se puede disfrutar en sandwiches y cortado en cubos para degustar en picaderas, de igual manera tiene una presentación de 5 libras.","marcaDetalles":[{"index":0,"quesoTipo":"Mozzarella","info":"El queso <strong>Mozzarella Baruk</strong>, se caracteriza por ser un queso fibroso y prácticamente descremado, ideal para platos donde se requiera un queso bajo en sal y a la vez con una textura suave."},{"index":1,"quesoTipo":"Danes","info":"Nuestro <strong>Danes Baruk</strong>, es un queso maduro semi-suave de un color amarillento tenue y bajo en sal. Excelente para ser utilizado en la elaboración de empanadas o ser degustado en una picadera."}]},"nauj":{"marcaIntro":"Los quesos <strong>Nauj</strong> se caracterizan por ser nuestra linea con mayor calidad, la cual se produce con un nivel adecuado de sal, de 100% leche de vaca. Dentro de esta linea podemos encontrar los quesos para freír tanto el blanco como el amarillo, los cuales se pueden freír sin ningún tipo de aceite, ya que no se adhieren ni se derriten en la sartén.<br> También dentro de esta linea pueden encontrar nuestro delicioso queso de hoja, el cual no contiene suero de leche y al igual que los quesos de freír esta empacado al vacío.","marcaDetalles":[{"index":0,"quesoTipo":"Blanco de Freír","info":"El queso <strong>Nauj Blanco de Freír</strong>, es un queso de textura grumosa con un color amarillo tenue, este se utiliza para ser acompañado con una guarnición de pure de plátanos (Mangu) o de papa, tradicionalmente consumido en el desayuno."},{"index":1,"quesoTipo":"Amarillo de Freír","info":"El queso <strong>Nauj Amarillo de freír</strong>, un queso de color amarillo anaranjado de consistencia firme y compacta, bajo en sal. Ideal para freír o ser rebanado."},{"index":2,"quesoTipo":"Cheddar","info":"El queso <strong>Nauj tipo Cheddar</strong>, semi-maduro de sabor suave a fuerte. Con una textura suave y firme el cual se derrite. Este es un queso bajo en sal. Utilizado de manera ideal en platos como emparedados y hamburguesas."},{"index":3,"quesoTipo":"De Hoja","info":"El queso de <strong>Hoja Nauj</strong>, caracterizado por ser un queso fresco, cremoso y fibroso. Con una corteza semi dura y el interior cremoso. Excelente para personas que buscan un queso bajo en calorias y sal."}]},"costero":{"marcaIntro":"Nuestra línea de <strong>quesos Costero</strong> está compuesta por los deliciosos quesos de freír Blanco y amarillo, con excelente sabor y textura. Los cuales suelen ser disfrutados por los dominicanos en desayunos y cenas. Dentro de esta línea también se encuentra el queso Costero tipo holandés que se caracteriza por su sabor intenso y a la vez de un aroma suave.","marcaDetalles":[{"index":0,"quesoTipo":"Holandés","info":"MISSING"},{"index":1,"quesoTipo":"Amarillo de Freír","info":"MISSING"},{"index":2,"quesoTipo":"Blanco de Freír","info":"MISSING"}]}}}')},252:function(e,o,n){"use strict";var t=n(227);n.n(t).a},253:function(e,o,n){(e.exports=n(19)(!1)).push([e.i,".intro[data-v-5fb1a38a]{width:100%;min-height:300px;-webkit-box-pack:center;justify-content:center;box-shadow:0 2px 5px 0 #000;z-index:2}.intro[data-v-5fb1a38a],.intro-wrapper[data-v-5fb1a38a]{display:-webkit-box;display:flex}.intro-wrapper[data-v-5fb1a38a]{max-width:1440px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:space-evenly;justify-content:space-evenly;-webkit-box-align:center;align-items:center}.intro-logo[data-v-5fb1a38a],intro-text[data-v-5fb1a38a]{margin:10px 100px}.intro-logo img[data-v-5fb1a38a]{width:275px}.intro-text[data-v-5fb1a38a]{max-width:700px;text-align:justify}",""])},254:function(e,o,n){var map={"./shot-amarillofreir-costero.png":255,"./shot-amarillofreir.png":256,"./shot-blancofreir-costero.png":257,"./shot-blancofreir.png":258,"./shot-cheddar.png":259,"./shot-danes.png":260,"./shot-dehoja.png":261,"./shot-gouda.png":262,"./shot-holandes-costero.png":263,"./shot-holandes.png":264,"./shot-mozzarella.png":265};function t(e){var o=r(e);return n(o)}function r(e){if(!n.o(map,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return map[e]}t.keys=function(){return Object.keys(map)},t.resolve=r,e.exports=t,t.id=254},255:function(e,o,n){e.exports=n.p+"img/8767fb2.png"},256:function(e,o,n){e.exports=n.p+"img/5ee816c.png"},257:function(e,o,n){e.exports=n.p+"img/5b9eb3e.png"},258:function(e,o,n){e.exports=n.p+"img/834f370.png"},259:function(e,o,n){e.exports=n.p+"img/95f4f78.png"},260:function(e,o,n){e.exports=n.p+"img/b8edbe2.png"},261:function(e,o,n){e.exports=n.p+"img/03f1af0.png"},262:function(e,o,n){e.exports=n.p+"img/05685f7.png"},263:function(e,o,n){e.exports=n.p+"img/c51206a.png"},264:function(e,o,n){e.exports=n.p+"img/3fa9b9f.png"},265:function(e,o,n){e.exports=n.p+"img/44b4fad.png"},266:function(e,o,n){var map={"./amarillofreir-bg.png":267,"./blancofreir-bg.png":268,"./blancofreir-costero-bg.png":269,"./cheddar-bg.png":270,"./danes-bg.png":271,"./dehoja-bg.png":272,"./gouda-bg.png":273,"./holandes-bg.png":274,"./mozzarella-bg.png":275};function t(e){var o=r(e);return n(o)}function r(e){if(!n.o(map,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return map[e]}t.keys=function(){return Object.keys(map)},t.resolve=r,e.exports=t,t.id=266},267:function(e,o,n){e.exports=n.p+"img/255945b.png"},268:function(e,o,n){e.exports=n.p+"img/eb07943.png"},269:function(e,o,n){e.exports=n.p+"img/f194751.png"},270:function(e,o,n){e.exports=n.p+"img/48af81f.png"},271:function(e,o,n){e.exports=n.p+"img/d940e25.png"},272:function(e,o,n){e.exports=n.p+"img/c81b105.png"},273:function(e,o,n){e.exports=n.p+"img/ddb8a3e.png"},274:function(e,o,n){e.exports=n.p+"img/cf8b9c2.png"},275:function(e,o,n){e.exports=n.p+"img/b8b0290.png"},276:function(e,o,n){"use strict";var t=n(228);n.n(t).a},277:function(e,o,n){(e.exports=n(19)(!1)).push([e.i,".marcas[data-v-33ad062c]{width:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.marcas-wrapper[data-v-33ad062c]:not(:last-child){margin-bottom:10px}.marcas-wrapper[data-v-33ad062c]{-webkit-box-orient:vertical;flex-direction:column;-webkit-box-pack:center;justify-content:center}.marcas-top[data-v-33ad062c],.marcas-wrapper[data-v-33ad062c]{width:100%;display:-webkit-box;display:flex;-webkit-box-direction:normal;-webkit-box-align:center;align-items:center}.marcas-top[data-v-33ad062c]{margin:15px 0 0;flex-direction:row;-webkit-box-pack:space-evenly;justify-content:space-evenly}.marcas-top[data-v-33ad062c],.reverse[data-v-33ad062c]{-webkit-box-orient:horizontal}.reverse[data-v-33ad062c]{-webkit-box-direction:reverse;flex-direction:row-reverse}.marcas-top p[data-v-33ad062c]{width:700px;text-align:justify}.marcas-ilustracion[data-v-33ad062c]{width:100%;height:450px;overflow:hidden}.marcas-ilustracion img[data-v-33ad062c]{width:100%;height:100%;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover}",""])},281:function(e,o,n){"use strict";n.r(o);var t=n(251),r=n(189),c=n(202),d={props:{data:String,media:Object,marca:String},data:function(){return{logo:this.media[this.marca].file}}},l=(n(252),n(6)),f=Object(l.a)(d,(function(){var e=this.$createElement,o=this._self._c||e;return o("section",{staticClass:"intro"},[o("div",{staticClass:"intro-wrapper"},[o("div",{staticClass:"intro-logo"},[o("img",{attrs:{src:n(225)("./"+this.logo+".png")}})]),this._v(" "),o("div",{staticClass:"intro-text"},[o("h3",{domProps:{innerHTML:this._s(this.data)}})])])])}),[],!1,null,"5fb1a38a",null).exports,m={props:{data:Array,media:Object,marca:String},data:function(){return{productShot:this.media.productShots,banners:this.media.banners.marcas}}},x=(n(276),Object(l.a)(m,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"marcas"},e._l(e.data,(function(o){return t("div",{key:o.id,staticClass:"marcas-wrapper"},[t("div",{staticClass:"marcas-top",class:{reverse:o.index%2!=0}},[t("p",{domProps:{innerHTML:e._s(o.info)}}),e._v(" "),t("img",{attrs:{src:n(254)("./"+e.productShot[e.marca][o.index]+".png")}})]),e._v(" "),t("div",{staticClass:"marcas-ilustracion"},[t("img",{attrs:{src:n(266)("./"+e.banners[e.marca][o.index]+".png")}})])])})),0)}),[],!1,null,"33ad062c",null).exports),h={components:{Slideshow:c.a,Intro:f,Marcas:x},data:function(){var base=this.$route.params.marcas;return{fijas:r.fijas,nonSlides:!0,dataIntro:t.es[base].marcaIntro,dataMarcas:t.es[base].marcaDetalles,mediaIntro:r.marcasLogos,mediaMarcas:r,marca:this.$route.params.marcas}},mounted:function(){}},v=Object(l.a)(h,(function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("section",[n("Slideshow",{attrs:{fijas:e.fijas,nonSlides:e.nonSlides,marca:e.marca}}),e._v(" "),n("Intro",{attrs:{data:e.dataIntro,media:e.mediaIntro,marca:e.marca}}),e._v(" "),n("Marcas",{attrs:{data:e.dataMarcas,media:e.mediaMarcas,marca:e.marca}})],1)}),[],!1,null,null,null);o.default=v.exports}}]);