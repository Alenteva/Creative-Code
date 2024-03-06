import"./assets/shopping-list-help-ef95527d.js";import{i as x,g as M,s as T,a as I,b as _,c as l,d as A,o as H,e as c,S as N}from"./assets/vendor-39fe5086.js";const D={apiKey:"AIzaSyD8UvisVnkCvMijmf6q4ZtLkQgC43vz2KM",authDomain:"dookshelf-357a4.firebaseapp.com",projectId:"dookshelf-357a4",storageBucket:"dookshelf-357a4.appspot.com",messagingSenderId:"957443484270",appId:"1:957443484270:web:de06245395594e6cf9947f",measurementId:"G-PGZE6HZC47"};x(D);const d=M(),h=document.querySelector(".Form-window"),P=document.querySelector(".Close-form-btn"),f=document.querySelector(".header-user"),k=document.getElementById("email"),S=document.getElementById("password"),L=document.getElementById("username"),W=document.querySelector(".quickstart-sign-in"),z=document.querySelector(".quickstart-sign-up"),E=document.querySelector(".header-nav"),O=document.querySelector(".reset-btn");f.addEventListener("click",function(){h.classList.add("is-open")});P.addEventListener("click",function(){h.classList.remove("is-open")});function j(){const e=k.value;T(d,e).then(function(){alert("Password reset email sent. Check your email")}).catch(function(t){const s=t.code,o=t.message;(s=="auth/invalid-email"||s=="auth/user-not-found")&&alert(o),console.log(t)})}function U(){if(d.currentUser)I(d).then(()=>{localStorage.removeItem("user-data")});else{const e=k.value,t=S.value,s=L.value;if(e.length<4){alert("Please enter an email address");return}if(t.length<4){alert("Please enter a password with at least 4 characters");return}_(d,e,t).then(o=>{const a=o.user;a.displayName=s,h.classList.remove("is-open"),E.style.display="block",f.textContent=a.displayName,l.show({title:"Hello",message:`Welcome, ${a.displayName}!`,color:"blue",position:"topCenter"})}).catch(o=>{const a=o.code,n=o.message;alert(a==="auth/wrong-password"?"Wrong password":n),console.error(o)})}}function R(){const e=k.value,t=S.value,s=L.value;if(e.length<4){alert("Please enter an email address.");return}if(t.length<4){alert("Please enter a password.");return}A(d,e,t).then(o=>{const a=o.user;return a.displayName=s,h.classList.remove("is-open"),E.style.display="block",f.textContent=a.displayName,l.show({title:"Ok",message:"You have successfully registered!",color:"blue",position:"topCenter"})}).catch(function(o){const a=o.code,n=o.message;a=="auth/weak-password"?alert("The password is too weak."):alert(n),console.log(o)}),H(d,o=>{localStorage.setItem("user-data",JSON.stringify({name:o.displayName,mail:o.email}))})}O.addEventListener("click",function(e){e.preventDefault(),j()});W.addEventListener("click",function(e){e.preventDefault(),U()});z.addEventListener("click",function(e){e.preventDefault(),R()});function Y(){const e=document.getElementById("burgerToggle"),t=document.getElementById("burgerMenu");e.addEventListener("click",function(){t.classList.toggle("burger-menu-show"),t.classList.contains("burger-menu-show")?e.innerHTML=`
        <svg width="18" height="18" stroke="#000">
          <use href="./images/icon.svg#icon-close"></use>
        </svg>`:e.innerHTML=`
        <svg width="28" height="28">
          <use href="./images/icon.svg#icon-menu"></use>
        </svg>`})}document.addEventListener("DOMContentLoaded",function(){Y()});const F=document.getElementById("home");document.getElementById("shopping-list");F.classList.add("active");const u=document.querySelector(".list-one"),p=document.querySelector(".list_categories"),r=document.querySelector(".main-title");let m;function J(){let e=window.innerWidth;return e<=767?0:e<=1439?2:4}function b(){const e=r.textContent.split(" "),t=e[e.length-1];r.innerHTML=r.innerHTML.replace(t,`<span class="blue">${t}</span>`)}async function C(){new N(".link-img")}async function $(e){u.innerHTML="";let t="";const s=J();for(let o in e){t+=`
            <li class="books_list">
                <h2 class="name_category">${e[o].list_name}</h2>
                <ul class="images_books">`;for(let a in e[o].books)if(t+=`<li class="image_book" data-category="${e[o].books[a]._id}">
                                    <div class="div-animation">
                                            <a class="link-img" href="${e[o].books[a].book_image}"><img class="img-example" alt="Book title" src="${e[o].books[a].book_image}"></img></a>
                                        <div class="box-quick-view"><p class="animation-paragraf">Quick view</p></div>
                                    </div>
                                
                                <div class="box-cards">
                                    <p class="title-book">${e[o].books[a].title}</p>
                                    <p class="author-book">${e[o].books[a].author}</p>
                                </div>
                            </li>`,s==a)break;t+=`</ul><button class="button-see-more" data-category="${e[o].list_name}">See more</button></li>`}u.insertAdjacentHTML("beforeend",t),C()}u.addEventListener("click",async e=>{if(e.target.classList.contains("button-see-more")){const t=e.target.dataset.category;r.textContent=t,p.querySelector(".categoria")&&p.querySelectorAll(".categoria").forEach(n=>{r.textContent===n.textContent&&(document.querySelector(".selected-categories").classList.remove("selected-categories"),n.classList.add("selected-categories"))});const s=r.textContent.split(" "),o=s[s.length-1];r.innerHTML=r.innerHTML.replace(o,`<span class="blue">${o}</span>`),await c.get(`https://books-backend.p.goit.global/books/category?category=${t}`).then(a=>{if(a.data.length===0)throw new Error("Sorry, books in the selected category were not found");w(a.data)}).catch(a=>l.error({title:"Error",message:a.message}))}});async function Q(){u.innerHTML="",r.textContent==="Best Sellers Books"?await c.get("https://books-backend.p.goit.global/books/top-books").then(e=>{if(e.data.length===0)throw new Error("Sorry, books in the selected category were not found");$(e.data)}).catch(e=>l.error({title:"Error",message:e.message})):await c.get(`https://books-backend.p.goit.global/books/category?category=${m}`).then(e=>{if(e.data.length===0)throw new Error("Sorry, books in the selected category were not found");w(e.data)}).catch(e=>l.error({title:"Error",message:e.message}))}Q();async function Z(e){let t="";const s='<li tabindex="0" data-name="Best Sellers Books" class="categoria selected-categories">All categories</li>';e.forEach(a=>{t+=`<li tabindex="0" data-name="${a.list_name}" class="categoria">${a.list_name}</li>`}),p.insertAdjacentHTML("beforeend",t),p.insertAdjacentHTML("afterbegin",s),document.querySelectorAll(".categoria").forEach(a=>{a.addEventListener("click",async n=>{n.preventDefault(),document.querySelector(".selected-categories").classList.remove("selected-categories"),n.target.classList.add("selected-categories"),m=n.target.textContent,m=m.replace(/ /g,"%20"),n.target.textContent!=="All categories"?(r.textContent=n.target.textContent,b(),await c.get(`https://books-backend.p.goit.global/books/category?category=${m}`).then(i=>{if(i.data.length===0)throw new Error("Sorry, books in the selected category were not found");w(i.data)}).catch(i=>l.error({title:"Error",message:i.message}))):(r.textContent="Best Sellers Books",b(),await c.get("https://books-backend.p.goit.global/books/top-books").then(i=>{if(i.data.length===0)throw new Error("Sorry, books in the selected category were not found");$(i.data)}).catch(i=>l.error({title:"Error",message:i.message})))})})}c.get("https://books-backend.p.goit.global/books/category-list").then(e=>{Z(e.data)}).catch(e=>l.error({title:"Error",message:e.message}));async function w(e){let t="";u.innerHTML="",e.forEach(s=>{t+=`<li class="book" data-category="${s._id}">
                        <div class="div-animation">
                        <a class="link-img" href="${s.book_image}"><img class="img-example" alt="Book title" src="${s.book_image}"></img></a>
                            <div class="box-quick-view"><p class="animation-paragraf">Quick view</p></div>
                        </div>
                                <div class="box-cards">
                                    <p class="title-book">${s.title}</p>
                                    <p class="author-book">${s.author}</p>
                                </div>
                      </li>`}),u.insertAdjacentHTML("beforeend",t),C()}const G=document.querySelector(".list-one");let g=q();B();document.querySelector("#congratulations");const K=document.querySelector(".modal-window-shop");G.addEventListener("click",async e=>{if(e.target.classList.contains("box-quick-view")){const t=e.target.parentNode.parentNode.dataset.category;v(t)}else if(e.target.classList.contains("animation-paragraf")){const t=e.target.parentNode.parentNode.parentNode.dataset.category;v(t)}});async function v(e){document.body.classList.add("modal-open");const s=(await c.get(`https://books-backend.p.goit.global/books/${e}`)).data;let o=`
      <span>
          <svg class="close-window" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="close-window" d="M21 7L7 21M7 7L21 21" stroke="#111111" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
      </span>
      <div class="main-modal-window-content">
          <div class="modal-image-container"><img class="modal-image" src="${s.book_image}" alt="${s.title}"></div>
          <div class="modal-main-content-text">
              <h2 class="">${s.title}</h2>
              <p class="book-author">${s.author}</p>
              <p class="modal-book-description">${s.description}</p>
              <div class=" ">
                  <a class=" " href="${s.amazon_product_url} rel="amazon ${s.title}" target="_blank"">amazon_product_url</a>
              </div>
          </div>
      </div>
      `;g.has(s.title)?o+=`<button class="card-books-category-button margin-add" type="button" data-id="${s._id}" data-title="${s.title}">Remove from the shopping list</button>
            `:(o+=`<button class="card-books-category-button margin-add" type="button" data-id="${s._id}" data-title="${s.title}">Add to shopping list</button>
            <p id="congratulations" hidden>Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>`,document.querySelector(".modal-content").innerHTML=o,document.querySelector(".modal-window-shop").style.display="block")}K.addEventListener("click",async e=>{e.target.classList.contains("close-window")||e.target.classList.contains("modal-window-shop")?(document.querySelector(".modal-window-shop").style.display="none",document.body.classList.remove("modal-open")):e.target.classList.contains("card-books-category-button")&&V(e.target)});async function V(e){try{if(e.textContent==="Add to shopping list"){if(g.has(e.dataset.title))throw new Error("This book has added");g.set(e.dataset.title,e.dataset.id),e.textContent="Remove from the shopping list",document.querySelector("#congratulations").removeAttribute("hidden")}else g.delete(e.dataset.title),e.textContent="Add to shopping list",document.querySelector("#congratulations").setAttribute("hidden","")}catch(t){l.error({title:"Error",message:t.message})}finally{B(),X()}}function q(){const e=localStorage.getItem("arrayBooksShop");if(e){const t=JSON.parse(e);return new Map(t)}return new Map}function B(){const e=JSON.stringify([...g]);localStorage.setItem("arrayBooksShop",e)}function X(){g=q()}const y=document.querySelector(".scrollToTop");window.onscroll=()=>{window.scrollY>500?y.classList.remove("isHide"):window.scrollY<500&&y.classList.add("isHide"),y.onclick=()=>{window.scrollTo(0,0)}};
//# sourceMappingURL=commonHelpers.js.map
