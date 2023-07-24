export class DetailsComponent {
    constructor(shoeService, renderHandler, templateFunction) {
        this.shoeService = shoeService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.showView = this._showView.bind(this);
        this.deleteHandler = this._deleteHandler.bind(this);
    }

    async _showView(ctx) {
        let id = ctx.params.id;
        let shoes = await this.shoeService.getById(id);
        let template = this.templateFunction(shoes);
        this.renderHandler(template);
    }

    async _deleteHandler() {
       
    }
}
