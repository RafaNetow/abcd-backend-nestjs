import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonDto } from '../person/dto/create-person.dto';
import { Student } from './student.entity';
import { Person } from '../person/person.entity';
import { PersonService } from '../person/persons.service';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    private readonly peopleService: PersonService,
  ) {}

  async create(createPersonDto: CreatePersonDto): Promise<Student> {
    let person = new Person();
    person = await this.peopleService.create(createPersonDto);
    const student = new Student();
    student.person = person;
    return this.studentRepository.save(student);
  }

  async update(student: Student): Student | PromiseLike<Student> {
    return await this.studentRepository.save(student);
  }

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  findOne(id: string): Promise<Student> {
    return this.studentRepository.findOne(id, { relations: ['references'] });
  }

  async remove(id: string): Promise<void> {
    await this.studentRepository.delete(id);
  }
}
