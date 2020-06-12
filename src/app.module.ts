import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonsModule } from './Entities/person/person.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(), PersonsModule
  ],
  controllers: [AppController]
})
export class AppModule { }