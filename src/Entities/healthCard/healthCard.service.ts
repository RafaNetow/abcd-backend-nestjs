import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHealthCDto } from './dto/create-healthCard.dto';
import { Repository, UpdateResult } from 'typeorm';
import { HealthCard } from './healthCard.entity';
import { Person } from "../person/person.entity"
import { PersonService } from '../person/persons.service'


@Injectable()
export class healthCardService {
    constructor(
        @InjectRepository(HealthCard)
        private readonly healthCardRepository: Repository<HealthCard>,
        private readonly peopleService: PersonService

    ) { }


    async create(createHealthCDto: CreateHealthCDto): Promise<HealthCard> {

        let person = new Person();
        const healthCard = new HealthCard();
        person = await this.peopleService.findOne(createHealthCDto.idPerson);
        console.log(person);
        healthCard.tratamientos = createHealthCDto.tratamientos;
        healthCard.person = person;
        return this.healthCardRepository.save(healthCard);
    }

    async update(healthCard: HealthCard): Promise<UpdateResult> {

        return await this.healthCardRepository.update(healthCard.id, healthCard);
    }

    async findAll(): Promise<HealthCard[]> {
        return this.healthCardRepository.find();
    }

    findOne(id: string): Promise<HealthCard> {
        return this.healthCardRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.healthCardRepository.delete(id);
    }
}