import { Test, TestingModule } from '@nestjs/testing';
import { MisplataformasController } from './misplataformas.controller';
import { MisplataformasService } from './misplataformas.service';

describe('MisplataformasController', () => {
  let controller: MisplataformasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MisplataformasController],
      providers: [MisplataformasService],
    }).compile();

    controller = module.get<MisplataformasController>(MisplataformasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
