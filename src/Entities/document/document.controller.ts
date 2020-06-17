import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { Document } from './document.entity';
import { DocumentsService } from './document.service';


@Controller('document')
export class DocumentsController {
    constructor(private readonly documentsService: DocumentsService) { }

    @Post()
    create(@Body() createDocumentDto: CreateDocumentDto): Promise<Document> {
        return this.documentsService.create(createDocumentDto);
    }

    @Get()
    findAll(): Promise<Document[]> {
        return this.documentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Document> {
        return this.documentsService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.documentsService.remove(id);
    }
}