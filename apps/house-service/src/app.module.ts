import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { HouseModule } from './house/house.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./env/.house-service.env`,
    }),
    HouseModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
      context: ({ req }) => ({ headers: req.headers }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
