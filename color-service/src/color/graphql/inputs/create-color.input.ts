import { Field, InputType } from '@nestjs/graphql';
import { ICreateColorInput } from 'src/yellow/interfaces/create-color-input.interface';

@InputType()
export class CreateColorInput implements ICreateColorInput {
  @Field()
  name: string;
}
