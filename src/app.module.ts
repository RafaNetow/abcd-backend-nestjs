import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonsModule } from './Entities/person/person.module';
import { StudentsModule } from './Entities/student/student.module';
import { HealthCardModule } from './Entities/healthCard/healthCard.module';
import { VaccineModule } from './Entities/vaccine/vaccine.module';
import { DiseasesModule } from './Entities/disease/disease.module';
import { DocumentsModule } from './Entities/document/document.module';
import { InstituteModule } from './Entities/institute/institutes.module';
import { CoursesModule } from './Entities/course/courses.module';
import { ModalitiesModule } from './Entities/modality/modalities.module';
import { HealthCard_VaccineModule } from './Entities/health-card_vaccine/healthCard_vaccine.module'


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PersonsModule,
    StudentsModule,
    HealthCardModule,
    DiseasesModule,
    VaccineModule,
    InstituteModule,
    DocumentsModule,
    CoursesModule,
    ModalitiesModule,
    HealthCard_VaccineModule
  ],
  controllers: [AppController],
})
export class AppModule { }
