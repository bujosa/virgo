import { ServiceEndpointDefinition } from '@apollo/gateway';
import { GatewayModuleOptions } from '@nestjs/graphql';

export async function gqlModuleInit(): Promise<GatewayModuleOptions> {
  const gqlMicroservices: ServiceEndpointDefinition[] = [
    {
      name: 'Advertisement',
      url: process.env.ADVERTISEMENT_SERVICE_URL,
    },
    {
      name: 'Catalog',
      url: process.env.CATALOG_SERVICE_URL,
    },
    {
      name: 'Certification',
      url: process.env.CERTIFICATION_SERVICE_URL,
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
