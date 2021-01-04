import { Field, InputType } from '@nestjs/graphql';
import { IGetEntityByIdInput } from 'src/common/interfaces/get-entity-by-id-input.interface';

@InputType()
export class GetColorByIdInput implements IGetEntityByIdInput {
  @Field()
  id: string;
}
