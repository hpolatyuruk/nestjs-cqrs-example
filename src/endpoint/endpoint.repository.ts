import { getMongoManager } from 'typeorm';
import { Endpoint } from './endpoint.entity';
import { MongoRepository, EntityRepository } from 'typeorm';
import { CreateEndpointDTO } from './dto/create-endpoint.dto';

@EntityRepository(Endpoint)
export class EndpointRepository extends MongoRepository<Endpoint> {
  async createEndpoint(
    createEndpointDto: CreateEndpointDTO,
  ): Promise<Endpoint> {
    const { Id, computerName } = createEndpointDto;
    const endpoint = new Endpoint();
    endpoint._id = Id;
    endpoint.computerName = computerName;

    const manager = getMongoManager();
    await manager.save(endpoint);
    return endpoint;
  }
}
