import { IBaseEntity } from '@common/common/interfaces/base-entity.interface';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Color } from 'apps/color-service/src/color/graphql/types/color.type';
import { IColor } from 'apps/color-service/src/color/interfaces/color-entity.interface';
import { Schema } from 'mongoose';
import { IHouse } from '../../interfaces/house-entity.interface';

@ObjectType()
export class House implements IHouse, IBaseEntity {
  @Field(() => ID)
  id: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;

  @Field()
  deleted: boolean;

  @Field()
  name: string;

  @Field(() => Int)
  rooms: number;

  @Field(() => Color)
  color: IColor | Schema.Types.ObjectId;
}
