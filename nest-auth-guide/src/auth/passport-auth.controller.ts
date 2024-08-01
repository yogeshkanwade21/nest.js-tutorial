import { Controller, Get, Post, HttpCode, HttpStatus, NotImplementedException, UseGuards, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { PassportLocalGuard } from "src/guards/passport-local.guard";

@Controller('auth-v2')
export class PassportAuthController {
    constructor(private readonly authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    @UseGuards(PassportLocalGuard)
    login(@Request() req) {
        return this.authService.SignIn(req.user);
    }

    @Get('me')
    getUserInfo(){
        throw new NotImplementedException();
    }

}