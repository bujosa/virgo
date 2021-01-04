import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntryNotFoundException } from 'src/common/errors/erros';
import { House } from './database/house.entity';
import { CreateHouseInput } from './graphql/inputs/create-house.input';
import { GetHouseByIdInput } from './graphql/inputs/get-house-by-id.input';
import { UpdateHouseInput } from './graphql/inputs/update-house-input';

@Injectable()
export class HouseService {
  constructor(
    @InjectModel(House.name)
    private readonly houseModel: Model<House>,
  ) {}

  public async getHouseById(
    getHouseByIdInput: GetHouseByIdInput,
  ): Promise<House> {
    try {
      const result = await this.houseModel.findOne(getHouseByIdInput).exec();

      if (!result) {
        throw new EntryNotFoundException();
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  public async getAllHouses(): Promise<House[]> {
    try {
      const result: House[] = await this.houseModel.find().exec();

      return result;
    } catch (error) {
      throw error;
    }
  }

  public async createHouse(createHouseInput: CreateHouseInput): Promise<House> {
    try {
      const { name, rooms, color } = createHouseInput;

      const house = new this.houseModel({
        name,
        color,
        rooms,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });

      return house.save();
    } catch (error) {
      throw error;
    }
  }

  public async updateHouse(updateHouseInput: UpdateHouseInput): Promise<House> {
    try {
      const { name, id, color, rooms } = updateHouseInput;

      const updateColor = {
        color,
        rooms,
        name,
        updatedAt: new Date().toISOString(),
      };

      const result = await this.houseModel
        .findOneAndUpdate({ id }, updateColor, {
          useFindAndModify: false,
        })
        .exec();

      if (!result) {
        throw new EntryNotFoundException();
      }

      return result;
    } catch (error) {
      throw error;
    }
  }
}
