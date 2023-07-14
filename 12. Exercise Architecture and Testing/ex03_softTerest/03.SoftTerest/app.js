// console.log('hello world);

import { showHomeView } from "./src/views/home.js";
import { showCatalog } from "./src/views/catalog.js";
import { showLogin } from "./src/views/login.js";
import { showRegister } from "./src/views/register.js";
import { showCreate } from "./src/views/create.js";
import { showDetails } from "./src/views/details.js";
import { initializer } from "./src/router.js";
import { logout } from "./src/api/user.js";

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
    '/catalog': showCatalog,
    '/login': showLogin,
    '/register': showRegister,
    '/create': showCreate,
    '/details': showDetails,
    '/logout': logoutFunctionality
}


const router = initializer(links);
router.updateNav();
router.goTo("/"); 
