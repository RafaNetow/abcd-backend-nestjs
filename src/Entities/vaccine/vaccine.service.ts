import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { Vaccine } from './vaccine.entity';


@Injectable()
export class VaccineService {
    constructor(
        @InjectRepository(Vaccine)
        private readonly VaccinesRepository: Repository<Vaccine>,
    ) { }

    async create(createVaccineDto: CreateVaccineDto): Promise<Vaccine> {
        let vaccine = new Vaccine();
        vaccine.name = createVaccineDto.name;
        return this.VaccinesRepository.save(vaccine);
    }

    async findAll(): Promise<Vaccine[]> {
        return this.VaccinesRepository.find();
    }

    findOne(id: string): Promise<Vaccine> {
        return this.VaccinesRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.VaccinesRepository.delete(id);
    }
}