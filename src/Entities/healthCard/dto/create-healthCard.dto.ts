import { ApiProperty } from '@nestjs/swagger';

export class CreateHealthCDto {
  @ApiProperty()
  tratamientos: string;

  @ApiProperty()
  idPerson: string;
}
