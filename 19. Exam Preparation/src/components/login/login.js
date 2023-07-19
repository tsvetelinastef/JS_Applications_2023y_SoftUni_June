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
       await this.authSerice.logout();
       this.router.navigate('/');
    }

}
