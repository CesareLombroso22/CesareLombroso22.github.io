(window.wpJsonpTemplateSections=window.wpJsonpTemplateSections||[]).push([[88,70],{124:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},125:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},126:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(0),n(1);var r=n(17);function o(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function c(e){o(a,r,i,c,u,"next",e)}function u(e){o(a,r,i,c,u,"throw",e)}c(void 0)}))}}var a=function(){var e=i(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.a)();case 2:return e.abrupt("return",new Promise((function(e){window.SQSSiteObservers?e(window.SQSSiteObservers):window.Y.Global.once("SQSSiteObservers:ready",(function(){e(window.SQSSiteObservers)}))})));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function c(){return u.apply(this,arguments)}function u(){return(u=i(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:return t=e.sent,n=t.SiteAestheticValuesObserver,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},194:function(e,t){function n(t){return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},329:function(e,t,n){"use strict";n.r(t);n(0);var r=n(18),o=n.n(r),i=n(41);t.default=function(e){var t=function(){var t=document.querySelectorAll("main .page-section");if(0!==t.length){var n=t[t.length-1],r=o.a.find((function(e){return n.classList.contains(e)}));Object(i.a)(e,o.a,r)}};return t(),{matchLastSectionColorTheme:t}}},702:function(e,t,n){"use strict";n.r(t),n.d(t,"registerConfigEventListeners",(function(){return g}));n(0),n(1);var r=n(10),o=n(145),i=n(148);function a(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){a(i,r,o,c,u,"next",e)}function u(e){a(i,r,o,c,u,"throw",e)}c(void 0)}))}}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){var n,r="",o=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=s(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(e.paletteColors);try{for(o.s();!(n=o.n()).done;){var a=n.value,c=a.value.values,l=c.hue,f=c.saturation,d=c.lightness;r+="--".concat(a.id,"-hsl: ").concat(l,", ").concat(f,"%, ").concat(d,"%;")}}catch(e){o.e(e)}finally{o.f()}r.length&&(r=":root { ".concat(r," }"));for(var p=0,v=Object.entries(e.themeMappings);p<v.length;p++){var h=u(v[p],2),m=h[0],y=h[1],b=m===t?":root":".".concat(m),g=y.reduce((function(e,t){var n;if(t.custom&&(t.customColor=Object(i.parsePaletteColorValue)(t.custom)),t.customColor){var r=t.customColor.values,o=r.hue,a=r.saturation,c=r.lightness,u=r.alpha;n="hsla(".concat(o,", ").concat(a,"%, ").concat(c,"%, ").concat(null!=u?u:1,")")}else{var s;n="hsla(var(--".concat(t.colorId,"-hsl), ").concat(null!==(s=t.colorAlpha)&&void 0!==s?s:1,")")}return"".concat(e,"--").concat(t.variableName,": ").concat(n,";")}),"");r+="".concat(b," { ").concat(g," }")}return r.length?r:null}function d(e){var t=document.getElementById("colorThemeStylesUpdated");return t||((t=document.createElement("style")).id="colorThemeStylesUpdated",e.insertAdjacentElement("afterend",t)),t}function p(e){return v.apply(this,arguments)}function v(){return(v=c(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)();case 2:return n=e.sent,r=n.subscribe((function(e,n,r){if(n.colors.defaultThemeId){var o,i,a=f(r,e.colors.defaultThemeId);if(null!==a)d(t).textContent+=a,null===(o=window.Y)||void 0===o||null===(i=o.Global)||void 0===i||i.fire("colors:updateThemeStyles")}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=n(329),m=function(e){var t=Object(h.default)(e).matchLastSectionColorTheme,n=function(){window.Y.Global.on("sections:change",t)};return"complete"===document.readyState?n():window.addEventListener("load",n),function(){window.Y.Global.detach("sections:change",t,void 0),window.removeEventListener("load",n)}};function y(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){y(i,r,o,a,c,"next",e)}function c(e){y(i,r,o,a,c,"throw",e)}a(void 0)}))}}function g(e){return w.apply(this,arguments)}function w(){return(w=b(regeneratorRuntime.mark((function e(t){var n,o,i,a,c,u,s,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.pageSectionEventsManager,o=t.footerSectionEventsManager,i=t.headerEventsManager,e.next=3,r.b.instantiate();case 3:return(a=e.sent).registerListeners("pageSections",{sectionCreated:function(e,t){return n.sectionCreated(e,t)},sectionDeleted:function(e){return n.sectionDeleted(e)},sectionWillChange:function(e,t,r){return n.sectionWillChange(e,t,r)},sectionDidChange:function(e,t,r){return n.sectionDidChange(e,t,r)}}),a.registerListeners("footerSections",{sectionCreated:function(e,t){return o.sectionCreated(e,t)},sectionDeleted:function(e){return o.sectionDeleted(e)},sectionWillChange:function(e,t,n){return o.sectionWillChange(e,t,n)},sectionDidChange:function(e,t,n){return o.sectionDidChange(e,t,n)}}),a.registerListeners("header",{sectionWillChange:function(e,t,n){return i.elementWillChange(e,t,n)},sectionDidChange:function(e,t,n){return i.elementDidChange(e,t,n)}}),c=new r.c(null,{catalogSections:!0}),a.registerListeners("catalogSections",{catalogSectionsChanged:function(e){c.setSectionsNode(e),c.bootstrap()}}),e.next=11,p(document.querySelector("#colorThemeStyles"));case 11:u=e.sent,s=null,(l=document.getElementById("itemPagination"))&&(s=m(l)),window.addEventListener("pagehide",(function(){null==c||c.destroy(),"function"==typeof u&&u(),"function"==typeof s&&s()}));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);