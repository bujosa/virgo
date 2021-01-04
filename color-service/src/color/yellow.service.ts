import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntryNotFoundException } from 'src/common/errors/erros';
import { Color } from './database/color.entity';
import { CreateColorInput } from './graphql/inputs/create-color.input';
import { GetColorByIdInput } from './graphql/inputs/get-color-by-id.input';
import { UpdateColorInput } from './graphql/inputs/update-color.input';

@Injectable()
export class YellowService {
  constructor(
    @InjectModel(Color.name)
    private readonly colorModel: Model<Color>,
  ) {}

  public async getColorById(
    getColorByIdInput: GetColorByIdInput,
  ): Promise<Color> {
    try {
      const result = await this.colorModel.findOne(getColorByIdInput).exec();

      if (!result) {
        throw new EntryNotFoundException();
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  public async getAllColors(): Promise<Color[]> {
    try {
      const result: Color[] = await this.colorModel.find().exec();

      return result;
    } catch (error) {
      throw error;
    }
  }

  public async createColor(createColorInput: CreateColorInput): Promise<Color> {
    try {
      const { name } = createColorInput;

      const color = new this.colorModel({
        name,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });

      return color.save();
    } catch (error) {
      throw error;
    }
  }

  public async updateColor(updateColorInput: UpdateColorInput): Promise<Color> {
    try {
      const { name, id } = updateColorInput;

      const updateColor = {
        name,
        updatedAt: new Date().toISOString(),
      };

      const result = await this.colorModel
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
