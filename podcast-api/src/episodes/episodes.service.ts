import { Injectable } from '@nestjs/common';
import { Episode } from './entity/episodes.entity';
import { CreateEpisodeDto } from './dto/create-episode.dto';

@Injectable()
export class EpisodesService {
    private episodes : Episode[] = [
        {
            "id": 1,
            "title": "The Future of AI",
            "description": "Discussing the advancements and ethical implications of artificial intelligence.",
        },
        {
            "id": 2,
            "title": "Cybersecurity in 2024",
            "description": "An overview of the current state of cybersecurity and predictions for the future.",
        },
        {
            "id": 3,
            "title": "The Rise of Quantum Computing",
            "description": "Exploring the potential of quantum computing and its applications.",
        },
    ];

    async findAll(sort: 'asc' | 'desc' = 'asc') {
        const sortedEpisodes = [...this.episodes];

        if(sort === 'asc'){
            sortedEpisodes.sort((a, b) => a.id - b.id);
        } else {
            sortedEpisodes.sort((a, b) => b.id - a.id);
        }

        return sortedEpisodes;
    }

    async findOne(id: number) {
        return this.episodes.find((episode) => episode.id === id);
    }

    async create(createEpisodeDto: CreateEpisodeDto) {
        const newEpisode = {
            id: this.episodes.length + 1,
            ...createEpisodeDto,
        }

        this.episodes.push(newEpisode);
        // console.log(this.episodes);
        return newEpisode;
    }
}
