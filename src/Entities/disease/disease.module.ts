import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiseaseService } from './diseases.service';
import { DiseasesController } from './disease.controller';
import { Disease } from './disease.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Disease])],
    providers: [DiseaseService],
    controllers: [DiseasesController]
})
export class DiseasesModule { }