import { Module } from '@nestjs/common';
import { MisPlataformasService } from './misplataformas.service';
import { MisPlataformasController } from './misplataformas.controller';

@Module({
  controllers: [MisPlataformasController],
  providers: [MisPlataformasService],
})
export class MisPlataformasModule {}