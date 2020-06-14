import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonsModule } from './Entities/person/person.module';
import { StudentsModule } from './Entities/student/student.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(), PersonsModule, StudentsModule
  ],
  controllers: [AppController]
})
export class AppModule { }