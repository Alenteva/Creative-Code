import"./assets/vendor-60237e46.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function c(){const s=document.getElementById("burgerToggle"),r=document.getElementById("burgerMenu");s.addEventListener("click",function(){r.classList.toggle("burger-menu-show"),r.classList.contains("burger-menu-show")?s.innerHTML=`
        <svg width="28" height="28">
          <use href="../images/symbol-defs.svg#icon-close"></use>
        </svg>`:s.innerHTML=`
        <svg width="28" height="28">
          <use href="../images/symbol-defs.svg#icon-menu"></use>
        </svg>`})}document.addEventListener("DOMContentLoaded",function(){c()});
//# sourceMappingURL=commonHelpers.js.map
