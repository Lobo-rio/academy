import { Injectable } from "@nestjs/common";
import { compareSync } from "bcryptjs";
import { JwtService } from '@nestjs/jwt';

import { UsersService } from "../../../domain/users/service/users.service";
import { User } from "../../../infra/database/entities/user.entity";

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    async login(user) {
        const payload = { sub: user.id, email: user.email };

        return {
            token: this.jwtService.sign(payload),
        };
    }

    async validateUser(email: string, password: string) {
        let user: User;
        try {
            user = await this.userService.findByEmail(email);
        } catch (error) {
            return null;
        }

        const isPasswordValid = compareSync(password, user.password);
        if (!isPasswordValid) return null;

        return user;
    }
}