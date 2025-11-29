import { Test, TestingModule } from '@nestjs/testing';
import { FavoritasController } from './favoritas.controller';
import { FavoritasService } from './favoritas.service';

describe('FavoritasController', () => {
  let controller: FavoritasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoritasController],
      providers: [FavoritasService],
    }).compile();

    controller = module.get<FavoritasController>(FavoritasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
