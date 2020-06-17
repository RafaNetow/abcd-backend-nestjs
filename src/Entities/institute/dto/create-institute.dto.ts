import { ApiProperty } from '@nestjs/swagger';

export class CreateInstituteDto {
  @ApiProperty()
  name: string;
}
