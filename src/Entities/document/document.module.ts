import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentsService } from './document.service';
import { DocumentController } from './document.controller';
import { Document } from './document.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Document])],
    providers: [DocumentsService],
    controllers: [DocumentController],
    exports: [DocumentsService]
})
export class DocumentModule { }