import { ServiceEndpointDefinition } from '@apollo/gateway';
import { PurpleHealthCheckService } from '@common/common/health-check/health-check.service';
import { GatewayModuleOptions } from '@nestjs/graphql';

export async function gqlModuleInit(
  health: PurpleHealthCheckService,
): Promise<GatewayModuleOptions> {
  const servicesToCheck: ServiceEndpointDefinition[] = [
    {
      name: 'Color',
      url: process.env.COLOR_SERVICE_URL,
    },
    {
      name: 'House',
      url: process.env.HOUSE_SERVICE_URL,
    },
  ];

  await health.checkGraphQLMicroservicesStatus(servicesToCheck);

  const gqlMicroservices = servicesToCheck.map((service) => {
    return {
      name: service.name,
      url: `${service.url}`,
    };
  });

  return {
    server: {
      cors: true,
    },
    gateway: {
      serviceList: gqlMicroservices,
    },
  };
}
