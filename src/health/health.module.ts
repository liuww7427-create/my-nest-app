import { Module } from "@nestjs/common";
import { HeathController } from "./health.controller";
import { HeathService } from "./health.service";

@Module({
    imports: [],
    controllers: [HeathController],
    providers: [HeathService]
})

export class HeathModule {}