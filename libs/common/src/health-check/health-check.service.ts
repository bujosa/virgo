import { ServiceEndpointDefinition } from '@apollo/gateway';
import { Injectable } from '@nestjs/common';
import { backOff } from 'exponential-backoff';

import {
  DNSHealthIndicator,
  HealthCheckService,
  HealthIndicator,
} from '@nestjs/terminus';

import * as amqp from 'amqplib/callback_api';

@Injectable()
export class PurpleHealthCheckService extends HealthIndicator {
  constructor(
    private readonly healthCheckService: HealthCheckService,
    private readonly dnsHealthIndicator: DNSHealthIndicator,
  ) {
    super();
  }

  public async checkGraphQLMicroservicesStatus(
    graphqlMicroservices: ServiceEndpointDefinition[],
  ) {
    const healthCheckHandlers = graphqlMicroservices.map((element) => () =>
      this.dnsHealthIndicator.pingCheck(
        element.name,
        `${element.url}${process.env.GQL_HEALTH_CHECK_ENDPOINT}`,
      ),
    );

    try {
      await backOff(() => this.healthCheckService.check(healthCheckHandlers), {
        startingDelay: 1000,
        delayFirstAttempt: true,
      });
    } catch (error) {}
  }
}

// TODO: Research how errors can be log outside a module context
export const checkRabbitMQStatus = async (connectionString: string) => {
  try {
    await backOff(
      async () =>
        amqp.connect(connectionString, (err, connection) => {
          if (err) throw err;
          else connection.close();
        }),
      {
        startingDelay: 2000,
        delayFirstAttempt: true,
      },
    );
  } catch (error) {}
};
