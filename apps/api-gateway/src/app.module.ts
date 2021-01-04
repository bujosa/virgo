import { HealthCheckModule } from '@common/common/health-check/health-check.module';
import { PurpleHealthCheckService } from '@common/common/health-check/health-check.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLGatewayModule } from '@nestjs/graphql';
import { gqlModuleInit } from '../config/graphql-gateway-module-initializer';

@Module({
  imports: [
    HealthCheckModule,
    ConfigModule.forRoot({
      envFilePath: `./env/.api-gateway.env`,
    }),
    GraphQLGatewayModule.forRootAsync({
      imports: [HealthCheckModule],
      inject: [PurpleHealthCheckService],
      useFactory: (health: PurpleHealthCheckService) => gqlModuleInit(health),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
