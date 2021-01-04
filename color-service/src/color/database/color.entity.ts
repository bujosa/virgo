import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IBaseEntity } from '../../common/interfaces/base-entity.interface';
import { IColor } from '../interfaces/color-entity.interface';

@Schema()
export class Color extends Document implements IBaseEntity, IColor {
  @Prop()
  id: string;

  @Prop({ unique: true, required: true })
  name: string;

  @Prop({ required: true })
  createdAt: string;

  @Prop({ required: true })
  updatedAt: string;

  @Prop({ default: false })
  deleted: boolean;
}

export const ColorSchema = SchemaFactory.createForClass(Color);

ColorSchema.pre('save', function (next) {
  this.id = this._id;

  next();
});
