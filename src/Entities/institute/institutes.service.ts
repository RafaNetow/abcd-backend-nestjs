import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInstituteDto } from './dto/create-institute.dto';
import { Institute } from './institute.entity';

@Injectable()
export class InstituteService {
  constructor(
    @InjectRepository(Institute)
    private readonly instituteRepository: Repository<Institute>,
  ) {}

  async create(createInstituteDto: CreateInstituteDto): Promise<Institute> {
    let institute = new Institute();
    institute.name = createInstituteDto.name;
    return this.instituteRepository.save(institute);
  }

  async findAll(): Promise<Institute[]> {
    return this.instituteRepository.find();
  }

  findOne(id: string): Promise<Institute> {
    return this.instituteRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.instituteRepository.delete(id);
  }
}
