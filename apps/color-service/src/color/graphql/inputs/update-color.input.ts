import { Field, InputType } from '@nestjs/graphql';
import { IUpdateColorInput } from '../../interfaces/update-color-input.interface';
@InputType()
export class UpdateColorInput implements IUpdateColorInput {
  @Field()
  id: string;

  @Field()
  name: string;
}
