import { ApiProperty } from '@nestjs/swagger';

export class CreateHealthCard_VaccineDto {
    @ApiProperty()
    idVaccine: string;

    @ApiProperty()
    idHealthCard: string;
}