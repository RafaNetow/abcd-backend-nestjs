import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateModalityDto } from './dto/create-modality.dto';
import { Modality } from './modality.entity';

@Injectable()
export class ModalitiesService {
  constructor(
    @InjectRepository(Modality)
    private readonly modalityRepository: Repository<Modality>,
  ) {}

  async create(createModalityDto: CreateModalityDto): Promise<Modality> {
    let modality = new Modality();
    modality.name = createModalityDto.name;
    return this.modalityRepository.save(modality);
  }

  async findAll(): Promise<Modality[]> {
    return this.modalityRepository.find();
  }

  findOne(id: string): Promise<Modality> {
    return this.modalityRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.modalityRepository.delete(id);
  }
}
