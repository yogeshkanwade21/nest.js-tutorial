import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService,
        private readonly commentService: CommentService
    ) {}

    @Get(":id")
    findOne(@Param("id") id: number) {
        return this.userService.findOne(id);
    }

    @Post()
    create(@Body() CreateUserDto: CreateUserDto) {
        return this.userService.create(CreateUserDto);
    }

    @Get(":id/comments")
    getUserComments(@Param("id") id: string) {
        return this.commentService.findUserComments(id);
    }

    @Put(":id")
    update(@Param("id") id: number, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }
}