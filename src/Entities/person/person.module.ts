import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonService } from './persons.service';
import { PersonsController } from './person.controller';
import { Person } from './person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  providers: [PersonService],
  controllers: [PersonsController],
})
export class PersonsModule {}