import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VaccineService } from './vaccine.service';
import { VaccineController } from './vaccine.controller';
import { Vaccine } from './vaccine.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Vaccine])],
    providers: [VaccineService],
    controllers: [VaccineController],
    exports: [VaccineService]
})
export class VaccineModule { }