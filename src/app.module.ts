import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonsModule } from './Entities/person/person.module';
import { StudentsModule } from './Entities/student/student.module';
import { HealthCardModule } from './Entities/healthCard/healthCard.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(), PersonsModule, StudentsModule, HealthCardModule
  ],
  controllers: [AppController]
})
export class AppModule { }
