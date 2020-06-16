import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { healthCardService } from './healthCard.service';
//import { PersonService } from "../person/persons.service";
import { PersonsModule } from "../person/person.module";
import { HealtCardController } from './healthCard.controller';
import { HealthCard } from './healthCard.entity';

@Module({
    imports: [TypeOrmModule.forFeature([HealthCard]), PersonsModule],
    providers: [healthCardService],
    controllers: [HealtCardController],
    exports: [healthCardService]
})
export class HealthCardModule { }