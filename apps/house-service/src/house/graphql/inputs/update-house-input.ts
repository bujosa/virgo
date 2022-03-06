import { Field, ID, InputType, Int } from '@nestjs/graphql';
import { Schema } from 'mongoose';
import { IUpdateHouseInput } from '../../interfaces/update-house-input.interface';

@InputType()
export class UpdateHouseInput implements IUpdateHouseInput {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field(() => ID, { nullable: true })
  color: Schema.Types.ObjectId;

  @Field(() => Int, { nullable: true })
  rooms: number;
}
