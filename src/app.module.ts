import { Module, Dependencies } from '@nestjs/common';
import { AppController } from './app.controller';
//import { Connection } from 'typeorm'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './Entities/person/person.entity';




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
    }),Person
  ],
  controllers: [AppController],
})
export class AppModule {}