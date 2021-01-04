import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { ColorModule } from './color/color.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./env/.color-service.env`,
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    ColorModule,
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
      context: ({ req }) => ({ headers: req.headers }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
