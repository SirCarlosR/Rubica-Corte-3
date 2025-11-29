import { Test, TestingModule } from '@nestjs/testing';
import { PlataformasService } from './plataformas.service';

describe('PlataformasService', () => {
  let service: PlataformasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlataformasService],
    }).compile();

    service = module.get<PlataformasService>(PlataformasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
