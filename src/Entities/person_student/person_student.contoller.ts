import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePersonStudentDto } from './dto/create-person_student.dto';
import { CreatePersonStudentDto } from './healthCard_vaccine.service';
import { UpdateEvent, UpdateResult } from 'typeorm';
import { HealthCard } from '../healthCard/healthCard.entity';

@Controller('HealthCard_Vaccine')
export class CreatePersonStudentController {
  constructor(private readonly healthCardService: healthCard_vaccineService) {}
  @Post()
  create(
    @Body() healthCard_vaccineDto: CreatePersonStudentDto,
  ): Promise<HealthCard> {
    return this.healthCardService.create(healthCard_vaccineDto);
  }
}
