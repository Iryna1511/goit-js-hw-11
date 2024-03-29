import"./assets/vendor-db7463ae.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function c(s){const r=s.trim();if(r==="")return;const o="43101979-d4b3d95f27087e7220544f5cb",i="https://pixabay.com/api/?key=",e={image_type:"photo",orientation:"horizontal",safesearch:!0},t=i+o+"&q="+r;return fetch(t,e).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})}const l=document.querySelector(".gallery");function u(s){const r=s.map(o=>`<li class="gallery-item">
  <a
    href=${o.largeImageURL}
    ><img
      src=${o.webformatURL}
      alt=${o.tags}
  /></a>
  <ul class="img-dscr">
    <li>
      <p><b>Likes</b> ${o.likes}</p>
    </li>
    <li>
      <p><b>Views</b> ${o.views}</p>
    </li>
    <li>
      <p><b>Comments</b> ${o.comments}</p>
    </li>
    <li>
      <p><b>Downloads</b> ${o.downloads}</p>
    </li>
  </ul>
</li>

`).join(" ");l.insertAdjacentHTML("beforeend",r)}const a=document.querySelector(".form"),f=document.querySelector("input");document.querySelector(".gallery");a.addEventListener("submit",s=>{s.preventDefault(),c(f.value).then(r=>{u(r.hits)}).catch(r=>{console.error("Error fetching images:",r)})});
//# sourceMappingURL=commonHelpers.js.map
