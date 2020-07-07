import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePersonStudentDto } from './dto/create-person_student';
import { Student } from '../student/student.entity';
import { PersonStudentService } from './person_studentService.service';

@Controller('RefrenceStudent')
export class CreatePersonStudentController {
  constructor(private readonly personStudentService: PersonStudentService) {}
  @Post()
  create(@Body() personStudentDto: CreatePersonStudentDto): Promise<Student> {
    return this.personStudentService.create(personStudentDto);
  }
}
