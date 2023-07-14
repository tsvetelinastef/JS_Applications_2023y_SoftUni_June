// console.log('hello world);

import { showHomeView } from "./views/home.js";
import { showCatalog } from "./views/catalog.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";


// MVC Model
// app.js => controller
// views => login, register, dashboard/catalog, detail, homepage
// router => paths towards all the views defined
// api => methods, async functions 

document.getElementById('devSection').remove();
document.querySelector('nav').addEventListener('click', onNavigateClick);

const links = {
    "/": showHomeView,
    "/catalog": showCatalog,
    "/login": showLogin,
    "/register": showRegister,
    "/create": showCreate,
    "/details": showDetails,
    // TODO:  LOGOUT
}

const main = document.getElementById('mainView');

const context = {
    showSection,
}

// window.showHomeView = showHomeView(context);

function showSection(section) {
    main.replaceChildren(section)
}

function onNavigateClick(event) {
    event.preventDefult();
    const target = event.target;
    console.log(event.target.tagName);
    if(target.tagName === 'IMG') {
        target = target.parentElement;
    }
    if(target.tagName === 'A') {
        const url = new URL(target.href);  // URL is class ...target.href - to continue next
        goTo(url.pathname); // 
    }
}

function goTo(name, ...params ) {  // it takes url ... or can take name, params for additional things for logout 
    const handler = links[name];
    if (typeof(handler) === 'function') {
        handler(context, ...params);
    }

    function updateNav() {
        const user = JSON.parse(sessionStorage.getItem('user'));
        
    }
}