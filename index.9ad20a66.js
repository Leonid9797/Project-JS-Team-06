function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=o.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},o.parcelRequired7c6=a),a.register("kyEFX",(function(t,o){var n,r;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var a={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)a[t[o]]=e[t[o]]},r=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,o){if(!t.has(e))throw new TypeError("attempted to "+o+" private field on non-instance");return t.get(e)}})),a.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),a.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),a("kyEFX").register(JSON.parse('{"5ZPII":"index.9ad20a66.js","edJkd":"amazon-icon.bf9c062f.png","ckWAI":"open-book-icon.13365d66.png","87zR3":"book-shop-icon.f4a265a5.png","3rzcU":"amazon-icon@2x.3254cb4c.png","LbtVt":"open-book-icon@2x.66c58f73.png","fUzAu":"book-shop-icon@2x.88845c4c.png","8OQ7p":"icons.4ee90e29.svg","36kp2":"11.afa9e55b.png","g8A6t":"12.688b6dc7.png","dERG9":"21.a334484f.png","3Qhjz":"22.5ac714fa.png","l7YcB":"31.7e58352b.png","7zJSx":"32.d41967f5.png","1k6J0":"41.38e7f653.png","jx7oX":"42.2c438457.png","dluJj":"51.d33f22ac.png","jao7t":"52.89950815.png","97QC7":"61.61fc7ccd.png","8QV7F":"62.49347143.png","90QhW":"71.73beaec7.png","a0EZe":"72.b350b402.png","5TnPE":"81.e5a63e9b.png","1eXKy":"82.39ac4395.png","cjlIW":"91.69cae55e.png","fFSDA":"92.b3afcdef.png"}'));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){var o=l.default(e,t,"get");return s.default(e,o)};var l=c(a("fExtF")),s=c(a("iaRLo"));function c(e){return e&&e.__esModule?e:{default:e}}var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e,t,o){g.default(e,t),t.set(e,o)};var u,g=(u=a("7K24o"))&&u.__esModule?u:{default:u};var p=new WeakMap,m=new WeakMap;class f{async fetchBooks(){try{const e=await fetch(t(i)(this,m));return await e.json()}catch(e){throw new Error(e)}}async fetchCategories(){try{const e=await fetch(t(i)(this,p));return await e.json()}catch(e){throw new Error(e)}}constructor(){t(d)(this,p,{writable:!0,value:"https://books-backend.p.goit.global/books/category-list"}),t(d)(this,m,{writable:!0,value:"https://books-backend.p.goit.global/books/top-books"})}}var h=new WeakMap;class w{async fetchBook(e){try{const o=await fetch(t(i)(this,h)+e);return await o.json()}catch(e){throw new Error(e)}}constructor(){t(d)(this,h,{writable:!0,value:"https://books-backend.p.goit.global/books/"})}}var v;v=new URL(a("kyEFX").resolve("edJkd"),import.meta.url).toString();var b;b=new URL(a("kyEFX").resolve("ckWAI"),import.meta.url).toString();var k;k=new URL(a("kyEFX").resolve("87zR3"),import.meta.url).toString();var y;y=new URL(a("kyEFX").resolve("3rzcU"),import.meta.url).toString();var E;E=new URL(a("kyEFX").resolve("LbtVt"),import.meta.url).toString();var R;R=new URL(a("kyEFX").resolve("fUzAu"),import.meta.url).toString();var S;S=new URL(a("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const _=async()=>{const e=document.querySelectorAll(".book-category-list"),o=document.querySelector("[data-modal-book]"),n=new w,r=e=>{if("IMG"!==e.target.nodeName)return;o.classList.remove("is-hidden");!async function(e){try{const t=await n.fetchBook(e);console.log(t);const r=i(t);o.innerHTML=r;document.querySelector("[data-modal-book-close]").addEventListener("click",a)}catch(e){console.error("Error:",e)}}(e.target.dataset.id)},a=e=>{o.classList.add("is-hidden")};const i=e=>`<div class="modal-book">\n        <button class="modal-book-close" type="button" data-modal-book-close>\n          <svg class="modal-book-close-icon" width="24" height="24">\n            <use href="${t(S)}#icon-close"></use>\n          </svg>\n        </button>\n        <div class="modal-wrapper">\n        <img class="modal-book-img" src="${e.book_image}" alt="${e.title}" width="287" height="408" />\n        <div class="modal-wrapper-content">\n        <h2 class="modal-book-name">${e.title}</h2>\n        <h3 class="modal-book-author">${e.author}</h3>\n        <p class="modal-description-book">${e.description}</p>\n        <ul class="trade-list">\n          <li class="trade-item">\n            <a href="#">\n              <img\n                srcset="${t(v)} 1x, ${t(y)} 2x"\n                src="${t(v)}"\n                alt="amazon"\n                width="62"\n                height="19"\n              />\n              \x3c!-- <svg class="trade-icon" width="62" height="19">\n                <use href="./images/icons.svg#"></use>\n              </svg> --\x3e\n            </a>\n          </li>\n          <li class="trade-item">\n            <a href="#">\n              \x3c!-- <svg class="trade-icon" width="33" height="32"></svg> --\x3e\n              <img\n                srcset="${t(b)} 1x, ${t(E)} 2x"\n                src="${t(b)}"\n                alt="apple"\n                width="33"\n                height="32"\n              />\n            </a>\n          </li>\n          <li class="trade-item">\n            <a href="#">\n              <img\n                srcset="${t(k)} 1x, ${t(R)} 2x"\n                src="${t(k)}"\n                alt="book" \n                width="38" \n                height="36" \n              />\n              \x3c!-- <svg class="trade-icon" width="38" height="36"></svg> --\x3e\n            </a>\n          </li>\n        </ul>\n        </div>\n        </div>\n        <div class="btn-box">\n          <button class="btn-add-shopping-list" type="button" data-modal-add>\n            ADD TO SHOPPING LIST\n          </button>\n        </div>\n      </div>`;e.forEach((e=>{e.addEventListener("click",r)}))},L=new f,F=document.querySelector(".book-category-lists");!async function(){try{const e=await L.fetchBooks(),t=await function(e){const t=[];for(const o of e){const e=document.createElement("div");e.innerHTML=`\n      <p class="book-category">${o.list_name}</p>\n      <ul class="book-category-list">\n        ${o.books.map((e=>`\n              <li class="book-category-list-card">\n                <a class="book-category-hover-effect-container">\n                  <img class="book-category-list-img" data-id="${e._id}" src="${e.book_image}" alt="${e.title}" loading="lazy">\n                  <div class="overlay">\n                    <p class="book-category-hover-effect">QUICK VIEW</p>\n                  </div>\n                </a>\n                <h3 class="book-category-list-category-book-name">${e.title}</h3>\n                <p class="book-category-list-book-author">${e.author}</p>\n              </li>\n            `)).join("")}\n      </ul>\n      <div class="button-container">\n        <button class="book-category-btn" data-category="${o.list_name}" type="button">SEE MORE</button>\n      </div>\n    `,t.push(e)}return t}(e);t.forEach((e=>{F.appendChild(e)})),_()}catch(e){console.error("Error:",e)}}(),CATEGORY_URL="https://books-backend.p.goit.global/books/category-list";const H=new f,U=document.querySelector(".filter-list"),x=[];!async function(){try{const e=await H.fetchCategories(),t=await function(e){console.log(e);for(const t of e){const t=e.map((e=>`\n    <li class="filter-list-item">\n    <a href="" class="category-filter-link">${e.list_name}</a></li>\n    `)).join("");console.log(t),U.innerHTML=t}return x}(e);t.forEach((e=>{U.after(e)}))}catch(e){console.error("Error:",e)}}(),window.addEventListener("scroll",(function(){const e=document.getElementById("scrollToTopButton");window.pageYOffset>100?e.style.display="block":e.style.display="none"}));document.getElementById("scrollToTopButton").addEventListener("click",(function(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})})),document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".loader-offline"),document.querySelector(".content")}));var A;A=new URL(a("kyEFX").resolve("36kp2"),import.meta.url).toString();var X;X=new URL(a("kyEFX").resolve("g8A6t"),import.meta.url).toString();var M;M=new URL(a("kyEFX").resolve("dERG9"),import.meta.url).toString();var $;$=new URL(a("kyEFX").resolve("3Qhjz"),import.meta.url).toString();var j;j=new URL(a("kyEFX").resolve("l7YcB"),import.meta.url).toString();var O;O=new URL(a("kyEFX").resolve("7zJSx"),import.meta.url).toString();var T;T=new URL(a("kyEFX").resolve("1k6J0"),import.meta.url).toString();var I;I=new URL(a("kyEFX").resolve("jx7oX"),import.meta.url).toString();var z;z=new URL(a("kyEFX").resolve("dluJj"),import.meta.url).toString();var q;q=new URL(a("kyEFX").resolve("jao7t"),import.meta.url).toString();var B;B=new URL(a("kyEFX").resolve("97QC7"),import.meta.url).toString();var C;C=new URL(a("kyEFX").resolve("8QV7F"),import.meta.url).toString();var P;P=new URL(a("kyEFX").resolve("90QhW"),import.meta.url).toString();var Q;Q=new URL(a("kyEFX").resolve("a0EZe"),import.meta.url).toString();var W;W=new URL(a("kyEFX").resolve("5TnPE"),import.meta.url).toString();var J;J=new URL(a("kyEFX").resolve("1eXKy"),import.meta.url).toString();var D;D=new URL(a("kyEFX").resolve("cjlIW"),import.meta.url).toString();var N;N=new URL(a("kyEFX").resolve("fFSDA"),import.meta.url).toString();var G=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:{normal:new URL(A).href,retina:new URL(X).href}},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:{normal:new URL(M).href,retina:new URL($).href}},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:{normal:new URL(j).href,retina:new URL(O).href}},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:{normal:new URL(T).href,retina:new URL(I).href}},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:{normal:new URL(z).href,retina:new URL(q).href}},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:{normal:new URL(B).href,retina:new URL(C).href}},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:{normal:new URL(P).href,retina:new URL(Q).href}},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:{normal:new URL(W).href,retina:new URL(J).href}},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:{normal:new URL(D).href,retina:new URL(N).href}}];const K=document.querySelector(".support-list"),V=G.map((function({url:e,title:t,img:o},n){return`\n  <li class="swiper-slide">\n        <div class="support-item">\n        <span class="support-index">${(n+1).toString().padStart(2,"0")}</span>\n        <a class="support-link" href="${e}" target="_blank" rel="noopener noreferrer nofollow">\n            <img\n                srcset="${o.normal} 1x, ${o.retina} 2x"\n                src="${o.normal}" type="image/png" alt="${t}">\n        </a>\n    </li>`})).join("");K.innerHTML=V;G.map(((e,t)=>'<li class="support-item"> <a class="support-link" href=""></a></li>'));let Y=localStorage.getItem("darkMode");const Z=document.querySelector("#dark-mode-toggle"),ee=()=>{setTimeout((()=>{document.body.classList.add("darkmode")}),300),localStorage.setItem("darkMode","enabled")};"enabled"===Y&&ee(),Z.addEventListener("click",(()=>{Y=localStorage.getItem("darkMode"),"enabled"!==Y?ee():(setTimeout((()=>{document.body.classList.remove("darkmode")}),300),localStorage.setItem("darkMode",null))})),(()=>{const e={openModalBtn:document.querySelector("[header-data-modal-open]"),closeModalBtn:document.querySelector("[header-data-modal-close]"),modal:document.querySelector("[header-data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();
//# sourceMappingURL=index.9ad20a66.js.map
