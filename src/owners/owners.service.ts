import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner) private ownerRepository: Repository<Owner>,
  ) {}

  async create(createOwnerInput: CreateOwnerInput) {
    const owner = this.ownerRepository.create(createOwnerInput);
    return this.ownerRepository.save(owner);
  }

  async findAll() {
    const owners = this.ownerRepository.find();
    return owners;
  }

  async findOne(id: number) {
    const owner = this.ownerRepository.findOneOrFail({
      where: {
        id: id,
      },
    });
    return owner;
  }

  async update(id: number, updateOwnerInput: UpdateOwnerInput) {
    const owner = await this.findOne(id);
    Object.assign(owner, updateOwnerInput);
    return this.ownerRepository.save(owner);
  }

  async remove(id: number) {
    return this.ownerRepository.delete({
      id: id,
    });
  }
}
