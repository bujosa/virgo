import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ColorService } from './color.service';
import { CreateColorInput } from './graphql/inputs/create-color.input';
import { GetColorByIdInput } from './graphql/inputs/get-color-by-id.input';
import { UpdateColorInput } from './graphql/inputs/update-color.input';
import { Color } from './graphql/types/color.type';

@Resolver(() => Color)
export class ColorResolver {
  constructor(private service: ColorService) {}

  @Query(() => Color)
  public async getColorById(
    @Args('input') getColorByIdInput: GetColorByIdInput,
  ): Promise<Color> {
    return this.service.getColorById(getColorByIdInput);
  }

  @Mutation(() => Color)
  public async createColor(
    @Args('input') createColorInput: CreateColorInput,
  ): Promise<Color> {
    return this.service.createColor(createColorInput);
  }

  @Query(() => [Color])
  public async getAllColors(): Promise<Color[]> {
    return this.service.getAllColors();
  }

  @Mutation(() => Color)
  public async updateBrand(
    @Args('input') updateColorInput: UpdateColorInput,
  ): Promise<Color> {
    return this.service.updateColor(updateColorInput);
  }
}
