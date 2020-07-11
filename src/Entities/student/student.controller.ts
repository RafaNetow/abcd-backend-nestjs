import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePersonDto } from '../person/dto/create-person.dto';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

@Controller('student')
export class StudentController {
  constructor(private readonly studentsService: StudentService) {}

  @Post()
  create(@Body() createStudentDto: CreatePersonDto): Promise<Student> {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Student> {
    return this.studentsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.studentsService.remove(id);
  }
}
