import { Module, Dependencies } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './Entities/person/person.entity';

@Dependencies(Connection)

@Module({
  imports: [TypeOrmModule.forRoot(), Person]
  ,
  controllers: [AppController],
})
export class AppModule {}
