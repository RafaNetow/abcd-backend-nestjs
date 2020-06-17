import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './course.entity';
import { CoursesService } from './course.service';


@Controller('course')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) { }

    @Post()
    create(@Body() createCourseDto: CreateCourseDto): Promise<Course> {
        return this.coursesService.create(createCourseDto);
    }

    @Get()
    findAll(): Promise<Course[]> {
        return this.coursesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Course> {
        return this.coursesService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.coursesService.remove(id);
    }
}