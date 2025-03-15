(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const k=document.querySelector(".header__list-button"),p=document.querySelector(".header__submenu");k.addEventListener("click",function(t){t.stopPropagation(),p.classList.toggle("show")});document.addEventListener("click",function(t){!p.contains(t.target)&&!k.contains(t.target)&&p.classList.remove("show")});window.onload=()=>{const t=document.querySelector(".modal"),n=t.querySelector("svg");t.dataset.open==="true"&&(t.style.display="block"),n.addEventListener("click",()=>{t.style.display="none"})};const O=document.querySelector(".header__hello-value"),D=document.getElementById("modal__name-input"),j=document.querySelector(".modal__save-button"),V=document.querySelector(".modal[data-open='true']");j.addEventListener("click",function(){const t=D.value;O.textContent=t,V.style.display="none"});const G=document.getElementById("slider"),L=document.querySelectorAll("h2");G.addEventListener("change",function(){this.checked?H():(document.body.style.backgroundColor="white",L.style.color="white")});function H(){L.style.color="white",document.body.style.backgroundColor="black"}console.log(L);document.querySelector(".years__form").addEventListener("submit",t=>{t.preventDefault();const n=parseInt(document.querySelector(".years__input").value),o=document.getElementById("resultat");T(n)?(o.textContent="Ви народилися у високосний рік!",o.style.color="green"):(o.textContent="Ви народилися не у високосний рік!",o.style.color="red")});function T(t){return t%4===0&&t%100!==0||t%400===0}let u=Math.floor(Math.random()*10)+1;document.querySelector(".number__form").addEventListener("submit",t=>{t.preventDefault();const n=parseInt(document.querySelector(".number__input").value),o=document.getElementById("result");n===u?(o.textContent=`Вітаємо! Ви вгадали число ${u}.`,o.style.color="green",u=Math.floor(Math.random()*10)+1):(o.textContent=`Нажаль, ви не вгадали. Число, яке загадав комп'ютер, було ${u}.`,o.style.color="red",u=Math.floor(Math.random()*10)+1)});const W=document.querySelector(".game__button-1"),F=document.querySelector(".game__button-2"),K=document.querySelector(".game__button-3"),J=document.querySelector(".game__pc-option"),x=document.querySelector(".game__point-all"),$=document.querySelector(".game__point-pc"),B=document.querySelector(".game__point-your"),m=document.querySelector(".game__win-lose"),S=["Камінь","Ножиці","Папір"];let y=0,b=0,_=0;const R="Комп’ютер виграв раунд!",Y="Ви виграли раунд!";W.addEventListener("click",t=>{console.log(t.target)});F.addEventListener("click",t=>{console.log(t.target)});K.addEventListener("click",t=>{console.log(t.target)});function w(t){const n=Math.floor(Math.random()*S.length);return S[n]}function z(t){const n=w();let o="";t===n?(o="Нічия!",m.style.color="black"):t==="Камінь"&&n==="Ножиці"||t==="Ножиці"&&n==="Папір"||t==="Папір"&&n==="Камінь"?(y++,o=Y,m.style.color="green"):(b++,o=R,m.style.color="red"),_++,x.textContent=_,B.textContent=y,$.textContent=b,m.textContent=o}J.addEventListener("click",()=>{const t=w();z(t)});x.textContent=_;B.textContent=y;$.textContent=b;const h=document.querySelectorAll(".calculator__number-input"),Q=document.querySelectorAll(".calculator__doing-symbols"),U=document.querySelector(".calculator__doing-symbols-equal"),q=h[2];let v=null;Q.forEach(t=>{t.addEventListener("click",function(){v=this.textContent})});U.addEventListener("click",function(){const t=parseFloat(h[0].value),n=parseFloat(h[1].value);if(!isNaN(t)&&!isNaN(n)&&v){let o;switch(v){case"+":o=t+n;break;case"-":o=t-n;break;case"*":o=t*n;break;case"/":o=n!==0?t/n:"Помилка";break;default:o="Помилка"}q.value=o}else q.value="Помилка"});const X=document.querySelector(".time__number-input"),Z=document.querySelector(".time__butotn"),C=document.querySelector(".time__result");Z.addEventListener("click",function(){const t=parseInt(X.value);if(isNaN(t))C.textContent="Введіть коректне число";else{const n=Math.floor(t/86400),o=Math.floor(t%(60*60*24)/(60*60)),i=Math.floor(t%(60*60)/60),e=t%60;C.textContent=`${n} дн. ${o}:${i}:${e}`}});const f=document.querySelector(".dinos"),ee=document.querySelector(".cactus");document.addEventListener("keydown",function(t){t.code==="Enter"&&I(),t.preventDefault});function I(){f.classList!="jump"&&(f.classList.add("jump"),setTimeout(function(){f.classList.remove("jump")},300))}setInterval(function(){parseInt(window.getComputedStyle(f).getPropertyValue("top")),parseInt(window.getComputedStyle(ee).getPropertyValue("left"))},10);document.addEventListener("keydown",function(t){I()});const M=document.querySelectorAll(".biggest__input"),te=document.querySelector(".biggest__text");function ne(){const t=[...M].map(o=>Number(o.value)||0),n=Math.max(...t);te.textContent=`Найбільше число, яке ви ввели - ${n}`}M.forEach(t=>t.addEventListener("input",ne));const oe=document.querySelector(".credits__headline"),re=document.querySelector(".credits__describtion"),ce=document.querySelector(".credits__image"),se=document.querySelector(".credits__left-svg"),ae=document.querySelector(".credits__right-svg"),g=document.querySelectorAll(".credits__item-line"),d=[{name:"Ім’я студента",role:"Інформація про роботу, яку він/вона виконав/ла",image:"./img/credits/square.png"},{name:"Тарас",role:"Тімлід",image:"./img/credits/taras.png"},{name:"Діма",role:"Скрам-майстер",image:"./img/credits/dima.png"},{name:"Маркіян",role:"Розробник, (Я зробив цю секцію)",image:"./img/credits/markiian.png"},{name:"Денис",role:"Розробник",image:"./img/credits/denys.png"},{name:"Настя",role:"Розробник",image:"./img/credits/nastya.png"},{name:"Діна",role:"Розробник",image:"./img/credits/dina.png"}];let l=0;function E(){oe.textContent=d[l].name,re.textContent=d[l].role,ce.src=d[l].image,g.forEach(t=>t.classList.remove("selected")),g[l]&&g[l].classList.add("selected")}ae.addEventListener("click",()=>{l=(l+1)%d.length,E()});se.addEventListener("click",()=>{l=(l-1+d.length)%d.length,E()});E();document.addEventListener("dragstart",function(t){t.target.classList.contains("credits__image")&&t.preventDefault()});const c=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}];document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".sceinists__list"),n=document.querySelectorAll(".sceinists__button"),o=document.querySelectorAll(".sceinists__item"),i=[...t.children].map(e=>e.textContent);n[0].addEventListener("click",()=>{for(let e=0;e<12;e++)c[e].born>=1801||(o[e].textContent="не підходить по фільтрації!")}),n[1].addEventListener("click",()=>{const e=t.children;for(let r=0;r<e.length-1;r++)for(let s=r+1;s<e.length;s++){const a=e[r].textContent.toLowerCase(),P=e[s].textContent.toLowerCase();a>P&&t.insertBefore(e[s],e[r])}}),n[2].addEventListener("click",()=>{c.sort((e,r)=>e.dead-e.born>r.dead-r.born?1:-1)}),n[3].addEventListener("click",()=>{let e=c.reduce((r,s)=>s.born>r.born?s:r,c[0]);alert(`${e.name} ${e.surname} народився у ${e.born} році.`)}),n[4].addEventListener("click",()=>{for(let e=0;e<c.length;e++)if(c[e].name==="Albert"&&c[e].surname==="Einstein"){alert(`Albert Einstein народився у ${c[e].born} році.`);break}}),n[5].addEventListener("click",()=>{for(let e=0;e<c.length;e++)c[e].surname.startsWith("C")?o[e].textContent=`${c[e].name} ${c[e].surname} ${c[e].born}-${c[e].dead}`:o[e].textContent="не підходить по фільтрації!"}),n[6].addEventListener("click",()=>{for(let e=0;e<c.length;e++)c[e].name.startsWith("A")&&(o[e].textContent="не підходить по фільтрації!")}),n[7].addEventListener("click",()=>{let e=c.reduce((s,a)=>a.dead-a.born>s.dead-s.born?a:s,c[0]),r=c.reduce((s,a)=>a.dead-a.born<s.dead-s.born?a:s,c[0]);alert(`Найдовше прожив: ${e.name} ${e.surname} - ${e.dead-e.born} років`),alert(`Найменше прожив: ${r.name} ${r.surname} - ${r.dead-r.born} років`)}),n[8].addEventListener("click",()=>{for(let e=0;e<c.length;e++)c[e].name[0]===c[e].surname[0]?o[e].textContent=`${c[e].name} ${c[e].surname} ${c[e].born}-${c[e].dead}`:o[e].textContent="не підходить по фільтрації!"}),n[9].addEventListener("click",()=>{t.innerHTML="",i.forEach(e=>t.appendChild(e))})});const N=document.querySelector("[data-modal]"),le=document.querySelector("[data-modal-close]"),ie=document.querySelector("[data-modal-open]"),A=document.querySelector("[data-backdrop]"),de=document.querySelector(".footer__input");ie.addEventListener("click",()=>{de.value.includes("@")?(N.classList.remove("is-hidden"),A.classList.add("active")):alert("Please enter a valid email!")});le.addEventListener("click",()=>{N.classList.add("is-hidden"),A.classList.remove("active")});
//# sourceMappingURL=commonHelpers.js.map
