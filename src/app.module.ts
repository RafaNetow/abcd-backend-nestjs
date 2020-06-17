import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonsModule } from './Entities/person/person.module';
import { StudentsModule } from './Entities/student/student.module';
import { HealthCardModule } from './Entities/healthCard/healthCard.module';
import { VaccineModule } from "./Entities/vaccine/vaccine.module";
import { DiseasesModule } from './Entities/disease/disease.module';
import { DocumentModule } from './Entities/document/document.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), PersonsModule, StudentsModule, HealthCardModule, DiseasesModule, VaccineModule, DocumentModule
  ],
  controllers: [AppController]
})
export class AppModule { }
