import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesService } from './course.service';
import { CoursesController } from './course.controller';
import { Course } from './course.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Course])],
    providers: [CoursesService],
    controllers: [CoursesController],
    exports: [CoursesService]
})
export class CoursesModule { }