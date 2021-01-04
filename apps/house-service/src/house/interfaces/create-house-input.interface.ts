import { Schema } from 'mongoose';

export interface ICreateHouseInput {
  name: string;
  color: Schema.Types.ObjectId;
  rooms: number;
}
