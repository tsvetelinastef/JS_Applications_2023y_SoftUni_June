export class NavComponent {
    constructor(authSerice, renderHandler, templateFunction, router) {
        this.authSerice = authSerice;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.router = router;
        this.logoutHandler = this._logoutHandler.bind(this);
        this.showView = this._showView.bind(this);
    }

    async _showView() {
        let isUserLoggedIn = this.authSerice.isUserLoggedIn();
        let template = this.templateFunction(isUserLoggedIn, this.logoutHandler);
        this.renderHandler(template);
    }

    async _logoutHandler() {
       await this.authSerice.logout();
       this.router.navigate('/dashboard');
    }
}
