import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TaskController } from './task.controller';
import { EndpointCreatedTaskEventHandler } from './events/handlers/endpoint-created.handler';

@Module({
  imports: [CqrsModule],
  controllers: [TaskController],
  providers: [EndpointCreatedTaskEventHandler],
})
export class TaskModule {}
