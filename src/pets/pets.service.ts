import { Injectable } from '@nestjs/common';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
  async findAll(): Promise<Pet[]> {
    const pet: Pet = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(new Pet());
      }, 200);
    });

    pet.id = 1;
    pet.name = 'Max';

    return [pet];
  }
}
