function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=n),n.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,o){if(!t.has(e))throw new TypeError("attempted to "+o+" private field on non-instance");return t.get(e)}})),n.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),n.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t){var o=l.default(e,t,"get");return c.default(e,o)};var l=i(n("fExtF")),c=i(n("iaRLo"));function i(e){return e&&e.__esModule?e:{default:e}}var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t,o){u.default(e,t),t.set(e,o)};var d,u=(d=n("7K24o"))&&d.__esModule?d:{default:d};var p=new WeakMap,f=new WeakMap;const h=new class{async fetchBooks(){try{const t=await fetch(e(r)(this,f));return await t.json()}catch(e){throw new Error(e)}}async fetchCategories(){try{const t=await fetch(e(r)(this,p));return await t.json()}catch(e){throw new Error(e)}}constructor(){e(s)(this,p,{writable:!0,value:"https://books-backend.p.goit.global/books/category-list"}),e(s)(this,f,{writable:!0,value:"https://books-backend.p.goit.global/books/top-books"})}},m=document.querySelector(".book-category-lists");h.fetchBooks().then((e=>{const t=function(e){var t=[];return e.forEach((function(e){var o=document.createElement("div"),a=document.createElement("p");a.className="book-category",a.textContent=e.list_name,o.appendChild(a);var n=document.createElement("ul");n.className="book-category-list",e.books.forEach((function(e){var t=document.createElement("li");t.className="book-category-list-card";var o=document.createElement("a");o.className="book-category-hover-effect-container",o.href="#";var a=document.createElement("img");a.className="book-category-list-img",a.setAttribute("data-id",e._id),a.src=e.book_image,a.alt=e.title,a.setAttribute("loading","lazy");var r=document.createElement("div");r.className="overlay";var l=document.createElement("p");l.className="book-category-hover-effect",l.textContent="QUICK VIEW",r.appendChild(l),o.appendChild(a),o.appendChild(r),t.appendChild(o);var c=document.createElement("h3");c.className="book-category-list-category-book-name",c.textContent=e.title;var i=document.createElement("p");i.className="book-category-list-book-author",i.textContent=e.author,t.appendChild(c),t.appendChild(i),n.appendChild(t)})),o.appendChild(n);var r=document.createElement("div");r.className="button-container";var l=document.createElement("button");l.className="book-category-btn",l.setAttribute("data-category",e.list_name),l.type="button",l.textContent="SEE MORE",r.appendChild(l),o.appendChild(r),t.push(o)})),t}(e);t.forEach((e=>{m.appendChild(e)}))}));
//# sourceMappingURL=index.0fff5fca.js.map
