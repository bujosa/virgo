import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IBaseEntity } from 'src/common/interfaces/base-entity.interface';
import { IColor } from 'src/yellow/interfaces/color-entity.interface';

@ObjectType()
export class Color implements IColor, IBaseEntity {
  @Field((type) => ID)
  id: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;

  @Field()
  deleted: boolean;

  @Field()
  name: string;
}
