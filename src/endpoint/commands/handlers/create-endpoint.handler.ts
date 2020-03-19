import {
  ICommandHandler,
  CommandHandler,
  EventPublisher,
  EventBus,
} from '@nestjs/cqrs';
import { CreateEndpointCommand } from './../create-endpoint.command';
import { EndpointRepository } from './../../endpoint.repository';
import { Endpoint } from './../../endpoint.entity';
import { EndpointCreatedEvent } from './../../events/endpoint-created.event';

@CommandHandler(CreateEndpointCommand)
export class CreateEndpointHandler
  implements ICommandHandler<CreateEndpointCommand> {
  constructor(
    private readonly endpointRepository: EndpointRepository,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: CreateEndpointCommand): Promise<Endpoint> {
    const { Id, computerName } = command;

    const endpoint = await this.endpointRepository.createEndpoint({
      Id: Id,
      computerName: computerName,
    });
    this.eventBus.publish(
      new EndpointCreatedEvent(endpoint._id, endpoint.computerName),
    );
    return endpoint;
  }
}
