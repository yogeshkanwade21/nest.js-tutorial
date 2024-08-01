import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

type AuthInput = {
    username: string;
    password: string;
};

type SignInData = {
    userId: number;
    username: string;
};

type AuthResult = {
    accessToken: string;
    userId: number;
    username: string;
};

@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) {}

    async authenticateUser(input: AuthInput): Promise<AuthResult> {
        const user = await this.validateUser(input);

        if(!user) {
            throw new UnauthorizedException();
        }

        return this.SignIn(user);
    }

    async validateUser(input: AuthInput): Promise<SignInData | null> {
        const user = await this.userService.findUserByName(input.username);
        if (user && user.password === input.password) {
            return {
                userId: user.userId,
                username: user.username
            };
        }
        return null;
    }

    async SignIn(user: SignInData): Promise<AuthResult> {
        const payload = { 
            sub: user.userId, 
            username: user.username
        };

        const accessToken = this.jwtService.sign(payload);
        return {
            accessToken,
            userId: user.userId,
            username: user.username
        }
    }
}
