import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/createUserDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {}
    async findOne(id: number) {
        return await this.userRepo.findOne({ where: { id } });
    }

    async create(CreateUserDto: CreateUserDto) {
        const user = await this.userRepo.create(CreateUserDto);
        return await this.userRepo.save(user);
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        return await this.userRepo.update(id, updateUserDto);
    }
}