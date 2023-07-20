export class LoginComponent {
    constructor(authSerice, renderHandler, templateFunction, router) {
        this.authSerice = authSerice;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.router = router;
        this.loginHandler = this._loginHandler.bind(this);
        this.showView = this._showView.bind(this);
    }

    async _showView() {
       // let isUserLoggedIn = this.authSerice.isUserLoggedIn();
        let template = this.templateFunction(this.loginHandler);
        this.renderHandler(template);
    }

    async _loginHandler(e) {
        // await this.authSerice.logout();
        // this.router.navigate('/');
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);

        let email = formData.get('email');
        let password = formData.get('password');
        
        if(email == '' || password == '' ) {
            alert('Email and Password must not be empty');
            return;
        }

        let user = { email, password};
        try {
            let result = this.authSerice.login(user);
            this.router.navigate('/dashboard');
        } catch (e) {
            if(e instanceof UserReadableError) {
                alert(e.message);
                
            }
        }
    }
}
