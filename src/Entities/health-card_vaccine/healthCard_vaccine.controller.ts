import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateHealthCard_VaccineDto } from './dto/create-healthCard_vaccine.dto';
import { healthCard_vaccineService } from './healthCard_vaccine.service';
import { UpdateEvent, UpdateResult } from 'typeorm';


@Controller('HealthCard_Vaccine')
export class CreateHealthCard_VaccineController {
    constructor(private readonly peopleService: healthCard_vaccineService) { }

    @Post()
    create(@Body() healthCard_vaccineDto: CreateHealthCard_VaccineDto): Promise<UpdateResult> {
        return this.peopleService.create(healthCard_vaccineDto);
    }

}