import page from './node_modules/page/page.mjs'
let nav = document.querySelector('nav');
let main = document.querySelector('main');
let createBtn = document.getElementById('createBtn');

//createBtn.addEventListener('click', () => navigate('/create'))
createBtn.addEventListener('click', () => page('/create'))


// nav.addEventListener('click', (e) => { 
// 	if(e.target.tagName === 'A'){
// 			e.preventDefault();
// 			let address = e.target.href;
// 			let url = new URL(address);
// 			// console.log(url.pathname);

// 			history.pushState( {}, '', url.pathname);
			
// 			//if(e.target.id === 'create'){
// 			//	history.replaceState({}, '', '/replace');
// 			//}
// 			navigate();
// 	} 
// }) 

page('/index.html', '/');



page('/',  () => main.innerHTML = '<h2>Home</h2>');
page('/catalog',  () => main.innerHTML = '<h2>Catalog</h2>');
page('/catalog/:id', decorateUser, showProduct); 
// page('/catalog/:id',  (ctx, next) => main.innerHTML = '<h2>Catalog</h2><h3>Product</h3>');  // we can write regex here
// :id  it's a pattern ... key id, object is params
page('/create',  () => main.innerHTML = '<h2>Create</h2>');
page('/',  () => main.innerHTML = '<h2>Home</h2>');
page('*',  () => main.innerHTML = '<h2>404 NOT FOUND</h2>');
page.start();

function decorateUser(ctx, next){
    let user = sessionStorage.getItem('user');
    ctx.user = user;
    console.log(ctx);
    next();
}

function decorateRender(ctx) {
    ctx.renderNav = (template) => render(template, nav);
}

function showProduct(ctx, next){
    console.log(ctx);
    main.innerHTML = '<h2>Catalog</h2><h3>Product 1</h3>';
}

// let views = {
// 		'/home': '<h2>Home</h2>',
// 		'/catalog': '<h2>Catalog</h2>',
// 		'/create': '<h2>Create</h2>',
// 		'/replace': '<h2>Replaced</h2>',
// }
	
// window.addEventListener('popstate', (e) => {
// 	navigate();
// })

// function navigate(address){
//     if (address) {
//         history.pushState({}, '', address);
//     }

// 	let path = location.pathname;
// 	if(views[path]) {
// 		main.innerHTML = views[path];
// 	} else {
//         main.innerHTML = '<h2>404 NOT FOUND</h2>'
//     }
// }

// navigate();

