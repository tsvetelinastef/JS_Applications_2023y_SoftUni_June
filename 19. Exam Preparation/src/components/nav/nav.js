export class NavComponent {
    constructor(authSerice, renderHandler, templateFunction, router) {
        this.authSerice = authSerice;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.router = router;
    }

    async _showView() {
        let isUserLoggedIn = this.authSerice.isUserLoggedIn();
        let template = this.templateFunction(isUserLoggedIn, )
    }

    async _logoutHandler() {
       await this.authSerice.logout();
       this.router.navigate('/');
    }
}