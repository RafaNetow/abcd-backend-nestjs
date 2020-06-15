import { ApiProperty } from '@nestjs/swagger';


export class CreateHealthCDto {
    @ApiProperty()
    tratamientos: String;

    @ApiProperty()
    idPerson: string;
}
