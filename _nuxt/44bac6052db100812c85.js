(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{188:function(t,e,o){var content=o(201);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("4f6656f4",content,!0,{sourceMap:!1})},189:function(t){t.exports=JSON.parse('{"mainLogo":"main-logo","slideshow":["slide1","slide2","slide3","slide4"],"fijas":{"rottis":"fija1","baruk":"fija2","nauj":"fija3","costero":"fija4"},"marcasLogos":{"rottis":{"file":"rottis-logo"},"baruk":{"file":"baruk-logo"},"nauj":{"file":"nauj-logo"},"costero":{"file":"costero-logo"}},"banners":{"index":["banner1","banner2"],"productos":["rottis-bg","baruk-bg","nauj-bg","costero-bg"],"marcas":{"rottis":["holandes-bg","gouda-bg"],"baruk":["mozzarella-bg","danes-bg"],"nauj":["blancofreir-bg","amarillofreir-bg","cheddar-bg","dehoja-bg"],"costero":["blancofreir-costero-bg","blancofreir-costero-bg","blancofreir-costero-bg","blancofreir-costero-bg"]}},"productShots":{"rottis":["shot-holandes","shot-gouda"],"baruk":["shot-mozzarella","shot-danes"],"nauj":["shot-blancofreir","shot-amarillofreir","shot-cheddar","shot-dehoja"],"costero":["shot-holandes-costero","shot-amarillofreir-costero","shot-blancofreir-costero"]}}')},190:function(t,e,o){var map={"./slide1.png":191,"./slide2.png":192,"./slide3.png":193,"./slide4.png":194};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=190},191:function(t,e,o){t.exports=o.p+"img/6ef3408.png"},192:function(t,e,o){t.exports=o.p+"img/a711a31.png"},193:function(t,e,o){t.exports=o.p+"img/faf577c.png"},194:function(t,e,o){t.exports=o.p+"img/06c4896.png"},195:function(t,e,o){var map={"./fija1.png":196,"./fija2.png":197,"./fija3.png":198,"./fija4.png":199};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=195},196:function(t,e,o){t.exports=o.p+"img/6d8a687.png"},197:function(t,e,o){t.exports=o.p+"img/d3121c0.png"},198:function(t,e,o){t.exports=o.p+"img/faf577c.png"},199:function(t,e,o){t.exports=o.p+"img/06c4896.png"},200:function(t,e,o){"use strict";var n=o(188);o.n(n).a},201:function(t,e,o){(t.exports=o(19)(!1)).push([t.i,".slideshow[data-v-66f9619c]{max-width:100%;overflow:hidden;position:relative;margin:0 auto;padding:0}.circles[data-v-66f9619c]{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;position:absolute;left:95%;z-index:5}.dots[data-v-66f9619c]{background-color:#fff;width:15px;height:15px;margin:10px 0;box-sizing:border-box;border-radius:50%}.active[data-v-66f9619c]{background-color:hsla(0,0%,100%,0);border:1px solid #fff}.slides-imgs[data-v-66f9619c]{width:100%;display:block}.fade[data-v-66f9619c]{-webkit-animation-name:fade-data-v-66f9619c;-webkit-animation-duration:s;animation-name:fade-data-v-66f9619c;-webkit-animation-duration:.5s;animation-duration:.5s}@-webkit-keyframes fade-data-v-66f9619c{0%{opacity:.6}to{opacity:1}}@keyframes fade-data-v-66f9619c{0%{opacity:.6}to{opacity:1}}",""])},202:function(t,e,o){"use strict";var n={props:{slides:Array,marca:String,fijas:Object,nonSlides:Boolean},data:function(){return{slideshowPos:Math.floor(Math.random()*Math.floor(4)),imgs:this.slides}},mounted:function(){var t=this;setInterval((function(){t.counter()}),3500)},methods:{counter:function(){this.imgs&&(this.slideshowPos>=this.imgs.length-1?this.slideshowPos=0:this.slideshowPos++)}}},r=(o(200),o(6)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"slideshow"},[t.nonSlides?t._e():n("div",{staticClass:"circles"},t._l(t.imgs,(function(img){return n("div",{key:img.id,staticClass:"dots",class:{active:t.slideshowPos===t.imgs.indexOf(img)},on:{click:function(e){t.slideshowPos=t.imgs.indexOf(img)}}})})),0),t._v(" "),t.nonSlides?t._e():n("div",{staticClass:"images"},t._l(t.imgs,(function(img){return n("img",{directives:[{name:"show",rawName:"v-show",value:t.slideshowPos===t.imgs.indexOf(img),expression:"slideshowPos === imgs.indexOf(img)"}],key:img.id,staticClass:"slides-imgs fade",attrs:{src:o(190)("./"+img+".png")}})})),0),t._v(" "),t.nonSlides?n("div",{staticClass:"images"},[n("img",{staticClass:"slides-imgs fade",attrs:{src:o(195)("./"+t.fijas[t.marca]+".png")}})]):t._e()])}),[],!1,null,"66f9619c",null);e.a=component.exports},209:function(t,e,o){var content=o(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("372d724e",content,!0,{sourceMap:!1})},210:function(t,e,o){var content=o(234);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("300878b0",content,!0,{sourceMap:!1})},211:function(t,e,o){var content=o(236);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("3eadec34",content,!0,{sourceMap:!1})},212:function(t,e,o){var content=o(238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("48424a1c",content,!0,{sourceMap:!1})},231:function(t,e,o){"use strict";var n=o(209);o.n(n).a},232:function(t,e,o){(t.exports=o(19)(!1)).push([t.i,".info[data-v-0514a8a0]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:100%;margin:50px auto}.normal[data-v-0514a8a0]{font-family:gotham;color:#666;margin:0 0 30px}.normal span[data-v-0514a8a0]{color:#c00000;font-weight:700}.info p[data-v-0514a8a0],h1[data-v-0514a8a0]{text-align:center}.info-informacion[data-v-0514a8a0]{-webkit-box-orient:horizontal;flex-flow:row;justify-content:space-around;margin:25px 0 0;width:100%}.info-contacto[data-v-0514a8a0],.info-informacion[data-v-0514a8a0]{display:-webkit-box;display:flex;-webkit-box-direction:normal}.info-contacto[data-v-0514a8a0]{-webkit-box-orient:vertical;flex-direction:column;-webkit-box-align:center;align-items:center;margin:0 50px;text-align:center}.info-contacto a[data-v-0514a8a0]{text-decoration:none;color:inherit;font-style:normal}.info-contacto a[data-v-0514a8a0]:focus,.info-contacto a[data-v-0514a8a0]:hover,.info-contacto h3[data-v-0514a8a0]:hover,strong[data-v-0514a8a0]{color:#c00000}",""])},233:function(t,e,o){"use strict";var n=o(210);o.n(n).a},234:function(t,e,o){(t.exports=o(19)(!1)).push([t.i,".forma-contacto[data-v-2468fb6f]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;width:100%;margin:50px auto}.forma-container[data-v-2468fb6f]{width:100%}.forma-text[data-v-2468fb6f]{align-self:center;text-align:justify}.forma-wrapper[data-v-2468fb6f]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:center;justify-content:center}.formulario-contacto[data-v-2468fb6f]{max-width:500px;margin:50px 25px;padding:35px;background-color:#e0e0e0}label[data-v-2468fb6f]{font-weight:700;color:#c00000}input[type=email][data-v-2468fb6f],input[type=text][data-v-2468fb6f],select[data-v-2468fb6f],textarea[data-v-2468fb6f]{display:inline-block;width:100%;margin:5px 0 15px;padding:10px;border:2px solid #ccc;box-sizing:border-box;-webkit-transition:.3s;transition:.3s}input[type=email][data-v-2468fb6f]:focus,input[type=text][data-v-2468fb6f]:focus,select[data-v-2468fb6f]:focus,textarea[data-v-2468fb6f]:focus{border:2px solid #c00000}.button[data-v-2468fb6f]{width:100%;margin:0 auto}",""])},235:function(t,e,o){"use strict";var n=o(211);o.n(n).a},236:function(t,e,o){(t.exports=o(19)(!1)).push([t.i,".forma-empleo[data-v-4a94ea1a]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;width:100%;margin:50px auto}.forma-container[data-v-4a94ea1a]{width:100%}.forma-text[data-v-4a94ea1a]{align-self:center;text-align:justify}.forma-wrapper[data-v-4a94ea1a]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:center;justify-content:center}.formulario-empleo[data-v-4a94ea1a]{max-width:500px;margin:50px 25px;padding:35px;background-color:#e0e0e0}label[data-v-4a94ea1a]{font-weight:700;color:#c00000}input[type=email][data-v-4a94ea1a],input[type=file][data-v-4a94ea1a],input[type=text][data-v-4a94ea1a],select[data-v-4a94ea1a],textarea[data-v-4a94ea1a]{display:inline-block;width:100%;margin:5px 0 15px;padding:10px;border:2px solid #ccc;box-sizing:border-box;-webkit-transition:.3s;transition:.3s}input[type=email][data-v-4a94ea1a]:focus,input[type=file][data-v-4a94ea1a]:focus,input[type=text][data-v-4a94ea1a]:focus,select[data-v-4a94ea1a]:focus,textarea[data-v-4a94ea1a]:focus{border:2px solid #c00000}.button[data-v-4a94ea1a]{width:100%;margin:0 auto}",""])},237:function(t,e,o){"use strict";var n=o(212);o.n(n).a},238:function(t,e,o){(t.exports=o(19)(!1)).push([t.i,"hr[data-v-67c6603e]{width:100%;border:1px solid #c33;margin:20px auto}",""])},280:function(t,e,o){"use strict";o.r(e);var n=o(189),r=o(202),c={},l=(o(231),o(6)),d=Object(l.a)(c,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"info"},[o("h1",{staticClass:"normal"},[t._v("Gracias por su interes en "),o("span",[o("br"),t._v("Fabrica de Quesos Rottis")])]),t._v(" "),o("h2",[o("strong",[t._v("Puedes contactarnos")]),t._v(", usando cualquiera de estos medios.")]),t._v(" "),o("div",{staticClass:"info-informacion"},[o("div",{staticClass:"info-contacto"},[o("p",{},[o("strong",[t._v("Vía telefónica")]),t._v(" al siguiente número:")]),t._v(" "),o("h3",[o("a",{attrs:{href:"tel:809-571-9821",target:"_blank",title:"Click para llamar"}},[t._v("\n\t\t\t\t\tTel: 809-571-9821\n\t\t\t\t")])])]),t._v(" "),o("div",{staticClass:"info-contacto"},[o("p",{},[t._v("En nuestras "),o("strong",[t._v("redes sociales")]),t._v(":")]),t._v(" "),o("h3",[o("a",{attrs:{href:"#"}},[t._v("Facebook")]),o("br")]),t._v(" "),o("h3",[o("a",{attrs:{href:"#"}},[t._v("Instagram")]),o("br")]),t._v(" "),o("h3",[o("a",{attrs:{href:"#"}},[t._v("LinkedIn")])])]),t._v(" "),o("div",{staticClass:"info-contacto"},[o("p",{},[t._v("Nuestro "),o("strong",[t._v("horario laboral")]),t._v(" es:")]),t._v(" "),o("h3",[t._v("Lunes a Viernes "),o("br"),t._v("8:00 am / 5:00 pm")]),t._v(" "),o("br"),t._v(" "),o("h3",[t._v("Sabados "),o("br"),t._v("8:00 am / 12:00 pm")])])])])}],!1,null,"0514a8a0",null).exports,f={},v=(o(233),Object(l.a)(f,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"forma-contacto"},[o("div",{staticClass:"forma-container"},[o("h2",[t._v("¿En qué podemos "),o("strong",[t._v("ayudarle")]),t._v("?")]),t._v(" "),o("div",{staticClass:"forma-text"},[o("p",[t._v("\n\t\t\t\tEn "),o("strong",[t._v("Rottis estamos para servirle")]),t._v(", utilice el siguiente formulario, para ponerse en contacto con nuestro equipo de servicio, una vez recibido su mensaje le estaremos contactando para ofrecerle respuesta a su solicitud, inquietud o pregunta.\n\t\t\t")])]),t._v(" "),o("div",{staticClass:"forma-wrapper"},[o("div",{staticClass:"formulario-contacto"},[o("form",{staticClass:"form-contacto",attrs:{method:"POST",action:"",enctype:"multipart/form-data"}},[o("label",{attrs:{for:"nombre"}},[t._v("Nombre")]),t._v(" "),o("span",[o("input",{attrs:{name:"name",type:"text",placeholder:"Jose Pérez",required:"true"}})]),t._v(" "),o("label",{attrs:{for:"e-mail"}},[t._v("Email")]),t._v(" "),o("span",[o("input",{attrs:{name:"email",type:"email",placeholder:"jose.perez@ejemplo.com",required:"true"}})]),t._v(" "),o("label",{attrs:{for:"ciudad"}},[t._v("Ciudad")]),t._v(" "),o("span",[o("input",{attrs:{name:"ciudad",type:"text",placeholder:"Santiago"}})]),t._v(" "),o("label",{attrs:{for:"asunto"}},[t._v("Asunto")]),t._v(" "),o("span",[o("input",{attrs:{name:"asunto",type:"text",placeholder:"Hola Rottis...",required:"true"}})]),t._v(" "),o("label",{attrs:{for:"tema"}},[t._v("Tema")]),t._v(" "),o("span",[o("select",{attrs:{name:"tema",type:"text",required:"true"}},[o("option",{attrs:{value:"Solicitud de información"}},[t._v("Solicitud de información")]),t._v(" "),o("option",{attrs:{value:"Sugerencias y/o Comentarios"}},[t._v("Sugerencias y/o Comentarios")]),t._v(" "),o("option",{attrs:{value:"Servicio al cliente"}},[t._v("Servicio al cliente")])])]),t._v(" "),o("label",{attrs:{for:"mensaje"}},[t._v("Mensaje")]),o("br"),t._v(" "),o("span",[o("textarea",{attrs:{name:"mensaje",rows:"8",cols:"40",placeholder:"Escribe tu mensaje aqui...",required:"true"}})]),t._v(" "),o("input",{staticClass:"button",attrs:{type:"submit",name:"enviar",value:"ENVIAR"}})])])])])])}],!1,null,"2468fb6f",null).exports),m={},h=(o(235),{components:{Info:d,Form:v,Empleo:Object(l.a)(m,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"forma-empleo"},[o("div",{staticClass:"forma-container"},[o("h2",[t._v("¿Quieres "),o("strong",[t._v("trabajar")]),t._v(" con nosotros?")]),t._v(" "),o("div",{staticClass:"forma-text"},[o("p",[t._v("\n        Usando el siguiente formulario podras enviarnos tu "),o("strong",[t._v("curriculum vitae (CV)")]),t._v(", no olvides completar con informacion real, de otra forma no podremos evaluarte."),o("br"),t._v("\n        El formulario solo permite enviar archivos PDF y el tamaño máximo es de 2 megabytes (MB).\n      ")])]),t._v(" "),o("div",{staticClass:"forma-wrapper"},[o("div",{staticClass:"formulario-empleo"},[o("form",{staticClass:"form-empleo",attrs:{method:"POST",action:"",enctype:"multipart/form-data"}},[o("label",{attrs:{for:"name"}},[t._v("Nombre*")]),t._v(" "),o("span",[o("input",{attrs:{name:"name",type:"text",placeholder:"Jose Pérez",required:"true"}})]),t._v(" "),o("label",{attrs:{for:"email"}},[t._v("Email*")]),t._v(" "),o("span",[o("input",{attrs:{name:"email",type:"email",placeholder:"jose.perez@ejemplo.com",required:"true"}})]),t._v(" "),o("label",{attrs:{for:"afile"}},[t._v("Archivo*")]),o("br"),t._v(" "),o("span",[o("input",{attrs:{name:"afile",type:"file",accept:"application/pdf,.pdf ",required:"true"}})]),t._v(" "),o("input",{staticClass:"button",attrs:{type:"submit",name:"enviar",value:"ENVIAR"}})])])])])])}],!1,null,"4a94ea1a",null).exports,Slideshow:r.a},data:function(){return{slides:n.slideshow}},metaInfo:{title:"Contacto"}}),x=(o(237),Object(l.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"main"},[e("Slideshow",{attrs:{slides:this.slides}}),this._v(" "),e("Info"),this._v(" "),e("hr"),this._v(" "),e("Form"),this._v(" "),e("hr"),this._v(" "),e("Empleo")],1)}),[],!1,null,"67c6603e",null));e.default=x.exports}}]);