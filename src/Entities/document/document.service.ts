import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDocumentDto } from './dto/create-document.dto';
import { Document } from './document.entity';


@Injectable()
export class DocumentsService {
    constructor(
        @InjectRepository(Document)
        private readonly DocumentsRepository: Repository<Document>,
    ) { }

    async create(createDocumentDto: CreateDocumentDto): Promise<Document> {
        let document = new Document();
        document.name = createDocumentDto.name;
        return this.DocumentsRepository.save(document);
    }

    async findAll(): Promise<Document[]> {
        return this.DocumentsRepository.find();
    }

    findOne(id: string): Promise<Document> {
        return this.DocumentsRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.DocumentsRepository.delete(id);
    }
}