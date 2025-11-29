import { Test, TestingModule } from '@nestjs/testing';
import { FavoritasService } from './favoritas.service';

describe('FavoritasService', () => {
  let service: FavoritasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoritasService],
    }).compile();

    service = module.get<FavoritasService>(FavoritasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
