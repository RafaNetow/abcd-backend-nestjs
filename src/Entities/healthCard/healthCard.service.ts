import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHealthCDto } from './dto/create-healthCard.dto';
import { Repository } from 'typeorm';
import { HealthCard } from './healthCard.entity';
import { Person } from "../person/person.entity"
import { PersonService } from '../person/persons.service'


@Injectable()
export class healthCardService {
    constructor(
        @InjectRepository(HealthCard)
        private readonly healthCardRepository: Repository<HealthCard>,
    ) { }

    private readonly peopleRepository: Repository<Person>;
    create(createHealthCDto: CreateHealthCDto): Promise<HealthCard> {
        let person = this.peopleRepository.findOne(createHealthCDto.idPerson)
        const healthCard = new HealthCard()
        return this.healthCardRepository.save(healthCard);
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