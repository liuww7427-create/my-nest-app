import { Injectable } from "@nestjs/common";

@Injectable()
export class HeathService {
    getInfo(): string {
        return "heath";
    }
}