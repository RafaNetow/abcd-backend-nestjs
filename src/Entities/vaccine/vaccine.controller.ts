import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { Vaccine } from './vaccine.entity';
import { VaccineService } from './vaccine.service';



@Controller('vaccine')
export class VaccineController {
    constructor(private readonly vaccineService: VaccineService) { }

    @Post()
    create(@Body() createDiseaseDto: CreateVaccineDto): Promise<Vaccine> {
        return this.vaccineService.create(createDiseaseDto);
    }

    @Get()
    findAll(): Promise<Vaccine[]> {
        return this.vaccineService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Vaccine> {
        return this.vaccineService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.vaccineService.remove(id);
    }
}