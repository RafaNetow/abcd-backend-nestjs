import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-person.dto';
import { Person } from './person.entity';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private readonly personsRepository: Repository<Person>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<Person> {
    const person = new Person();
    person.firstName = createUserDto.firstName;
    person.lastName = createUserDto.lastName;
    person.rne = createUserDto.rne;
    person.address = createUserDto.address;
    person.email = createUserDto.email;
    person.gender = createUserDto.gender;
    person.kindOfBlood = createUserDto.kindOfBlood;
    person.birthDay = createUserDto.birthDay;
    person.phone = createUserDto.phone;
    person.nacionality = createUserDto.nacionality;
    person.placeOfBirth = createUserDto.placeOfBirth;    
    return this.personsRepository.save(person);
  }

  async findAll(): Promise<Person[]> {
    return this.personsRepository.find();
  }

  findOne(id: string): Promise<Person> {
    return this.personsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.personsRepository.delete(id);
  }
}