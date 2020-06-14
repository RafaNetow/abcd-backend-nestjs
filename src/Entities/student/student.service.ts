import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonDto } from '../person/dto/create-person.dto';
import { Student } from './student.entity';
import { Person } from '../person/person.entity'



@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
    ) { }
    private readonly peopleRepository: Repository<Person>;
    async create(createUserDto: CreatePersonDto): Promise<Student> {
        const response = await this.peopleRepository.save(createUserDto);
        const student = new Student;
        student.person = response;
        return this.studentRepository.save(student);
    }

    async findAll(): Promise<Student[]> {
        return this.studentRepository.find();
    }

    findOne(id: string): Promise<Student> {
        return this.studentRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.studentRepository.delete(id);
    }


}