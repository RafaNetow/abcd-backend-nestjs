import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateDiseaseDto } from './dto/create-disease.dto';
import { Disease } from './disease.entity';
import { DiseaseService } from './disease.service';



@Controller('disease')
export class DiseasesController {
    constructor(private readonly peopleService: DiseaseService) { }

    @Post()
    create(@Body() createDiseaseDto: CreateDiseaseDto): Promise<Disease> {
        return this.peopleService.create(createDiseaseDto);
    }

    @Get()
    findAll(): Promise<Disease[]> {
        return this.peopleService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Disease> {
        return this.peopleService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.peopleService.remove(id);
    }
}