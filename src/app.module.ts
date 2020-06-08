import { Module, Dependencies } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm'
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Dependencies(Connection)

@Module({
  imports: [TypeOrmModule.forRoot(), User]
  },
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
