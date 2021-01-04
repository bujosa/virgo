import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { House, HouseSchema } from './database/house.entity';
import { HouseResolver } from './house.resolver';
import { HouseService } from './house.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: House.name,
        schema: HouseSchema,
      },
    ]),
  ],
  providers: [HouseService, HouseResolver],
  exports: [MongooseModule],
})
export class HouseModule {}
