import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateHealthCDto } from './dto/create-healthCard.dto';
import { HealthCard } from './healthCard.entity';
import { healthCardService } from './healthCard.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


@Controller('healthCard')
export class HealtCardController {
    constructor(private readonly peopleService: healthCardService) { }

    @Post()
    create(@Body() createPersonDto: CreateHealthCDto): Promise<HealthCard> {
        return this.peopleService.create(createPersonDto);
    }

    @Get()
    findAll(): Promise<HealthCard[]> {
        return this.peopleService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<HealthCard> {
        return this.peopleService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.peopleService.remove(id);
    }
}