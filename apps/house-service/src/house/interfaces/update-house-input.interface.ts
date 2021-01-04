import { Schema } from 'mongoose';

export interface IUpdateHouseInput {
  id: string;
  name: string;
  color: Schema.Types.ObjectId;
  rooms: number;
}
