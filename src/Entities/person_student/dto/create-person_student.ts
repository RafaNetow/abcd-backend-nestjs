import { ApiProperty } from '@nestjs/swagger';

export class CreatePersonStudentDto {
  @ApiProperty()
  idPerson: string;

  @ApiProperty()
  idStudent: string;
}
