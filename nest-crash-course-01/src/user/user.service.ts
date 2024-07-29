import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UserService {
    findOne(id: string) {
        return {
            user: {
                id: id,
                name: 'A',
            },
        };
    }

    create(CreateUserDto: CreateUserDto) {
        return CreateUserDto;
    }
}
