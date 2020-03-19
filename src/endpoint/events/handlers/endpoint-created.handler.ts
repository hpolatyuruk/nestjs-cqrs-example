import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EndpointCreatedEvent } from './../endpoint-created.event';

@EventsHandler(EndpointCreatedEvent)
export class EndpointCreatedHandler
  implements IEventHandler<EndpointCreatedEvent> {
  async handle(event: EndpointCreatedEvent) {
    console.log('Endpoint event handler...');
    console.log(event);
  }
}
