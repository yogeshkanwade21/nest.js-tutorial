import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/createUserDto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService, private userService: UserService){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        console.log("controller login", req.user);
        return await this.authService.login(req.user);
    }

    @Post('register')
    async registerUser(@Body() CreateUserDto: CreateUserDto) {
        return await this.userService.create(CreateUserDto);
    }
}