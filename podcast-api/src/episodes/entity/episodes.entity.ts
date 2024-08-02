import { ApiProperty } from "@nestjs/swagger";

export class Episode {
    @ApiProperty({example: 1, description: 'The id of the episode'})
    id: number;

    @ApiProperty({example: 'The Future of AI', description: 'The title of the episode'})
    title: string;

    @ApiProperty({example: 'Discussing the advancements and ethical implications of artificial intelligence.', description: 'The description of the episode'})
    description: string;
}