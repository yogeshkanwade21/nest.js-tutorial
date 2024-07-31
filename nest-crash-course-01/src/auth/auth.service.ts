import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/entities/user.entity';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

    constructor (private userService: UserService, private jwtService: JwtService) {}
    
    async validateUser(email: string, password: string) {
        const user = await this.userService.findOneByEmail(email);
        if (user && (await bcrypt.compare(password, user.password))) {
            console.log(user);
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: User) {
        console.log("user is", user);
        const payload = { email: user.email, sub: {
            name : user.name,
        } };
        return {
            ...user,
            access_token: this.jwtService.sign(payload),
            refresh_token: this.jwtService.sign(payload, { expiresIn: '7d' }),
        };
    }

    async refreshToken(user: User) {
        const payload = { email: user.email, sub: {
            name : user.name,
        } };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}