import { Field, ID, InputType, Int } from '@nestjs/graphql';
import { Schema } from 'mongoose';
import { ICreateHouseInput } from 'src/house/interfaces/create-house-input.interface';

@InputType()
export class CreateHouseInput implements ICreateHouseInput {
  @Field()
  name: string;

  @Field((type) => ID)
  color: Schema.Types.ObjectId;

  @Field((type) => Int)
  rooms: number;
}
