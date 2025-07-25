import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

import { IsNotEmpty } from 'class-validator';
import { CreateOwnerInput } from './create-owner.input';

@InputType()
export class UpdateOwnerInput extends PartialType(CreateOwnerInput) {
  @IsNotEmpty()
  @Field((type) => Int)
  id: number;
}
