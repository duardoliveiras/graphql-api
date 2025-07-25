import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlpha, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateOwnerInput {
  @IsNotEmpty()
  @IsAlpha()
  @Field()
  name: string;
}
