import { Controller, Get } from '@nestjs/common';
import { MapService } from './map.service';

@Controller('map')
export class MapController {
    constructor(private service: MapService) {}
    @Get('/test')
    t() {
        return this.service.test();
    }

    @Get('/test3')
    t3() {
        return this.service.getConnectionByMapId(1);
    }
}
