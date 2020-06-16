import { ApiProperty } from '@nestjs/swagger';

export class CreateVaccineDto {
    @ApiProperty()
    name: String;
}