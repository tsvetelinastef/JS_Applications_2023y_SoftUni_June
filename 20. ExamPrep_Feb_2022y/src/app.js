// we create file "api.js" and we load it in "index.html" and after this  we add this: 
// alert('it works'); - after that open the browser and press the button F5, because it can't do it automatically 

import page from '../node_modules/page/page.mjs'; // 1st thing we need is page module, because it navigates and ties up our entire application, writes functions our dependency injections  

import { addRender } from './middlewares/render.js';
import { homePge } from './views/home.js';

page(addRender);


page('/', homePge);
page('/', () => console.log('home page')); // for the staring view - console.log
// in the Inspector and in the browser ->  we see: "home page" 
page('/catalog', () => console.log('catalog page'));
page('/login', () => console.log('login page'));
page('/register', () => console.log('register page'));
page('/create', () => console.log('create page'));
page('/details/:id', () => console.log('details page'));
page('/edit/:id', () => console.log('details page'));

page.start();