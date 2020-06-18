import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './course.entity';


@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course)
        private readonly CoursesRepository: Repository<Course>,
    ) { }

    async create(createCourseDto: CreateCourseDto): Promise<Course> {
        let course = new Course();
        course.name = createCourseDto.name;
        return this.CoursesRepository.save(course);
    }

    async findAll(): Promise<Course[]> {
        return this.CoursesRepository.find();
    }

    findOne(id: string): Promise<Course> {
        return this.CoursesRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.CoursesRepository.delete(id);
    }
}