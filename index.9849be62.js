function e(e){return fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_hIaFrgsqcaK0hisTHTomY8WRo85jkUlzkiwB3zBuQ9oT2V7iVFJP2qp3KAXh3hus&breed_ids=${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}const t=document.querySelector(".breed-select"),s=document.querySelector(".cat-info"),i=document.querySelector(".loader"),n=document.querySelector(".error");function r(){n.classList.remove("is-hidden"),t.classList.add("is-hidden")}fetch("https://api.thecatapi.com/v1/breeds?api_key=live_hIaFrgsqcaK0hisTHTomY8WRo85jkUlzkiwB3zBuQ9oT2V7iVFJP2qp3KAXh3hus").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{i.classList.replace("loader","is-hidden");let s=e.map((({name:e,id:t})=>`<option value ='${t}'>${e}</option>`));t.insertAdjacentHTML("beforeend",s),t.classList.remove("is-hidden")})).catch(r),t.addEventListener("change",(function(t){i.classList.replace("is-hidden","loader"),s.classList.add("is-hidden");e(t.target.value).then((e=>{i.classList.replace("loader","is-hidden");const{url:t,breeds:n}=e[0],{name:r,description:a,temperament:o}=n[0];s.innerHTML=`\n      <img src="${t}" alt="${r}" width="400" class="img-style"/>\n      <div class="box">\n        <h2>${r}</h2>\n        <p>${a}</p>\n        <p><strong>Temperament:</strong> ${o}</p>\n      </div>\n      `,s.classList.remove("is-hidden")})).catch(r)}));
//# sourceMappingURL=index.9849be62.js.map