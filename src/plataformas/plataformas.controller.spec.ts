import { Test, TestingModule } from '@nestjs/testing';
import { PlataformasController } from './plataformas.controller';
import { PlataformasService } from './plataformas.service';

describe('PlataformasController', () => {
  let controller: PlataformasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlataformasController],
      providers: [PlataformasService],
    }).compile();

    controller = module.get<PlataformasController>(PlataformasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
