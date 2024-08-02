import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateEpisodeDto {
    @ApiProperty({
        description: 'The title of the episode',
        example: 'The Future of AI',
    })
    @IsString()
    readonly title: string;

    @ApiProperty({
        description: 'The description of the episode',
        example: 'Discussing the advancements and ethical implications of artificial intelligence.',
    })
    @IsString()
    description: string;
}