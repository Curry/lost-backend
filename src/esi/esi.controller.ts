import { Controller, HttpService, Get } from '@nestjs/common';

@Controller('esi')
export class EsiController {
    private url = "https://esi.evetech.net/latest";

    constructor() {}
    
    @Get('/location')
    getLocation() {
        return
    }
}
