import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstituteService } from './institute.service';
import { InstituteController } from './institute.controller';
import { Institute } from './institute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Institute])],
  providers: [InstituteService],
  controllers: [InstituteController],
})
export class InstituteModule {}
