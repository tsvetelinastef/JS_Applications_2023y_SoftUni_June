// console.log('hello world);

import { initializer } from "./router.js";
import { showHomeView } from "./views/home.js";
import { showCatalog } from "./views/catalog.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { logout } from "./api/user.js";

// MVC Model
// app.js => controller
// views => login, register, dashboard/catalog, detail, homepage
// router => paths towards all the views defined
// api => methods, async functions 

document.getElementById('devSection').remove();
async function logoutFunctionality() {
    await logout();
    router.goTo("/");
    router.updateNav();
}

const links = {
    "/": showHomeView,
    "/catalog": showCatalog,
    "/login": showLogin,
    "/register": showRegister,
    "/create": showCreate,
    "/details": showDetails,
    "/logout": logoutFunctionality
}


const router = initializer(links);
router.updateNav();
router.goTo("/"); 
