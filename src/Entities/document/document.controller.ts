import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { Document } from './document.entity';
import { DocumentsService } from './document.service';


@Controller('document')
export class DocumentController {
    constructor(private readonly documentService: DocumentsService) { }

    @Post()
    create(@Body() createDiseaseDto: CreateDocumentDto): Promise<Document> {
        return this.documentService.create(createDiseaseDto);
    }

    @Get()
    findAll(): Promise<Document[]> {
        return this.documentService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Document> {
        return this.documentService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.documentService.remove(id);
    }
}