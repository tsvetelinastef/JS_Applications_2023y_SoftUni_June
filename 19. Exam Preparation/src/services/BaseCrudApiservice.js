import { BaseApiService } from "./BaseApiService.js"

export class BaseCrudApiServce extends BaseApiService {
    constructor(baseUrl, path, sessionService) {
        super(baseUrl);
        this.resourceUrl = `${this.baseUrl}${path}`;
        this.sessionService = sessionService;
    }

    async getAll() { 
        let options = {
            method: 'Get',
        };
        let result = await this._internalFetchJson(this.resourceUrl, options )
        return result;
    }

    async getAll() { 
        let options = {
            method: 'Get',
        };
        let result = await this._internalFetchJson(this.resourceUrl, options )
        return result;
    }

}     
