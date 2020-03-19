import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EndpointCreatedEvent } from './../../../endpoint/events/endpoint-created.event';

@EventsHandler(EndpointCreatedEvent)
export class EndpointCreatedTaskEventHandler
  implements IEventHandler<EndpointCreatedEvent> {
  async handle(event: EndpointCreatedEvent) {
    console.log('Task event handler...');
    console.log(event);
  }
}
