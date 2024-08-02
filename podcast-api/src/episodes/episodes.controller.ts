import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { Episode } from './entity/episodes.entity';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Episodes')
@Controller('episodes')
export class EpisodesController {

    constructor(private readonly episodeService: EpisodesService) {}

    @Get()
    @ApiOperation({summary: 'Get all episodes based on sort order'})
    @ApiResponse({status: 200, description: 'Returns an array of episodes' ,type: [Episode]})
    // route '/episodes?sort=desc'
    findAll(@Query('sort') sort: 'asc' | 'desc' = 'asc'): Promise<Episode[]> {
        return this.episodeService.findAll(sort);
    }

    @Get(':id')
    @ApiOperation({summary: 'Get an episode by id'})
    @ApiResponse({status: 200, description: 'Returns a single episode', type: Episode})
    findOne(@Param('id') id: string){
        return this.episodeService.findOne(+id);
    }

    @Post()
    @ApiOperation({summary: 'Create a new episode'})
    @ApiResponse({status: 201, description: 'Returns the created episode', type: Episode})
    create(@Body() input: CreateEpisodeDto){
        return this.episodeService.create(input);
    }
}
