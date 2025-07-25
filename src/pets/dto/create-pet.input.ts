import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlpha, IsInt } from 'class-validator';

@InputType()
export class CreatePetInput {
  @IsAlpha()
  @Field()
  name: string;

  @IsInt()
  @Field((type) => Int)
  ownerId: number;

  @Field({
    nullable: true,
  })
  type?: string;
}
