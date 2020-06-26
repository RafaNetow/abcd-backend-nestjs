import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { healthCardService } from '../healthCard/healthCard.service';
import { VaccineService } from '../vaccine/vaccine.service';
import { CreateHealthCard_VaccineDto } from './dto/create-healthCard_vaccine.dto';
import { Vaccine } from '../vaccine/vaccine.entity';
import { HealthCard } from '../healthCard/healthCard.entity';

@Injectable()
export class healthCard_vaccineService {
  constructor(
    private readonly healthCardService: healthCardService,
    private readonly vaccineService: VaccineService,
  ) {}

  async create(
    createModalityDto: CreateHealthCard_VaccineDto,
  ): Promise<UpdateResult> {
    let vaccine = new Vaccine();
    let healthCard = new HealthCard();
    vaccine = await this.vaccineService.findOne(createModalityDto.idVaccine);
    healthCard = await this.healthCardService.findOne(
      createModalityDto.idHealthCard,
    );
    console.log(healthCard);
    if (healthCard.vaccines) {
      console.log('entro');
      healthCard.vaccines.push(vaccine);
    } else {
      console.log('..');
      healthCard.vaccines = [vaccine];
    }
    console.log(healthCard);
    this.healthCardService.create(healthCard);
    return this.healthCardService.update(healthCard);
  }
}
