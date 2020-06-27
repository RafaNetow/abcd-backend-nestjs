import { ApiProperty } from '@nestjs/swagger';

export class CreatePersonDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  placeOfBirth: string;

  @ApiProperty()
  birthDay: Date;

  @ApiProperty()
  nacionality: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  phone: number;

  @ApiProperty()
  kindOfBlood: string;

  @ApiProperty()
  photo: string;

  @ApiProperty()
  gender: boolean;

  @ApiProperty()
  email: string;

  @ApiProperty()
  rne: number;

  @ApiProperty()
  ownHouse: string;

  @ApiProperty()
  workPlace: string;
}
