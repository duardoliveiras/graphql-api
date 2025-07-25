import { Injectable } from '@nestjs/common';
import { Parent } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from 'src/owners/entities/owner.entity';
import { OwnersService } from 'src/owners/owners.service';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petRepository: Repository<Pet>,
    private readonly ownerService: OwnersService,
  ) {}
  async findAll(): Promise<Pet[]> {
    return this.petRepository.find();
  }

  async createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const pet = this.petRepository.create(createPetInput);
    return this.petRepository.save(pet);
  }

  async findOne(id: number): Promise<Pet> {
    return this.petRepository.findOneOrFail({
      where: {
        id: id,
      },
    });
  }

  async getOwner(ownerId: number): Promise<Owner> {
    return this.ownerService.findOne(ownerId);
  }
}
