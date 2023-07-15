export function initializer(links) {
    const main = document.getElementById('mainView');
    document.querySelector('nav').addEventListener('click', onNavigateClick);


    const context = {
        showSection,
        goTo,
        updateNav
    }
    return context;

    // window.showHomeView = showHomeView(context);

    function showSection(section) {
        main.replaceChildren(section)
    }

    function goTo(name, ...params) {  // it takes url ... or can take name, params for additional things for logout 
        const handler = links[name];
        if (typeof(handler) === 'function') {
            handler(context, ...params);
        }
    }

    function onNavigateClick(event) {
        event.preventDefult();
        let target = event.target;
        if (target.tagName === 'IMG') {
            target = target.parentElement;
        }
        if (target.tagName === 'A') {
            const url = new URL(target.href);  // URL is class ...target.href - to continue next
            goTo(url.pathname); // 
        }
    }

    function updateNav() {
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (user) {
            document.querySelectorAll('.user').forEach(el => el.style.display = 'block');
            document.querySelectorAll('.guest').forEach(el => el.style.display = 'none');
        }
        else {
            document.querySelectorAll('.user').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.guest').forEach(el => el.style.display = 'block');
        }
    }


}