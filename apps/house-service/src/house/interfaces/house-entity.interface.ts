import { IColor } from 'apps/color-service/src/color/interfaces/color-entity.interface';
import { Schema } from 'mongoose';

export interface IHouse {
  name: string;
  rooms: number;
  color: IColor | Schema.Types.ObjectId;
}
