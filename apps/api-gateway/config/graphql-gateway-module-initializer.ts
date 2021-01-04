import { ServiceEndpointDefinition } from '@apollo/gateway';
import { GatewayModuleOptions } from '@nestjs/graphql';

export async function gqlModuleInit(): Promise<GatewayModuleOptions> {
  const gqlMicroservices: ServiceEndpointDefinition[] = [
    {
      name: 'Color',
      url: process.env.COLOR_SERVICE_URL,
    },
    {
      name: 'House',
      url: process.env.HOUSE_SERVICE_URL,
    },
  ];

  return {
    server: {
      cors: true,
    },
    gateway: {
      serviceList: gqlMicroservices,
    },
  };
}
