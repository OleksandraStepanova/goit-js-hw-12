import{a as S,i as p,S as y}from"./assets/vendor-550cebad.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f=document.querySelector(".loader");async function h(r,o){f.style.display="block";const s="https://pixabay.com/api/",i=new URLSearchParams({key:"43034088-8742da6bcfba06a1e287112c2",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:o}),e=`${s}?${i}`,t=await S.get(e);return f.style.display="none",t.data.totalHits>0||p.show({message:"Sorry, there are no images matching your search query. Please try again!",timeout:5e3,position:"topRight",color:"red"}),t.data}function L({webformatURL:r,largeImageURL:o,tags:s,likes:i,views:e,comments:t,downloads:n}){return`<li class="picture-card">
  <a class="sourse" href ='${o}'>
  <img
    src='${r}'
    alt= '${s}'
    class="photo-item"    
  />
  </a>  
 <ul class="discription">
   <li>Likes:<br>${i}</li>
   <li>Vives:<br>${e}</li>
   <li>Comments:<br>${t}</li>
   <li>Downloads:<br>${n}</li>
 </ul>
</li>`}function g(r){return r.map(L).join(" ")}const u=document.querySelector(".search"),c=document.querySelector(".result"),w=document.querySelector(".loader"),d=document.querySelector(".load-more");let a=1,m=0,$=15,l;w.style.display="none";u.addEventListener("submit",q);d.addEventListener("click",v);async function q(r){if(r.preventDefault(),c.innerHTML="",a=1,l=u.elements.input.value.trim(),l)try{const o=await h(l,a);m=Math.ceil(o.totalHits/$);const s=g(o.hits);c.innerHTML=s,new y(".result li a").refresh()}catch(o){console.log(o),p.show({message:"Sorry, there are no images matching your search query. Please try again!",timeout:5e3,position:"topRight",color:"red"})}u.reset(),b()}async function v(){a+=1;try{const r=await h(l,a),o=g(r.hits);c.insertAdjacentHTML("beforeend",o),new y(".result li a").refresh()}catch(r){console.log(r)}R(),b(),P()}function b(){a>=m?d.style.display="none":d.style.display="block"}function P(){a>=m&&p.show({message:"We're sorry, but you've reached the end of search results.",timeout:5e3,position:"topRight",color:"green"})}function R(){const r=c.firstChild.getBoundingClientRect().height;scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
