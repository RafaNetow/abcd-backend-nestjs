import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstituteService } from './institutes.service';
import { InstituteController } from './institutes.controller';
import { Institute } from './institute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Institute])],
  providers: [InstituteService],
  controllers: [InstituteController],
})
export class InstituteModule {}
