import { ApiProperty } from '@nestjs/swagger';

export class CreatePersonService {
  @ApiProperty()
  idPerson: string;

  @ApiProperty()
  idStudent: string;
}
