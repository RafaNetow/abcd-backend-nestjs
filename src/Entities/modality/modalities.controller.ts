import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateModalityDto } from './dto/create-modality.dto';
import { Modality } from './modality.entity';
import { ModalitiesService } from './modalities.service';

@Controller('modality')
export class ModalityController {
  constructor(private readonly modalityService: ModalitiesService) {}

  @Post()
  create(@Body() createModalityDto: CreateModalityDto): Promise<Modality> {
    return this.modalityService.create(createModalityDto);
  }

  @Get()
  findAll(): Promise<Modality[]> {
    return this.modalityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Modality> {
    return this.modalityService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.modalityService.remove(id);
  }
}
