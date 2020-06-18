import { ApiProperty } from '@nestjs/swagger';

export class CreateModalityDto {
  @ApiProperty()
  name: string;
}
