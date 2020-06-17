import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentsService } from './document.service';
import { DocumentsController } from './document.controller';
import { Document } from './document.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Document])],
    providers: [DocumentsService],
    controllers: [DocumentsController],
    exports: [DocumentsService]
})
export class DocumentsModule { }