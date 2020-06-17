import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateInstituteDto } from './dto/create-institute.dto';
import { Institute } from './institute.entity';
import { InstituteService } from './institutes.service';

@Controller('institute')
export class InstituteController {
  constructor(private readonly instituteService: InstituteService) {}

  @Post()
  create(@Body() createInstituteDto: CreateInstituteDto): Promise<Institute> {
    return this.instituteService.create(createInstituteDto);
  }

  @Get()
  findAll(): Promise<Institute[]> {
    return this.instituteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Institute> {
    return this.instituteService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.instituteService.remove(id);
  }
}
