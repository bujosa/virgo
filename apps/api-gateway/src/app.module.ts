import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLGatewayModule } from '@nestjs/graphql';
import { gqlModuleInit } from '../config/graphql-gateway-module-initializer';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./env/.api-gateway.env`,
    }),
    GraphQLGatewayModule.forRootAsync({
      useFactory: () => gqlModuleInit(),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
