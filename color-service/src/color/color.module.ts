import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ColorResolver } from './color.resolver';
import { ColorService } from './color.service';
import { Color, ColorSchema } from './database/color.entity';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Color.name,
        schema: ColorSchema,
      },
    ]),
  ],
  providers: [ColorService, ColorResolver],
  exports: [MongooseModule],
})
export class ColorModule {}
