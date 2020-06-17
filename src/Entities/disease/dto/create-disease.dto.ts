import { ApiProperty } from '@nestjs/swagger';

export class CreateDiseaseDto {
  @ApiProperty()
  name: string;
}

