!function(e){var t={};function n(d){if(t[d])return t[d].exports;var c=t[d]={i:d,l:!1,exports:{}};return e[d].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(d,c,function(t){return e[t]}.bind(null,c));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function d(){const e=document.querySelector("#content");e.setAttribute("id","content");const t=document.createElement("div"),n=document.createElement("h1");n.innerText="Giontello's Restaurant",t.appendChild(n);const d=document.createElement("div"),c=document.createElement("div");c.innerText="Home",c.classList.add("navTabs"),c.setAttribute("id","selectedTab"),d.appendChild(c);const o=document.createElement("div");o.innerText="Menu",o.classList.add("navTabs"),d.appendChild(o);const a=document.createElement("div");a.innerText="Contact Us",a.classList.add("navTabs"),d.appendChild(a);const i=document.createElement("div");i.classList.add("homeContent");const r=document.createElement("p");r.innerText="The best restaurant east of the Missisippi and north of the Mason-Dixon line.",i.appendChild(r);const l=document.createElement("img");l.setAttribute("src","https://live.staticflickr.com/7383/9515928240_16f207315a_b.jpg"),l.setAttribute("id","homeImg"),i.appendChild(l),e.appendChild(t),e.appendChild(d),e.appendChild(i)}let c;n.r(t),d(),function e(){c=document.querySelectorAll(".navTabs"),c.forEach(t=>{t.addEventListener("click",(function(){document.querySelector("#content").innerHTML="","Home"==t.innerHTML?(d(),e()):"Menu"==t.innerHTML?(!function(){const e=document.querySelector("#content");e.setAttribute("id","content");const t=document.createElement("div"),n=document.createElement("h1");n.innerText="Giontello's Restaurant",t.appendChild(n);const d=document.createElement("div"),c=document.createElement("div");c.innerText="Home",c.classList.add("navTabs"),d.appendChild(c);const o=document.createElement("div");o.innerText="Menu",o.classList.add("navTabs"),o.setAttribute("id","selectedTab"),d.appendChild(o);const a=document.createElement("div");a.innerText="Contact Us",a.classList.add("navTabs"),d.appendChild(a);const i=document.createElement("div");i.classList.add("homeContent");const r=document.createElement("p");r.innerText="Menu:",i.appendChild(r),e.appendChild(t),e.appendChild(d),e.appendChild(i)}(),e()):(!function(){const e=document.querySelector("#content");e.setAttribute("id","content");const t=document.createElement("div"),n=document.createElement("h1");n.innerText="Giontello's Restaurant",t.appendChild(n);const d=document.createElement("div"),c=document.createElement("div");c.innerText="Home",c.classList.add("navTabs"),d.appendChild(c);const o=document.createElement("div");o.innerText="Menu",o.classList.add("navTabs"),d.appendChild(o);const a=document.createElement("div");a.innerText="Contact Us",a.classList.add("navTabs"),a.setAttribute("id","selectedTab"),d.appendChild(a);const i=document.createElement("div");i.classList.add("homeContent");const r=document.createElement("p");r.innerHTML='Contact Us: <br><br> carl.doleo.lundgren@gmail.com | <a href="https://github.com/carldoleolundgren">GitHub</a>',i.appendChild(r),e.appendChild(t),e.appendChild(d),e.appendChild(i)}(),e())}))})}()}]);