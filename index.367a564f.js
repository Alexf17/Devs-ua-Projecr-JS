function e(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},s=a.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var s={id:e,exports:{}};return t[e]=s,a.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,a){r[e]=a},a.parcelRequired7c6=s),s("kyEFX").register(JSON.parse('{"5ZPII":"index.367a564f.js","fKKvY":"filmWrap.dabdf2b2.jpg","4627Z":"my-library.b676ce42.js"}')),s("g9qdN");var i,l=s("2vqxs"),n=s("lUsL3"),o=s("cky31");i=new URL(s("kyEFX").resolve("fKKvY"),import.meta.url).toString();var d=s("krGWQ");let c=1;function f(e,a){c=e;let t="";e>1&&(t+='<li class="paginationRow">&#129144;</li>'),e>1&&(t+="<li>1</li>"),e>4&&(t+='<li id="left-pagnDots">...</li>'),e>3&&(t+=`<li>${e-2}</li>`),e>2&&(t+=`<li>${e-1}</li>`),t+=`<li class="paginationPage--current">${e}</li>`,a-1>e&&(t+=`<li>${e+1}</li>`),a-2>e&&(t+=`<li>${e+2}</li>`),a-3>e&&(t+='<li id="right-pagnDots">...</li>'),a>e&&(t+=`<li class="avd">${e+5}</li>`,t+='<li class="paginationRow">&#129146;<li>'),d.refs.paginationBox.innerHTML=t}var m=s("anlFm");function g(){d.refs.bodyEl.classList.add("no-scroll"),d.refs.preloaderEl.classList.remove("preloader--hide"),setTimeout((()=>{d.refs.bodyEl.scrollIntoView({top:0,behavior:"smooth"})}),100)}function u(){d.refs.bodyEl.classList.remove("no-scroll");const e=Array.from(d.refs.imgElArr);0===e.length&&d.refs.preloaderEl.classList.add("preloader--hide"),e.forEach(((a,t)=>{a.onload=()=>{t===e.length-1&&d.refs.preloaderEl.classList.add("preloader--hide")}}))}function p(e){d.refs.preloaderEl.classList.add("preloader--hide"),d.refs.bodyEl.classList.remove("no-scroll"),window.removeEventListener("load",p)}(d=s("krGWQ")).refs.bodyEl.classList.add("no-scroll"),d.refs.preloaderEl.classList.remove("preloader--hide"),window.addEventListener("load",p);d=s("krGWQ");const v=new(0,n.default);d.refs.paginationBox.addEventListener("click",(async function(e){if(g(),"LI"!==e.target.nodeName)return;if("🡸"===e.target.textContent){v.setPageNumber(_-=1);const e=await v.fetchPopularsFilms();return(0,m.cleanerMarkup)(d.refs.cardListEl),h(e),f(v.pageNumber,v.totalPages),void u()}if("🡺"===e.target.textContent){v.setPageNumber(_+=1);const e=await v.fetchPopularsFilms();return(0,m.cleanerMarkup)(d.refs.cardListEl),h(e),f(v.pageNumber,v.totalPages),void u()}if("left-pagnDots"===e.target.id){v.setPageNumber(_-=3);const e=await v.fetchPopularsFilms();return(0,m.cleanerMarkup)(d.refs.cardListEl),h(e),f(v.pageNumber,v.totalPages),void u()}if("right-pagnDots"===e.target.id){v.setPageNumber(_+=3);const e=await v.fetchPopularsFilms();return(0,m.cleanerMarkup)(d.refs.cardListEl),h(e),f(v.pageNumber,v.totalPages),void u()}const a=e.target.textContent;v.setPageNumber(Number(a));const t=await v.fetchPopularsFilms();(0,m.cleanerMarkup)(d.refs.cardListEl),h(t),f(v.pageNumber,v.totalPages),u()}));let _=1;async function h(a){const t=await a;d.refs.fetchDataValue=t;const r=t.map((({id:a,poster_path:t,title:r,genre_ids:s,release_date:n})=>`<li class="film__item">\n        <a class="film__link" id="${a}">\n  <div class="film__wrap">\n      <img src=${t?`https://image.tmdb.org/t/p/original${t}`:e(i)} class="film-item__img" alt="${r}" width="300">\n  </div>\n  <div class="wrap__film>\n  <div class="film__title-wrap">\n  <h3 class="film__title">${r}</h3>\n  </div>\n  <div class="film__genres-and-date">\n  <p class="film__genres">${(0,l.searchGenresById)(s)?(0,l.searchGenresById)(s):"Unknown genre"}</p>\n  <p class="film__release-date">${n?new Date(n).getFullYear():"Nobody knows"}</p>\n\n   </div>\n   </div>\n   </a>\n   </li>`)).join("");return(0,o.renderFoo)(r,d.refs.cardListEl),await f(v.pageNumber,v.totalPages),r}h(v.fetchPopularsFilms());n=s("lUsL3"),m=s("anlFm"),l=s("2vqxs"),o=s("cky31"),d=s("krGWQ");let b=1;const N=new(0,n.default);async function w(a){const t=await a;if(d.refs.fetchDataValue=t,t.length){d.refs.headerErrorEl.classList.add("visually-hidden");const a=t.map((({id:a,poster_path:t,title:r,genre_ids:s,release_date:n})=>`<li class="film__item"><div class="test">\n        <a class="film__link" id="${a}">\n  <div class="film__wrap">\n  <img src=${t?`https://image.tmdb.org/t/p/original${t}`:e(i)} class="film-item__img" alt="${r}" width="300">\n  </div>\n  <div class= "film__info">\n  <div class="film__title-wrap">\n  <h3 class="film__title">${r}</h3>\n  </div>\n  <div class="film__genres-and-date">\n  <p class="film__genres">${(0,l.searchGenresById)(s)?(0,l.searchGenresById)(s):"Unknown genre"}</p>\n  <p class="film__release-date">${n?new Date(n).getFullYear():"Nobody knows"}</p>\n  </div>\n  \n   </div>\n   </div>\n   </a>\n   </li>`)).join("");return(0,o.renderFoo)(a,d.refs.cardListEl),u(),f(N.pageNumber,N.totalPages),a}await E()}function E(){u(),d.refs.headerErrorEl.classList.remove("visually-hidden"),d.refs.headerFormEl.reset(),(0,m.cleanerMarkup)(d.refs.paginationBox)}d.refs.headerFormEl.addEventListener("submit",(async function(e){e.preventDefault();let a=e.target.elements[0].value.trim();if(d.refs.expFilmName=a,!a)return void E();g(),(0,m.cleanerMarkup)(d.refs.cardListEl),N.setFilmName(a),w(N.fetchFilmsByName()),d.refs.headerFormEl.reset()})),d.refs.paginationBox.addEventListener("click",(async function(e){if(!N.getFIlmName())return;{if(g(),"LI"!==e.target.nodeName)return;if("🡸"===e.target.textContent){N.setPageNumber(b-=1),N.getFIlmName();const e=await N.fetchFilmsByName();return(0,m.cleanerMarkup)(d.refs.cardListEl),w(e),f(N.pageNumber,N.totalPages),void u()}if("🡺"===e.target.textContent){N.setPageNumber(b+=1),N.getFIlmName();const e=await N.fetchFilmsByName();return(0,m.cleanerMarkup)(d.refs.cardListEl),w(e),f(N.pageNumber,N.totalPages),void u()}if("left-pagnDots"===e.target.id){N.setPageNumber(b-=3),N.getFIlmName();const e=await N.fetchFilmsByName();return(0,m.cleanerMarkup)(d.refs.cardListEl),w(e),u(),void f(N.pageNumber,N.totalPages)}if("right-pagnDots"===e.target.id){N.setPageNumber(b+=3),N.getFIlmName();const e=await N.fetchFilmsByName();return(0,m.cleanerMarkup)(d.refs.cardListEl),w(e),u(),void f(N.pageNumber,N.totalPages)}const a=e.target.textContent;N.setPageNumber(Number(a));const t=await N.fetchFilmsByName();(0,m.cleanerMarkup)(d.refs.cardListEl),w(t),f(N.pageNumber,N.totalPages),u()}})),s("2eBWb"),s("010fZ"),s("1wH5c"),s("7bYU0"),s("kNOsD"),s("c2dC2");
//# sourceMappingURL=index.367a564f.js.map
