import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { Person } from './person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly personsRepository: Repository<Person>,
  ) {}

  create(createPersonDto: CreatePersonDto): Promise<Person> {
    const person = new Person();
    person.firstName = createPersonDto.firstName;
    person.lastName = createPersonDto.lastName;
    person.rne = createPersonDto.rne;
    person.address = createPersonDto.address;
    person.email = createPersonDto.email;
    person.gender = createPersonDto.gender;
    person.kindOfBlood = createPersonDto.kindOfBlood;
    person.birthDay = new Date();
    person.phone = createPersonDto.phone;
    person.nacionality = createPersonDto.nacionality;
    person.placeOfBirth = createPersonDto.placeOfBirth;
    person.photo = createPersonDto.photo;
    return this.personsRepository.save(person);
  }

  async findAll(): Promise<Person[]> {
    return this.personsRepository.find();
  }

  async findOne(id: string): Promise<Person> {
    let response = this.personsRepository.findOne(id);
    return response;
  }

  async remove(id: string): Promise<void> {
    let response = await this.personsRepository.delete(id);
  }
}
