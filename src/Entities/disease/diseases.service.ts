import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDiseaseDto } from './dto/create-disease..dto';
import { Disease } from './disease.entity';


@Injectable()
export class DiseaseService {
    constructor(
        @InjectRepository(Disease)
        private readonly diseasesRepository: Repository<Disease>,
    ) { }



    async create(createDiseaseDto: CreateDiseaseDto): Promise<Disease> {
        let disease = new Disease();
        disease.name = createDiseaseDto.name;
        return this.diseasesRepository.save(disease);
    }

    async findAll(): Promise<Disease[]> {
        return this.diseasesRepository.find();
    }

    findOne(id: string): Promise<Disease> {
        return this.diseasesRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.diseasesRepository.delete(id);
    }
}
