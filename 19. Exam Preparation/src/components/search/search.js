export class SearchComponent {
    constructor(shoeService, renderHandler, templateFunction) {
        this.shoeService = shoeService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.showView = this._showView.bind(this);
        this.searchHandler = this._searchHandler.bind(this);
    }

    async _showView(ctx) {
        // let shoes = await this.shoeService.getAll();
        let queryString = ctx.querystring;
        let queryArr = queryString.split('='); 
        let value = queryArr[1];
        let template = this.templateFunction(shoes);
        this.renderHandler(template);
    }

    async _searchHandler(e) {
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);
    }
}