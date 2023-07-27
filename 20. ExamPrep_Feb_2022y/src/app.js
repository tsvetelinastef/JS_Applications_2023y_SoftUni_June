// alert('it works'); - after that open the browser and press the button F5, because it can't do it automatically 

import page from '../node_modules/page/page.mjs';

page('/', () => console.log('home page')); // for the staring view - console.log

page.start();