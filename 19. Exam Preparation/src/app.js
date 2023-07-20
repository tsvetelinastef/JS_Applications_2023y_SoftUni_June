import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { AuthService } from "./services/AuthService.js";
import { BaseCrudApiService } from "./services/BaseCrudApiService.js";
import { SessionService } from "./services/SessionService.js";
import { NavComponent } from "./components/nav/nav.js";
import { navTemplate } from "./components/nav/navTemplate.js";

const main = document.querySelector('#wrapper main');
const nav = dcument.querySelector('#wrapper header');

// Router
let router = 

// Base Url
const baseUrl = 'http://localhost:3030';

//Render handlers
let renderBody = (template) => render(template, main);
let rendeNav = (template) => render(template, nav);

// Service
let sessionService = new SessionService();
let authService = new AuthService(baseUrl, sessionService);
let shoeService = new BaseCrudApiService(baseUrl, '/data/shoes', sessionStorage);

// Components
let navComponent = new NavComponent(authService, renderNav, navTemplate);
let homeComponent = new HomeComponent(renderBoby, homeTemplate);
let loginComponent = new LoginComponent(authService, renderBody, loginTemplate);
let dashboardComponent = new DashboardComponent(shoeService, renderBody, dashboardTemplate);

// Router
page('/index.html', '/');
page(navComponent.showView);

page('/', homeComponent.showView);
page('/login', loginComponent.showView);
page('/dashboard', dashboardComponent.showView);
page.start();