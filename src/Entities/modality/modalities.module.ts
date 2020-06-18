import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModalitiesService } from './modalities.service';
import { ModalityController } from './modalities.controller';
import { Modality } from './modality.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Modality])],
  providers: [ModalitiesService],
  controllers: [ModalityController],
})
export class ModalitiesModule {}
