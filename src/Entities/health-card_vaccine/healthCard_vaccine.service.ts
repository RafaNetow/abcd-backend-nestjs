import { Injectable } from '@nestjs/common';
import { VaccineService } from '../vaccine/vaccine.service';
import { healthCardService } from '../healthCard/healthCard.service';
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
  ): Promise<HealthCard> {
    let vaccine = new Vaccine();
    let healthCard = new HealthCard();
    vaccine = await this.vaccineService.findOne(createModalityDto.idVaccine);
    healthCard = await this.healthCardService.findOne(
      createModalityDto.idHealthCard,
    );
    healthCard.vaccines.push(vaccine);
    return this.healthCardService.update(healthCard);
  }
}
