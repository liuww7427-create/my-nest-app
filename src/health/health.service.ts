import { Injectable } from "@nestjs/common";

@Injectable()
export class HealthService {
    getInfo(): string {
        return "ok";
    }
}
