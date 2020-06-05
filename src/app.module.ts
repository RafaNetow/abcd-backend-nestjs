import { PersonService } from './Entities/person/persons.service'
import { Module, Dependencies } from '@nestjs/common';
import { AppController } from './app.controller';
import { PersonsController } from './Entities/person/person.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonsModule } from './Entities/person/person.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin123',
      database: 'postgres',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true
    }),PersonsModule
  ],
  controllers: [AppController]
})
export class AppModule {}