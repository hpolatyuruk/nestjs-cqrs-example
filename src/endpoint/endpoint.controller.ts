import { Controller } from '@nestjs/common';
import { Post, Get, Body } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateEndpointDTO } from './dto/create-endpoint.dto';
import { Endpoint } from './endpoint.entity';
import { CreateEndpointCommand } from './commands/create-endpoint.command';
import { GetAllEndpointsQuery } from './queries/get-all-entpoints.query';

@Controller('endpoints')
export class EndpointController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}
  @Post()
  createTask(@Body() createEndpointDto: CreateEndpointDTO): Promise<Endpoint> {
    const { Id: id, computerName } = createEndpointDto;
    return this.commandBus.execute(new CreateEndpointCommand(id, computerName));
  }

  @Get('/')
  async getAllEndpoints(): Promise<Endpoint[]> {
    return await this.queryBus.execute(new GetAllEndpointsQuery());
  }
}
