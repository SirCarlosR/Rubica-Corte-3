import { PartialType } from '@nestjs/mapped-types';
import { CreateMisPlataformaDto } from './create-misplataforma.dto';

export class UpdateMisPlataformaDto extends PartialType(CreateMisPlataformaDto) {}
