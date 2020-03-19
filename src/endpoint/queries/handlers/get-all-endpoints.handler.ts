import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { EndpointRepository } from './../../endpoint.repository';
import { GetAllEndpointsQuery } from './../get-all-entpoints.query';

@QueryHandler(GetAllEndpointsQuery)
export class GetAllEndpointsQueryHandler
  implements IQueryHandler<GetAllEndpointsQuery> {
  constructor(private readonly endpointRepository: EndpointRepository) {}

  async execute(query: GetAllEndpointsQuery) {
    return this.endpointRepository.find({});
  }
}
