import"./vendor-60237e46.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();function d(){const r=document.getElementById("burgerToggle"),t=document.getElementById("burgerMenu");r.addEventListener("click",function(){t.classList.toggle("burger-menu-show"),t.classList.contains("burger-menu-show")?r.innerHTML=`
        <svg width="28" height="28">
          <use href="../images/symbol-defs.svg#icon-close"></use>
        </svg>`:r.innerHTML=`
        <svg width="28" height="28">
          <use href="../images/symbol-defs.svg#icon-menu"></use>
        </svg>`})}document.addEventListener("DOMContentLoaded",function(){d()});const u=document.querySelector(".add-remove-btn"),a=document.querySelector(".modal-btn"),s=document.querySelector(".backdrop");document.addEventListener("DOMContentLoaded",()=>{u.addEventListener("click",()=>{document.body.style.overflowY="hidden"}),a.addEventListener("click",()=>{document.body.style.overflowY="auto",s.classList.remove("is-open")}),s.clientHeight<762&&(s.style.height="762px",s.style.overflowY="scroll")});const i=document.querySelector(".scrollToTop");window.onscroll=()=>{window.scrollY>300?i.classList.remove("isHide"):window.scrollY<300&&i.classList.add("isHide"),i.onclick=()=>{window.scrollTo(0,0)}};
//# sourceMappingURL=main-8ab8130e.js.map