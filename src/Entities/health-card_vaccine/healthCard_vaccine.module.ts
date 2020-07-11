import { Module } from '@nestjs/common';
import { healthCard_vaccineService } from './healthCard_vaccine.service';
import { CreateHealthCard_VaccineController } from './healthCard_vaccine.controller';
import { HealthCardModule } from '../healthCard/healthCard.module';
import { VaccineModule } from '../vaccine/vaccine.module';

@Module({
  imports: [HealthCardModule, VaccineModule],
  providers: [healthCard_vaccineService],
  controllers: [CreateHealthCard_VaccineController],
})
export class HealthCardVaccineModule {}
