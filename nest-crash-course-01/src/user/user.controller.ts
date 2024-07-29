import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';

@Controller('user')
export class UserController {

    @Get(":id")
    findAll(@Param("id") id: string) {
        return {
            user: {
                id: id,
                name: "A",
            },
        };
    }

    @Post()
    create(@Body() CreateUserDto: CreateUserDto) {
        return CreateUserDto;
    }
}
