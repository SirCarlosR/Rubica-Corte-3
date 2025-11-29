import { Test, TestingModule } from '@nestjs/testing';
import { MisplataformasService } from './misplataformas.service';

describe('MisplataformasService', () => {
  let service: MisplataformasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MisplataformasService],
    }).compile();

    service = module.get<MisplataformasService>(MisplataformasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
