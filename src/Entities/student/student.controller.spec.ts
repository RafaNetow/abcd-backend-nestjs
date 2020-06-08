import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-person.dto';
import { Person } from './person.entity';
import { PersonService } from './persons.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


@Controller('persons')
export class PersonsController {
  constructor(private readonly usersService: PersonService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<Person> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<Person[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Person> {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}