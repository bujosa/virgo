import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Schema } from 'mongoose';
import { IBaseEntity } from 'src/common/interfaces/base-entity.interface';
import { IHouse } from 'src/house/interfaces/house-entity.interface';
import { Color } from 'src/yellow/graphql/types/color.type';
import { IColor } from 'src/yellow/interfaces/color-entity.interface';

@ObjectType()
export class House implements IHouse, IBaseEntity {
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

  @Field((type) => Int)
  rooms: number;

  @Field((type) => Color)
  color: IColor | Schema.Types.ObjectId;
}
