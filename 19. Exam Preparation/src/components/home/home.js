export class HomeComponent {
    constructor(renderHandler, templateFunction, navComponent) {
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.navComponent = navComponent;
        this.showView = this._showView.bind(this);
    }

    async _showView() {
        this.navComponent.showView();
        let template = this.templateFunction();
        this.renderHandler(template);
    }
}

// we don't have Handlers here, because the page is static
// and the othe queries