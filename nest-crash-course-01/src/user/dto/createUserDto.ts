import { IsString, IsEmail, IsNumberString, IsOptional } from "class-validator";
export class CreateUserDto {
    @IsString()
        name: string;

    @IsEmail()
        email: string;

    @IsNumberString()
    password: string;
}

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsNumberString()
    password: string;
 }