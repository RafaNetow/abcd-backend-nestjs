import { Injectable } from '@nestjs/common';
import { PersonService } from '../person/persons.service';
import { StudentService } from '../student/student.service';
import { CreatePersonStudentDto } from './dto/create-person_student';
import { Person } from '../person/person.entity';
import { Student } from '../student/student.entity';

@Injectable()
export class personStudent {
  constructor(
    private readonly personService: PersonService,
    private readonly studentService: StudentService,
  ) {}

  async create(createModalityDto: CreatePersonStudentDto): Promise<Student> {
    let student = new Student();
    let person = new Person();
    person = await this.personService.findOne(createModalityDto.idPerson);
    student = await this.studentService.findOne(createModalityDto.idStudent);
    student.references.push(person);
    return this.studentService.update(student);

    /*
    let vaccine = new Vaccine();
    let healthCard = new HealthCard();
    vaccine = await this.vaccineService.findOne(createModalityDto.idVaccine);
    healthCard = await this.healthCardService.findOne(
      createModalityDto.idHealthCard,
    );
    healthCard.vaccines.push(vaccine);
    return this.healthCardService.update(healthCard);*/
  }
}
