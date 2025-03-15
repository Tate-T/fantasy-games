(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const C=document.querySelector(".header__list-button"),p=document.querySelector(".header__submenu");C.addEventListener("click",function(t){t.stopPropagation(),p.classList.toggle("show")});document.addEventListener("click",function(t){!p.contains(t.target)&&!C.contains(t.target)&&p.classList.remove("show")});window.onload=()=>{const t=document.querySelector(".modal"),n=t.querySelector("svg");t.dataset.open==="true"&&(t.style.display="block"),n.addEventListener("click",()=>{t.style.display="none"})};const P=document.querySelector(".header__hello-value"),O=document.getElementById("modal__name-input"),D=document.querySelector(".modal__save-button"),j=document.querySelector(".modal[data-open='true']");D.addEventListener("click",function(){const t=O.value;P.textContent=t,j.style.display="none"});document.querySelector(".years__form").addEventListener("submit",t=>{t.preventDefault();const n=parseInt(document.querySelector(".years__input").value),o=document.getElementById("resultat");V(n)?(o.textContent="Ви народилися у високосний рік!",o.style.color="green"):(o.textContent="Ви народилися не у високосний рік!",o.style.color="red")});function V(t){return t%4===0&&t%100!==0||t%400===0}let u=Math.floor(Math.random()*10)+1;document.querySelector(".number__form").addEventListener("submit",t=>{t.preventDefault();const n=parseInt(document.querySelector(".number__input").value),o=document.getElementById("result");n===u?(o.textContent=`Вітаємо! Ви вгадали число ${u}.`,o.style.color="green",u=Math.floor(Math.random()*10)+1):(o.textContent=`Нажаль, ви не вгадали. Число, яке загадав комп'ютер, було ${u}.`,o.style.color="red",u=Math.floor(Math.random()*10)+1)});const G=document.querySelector(".game__button-1"),W=document.querySelector(".game__button-2"),F=document.querySelector(".game__button-3"),H=document.querySelector(".game__pc-option"),x=document.querySelector(".game__point-all"),k=document.querySelector(".game__point-pc"),$=document.querySelector(".game__point-your"),m=document.querySelector(".game__win-lose"),S=["Камінь","Ножиці","Папір"];let y=0,_=0,b=0;const K="Комп’ютер виграв раунд!",T="Ви виграли раунд!";G.addEventListener("click",t=>{console.log(t.target)});W.addEventListener("click",t=>{console.log(t.target)});F.addEventListener("click",t=>{console.log(t.target)});function B(t){const n=Math.floor(Math.random()*S.length);return S[n]}function J(t){const n=B();let o="";t===n?(o="Нічия!",m.style.color="black"):t==="Камінь"&&n==="Ножиці"||t==="Ножиці"&&n==="Папір"||t==="Папір"&&n==="Камінь"?(y++,o=T,m.style.color="green"):(_++,o=K,m.style.color="red"),b++,x.textContent=b,$.textContent=y,k.textContent=_,m.textContent=o}H.addEventListener("click",()=>{const t=B();J(t)});x.textContent=b;$.textContent=y;k.textContent=_;const v=document.querySelectorAll(".calculator__number-input"),R=document.querySelectorAll(".calculator__doing-symbols"),Y=document.querySelector(".calculator__doing-symbols-equal"),E=v[2];let L=null;R.forEach(t=>{t.addEventListener("click",function(){L=this.textContent})});Y.addEventListener("click",function(){const t=parseFloat(v[0].value),n=parseFloat(v[1].value);if(!isNaN(t)&&!isNaN(n)&&L){let o;switch(L){case"+":o=t+n;break;case"-":o=t-n;break;case"*":o=t*n;break;case"/":o=n!==0?t/n:"Помилка";break;default:o="Помилка"}E.value=o}else E.value="Помилка"});const z=document.querySelector(".time__number-input"),Q=document.querySelector(".time__butotn"),q=document.querySelector(".time__result");Q.addEventListener("click",function(){const t=parseInt(z.value);if(isNaN(t))q.textContent="Введіть коректне число";else{const n=Math.floor(t/86400),o=Math.floor(t%(60*60*24)/(60*60)),i=Math.floor(t%(60*60)/60),e=t%60;q.textContent=`${n} дн. ${o}:${i}:${e}`}});const f=document.querySelector(".dinos"),U=document.querySelector(".cactus");document.addEventListener("keydown",function(t){t.code==="Enter"&&I(),t.preventDefault});function I(){f.classList!="jump"&&(f.classList.add("jump"),setTimeout(function(){f.classList.remove("jump")},300))}setInterval(function(){parseInt(window.getComputedStyle(f).getPropertyValue("top")),parseInt(window.getComputedStyle(U).getPropertyValue("left"))},10);document.addEventListener("keydown",function(t){I()});const M=document.querySelectorAll(".biggest__input"),X=document.querySelector(".biggest__text");function Z(){const t=[...M].map(o=>Number(o.value)||0),n=Math.max(...t);X.textContent=`Найбільше число, яке ви ввели - ${n}`}M.forEach(t=>t.addEventListener("input",Z));const ee=document.querySelector(".credits__headline"),te=document.querySelector(".credits__describtion"),ne=document.querySelector(".credits__image"),oe=document.querySelector(".credits__left-svg"),re=document.querySelector(".credits__right-svg"),g=document.querySelectorAll(".credits__item-line"),d=[{name:"Ім’я студента",role:"Інформація про роботу, яку він/вона виконав/ла",image:"./img/credits/square.png"},{name:"Тарас",role:"Тімлід",image:"./img/credits/taras.png"},{name:"Діма",role:"Скрам-майстер",image:"./img/credits/dima.png"},{name:"Маркіян",role:"Розробник, (Я зробив цю секцію)",image:"./img/credits/markiian.png"},{name:"Денис",role:"Розробник",image:"./img/credits/denys.png"},{name:"Настя",role:"Розробник",image:"./img/credits/nastya.png"},{name:"Діна",role:"Розробник",image:"./img/credits/dina.png"}];let l=0;function h(){ee.textContent=d[l].name,te.textContent=d[l].role,ne.src=d[l].image,g.forEach(t=>t.classList.remove("selected")),g[l]&&g[l].classList.add("selected")}re.addEventListener("click",()=>{l=(l+1)%d.length,h()});oe.addEventListener("click",()=>{l=(l-1+d.length)%d.length,h()});h();document.addEventListener("dragstart",function(t){t.target.classList.contains("credits__image")&&t.preventDefault()});const s=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}];document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".sceinists__list"),n=document.querySelectorAll(".sceinists__button"),o=document.querySelectorAll(".sceinists__item"),i=[...t.children].map(e=>e.textContent);n[0].addEventListener("click",()=>{for(let e=0;e<12;e++)s[e].born>=1801||(o[e].textContent="не підходить по фільтрації!")}),n[1].addEventListener("click",()=>{const e=t.children;for(let r=0;r<e.length-1;r++)for(let c=r+1;c<e.length;c++){const a=e[r].textContent.toLowerCase(),A=e[c].textContent.toLowerCase();a>A&&t.insertBefore(e[c],e[r])}}),n[2].addEventListener("click",()=>{s.sort((e,r)=>e.dead-e.born>r.dead-r.born?1:-1)}),n[3].addEventListener("click",()=>{let e=s.reduce((r,c)=>c.born>r.born?c:r,s[0]);alert(`${e.name} ${e.surname} народився у ${e.born} році.`)}),n[4].addEventListener("click",()=>{for(let e=0;e<s.length;e++)if(s[e].name==="Albert"&&s[e].surname==="Einstein"){alert(`Albert Einstein народився у ${s[e].born} році.`);break}}),n[5].addEventListener("click",()=>{for(let e=0;e<s.length;e++)s[e].surname.startsWith("C")?o[e].textContent=`${s[e].name} ${s[e].surname} ${s[e].born}-${s[e].dead}`:o[e].textContent="не підходить по фільтрації!"}),n[6].addEventListener("click",()=>{for(let e=0;e<s.length;e++)s[e].name.startsWith("A")&&(o[e].textContent="не підходить по фільтрації!")}),n[7].addEventListener("click",()=>{let e=s.reduce((c,a)=>a.dead-a.born>c.dead-c.born?a:c,s[0]),r=s.reduce((c,a)=>a.dead-a.born<c.dead-c.born?a:c,s[0]);alert(`Найдовше прожив: ${e.name} ${e.surname} - ${e.dead-e.born} років`),alert(`Найменше прожив: ${r.name} ${r.surname} - ${r.dead-r.born} років`)}),n[8].addEventListener("click",()=>{for(let e=0;e<s.length;e++)s[e].name[0]===s[e].surname[0]?o[e].textContent=`${s[e].name} ${s[e].surname} ${s[e].born}-${s[e].dead}`:o[e].textContent="не підходить по фільтрації!"}),n[9].addEventListener("click",()=>{const e=t.children;for(let r=0;r<i.length;r++)e[r].textContent=i[r]})});const w=document.querySelector("[data-modal]"),se=document.querySelector("[data-modal-close]"),ce=document.querySelector("[data-modal-open]"),N=document.querySelector("[data-backdrop]"),ae=document.querySelector(".footer__input");ce.addEventListener("click",()=>{ae.value.includes("@")?(w.classList.remove("is-hidden"),N.classList.add("active")):alert("Please enter a valid email!")});se.addEventListener("click",()=>{w.classList.add("is-hidden"),N.classList.remove("active")});
//# sourceMappingURL=commonHelpers.js.map
