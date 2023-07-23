export class CreateComponent {
    constructor(shoeService, renderHandler, templateFunction, router) {
        this.shoeService = shoeService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.router = router;
        this.showView = this._showView.bind(this);
        this.createHandler = this._createHandler.bind(this);
    }

    async _showView() {     // let shoes = await this.shoeService.getAll();
        let template = this.templateFunction(this.createHandler);
        this.renderHandler(template);
    }

    async _createHandler(e) {
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);

      let shoe =  {
            brand: formData.get,
            model,
            imageUrl,
            release,
            designer,
            value
        }


        let email = formData.get('email');
        let password = formData.get('password');
        
        if(email == '' || password == '' ) {
            alert('Email and Password must not be empty');
            return;
        }
    }
}

