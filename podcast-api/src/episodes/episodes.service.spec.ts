import { Test, TestingModule } from '@nestjs/testing';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';

describe('EpisodesService', () => {
  let service: EpisodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EpisodesService],
    }).compile();

    service = module.get<EpisodesService>(EpisodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of episodes', async () => {
      const result = await service.findAll();
      expect(result).toEqual([
        {
          id: 1,
          title: "The Future of AI",
          description: "Discussing the advancements and ethical implications of artificial intelligence.",
        },
        {
          id: 2,
          title: "Cybersecurity in 2024",
          description: "An overview of the current state of cybersecurity and predictions for the future.",
        },
        {
          id: 3,
          title: "The Rise of Quantum Computing",
          description: "Exploring the potential of quantum computing and its applications.",
        },
      ]);
    })

    it('should return episodes in desc order if sort = desc', async () => {
      const result = await service.findAll('desc');
      expect(result[0]).toEqual({
        id: 3,
        title: "The Rise of Quantum Computing",
        description: "Exploring the potential of quantum computing and its applications.",
      })
    })

    it('should return episodes in asc order if sort = asc', async () => {
      const result = await service.findAll('asc');
      expect(result[0]).toEqual({
        id: 1,
        title: "The Future of AI",
        description: "Discussing the advancements and ethical implications of artificial intelligence.",
      })
    })
  })

  describe('findOne', () => {
    it('should return an episode with id 1', async () => {
      const result = await service.findOne(1);
      expect(result).toEqual({
        id: 1,
        title: "The Future of AI",
        description: "Discussing the advancements and ethical implications of artificial intelligence.",
      });
    })

    it('should return undefined if the episode does not exist', async () => {
      const result = await service.findOne(999);
      expect(result).toBeUndefined();
    });
  })

  describe('create', () => {
    it('should create a new episode', async () => {
      const episode: CreateEpisodeDto = {
        title: "New Episode",
        description: "This is a new episode",
      };
      
      const result = await service.create(episode);
      expect(result).toEqual({
        id: 4,
        ...episode,
      });
    })
  });

});
