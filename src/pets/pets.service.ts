import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petRepository: Repository<Pet>) {}
  async findAll(): Promise<Pet[]> {
    return this.petRepository.find();
  }

  async createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const pet = this.petRepository.create(createPetInput);
    return this.petRepository.save(pet);
  }
}
