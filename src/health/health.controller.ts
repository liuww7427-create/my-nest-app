import { Controller, Get } from "@nestjs/common";
import { HeathService } from "./health.service";

@Controller()
export class HeathController {
    constructor(private readonly heathService: HeathService) {}

    @Get('heath')
    heath(): string {
        return this.heathService.getInfo();
    }
}