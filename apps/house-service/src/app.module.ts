import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HouseModule } from './house/house.module';

@Module({
  imports: [HouseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
