import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateHealthCard_VaccineDto } from './dto/create-healthCard_vaccine.dto';
import { healthCard_vaccineService } from './healthCard_vaccine.service';
import { UpdateEvent, UpdateResult } from 'typeorm';
import { HealthCard } from '../healthCard/healthCard.entity';

@Controller('HealthCardVaccine')
export class CreateHealthCard_VaccineController {
  constructor(private readonly healthCardService: healthCard_vaccineService) {}

  @Post()
  create(
    @Body() healthCard_vaccineDto: CreateHealthCard_VaccineDto,
  ): Promise<HealthCard> {
    return this.healthCardService.create(healthCard_vaccineDto);
  }
}
