export class CreateComponent {
    constructor(shoeService, renderHandler, templateFunction, router) {
        this.shoeService = shoeService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.router = router;
        this.showView = this._showView.bind(this);
    }

    async _showView() {
        let shoes = await this.shoeService.getAll();
        let template = this.templateFunction(shoes);
        this.renderHandler(template);
    }

    async _createHandler(e) {

    }
}

