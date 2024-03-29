import"./assets/vendor-db7463ae.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function c(n){const t=n.trim();if(t==="")return;const o="43101979-d4b3d95f27087e7220544f5cb",i="https://pixabay.com/api/?key=",e={image_type:"photo",orientation:"horizontal",safesearch:!0},r=i+o+"&q="+t;return fetch(r,e).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function l(n){n.map(t=>`<li class="gallery-item">
  <a
    href=${t.largeImageURL}
    ><img
      src=${t.webformatURL}
      alt=${t.tags}
  /></a>
  <ul class="img-dscr">
    <li>
      <p><b>Likes</b> ${t.likes}</p>
    </li>
    <li>
      <p><b>Views</b> ${t.views}</p>
    </li>
    <li>
      <p><b>Comments</b> ${t.comments}</p>
    </li>
    <li>
      <p><b>Downloads</b> ${t.downloads}</p>
    </li>
  </ul>
</li>

`).join(" ")}const u=document.querySelector(".form"),a=document.querySelector("input"),f=document.querySelector(".gallery");u.addEventListener("submit",n=>{n.preventDefault();const t=c(a.value).then(o=>{const i=o.hits,e=l(i);f.innerHTML=e}).catch(o=>{console.error("Error fetching images:",o)});console.log(t)});
//# sourceMappingURL=commonHelpers.js.map
