(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const _=document.querySelector(".header__list-button"),d=document.querySelector(".header__submenu");_.addEventListener("click",function(e){e.stopPropagation(),d.classList.toggle("show")});document.addEventListener("click",function(e){!d.contains(e.target)&&!_.contains(e.target)&&d.classList.remove("show")});window.onload=()=>{const e=document.querySelector(".modal"),n=e.querySelector("svg");e.dataset.open==="true"&&(e.style.display="block"),n.addEventListener("click",()=>{e.style.display="none"})};const q=document.querySelector(".header__hello-value"),S=document.getElementById("modal__name-input"),b=document.querySelector(".modal__save-button"),L=document.querySelector(".modal[data-open='true']");b.addEventListener("click",function(){const e=S.value;q.textContent=e,L.style.display="none"});document.querySelector(".years__form").addEventListener("submit",function(e){e.preventDefault();const n=parseInt(document.querySelector(".years__input").value),t=document.getElementById("resultat");E(n)?(t.textContent="Ви народилися у високосний рік!",t.style.color="green"):(t.textContent="Ви народилися не у високосний рік!",t.style.color="red")});function E(e){return e%4===0&&e%100!==0||e%400===0}let l=Math.floor(Math.random()*10)+1;document.querySelector(".number__form").addEventListener("submit",function(e){e.preventDefault();const n=parseInt(document.querySelector(".number__input").value),t=document.getElementById("result");n===l?(t.textContent=`Вітаємо! Ви вгадали число ${l}.`,t.style.color="green",l=Math.floor(Math.random()*10)+1):(t.textContent=`Нажаль, ви не вгадали. Число, яке загадав комп'ютер, було ${l}.`,t.style.color="red",l=Math.floor(Math.random()*10)+1)});document.querySelector(".game__button-1");document.querySelector(".game__button-2");document.querySelector(".game__button-3");document.querySelector(".game__pc-option");const m=document.querySelectorAll(".calculator__number-input"),k=document.querySelectorAll(".calculator__doing-symbols"),I=document.querySelector(".calculator__doing-symbols-equal"),g=m[2];let f=null;k.forEach(e=>{e.addEventListener("click",function(){f=this.textContent})});I.addEventListener("click",function(){const e=parseFloat(m[0].value),n=parseFloat(m[1].value);if(!isNaN(e)&&!isNaN(n)&&f){let t;switch(f){case"+":t=e+n;break;case"-":t=e-n;break;case"*":t=e*n;break;case"/":t=n!==0?e/n:"Помилка";break;default:t="Помилка"}g.value=t}else g.value="Помилка"});const x=document.querySelector(".time__number-input"),B=document.querySelector(".time__butotn"),p=document.querySelector(".time__result");B.addEventListener("click",function(){const e=parseInt(x.value);if(isNaN(e))p.textContent="Введіть коректне число";else{const n=Math.floor(e/86400),t=Math.floor(e%(60*60*24)/(60*60)),a=Math.floor(e%(60*60)/60),o=e%60;p.textContent=`${n} дн. ${t}:${a}:${o}`}});const C=document.querySelector(".credits__headline"),M=document.querySelector(".credits__describtion"),N=document.querySelector(".credits__image"),$=document.querySelector(".credits__left-svg"),w=document.querySelector(".credits__right-svg"),i=document.querySelectorAll(".credits__item-line"),s=[{name:"Ім’я студента",role:"Інформація про роботу, яку він/вона виконав/ла",image:"./img/credits/square.png"},{name:"Тарас",role:"Тімлід",image:"./img/credits/taras.png"},{name:"Діма",role:"Скрам-майстер",image:"./img/credits/dima.png"},{name:"Маркіян",role:"Розробник, (Я зробив цю секцію)",image:"./img/credits/markiian.png"},{name:"Денис",role:"Розробник",image:"./img/credits/denys.png"},{name:"Настя",role:"Розробник",image:"./img/credits/nastya.png"},{name:"Діна",role:"Розробник",image:"./img/credits/dina.png"}];let c=0;function y(){C.textContent=s[c].name,M.textContent=s[c].role,N.src=s[c].image,i.forEach(e=>e.classList.remove("selected")),i[c]&&i[c].classList.add("selected")}w.addEventListener("click",()=>{c=(c+1)%s.length,y()});$.addEventListener("click",()=>{c=(c-1+s.length)%s.length,y()});y();const v=document.querySelector("[data-modal]"),O=document.querySelector("[data-modal-close]"),P=document.querySelector("[data-modal-open]"),h=document.querySelector("[data-backdrop]");P.addEventListener("click",()=>{v.classList.remove("is-hidden"),h.classList.add("active")});O.addEventListener("click",()=>{v.classList.add("is-hidden"),h.classList.remove("active")});document.addEventListener("dragstart",function(e){e.target.classList.contains("footer-modal-img")&&e.preventDefault()});
//# sourceMappingURL=commonHelpers.js.map
