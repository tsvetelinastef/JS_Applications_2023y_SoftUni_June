import page from './node_modules/page/page.mjs'
let nav = document.querySelector('nav');
let main = document.querySelector('main');
let createBtn = document.getElementById('createBtn');

createBtn.addEventListener('click', () => navigate('/create'))

nav.addEventListener('click', (e) => { 
	if(e.target.tagName === 'A'){
			e.preventDefault();
			let address = e.target.href;
			let url = new URL(address);
			// console.log(url.pathname);

			history.pushState( {}, '', url.pathname);
			
			//if(e.target.id === 'create'){
			//	history.replaceState({}, '', '/replace');
			//}
			navigate();
	} 
}) 

let views = {
		'/home': '<h2>Home</h2>',
		'/catalog': '<h2>Catalog</h2>',
		'/create': '<h2>Create</h2>',
		'/replace': '<h2>Replaced</h2>',
	}
	
window.addEventListener('popstate', (e) => {
	navigate();
})

function navigate(address){
    if (address) {
        history.pushState({}, '', address);
    }

	let path = location.pathname;
	if(views[path]) {
		main.innerHTML = views[path];
	} else {
        main.innerHTML = '<h2>404 NOT FOUND</h2>'
    }
}

navigate();

