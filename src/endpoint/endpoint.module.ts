import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EndpointController } from './endpoint.controller';
import { CreateEndpointHandler } from './commands/handlers/create-endpoint.handler';
import { EndpointCreatedHandler } from './events/handlers/endpoint-created.handler';
import { GetAllEndpointsQueryHandler } from './queries/handlers/get-all-endpoints.handler';
import { EndpointRepository } from './endpoint.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EndpointRepository]), CqrsModule],
  controllers: [EndpointController],
  providers: [
    CreateEndpointHandler,
    EndpointCreatedHandler,
    GetAllEndpointsQueryHandler,
  ],
})
export class EndpointModule {}
