import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Document } from 'mongoose';
import { IBaseEntity } from 'src/common/interfaces/base-entity.interface';
import { Color } from 'src/yellow/database/color.entity';
import { IHouse } from '../interfaces/house-entity.interface';
import * as MongooseAutoPopulate from 'mongoose-autopopulate';

@Schema()
export class House extends Document implements IBaseEntity, IHouse {
  @Prop()
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  rooms: number;

  @Prop({
    required: true,
    type: MongooseSchema.Types.ObjectId,
    ref: Color.name,
    autopopulate: { maxDepth: 2 },
  })
  color: MongooseSchema.Types.ObjectId;

  @Prop({ required: true })
  createdAt: string;

  @Prop({ required: true })
  updatedAt: string;

  @Prop({ default: false })
  deleted: boolean;
}

export const HouseSchema = SchemaFactory.createForClass(House);

HouseSchema.plugin(MongooseAutoPopulate);

HouseSchema.pre('save', function (next) {
  this.id = this._id;

  next();
});
