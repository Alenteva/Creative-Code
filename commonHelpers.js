import"./assets/shopping-list-help-81f46501.js";import{i as q,g as B,c as E,a as c,o as C,b as l,S as x}from"./assets/vendor-34c7d272.js";const I={apiKey:"AIzaSyD8UvisVnkCvMijmf6q4ZtLkQgC43vz2KM",authDomain:"dookshelf-357a4.firebaseapp.com",projectId:"dookshelf-357a4",storageBucket:"dookshelf-357a4.appspot.com",messagingSenderId:"957443484270",appId:"1:957443484270:web:de06245395594e6cf9947f",measurementId:"G-PGZE6HZC47"};q(I);const f=B(),m=document.querySelector(".Form-window"),T=document.querySelector(".Close-form-btn"),v=document.querySelector(".header-user"),M=document.getElementById("email"),$=document.getElementById("password"),A=document.getElementById("username");document.querySelector(".quickstart-sign-in");document.querySelector(".quickstart-sign-up");const H=document.querySelector(".header-nav");v.addEventListener("click",function(){m.classList.add("is-open")});T.addEventListener("click",function(){m.classList.remove("is-open")});function _(){const e=M.value,t=$.value,a=A.value;if(e.length<4){alert("Please enter an email address.");return}if(t.length<4){alert("Please enter a password.");return}E(f,e,t).then(o=>{console.log(o);const s=o.user;return s.displayName=a,m.classList.remove("is-open"),H.style.display="block",v.textContent=s.displayName,c.show({title:"Ok",message:"You have successfully registered!",color:"blue",position:"topCenter"})}).catch(function(o){const s=o.code,i=o.message;s=="auth/weak-password"?alert("The password is too weak."):alert(i),console.log(o)}),C(f,o=>{localStorage.setItem("user-data",JSON.stringify({name:o.name,mail:o.email}))})}m.addEventListener("submit",function(e){e.preventDefault(),_()});function O(){const e=document.getElementById("burgerToggle"),t=document.getElementById("burgerMenu");e.addEventListener("click",function(){t.classList.toggle("burger-menu-show"),t.classList.contains("burger-menu-show")?e.innerHTML=`
        <svg width="18" height="18" stroke="#000">
          <use href="./images/icons/symbol-defs.svg#icon-close"></use>
        </svg>`:e.innerHTML=`
        <svg width="28" height="28">
          <use href="./images/icons/symbol-defs.svg#icon-menu"></use>
        </svg>`})}document.addEventListener("DOMContentLoaded",function(){O()});const N=document.getElementById("home");document.getElementById("shopping-list");N.classList.add("active");const d=document.querySelector(".list-one"),u=document.querySelector(".list_categories"),n=document.querySelector(".main-title");let g;function j(){let e=window.innerWidth;return e<=767?0:e<=1439?2:4}function y(){const e=n.textContent.split(" "),t=e[e.length-1];n.innerHTML=n.innerHTML.replace(t,`<span class="blue">${t}</span>`)}async function w(){new x(".link-img")}async function S(e){d.innerHTML="";let t="";const a=j();for(let o in e){t+=`
            <li class="books_list">
                <h2 class="name_category">${e[o].list_name}</h2>
                <ul class="images_books">`;for(let s in e[o].books)if(t+=`<li class="image_book" data-category="${e[o].books[s]._id}">
                                    <div class="div-animation">
                                            <a class="link-img" href="${e[o].books[s].book_image}"><img class="img-example" alt="Book title" src="${e[o].books[s].book_image}"></img></a>
                                        <div class="box-quick-view"><p class="animation-paragraf">Quick view</p></div>
                                    </div>
                                
                                <div class="box-cards">
                                    <p class="title-book">${e[o].books[s].title}</p>
                                    <p class="author-book">${e[o].books[s].author}</p>
                                </div>
                            </li>`,a==s)break;t+=`</ul><button class="button-see-more" data-category="${e[o].list_name}">See more</button></li>`}d.insertAdjacentHTML("beforeend",t),w()}d.addEventListener("click",async e=>{if(e.target.classList.contains("button-see-more")){const t=e.target.dataset.category;n.textContent=t,u.querySelector(".categoria")&&u.querySelectorAll(".categoria").forEach(i=>{n.textContent===i.textContent&&(document.querySelector(".selected-categories").classList.remove("selected-categories"),i.classList.add("selected-categories"))});const a=n.textContent.split(" "),o=a[a.length-1];n.innerHTML=n.innerHTML.replace(o,`<span class="blue">${o}</span>`),await l.get(`https://books-backend.p.goit.global/books/category?category=${t}`).then(s=>{if(s.data.length===0)throw new Error("Sorry, books in the selected category were not found");p(s.data)}).catch(s=>c.error({title:"Error",message:s.message}))}});async function D(){d.innerHTML="",n.textContent==="Best Sellers Books"?await l.get("https://books-backend.p.goit.global/books/top-books").then(e=>{if(e.data.length===0)throw new Error("Sorry, books in the selected category were not found");S(e.data)}).catch(e=>c.error({title:"Error",message:e.message})):await l.get(`https://books-backend.p.goit.global/books/category?category=${g}`).then(e=>{if(e.data.length===0)throw new Error("Sorry, books in the selected category were not found");p(e.data)}).catch(e=>c.error({title:"Error",message:e.message}))}D();async function J(e){let t="";const a='<li tabindex="0" data-name="Best Sellers Books" class="categoria selected-categories">All categories</li>';e.forEach(s=>{t+=`<li tabindex="0" data-name="${s.list_name}" class="categoria">${s.list_name}</li>`}),u.insertAdjacentHTML("beforeend",t),u.insertAdjacentHTML("afterbegin",a),document.querySelectorAll(".categoria").forEach(s=>{s.addEventListener("click",async i=>{i.preventDefault(),document.querySelector(".selected-categories").classList.remove("selected-categories"),i.target.classList.add("selected-categories"),g=i.target.textContent,g=g.replace(/ /g,"%20"),i.target.textContent!=="All categories"?(n.textContent=i.target.textContent,y(),await l.get(`https://books-backend.p.goit.global/books/category?category=${g}`).then(r=>{if(r.data.length===0)throw new Error("Sorry, books in the selected category were not found");p(r.data)}).catch(r=>c.error({title:"Error",message:r.message}))):(n.textContent="Best Sellers Books",y(),await l.get("https://books-backend.p.goit.global/books/top-books").then(r=>{if(r.data.length===0)throw new Error("Sorry, books in the selected category were not found");S(r.data)}).catch(r=>c.error({title:"Error",message:r.message})))})})}l.get("https://books-backend.p.goit.global/books/category-list").then(e=>{J(e.data)}).catch(e=>c.error({title:"Error",message:e.message}));async function p(e){let t="";d.innerHTML="",e.forEach(a=>{t+=`<li class="book" data-category="${a._id}">
                        <div class="div-animation">
                        <a class="link-img" href="${a.book_image}"><img class="img-example" alt="Book title" src="${a.book_image}"></img></a>
                            <div class="box-quick-view"><p class="animation-paragraf">Quick view</p></div>
                        </div>
                                <div class="box-cards">
                                    <p class="title-book">${a.title}</p>
                                    <p class="author-book">${a.author}</p>
                                </div>
                      </li>`}),d.insertAdjacentHTML("beforeend",t),w()}function W(e){const t=e.target.closest(".box-quick-view");if(e.target.closest(".box-quick-view"))return(t.closest(".image_book")||t.closest(".book")).dataset.category}const b=document.querySelector(".list-one");document.querySelector(".content-image");document.querySelector(".content-title");document.querySelector(".content-descr");document.querySelector(".modal-descr");document.querySelector(".amazon");document.querySelector(".apple");const k=document.querySelector("#add"),L=document.querySelector(".hidden-information");b.addEventListener("click",e=>{b.querySelectorAll(".box-quick-view").length>0&&W(e)});k.addEventListener("click",z);l.defaults.timeout=4e3;function z(e){const t=e.target.attributes.id.value;k.textContent==="Add to shopping list"?P(t):U(t)}function P(e){let t=localStorage.getItem("idBooks");(!t||t==="")&&(t=[],localStorage.setItem("idBooks",JSON.stringify(t)),t=JSON.parse(localStorage.getItem("idBooks")),t.push(e),localStorage.setItem("idBooks",JSON.stringify(t)),k.textContent="Remove from shopping list",L.classList.remove("visually-hidden"))}function U(e){let t=JSON.parse(localStorage.getItem("idBooks"));t.splice(t.indexOf(e),1),localStorage.setItem("idBooks",JSON.stringify(t)),k.textContent="Add to shopping list",L.classList.add("visually-hidden")}const h=document.querySelector(".scrollToTop");window.onscroll=()=>{window.scrollY>500?h.classList.remove("isHide"):window.scrollY<500&&h.classList.add("isHide"),h.onclick=()=>{window.scrollTo(0,0)}};
//# sourceMappingURL=commonHelpers.js.map
