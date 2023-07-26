import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { AuthService } from "./services/AuthService.js";
import { BaseCrudApiService } from "./services/BaseCrudApiService.js";
import { SessionService } from "./services/SessionService.js";
import { NavComponent } from "./components/nav/nav.js";
import { navTemplate } from "./components/nav/navTemplate.js";
import { HomeComponent } from "./components/home/home.js";
import { homeTemplate } from "./components/home/homeTemplate.js";
import { LoginComponent } from "./components/login/login.js";
import { loginTemplate } from "./components/login/loginTemplate.js";
import { DashboardComponent } from "./components/dashboard/dashboard.js";
import { dashboardTemplate } from "./components/dashboard/dashboardTemplate.js";
import { RegisterComponent } from "./components/register/register.js";
import { registerTemplate } from "./components/register/registerTemplate.js";
import { CreateComponent } from "./components/create/create.js";
import { DetailsComponent } from "./components/details/details.js";
import { EditComponent } from "./components/edit/edit.js";
import { editTemplate } from "./components/edit/editTemplate.js";
import { SearchComponent } from "./components/search/search.js";

const main = document.querySelector('#wrapper main');
const nav = dcument.querySelector('#wrapper header');

// Router
let router = {
    navigate: page.show,
    redirect: page.redirect
}

// Base Url
const baseUrl = 'http://localhost:3030';

//Render handlers
let renderBody = (template) => render(template, main);
let renderNav = (template) => render(template, nav);

// Service
let sessionService = new SessionService();
let authService = new AuthService(baseUrl, sessionService);
let shoesService = new BaseCrudApiService(baseUrl, '/data/shoes', sessionService);

// Components
let navComponent = new NavComponent(authService, renderNav, navTemplate, router);
let homeComponent = new HomeComponent(renderBoby, homeTemplate);
let loginComponent = new LoginComponent(authService, renderBody, loginTemplate, router);
let registerComponent = new RegisterComponent(authService, renderBody, registerTemplate, router);
let dashboardComponent = new DashboardComponent(shoesService, renderBody, dashboardTemplate);
let createComponent = new CreateComponent(shoesService, renderBody, createTemplate, router);
let detailsComponent = new DetailsComponent(authService, shoesService, renderBody, detailsTemplate, router);
let editComponent = new EditComponent(shoesService, renderBody, editTemplate, router);
let searchComponent = new SearchComponent(shoesService, renderBody, searchTemplate, );

// Routing
page('/index.html', '/');
page(navComponent.showView);

page('/', homeComponent.showView);
page('/login', loginComponent.showView);
page('/register', registerComponent.showView);
page('/dashboard', dashboardComponent.showView);
page('/create', createComponent.showView);
page('/details/:id', detailsComponent.showView);
page('/edit/:id', editComponent.showView);
page.start();