(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const p=document.querySelector(".header__list-button"),u=document.querySelector(".header__submenu");p.addEventListener("click",function(e){e.stopPropagation(),u.classList.toggle("show")});document.addEventListener("click",function(e){!u.contains(e.target)&&!p.contains(e.target)&&u.classList.remove("show")});cowindow.onload=function(){const e=document.querySelector(".modal"),n=document.getElementById("modal__name-input"),c=document.querySelector(".modal__save-button"),i=document.querySelector(".header_hello-value");e.classList.add("modal--active"),c.addEventListener("click",function(){const t=n.value.trim();t!==""?(i.textContent=t,e.classList.remove("modal--active")):alert("Будь ласка, введіть своє ім’я!")}),document.addEventListener("keydown",function(t){t.key==="Escape"&&e.classList.remove("modal--active")}),e.addEventListener("click",function(t){t.target===e&&e.classList.remove("modal--active")})};document.querySelector(".game__button-1");document.querySelector(".game__button-2");document.querySelector(".game__button-3");document.querySelector(".game__pc-option");const d=document.querySelectorAll(".calculator__number-input"),y=document.querySelectorAll(".calculator__doing-symbols"),_=document.querySelector(".calculator__doing-symbols-equal"),f=d[2];let m=null;y.forEach(e=>{e.addEventListener("click",function(){m=this.textContent})});_.addEventListener("click",function(){const e=parseFloat(d[0].value),n=parseFloat(d[1].value);if(!isNaN(e)&&!isNaN(n)&&m){let c;switch(m){case"+":c=e+n;break;case"-":c=e-n;break;case"*":c=e*n;break;case"/":c=n!==0?e/n:"Помилка";break;default:c="Помилка"}f.value=c}else f.value="Помилка"});const v=document.querySelector(".credits__headline"),h=document.querySelector(".credits__describtion"),q=document.querySelector(".credits__image"),L=document.querySelector(".credits__left-svg"),b=document.querySelector(".credits__right-svg"),l=document.querySelectorAll(".credits__item-line"),s=[{name:"Ім’я студента",role:"Інформація про роботу, яку він/вона виконав/ла",image:"./img/credits/square.png"},{name:"Тарас",role:"Тімлід",image:"./img/credits/taras.png"},{name:"Діма",role:"Скрам-майстер",image:"./img/credits/dima.png"},{name:"Маркіян",role:"Розробник, (Я зробив цю секцію)",image:"./img/credits/markiian.png"},{name:"Денис",role:"Розробник",image:"./img/credits/denys.png"},{name:"Настя",role:"Розробник",image:"./img/credits/nastya.png"},{name:"Діна",role:"Розробник",image:"./img/credits/dina.png"}];let r=0;function g(){v.textContent=s[r].name,h.textContent=s[r].role,q.src=s[r].image,l.forEach(e=>e.classList.remove("selected")),l[r]&&l[r].classList.add("selected")}b.addEventListener("click",()=>{r=(r+1)%s.length,g()});L.addEventListener("click",()=>{r=(r-1+s.length)%s.length,g()});g();
//# sourceMappingURL=commonHelpers.js.map
