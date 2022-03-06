import { Field, ID, InputType, Int } from '@nestjs/graphql';
import { Schema } from 'mongoose';
import { ICreateHouseInput } from '../../interfaces/create-house-input.interface';

@InputType()
export class CreateHouseInput implements ICreateHouseInput {
  @Field()
  name: string;

  @Field(() => ID)
  color: Schema.Types.ObjectId;

  @Field(() => Int)
  rooms: number;
}
