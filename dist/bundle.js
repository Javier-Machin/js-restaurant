!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function i(e){const t=document.getElementsByClassName("nav-link");t[0].classList.add("unselected"),t[1].classList.add("unselected"),t[2].classList.add("unselected"),t[e].classList.remove("unselected")}function a(){const e=document.getElementById("content"),t=(document.getElementsByClassName("nav-link"),document.createElement("header")),n=document.createElement("section"),a=document.createElement("p");i(0),a.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.",n.appendChild(a),t.classList.add("header"),n.classList.add("description"),e.appendChild(t),e.appendChild(n)}function d(){const e=document.getElementById("content"),t=document.getElementsByTagName("body")[0];t.removeChild(e);const n=document.createElement("div");n.id="content",t.appendChild(n)}n.r(t),function(){const e=document.getElementById("navbar"),t=document.createElement("a"),n=document.createElement("a"),c=document.createElement("a");t.innerHTML="HOME",t.classList.add("nav-link","unselected"),t.addEventListener("click",()=>{d(),a()}),n.innerHTML="MENU",n.classList.add("nav-link","unselected"),n.addEventListener("click",()=>{d(),function(){const e=document.getElementById("content"),t=(document.getElementsByClassName("nav-link"),document.createElement("header")),n=document.createElement("section");let a="";i(1),(a=document.createElement("article")).innerHTML="Fresh fish 🐠",n.appendChild(a),(a=document.createElement("article")).innerHTML="Fresh meat 🍖",n.appendChild(a),(a=document.createElement("article")).innerHTML="Salad 🥗",n.appendChild(a),(a=document.createElement("article")).innerHTML="Mom's Spaghetti 🍝",n.appendChild(a),(a=document.createElement("article")).innerHTML="Fresh fish 🐟",n.appendChild(a),(a=document.createElement("article")).innerHTML="Fresh meat 🥩",n.appendChild(a),(a=document.createElement("article")).innerHTML="Potato salad 🥗",n.appendChild(a),(a=document.createElement("article")).innerHTML="Mom's Spaghetti 🍝",n.appendChild(a),t.classList.add("header"),n.classList.add("menu"),e.appendChild(t),e.appendChild(n)}()}),c.innerHTML="CONTACT",c.classList.add("nav-link","unselected"),c.addEventListener("click",()=>{d(),function(){const e=document.getElementById("content"),t=(document.getElementsByClassName("nav-link"),document.createElement("header")),n=document.createElement("section");let a=document.createElement("p");const d=document.createElement("iframe");d.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1922.1837284108021!2d-149.8104390836551!3d61.19878578235156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x56c896f8de88dcc7%3A0xa3921f971c7a311d!2sE+Northern+Lights+Blvd%2C+Anchorage%2C+AK%2C+USA!5e0!3m2!1sen!2ses!4v1534246690955",d.width="100%",d.height="450",d.style="border: 0; margin-top: 20px;",i(2),a.innerHTML="Call us! 1234-123-123",n.appendChild(a),(a=document.createElement("p")).innerHTML="Northern Lights Boulevard, Anchorage, Alaska",n.appendChild(a),t.classList.add("header"),n.classList.add("contact"),e.appendChild(t),e.appendChild(n),e.appendChild(d)}()}),e.appendChild(t),e.appendChild(n),e.appendChild(c)}(),a()}]);