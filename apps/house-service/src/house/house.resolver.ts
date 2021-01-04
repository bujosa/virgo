import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateHouseInput } from './graphql/inputs/create-house.input';
import { GetHouseByIdInput } from './graphql/inputs/get-house-by-id.input';
import { UpdateHouseInput } from './graphql/inputs/update-house-input';
import { House } from './graphql/types/house.type';
import { HouseService } from './house.service';

@Resolver((of) => House)
export class HouseResolver {
  constructor(private houseService: HouseService) {}

  @Query((returns) => House)
  public async getHouseById(
    @Args('input') getHouseByIdInput: GetHouseByIdInput,
  ): Promise<House> {
    return this.houseService.getHouseById(getHouseByIdInput);
  }

  @Mutation((of) => House)
  public async createHouse(
    @Args('input') createHouseInput: CreateHouseInput,
  ): Promise<House> {
    return this.houseService.createHouse(createHouseInput);
  }

  @Query((returns) => [House])
  public async getAllHouses(): Promise<House[]> {
    return this.houseService.getAllHouses();
  }

  @Mutation((of) => House)
  public async updateHouse(
    @Args('input') updateHouseInput: UpdateHouseInput,
  ): Promise<House> {
    return this.houseService.updateHouse(updateHouseInput);
  }
}
