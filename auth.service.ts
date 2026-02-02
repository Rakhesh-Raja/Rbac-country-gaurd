import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    async validateUser(username: string, pass: string): Promise<any> {
        // Basic boilerplate
        return null;
    }
}
