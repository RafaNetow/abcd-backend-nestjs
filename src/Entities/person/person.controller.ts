import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { Person } from './person.entity';
import { PersonService } from './persons.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


@Controller('persons')
export class PersonsController {
  constructor(private readonly peopleService: PersonService) { }

  @Post()
  create(@Body() createUserDto: CreatePersonDto): Promise<Person> {
    return this.peopleService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<Person[]> {
    return this.peopleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Person> {
    return this.peopleService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.peopleService.remove(id);
  }
}