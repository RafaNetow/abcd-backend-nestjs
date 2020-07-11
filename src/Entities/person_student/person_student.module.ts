import { Module } from '@nestjs/common';
import { PersonStudentService } from './person_studentService.service';
import { CreatePersonStudentController } from './person_student.contoller';
import { PersonsModule } from '../person/person.module';
import { StudentsModule } from '../student/student.module';

@Module({
  imports: [PersonsModule, StudentsModule],
  providers: [PersonStudentService],
  controllers: [CreatePersonStudentController],
})
export class ReferenceStudentModule {}
