(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const C=document.querySelector(".header__list-button"),g=document.querySelector(".header__submenu");C.addEventListener("click",function(t){t.stopPropagation(),g.classList.toggle("show")});document.addEventListener("click",function(t){!g.contains(t.target)&&!C.contains(t.target)&&g.classList.remove("show")});window.onload=()=>{const t=document.querySelector(".modal"),o=t.querySelector("svg");t.dataset.open==="true"&&(t.style.display="block"),o.addEventListener("click",()=>{t.style.display="none"})};const A=document.querySelector(".header__hello-value"),P=document.getElementById("modal__name-input"),G=document.querySelector(".modal__save-button"),H=document.querySelector(".modal[data-open='true']");G.addEventListener("click",function(){const t=P.value;A.textContent=t,H.style.display="none"});document.querySelector(".years__form").addEventListener("submit",t=>{t.preventDefault();const o=parseInt(document.querySelector(".years__input").value),n=document.getElementById("resultat");O(o)?(n.textContent="Ви народилися у високосний рік!",n.style.color="green"):(n.textContent="Ви народилися не у високосний рік!",n.style.color="red")});function O(t){return t%4===0&&t%100!==0||t%400===0}let u=Math.floor(Math.random()*10)+1;document.querySelector(".number__form").addEventListener("submit",t=>{t.preventDefault();const o=parseInt(document.querySelector(".number__input").value),n=document.getElementById("result");o===u?(n.textContent=`Вітаємо! Ви вгадали число ${u}.`,n.style.color="green",u=Math.floor(Math.random()*10)+1):(n.textContent=`Нажаль, ви не вгадали. Число, яке загадав комп'ютер, було ${u}.`,n.style.color="red",u=Math.floor(Math.random()*10)+1)});const D=document.querySelector(".game__button-1"),K=document.querySelector(".game__button-2"),V=document.querySelector(".game__button-3"),j=document.querySelector(".game__pc-option"),x=document.querySelector(".game__point-all"),k=document.querySelector(".game__point-pc"),$=document.querySelector(".game__point-your"),m=document.querySelector(".game__win-lose"),E=["Камінь","Ножиці","Папір"];let y=0,_=0,b=0;const T="Комп’ютер виграв раунд!",W="Ви виграли раунд!";D.addEventListener("click",t=>{console.log(t.target)});K.addEventListener("click",t=>{console.log(t.target)});V.addEventListener("click",t=>{console.log(t.target)});function M(t){const o=Math.floor(Math.random()*E.length);return E[o]}function F(t){const o=M();let n="";t===o?(n="Нічия!",m.style.color="black"):t==="Камінь"&&o==="Ножиці"||t==="Ножиці"&&o==="Папір"||t==="Папір"&&o==="Камінь"?(y++,n=W,m.style.color="green"):(_++,n=T,m.style.color="red"),b++,x.textContent=b,$.textContent=y,k.textContent=_,m.textContent=n}j.addEventListener("click",()=>{const t=M();F(t)});x.textContent=b;$.textContent=y;k.textContent=_;const v=document.querySelectorAll(".calculator__number-input"),J=document.querySelectorAll(".calculator__doing-symbols"),R=document.querySelector(".calculator__doing-symbols-equal"),h=v[2];let L=null;J.forEach(t=>{t.addEventListener("click",function(){L=this.textContent})});R.addEventListener("click",function(){const t=parseFloat(v[0].value),o=parseFloat(v[1].value);if(!isNaN(t)&&!isNaN(o)&&L){let n;switch(L){case"+":n=t+o;break;case"-":n=t-o;break;case"*":n=t*o;break;case"/":n=o!==0?t/o:"Помилка";break;default:n="Помилка"}h.value=n}else h.value="Помилка"});const Y=document.querySelector(".time__number-input"),z=document.querySelector(".time__butotn"),q=document.querySelector(".time__result");z.addEventListener("click",function(){const t=parseInt(Y.value);if(isNaN(t))q.textContent="Введіть коректне число";else{const o=Math.floor(t/86400),n=Math.floor(t%(60*60*24)/(60*60)),i=Math.floor(t%(60*60)/60),e=t%60;q.textContent=`${o} дн. ${n}:${i}:${e}`}});const p=document.querySelector(".dinos"),Q=document.querySelector(".cactus");document.addEventListener("keydown",function(t){t.code==="Enter"&&B(),t.preventDefault});function B(){p.classList!="jump"&&(p.classList.add("jump"),setTimeout(function(){p.classList.remove("jump")},300))}setInterval(function(){parseInt(window.getComputedStyle(p).getPropertyValue("top")),parseInt(window.getComputedStyle(Q).getPropertyValue("left"))},10);document.addEventListener("keydown",function(t){B()});const I=document.querySelectorAll(".biggest__input"),U=document.querySelector(".biggest__text");function X(){const t=[...I].map(n=>Number(n.value)||0),o=Math.max(...t);U.textContent=`Найбільше число, яке ви ввели - ${o}`}I.forEach(t=>t.addEventListener("input",X));const Z=document.querySelector(".credits__headline"),ee=document.querySelector(".credits__describtion"),te=document.querySelector(".credits__image"),ne=document.querySelector(".credits__left-svg"),oe=document.querySelector(".credits__right-svg"),f=document.querySelectorAll(".credits__item-line"),d=[{name:"Ім’я студента",role:"Інформація про роботу, яку він/вона виконав/ла",image:"./img/credits/square.png"},{name:"Тарас",role:"Тімлід",image:"./img/credits/taras.png"},{name:"Діма",role:"Скрам-майстер",image:"./img/credits/dima.png"},{name:"Маркіян",role:"Розробник, (Я зробив цю секцію)",image:"./img/credits/markiian.png"},{name:"Денис",role:"Розробник",image:"./img/credits/denys.png"},{name:"Настя",role:"Розробник",image:"./img/credits/nastya.png"},{name:"Діна",role:"Розробник",image:"./img/credits/dina.png"}];let a=0;function S(){Z.textContent=d[a].name,ee.textContent=d[a].role,te.src=d[a].image,f.forEach(t=>t.classList.remove("selected")),f[a]&&f[a].classList.add("selected")}oe.addEventListener("click",()=>{a=(a+1)%d.length,S()});ne.addEventListener("click",()=>{a=(a-1+d.length)%d.length,S()});S();document.addEventListener("dragstart",function(t){t.target.classList.contains("credits__image")&&t.preventDefault()});const r=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}];document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".sceinists__list"),o=document.querySelectorAll(".sceinists__button"),n=document.querySelectorAll(".sceinists__item"),i=()=>{n[0].textContent="Albert Einstein 1879-1955",n[1].textContent="Isaac Newton 1643-1727",n[2].textContent="Galileo Galilei 1564-1642",n[3].textContent="Marie Curie 1867-1934",n[4].textContent="Johannes Kepler 1571-1630",n[5].textContent="Nicolaus Copernicus 1473-1543",n[6].textContent="Max Planck 1858-1947",n[7].textContent="Katherine Blodgett 1898-1979",n[8].textContent="Ada Lovelace 1815-1852",n[9].textContent="Sarah E. Goode 1855-1905",n[10].textContent="Lise Meitner 1878-1968",n[11].textContent="Hanna Hammarström 1829-1909"};o[0].addEventListener("click",()=>{for(let e=0;e<12;e++)r[e].born>=1801||(n[e].textContent="не підходить по фільтрації!")}),o[1].addEventListener("click",()=>{r.sort((e,s)=>e.name>s.name?1:-1),t.innerHTML="";for(let e=0;e<r.length;e++)t.innerHTML+=`<p class="sceinists__item">${r[e].name} ${r[e].surname} ${r[e].born}-${r[e].dead}</p>`}),o[2].addEventListener("click",()=>{r.sort((e,s)=>e.dead-e.born>s.dead-s.born?1:-1)}),o[3].addEventListener("click",()=>{let e=r.reduce((s,c)=>c.born>s.born?c:s,r[0]);alert(`${e.name} ${e.surname} народився у ${e.born} році.`)}),o[4].addEventListener("click",()=>{for(let e=0;e<r.length;e++)if(r[e].name==="Albert"&&r[e].surname==="Einstein"){alert(`Albert Einstein народився у ${r[e].born} році.`);break}}),o[5].addEventListener("click",()=>{for(let e=0;e<r.length;e++)r[e].surname.startsWith("C")?n[e].textContent=`${r[e].name} ${r[e].surname} ${r[e].born}-${r[e].dead}`:n[e].textContent="не підходить по фільтрації!"}),o[6].addEventListener("click",()=>{for(let e=0;e<r.length;e++)r[e].name.startsWith("A")&&(n[e].textContent="не підходить по фільтрації!")}),o[7].addEventListener("click",()=>{let e=r.reduce((c,l)=>l.dead-l.born>c.dead-c.born?l:c,r[0]),s=r.reduce((c,l)=>l.dead-l.born<c.dead-c.born?l:c,r[0]);alert(`Найдовше прожив: ${e.name} ${e.surname} - ${e.dead-e.born} років`),alert(`Найменше прожив: ${s.name} ${s.surname} - ${s.dead-s.born} років`)}),o[8].addEventListener("click",()=>{for(let e=0;e<r.length;e++)r[e].name[0]===r[e].surname[0]?n[e].textContent=`${r[e].name} ${r[e].surname} ${r[e].born}-${r[e].dead}`:n[e].textContent="не підходить по фільтрації!"}),o[9].addEventListener("click",()=>{i()})});const w=document.querySelector("[data-modal]"),re=document.querySelector("[data-modal-close]"),se=document.querySelector("[data-modal-open]"),N=document.querySelector("[data-backdrop]"),ce=document.querySelector(".footer__input");se.addEventListener("click",()=>{ce.value.includes("@")?(w.classList.remove("is-hidden"),N.classList.add("active")):alert("Please enter a valid email!")});re.addEventListener("click",()=>{w.classList.add("is-hidden"),N.classList.remove("active")});
//# sourceMappingURL=commonHelpers.js.map
