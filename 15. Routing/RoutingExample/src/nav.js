import { logout } from "./logout.js";
import { isUserLoggedIn } from "./services/authenticationService.js";
import { showCatalog } from "./services/views/catalogPage.js";
import { showCreateRecipe } from "./views/catalogRecipePage.js";
import { showEditPage } from "./services/views/editRecipePage.js";
import { showLogin } from "./services/views/loginPage.js";
import { showRegister } from "./services/views/registerPage.js";
import { render } from "../node_modules/lit-html/lit-html.js";

let _domElement = undefined;
let _navElement = undefined;

let views = {
    catalog: async (extraParams) => {
        showNavigation(_navElement)
        return await showCatalog(navigate, ...extraParams);
    },
    createRecipe: async (extraParams) => {
        showNavigation(_navElement)
        return await showCreateRecipe(navigate, ...extraParams);
    },
    // TODO: Refactor everything to use lit-html template, because _domElement.innerHTML='
    editRecipe: async (extraParams) => {
        showNavigation(_navElement)
        return await showEditPage(navigate, ...extraParams)
    },
    login: async (extraParams) => {
        showNavigation(_navElement)
        return await showLogin(navigate, extraParams)
    },
    // TODO: Refactor everything to use lit-html template, because _domElement.innerHTML='
    register: async (extraParams) => {
        showNavigation(_navElement)
        return await showRegister( navigate, ...extraParams)
    },
    // TODO: Refactor everything to use lit-html template, because _domElement.innerHTML = ''
    logout: (extraParams) => {
        showNavigation(_navElement)
        logout(navigate, ...extraParams)
    }
};

export function init(domElement, navElement) {
    _domElement = domElement;
    _navElement = navElement;
}

export async function navigate(pageName, ...extraParams) {
    let template = views[pageName]
        ? await views[pageName](extraParams)
        : await views['catalog'](extraParams);
    //Lit will track _domElement so it can efficiently render changes, if we delete the element
    // by using _domElement.innerHTML = '', this will break thje existing tpages rendered using 
    render(template, _domElement);
}

async function showNavigation(navElement) {
    if (isUserLoggedIn()) {
        navElement.innerHTML = `<a id="catalogLink" class="active" href="javascript:void(0)"
        <div id="user">
            <a id="createRecipeLink" href="javascript:void(0)">Create Recipe</a>
            <a id="logoutBtn" href="javascript:void(0)">Logout</a>
        </div>`;
        let catalogLink = navElement.querySelector('#catalogLink');
        let createPageLink = navElement.querySelector('#createRecipeLink');
        let logoutLink = navElement.querySelector('#logoutBtn');
        catalogLink.addEventListener('click', () => navigate("catalog", []));
        createPageLink.addEventListener('click', () => navigate('createRecipe'));
        logoutLink.addEventListener('click', () => navigate("logout"));
        
    };

}

